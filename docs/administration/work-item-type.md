---
title: Setup Work Item Types
description: A guide for administrators on how to create, customize, and manage Work Item Types like 'Task', 'Bug', and 'Story' in Zymmr.
head:
  - - meta
    - name: keywords
      content: work item type, issue type, customize, administration, zymmr
outline: deep
---

# Setup Work Item Types

::: info Overview
Work Item Types are the fundamental categories you use to classify tasks and other work within your projects. Customizing types like `Task`, `Bug`, `Epic`, or `Change Request` allows you to tailor Zymmr to your team's specific workflow and terminology, ensuring clarity and consistency across all projects. This feature is managed in **Global Settings** ⚙️.
:::

## 1. The Work Item Types Dashboard

This screen is your central hub for viewing and managing all available Work Item Types in your Zymmr instance.

-   **Search Bar**: Located at the top, this allows you to quickly find a specific work item type by name.
-   **+ Add Work Item Type Button**: The primary button for creating a new category of work.

The dashboard displays all existing types in a table with the following columns:

| Column        | Description                                                                         |
| :------------ | :---------------------------------------------------------------------------------- |
| **NAME**      | The title of the work item type, accompanied by its chosen icon (avatar).           |
| **DESCRIPTION** | A brief explanation of what this type represents or when it should be used.       |
| **ACTIONS**   | A set of icons for managing each individual type: **Edit**, **Clone**, and **Delete**. |

## 2. How to Create a New Work Item Type

Adding a new type to match your team's process is straightforward.

1.  From the main Work Item Types screen, click the **+ Add Work Item Type** button.
2.  The "Add Work Item Type" modal window will appear.
3.  Fill in the required details:

| Field                     | Description                                                                                               |
| :------------------------ | :-------------------------------------------------------------------------------------------------------- |
| **Title** `*`             | Enter a clear and concise name (e.g., "Feature Request", "Technical Debt"). This field is required.        |
| **Description**           | Provide an optional, but highly recommended, description to help users understand the type's purpose.   |
| **Workitem Type Avatar**  | Select an icon and color combination that visually represents this type, making it easy to identify at a glance. |

Once you are satisfied with the details, click the **Save** button. Your new Work Item Type will now appear in the main list.

## 3. Managing Existing Work Item Types

For each type in the list, you have a set of actions available in the "ACTIONS" column.

### Editing a Work Item Type
1.  Find the work item type you wish to modify in the list.
2.  Click the **Edit** (pencil) icon in its row.
3.  The "Edit Work Item Type" modal will appear, pre-filled with the current details.
4.  Make your desired changes to the **Title**, **Description**, or **Avatar**.
5.  Click **Save** to apply the changes.

### Cloning a Work Item Type
Cloning is a quick way to create a new type that is very similar to an existing one.
1.  Find the work item type you want to use as a template.
2.  Click the **Clone** (two pages) icon in its row.

### Deleting a Work Item Type
1.  Find the work item type you wish to delete.
2.  Click the **Delete** (trash can) icon in its row.
3.  A confirmation prompt will appear to prevent accidental deletion. Confirm to proceed.

::: tip Best Practices
-   **Use Clear Names**: Choose names that are universally understood by all your teams.
-   **Don't Overcomplicate**: Start with a small, essential set of types. You can always add more later if a real need arises.
-   **Use Descriptions**: Write clear descriptions to guide users on when to use each type.
:::

::: warning Important Note
You typically cannot delete a Work Item Type that is currently in use by a **Work Item Type Scheme** or is associated with existing work items in any project. You must remove these associations first.
:::
