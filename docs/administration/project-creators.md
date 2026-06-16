---
title: Project Creators
description: A guide for administrators on how to manage which users have permission to create new projects in Zymmr.
head:
  - - meta
    - name: keywords
      content: project creators, create project permission, project management, administration, access control, zymmr
outline: deep
---

# Project Creators

::: info Overview
The Project Creators feature, located within **Global Settings** ⚙️, allows administrators to safely delegate project creation rights. By adding a user to this list, you grant them the specific permission to create new projects in Zymmr *without* needing to give them full Global Administrator access. This is ideal for PMO members, department heads, or lead project managers.
:::

## 1. The Project Creators Dashboard

This screen lists all the users who have been explicitly granted permission to create new projects.

-   **Search Bar**: Allows you to quickly find a specific user in the list.
-   **+ Add Project Creator Button**: The primary action to grant project creation privileges to a new user.
-   **Pagination**: Controls at the bottom for navigating through multiple pages if you have a long list of authorized creators.

The dashboard table displays the following information:

| Column     | Description                                                                 |
| :--------- | :-------------------------------------------------------------------------- |
| **NAME**   | The full name of the authorized user.                                       |
| **EMAIL**  | The email address associated with their user account.                       |
| **ACTIONS**| An icon to **Delete** (trash can) the user from the Project Creators list.  |

## 2. How to Grant Project Creation Privileges

To authorize an existing Zymmr user to create projects, follow these steps:

1.  From the Project Creators dashboard, click the **+ Add Project Creator** button in the top-right corner.
2.  The "Add Project Creator" modal window will appear.
3.  Click on the **Select User** dropdown. This will display a searchable list of all active users in your Zymmr instance.
4.  Type to search for the specific user, or select them directly from the list.
5.  Confirm your selection to add them.

The selected user will now appear in the Project Creators list. The next time they navigate to the main "Projects" page, they will see and be able to use the "Create Project" button.

::: tip Global Admins Included Automatically
Users who are already designated as **Global Administrators** inherently possess the right to create projects. You do not need to add Global Admins to this specific "Project Creators" list.
:::

## 3. How to Revoke Project Creation Privileges

If a user moves to a different role and no longer needs the ability to initiate new projects, you can easily revoke this specific privilege.

1.  Locate the user you wish to remove from the Project Creators list.
2.  Click the **Delete** (trash can) icon in their row under the "ACTIONS" column.
3.  A confirmation prompt will appear. Confirm the action to proceed.

The user will be removed from the list and will immediately lose the ability to create new projects in Zymmr.

::: info User Accounts Remain Intact
Revoking a user's status as a "Project Creator" **does not** delete their actual Zymmr user account, nor does it remove them from any projects they are currently managing or participating in. It solely removes their ability to click "Create Project" and start brand new ones.
:::
