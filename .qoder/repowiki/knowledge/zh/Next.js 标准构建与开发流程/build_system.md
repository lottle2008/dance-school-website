该项目采用 Next.js 框架的标准构建体系，依赖 pnpm 进行包管理。

### 1. 构建系统与工具
- **核心框架**: Next.js (v16.2.9)，基于 React 19。
- **包管理器**: pnpm (由 `pnpm-lock.yaml` 确认)。
- **编译与打包**: 使用 `next build` 进行生产环境构建，`next dev` 用于本地开发。
- **语言支持**: TypeScript (v5)，配置了严格模式 (`strict: true`) 和路径别名 (`@/*`)。
- **样式处理**: Tailwind CSS v4，通过 `@tailwindcss/postcss` 集成。
- **代码质量**: ESLint v9，集成 `eslint-config-next` 进行 Next.js 特定规则检查。

### 2. 关键配置文件
- `package.json`: 定义了核心脚本：
  - `dev`: 启动开发服务器。
  - `build`: 构建生产版本。
  - `start`: 启动生产服务器。
  - `lint`: 运行代码检查。
- `next.config.ts`: 当前为空配置，使用默认 Next.js 行为。
- `tsconfig.json`: 配置了模块解析为 `bundler`，启用增量编译和 Next.js 插件。
- `eslint.config.mjs`: 配置了 ESLint，忽略 `.next`, `out`, `build` 等生成目录。

### 3. 架构与约定
- **无自定义构建脚本**: 项目未包含 `Makefile`, `Dockerfile` 或自定义 CI/CD 配置文件（如 `.github/workflows`），完全依赖 Next.js 命令行工具。
- **依赖锁定**: 使用 `pnpm-lock.yaml` 确保依赖版本一致性。
- **类型安全**: 全面使用 TypeScript，并在 `tsconfig.json` 中排除了 `node_modules`。

### 4. 开发者规范
- **构建命令**: 必须使用 `pnpm run build` 进行生产构建，而非 `npm` 或 `yarn`。
- **代码检查**: 提交前应运行 `pnpm run lint` 确保符合 ESLint 规则。
- **路径引用**: 使用 `@/` 前引用内部模块（如 `@/components/Hero`）。
- **环境隔离**: 开发环境与生产环境通过 Next.js 内置机制区分，无需手动配置 Webpack。