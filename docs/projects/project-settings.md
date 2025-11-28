---
title: Project Settings
description: Managing and configuring project settings in Zymmr
outline: deep
---

# Project Settings

## Overview

Project settings in Zymmr allow you to configure and manage key project parameters. These settings help teams:

- Define project timelines and scope
- Assign project leadership
- Configure work item types and workflows
- Manage project permissions
- Set project status and categories

## Accessing Settings

To access project settings:

### Step 1: Navigate to Project

1. Go to the project listing page
2. Select your target project
3. Click on **"<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="navigation-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>"** icon at the end of the project's row

## Project Configuration

### Available Settings

The project configuration includes:

| Setting               | Description                           | Editable |
| --------------------- | ------------------------------------- | -------- |
| Title                 | The project's display name            | Yes      |
| Project Key           | Unique identifier for the project     | No       |
| Start Date            | Project commencement date             | Yes      |
| End Date              | Project completion date               | Yes      |
| Description           | Detailed project information          | Yes      |
| Lead                  | Project manager or team lead          | Yes      |
| Work Item Type Scheme | Defines available work item types     | Yes      |
| Workflow Scheme       | Controls work item status transitions | Yes      |
| Permission Scheme     | Sets user access levels               | Yes      |
| Status                | Current project status                | Yes      |
| Category              | Project classification                | Yes      |

### Editing Settings

To modify project settings:

1. Click the **Edit** button
2. Update the desired fields
3. Click **Save** to apply changes

::: warning Important Notes

- The project key is permanent and cannot be modified after creation
- Changing workflow or permission schemes may affect existing work items
- Only users with appropriate permissions can modify project settings
  :::

#### Changing Project Lead

When you change the Project Lead, be aware of the following behavior:

::: info Role Assignment Behavior
When changing the Project Lead, the new Lead is automatically assigned the **Project Manager** role. The previous Lead **retains** their Project Manager role and access. If you need to revoke the previous Lead's administrative access, you must manually remove them from the Project Manager role in the **People** section under Project Settings.
:::

### Best Practices

1. Keep project information up-to-date
2. Review settings periodically
3. Document significant changes
4. Validate workflow changes before implementing
5. Regularly audit permission schemes

::: tip Pro Tip
Before modifying workflow or permission schemes, consider the impact on existing work items and team members' access.
:::

### Project Statuses

Project statuses help track the current state of projects. Common statuses include:

| Status    | Description                                          |
| --------- | ---------------------------------------------------- |
| Active    | Project is currently in progress                     |
| On Hold   | Project temporarily paused                           |
| Completed | Project finished                                     |
| Archived  | Project no longer active but preserved for reference |

::: tip Customization
Project statuses can be customized at the organization level to match your workflow needs. Contact your administrator to configure custom statuses.
:::

### Project Categories

Projects are organized using predefined categories like:

- **Support**: For customer support and maintenance projects
- **Product**: For product development projects

Categories can be customized at the organization level to meet your needs. Common use cases include:

- Organizing related projects into logical groups
- Filtering and searching project listings efficiently
- Generating reports based on project categories
- Managing shared resource pools across projects

Some examples of custom categories:

| Category         | Description                                   |
| ---------------- | --------------------------------------------- |
| Shared Resources | Projects focused on resource management       |
| DevOps           | Infrastructure, deployment and CI/CD projects |
| Research         | Innovation and R&D initiatives                |
| Client Projects  | External client deliverables                  |
| Internal         | Internal tooling and process improvements     |

::: info Note
While Support and Product are default categories, administrators can add more categories at the organization level to better organize projects.
:::
