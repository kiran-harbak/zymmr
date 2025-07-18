---
title: Project Permissions
description: Guide for managing permissions and roles in Zymmr projects
head:
  - - meta
    - name: keywords
      content: managing permissions, manage roles
outline: deep
---

# Managing Project Permissions

::: tip Overview
Learn how to configure and manage access controls for different roles in your Zymmr projects to maintain security and efficiency.
:::

## Quick Start Guide

1. Navigate to **Project Settings** → **Permissions**
2. Select function to configure
3. Add/remove role (changes save automatically)

## Accessing Permissions

### Navigate to Project Settings

1. Go to your project listing page
2. Select your target project
3. Click on **"<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="navigation-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>"** icon at the end of the project's row

### Access Permission Scheme Section

1. Locate the **Permission** section in the sidebar
2. Click to open the **Permission Scheme** section

::: info Permission Scheme
The **Permission Scheme** section displays a two-column layout:

- **Left Column**: Lists all available permissions that can be controlled
- **Right Column**: Shows the roles assigned to each permission

You can configure which roles have access to specific permissions by adding or removing role assignments. For example, you might grant the "Administer Project" permission to roles like Project Lead and QA Lead.
:::

### Associate Roles to Permissions

You can associate roles in two ways:

1. From the permission list:

   - Locate the desired Permission from the left column
   - Click the **"+"** icon next to the permission to open the role association modal
   - In the modal:
     - View selected Permission in the first dropdown
     - Select one role to associate in the second dropdown (you can type to search)
     - Click "Add" to confirm selections
   - The selected role will be automatically associated to the permission

2. Using the "Add Associated Roles" button:
   - Click the **"Add Associated Roles"** button at the top right
   - In the modal:
     - Select the Permission from the first dropdown
     - Choose the role to associate in the second dropdown (you can type to search)
     - Click "Add" to confirm selections
   - The selected role will be automatically associated to the permission

## Available Permissions

::: info Available Permissions

### Core Permissions

- Browse Project
- Administer Project
- Create Work Item
- Edit Work Item
- Delete Work Item

### Attachment Management

- Add Attachment
- Delete Attachment
- View Attachment

### Comment Controls

- Add Comment
- Edit Comment
- Delete Comment
- View Comment

### Time Tracking

- Add Timelog
- View Timelog
- Delete Timelog

### Sprint Management

- Manage Sprint
  :::

## Best Practices

::: warning Security Guidelines

### Role Assignment

- Follow least privilege principle
- Regular permission audits

### Access Management

- Review permissions quarterly
- Update as team changes
- Remove unused roles
  :::

<!-- ## Common Configurations

| Role          | Typical Access              | Use Case         |
| ------------- | --------------------------- | ---------------- |
| Project Admin | All functions               | Project managers |
| Developer     | Create/Edit items, Comments | Development team |
| Viewer        | Browse, View only           | Stakeholders     | -->

## Troubleshooting

### Common Issues

1. **Role Not Available?**

   - Verify role exists
   - Check associated **Permission Scheme**
   - Contact global admin

2. **Permission Conflicts?**

   - Review role hierarchy
   - Check inherited permissions

## Need Help?

::: tip Support Options

- Review [FAQ section](/guide/faq)
- Contact [Support](../contact-us.md)
  <!-- - Check [Role Management Guide](./role-management) -->
  :::

<style>
:root {
  --tip-border-color: var(--vp-c-brand-1);
  --warning-border-color: var(--vp-c-warning-1);
  --info-border-color: var(--vp-c-info-1);
}

table {
  display: table;
  width: 100%;
  margin: 16px 0;
}

th, td {
  padding: 8px 16px;
}
</style>
