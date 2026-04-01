# React Admin System

中后台管理系统模板项目 / A modern admin system template

## 简介 | Introduction

这是一个基于 **Vite + React + TypeScript** 构建的中后台管理系统模板。它提供了一个轻量级、开箱即用的前端基础架构，集成了众多优秀开源库。
This is a modern admin system template built with **Vite + React + TypeScript**. It provides a lightweight, out-of-the-box frontend infrastructure integrated with excellent open-source libraries.

### 技术栈 | Tech Stack

- **构建工具 | Build Tool:** Vite
- **前端框架 | Framework:** React 18
- **开发语言 | Language:** TypeScript
- **路由管理 | Routing:** React Router v6
- **UI 框架 | UI Framework:** Ant Design v5
- **图表库 | Charting Library:** ECharts & echarts-for-react
- **地图库 | Mapping Library:** Leaflet & React Leaflet (OpenStreetMap 底图)
- **样式工具 | Styling Utility:** Tailwind CSS
- **实用工具 | Utilities:** dayjs (时间处理), clsx & tailwind-merge (类名合并)

## 快速开始 | Getting Started

### 1. 安装依赖 | Install Dependencies

```bash
npm install
```

### 2. 启动开发服务器 | Start Development Server

```bash
npm run dev
```

启动后，访问 `http://localhost:5173/` 即可查看项目。
After starting, visit `http://localhost:5173/` to view the project.

### 3. 构建生产版本 | Build for Production

```bash
npm run build
```

## 目录结构 | Project Structure

```text
src/
├── layouts/       # 页面布局组件 / Layout components
├── pages/         # 业务页面模块 / Business pages
│   ├── Dashboard/ # 仪表盘 / Dashboard
│   └── Users/     # 用户管理 / User management
├── router/        # 路由配置 / Routing configuration
├── App.tsx        # 根组件 / Root component
└── main.tsx       # 项目入口文件 / Entry file
```

## 功能特性 | Features

- ⚡️ **Vite** 提供极速的本地开发服务器和生产构建体验
  Lightning-fast local development server and production builds powered by Vite.
- 📐 **TypeScript** 提供可靠的类型检查和优秀的代码提示
  Strong type checking and excellent intellisense with TypeScript.
- 🎨 **Ant Design** 配合 **Tailwind CSS**，轻松构建现代化后台界面并灵活定制样式
  Build modern admin interfaces easily with Ant Design and customize flexibly with Tailwind CSS.
- 📊 **ECharts** & **Leaflet** 提供了强大的数据可视化与地图展示能力
  Powerful data visualization and mapping capabilities powered by ECharts and Leaflet.
- 📦 **纯粹的开源技术栈** 不包含冗余的封装，方便自定义扩展
  Pure open-source tech stack without redundant wrappers, easy to customize.

---

> If you want to configure ESLint for a production application, please refer to the [Vite documentation](https://vitejs.dev/guide/).
> 如果你需要为生产环境配置 ESLint，请参考 [Vite 官方文档](https://cn.vitejs.dev/guide/)。
