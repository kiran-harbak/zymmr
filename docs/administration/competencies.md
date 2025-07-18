---
title: Setup Competencies
description: A guide for administrators on configuring user competencies to power Zymmr's automated effort estimation for work items.
head:
  - - meta
    - name: keywords
      content: competencies, auto-estimation, effort estimation, skills, proficiency, administration, zymmr
outline: deep
---

# User Competencies

::: info Overview
The Competencies feature is a core component of **Global Settings** ⚙️, designed to power automated effort estimation for work items. By defining each user's skill levels across various domains and technologies, you provide the system with the necessary data to generate more accurate and consistent task estimates, saving time and improving project planning.
:::

## 1. The Role of Competencies in Auto-Estimation

This feature is the engine behind Zymmr's ability to automatically suggest the effort required for a work item. When a task is created, the system can reference the assigned user's competency profile to make an informed calculation.


## 2. The Competencies Dashboard

Located in the global administration settings, this screen provides a centralized dashboard to view and manage the skill profiles that feed the estimation engine.

-   **+ Add Competencies Button**: The primary button for creating a new user competency profile.

Each row represents a user profile, and each column is a critical input for the estimation algorithm:

| Column                  | Description                                                                                       |
| :---------------------- | :------------------------------------------------------------------------------------------------ |
| **USER**                | The name of the team member.                                                                      |
| **ROLE**                | The user's primary role (e.g., `Developer`, `QA Tester`).                                         |
| **LANGUAGE**            | A specific technical language or technology, a key factor for tech-specific tasks.                |
| **LANGUAGE PROFICIENCY**| The user's skill level in that language—a major influence on estimates.                           |
| **TASK PROFICIENCY**    | A general measure of the user's efficiency and ability to handle assigned tasks.                  |
| **DOMAIN PROFICIENCY**  | The user's knowledge of the business or project domain, affecting tasks that require context.    |
| **EXPERIENCE LEVEL**    | The user's overall professional experience, which provides a baseline for estimation.             |
| **ACTION**              | Controls to **Edit** or **Delete** a profile.                                                     |

## 3. How to Create and Manage Competency Profiles

To ensure the auto-estimation feature works correctly, every relevant user needs a complete and up-to-date competency profile.

### Creating a New Competency Profile
1.  From the main Competencies screen, click the **+ Add Competencies** button.
2.  The "Create Competencies" modal will appear.
3.  Fill out the profile by selecting the most accurate options from each dropdown. This data will be used to calibrate the system's estimates for this user.
4.  Click **Save**. The user's profile is now active in the estimation framework.

### Editing a Competency Profile
It is crucial to keep these profiles current. As a team member gains experience or improves their skills, updating their profile ensures that the auto-estimation engine remains accurate.

1.  Find the user whose profile needs updating.
2.  Click the **Edit** (pencil) icon in their row.
3.  The "Edit Competencies" modal will open with their current data.
4.  Adjust the proficiency and experience levels to reflect their current capabilities.
5.  Click **Save**. The system will now use this new information for all future auto-estimations for this user.

### Deleting a Competency Profile
1.  Locate the user's row and click the **Delete** (trash can) icon.
2.  Confirm the action when prompted.

::: warning The Foundation of Auto-Estimation
The accuracy and effectiveness of the automated estimation feature are directly dependent on the data you provide here. Outdated or incomplete profiles will lead to less reliable estimates. It is best practice to review these profiles quarterly or after significant project milestones.
:::