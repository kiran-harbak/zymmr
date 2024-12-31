---
title: Create Work Item
description: Guide to creating work items in Zymmr
outline: deep
---

# Create Work Item

## Overview

Creating a work item in Zymmr involves defining its key attributes and properties. This guide helps you:

- Create new work items efficiently
- Set up proper tracking
- Assign work appropriately
- Define clear requirements

## Creation Methods

### 1. Using Create Button

1. Click **Create** button in the top navigation
2. Fill in required fields:
   - Select a project from dropdown
   - Choose work item type
   - Enter a title
3. Add optional information as needed
4. Click **Save** to validate and create

::: tip ✍️ Description Editor Features
The description field includes a rich text editor with:

- Text formatting (Bold, Italic, Underline)
- Code blocks
- Lists and tables
- Undo/Redo functionality
  :::

::: tip 🧭 Form Navigation

- Use Tab key to move between fields
- Required fields must be filled before saving
- Optional fields can be left empty
  :::

::: info 🔗 Field Dependencies

- Project selection may affect available Types
- Type selection may affect available fields
- Some fields may be pre-filled based on project settings
  :::

### 2. Quick Create from Backlog

1. Navigate to Project Backlog:

   - Select project from projects list
   - System redirects to project's backlog page

2. Using Quick Create:
   - Locate the "Select Type" dropdown under Backlog section
   - Choose work item type (Task/Request, Testing, etc.)
   - Enter title in the text field
   - Press Enter to create the work item

::: tip ⚡ Quick Creation
The backlog quick create method is ideal for:

- Rapid work item creation
- Adding multiple items quickly
- Basic work items that don't need detailed information immediately
  :::

::: info 📋 Post Creation
After quick creating a work item:

- Click on the work item to add more details
- Update optional fields as needed
- Add description and other information
  :::

## Form Details

### Required Fields

| Field   | Description                              | Required |
| ------- | ---------------------------------------- | -------- |
| Project | Select the project for the work item     | Yes      |
| Type    | Select work item type (Task, Bug, Story) | Yes      |
| Title   | Brief description of the work            | Yes      |

### Optional Fields

| Field       | Description                         | Format           |
| ----------- | ----------------------------------- | ---------------- |
| Priority    | Importance level of the work item   | Dropdown         |
| Description | Detailed information about the work | Rich text editor |
| Start Date  | When work should begin              | Date picker      |
| End Date    | When work should complete           | Date picker      |
| Story Point | Effort estimation in story points   | Number           |
| Reporter    | Person creating the work item       | Dropdown         |
