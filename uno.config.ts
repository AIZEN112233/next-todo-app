// @filename uno.config.ts
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
    shortcuts: {
        responsive: "max-w-1440px mx-a px-60px max-md:px-20px",
    },
    presets: [
        presetUno(),
        // ...
    ],
});
