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
      {
        text: "Setup",
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
        text: "Guide",
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
      provider: "local", // Change to `algolia` for production use; registration for Algolia DocSearch is already completed.
      options: {
        appId: "YOUR_APP_ID",
        apiKey: "YOUR_SEARCH_ONLY_API_KEY",
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
