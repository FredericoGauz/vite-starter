import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";
import scrollbarPlugin from "@windicss/plugin-scrollbar";

export default defineConfig({
    darkMode: "class",
    safelist: "",
    attributify: true,
    theme: {
        extend: {
            fontFamily: {
                trajan: ["trajan-pro-3", "serif"],
            },
        },
    },
    plugins: [formsPlugin, scrollbarPlugin],
});
