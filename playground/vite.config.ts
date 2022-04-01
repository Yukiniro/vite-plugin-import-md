import { defineConfig } from "vite";
import { imd } from "../src/index";

export default defineConfig({
  plugins: [imd()],
});
