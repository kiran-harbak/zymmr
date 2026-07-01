---
title: Wiki Spaces Administration
description: A guide for administrators on viewing, searching, creating, and managing Wiki spaces in Zymmr.
head:
  - - meta
    - name: keywords
      content: wiki spaces, knowledge base, space key, project wiki, visibility, administration, zymmr
outline: deep
---

# Wiki Spaces Administration

::: info Overview
The Wiki Spaces administration page lets administrators manage the knowledge spaces available in Zymmr. Use this page to review all spaces, check ownership and visibility, create new spaces, and open existing spaces for updates.
:::

## 1. How to Access Wiki Spaces

To open the Wiki Spaces administration page:

1. Navigate to **Global Settings**.
2. In the left sidebar, expand **Wiki**.
3. Select **Spaces**.

The page displays the **Wiki Spaces** dashboard with a searchable table of spaces.

## 2. The Wiki Spaces Dashboard

The dashboard provides an administrator-level view of all wiki spaces in the instance.

- **Search Field**: Filters spaces by name, key, description, owner, or related project.
- **Templates Button**: Opens the Wiki Templates administration page.
- **New Space Button**: Starts the process of creating a new wiki space.
- **Spaces Table**: Lists the spaces available to the administrator.

The spaces table includes the following columns:

| Column | Description |
| :----- | :---------- |
| **Space** | The space icon and name. Click the space name to open or manage that space. |
| **Key** | A short identifier used to recognize the space and build its URL. |
| **Description** | A short summary of the space's purpose, if one has been added. |
| **Project** | The project linked to the space, if the space is project-specific. |
| **Owner** | The user who owns or created the space. |
| **Visibility** | Shows whether the space is **Public** or limited to a **Project**. |

If the list is long, use the pagination controls at the bottom of the table to move between pages.

## 3. Creating a New Wiki Space

Create a new space when a team, department, or project needs its own knowledge base.

1. From the **Wiki Spaces** dashboard, click **New Space**.
2. Enter the space details:

| Field | Description | Required |
| :---- | :---------- | :------- |
| **Title** | The display name of the space. | Yes |
| **Space Key** | A short uppercase key for the URL. Zymmr can generate this from the title, and you can edit it before saving. | Yes |
| **Description** | A short explanation of the space's purpose. | No |
| **Icon** | An optional emoji used in the spaces list and sidebar. If left blank, Zymmr uses the default wiki icon. | No |
| **Project** | Optionally link the space to a project. The project selector is searchable and can be cleared. | No |

3. Save the space.

After the space is created, it appears in the spaces list and can be opened from the **Space** column.

::: tip Space Planning
Create separate spaces for long-lived areas of knowledge, such as departments, product areas, or projects. Use pages and child pages inside a space for individual topics.
:::

## 4. Managing Existing Spaces

Administrators can use the spaces list to review and maintain existing wiki spaces.

### Opening a Space

Click the space name in the **Space** column to open it. From there, administrators can review its pages and update space-level details if changes are needed.

### Searching for a Space

Use the **Search** field when the instance contains many spaces. Search is useful for finding spaces by title, key, project, owner, or visibility.

### Reviewing Visibility

Check the **Visibility** column before sharing space links:

- **Public** spaces are intended for general access by authenticated users.
- **Project** spaces are tied to a project and should be used for project-specific documentation.

## 5. Related Wiki Administration

Use **Templates** from the top-right action area to manage reusable page templates. Templates give users a consistent starting point when they create wiki pages.

For template setup, see [Wiki Templates Administration](./wiki-templates.md).

::: warning Administrative Access
Only users with the required administrator permissions can access the Wiki administration pages. Changes made here can affect how teams create, find, and access wiki content.
:::
