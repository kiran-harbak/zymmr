---
title: Custom OIDC Setup (Okta, Auth0, Keycloak)
description: Connect Zymmr to any OpenID Connect (OIDC) provider such as Okta, Auth0, or Keycloak using the Custom provider option.
head:
  - - meta
    - name: keywords
      content: custom oidc, okta sso, auth0 sso, keycloak sso, openid connect, oauth, zymmr sso setup
outline: deep
---

# Custom OIDC Setup (Okta, Auth0, Keycloak)

Use the **Custom** provider to connect Zymmr to any standard OpenID Connect (OIDC)
identity provider that is not Google or Microsoft 365 - for example **Okta**, **Auth0**,
or **Keycloak**. After setup, the login page shows a **Continue with &lt;your provider&gt;**
button.

::: info What happens at login
Zymmr does not store the user's provider password. The provider authenticates the user and
returns identity claims, then Zymmr creates or links the local user by email.
:::

## Before you start

You need:

1. Administrator access in Zymmr.
2. Admin access to your OIDC provider to register a new application and obtain a
   **Client ID** and **Client Secret**.
3. Your provider's OIDC endpoints (authorize URL and token URL).
4. Your public Zymmr URL (for example `https://your-zymmr-domain.com`).

## Redirect URI

Register this redirect URI (also called callback URL) in your OIDC provider:

```text
https://your-zymmr-domain.com/api/method/frappe.www.login.login_via_frappe
```

Replace `your-zymmr-domain.com` with your real Zymmr URL and use **HTTPS** in production.

::: warning Confirm the redirect URI
The redirect URI must match exactly what Zymmr sends. After you save the provider in
Zymmr, confirm the redirect URI registered in your IdP matches the value Zymmr uses for
that provider before going live.
:::

## Step 1 - Register an application in your OIDC provider

In your provider, create a new **Web application** (authorization code flow) and set the
redirect URI above. Then copy the **Client ID** and **Client Secret**.

Note your provider's OIDC endpoints. Common patterns:

::: code-group

```text [Okta]
Base URL:         https://your-org.okta.com
Authorize URL:    https://your-org.okta.com/oauth2/default/v1/authorize
Access Token URL: https://your-org.okta.com/oauth2/default/v1/token
```

```text [Auth0]
Base URL:         https://your-tenant.us.auth0.com
Authorize URL:    https://your-tenant.us.auth0.com/authorize
Access Token URL: https://your-tenant.us.auth0.com/oauth/token
```

```text [Keycloak]
Base URL:         https://keycloak.your-company.com/realms/your-realm
Authorize URL:    https://keycloak.your-company.com/realms/your-realm/protocol/openid-connect/auth
Access Token URL: https://keycloak.your-company.com/realms/your-realm/protocol/openid-connect/token
```

:::

::: tip Find the exact endpoints
Most providers publish their endpoints at
`https://<your-provider>/.well-known/openid-configuration`. Use the `authorization_endpoint`
and `token_endpoint` values shown there.
:::

## Step 2 - Configure the provider in Zymmr

In Zymmr, open **Admin -> SSO -> Providers** (`/administrator/sso/providers`), click
**Add Provider**, and choose the custom preset.

| Field | Value |
|-------|-------|
| Preset | `Okta / Custom OIDC` |
| Provider Name | A label, for example `Okta` (this is the button text users see) |
| Client ID | Client ID from your provider |
| Client Secret | Client Secret from your provider |
| Base URL | Your provider base URL, e.g. `https://your-org.okta.com` |
| Authorize URL | Your provider's authorize endpoint |
| Access Token URL | Your provider's token endpoint |
| Enable on login page | Checked |

Click **Save**.

Expected result:

1. The provider appears in the SSO Providers list with status **Enabled**.
2. The Zymmr login page shows **Continue with &lt;Provider Name&gt;**.

::: warning Provider Name is required for custom providers
Base URL, Authorize URL, and Access Token URL are all required and must be valid URLs.
The Provider Name becomes the button label and the provider's internal identifier.
:::

## Step 3 - Restrict allowed domains (recommended)

Before inviting users, set which email domains may auto-provision via SSO. See
[SSO Settings](./settings).

## Step 4 - Test login

1. Open the Zymmr login page in a private/incognito window.
2. Click **Continue with &lt;Provider Name&gt;**.
3. Authenticate at your provider.
4. Confirm you land in Zymmr.

A first-time user's Zymmr account is created automatically. Logging in again reuses the
same Zymmr user (no duplicates).

## Notes and limitations

- **Endpoint auto-discovery** (`/.well-known/openid-configuration`) is planned for a future
  release. For now, enter the authorize and token URLs manually.
- Editing a provider lets you leave the Client Secret blank to keep the existing value.
- If the button shows **Missing secret**, re-enter the Client Secret.

## Troubleshooting

See the consolidated [Troubleshooting](./troubleshooting) page for redirect URI mismatches,
missing buttons, and domain-allowlist rejections.
