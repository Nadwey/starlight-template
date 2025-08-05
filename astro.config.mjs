// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://starlight-template.nadwey.pl",
    vite: {
        // @ts-expect-error: https://github.com/withastro/astro/issues/14030
        plugins: [tailwindcss()],
    },
    integrations: [
        starlight({
            title: "Starlight Template",
            components: {
                PageFrame: "./src/components/overrides/PageFrame.astro",
                PageTitle: "./src/components/overrides/PageTitle.astro",
                Pagination: "./src/components/overrides/Pagination.astro",
                Sidebar: "./src/components/overrides/Sidebar.astro",
                TwoColumnContent: "./src/components/overrides/TwoColumnContent.astro",
            },
            customCss: ["./src/styles/fonts.css", "./src/styles/globals.css", "./src/styles/docs.css"],
            logo: { src: "./src/assets/img/favicon.png", alt: "Starlight Template" },
            favicon: "./favicon.png",
            social: [
                { icon: "github", label: "GitHub", href: "https://github.com/Nadwey/starlight-template" },
            ],
            sidebar: [
                {
                    label: "Welcome",
                    slug: "docs/welcome",
                },
            ],
            expressiveCode: {
                themes: ["slack-dark", "light-plus"],
                plugins: [pluginLineNumbers()],
                defaultProps: {
                    showLineNumbers: false,
                    overridesByLang: {
                        yaml: {
                            showLineNumbers: true,
                        },
                    },
                },
            },
        }),
        react(),
    ],
});
