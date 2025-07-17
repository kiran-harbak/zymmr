---
title: Setup Work Item Type Schemes
description: A guide for administrators on creating schemes to group Work Item Types and apply them to different projects in Zymmr.
head:
  - - meta
    - name: keywords
      content: work item type scheme, issue type scheme, project configuration, administration, zymmr
outline: deep
---

# Setup Work Item Type Schemes

::: info Overview
While **Work Item Types** define the individual categories of work (`Bug`, `Task`), a **Work Item Type Scheme** is a collection or "package" of these types. Schemes allow you to define different sets of available work types for different kinds of projects, ensuring each project only shows relevant options. This feature is managed in **Global Settings** ⚙️.

For example, a "Software Development" project might use a scheme with `Epic`, `Story`, and `Bug`, while a "Marketing" project uses a scheme with `Campaign` and `Content Piece`.
:::

## 1. The Work Item Type Schemes Dashboard

This screen is your control center for all the schemes in your system. It provides an at-a-glance view of how your work types are grouped.

-   **Search Bar**: Quickly find a specific scheme by its name.
-   **+ Add Work Item Type Scheme Button**: Click this to begin creating a new scheme.

The dashboard displays all configured schemes in a table:

| Column                 | Description                                                                          |
| :--------------------- | :----------------------------------------------------------------------------------- |
| **SCHEME NAME**        | The unique name given to the scheme.                                                 |
| **DESCRIPTION**        | An optional explanation of the scheme's purpose or intended use.                     |
| **MAPPED ISSUE TYPES** | A visual summary of all the Work Item Types included in the scheme, represented by their icons. |
| **ACTION**             | A set of icons for managing each scheme: **Edit**, **Clone**, and **Delete**.          |

## 2. How to Create a New Work Item Type Scheme

Follow these steps to build a new set of work types for your projects.

1.  Click the **+ Add Work Item Type Scheme** button.
2.  The "Add Work Item Type Scheme" modal will open.

### Define the Scheme's Details
-   **Title** `*`: Enter a clear, descriptive name for your scheme (e.g., "Standard Project Scheme," "IT Support Scheme").
-   **Description**: Provide an optional description to clarify when and where this scheme should be used.

### Associate Work Item Types
This is the core of creating a scheme. You will see two lists:

-   **Available Work Item Types**: This list on the right contains all individual work types that exist in Zymmr but are not yet part of this scheme.
-   **Associate Work Item Types**: This list on the left is where you will build your scheme.

To add a type to your scheme, simply click the **`+`** icon next to its name in the "Available" list. It will immediately move to the "Associate" list. To remove a type, click the **`-`** icon next to its name in the "Associate" list.

### Save the Scheme
Once you have added all desired work types to the "Associate" list, click the **Save** button. Your new scheme will now appear on the dashboard.

## 3. Managing Existing Schemes

You can easily modify, duplicate, or delete schemes from the main dashboard using the icons in the "ACTION" column.

### Editing a Scheme
1.  Locate the scheme you want to change and click the **Edit** (pencil) icon.
2.  The "Edit Work Item Type Scheme" modal will appear, pre-filled with its current settings.
3.  Update the **Title**, **Description**, and add or remove types using the `+` and `x` icons.
4.  Click **Save** to apply your changes.

### Cloning a Scheme
Cloning is perfect for creating a new scheme that is similar to an existing one.
1.  Find the scheme you want to duplicate 
2.  click the **Clone** (two pages) icon.

### Deleting a Scheme
1.  Locate the scheme and click the **Delete** (trash can) icon.
2.  Confirm the action when prompted.

::: warning Important Note
You typically cannot delete a Work Item Type Scheme that is  associated with existing work items in any project. You must remove these associations first.
:::