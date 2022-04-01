# vite-plugin-import-md

## Useage

Create a file whitch named `vite.config.js` or `vite.config.ts`.

```javascript
import { defineConfig } from "vite";
import { imd } from "../src/index";

export default defineConfig({
  plugins: [imd()],
});
```
