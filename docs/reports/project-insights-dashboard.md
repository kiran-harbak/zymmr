---
title: Project Insights Dashboard
description: A comprehensive guide to the Project Insights dashboard in Zymmr, covering top-line metrics, progress tracking, and blockers.
head:
  - - meta
    - name: keywords
      content: dashboard, project insights, reporting, metrics, progress, blockers, zymmr
outline: deep
---

# Project Insights Dashboard

::: info Overview
The Project Insights dashboard provides a comprehensive, real-time view of your project's status and key metrics. It is designed to help you track progress, identify potential issues early, and make data-driven decisions to keep your project on track.
:::

## Top-Line Metrics

This section provides a high-level, at-a-glance summary of the project's health.

-   **Team Size**: The total number of team members currently assigned to the project.
-   **Delayed Tasks**: A count of all work items that are past their due date.
-   **Effort Variance**: The difference between the total estimated effort and the actual time logged, indicating if the project is over or under its effort budget.
-   **Schedule Variance**: The deviation from the planned project schedule, highlighting if the project is ahead or behind schedule.

## Milestone and Overall Progress

This section dives deeper into the project's progress towards major goals and the distribution of work.

### Milestone Progress
A detailed table tracks the status of key milestones.

| Milestone Name | Owner      | Due Date     | Status      | Tasks      |
| -------------- | ---------- | ------------ | ----------- | ---------- |
| *[Milestone 1]*  | *[Name]*    | *[YYYY-MM-DD]*| *[On Track]* | *[Task List]* |
| *[Milestone 2]*  | *[Name]*    | *[YYYY-MM-DD]*| *[At Risk]*  | *[Task List]* |

This section is often accompanied by a pie chart showing the overall status distribution of all work items (e.g., Open, In Progress, Done).

### Overall Progress
This area typically includes a pie chart illustrating the distribution of effort between **functional** and **non-functional** work, helping you understand where your team's time is being spent.

## Blockers

This critical section lists any work items that are currently impeding progress, allowing for quick identification and resolution.

| Key       | Assignee   | Due Date     | Status      | Due Since |
| --------- | ---------- | ------------ | ----------- | --------- |
| `ZYM-123` | John Doe   | `2024-08-01` | `Open`      | 5 days    |
| `ZYM-456` | Jane Smith | `2024-08-05` | `In Review` | 1 day     |

## Current Limitations and Future Developments

We are continuously working to improve the dashboard. Here are some current limitations and upcoming features:
-   The dashboard is currently not customizable.
-   An overall "Project Health" indicator is under development to provide an even quicker summary.

## Example Use Case

### Scenario
You are the project manager for the "Mobile App Development" project and need to prepare for a weekly stakeholder meeting by reviewing the project's status.

### Steps
1.  **View Top-Line Metrics**: You first check the `Delayed Tasks` and `Schedule Variance` to get an immediate sense of the project's health.
2.  **Analyze Milestone Progress**: You then review the milestone table to see which major deliverables are `On Track` or `At Risk`, and check the work item pie chart for overall progress.
3.  **Review Blockers**: Finally, you examine the `Blockers` table to identify any critical issues that need to be escalated or addressed immediately.

::: tip Keep Your Project on Track
By using the Project Insights dashboard regularly, you can effectively monitor your project's progress, manage resources proactively, and address any issues promptly to ensure successful delivery.
:::