---
title: Test Executions
description: Work through pending test runs — direct executions and executions inside active test cycles.
head:
  - - meta
    - name: keywords
      content: test executions, test cycles, direct execution, test management, zymmr
outline: deep
---

# Test Executions

::: info Overview
The **Test Executions** page is where you work through pending test runs. This includes standalone direct executions and executions that belong to active test cycles. Open it from the top navigation → **Test Management** → **Test Executions**.
:::

## The Test Executions Page

This screen lists test executions that are ready to be reviewed and recorded. From here, you can:

- Browse direct executions that have not yet been run.
- Select an active test cycle and work through its pending executions.
- Create new test cycles and add executions to them.
- Record Pass, Fail, or Blocked results for each execution.

## The Test Cycles Sidebar

The left sidebar organizes executions by cycle.

- **Direct Executions** (default): Shows executions with no cycle and a result of **Not Run**.
- **Active cycles**: Lists cycles with a status of **Not Started** or **In Progress**.
- **Search cycles**: Filter the cycle list by title.
- **+ Button**: Create a new test cycle.
- **Delete** (on hover): Remove a cycle (a confirmation prompt is shown).

When a cycle's status moves to Completed, Passed, Failed, or Closed, it disappears from this sidebar and appears on the [Executed](./executed.md) page.

## Direct Executions View

This view is shown when no cycle is selected in the sidebar.

- **Heading**: Direct Executions
- **Subtext**: Not run direct executions ready for review.
- **Search**: Filter executions by test case title.
- **Add Test Execution**: Create a new standalone execution.

::: tip Search behavior
Execution search on this page matches the **test case title**, not the case key.
:::

The executions are listed in a table with the following columns:

| Column | Description |
| :----- | :---------- |
| **Test Case** | The case key (clickable link to the detail panel) and title. |
| **Project** | The project name. |
| **Executor** | The full name of the user who ran the test. |
| **Result** | Not Run, Pass, Fail, or Blocked. |
| **Actions** | **Delete** to remove the execution. |

## Cycle Selected View

When you select a cycle from the sidebar:

- The cycle title is shown with inline editors for **Assignee**, **Status**, and **Start date / End date**.
- The same **Search** and **Add Test Execution** actions appear in the toolbar.
- Changing the cycle status to Completed, Passed, Failed, or Closed removes the cycle from this sidebar.

## How to Create a Test Cycle

1. In the Test Cycles sidebar, click the **+** button.
2. The "Create Test Cycle" modal window will appear.
3. Fill in the cycle details:

| Field | Description | Required |
| :---- | :---------- | :------- |
| **Title** | A descriptive name for the testing window. | Yes |
| **Create Test Executions From** | The execution source that determines which test cases are included (see table below). | Yes |
| **Source-specific picker** | Select the suites, work items, sprint, release, project, or individual test cases depending on the source chosen. | Yes |
| **Assignee** | Optionally assign a user to own the cycle. | No |
| **Start Date** | The cycle start date. Must be on or before the End Date. | No |
| **End Date** | The cycle end date. Must be on or after the Start Date. | No |
| **Status** | Defaults to **Not Started**. | No |

4. Click **Save** to create the cycle.

### Execution sources

| Source | What it includes |
| :----- | :--------------- |
| **Test Cases** | Specific test cases you select. |
| **Test Suites** | All cases in the selected suite(s). |
| **Work Items** | Cases linked to selected work items. |
| **Sprint Work Items** | Cases linked to work items in a sprint. |
| **Release Work Items** | Cases linked to work items in a release. |
| **Project Work Items** | Cases linked to work items in a project. |

::: info Background execution creation
After saving a test cycle, executions are created in the background. The list may take a moment to update after you save.
:::

## How to Add Test Executions

1. Click the **Add Test Execution** button in the toolbar.
2. The "Add Test Executions" modal uses the same execution sources as cycle creation.
3. Optionally set an **Assignee** for the new executions.
4. If a cycle is already selected in the sidebar, it is pre-filled and locked.
5. Confirm your selection.

If executions already exist for the selected cases in that context, a warning is shown before duplicates are created.

## How to Record Test Results

1. Click an execution key or link in the list to open the **Test Execution** detail panel.
2. In the panel header, use the **Result** dropdown to set Pass, Fail, Blocked, or Not Run.

::: tip Auto-fill on result change
Setting Pass, Fail, or Blocked can automatically fill in the **Executor** (current user) and **Execution Date** if they were empty.
:::

3. Update any additional fields as needed (requires **Edit Tests** permission):

| Field | Description |
| :---- | :---------- |
| **Blocker Reason** | Shown only when the result is Blocked. |
| **Executor** | Search and select the user who ran the test. |
| **Execution Date** | Date picker for when the test was executed. |
| **Linked Defect** | Search for a work item (by key or title) to link as a defect. |
| **Linked Work Item** | Search for a related work item. |

### Linked test case (read-only)

The panel also displays the parent test case's precondition, test steps, and expected result. Steps are read-only in the execution panel.

### Tabs

| Tab | Purpose |
| :-- | :------ |
| **Comments** | Discussion and notes on the execution. |
| **Attachments** | Files related to the execution. |
| **Activity Logs** | A history of changes made to the execution. |

## Execution result values

| Result | Badge color |
| :----- | :---------- |
| **Pass** | Green |
| **Fail** | Red |
| **Blocked** | Amber |
| **Not Run** | Gray (default) |

## Lifecycle behavior

- On the **Direct Executions** list, changing a result away from **Not Run** removes the execution from that list. It then appears on the [Executed](./executed.md) page.
- On a cycle list, result changes refresh the cycle's summary counts.

## Test cycle status values

| Context | Status values |
| :------ | :------------ |
| Active (this page) | Not Started · In Progress |
| Executed ([Executed page](./executed.md)) | Completed · Passed · Failed · Closed |

## Typical Workflows

### Planned batch testing (sprint or release)

1. Go to **Test Executions** → click **+** in the sidebar to **Create Test Cycle**.
2. Choose a source such as **Sprint Work Items** or **Release Work Items**.
3. Set dates, an assignee, and change the status to **In Progress**.
4. Work through executions on this page, recording results.
5. Set the cycle status to Completed, Passed, or Failed.
6. Review results on [Executed](./executed.md) using filters and the progress bar.

### Quick single run

1. On [Test Cases](./test-cases.md), click **Run** → choose **Direct Execution**.
2. Open the execution on this page and set Pass, Fail, or Blocked.
3. Review the finished run on [Executed](./executed.md) under **Direct Executions**.

::: warning Deleting executions
Test executions can be deleted from the list view. The execution detail panel header does not include a delete option (unlike test cases).
:::
