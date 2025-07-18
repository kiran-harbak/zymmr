---
title: Zymmr Integrations
description: A guide for administrators on connecting Zymmr with code hosting platforms like GitHub and Bitbucket to enhance project visibility.
head:
  - - meta
    - name: keywords
      content: integrations, github, bitbucket, gitlab, devops, version control, administration, zymmr
outline: deep
---

# Zymmr Integrations

::: info Overview
The Integrations feature, found in **Global Settings** ⚙️, allows you to seamlessly connect your project management with your development workflows. By linking Zymmr to platforms like GitHub and Bitbucket, you can achieve centralized visibility, track code changes directly against work items, and gain deeper insights into your software development lifecycle.
:::

## 1. Overview of Supported Integrations

The main Integrations screen displays the various third-party development tools that Zymmr can connect with. Each integration is presented in a card format, showing:

-   **Platform Name**: (e.g., GitHub, Bitbucket, GitLab).
-   **Description**: A brief explanation of the benefits of the integration.
-   **Status/Action**: A **Connect** button if not yet configured, or an indication if it's already connected or "Coming Soon."

Currently, Zymmr supports integrations with:
-   **GitHub**: A popular platform for version control and collaboration.
-   **Bitbucket**: A Git-based code hosting and collaboration tool.
-   **GitLab**: A comprehensive DevOps platform. (Status: Coming Soon)

## 2. Setting Up an Initial Connection

To activate an integration, you must provide authentication credentials obtained from the external platform.

1.  From the main Integrations screen, click the **Connect** button on the desired integration's card.
2.  You will be redirected to a configuration screen for that specific integration.
3.  To establish a secure connection, you will need to provide:

| Field           | Description                                                                                               |
| :-------------- | :-------------------------------------------------------------------------------------------------------- |
| **Client Id**   | A unique identifier for your Zymmr application with the external service.                                   |
| **Client Secret** | A confidential key used to authenticate your application.                                                 |

::: tip Where to Find Credentials
These credentials must be obtained from your organization's developer settings or OAuth applications section within your GitHub or Bitbucket account. Please refer to their official documentation for creating OAuth credentials.
:::

Once you've entered the credentials, click the **Connect** button to establish the link.

## 3. Managing Connected Repositories

After a successful connection, you can manage which specific organizations and repositories are linked to Zymmr.

-   **Linked Repositories**: This column on the left shows the repositories currently syncing data with Zymmr.
-   **Available Repositories**: This column on the right lists all repositories from your connected organizations that are available to be linked.
-   **Add Organization Button**: Allows you to connect additional organizations (e.g., different departments, client accounts) to your Zymmr instance.

**To link a repository**: Click the **`+`** icon next to its name in the "Available Repositories" list.
**To unlink a repository**: Click the **`x`** (or remove) icon next to its name in the "Linked Repositories" list.

## 4. How Integrations Benefit Your Work Items

This is the key outcome of setting up integrations: bringing code-level details directly into your project management context.

Once an integration is connected and a repository is linked, you will find a dedicated **Integration** tab or section within individual Work Item details (e.g., inside a specific Task or Bug).

This tab will display details of commits that reference that specific work item, including:
-   Commit messages
-   The author of the commit
-   The date and time of the commit
-   Direct links back to the commit in your code repository

This provides project managers and other stakeholders with enhanced visibility into development progress without ever leaving Zymmr.

::: warning Treat Credentials Securely
Your **Client ID** and **Client Secret** are sensitive credentials. Treat them like passwords and store them securely. Do not expose them in public repositories or unsecure documents.
:::