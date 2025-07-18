---
title: Timesheet Report
description: A guide to understanding and using the Timesheet Report in Zymmr to track time logged by users.
head:
  - - meta
    - name: keywords
      content: timesheet, report, time tracking, logged time, user activity, zymmr
outline: deep
---

# Timesheet Report

::: info Overview
The Timesheet Report provides a detailed, comprehensive breakdown of time logged by users across a selected period. It is an essential tool for project managers, team leads, and administrators to monitor team activity, track project effort, and manage resources effectively.
:::

## Accessing the Report

1.  Click **Reports** in the main navigation panel.
2.  Select **Timesheet Report** from the list of available reports.

## Filtering the Report

1.  Click the **Filters** button located on top right side of the page.
2.  Select a pre-saved filter, or create a new one using the **Add filter** button.
3.  Click **Apply** to update the view.

## Navigation 

At the top of the report, you will find powerful filtering options to narrow down the data to your specific needs.

- **Month Navigator**: Use the `<` and `>` arrows to switch between different months (e.g., `< Sep-2024 >`).
- **Time Period Filters**: Use the quick filter buttons to instantly adjust the view:
    - **[Today]**: Jump to the current day.
    - **[Day]**: Display the data in days.
    - **[Week]**: Displays data in weeks (currently unavailable).
    - **[Month]**: Shows data in months (currently unavailable).

## Understanding the Report Table

The main body of the report is a grid that displays logged time data.

### Table Columns

| Column              | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| **User**            | The name of the team member who logged the time.                                |
| **Logged**          | The total time logged by that user for the month.                               |
| **Day**             | Individual columns representing each day of the month. The cell shows the time logged by the user on that specific date. |

### Table Rows

- **User Rows**: Each row corresponds to a single user, showing their logged time across the selected period.
- **Total Row**: The final row at the bottom of the table provides a sum of all time logged by all users for each day and a grand total in the "Logged" column.

### Table Cells

- **Empty Cell**: shows "-" when no timelog is present on that date. Clicking opens **Add Timelog Modal** to add timelog.
- **Cell with value**: shows the value in the selected format from work schedule. Clicking opens a modal showing a list of timelogs on that day as well as a log time button on top right, which opens the same **Add Timelog Modal** that can be used to add timelog.

#### Add Timelog Modal
When you open the modal, you will see the following fields to complete:

| Field           | Description                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| **Work Item**   | Select the task you are logging time against.                                                           |
| **Work Type**   | Categorize the type of work performed.            |
| **Date**        | The date the work was performed. It defaults to today but can be changed within permitted limits.       |
| **Time**        | The amount of time spent. Use the format `6h 45m` where `h` = hours and `m` = minutes.                  |
| **Billable**    | Check this box if the time is billable. This affects project costing reports.                           |
| **Description** | Provide a brief but clear summary of the work you completed during this time.                           |

Once the form is complete, click the **Add** button to save your time log.

::: tip Best Practices for Logging Time
- **Log Daily**: Make it a habit to log your time at the end of each day for the best accuracy.
- **Be Descriptive**: A good description helps project managers understand the progress made.
- **Check Billable Status**: Always confirm if the work should be marked as billable, especially on client projects.
:::

::: warning Data Accuracy
The accuracy of this report is entirely dependent on users logging their time consistently and correctly on their assigned work items. Encourage your team to maintain up-to-date time logs for reliable reporting.
:::