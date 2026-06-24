---
title: Test Cases
description: Create, organize, and manage test case definitions and test suites in Zymmr Test Management.
head:
  - - meta
    - name: keywords
      content: test cases, test suites, test management, quality assurance, zymmr
outline: deep
---

# Test Cases

::: info Overview
**Test Management** is a Zymmr module for planning, running, and reviewing software tests across your projects. The **Test Cases** page is where you define individual tests, organize them into suites, and start test runs. Open the module from the top navigation → **Test Management**. The default landing page is **Test Cases**.
:::

### Core concepts

| Term | Description |
| :--- | :---------- |
| **Test Case** | A single test definition with a title, steps, expected result, priority, and status, tied to a project. |
| **Test Suite** | A named collection of test cases — similar to a folder for grouping related tests. |
| **Test Cycle** | A planned testing window that can bulk-create executions from a chosen source (suites, work items, sprints, and more). |
| **Test Execution** | One run of one test case — it has a result, an executor, and an execution date. |
| **Direct Execution** | A standalone test run that is not linked to a test cycle. |



## The Test Cases Page

This screen lists all test cases in your projects and provides tools to create, organize, and run tests.

- **Search**: Quickly find a test case by its title.
- **Create Test Case Button**: Opens the form to define a new test case.
- **Add Test Button**: Visible when a suite is selected in the sidebar; adds existing test cases to that suite.
- **Pagination**: Controls at the bottom for navigating through multiple pages of test cases.

The test cases are listed in a table with the following columns:

| Column | Description |
| :----- | :---------- |
| **Key** | The unique test case identifier. **Clicking** the key opens the **detail panel** for that test case. |
| **Title** | The name of the test case. |
| **Project** | The project the test case belongs to. |
| **Status** | The current status: Draft, In Review, Active, or Deprecated. |
| **Priority** | The priority level, drawn from the project's priority list. |
| **Last Result** | The result of the most recent execution, or "Not Run" if it has never been executed. |
| **Last Run** | The date of the most recent execution. |
| **Actions** | **Run** (play icon) to start a test execution, or **Delete** to remove the test case. |

## The Test Suites Sidebar

The left sidebar helps you organize and filter test cases by suite.

- **All Tests**: Shows every test case with no suite filter applied.
- **Individual suites**: Click a suite name to filter the main list to cases in that suite only.
- **Search suites**: Filter the suite list by title.
- **+ Button**: Create a new test suite.

When you hover over a suite, additional actions appear:

- **Play**: Run the entire suite as part of a test cycle.
- **Delete**: Remove the suite (a confirmation prompt is shown).

## How to Create a Test Case

1. From the Test Cases page, click the **Create Test Case** button.
2. The "Create Test Case" modal window will appear.
3. Fill in the required fields:

| Field | Description | Required |
| :---- | :---------- | :------- |
| **Project** | Select the project this test case belongs to. | Yes |
| **Title** | Enter a clear, descriptive name for the test. | Yes |

4. Click **Save** to create the test case.

After creation, open the test case by clicking its **Key** to add a description, precondition, test steps, and other details in the detail panel.

::: tip Add Details After Creation
The quick-create form captures only the essentials. Use the detail panel to add rich-text descriptions, numbered test steps with expected results, and assign the case to one or more suites.
:::

## How to View and Edit a Test Case

Click a test case **Key** in the list to open its detail panel.

### Editable fields

Editable fields require the **Edit Tests** permission on the project. Users without this permission see read-only content.

| Section | Description |
| :------ | :---------- |
| **Priority** | Select from the project's priority list. |
| **Status** | Choose Draft, In Review, Active, or Deprecated. |
| **Suites** | Multi-select the suites this case belongs to. Changes save automatically. |
| **Title** | Edit the test case name. Press **Enter** to save. |
| **Description** | Rich text editor for a detailed overview of the test. |
| **Precondition** | Rich text editor for any setup required before running the test. |
| **Test Steps** | Numbered rows with an **Action** (required) and **Expected Result** for each step. Click **Add Step** to add more. Changes save automatically when you leave a field. |
| **Expected Result** | Rich text editor for the overall expected outcome (separate from per-step results). |

### Tabs

The detail panel includes three tabs:

| Tab | Purpose |
| :-- | :------ |
| **Comments** | Discussion and notes on the test case. |
| **Attachments** | Files related to the test case. |
| **Activity Logs** | A history of changes made to the test case. |

Tab badges show the number of comments and attachments.

## How to Organize Test Cases into Suites

### Create a new suite

1. In the Test Suites sidebar, click the **+** button.
2. Enter a name for the suite and confirm.

### Add existing test cases to a suite

1. Select the target suite in the sidebar.
2. Click the **Add Test** button in the toolbar.
3. The "Add Tests to Suite" modal shows the target suite name.
4. Use the **Test Cases** field (required, multi-select) to search and select cases by key or title.
5. Confirm your selection.

Cases already in the suite are skipped automatically. A message indicates how many cases were added versus skipped.

## How to Run a Test Case

1. Click the **Run** (play) icon in the test case row, or use the **Run** action from the detail panel.
2. The "Run Test Case" modal appears, showing the selected case key and title.
3. Choose how to run the test:

| Field | Description | Required |
| :---- | :---------- | :------- |
| **Run As** | Select **Direct Execution** for a standalone run, or **Test Cycle** to attach the execution to an active cycle. | Yes |
| **Test Cycle** | If you chose **Test Cycle**, select the active cycle from the picker. | Yes (when Run As is Test Cycle) |

4. Confirm to create the execution. You are navigated to the [Test Executions](./test-executions.md) page.

## How to Run an Entire Test Suite

1. Hover over a suite in the Test Suites sidebar and click **Play**.
2. Select an active test cycle from the picker.
3. Executions are created for all test cases in the suite.
4. On success, you are navigated to the [Test Executions](./test-executions.md) page.

## Permissions

| Permission | What it allows |
| :--------- | :------------- |
| **View Tests** | Read test management data across the module. |
| **Edit Tests** | Create, edit, and delete test cases and executions; change results, steps, assignees, and other fields. |

::: info Read-Only Access
Users with **View Tests** but not **Edit Tests** can browse test cases and executions but cannot modify fields or perform create/delete actions.
:::

## Typical Workflows

### Ad-hoc single test

1. Go to **Test Cases** → **Create Test Case**.
2. Open the case and add steps, a precondition, and a description.
3. Click **Run** → choose **Direct Execution**.
4. On [Test Executions](./test-executions.md), open the execution and set the result to Pass, Fail, or Blocked.
5. Review the finished run on [Executed](./executed.md) under **Direct Executions**.

### Suite-based regression

1. Create a suite and **Add Test** cases to it.
2. Hover the suite → click **Run** → pick an active test cycle.
3. Execute and record results on [Test Executions](./test-executions.md).


