---
title: Executed
description: Review completed test cycles and finished direct executions in Zymmr Test Management.
head:
  - - meta
    - name: keywords
      content: executed, execution log, test cycles, test results, test management, zymmr
outline: deep
---

# Executed

::: info Overview
The **Executed** page is where you review finished testing work — completed test cycles and direct executions that have been run. Open it from the top navigation → **Test Management** → **Executed**.
:::

## The Executed Page

This screen provides a historical view of your testing activity. From here, you can:

- See summary counts of completed cycles by status.
- Filter cycles by end date and status.
- Review direct executions that have been marked Pass, Fail, or Blocked.
- Drill into a completed cycle to see individual execution results and review progress.

## Summary Cards

Cards at the top of the page count cycles by status:

| Card | Description |
| :--- | :---------- |
| **Executed** | Total across Completed, Passed, Failed, and Closed cycles. |
| **Passed** | Cycles with a **Passed** status. |
| **Failed** | Cycles with a **Failed** status. |
| **Closed** | Cycles with a **Closed** status. |

## Filters

Filters are located in the top right. Changing the status or date range clears the currently selected cycle.

| Filter | Description |
| :----- | :---------- |
| **End from** | Show cycles with an end date on or after the selected date. |
| **End to** | Show cycles with an end date on or before the selected date. |
| **Status** | Filter by All, Completed, Passed, Failed, or Closed. |
| **Clear** | Reset all filters to their defaults. |

## The Executed Cycles Sidebar

The left sidebar lists finished test cycles.

- **Direct Executions**: Reviewed direct runs with a result of Pass, Fail, or Blocked (no cycle attached).
- **Completed cycles**: Cycles filtered by the status, date, and search criteria above.
- **Search cycles**: Filter the cycle list by title.

## Reviewing Direct Executions

This view is shown when no cycle is selected in the sidebar.

- **Result summary chips** at the top show Pass, Fail, and Blocked counts.
- The list displays the following information for each execution:

| Column | Description |
| :----- | :---------- |
| **Test Case** | The case key and title. |
| **Result** | Pass, Fail, or Blocked. |
| **Project** | The project name. |
| **Executor** | The user who ran the test. |
| **Date** | The execution date. |

If no reviewed direct executions are found, an empty state message is displayed.

::: tip Search behavior
When viewing direct executions, cycle search also matches test case titles.
:::

## Reviewing a Completed Test Cycle

1. Select a cycle from the **Executed Cycles** sidebar.
2. The cycle detail view shows:
   - The cycle title and status badge.
   - A **result breakdown** with Pass, Fail, Blocked, and Not Run counts.
   - The **date range** (start → end).
   - A **review progress bar** showing how many executions have been reviewed and the completion percentage.

### Execution list

| Column | Description |
| :----- | :---------- |
| **Test Case** | The case key, which links to the test case detail panel. |
| **Result** | Pass, Fail, Blocked, or Not Run. |
| **Executor** | The user who ran the test. |
| **Execution Date** | When the test was executed. |

If no executions are found for the selected cycle, an empty state message is displayed.

## Execution result values

| Result | Badge color |
| :----- | :---------- |
| **Pass** | Green |
| **Fail** | Red |
| **Blocked** | Amber |
| **Not Run** | Gray |

## How Items Reach This Page

| Source | When it appears here |
| :----- | :------------------- |
| **Direct execution** | The result was changed from **Not Run** to Pass, Fail, or Blocked on the [Test Executions](./test-executions.md) page. |
| **Test cycle** | The cycle status was set to Completed, Passed, Failed, or Closed. |

## How to Review a Completed Cycle

Follow these steps to review the results of a finished test cycle:

1. Finish executing tests on [Test Executions](./test-executions.md).
2. Update the cycle status to **Completed**, **Passed**, or **Failed**.
3. Open **Executed** and select the cycle from the sidebar.
4. Use the summary cards, filters, and progress bar to assess overall results.
5. Click individual execution keys to open the detail panel for more information.

