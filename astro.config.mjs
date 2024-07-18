import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Starlight Template",
            social: {
                github: "https://github.com/Nadwey/starlight-template",
            },
            customCss: [
                "./src/styles/custom.css",
                "./src/fonts/font-face.css",
            ],
            sidebar: [
                {
                    label: "👋 Welcome",
                    link: "/",
                },
            ],
            expressiveCode: {
                plugins: [pluginLineNumbers()]
            }
        }),
    ],
});
