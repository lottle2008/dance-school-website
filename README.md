# 蔷薇花开舞蹈学校官网

秦皇岛蔷薇花开舞蹈学校官方网站，提供课程展示、校区介绍、师资展示、在线试听预约等功能。

基于 Next.js + TypeScript + Tailwind CSS 构建。

## 功能

- **首页展示**：品牌介绍、学员风采、课程亮点、师资团队
- **课程体系**：中国舞 / 现代舞 / 舞蹈美育 / 舞蹈启蒙
- **校区环境**：金街校区 & 珠江道校区
- **在线预约**：填写表单提交试听预约，通过企业微信群机器人实时通知教务
- **管理后台**：`/admin/bookings` 查看所有预约记录

## 项目结构

```
dance-school-website/
├── app/                    # Next.js App Router 页面
│   ├── api/booking/        # 试听预约 API（含企微通知）
│   ├── admin/bookings/     # 预约管理后台
│   ├── about/              # 关于我们
│   ├── campuses/           # 校区环境
│   ├── courses/            # 课程体系
│   ├── privacy/            # 隐私政策
│   ├── layout.tsx          # 根布局（导航 + 底部）
│   ├── page.tsx            # 首页
│   └── globals.css         # 全局样式
├── components/             # React 组件
│   ├── Navbar.tsx          # 顶部导航栏
│   ├── Hero.tsx            # 首页主视觉
│   ├── ShowcaseSection.tsx # 学员风采展示
│   ├── CoursesSection.tsx  # 课程介绍
│   ├── TeachersSection.tsx # 师资团队
│   ├── CampusSection.tsx   # 校区信息
│   ├── BookingForm.tsx     # 试听预约表单
│   ├── Footer.tsx          # 页脚（联系方式）
│   └── ContactFloat.tsx    # 浮动联系按钮
├── lib/data.ts             # 学校、课程、师资等静态数据
├── public/
│   └── images/             # 图片资源（公众号 & 企微二维码）
└── next.config.ts          # Next.js 配置
```

## 本地开发

确保已安装 Node.js 20+ 和 pnpm。

```bash
pnpm install
pnpm dev
```

打开 http://localhost:3000 查看效果。

## 构建

```bash
pnpm build
```

## 部署到 Vercel

1. 将代码推送到 GitHub
2. 访问 https://vercel.com/new 导入仓库
3. Vercel 会自动识别 Next.js 项目并完成部署
4. 后续每次推送代码到 main 分支都会自动重新部署

## 自定义内容

打开 `lib/data.ts`，修改以下信息：

- `SCHOOL_INFO`：机构名称、口号、联系电话、微信号
- `CAMPUSES`：校区地址、电话、开设课程、特色
- `COURSES`：课程介绍与适龄信息
- `TEACHERS`：师资团队介绍
- `SHOWCASES`：学员风采 / 演出 / 考级 / 比赛成果

## 已完成的集成

- [x] 公众号二维码（首页学员风采区）
- [x] 企微二维码（预约成功页）
- [x] 企业微信群机器人通知（预约提交后自动推送文本 + 二维码图片）
- [x] 联系邮箱更新为 `83116191@qq.com`
- [x] 敏感信息移入 `.env.local`（webhook key、学校联系方式）

## 待办事项

- [x] 替换 `components/ContactFloat.tsx` 中的企微渠道码链接为真实链接
- [ ] 将预约数据从内存存储迁移到数据库（Vercel Postgres / MongoDB）
- [ ] 部署后绑定自有域名
- [ ] 注册微信公众号、小程序、微信开放平台，完成四端身份打通

## 注意

当前预约数据存储在内存中，项目重启后会丢失。正式上线前请接入数据库。
