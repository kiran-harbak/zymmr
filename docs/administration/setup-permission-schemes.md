---
title: Setup Permission Schemes
description: A guide for administrators on creating, cloning, and managing permission schemes to control user access within projects.
head:
  - - meta
    - name: keywords
      content: permission scheme, permissions, roles, access control, administration, zymmr
outline: deep
---

# Permission Schemes

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

## Understanding Administrators vs. Project Administrators

It is important to distinguish between the two types of administrators who interact with permissions:

-   **Global Administrator**: Has the `Zymmr Administrator` role. They have full, site-wide access to all routes, settings, and projects.
-   **Project Administrator**: Has the specific `Administer Project` token within a project's permission scheme. Their scope is limited to:
    -   Project role-user mapping.
    -   Project permission assignments.
    -   Board and project configurations.
    -   *Note: Being a Project Admin does not automatically grant Work Item editing rights; those must be assigned separately.*

### Recommended Setup Flow
1.  **Define Roles First**: Ensure your Project Roles (e.g., PM, Dev, QA) are created in the [Roles](./roles) section.
2.  **Assign Tokens**: In the Permission Scheme, map tokens to these roles. Keep CRUD (Create/Read/Update/Delete) explicit.
3.  **Validate User Mapping**: Go to specific projects and ensure users are assigned to the correct roles.
4.  **Test**: Log in as a user with a specific role to verify they can (and cannot) perform the expected actions.

##  Configuration Guidance

Certain permissions have specific behaviors that are important to understand when configuring your schemes.

### Work Items
-   **Separation of Duties**: It is best practice to keep `Create`, `Edit`, and `Delete` tokens separate from the `Administer Project` token.
-   **Drag & Drop**: To reorder work items on a board column, a user generally requires the `Edit Work Item` permission.

### Sprints and Ordering (Crucial)
The `Manage Sprint` token controls governance actions like starting/stopping sprints and moving items to/from the backlog.

::: tip Operational Note: Sprint Managers
If your policy is that a Sprint Manager should also be able to reorder the backlog or board, you must map **both**:
1.  `Manage Sprint` (for governance)
2.  `Edit Work Item` (for drag-and-drop ordering operations)
:::

### Timelogs
Zymmr uses a strict "least privilege" model for time tracking:
-   `Add Timelog`: Create new entries.
-   `Edit Timelog`: Modify existing entries.
-   `Delete Timelog`: **Delete-only**. This token does *not* grant edit rights.
-   `View Timelog`: Read access to logs.

### Comments & Attachments
These are controlled by granular tokens (`Add`, `Edit`, `Delete`, `View`).
-   *Note*: Even with permission, the UI may enforce ownership checks (e.g., users can usually only edit *their own* comments).

##  Common Role Mapping Patterns

Use these patterns as a baseline for your schemes:

| Role | Typical Token Mappings |
| :--- | :--- |
| **Project Manager** | • `Browse Project`<br>• `Administer Project`<br>• `Create/Edit/Delete Work Item`<br>• `Manage Sprint`<br>• Full Comment/Attachment/Timelog access |
| **Developer** | • `Browse Project`<br>• `Create/Edit Work Item`<br>• `Add/View Timelog`<br>• `Add/View Comment`<br>*(Usually NO Delete Work Item or Admin access)* |
| **QA** | • `Browse Project`<br>• `Edit Work Item` (for status transitions)<br>• `Add Comment` & `Add Attachment`<br>*(Timelog access based on policy)* |

::: warning Must-Know Rules
1.  **Project-Scoped**: A user can be a "Project Manager" in Project A and a "Viewer" in Project B. Their permissions will change based on the project they are viewing.
2.  **Least Privilege**: Do not bundle permissions unnecessarily. If a user only needs to log time, do not give them `Delete Timelog`.
3.  **Global Override**: The `Zymmr Administrator` global role overrides these schemes and has full access everywhere.
:::

### List of Permissions
The table lists all available permissions you can grant. Here are some of the key permissions and their purpose:

| Permission                   | Purpose                                                                                                  |
| ---------------------------  | -------------------------------------------------------------------------------------------------------  |
| `Add Attachment`             | Allows users to upload and attach files to a work item.                                                 |
| `Add Comment`                | Allows users to add comments and participate in discussions on work items.                              |
| `Add Timelog`                | Allows users to log time spent working on a work item.                                                  |
| `Administer Project`         | Grants full administrative rights over a project, including its settings, members, and configuration.   |
| `Browse Project`             | The most basic permission. Allows users to view the project and see its work items.                     |
| `Create Work Item`           | Allows users to create new work items (tasks, bugs, stories, etc.) within the project.                  |
| `Delete Attachment`          | Allows users to remove attachments from a work item.                                                    |
| `Delete Comment`             | Allows users to delete comments. This can be configured for their own or all comments.                  |
| `Delete Timelog`             | Allows users to delete time log entries from a work item.                                               |
| `Delete Work Item`           | Allows users to permanently delete work items from the project.                                         |
| `Edit Comment`               | Allows users to edit existing comments. This can be configured for their own or all comments.           |
| `Edit Work Item`             | Allows users to modify the details (description, title, custom fields) of existing work items.          |
| `Link Work Item`             | Allows users to create links between work items (e.g., "relates to", "is blocked by").                  |
| `Manage Sprint`              | Grants permission to start, complete, and edit sprints, as well as move work items in and out of them.  |
| `Move Work Item`             | Allows users to move a work item from one project to another.                                           |
| `View Attachment`            | Allows users to see and download attachments on a work item.                                            |
| `View Comment`               | Allows users to read the comments on a work item.                                                       |
| `View Timelog`               | Allows users to view the time tracking logs associated with a work item.                                |


::: tip Best Practices for Permission Schemes
- **Principle of Least Privilege**: Only grant the permissions that a role absolutely needs to perform its function.
- **Use a Base Scheme**: Create a base "Standard Project" permission scheme and clone it for variations. This saves time and ensures consistency.
- **Descriptive Naming**: Use clear, descriptive names for your schemes (e.g., "Software Projects - Strict" or "Marketing Projects - Open").
:::