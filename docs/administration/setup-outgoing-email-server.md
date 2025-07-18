---
title: Setup Outgoing Email Server
description: A guide for administrators on how to configure the outgoing email server (SMTP) for Zymmr notifications.
head:
  - - meta
    - name: keywords
      content: outgoing email, smtp, server setup, notifications, administration, zymmr
outline: deep
---

# Outgoing Email Server

::: info Overview
Configuring the outgoing email server (SMTP) is a critical administrative task that enables Zymmr to send email notifications for events like work item assignments, comments, and status changes. This guide walks you through the setup process.
:::

## Configuration Steps

Follow these steps to configure your email server settings.

1.  Navigate to **Global Settings** ⚙️ in the Zymmr administration area.
2.  Locate and select the **Outgoing Email Server** option from the sidebar menu.
3.  Fill out the configuration form with the details of your SMTP provider.

## Configuration Form Fields

| Field               | Description                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Email Address**   | Enter the "From" email address that Zymmr will use to send notifications (e.g., `noreply@yourcompany.com`).                                   |
| **User Name**       | The username for authenticating with your SMTP server. This is often the same as the email address.                                          |
| **Password**        | The password associated with the username. For security, it's recommended to use an app-specific password if your provider supports it.       |
| **Use TLS / Use SSL** | Check the appropriate box to enable transport layer security. Most modern SMTP servers require **TLS** or **SSL**. Consult your provider's documentation. |
| **Outgoing Server** | The hostname of your SMTP server (e.g., `smtp.gmail.com` or `smtp.office365.com`).                                                            |
| **Port**            | The port number for the outgoing server. Common ports are `587` (for TLS) and `465` (for SSL). If using Google Cloud, try port `2525`.        |

After filling in all the required fields, click the **Save** button to apply the configuration.

::: tip Test Your Configuration
After saving your settings, we recommend triggering an action that sends an email (like assigning a task to yourself) to verify that the configuration is working correctly.
:::

::: warning Important Notes
- **Correct Credentials**: Ensure the username and password are correct. Incorrect credentials are the most common cause of setup failure.
- **Firewall Rules**: Verify that your server's firewall allows outgoing connections on the specified SMTP port.
- **Dedicated Email Account**: For security and deliverability, it is best practice to use a dedicated service account or "no-reply" email address rather than a personal user account.
:::
