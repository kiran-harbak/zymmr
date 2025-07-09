---
title: Report Schedules
description: Automate the delivery of your custom Analytics Reports to stakeholders via email on a recurring basis.
head:
  - - meta
    - name: keywords
      content: report schedule, scheduled reports, email reports, automation, analytics, zymmr
outline: deep
---

# Zymmr Report Schedules

::: info Overview
The Report Schedules feature allows you to automate the delivery of your custom reports to key stakeholders. Effortlessly keep your team, clients, or management informed by scheduling reports to be sent directly to their inboxes on a recurring basis.
:::

## Accessing the Report Schedules
1. Click **Reports** in the main navigation panel.
2. Select **Analytics** from the list of available reports.
3. Click on the envelope/mail icon below the home icon present on the left sidebar.

## 1. The Report Schedules Dashboard

The main Report Schedules screen provides a comprehensive overview of all the automated report groups you have configured. This is your central hub for managing all scheduled deliveries.


The dashboard table includes the following information:

| Column          | Description                                                                                               |
| :-------------- | :-------------------------------------------------------------------------------------------------------- |
| **NAME**        | The custom name you've given the schedule (e.g., "Weekly Project Health Check").                          |
| **CREATOR**     | The user who set up the schedule.                                                                         |
| **RECIPIENTS**  | The users who will receive the report email.                                                              |
| **FREQUENCY**   | How often the report is sent (e.g., `Weekly`).                                                            |
| **REPORT GROUPS**| The specific reports included in this delivery. Click to open a modal showing the list of reports.       |
| **LAST SENT**   | The date and time the last report was successfully sent.                                                  |
| **NEXT RUN**    | The upcoming date and time for the next scheduled delivery.                                               |
| **STATUS**      | The current state of the schedule (`Enabled` or `Disabled`).                                              |
| **ACTIONS**     | View **Mail Log** (tray icon) or **Delete** (trash can icon).                                             |

## 2. How to Create a New Report Schedule

Creating a new schedule is a simple, step-by-step process. To begin, click the **`+ Create New Schedule`** button on the main dashboard to launch the setup wizard.

### Step 1: Configure the Schedule and Email
This first screen defines the core details of your schedule and the email that recipients will receive.

| Field             | Description                                                                                             |
| :---------------- | :------------------------------------------------------------------------------------------------------ |
| **Title**         | A descriptive name for your reference on the dashboard.                                                 |
| **Scheduled**     | Set the delivery frequency for the report to be sent.                                                   |
| **Subject**       | The subject line for the email that recipients will receive.                                            |
| **Message**       | The body of the email. You can include a brief explanation or context for the attached reports.         |
| **Attachment Type**| Choose the format for the report data attachments, such as `CSV`.                                      |

Once you have filled out these details, click **Select reports** to proceed.

### Step 2: Select the Reports
In this step, you will choose which of your saved Analytics Reports to include in the scheduled delivery.

-   **Search reports**: Use the search bar to quickly find specific reports.
-   **Available Reports**: This list shows all reports available to be added.
-   **Selected Reports**: Check the box next to any report in the "Available Reports" list to move it to the "Selected Reports" list.

After selecting all desired reports, click **Select recipients** to move to the final step.

### Step 3: Choose the Recipients
Finally, you need to specify who should receive the scheduled report email.

-   **Search recipients**: Quickly find users by typing their name.
-   **Available Recipients**: A list of all users in the system who can receive the report.
-   **Selected Recipients**: Check the box next to a user in the "Available Recipients" list to add them to the delivery.

Once you have added all the recipients, click the **Schedule** button to save and activate your new automated report. It will now appear on your main Report Schedules dashboard.

::: warning Prerequisite: Email Server
For this feature to function, a system administrator must have correctly configured the **Outgoing Email Server** in Global Settings. Without it, scheduled emails cannot be sent.
:::

::: tip Best Practices
-   **Use Clear Naming**: Give your schedules and email subjects clear, descriptive names so recipients instantly know what the email contains.
-   **Target Your Audience**: Create different schedules for different audiences (e.g., a detailed report for the project team and a high-level summary for stakeholders).
-   **Check the Mail Log**: If a user reports not receiving a scheduled email, use the **Mail Log** action on the dashboard to check the delivery status and troubleshoot any issues.
:::