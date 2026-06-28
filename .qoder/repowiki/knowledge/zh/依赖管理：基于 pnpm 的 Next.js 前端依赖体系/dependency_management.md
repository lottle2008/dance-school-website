## 1. 核心系统与工具
本项目采用 **pnpm** 作为包管理器，配合 **Next.js** 框架进行依赖管理。通过 `package.json` 声明依赖范围，利用 `pnpm-lock.yaml` 锁定精确版本，确保开发、构建环境的一致性。

- **包管理器**: pnpm (Lockfile Version: 9.0)
- **核心框架**: Next.js 16.2.9
- **UI/样式库**: React 19.2.4, Tailwind CSS 4.x
- **类型系统**: TypeScript 5.x

## 2. 关键配置文件
- **`package.json`**: 定义项目元数据、脚本命令（dev, build, start, lint）以及生产依赖（dependencies）和开发依赖（devDependencies）。
- **`pnpm-lock.yaml`**: 自动生成的锁文件，记录了所有直接和间接依赖的精确版本及完整性哈希（integrity），是 CI/CD 环境中复现依赖树的关键。
- **`tsconfig.json`**: 配置 TypeScript 编译选项，包括模块解析策略（`bundler`）、路径别名（`@/*`）以及 Next.js 插件支持。
- **`next.config.ts`**: Next.js 的核心配置文件，目前保持默认配置，未引入额外的重定向或自定义 Webpack 逻辑。

## 3. 架构与约定
- **依赖分类**: 
  - `dependencies`: 仅包含运行时必需的库，如 `next`, `react`, `lucide-react`。
  - `devDependencies`: 包含构建、类型检查和代码规范工具，如 `typescript`, `eslint`, `tailwindcss`, `@types/*`。
- **路径别名**: 在 `tsconfig.json` 中配置了 `@/*` 指向根目录，简化了组件和模块的导入路径（例如 `import Hero from '@/components/Hero'`）。
- **严格模式**: TypeScript 开启了 `strict: true`，确保代码的类型安全性。

## 4. 开发者规范
- **安装依赖**: 必须使用 `pnpm install` 而非 `npm install`，以匹配项目的锁文件格式并享受 pnpm 的磁盘空间优化。
- **版本更新**: 修改 `package.json` 后应重新运行 `pnpm install` 以更新 `pnpm-lock.yaml`。禁止手动编辑锁文件。
- **私有仓库**: 当前项目未配置 `.npmrc` 或私有 registry，所有依赖均从公共 npm 仓库获取。