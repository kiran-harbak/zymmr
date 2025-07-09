import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zymmr",
  description: "A Project Management",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "script",
      {
        defer: true,
        "data-website-id": "67e6d9241399638adc916815",
        "data-domain": "zymmr.vercel.app",
        src: "https://datafa.st/js/script.js",
      },
    ],
  ],
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
          {
            text: "Data Importer",
            link: "/setup/data-importer",
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
        text: "Work Items",
        collapsed: false,
        items: [
          {
            text: "Overview",
            link: "/work-items/",
          },
          {
            text: "Create Work Item",
            link: "/work-items/create",
          },
          {
            text: "Update Work Item",
            link: "/work-items/update",
          },
          {
            text: "Delete Work Item",
            link: "/work-items/delete",
          },
          {
            text: "Comment on Work Item",
            link: "/work-items/comment",
          },
          {
            text: "Export Work Items",
            link: "/work-items/export",
          },
          {
            text: "Manage Work Items",
            link: "/work-items/manage",
          },
          {
            text: "Search with Filters",
            link: "/work-items/search",
          },
          {
            text: "Log Time",
            link: "/work-items/log-time",
          },
          {
            text: "Link Work Items",
            link: "/work-items/link",
          },
        ],
      },
      {
        text: "Features",
        collapsed: false,
        items: [
          { text: "Agile Methodology", link: "/features/agile-methodology" },
          {
            text: "Kanban Project Management",
            link: "/features/kanban-project-management",
          },
          {
            text: "Active Sprint Board",
            link: "/features/active-sprint-board",
          },
          { text: "Board Customization", link: "/features/board-customize" },
          { text: "Board Settings", link: "/features/board-settings" },
          {
            text: "Capacity Planning",
            link: "/features/capacity-planning",
          },
          { text: "Milestones", link: "/features/milestones" },
          {
            text: "Project Costing",
            link: "/features/project-costing",
          },
          {
            text: "Resource Management",
            link: "/features/resource-management",
          },
          { text: "Roadmaps", link: "/features/roadmaps" },
          { text: "Sprint", link: "/features/sprint" },
          { text: "Timesheet", link: "/features/timesheet" },
        ],
      },
      {
        text: "Customizing Zymmr",
        collapsed: false,
        items: [
          {
            text: "Search Work Items",
            link: "/customizing/search-work-item",
          },
          {
            text: "Filter Functionality",
            link: "/customizing/filter-functionality",
          },
          {
            text: "Export Feature",
            link: "/customizing/export-feature",
          },
          {
            text: "Configure Columns",
            link: "/customizing/configure-columns-feature",
          },
          {
            text: "Changing a Work Item Sprint",
            link: "/customizing/changing-sprint-associated-with-work-item",
          },
          {
            text: "Managing Project Backlog",
            link: "/customizing/managing-project-backlog",
          },
          {
            text: "Task Ordering and Lexorank",
            link: "/customizing/task-ordering-and-lexorank",
          },
        ],
      },
      {
        text: "Zymmr Administration",
        collapsed: false,
        items: [
          { text: "User Management", link: "/administration/user-management" },
          { text: "Roles", link: "/administration/roles" },
          { text: "Work Schedule", link: "/administration/work-schedule" },
          {
            text: "Project Categories",
            link: "/administration/project-categories",
          },
          {
            text: "Permission Schemes",
            link: "/administration/setup-permission-schemes",
          },
          { text: "Work Items", link: "/administration/work-items" },
          {
            text: "Work Item Type Schemes",
            link: "/administration/setup-work-item-type-schemes",
          },
          {
            text: "Workflow Schemes",
            link: "/administration/setup-workflow-schemes",
          },
          {
            text: "Custom Fields",
            link: "/administration/setup-custom-fields",
          },
          {
            text: "Outgoing Email Server",
            link: "/administration/setup-outgoing-email-server",
          },
        ],
      },
      {
        text: "Reports and Dashboard",
        collapsed: false,
        items: [
          {
            text: "Project Insights Dashboard",
            link: "/reports/project-insights-dashboard",
          },
          { text: "Hierarchica Reports", link: "/reports/hierarchica-reports" },
          { text: "Gantt Chart", link: "/reports/gantt-feature" },
          { text: "Burn-up Charts", link: "/reports/burnup-charts" },
          { text: "Burn-down Charts", link: "/reports/burndown-charts" },
          { text: "Velocity Charts", link: "/reports/velocity-charts" },
        ],
      },
      /* {
        text: "Smart Features",
        collapsed: false,
        items: [{ text: "Introduction", link: "/smart-features/intro" }],
      }, */
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
