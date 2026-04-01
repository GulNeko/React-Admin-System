import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 开启 gzip 压缩
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // 大于 10kb 的文件进行压缩
      algorithm: "gzip",
      ext: ".gz",
    }),
    // 生产环境打包分析
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    host: "0.0.0.0", // 监听所有地址，方便局域网访问
    cors: true,
    proxy: {
      // 代理配置示例
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    target: "es2015",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境去除 console
        drop_debugger: true, // 生产环境去除 debugger
      },
    },
    rollupOptions: {
      output: {
        // 静态资源分类打包
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          antd: ["antd", "@ant-design/icons"],
          echarts: ["echarts", "echarts-for-react"],
          leaflet: ["leaflet", "react-leaflet"],
        },
      },
    },
  },
});
