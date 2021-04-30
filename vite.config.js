import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), visualizer()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "material-ui-phone-input",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@material-ui/core/MenuItem",
        "@material-ui/core/TextField",
        "@material-ui/core/InputAdornment",
        "@material-ui/core/Button",
        "@material-ui/core/Menu",
        "@material-ui/core/Divider",
        "@material-ui/core/NativeSelect",
        "@material-ui/styles/withStyles",
      ],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
