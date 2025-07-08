---
title: Setup Custom Fields
description: A comprehensive guide for administrators on creating, configuring, and managing custom fields to extend work items in Zymmr.
head:
  - - meta
    - name: keywords
      content: custom fields, work item fields, form customization, administration, zymmr
outline: deep
---

# Setup Custom Fields

::: info Overview
Custom Fields are a powerful administrative feature in **Global Settings** ⚙️ that allow you to extend Zymmr's work items beyond their default fields. By creating your own fields, you can capture specific information tailored to your organization's unique processes, such as tracking a "Customer ID," a "QA Sign-off" checkbox, or a "Target Release Date."
:::

## The Custom Fields

Navigate to **Global Settings** ⚙️ > **Custom Fields**.This page lists all custom fields that have been created in the system.

- **Search Field**: Quickly find a specific field by its display name.
- **Add Custom Field Button**: Located in the top right, this button begins the multi-step process of creating a new custom field.

The fields are listed in a table with the following columns:

| Column         | Description                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| **Display Name** | The user-friendly name of the field. **Clicking** the name navigates to its **details page for configuration**. |
| **Field Type**   | The type of data the field stores (e.g., `Text`, `Date`, `Number`).                                   |
| **Created**    | The date the field was created.                                                                      |
| **Modified**   | The date the field was last modified.                                                                |
| **Status**     | Indicates if the field is active or inactive.                                                        |

## Creating a New Custom Field

Creating a custom field is a three-step process to ensure it is configured correctly from the start.

### Step 1: Choose a Field Type
1.  From the dashboard, click the **Add Custom Field** button.
2.  You will be taken to the "Add field" page. Select the type of data this field will hold from the available options:
    -   **Text**: For short or long-form text input.
    -   **Check Box**: For a simple true/false or yes/no option.
    -   **Date**: For a date picker.
    -   **Number**: For numerical input.
    -   **Duration**: For time-based input (e.g., `24`).

### Step 2: Name Your Field
1.  After selecting a field type, you are redirected to the "Field name" page.
2.  Enter a clear and descriptive **Display Name** for your field. This is the label users will see on work items.
3.  Click **Save**.

### Step 3: Configure Context
Upon saving the name, you will be automatically taken to the **Custom Field Details** page, where you will define its context.

## Configuring a Custom Field

This is the main page for managing an existing field's details and, most importantly, its context. It contains two tabs.

### Details Tab
This tab shows the basic information for your field.
- **Display Name***: The name of the field, which can be edited here.
- **Field Type**: The field's data type, which is read-only and cannot be changed after creation.
Click **Save** if you make any changes to the display name.

### Context Tab
A **context** defines the "who, what, where, and how" for your custom field—which projects and work item types it appears on, and how it behaves.

1.  Click the **Add Context** button to begin.
2.  A sequential form will appear. You must make selections in order:
    1.  **Select Project(s)**: Choose one or more projects where this field should be available.
    2.  **Select Work Item Type(s)**: After selecting projects, choose the specific work item types (e.g., `Bug`, `Task`) that will display this field.
    3.  **Select Operation**: Choose when the field's specific behavior applies: on the **Create** screen or the **Edit** screen.

Depending on the operation you select, different options will become available:

| Operation | Available Options | Description                                                                    |
| :-------- | :---------------- | :----------------------------------------------------------------------------- |
| `Create`  | `Required`        | Check this box to make this field mandatory when a user creates a work item.   |
| `Edit`    | `Read-only` & `Hidden` | Check `Read-only` to prevent users from editing the field's value after creation. Check `Hidden` to hide the field from the edit view entirely. |

You can add multiple contexts to a single custom field to define different behaviors across different projects or work item types. Once you have configured all desired contexts, click the main **Save** button on the context tab to apply all your changes.

::: tip Best Practices
- **Use Clear Names**: Give your fields intuitive names that users will easily understand.
- **Start Small**: When creating a new field, apply it to a single project or work item type first to test its behavior before rolling it out more widely.
- **Avoid Overuse of "Required"**: Making too many fields required on the creation screen can slow down your team. Use it only for truly essential information.
:::