import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zymmr",
  description: "A Project Management",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: {
      src: "/logo.png",
      alt: "Zymmr",
      width: 24,
      height: 24,
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/zymmr/zymmr-docker" },
      { icon: "linkedin", link: "https://www.linkedin.com/company/zymmr" },
      { icon: "youtube", link: "https://www.youtube.com/@zymmr" },
      { icon: "x", link: "https://x.com/ZymmrPM" },
    ],
  },
});
