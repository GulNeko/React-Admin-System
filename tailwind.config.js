/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 禁用 Tailwind 的基础样式重置，防止与 Ant Design 样式冲突
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      // 在这里可以定义一些和 Antd 统一的设计 token
      colors: {
        primary: '#1677ff', // Ant Design v5 默认主色
      }
    },
  },
  plugins: [],
}
