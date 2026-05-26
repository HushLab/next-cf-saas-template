# Next.js SaaS Template

一个基于 Next.js 16 和 Cloudflare 边缘计算架构的高性能 SaaS 模版项目。

## 🏗️ 项目架构

本项目采用了边缘原生的全栈技术架构，确保极致的响应速度与无缝弹性伸缩：

- **前端框架**: [Next.js 16](https://nextjs.org/) (React 19)
- **部署平台**: [Cloudflare Workers / Pages](https://workers.cloudflare.com/)
- **适配层**: [OpenNext (@opennextjs/cloudflare)](https://opennext.js.org/cloudflare) - 使 Next.js 的全套服务端功能（包含 SSR/ISR）能流畅运行在 Cloudflare Workers 边缘运行时。
- **样式方案**: [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **数据库**: [Drizzle ORM](https://orm.drizzle.team/) + [Cloudflare D1](https://developers.cloudflare.com/d1/) (边缘原生的 SQLite 数据库)
- **对象存储**: [Cloudflare R2](https://developers.cloudflare.com/r2/) (用于临时和归档图片的直传与分发)
- **AI 引擎**: [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/) (集成 `workers-ai-provider` 与 AI SDK)
- **身份认证**: [Better Auth](https://www.better-auth.com/) (支持邮箱/密码登录、注册及 Google 社交登录)
- **包管理器**: [pnpm](https://pnpm.io/)

## 🚀 核心优势

- **全球边缘运行**: 全功能运行在 Cloudflare 的边缘网络节点，具备极低的全球首字节时间 (TTFB)。
- **Serverless 架构**: 零服务器运维成本，根据流量全自动进行弹性伸缩。
- **开箱即用**: 内置了用户认证、数据库同步、API 工具、存储直传、AI 运行等核心基础设施模块。
- **纯净模版**: 无任何特定业务逻辑绑定，只保留纯净的底座架构与标准的通用页面。

## 📂 项目结构

```text
├── drizzle/                    # Drizzle 数据库迁移脚本
├── public/                     # 静态资源文件
├── src/
│   ├── app/
│   │   ├── (auth)/             # 登录、注册模块
│   │   ├── (protected)/        # 受登录态保护的路由模块 (如 /profile, /chat)
│   │   ├── api/
│   │   │   ├── auth/           # Better Auth 的接口处理
│   │   │   └── uploads/        # R2 上传接口
│   │   └── media/              # R2 媒体代理访问路由
│   ├── components/             # 通用 UI 组件与 Layout
│   ├── config/                 # 定价等静态配置文件
│   ├── db/
│   │   ├── client.ts           # Drizzle 数据库客户端初始化
│   │   └── schema.ts           # Drizzle 数据表定义 (当前仅包含 Auth 通用表)
│   ├── lib/
│   │   ├── api/                # API 辅助工具方法
│   │   ├── auth.ts             # Better Auth 核心配置
│   │   ├── r2.ts               # R2 对象存储处理工具
│   │   └── workers-ai.ts       # Cloudflare Workers AI 适配器
│   └── middleware.ts           # Next.js 边缘路由鉴权中间件
├── wrangler.jsonc              # Cloudflare Wrangler 部署配置文件
└── open-next.config.ts         # OpenNext 缓存及适配层配置
```

## 🛠️ 开发指南

### 1. 准备环境变量

复制 `.env.example` 为 `.env` 或 `.dev.vars`，并填入相应的密钥：

```bash
cp .env.example .env
```

* `BETTER_AUTH_SECRET`: Better Auth 的加密盐，可通过命令生成。
* `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`: 谷歌登录授权凭证。

### 2. 本地数据库生成与迁移

生成 Drizzle 迁移文件：
```bash
pnpm db:generate
```

应用迁移至本地 D1 数据库：
```bash
pnpm db:migrate:local
```

### 3. 运行开发服务器

```bash
pnpm dev
```

### 4. 构建与在 Cloudflare 本地预览

```bash
pnpm preview
```

### 5. 部署到 Cloudflare Pages

```bash
pnpm deploy
```
