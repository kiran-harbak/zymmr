---
title: Filter Functionality in Zymmr
description: Learn how to create, save, and manage complex filters with multiple conditions to refine your views in Zymmr.
head:
  - - meta
    - name: keywords
      content: filter, advanced search, query, operators, multiple conditions, zymmr
outline: deep
---

# Filter Functionality in Zymmr

::: info Overview
The filter functionality in Zymmr is a powerful tool that allows you to refine your views by creating, saving, and managing complex queries. By combining multiple conditions using various operators, you can precisely target the work items you need to see.
:::

## Adding a Filter

1.  Locate the filter controls on the page you wish to filter (e.g., the Project Backlog or Work Items list).
2.  **Choose a Field**: Select the attribute you want to filter by (e.g., `Workflow State`, `Project`, `Priority`).
3.  **Select an Operator**: Choose the comparison operator that fits your needs (e.g., `Equals`, `In`, `Like`).
4.  **Enter a Value**: Input or select the value to complete the condition.
5.  **Add Multiple Conditions**: Click the "Add Condition" button and repeat the steps. Conditions are combined using the **AND** operator to narrow down your results.

## Saving a Filter

For complex queries you use frequently, you can save them for quick access later.

1.  **Set Filter Conditions**: Build your desired filter query as described above.
2.  Click the **Save Filter** button.
3.  In the popup window, enter a descriptive name for your filter (e.g., "My Open High Priority Tasks") and click **Save**.

## Clearing a Filter

To remove all active filter conditions and return to the default, unfiltered view, simply click the **Clear Filter** button.

## Available Operators

| Operator     | Description                                               |
| ------------ | --------------------------------------------------------- |
| `Equals`     | Matches the exact value provided.                         |
| `Not Equals` | Excludes items that match the exact value.                |
| `Like`       | Matches similar values (often used for text searches).    |
| `Not Like`   | Excludes items that match similar values.                 |
| `In`         | Matches any value within a provided list of values.       |
| `Not In`     | Excludes any item that matches a value in the list.       |
| `IS`         | Checks for a specific state, commonly used for `NULL` or `NOT NULL`. |

## Filter Examples

### Example 1: Open Tasks in a Specific Project
- **Condition 1**: `Workflow State` **Equals** `"Open"`
- **Condition 2**: `Project` **Equals** `"Test"`

### Example 2: High Priority Tasks for a Specific Date
- **Condition 1**: `Priority` **Equals** `"High"`
- **Condition 2**: `Start Date` **Is** `"2024-07-28"`

### Example 3: A User's In-Progress Work
- **Condition 1**: `Primary Assignee` **Equals** `"John Doe"`
- **Condition 2**: `Status` **Equals** `"In Progress"`

::: tip Create Custom Views
Save frequently used filters to create personalized views that streamline your daily workflow. This is perfect for quickly accessing tasks assigned to you or monitoring specific project components.
:::
