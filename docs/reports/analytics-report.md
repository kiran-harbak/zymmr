---
title: Analytics Reports
description: A comprehensive guide to building, visualizing, and managing custom reports and charts using the Zymmr Analytics builder.
head:
  - - meta
    - name: keywords
      content: analytics, reports, charts, custom reports, query builder, data visualization, zymmr
outline: deep
---

# Analytics Reports

::: info Overview
The Zymmr Analytics Reports feature is a powerful and flexible tool designed to help you query, analyze, and visualize your project data. This guide will walk you through managing your collection of reports, building your data sets, and finally, visualizing them as insightful charts.
:::

## Accessing the Analytics
1. Click **Reports** in the main navigation panel.
2. Select **Analytics** from the list of available reports.

## Stage 1: Managing Your Reports

Your journey begins on the main Reports screen, which provides a paginated overview of all your saved reports.


From this dashboard, you can:
-   See a list of all reports with their **Title**, **ID**, and creation/update dates.
-   Click on any **report's title** to open it in the **builder for viewing or editing**.
-   Perform actions like deleting a report, by clicking on the delete icon for the report.
-   Click **`+ New Report`** to start building a new report from scratch, which will take you to the Report Builder Interface.


## Stage 2: The Report Builder Interface

When you create a new report or edit an existing one, you are presented with the main report builder interface. It is organized into three tabs, each with a specific purpose.

| Tab        | Purpose                                                                                              |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| **Basic**  | Use this for creating simple, tabular reports with raw data.                           |
| **Advanced** | Use this for creating summarized reports by grouping data and performing calculations (`Count`, `Sum`, `Average`, `Max`, `Min`). |
| **Chart**    | Use this to turn your data table (from either the Basic or Advanced tab) into a visual chart.        |

### Key Interface Controls
In the top right corner of the builder, you will find essential controls for managing your report.

-   **Fullscreen/Present**: Presents the current chart or data table in a full-screen, distraction-free view, perfect for meetings and presentations.
-   **Save/Update Report**: Saves the current report configuration. Clicking this opens a modal where you can enter or update the report's **Title**. Click **Save** in the modal to store your report for future use.


## Stage 3: Building Your Data Set

you can tell the system what data to display using the basic tab.

### Using the Basic Tab (For Raw Data)
The Basic tab is your starting point for pulling a straightforward list of data.

-   **Tables**: Select the primary data source for your report (e.g. `Work Item`, `Project`, `Time Log`). You can select multiple tables.
-   **Columns**: Click the **`+`** icon to add the specific fields you want to see, such as (e.g.`Title`, `Project`, `Priority`, and `Status`).
-   **Filters**: Narrow down your results by adding filters. For example, create a filter for `Status Equals "Open"` to see only active work items.
-   **Row Limit**: Set a limit on how many rows are returned to keep performance fast.

After configuring your options, click the **Execute** button to see the resulting data table.

### Using the Advanced Tab (For Summarized Data)
The Advanced tab is **essential** for creating a summary of data. For example, instead of a list of 100 work items, you want to see the *count* of work items per project.

-   **Group By**: This is how you categorize your data. To count items per project, you would `Group By` the `Project` column.
-   **Aggregate**: This is the calculation you perform on each group.
    -   **Function**: Choose a function like `Count`, `Sum`, `Average`, `Min`, or `Max`.
    -   **Column**: Select the column to perform the calculation on.
    -   **Label**: Give your new calculated column a name, like "Total Hours".

After adding your groupings and aggregations, click **Execute** to see the summarized data table. This table will be the source for your chart.


## Stage 4: Visualizing Your Data with the Chart Tab

Once you have generated a data table in either the Basic or Advanced tab, switch to the **Chart** tab to create a visualization.

### Chart Configuration
The Chart tab provides a simple configuration panel to define your chart's appearance.

| Field             | Description                                                                                                   |
| :---------------- | :------------------------------------------------------------------------------------------------------------ |
| **Chart Type**    | Select the type of chart you want to create (e.g. `bar`, `line`, `pie`, `scatter`).                          |
| **x-axis**        | Choose the column for the horizontal axis (e.g. `Project`). |
| **y-axis**        | Choose the **numerical column** for the vertical axis. |
| **stacking-axis** (optional) | A powerful option to subdivide your bars into segments based on a second category. This is typically the column you used in your `Group By` clause (e.g., `Priority`). Does not support pie chart (Chart Type)|



## Report Examples:
These are some examples of commonly used reports

#### Work Item Overview
Shows all work items with their key, title, project, status :
1. Select `Work Item` as base table
2. Add columns: `Key`, `Title`, `Project`, `Status`
3. Optional: Filter by `date` range

#### Team Member Workload
Track assigned tasks per team member:
1. Select `Work Item` as base table
2. Add columns: `Primary Assignee`
3. Group by `Primary Assignee`
4. Aggregate `Count` of `Work Item(key)` with label `WI Count`.


#### Time Tracking Analysis
Review time logged on tasks:
1. Select `Time Log` as base table
2. Add columns: `Work Item`
3. Group by `Work Item`
4. Aggregate `Sum` of `Time` with label `Total Time`.

## Chart Example:
This is an example of a chart where we want to see distribution of work item count in a project according to their priority.

1.  **Prepare the Data (Basic & Advanced Tab)**:
    -   Add `Project` and `Priority` columns
    -   `Group By`: `Project`
    -   `Group By`: `Priority`
    -   `Aggregate`: `Count` of `Work Item(key)` with label `WI Count`.
    -   Click **Execute**.

2.  **Configure the Chart (Chart Tab)**:
    -   **Chart Type**: `bar`
    -   **x-axis**: `Project`
    -   **y-axis**: `WI Count`
    -   **stacking-axis**: `Priority`
    -   Click **Execute Chart**.

The system will generate the stacked bar chart.

::: tip Start with a Question
The best way to build a useful report is to first ask a question, such as "How many bugs were created last month?" or "What is the average time spent per feature?" This question will guide your choices in the builder.
:::
