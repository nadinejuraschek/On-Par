import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import eslint from "vite-plugin-eslint";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), eslint(), viteTsconfigPaths()],
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: env.API_SERVER,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});