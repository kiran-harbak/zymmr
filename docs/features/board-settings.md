---
title: Board Settings in Zymmr
description: Learn how to configure and customize the Active Sprint Board, including columns, filters, swimlanes, and card ordering.
head:
  - - meta
    - name: keywords
      content: board settings, customize board, columns, swimlanes, filters, order by, ranking, zymmr
outline: deep
---

# Board Settings in Zymmr

::: info Overview
Board Settings provide powerful configuration options to customize your **Backlog** and **Active Sprint Board**. By tailoring columns, filters, swimlanes, and sorting rules, you can create a board that perfectly visualizes your team's unique workflow and helps you manage work items more effectively.
:::

## Accessing Board Settings

1.  Navigate to your project's **Backlog page,** **Board, or** **Active Sprint Board**.
2.  In the top right corner of the board, click the settings icon (represented by `...`) to open the **Board Settings** configuration page.

## Configuring Board Settings

The settings page is divided into several sections, allowing you to configure different aspects of your board.

### Board Title
You can set or change the title of your board here. A descriptive title is useful when managing multiple boards.

### Filter Options
Choose which work items are visible on the board. This helps in focusing on specific work items.

### Order By
This section determines the default sorting order for work items in each column.

-   **Field**: Choose the attribute to sort by (e.g., `Rank`, `Priority`, `Key Number`, `Created On`).
-   **Direction**: Choose `Ascending` or `Descending`.

::: warning Impact on Drag-and-Drop
If you select any sort order **other than**:
-   **Field**: `Rank`
-   **Direction**: `Ascending`

**You will NOT be allowed to manually drag and drop cards to reorder them.** The board will strictly enforce the sort order you have chosen (e.g., always sorting by Priority). To enable manual ranking, you must set the Order By configuration back to **Rank - Ascending**.
:::

### Board Columns
This is where you map your project's workflow statuses to the board's vertical columns.

-   **Select Columns**: Choose which columns will appear on your board. You can add (`+ Add Board Column`), remove, or reorder columns to match your team's process.
-   **Map Statuses**: For each column, drag and drop the relevant workflow statuses into it. For example, your "In Progress" column might contain the statuses `In Development`, `Code Review`, and `Testing`.

### Swimlanes
Swimlanes are horizontal lanes that group work items across all columns, providing another layer of organization. You can configure swimlanes to group work items based on attributes like:

- **Assigned To**: Creates a separate lane for each team member.
- **Project**: Useful for boards that show items from multiple projects.
- **Priority**: Organizes work into lanes based on priority level (e.g., High, Medium, Low).
- **Work Item Type**: Sorts work items into lanes by their type (e.g., Bug, Feature, Task).

## Saving and Applying Settings

1.  After making your desired configurations, click the **Save** button (there are Save buttons for each major section).
2.  Navigate back to your board to review the updates and ensure it reflects your new settings correctly.

::: info Note
Customizing Board Settings is key to tailoring the board to your project’s specific needs. For details on how to adjust the content displayed on individual cards, please refer to the Board Customize Documentation.
:::

::: warning Limitation
Some advanced configurations, especially those involving project filters or workflow status mapping, may require administrative permissions. If you are unable to access certain options, please consult with your system administrator.
:::