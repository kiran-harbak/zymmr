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
      { text: "Guide", link: "/introduction/guide-for-zymmr-user" },
      {
        text: "Legal",
        items: [
          { text: "Privacy Policy", link: "/privacy-policy" },
          { text: "Terms of Use", link: "/terms-of-use" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "Guide for Zymmr User",
            link: "/introduction/guide-for-zymmr-user",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/zymmr/zymmr-docker" },
      { icon: "linkedin", link: "https://www.linkedin.com/company/zymmr" },
      { icon: "youtube", link: "https://www.youtube.com/@zymmr" },
      { icon: "x", link: "https://x.com/ZymmrPM" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright:
        "©Copyright 2024. All Rights Reserved - Ziyana Software Private Limited",
    },
  },
});
