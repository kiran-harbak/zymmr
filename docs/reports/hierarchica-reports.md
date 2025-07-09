---
title: Hierarchical Reports
description: A structured report showing all work items by sprint, with parent-child hierarchies and aggregated metrics for time and effort.
head:
  - - meta
    - name: keywords
      content: hierarchical report, sprint report, work item hierarchy, backlog audit, time tracking, zymmr
outline: deep
---

# Hierarchical Reports

::: info Overview
The Hierarchical Reports module provides a structured and comprehensive overview of all work items within a selected project. Work items are grouped by sprint and visualized hierarchically based on their parent-child relationships, making this an essential view for sprint reviews, time analysis, and backlog audits.
:::

## Navigation & Controls

The report is controlled by a set of powerful tools located at the top of the page.

1.  **Project Selector**
    Located at the top-right, this dropdown lets you choose the project for which you want to view the report. Once selected, the report automatically loads all related sprints and their associated work items.

2.  **Sprint Selector**
    This dropdown dynamically updates to list only the sprints associated with the selected project. Use it to filter the table and focus on a single sprint. If no sprint is selected, the report displays all sprints.

3.  **Export Button**
    Clicking this button opens a modal allowing you to export the currently visible report data in either **Excel (.xlsx)** or **CSV (.csv)** format.

## Report Table Layout

Each row in the table represents a work item, with sub-tasks visually indented under their parents.

| Column                  | Description                                                                               |
| :---------------------- | :---------------------------------------------------------------------------------------- |
| **Project**             | Displays the name of the selected project.                                                |
| **Sprint**              | Acts as a group header, organizing work items under their respective sprints.             |
| **Type**                | The type of work item (e.g., `Story`, `Task`, `Bug`), configured in admin settings.       |
| **Key**                 | The unique work item identifier (e.g., `D-MS-1`). Clickable to open a side detail view.   |
| **Title**               | The summary of the work item. Sub-tasks are indented to show hierarchy.                   |
| **Parent Key**          | Shows the key of the parent item, if applicable.                                          |
| **Story Points**        | The estimation points assigned directly to this work item.                                |
| **∑ Story Points**      | The aggregated story points, including this item and all of its nested children.          |
| **Logged Time (Secs)**  | The raw time logged on this specific item, displayed in seconds.                          |
| **Logged Time**         | The same logged time shown in a readable format (e.g., `1h`, `22h 30m`).                   |
| **∑ Logged Time**       | The cumulative time logged for this item and all of its nested children.                  |

## The "Unassigned" Work Items Group

A special **"Unassigned"** group automatically appears at the bottom of the report if any work items in the project are not assigned to a sprint.

**Key Points:**
-   This group helps teams easily identify items in the backlog or orphaned tasks.
-   It is always visible in the default view (when no specific sprint is selected from the filter).

::: tip Triage Your Backlog
Use the **Unassigned** group to identify and triage unplanned work. It's the perfect place to find items that need to be prepared for assignment in a future sprint.
:::

## Interactive Features

-   **Clickable Work Item Keys**: Clicking any `Key` opens a side panel with the complete details for that item, including its description, status, time logs, attachments, and linked tasks.
-   **Parent-Child Nesting**: The visual indentation of the `Title` column clearly reflects the task hierarchy.
-   **Aggregated Metrics**: The `∑ Story Points` and `∑ Logged Time` columns automatically roll up totals into parent rows, giving you an accurate summary of effort for entire epics or stories.

## Use Cases

-   **Sprint Planning & Retrospectives**: Review what was planned vs. what was completed.
-   **Backlog Auditing**: Quickly identify all unassigned or orphaned work items.
-   **Estimation vs. Execution**: Compare `Story Points` against `Logged Time` to refine future estimates.
-   **Effort Tracking**: Get a precise, sprint-level breakdown of where team effort is being spent.
-   **Stakeholder Reporting**: Export detailed reports for compliance, client billing, or progress updates.
