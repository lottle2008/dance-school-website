## 1. 核心样式系统
项目采用 **Tailwind CSS v4** 作为核心 CSS 框架，配合 `@tailwindcss/postcss` 插件进行构建。与传统的 `tailwind.config.js` 不同，v4 版本采用了更现代的 CSS-first 配置方式，直接在 `app/globals.css` 中通过 `@theme` 指令定义设计令牌（Design Tokens）。

## 2. 设计令牌与主题规范
在 `app/globals.css` 中定义了全局 CSS 变量，并通过 `@theme inline` 映射到 Tailwind 的命名空间中：
- **色彩系统**：
  - `--background`: `#ffffff` (背景色)
  - `--foreground`: `#0f172a` (前景/文字色，Slate-900)
  - `--primary`: `#db2777` (主色调，Pink-600，用于品牌强调、按钮等)
  - `--primary-dark`: `#be185d` (主色深色变体，Pink-700，用于悬停状态)
  - `--secondary`: `#fdf2f8` (辅助色，Pink-50，用于背景点缀)
- **字体系统**：
  - 使用 `Geist Sans` 作为基础西文字体，并回退到 `PingFang SC` 和 `Microsoft YaHei` 以优化中文显示。
  - 通过 `next/font/google` 自动优化字体加载。

## 3. 视觉风格与组件约定
- **布局策略**：采用响应式设计，主要容器使用 `max-w-7xl` 居中，配合 `px-4 sm:px-6 lg:px-8` 实现多端适配。
- **圆角与阴影**：广泛使用大圆角（`rounded-full`, `rounded-3xl`）和柔和阴影（`shadow-md`, `shadow-xl`）营造亲切、活泼的少儿教育氛围。
- **交互反馈**：按钮和链接均包含 `transition` 属性，悬停时通过颜色变化（如 `hover:bg-pink-700`）提供即时反馈。
- **图标库**：统一使用 `lucide-react` 作为图标解决方案，保持视觉一致性。

## 4. 开发者指南
- **新增样式**：优先使用 Tailwind 实用类。若需扩展主题，请在 `globals.css` 的 `:root` 中定义变量，并在 `@theme` 中注册。
- **色彩使用**：严格遵循 `pink` 色系作为品牌主色，`slate` 色系作为中性色。避免引入未定义的杂色。
- **响应式断点**：遵循 Tailwind 默认断点（sm: 640px, md: 768px, lg: 1024px），在编写布局时注意移动端优先（Mobile-first）原则。