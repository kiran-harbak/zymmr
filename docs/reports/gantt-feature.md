---
title: Gantt Chart
description: An in-depth guide to using Zymmr's interactive Gantt Chart, covering features like inline editing, filtering, grouping, and exporting.
head:
  - - meta
    - name: keywords
      content: gantt, gantt chart, timeline, project schedule, dependencies, inline edit, zymmr
outline: deep
---

# Gantt Chart

::: info Overview
Zymmr’s Gantt Chart report provides a comprehensive, interactive view of your project timeline. It helps you schedule, manage, and monitor specific tasks and resources with precision, making it an essential tool for project planning and execution.
:::

## Key Features

-   **Interactive Task Creation**: Easily add new work items directly from the Gantt view.
-   **Filtering and Grouping**: Customize your view by filtering work items and grouping them by project, milestone, or release.
-   **Multiple View Modes**: Adjust the timeline to a **day**, **week**, or **month** view to suit your planning horizon.
-   **Inline Editing**: Make quick changes to dates, duration, and assignees directly in the Gantt grid.
-   **Dynamic Controls**: Use features like fullscreen, timeline zoom, and row expand/collapse to manage your workspace.
-   **Export Options**: Export your Gantt data to CSV or Excel for reporting and offline analysis.

## Accessing the Gantt Chart

1.  Click **Reports** in the main navigation panel.
2.  Select **Gantt** from the list of available reports.

## Interacting with the Gantt Chart

### Add Work Item
Gantt provides an easy way to add work items for planning and scheduling tasks.

#### From the Toolbar
1.  (Optional) Click on a row to select it. The new work item will be created as a child of the selected row.
2.  Click the **Add** button in the toolbar.
3.  A popup modal will appear. Fill out the required information.
4.  Click **Add** to create the work item.

#### Inline (From a Row)
1.  Hover your mouse over a work item's title in the grid. A plus (`+`) icon will appear.
2.  Click the plus icon to add a new child work item.
3.  Fill out the information in the popup modal.
4.  Click **Add** to create the work item.

### Filter Work Items
Filter the work items to focus on what's most important.

1.  Click the **Filters** button located on the Gantt page.
2.  Select a pre-saved filter, or create a new one using the **Add filter** button.
3.  Click **Apply** to update the view.

::: info Default Filter
By default, the Gantt chart may apply a filter based on the work item's creation date to ensure optimal performance.
:::

### Group Work Items By
Group work items to organize your view logically.

1.  Click on the **Group by** dropdown located on the Gantt page.
2.  Select your preferred grouping option: `Project`, `Milestones`, or `Releases`.

::: info Default Grouping
By default, work items are grouped by **Project**.
:::

### Toolbar Controls

#### View Modes
Day, Week, and Month view modes are provided for ease of use, making it easier to manage the timeline. You can change the view mode by clicking one of the available options in the toolbar.

#### Timeline Zoom
Zoom options in the toolbar help you adjust the timeline's scale. Click the **Zoom In**, **Zoom Out**, or **Zoom to Fit** options to change the view.

#### Row Expand / Collapse All
Instead of manually expanding or collapsing each hierarchy, you can use the toolbar buttons to **Expand All** or **Collapse All** rows at once.

#### Fullscreen
Click the **Fullscreen** icon to maximize the Gantt chart to your entire screen for a more immersive view. Click it again to exit.

#### Search Work Item
The search functionality helps you quickly find specific items.
1.  Click into the search input box present on the toolbar and type your query.
2.  Click the **Search** button.
3.  To clear the search, click the **Clear search** button.

::: info Note
The search is performed on the work item's title.
:::

### Export Options
You can export the current Gantt view data by clicking the **Export** button on the toolbar and selecting either **CSV** or **Excel** format.

### Inline Editing
Zymmr's Gantt chart allows you to make quick adjustments directly in the grid, making it easy to manage tasks without leaving the view.

#### Start / End Dates
1.  **Double-click** the `Start Date` or `End Date` cell for the work item you wish to edit.
2.  Select a new date from the calendar picker.
3.  Click outside the cell or press **Enter** to save the change.

::: info End Date Editing
The `End Date` can only be edited directly for leaf work items (work items with no child work items). Parent work item dates are calculated from their children.
:::

#### Duration
1.  **Double-click** the `Duration` cell for the work item.
2.  Enter a new duration value.
3.  Click outside the cell or press **Enter** to save.

#### Primary Assignee
1.  **Click** on the `Primary Assignee` cell for the work item.
2.  Select a new user from the dropdown list.

::: info Available Users
The list of available users in the assignee dropdown is specific to the members of that work item's project.
:::