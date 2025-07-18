---
title: Setup Forms
description: A guide for administrators on creating custom forms to capture structured data during workflow transitions in Zymmr.
head:
  - - meta
    - name: keywords
      content: forms, workflow forms, process gates, data collection, administration, zymmr
outline: deep
---

# Forms

::: info Overview
The Forms feature, located in **Global Settings** ⚙️, provides a powerful way to collect specific, structured information at critical points in your project workflows. Instead of just moving a work item from one status to another, you can configure a form to appear, ensuring that users provide necessary details before a transition is completed. This is essential for standardizing data, enforcing compliance, and improving reporting.
:::

## 1. The Forms Dashboard

This screen displays all the custom forms you have created in Zymmr. From here, you can:

-   See a list of all your forms by name.
-   Delete a form using the **Delete** (trash can) icon.
-   Begin creating a new form by clicking the **+ Add Form** button.

## 2. How to Create a New Form

1.  From the Forms dashboard, click the **+ Add Form** button.
2.  The "New Form" modal window will appear.
3.  Provide the basic details for your new form:

| Field           | Description                                                                                                   |
| :-------------- | :------------------------------------------------------------------------------------------------------------ |
| **Form Name** `*` | Enter a clear and descriptive name (e.g., "QA Sign-off Checklist," "Client Approval Form"). This is required. |
| **Description** | Add an optional description to explain the purpose of this form or when it should be used.                      |

Click the **Add** button. The new form will now appear in your Forms list, ready for configuration.

## 3. How to Configure a Form (Adding Fields)

Once a form is created, click on its name in the Forms dashboard to open its configuration screen. This is where you define the specific fields that users will fill out.

-   **Form Title and Description**: The form's title is displayed at the top, and the Description field can be edited here.
-   **Add Fields Section**: This is the core of your form configuration.

To add a field to your form:
1.  **Select a Field Type**: In the first dropdown, choose the type of field you are adding (`System` or `Custom`).
    -   **System**: These are standard, built-in fields that already exist in Zymmr (e.g., `Estimate Effort`, `Reporter`, `Priority`).
    -   **Custom**: This option allows you to select from any custom fields you have defined in your Zymmr instance.
2.  **Select a Field Name**: In the second dropdown, select the specific field you want to include.
3.  **Add the Field**: Click the **Add Field** button to add it to your form's layout.
4.  **Remove a Field**: Click the **trash can** icon next to any added field to remove it from the form.
5.  **Save the Form**: After adding all desired fields, click the main **Save** button to apply your changes.

## 4. How Forms are Used in Workflows

The true power of Forms is realized when you link them to your project workflows.

1.  Navigate to **Workflows** in the global settings.
2.  Select the workflow you wish to modify.
3.  Find the specific **State → Action → Next State** transition where you want the form to appear.
4.  Click the **`...`** (more options) menu next to that transition.
5.  Select **Link Form** from the dropdown options.
6.  Choose the form you created from the list.

Now, whenever a user performs that specific workflow transition, the linked form will pop up, requiring them to fill in the designated fields before the work item can move to the next state.

## 5. Managing Existing Forms

-   **Editing a Form**: To edit the fields within a form, simply click on its **Form Name** from the main dashboard. This opens the configuration screen where you can add or remove fields. Remember to click **Save**.
-   **Deleting a Form**: Click the **Delete** (trash can) icon next to the form name on the Forms dashboard.

::: warning Important Considerations
-   **Data Preservation**: Deleting a form only removes the form *definition*. It does **not** delete any data that may have been collected using that form on existing work items.
-   **Deleting form**: Deleting a form that has associations will throw error, remove these associations so you can delete the form.
:::