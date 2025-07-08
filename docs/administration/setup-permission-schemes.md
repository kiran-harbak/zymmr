---
title: Setup Permission Schemes
description: A guide for administrators on creating, cloning, and managing permission schemes to control user access within projects.
head:
  - - meta
    - name: keywords
      content: permission scheme, permissions, roles, access control, administration, zymmr
outline: deep
---

# Setup Permission Schemes

::: info Overview
Permission Schemes are a powerful administrative feature in **Global Settings** ⚙️ that allow you to create reusable sets of permissions. By associating a scheme with one or more projects, you can efficiently and consistently manage what users in different roles can do within those projects.
:::

## The Permission Schemes Dashboard

This main dashboard provides a list of all available permission schemes and the tools to manage them.

- **Search Field**: Quickly find a specific scheme by its title.
- **Add Permission Scheme Button**: Located in the top right, this button allows you to create a new, empty permission scheme.

The schemes are listed in a table with the following columns:

| Column         | Description                                                                              |
| -------------- | ---------------------------------------------------------------------------------------- |
| **Scheme Title** | The name of the permission scheme. **Clicking** the title navigates to its details page for **configuration**. |
| **Action**     | A set of icons for managing the scheme: **Clone** (copy icon) and **Delete** (trash can). |

### Creating a New Permission Scheme
1.  From the dashboard, click the **Add Permission Scheme** button.
2.  A modal titled "Add permission scheme" will appear.
3.  Enter a unique and descriptive **Title** for your new scheme and click **Add**.
4.  You will be automatically redirected to the scheme's details page to begin associating roles with permissions.

### Managing Schemes
- **Cloning a Scheme**: Click the **Clone** icon. A modal will appear asking for a title for the new, cloned scheme. This is useful for creating variations of a base scheme.
- **Deleting a Scheme**: Click the **Delete** icon. A confirmation modal will appear.

::: warning Important Note
You cannot delete a permission scheme that is currently associated with one or more projects. You must first change the permission scheme on those projects before it can be deleted.
:::

## The Permission Scheme Details Page

This is where you define which roles are granted which permissions for any project using this scheme.


- **Title**: The scheme's title is displayed at the top left and can be edited directly.
- **Shared by [number] PROJECT**: Located at the top right, this shows how many projects are currently using this scheme. Clicking it reveals a list of those projects.
- **Add Associated Roles Button**: This global button allows you to add any role to any permission.

### Associating Roles with Permissions
This is the core of configuring a scheme. You can grant permissions in two ways:

1.  **Globally**: Click the main **Add Associated Roles** button. A modal will appear where you must select both the **Permission** and the **Role** from dropdowns.
2.  **Specifically**: In the permissions table, find the permission you want to grant and click the **`+`** button in its row. The same modal will appear, but the **Permission** dropdown will be pre-filled, saving you a step.

### List of Permissions
The table lists all available permissions you can grant. Here are some of the key permissions and their purpose:

| Permission                  | Purpose                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------- |
| `Add Attachment`            | Allows users to upload and attach files to a work item.                                                 |
| `Add Comment`               | Allows users to add comments and participate in discussions on work items.                              |
| `Add Tag`                   | Allows users to add new or existing tags to categorize a work item.                                     |
| `Add Timelog`               | Allows users to log time spent working on a work item.                                                  |
| `Administer Project`        | Grants full administrative rights over a project, including its settings, members, and configuration.   |
| `Assign Work Item`          | Allows users to assign or reassign a work item to another user.                                         |
| `Assignable User`           | Allows a user to be assigned to work items. Users without this permission will not appear in assignee dropdowns. |
| `Browse Project`            | The most basic permission. Allows users to view the project and see its work items.                     |
| `Close Work Item`           | Allows users to transition a work item into a final, resolved workflow state like "Closed" or "Done".   |
| `Create Work Item`          | Allows users to create new work items (tasks, bugs, stories, etc.) within the project.                  |
| `Delete Attachment`         | Allows users to remove attachments from a work item.                                                    |
| `Delete Comment`            | Allows users to delete comments. This can be configured for their own or all comments.                  |
| `Delete Tag`                | Allows users to remove tags from a work item.                                                           |
| `Delete Timelog`            | Allows users to delete time log entries from a work item.                                               |
| `Delete Work Item`          | Allows users to permanently delete work items from the project.                                         |
| `Edit Comment`              | Allows users to edit existing comments. This can be configured for their own or all comments.           |
| `Edit Work Item`            | Allows users to modify the details (description, title, custom fields) of existing work items.          |
| `Everest User`              | A special permission, likely related to accessing an advanced feature set or license tier within Zymmr. |
| `Link Work Item`            | Allows users to create links between work items (e.g., "relates to", "is blocked by").                  |
| `Manage Sprint`             | Grants permission to start, complete, and edit sprints, as well as move work items in and out of them.  |
| `Modify Reporter`           | Allows users to change the "Reporter" field on a work item, typically the original creator.             |
| `Move Work Item`            | Allows users to move a work item from one project to another.                                           |
| `Schedule Work Item`        | Allows users to set or modify the "Start Date" and "End Date" fields for a work item.                   |
| `Set Work Item Security`    | Allows users to set a security level on a work item, restricting its visibility to specific roles or users. |
| `View Attachment`           | Allows users to see and download attachments on a work item.                                            |
| `View Comment`              | Allows users to read the comments on a work item.                                                       |
| `View Read-Only workflow`   | Allows users to view a project's workflow in a read-only state.                                         |
| `View Tag`                  | Allows users to see the tags associated with a work item.                                               |
| `View Timelog`              | Allows users to view the time tracking logs associated with a work item.                                |


::: tip Best Practices for Permission Schemes
- **Principle of Least Privilege**: Only grant the permissions that a role absolutely needs to perform its function.
- **Use a Base Scheme**: Create a base "Standard Project" permission scheme and clone it for variations. This saves time and ensures consistency.
- **Descriptive Naming**: Use clear, descriptive names for your schemes (e.g., "Software Projects - Strict" or "Marketing Projects - Open").
:::