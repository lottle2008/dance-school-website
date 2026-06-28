import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface BookingRecord {
  id: string;
  parentName: string;
  phone: string;
  childName?: string;
  childAge: string;
  campus: string;
  course: string;
  note?: string;
  createdAt: string;
}

// MVP 阶段使用内存存储，重启后数据会丢失。
// 正式上线后请替换为数据库（如 Vercel Postgres、MongoDB 等）。
const bookings: BookingRecord[] = [];

const WEBHOOK_URL =
  "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=73cf4c9f-5c01-4ad6-b24a-4c6026d51fe0";
const WEBHOOK_KEY = "73cf4c9f-5c01-4ad6-b24a-4c6026d51fe0";

/** 上传二维码图片并发送到企业微信群 */
async function sendWechatQrCode() {
  try {
    const imagePath = path.join(process.cwd(), "public", "images", "wechat.jpg");
    const imageBuffer = fs.readFileSync(imagePath);
    const blob = new Blob([imageBuffer], { type: "image/jpeg" });
    const formData = new FormData();
    formData.append("media", blob, "wechat.jpg");

    // 1. 上传图片获取 media_id
    const uploadRes = await fetch(
      `https://qyapi.weixin.qq.com/cgi-bin/webhook/upload_media?key=${WEBHOOK_KEY}&type=file`,
      { method: "POST", body: formData }
    );
    const uploadData = await uploadRes.json();
    if (!uploadData.media_id) {
      console.error("企业微信图片上传失败:", uploadData);
      return;
    }

    // 2. 发送图片消息
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        msgtype: "image",
        image: { media_id: uploadData.media_id },
      }),
    });
  } catch (err) {
    console.error("企业微信二维码图片发送失败:", err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { parentName, phone, childName, childAge, campus, course, note } = body;

    if (!parentName || !phone || !childAge || !campus || !course) {
      return NextResponse.json(
        { success: false, message: "缺少必填字段" },
        { status: 400 }
      );
    }

    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: "手机号格式不正确" },
        { status: 400 }
      );
    }

    const record: BookingRecord = {
      id: `bk_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      parentName: parentName.trim(),
      phone: phone.trim(),
      childName: childName?.trim() || "",
      childAge,
      campus,
      course,
      note: note?.trim() || "",
      createdAt: new Date().toISOString(),
    };

    bookings.unshift(record);

    // 发送企业微信群机器人通知（不阻塞主流程）
    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        msgtype: "markdown",
        markdown: {
          content: `## 🩰 新试听预约\n> **家长**：${record.parentName}\n> **电话**：${record.phone}\n> **孩子**：${record.childName || "未填写"}\n> **年龄**：${record.childAge}\n> **校区**：${record.campus}\n> **课程**：${record.course}\n> **备注**：${record.note || "无"}\n> **时间**：${record.createdAt}`,
        },
      }),
    }).catch((err) => console.error("企业微信文本通知失败:", err));
    sendWechatQrCode();

    return NextResponse.json(
      {
        success: true,
        message: "预约成功",
        data: { id: record.id },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("预约提交失败:", error);
    return NextResponse.json(
      { success: false, message: "服务器错误，请稍后重试" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: true, data: bookings },
    { status: 200 }
  );
}
