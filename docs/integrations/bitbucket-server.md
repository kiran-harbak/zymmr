---
title: Bitbucket Server Integration
description: Connect Zymmr with self-hosted Bitbucket Server for enterprise environments
head:
  - - meta
    - name: keywords
      content: bitbucket server integration, self-hosted, enterprise, webhook, repository linking, zymmr
outline: deep
---

# Bitbucket Server Integration

::: info Overview
Bitbucket Server integration allows you to connect Zymmr with your self-hosted Bitbucket Server instance, providing real-time commit tracking and work item linking capabilities in enterprise environments. This integration captures commit events via webhooks and enables search functionality across your development workflow.
:::

## Prerequisites

Before setting up Bitbucket Server integration, ensure you have:

- **Bitbucket Server Access**: Access to your self-hosted Bitbucket Server instance
- **Admin Access**: Administrator privileges in both Bitbucket Server and Zymmr
- **Repository Access**: Access to the repositories you want to integrate
- **Network Connectivity**: Zymmr must be able to reach your Bitbucket Server instance

## Setting Up Bitbucket Server Integration

### Step 1: Configure Webhook in Bitbucket Server

1. **Navigate to Bitbucket Server**:
   - Log in to your Bitbucket Server instance
   - Go to the desired **Project** or **Repository** (Recommended: Project level)
   - Open **Settings** → **Webhooks** → **Create webhook**

2. **Configure Webhook Settings**:
   ```
   Name: Zymmr Commits Listener
   URL: {ZymmrBaseURL}/api/method/everest.integration.api.process_webhook
   Status: Enabled/Active
   Authentication: None (for development)
   SSL/TLS: Keep verification ON for HTTPS
   ```

3. **Select Events**:
   - Under **Repository**, select only:
     - **Repository → Push** (pushes, branch/tag create/delete)

4. **Save Configuration**:
   - Click **Save** to create the webhook

::: tip Webhook URL Configuration
Replace `{ZymmrBaseURL}` with your Zymmr server URL. For example:
- Development: `http://192.168.5.156:8000`
- Production: `https://your-zymmr-instance.com`
:::

### Step 2: Verify Integration

1. **Test the Connection**:
   - In Bitbucket Server, use the "Test connection" feature
   - If it fails due to payload constraints, temporarily set the URL to the health endpoint:
     ```
     {ZymmrBaseURL}/api/method/everest.integration.api.health_check
     ```
   - Then switch back to the webhook receiver URL

2. **Verify Integration**:
   - Push a commit with a work item key (e.g., "Fix bug ZYM-123")
   - Check the Zymmr work item page for the commit in the "Integrations" tab

## Work Item Integration

### Automatic Commit Linking

Once Bitbucket Server integration is active, commits that reference work items will be automatically linked:

- **Commit Messages**: Include work item IDs in commit messages (e.g., "Fix bug ZYM-123")
- **Real-time Processing**: Commits are captured and indexed immediately
- **Search Integration**: Find commits by work item key across all repositories

### Viewing Integration Data

In individual work items, you'll find an **Integration** tab that displays:

- **Commit History**: All commits linked to the work item
- **Repository Information**: Source repository details
- **Author Information**: Commit author with avatar
- **Direct Links**: Quick access to Bitbucket Server commits and repositories
- **Pagination**: Navigate through large commit histories

## Configuration Options

### Webhook Settings

Configure webhooks for real-time updates:

1. **Project-Level Webhooks**: Recommended for managing multiple repositories
2. **Repository-Level Webhooks**: For single repository integration
3. **Event Selection**: Configure specific events to capture
4. **Security**: Enable SSL verification for production environments

### Search Configuration

- **Pattern Matching**: Search for work item keys in commit messages
- **Pagination**: Navigate through large commit histories
- **Real-time Results**: Live search as commits are processed

## Enterprise Features

### Multi-Repository Support

- **Project-Level Integration**: Single webhook for all repositories in a project
- **Repository Management**: Handle commits from multiple repositories
- **Centralized Search**: Search across all integrated repositories

### Network Security

Enterprise network considerations:

- **Firewall Rules**: Configure firewall rules to allow Zymmr-Bitbucket Server communication
- **VPN Access**: Ensure Zymmr can access Bitbucket Server through VPN if required
- **SSL/TLS**: Use HTTPS for all production communication

## Testing and Debugging

### Health Check

Test the integration connectivity using curl:

```bash
curl -s {ZymmrBaseURL}/api/method/everest.integration.api.health_check
```

Expected response:
```json
{
  "status": "healthy",
  "service": "bitbucket-server-integration",
  "timestamp": "2025-01-27T10:30:00Z"
}
```

## Troubleshooting

### Common Issues

**Connection Failed**:
- Verify Bitbucket Server URL is correct and accessible
- Check network connectivity between Zymmr and Bitbucket Server
- Ensure firewall rules allow communication
- Verify SSL certificate is valid (if using HTTPS)

**Webhook Not Triggering**:
- Verify webhook URL is accessible from Bitbucket Server
- Check webhook permissions in Bitbucket Server
- Ensure webhook events are properly configured
- Verify network connectivity for webhook delivery

**Commits Not Appearing**:
- Verify work item ID format in commit messages (e.g., ZYM-123)
- Check integration tab is enabled for work items
- Ensure repository is properly linked via webhook
- Verify webhook is active and receiving events

### Log Files

If you need to check logs for troubleshooting:
- **Bench Log**: `frappe-bench/logs/bitbucket-server-integration.log`
- **Site Log**: `sites/<your-site>/logs/bitbucket-server-integration.log`

## Security Considerations

::: warning Security Best Practices
- **Network Security**: Use HTTPS for all communication between Zymmr and Bitbucket Server
- **Webhook Security**: Verify webhook signatures for production environments
- **Repository Access**: Only link repositories that your team needs access to
- **Regular Review**: Periodically review linked repositories and remove unused connections
- **Certificate Management**: Keep SSL certificates up to date and properly configured
- **Firewall Configuration**: Restrict access to necessary ports and endpoints only
:::

## Limitations

### Current Scope
- **Forward-only**: Only captures commits after webhook deployment
- **Repository Events**: Only push events (pushes, branch/tag changes)
- **Search Scope**: Limited to commit messages (not file changes or PRs)

## Support

If you encounter issues not covered here:

1. Check the [Bitbucket Server documentation](https://confluence.atlassian.com/bitbucketserver0818/manage-webhooks-1369443387.html)
2. Review Zymmr integration logs
3. Contact Zymmr support with specific error details

For detailed technical documentation and development guides, please contact our support team.
