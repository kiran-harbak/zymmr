---
title: Global Administrators
description: A guide for managing users with full system-wide administrative access over your entire Zymmr instance.
head:
  - - meta
    - name: keywords
      content: global admin, administrator, system admin, permissions, access control, zymmr
outline: deep
---

# Global Administrators

::: info Overview
The Global Admin feature, located within **Global Settings** ⚙️, is where you manage users who have full administrative control over your entire Zymmr instance. These users possess the highest level of permissions, enabling them to configure all global settings, manage all projects, users, and every other feature across the system.
:::

::: warning Highest Level of Access
Granting Global Admin privileges should be done with extreme care. These users can access and modify all data and configurations within Zymmr. Only grant this level of access to trusted individuals who require full system control.
:::

## 1. The Global Admin Dashboard

This screen lists all the users who currently hold Global Administrator privileges.

-   **Search Bar**: Allows you to quickly find a specific administrator in a long list.
-   **+ Add Admin Button**: The primary action to grant new users Global Administrator privileges.
-   **Pagination**: Controls for navigating through multiple pages if you have many administrators.

The dashboard table displays the following information:

| Column     | Description                                                          |
| :--------- | :------------------------------------------------------------------- |
| **NAME**   | The full name of the Global Administrator.                           |
| **EMAIL**  | The email address associated with their user account.                |
| **USERNAME**| The login username of the Global Administrator.                      |
| **ACTIONS**| An icon to **Delete** (trash can) the user from the Global Admin role. |

## 2. How to Grant Global Administrator Privileges

To make an existing Zymmr user a Global Administrator, follow these steps:

1.  From the Global Admin dashboard, click the **+ Add Admin** button in the top-right corner.
2.  The "Add Members" modal window will appear.
3.  In the **Select User** dropdown, choose the user you wish to grant privileges to. This dropdown lists all existing users in your Zymmr instance.
4.  Once the user is selected, click the **Save** button.

The selected user will now appear in the Global Admin list and will have full administrative access to your Zymmr system.

## 3. How to Revoke Global Administrator Privileges

If a user no longer requires global administrative access, you can revoke their privileges by removing them from this list.

1.  Locate the Global Administrator you wish to remove from the list.
2.  Click the **Delete** (trash can) icon in their row under the "ACTIONS" column.
3.  A confirmation prompt will appear. Confirm the action to proceed.

The user will be removed from the Global Admin list and will no longer have system-wide administrative access.

::: info User Account is Not Deleted
Revoking Global Admin privileges only removes the user from this high-level role. Their regular user account remains active, and they will still have access to Zymmr based on their project-level permissions.
:::

::: warning Global Admin vs. User Management
This screen only controls *who is a Global Admin*. To manage a user's account details (like their name, email, or password), you must navigate to the main **User Management** screen in the global settings.
:::