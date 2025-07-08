---
title: Roles
description: A guide for administrators on how to create, manage, and delete user roles in Zymmr.
head:
  - - meta
    - name: keywords
      content: roles, user roles, permissions, administration, zymmr, manage roles
outline: deep
---

# Roles

::: info Overview
Roles in Zymmr are global labels used to define the function or responsibility of users within projects, such as "Developer," "QA Engineer," or "Project Manager." They are essential for organizing team members and are a foundational component for configuring permission schemes.
:::

## Managing Roles

The Roles administration page allows you to perform all necessary create, read, update, and delete (CRUD) operations.

### Creating a New Role

1.  Navigate to **Global Settings** ⚙️.
2.  In the sidebar menu, click on **Roles**.
3.  Click the **Create Role** button in the top right corner.
4.  Fill in the role details in the provided form:

    | Field       | Description                                  | Required |
    | ----------- | -------------------------------------------- | -------- |
    | **Name**    | The unique name for the role (e.g., "Designer"). | Yes      |

5.  Click **Save** to create the new role. It will now appear in the list of available roles.

### Editing an Existing Role

1.  On the Roles page, locate the role you wish to modify in the list.
2.  Click the **Edit** icon in the actions column for that role.
3.  Update the **Name**  in the form.
4.  Click **Save** to apply the changes.

### Deleting a Role

1.  Find the role you want to remove in the list.
2.  Click the **Delete** icon .
3.  A confirmation prompt will appear. Confirm the action to permanently delete the role.

::: warning Important Note on Deletion
A role cannot be deleted if it is currently assigned to users in any project or is being used in a permission scheme. You must first remove all associations before the role can be deleted. This is a safeguard to prevent accidental disruption to project access.
:::
