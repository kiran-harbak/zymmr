---
title: User Management
description: A guide for administrators on creating, editing, and managing user accounts in Zymmr.
head:
  - - meta
    - name: keywords
      content: user management, create user, edit user, delete user, administration, zymmr
outline: deep
---

# User Management

::: info Overview
User Management is a core administrative function located in **Global Settings** ⚙️. It allows administrators to create new user accounts, manage existing ones.
:::

## The User Management Dashboard

The main view provides a paginated list of all users in the system, along with tools for managing them.

- **Status Toggle**: Switch between all the users, the enabled users, or the disabled users.
- **Search Field**: Quickly find a specific user by typing their name or email.
- **Create User Button**: Located in the top right, this button initiates the new user creation process.

The user list is organized into the following columns:

| Column         | Description                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| **Name**       | The user's full name. Clicking the name navigates to their detailed profile page.                         |
| **Email**      | The user's registered email address, used for login and notifications.                                    |
| **User Tier**  | The tier assigned to the user.                                                                            |
| **Status**     | The user's current status.                                                                                |
| **Last Update**| The date and time when the user's profile was last modified.                                              |
| **Actions**    | **Edit** user, **Reset Password** for the user, **Change Status** of the user, and **Delete** user.       |

## Creating a New User

1.  From the User Management dashboard, click the **Create User** button.
2.  A side-view form will appear for you to enter the new user's details.

### User Creation Form

| Field             | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| **First Name** `*`| The user's first name.                                        |
| **Last Name** `*` | The user's last name.                                         |
| **Email** `*`     | The user's unique email address for login and notifications.  |
| **User Tier**     | Select tier for the user.   |
| **Password** `*`  | Set an initial password for the user. A "Show Password" checkbox is available for verification. |

Once all fields are complete, click the **Create** button to add the user to the system.

## Managing Existing Users

You can perform several actions on existing users directly from the user list. The edit and send reset password mail actions can only be performed to an enabled user.

### Editing a User
1.  Click the **Edit** icon (pencil) in the user's row.
2.  The same side-view form will appear, pre-filled with the user's current information.
3.  Make the necessary changes and click the **Save** button.

### Sending a Password Reset Email
1.  Click the **Send Email** icon (envelope) in the user's row.
2.  This action automatically sends an email to the user with a link to reset their password.

### Change User Status
1.  Click the **Enable User** icon (user with check mark) / **Disable User** (user with 'x') icon.
2.  A confirmation modal will appear. Optionally, select the checkbox to notify the user of this status change via email (requires correctly configured **Outgoing Email Server**). 
3.  Confirm the action to update the user's status.

The disabled user will no longer be able to login.

### Deleting a User
1.  Click the **Delete** icon (trash can) in the user's row.
2.  A confirmation modal will appear to prevent accidental deletion.
3.  Confirm the action to permanently remove the user from the system.

::: tip Best Practices
- **Regular Audits**: Periodically review the user list to deactivate accounts for individuals who are no longer with the company.
- **Strong Passwords**: Encourage users to set strong, unique passwords when they first log in.
:::

::: warning Administrative Permissions
Access to User Management and all associated actions is restricted to users with global administrative permissions.
:::
