---
title: Wiki Spaces
description: A guide to finding, creating, switching, and managing Wiki spaces in Zymmr.
head:
  - - meta
    - name: keywords
      content: wiki spaces, knowledge base, space key, project wiki, zymmr
outline: deep
---

# Wiki Spaces

:::: info Overview
The **Wiki** module is a shared knowledge base for teams using Zymmr. A **space** is a container for related pages, such as release notes, project documentation, team processes, test notes, or company knowledge. Open the module from the top navigation bar by clicking **Wiki**.
::::

## Core Concepts

| Term | Description |
| :--- | :---------- |
| **Space** | A container for related wiki pages. Each space has a title, key, optional description, icon, and optional project link. |
| **Space Key** | A short identifier used in the space URL. |
| **Project-linked Space** | A space associated with a specific project, usually for project-specific documentation. |
| **Page Tree** | The sidebar inside a space that lists the pages in that space. |

For creating, editing, and organizing pages inside a space, see [Wiki Pages](./pages.md).

## The Wiki Landing Page

When you open **Wiki** from the main navigation, Zymmr shows the Wiki spaces list. The page title appears at the top left. The **Search** field and **New Space** button appear at the top right.

The spaces table includes these columns:

| Column | Description |
| :----- | :---------- |
| **Space** | The space icon and title. Clicking a row opens that space. |
| **Key** | A short identifier used in the space URL. |
| **Description** | Optional summary of what the space is for. |
| **Project** | The linked project, if the space is scoped to one. |

Use **Search** to filter spaces by title, key, or description. If many spaces are available, pagination controls appear below the table.

## Creating a Wiki Space

1. From the Wiki landing page, click **New Space**.
2. Enter the space details:

| Field | Description | Required |
| :---- | :---------- | :------- |
| **Title** | The display name of the space. | Yes |
| **Space Key** | A short uppercase key for the URL. Zymmr can generate this from the title, and you can edit it before saving. | Yes |
| **Description** | A short explanation of the space's purpose. | No |
| **Icon** | An optional emoji used in the spaces list and sidebar. If left blank, Zymmr uses the default wiki icon. | No |
| **Project** | Optionally link the space to a project. The project selector is searchable and can be cleared. | No |

3. Click **Create**.

After the space is created, Zymmr opens the new space automatically.

:::: tip Space Key Guidelines
Use a concise key that is easy to recognize, such as `ENG`, `HR`, or `QA`. Space keys should use uppercase letters and numbers only.
::::

## Working Inside a Space

A wiki space has a left sidebar and a main page area.

- **Space header**: Shows the current space icon and title at the top of the sidebar. Click it to switch spaces or return to **View all spaces**.
- **Page tree**: Lists the pages in the current space. Parent pages can be expanded or collapsed.
- **New page**: Located at the bottom of the sidebar for creating a top-level page.
- **Main content area**: Shows breadcrumbs, the page title, last edited details, page content, and the **Edit** button.
- **Page footer sections**: Tags, attachments, and comments appear below the page content.

Click a page in the tree to open it. The URL updates to include the space key and page slug, so you can bookmark or share the page link.

## Switching Spaces

Click the space header at the top of the sidebar to open the space switcher. The current space is marked with a checkmark. Select another space to open it and load its page tree.

Use **View all spaces** in the switcher to return to the Wiki landing page.

## Permissions and Visibility

Wiki access depends on the space type and project link:

- **Public spaces** can be read by authenticated Zymmr users.
- **Project-linked spaces** are available to users who belong to the linked project.
- **Administrators** can access and manage spaces across the instance.

Users who do not have access to a project-linked space may be blocked from editing, commenting, tagging, or deleting content in that space.

## Administrator Features

Administrators can manage Wiki spaces from **Administrator** -> **Wiki**.

The admin Wiki spaces page lists spaces with details such as space, key, description, project, owner, and visibility. Administrators can search, paginate, create spaces, and open a space from the list.

For the full administrator workflow, see [Wiki Spaces Administration](../administration/wiki-spaces.md).

Use **Templates** from the admin Wiki area to manage reusable page templates. For template administration, see [Wiki Templates Administration](../administration/wiki-templates.md). For template usage while creating pages, see [Wiki Pages](./pages.md).

:::: warning Administrative Permissions
The Wiki administration pages are available only to users with the required administrator access.
::::

## Typical Workflow

### Create a Team Knowledge Space

1. Open **Wiki** from the top navigation.
2. Click **New Space**.
3. Add a title, key, description, and optional project link.
4. Create a home page or first topic page.
5. Publish the page when it is ready for the team.
