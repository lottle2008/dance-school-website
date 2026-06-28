"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, Loader2, MapPin, User, Phone, Baby, MessageSquare } from "lucide-react";
import { CAMPUSES, COURSES, SCHOOL_INFO } from "@/lib/data";

interface FormData {
  parentName: string;
  phone: string;
  childName: string;
  childAge: string;
  campus: string;
  course: string;
  note: string;
}

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    parentName: "",
    phone: "",
    childName: "",
    childAge: "",
    campus: "",
    course: "",
    note: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.parentName || !form.phone || !form.childAge || !form.campus || !form.course) {
      setError("请填写完整预约信息");
      return;
    }

    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(form.phone)) {
      setError("请输入正确的手机号");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("提交失败");
      setSubmitted(true);
    } catch (err) {
      setError("预约提交失败，请直接拨打" + SCHOOL_INFO.phone + "联系我们");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-bold text-slate-900">预约成功！</h3>
        <p className="mt-2 text-slate-600">
          我们的教务老师会在 24 小时内联系您安排试听，请保持手机畅通。
        </p>
        <div className="mt-6 rounded-xl bg-white p-4 text-left text-sm text-slate-600 shadow-sm">
          <p className="font-semibold">您也可以直接扫码加教务微信，快速确认时间：</p>
          <div className="mt-3 flex items-center gap-4">
            <div className="h-24 w-24 overflow-hidden rounded-lg bg-white p-1 shadow-sm">
              <Image
                src="/images/qiwei.png"
                alt="企微二维码"
                width={88}
                height={88}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-xs text-slate-500">
              截图后用微信扫一扫添加，备注"官网试听+孩子姓名"
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="booking" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">预约试听</h2>
            <p className="mt-4 text-lg text-slate-600">
              填写以下信息，即可为孩子预约一节体验课。试听后不满意，无任何费用。
            </p>
            <ul className="mt-8 space-y-4 text-slate-600">
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600">
                  1
                </span>
                专业老师一对一测评孩子身体条件
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600">
                  2
                </span>
                根据年龄和兴趣推荐合适舞种
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-600">
                  3
                </span>
                试听结束即可领取舞蹈小礼品
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg sm:p-8"
          >
            {error && (
              <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                  <User className="h-4 w-4 text-pink-500" /> 家长姓名
                </label>
                <input
                  name="parentName"
                  value={form.parentName}
                  onChange={handleChange}
                  placeholder="请输入家长姓名"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                  <Phone className="h-4 w-4 text-pink-500" /> 联系电话
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="请输入手机号"
                  maxLength={11}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                  <Baby className="h-4 w-4 text-pink-500" /> 孩子姓名
                </label>
                <input
                  name="childName"
                  value={form.childName}
                  onChange={handleChange}
                  placeholder="请输入孩子姓名（选填）"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                  <Baby className="h-4 w-4 text-pink-500" /> 孩子年龄
                </label>
                <select
                  name="childAge"
                  value={form.childAge}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                >
                  <option value="">请选择年龄</option>
                  <option value="3-4">3-4 岁</option>
                  <option value="5-6">5-6 岁</option>
                  <option value="7-9">7-9 岁</option>
                  <option value="10-12">10-12 岁</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                  <MapPin className="h-4 w-4 text-pink-500" /> 意向校区
                </label>
                <select
                  name="campus"
                  value={form.campus}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                >
                  <option value="">请选择校区</option>
                  {CAMPUSES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                  <MessageSquare className="h-4 w-4 text-pink-500" /> 意向课程
                </label>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                >
                  <option value="">请选择课程</option>
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 space-y-1.5">
              <label className="text-sm font-medium text-slate-700">备注（选填）</label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                rows={3}
                placeholder="例如：孩子是否有舞蹈基础、希望试听的时段等"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-pink-700 disabled:opacity-70"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {loading ? "提交中..." : "立即预约试听"}
            </button>

            <p className="mt-3 text-center text-xs text-slate-500">
              提交即表示您同意我们的{" "}
              <a href="/privacy" className="text-pink-600 hover:underline">
                隐私政策
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
