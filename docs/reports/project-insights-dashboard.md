---
title: Project Insights Dashboard
description: An interactive analytics dashboard providing real-time visibility into the health and progress of your top active projects.
head:
  - - meta
    - name: keywords
      content: dashboard, analytics, project insights, variance analysis, project health, reports, zymmr
outline: deep
---

# Project Insights Dashboard

::: info Overview
The Project Insights Dashboard is an analytics interface that provides visibility into your projects. Designed for project managers, team leads, and stakeholders, it offers rich insights into team structure, task progress, schedule/effort variances, and resource utilization.
:::

## Accessing the Project Insights
1. Click **Reports** in the main navigation panel.
2. Select **Project Insights** from the list of available reports.

## Dashboard Widgets

The dashboard is composed of several interactive widgets, each designed to answer a key question about your project portfolio.

### 1. Team Size by Project

| Visual Type   | Purpose                                                    |
| :------------ | :--------------------------------------------------------- |
| Horizontal bar chart | Displays the number of active contributors in each project. |

Projects are listed vertically, with their total headcount shown in horizontal bars. This widget is perfect for comparing team allocation and size across your most active initiatives at a glance.

### 2. Task Status Overview

| Visual Type          | Purpose                                                       |
| :------------------- | :------------------------------------------------------------ |
| Stacked vertical bar chart | Provides an overview of task completion statuses across projects. |

Each project appears along the X-axis, with a stacked bar showing the count of tasks segmented by their current status (e.g., “Completed,” “In Progress,” “Delayed,” “No End Date”). This helps you quickly identify project bottlenecks or delays by status category.

### 3. Enhanced Variance Analysis

| Visual Type                | Purpose                                                          |
| :------------------------- | :--------------------------------------------------------------- |
| Interactive scatter/bar chart | Compares how actual project efforts and timelines deviate from plans. |

This powerful widget has two distinct modes for analysis:

#### Pattern Mode (Default View)
Visualized as a scatter plot where each bubble represents a project.
- **X-axis**: Schedule Variance (in days)
- **Y-axis**: Effort Variance (in hours)

The placement of bubbles reveals performance clusters:
- **Top-right**: Delayed and over budget.
- **Center**: On track.
- **Bottom-left**: Ahead of schedule and under effort.

#### Comparison Mode
Triggered by clicking the **Comparison** button, this mode displays a dual-bar view for each project, showing exact variance values.
- **Purple bars**: Schedule variance (positive = overrun, negative = underrun).
- **Orange bars**: Effort variance (positive = overrun, negative = underrun).

::: tip Use Case
While **Pattern Mode** gives an instant overview of performance trends, **Comparison Mode** is best for precise benchmarking and detailed variance auditing.
:::

### 4. Project Progress Overview

| Visual Type        | Purpose                                                                 |
| :----------------- | :---------------------------------------------------------------------- |
| Stacked bar chart | Shows overall project completion percentage based on work item counts. |

Each project's bar on the X-axis breaks down the percentage contribution of individual work item types (e.g., `Task`, `Epic`, `Story`). A cumulative progress percentage and item count (e.g., "17.9% — 189/684 items complete") provides a clear summary of completion.

### 5. Overall Efforts Analysis

| Visual Type          | Purpose                                                               |
| :------------------- | :-------------------------------------------------------------------- |
| Stacked vertical bar chart | Displays the distribution of logged hours across work categories. |

This chart is especially useful for analyzing where teams are investing most of their time. Categories like `Development`, `Testing`, and `Meetings` are color-coded, with project bars showing the total time logged for each.


## Dashboard Filters

Located in the top right corner, filters allow you to refine the entire dashboard.

## Key User Benefits

-   **Centralized Health View**: Get a single, comprehensive view of project health across all active initiatives.
-   **Proactive Variance Analysis**: Catch delays or budget overruns early before they become critical issues.
-   **Visual Resource Planning**: Understand team distribution and workload for better planning and balancing.

::: tip Hover for Details
You can hover over any chart segment, bar, or point on the dashboard widgets. A tooltip will appear, providing you with all the related details and exact figures for that data point.
:::

::: warning Dynamic and Configurable
The **work item types** and **completion statuses** displayed in the charts are configured by your administrator in **Global Settings**. Your dashboard will adapt to reflect your organization’s unique setup, so it may appear different from the examples shown.
:::