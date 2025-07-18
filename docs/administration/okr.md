---
title: "Zymmr OKRs: From Strategy to Execution"
description: A guide to using the OKR framework in Zymmr to connect high-level goals with the daily work items that drive their progress.
head:
  - - meta
    - name: keywords
      content: okr, objectives, key results, work items, goal setting, strategic planning, zymmr
outline: deep
---

# Zymmr OKRs

::: info Overview
The OKR (Objectives and Key Results) feature in Zymmr provides a structured framework for setting, communicating, and tracking ambitious goals. It allows you to connect high-level ambitions (**Objectives**) with specific outcomes (**Key Results**), and further link these results to the actual **Work Items** that drive their progress. This ensures everyone is aligned, with a clear path from daily work to strategic achievements.
:::

## 1. Understanding the OKR Hierarchy

The Zymmr OKR module is built on a clear three-level hierarchy:

-   **Objectives**: The high-level, ambitious goals you want to achieve. They answer the question, *"What do we want to do?"*
    -   *Example*: "Host a Successful Educational Webinar."

-   **Key Results (KRs)**: The specific, measurable outcomes that track the achievement of an Objective. They answer the question, *"How will we know we've achieved it?"* Each Key Result has a **Weight** that contributes to the Objective's overall progress.
    -   *Example KR*: "Achieve 200+ live attendees."

-   **Work Items**: The actionable tasks, stories, or bugs from your projects that directly contribute to a Key Result. They answer the question, *"What specific tasks will we complete to achieve this KR?"*
    -   *Example Work Items*: "Design webinar landing page," "Promote on social media."

An Objective's progress is driven by its Key Results, and a Key Result's progress is driven by its linked Work Items.

## 2. The Main OKR Dashboard

This screen is your central hub for viewing all OKRs and their underlying work, providing a clear overview of progress at every level.

### Key Features of the Dashboard
-   **Hierarchical View**: Top-level rows are Objectives. Expand an Objective (`▶`) to see its Key Results. Expand a Key Result (`▶`) to see the Work Items linked to it.
-   **Progress Indicators**: Progress bars at the Objective and Key Result levels show aggregated and individual completion percentages, respectively.

### Objective Columns

| Column | Description |
| :--- | :--- |
| **TITLE** | The name of the Objective. |
| **PROGRESS** | The overall completion percentage, calculated from its KRs. |
| **STATUS** | The current status (e.g., `In Progress`). |
| **ASSIGNED TO**| The owner responsible for the Objective. |
| **ACTIONS** | **`+`** (Add Key Result), **Edit** (pencil), **Delete** (trash can). |

### Key Result Columns (Visible when Objective is expanded)

| Column | Description |
| :--- | :--- |
| **TITLE** | A description of the measurable outcome. |
| **WEIGHT** | The importance of this KR to the overall Objective's progress. |
| **PROGRESS** | The individual completion percentage for this KR. |
| **ASSIGNEE** | The person responsible for the KR. |
| **ACTIONS** | **`+`** (Add Work Item), **Edit** (pencil), **Delete** (trash can). |

### Work Item Columns (Visible when Key Result is expanded)

| Column | Description |
| :--- | :--- |
| **KEY** | The unique identifier of the linked Work Item (e.g., `PH2-1127`). |
| **PROJECT** | The project the Work Item belongs to. |
| **STATUS** | The current status of the Work Item (e.g., `Completed`). |
| **PRIMARY/SECONDARY ASSIGNEE**| The person(s) responsible for the Work Item. |
| **ACTIONS** | **Delete** (trash can) to unlink the Work Item from this KR. |

## 3. How to Create a New Objective

1.  From the main OKR dashboard, click the **+ Create New Objective** button.
2.  In the "New Objective" modal, fill in the details: **Title** `*`, **Description**, **Assignee**, and **Start/End Date**.
3.  Click the **Add** button to save. Your new Objective will now appear on the dashboard.

## 4. How to Add and Manage Key Results

### Adding a New Key Result
1.  Find the Objective you want to work on in the list.
2.  In that Objective's row, click the **`+` (Add Key Result)** icon.
3.  The "New Key Result" modal will appear. Fill in the details:
    -   **Title** `*`: A specific, measurable title (e.g., "Increase customer retention by 15%").
    -   **Description**: Optional context about the KR.
    -   **Assignee**: The user responsible for this KR.
    -   **Weight** `*`: A numerical value representing this KR's contribution to the Objective's progress.
4.  Click **Save**. The new Key Result will now appear nested under its parent Objective.


## 5. How to Link Work Items to Key Results

This is where your strategy meets daily execution.

1.  Locate the Key Result you wish to associate work with.
2.  In that Key Result's row, click the **`+` (Add Work Item)** icon.
3.  The "Add Work Items" modal will appear.
4.  Use the **Work Items** dropdown menu to search for and select one or more existing work items from your projects.
5.  Click **Save**. The selected Work Items will now appear nested under the Key Result.

### Managing Linked Work Items
-   **Updating Progress**: The status and progress of linked Work Items directly contribute to the progress of the parent Key Result.
-   **Unlinking Work Items**: To remove a Work Item's association from a Key Result, click the **Delete** (trash can) icon next to the Work Item in the expanded view.

::: warning Unlinking vs. Deleting
Unlinking a Work Item from a Key Result **does not** delete the Work Item itself. The task still exists in its original project; it is simply no longer contributing to this OKR.
:::