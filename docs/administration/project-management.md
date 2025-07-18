---
title: Projects (Administration)
description: A guide for administrators on how to create, view, and manage all projects, including archiving, from the global settings dashboard.
head:
  - - meta
    - name: keywords
      content: project management, create project, archive project, project list, administration, zymmr
outline: deep
---

# Project Management

::: info Overview
The Projects page, located in the **Global Settings** ⚙️, is your comprehensive dashboard for overseeing all projects within your Zymmr instance. From here, you can view project details, create new projects, and manage their lifecycle, including the powerful ability to archive projects to keep your active list clean.
:::

## 1. The Projects Dashboard Overview

This screen provides a detailed list of all projects, along with options to filter and manage them.

-   **Project Filters**: At the top right, you'll find radio buttons to filter your project list:
    -   `All`: Shows all projects, including both active and archived ones.
    -   `Active`: Displays only projects that are currently active.
    -   `Archive`: Shows only projects that have been archived.
-   **Search Bar**: Use this to quickly find a project by its name or key.
-   **+ Create Project Button**: The primary button to start creating a brand new project.

### Projects List Table
This table provides key information for each project:

| Column          | Description                                                                                                   |
| :-------------- | :------------------------------------------------------------------------------------------------------------ |
| **NAME**        | The full name of the project. An **"Archived"** tag will be displayed next to the name of an archived project. |
| **KEY**         | A short, unique identifier for the project (often used in work item IDs).                                     |
| **TYPE**        | The methodology or framework used by the project (e.g., `Kanban`, `Scrum`).                                   |
| **STATUS**      | The current overall health or stage of the project (e.g., `Active`, `Completed`).                             |
| **LEAD**        | The project leader or manager.                                                                                |
| **START / END DATE** | The planned duration of the project.                                                                      |
| **ACTIONS**     | A set of icons for managing individual projects.                                                              |

## 2. How to Create a New Project

1.  From the Projects dashboard, click the **+ Create Project** button.
2.  The "Create Project" modal window will appear.
3.  Fill in the required details:

| Field             | Description                                                                                             |
| :---------------- | :------------------------------------------------------------------------------------------------------ |
| **Project Type**  | Select the methodology your project will follow (e.g., `Scrum`, `Kanban`).                               |
| **Title** `*`     | Enter the full, descriptive name of your project.                                                       |
| **Key** `*`       | Enter a short, unique key (e.g., `BMPD`, `AWS`). This will be used as a prefix for work item IDs.      |
| **Start/End Date**| Use the date pickers to define the project's planned duration.                                          |
| **Description**   | Provide a detailed overview of the project's goals and scope using the rich text editor.              |
| **Lead** `*`      | Select the project leader or manager from the dropdown list of users.                                   |
| **Category**      | Select the overall category or classification for this project.                                         |

Click the **Save** button to create the project. It will now appear in the Projects list.

## 3. Navigating to Project Details and Settings

From the dashboard, you have two main ways to access a project:

### Accessing the Project Work Area
To go directly into the project's main work area (e.g., its backlog or board), simply click on the **NAME** of the project in the list. This is where your team will manage their daily work.

### Accessing Project-Specific Settings
To access the detailed configuration for a specific project (e.g., its members, modules, or costing), click the external link icon <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="navigation-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg> in the "ACTIONS" column for that project's row.

## 4. Archiving and Managing Archived Projects

Archiving allows you to remove completed or inactive projects from your main "Active" list without permanently deleting them, preserving their historical data.

### Archiving a Project
1.  Locate the project you wish to archive in the "Active" or "All" projects list.
2.  In the "ACTIONS" column, click the **Archive Project** icon (which looks like a file box).
3.  A confirmation modal will appear. Click **Archive** to confirm.

### Impact of Archiving
-   The project will be hidden from the "Active" projects view.
-   Archived projects are hidden from all regular users and project leads. They will no longer see the project or its work items.
-   Only Global Administrators can view archived projects by selecting the "Archive" filter on this dashboard.

### Restoring (Unarchiving) a Project
::: warning Admin Action Required
Unarchiving a project is not a self-service action. If you need to restore an archived project and make it active again, you must **contact your Zymmr system administrator**. They will be able to unarchive the project, making it visible and accessible to relevant users once more.
:::