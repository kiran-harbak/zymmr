---
title: Work Schedule
description: A guide for administrators on configuring default work days and time tracking settings for all users in Zymmr.
head:
  - - meta
    - name: keywords
      content: work schedule, time tracking, working hours, capacity, administration, zymmr
outline: deep
---

# Work Schedule

::: info Overview
The Work Schedule settings,  allow administrators to define the standard working days and time tracking parameters for the entire organization. This global configuration is crucial for accurate capacity planning, resource management, and timeline calculations across all projects in Zymmr.
:::

The settings are found in **Global Settings** ⚙️, divided into two main tabs: **Default Work Schedule** and **Time Tracking**.

## Default Work Schedule

This tab is used to define the exact working days of the week for your organization. This schedule is applied to all users and is taken into account when calculating workload and capacity.

Use the checkboxes to select the standard working days for your team:
- Sunday
- Monday
- Tuesday
- Wednesday
- Thursday
- Friday
- Saturday

Click the **Update** button to save your changes.

::: info Note
By default, the capacity for *working days* is set to 8 hours. This value can be customized in the **Time Tracking** tab.
:::

## Time Tracking

This tab is used to define the standard working hours per day and customize how time is displayed throughout the system.

| Field                           | Description                                                                                                                                     | Options / Example                                                                        |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Working Hours per Day** `*`   | The standard number of hours in a workday. This value is the foundation for capacity and resource management calculations.                          | `8`                                                                                      |
| **Time Display Format** `*`     | Choose how logged time and estimates are displayed across Zymmr.                                                                                | - `Pretty HH:mm` (e.g., `2h 32m`)<br>- `Pretty wdhm` (e.g., `2w 4d 6h 45m`)                 |
| **Add Timelog (before/after days)** `*` | Specify the number of past and future days for which users are permitted to log time. A value of `2` allows logging for the past 2 days, today, and the next 2 days. | `2`                                                                                      |

Click the **Update** button to apply your settings.

::: warning Important Global Setting
These settings are applied globally and affect **all users** in the system. Changes will impact resource management calculations, workload reporting, and timeline estimations across all projects.
:::