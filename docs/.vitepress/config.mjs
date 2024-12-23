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
      { text: "Docs", link: "/introduction/guide-for-zymmr-user" },
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
        collapsed: false,
        items: [
          {
            text: "Guide for Zymmr User",
            link: "/introduction/guide-for-zymmr-user",
          },
        ],
      },
      {
        text: "Setup",
        collapsed: false,
        items: [
          {
            text: "Overview",
            link: "/setup/",
          },
          {
            text: "Installation",
            link: "/setup/installation",
          },
          {
            text: "Data Migration",
            link: "/setup/data-migration",
          },
        ],
      },
      {
        text: "Zymmr User",
        collapsed: false,
        items: [
          {
            text: "Login",
            link: "/user/login",
          },
          {
            text: "Dashboard",
            link: "/user/dashboard",
          },
        ],
      },
      {
        text: "Zymmr Project",
        collapsed: false,
        items: [
          {
            text: "Overview",
            link: "/projects/",
          },
          {
            text: "Creating Project",
            link: "/projects/creating-projects",
          },
          {
            text: "Adding Users",
            link: "/projects/adding-users",
          },
          {
            text: "Project Permissions",
            link: "/projects/project-permissions",
          },
          {
            text: "Modules",
            link: "/projects/modules",
          },
          {
            text: "Milestones",
            link: "/projects/milestones",
          },
          {
            text: "Releases",
            link: "/projects/releases",
          },
          {
            text: "Project Settings",
            link: "/projects/project-settings",
          },
        ],
      },
      {
        text: "Guide",
        collapsed: false,
        items: [
          {
            text: "FAQ",
            link: "/guide/faq",
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

    search: {
      provider: "algolia",
      options: {
        appId: "S5B9CWHHEM",
        apiKey: "0413e072f85108903d3ea8b4c2064974",
        indexName: "zymmr",
        locales: {
          root: {
            placeholder: "Search docs",
            translations: {
              button: {
                buttonText: "Search docs",
                buttonAriaLabel: "Search docs",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "Clear the query",
                  resetButtonAriaLabel: "Clear the query",
                  cancelButtonText: "Cancel",
                  cancelButtonAriaLabel: "Cancel",
                },
                startScreen: {
                  recentSearchesTitle: "Recent",
                  noRecentSearchesText: "No recent searches",
                  saveRecentSearchButtonTitle: "Save this search",
                  removeRecentSearchButtonTitle:
                    "Remove this search from history",
                  favoriteSearchesTitle: "Favorite",
                  removeFavoriteSearchButtonTitle:
                    "Remove this search from favorites",
                },
                errorScreen: {
                  titleText: "Unable to fetch results",
                  helpText: "You might want to check your network connection.",
                },
                footer: {
                  selectText: "to select",
                  navigateText: "to navigate",
                  closeText: "to close",
                  searchByText: "Search by",
                },
                noResultsScreen: {
                  noResultsText: "No results for",
                  suggestedQueryText: "Try searching for",
                  reportMissingResultsText:
                    "Believe this query should return results?",
                  reportMissingResultsLinkText: "Let us know.",
                },
              },
            },
          },
        },
      },
    },
  },
});
