import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "NadArenas",
            social: {
                github: "https://github.com/Nadwey/NadArenas",
            },
            customCss: [
                // Relative path to your custom CSS file
                "./src/styles/custom.css",
                "./src/fonts/font-face.css",
            ],
            sidebar: [
                {
                    label: "👋 Welcome",
                    link: "/",
                },
                {
                    label: "✨ Features",
                    link: "/features",
                },
                {
                    label: "Configuration",
                    autogenerate: { directory: "configuration" },
                },
                {
                    label: "For Developers",
                    autogenerate: { directory: "developers" },
                },
            ],
            expressiveCode: {
                plugins: [pluginLineNumbers()]
            }
        }),
    ],
});
