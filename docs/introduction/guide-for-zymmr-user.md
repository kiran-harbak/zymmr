# Guide for Zymmr User

Zymmr simplifies project management for scrum and kanban teams. Let's explore how to use Zymmr as an end user, step by step.

## Understanding Zymmr Users

![Zymmr Users Overview](/images/introduction/users.png)

A Zymmr user can be anyone from Development, Operations, or Marketing teams depending upon the type of project you are working on. Zymmr accommodates all types of users who actively make updates on WorkItems.

This guide is specifically designed for Zymmr users who:

- Work on WorkItems as Primary or Secondary Assignees
- Update WorkItem status
- Comment on WorkItems
- Log time on WorkItems

We assume that your Zymmr Admin has already configured the system and granted you access.
::: info Prerequisites
🔑 To get started, your admin will need to set up a project for you and/or your team to work in.
:::

## What is a Zymmr Project?

A project is a container that groups different WorkItems together. This group of WorkItems could cover either:

- A single day's work
- Tasks that will take your team months to complete

### Accessing Projects in Zymmr

::: details Watch Video Tutorial

<iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/0PlOK9DlTUo" 
  title="Accessing Projects in Zymmr" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
:::

1. **Finding Your Projects**:

   - After logging in, you'll be taken to the projects page
   - Access projects from the top navigation bar
   - Click on the "Projects" tab to see available projects
   - Use the search function to find specific projects

2. **Navigating to a Project**:
   - Click on your desired project
   - This will take you to the project's backlog page

## Working with WorkItems

### What is a WorkItem?

A WorkItem in Zymmr represents a unit of work that can take various forms, including:

- Tasks
- Bug reports
- User stories
- Any item that can be tracked and managed within a project

WorkItems are essential for teams to effectively plan, track progress, collaborate, and generate reports throughout the project lifecycle.

### Accessing WorkItems

There are multiple ways to access WorkItems in Zymmr:

- Project backlog list (available in both Kanban and Scrum projects)
- Sprint boards (for Scrum projects)
- Direct search from the top navigation bar

### Updating Fields

Zymmr offers more than 32 standard fields covering essential project management aspects:

- Assignments
- Estimates
- Timelines
- WorkItem tracking
- Other essential information

::: tip Auto-Save Feature
Changes made to field values are automatically saved without requiring manual intervention.
:::

### Adding Comments

Comments are text-based updates to keep your team informed about WorkItem progress.

::: tip Mentioning Team Members
To notify specific team members:

1. Type @ in your comment
2. Enter their name
3. Select from the dropdown list
4. The mentioned person will receive a notification
   :::

### Logging Work

To add a work log:

1. Open the WorkItem
2. Click "More" in the top-right corner
3. Select "Add Time Log"
4. Fill in the required information:
   - Work Type (e.g., Development, Testing, Meeting)
   - Date Started
   - Time Spent
   - Comments
5. Click "Add" to save

### WorkItem Workflow

A workflow in Zymmr is like a recipe that guides you through the steps to get work done. WorkItems follow a defined workflow that is managed through states and transitions (actions).

#### Basic Workflow States

At minimum, a WorkItem goes through 3-4 basic states:

- New
- In Progress
- Done
- On Hold (optional)

::: tip Finding Available States
In Zymmr, workflow states are managed through the 'Status' field. This field shows you the next available states your WorkItem can transition to.
:::

The workflow ensures that:

- Work follows a consistent process
- Teams can track progress effectively
- Status changes are properly documented
- Work moves through appropriate stages

::: info Status Transitions
Status changes follow a predefined path ensuring proper workflow management and tracking. Your admin can customize these workflows to match your team's process.
:::
