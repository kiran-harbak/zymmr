---
title: SSO Troubleshooting
description: Fix common Zymmr Single Sign-On problems - redirect URI mismatch, invalid client, missing buttons, domain rejections, and LDAP bind errors.
head:
  - - meta
    - name: keywords
      content: sso troubleshooting, redirect_uri_mismatch, invalid_client, ldap bind failed, zymmr sso errors
outline: deep
---

# SSO Troubleshooting

Common Single Sign-On issues and how to fix them. For setup steps, see the per-provider
guides linked from the [SSO Overview](./).

## OIDC (Google, Microsoft 365, Custom)

### "redirect_uri_mismatch"

The redirect URI sent by Zymmr does not exactly match a redirect URI registered in your
provider.

Fix:

1. Copy the `redirect_uri` shown on the provider's error page.
2. Compare it character-for-character with the value registered in the provider.
3. Add or correct the exact URI in the provider, then retry.

Common mistakes:

- A trailing slash that Zymmr does not send.
- Using `http` in production instead of `https`.
- Registering a login page path instead of the callback path.

Expected callback paths:

| Provider | Redirect URI |
|----------|--------------|
| Google | `https://your-zymmr-domain.com/api/method/frappe.www.login.login_via_google` |
| Microsoft 365 | `https://your-zymmr-domain.com/api/method/frappe.integrations.oauth2_logins.login_via_office365` |
| Custom OIDC | `https://your-zymmr-domain.com/api/method/frappe.www.login.login_via_frappe` |

### Google: "origin_mismatch"

The browser origin is not listed under the OAuth client's Authorized JavaScript origins.
Add the origin only (no path):

```text
https://your-zymmr-domain.com
```

### "invalid_client" / token exchange fails

The Client Secret is wrong or does not match the Client ID.

Fix:

- Edit the provider in Zymmr and paste the correct **Client Secret**.
- For Microsoft 365, use the secret **Value**, not the Secret ID.
- The Client ID cannot be used as the Client Secret.

### The "Continue with ..." button does not appear

Check, in **Admin -> SSO -> Providers**:

1. The provider is saved.
2. **Enable on login page** is checked.
3. Client ID is present.
4. Client Secret is present (status should not be **Missing secret**).
5. Refresh the login page after saving.

### Google: "app is not available to this user"

The audience is **Internal** but the user is outside your Workspace organization, or the
app is **External** in Testing mode and the user is not a listed test user.

Fix:

- For company-only login, use a Workspace account in the same organization.
- For external/personal test accounts, set Audience to **External** and add the account
  under Test users.

### User is rejected after authenticating

The user's email domain is not on the allowed list.

Fix: add the user's email domain in [SSO Settings](./settings), or test with an
already-allowed domain.

### Login succeeds but creates a new (duplicate) user

Zymmr matches users by email. If the provider email differs from the existing Zymmr user
email, Zymmr treats it as a different user.

Example - these are different Zymmr users:

```text
jane.doe@your-company.com
jane.doe@corp.your-company.com
```

Fix: use the same email in the provider and in Zymmr.

## LDAP / Active Directory

### "Test Connection" fails / bind failed

Zymmr cannot reach the directory or cannot bind with the service account.

Check:

- The Server URL is reachable from the Zymmr server (host, port, `ldap://` vs `ldaps://`).
- The Base DN (bind DN) and Bind Password are correct.
- A firewall is not blocking the LDAP/LDAPS port.

### "Invalid credentials" for a real user

The search string or attribute does not match what the user types.

Check:

- The LDAP Search String uses `{0}` for the value the user enters (email-first in Zymmr).
- For Active Directory, prefer `(&(objectClass=user)(userPrincipalName={0}))`.
- For OpenLDAP, prefer `(&(objectclass=posixAccount)(mail={0}))`.

### User signs in but has the wrong name/email in Zymmr

The field mappings point at the wrong attributes.

Fix: set Directory Type to **Custom** and adjust Email / Username / First Name / Last Name
fields to match your directory's attributes.

### User is routed to local password instead of the directory

The user's email domain is not listed in **Domain Routing** on the
[LDAP](./ldap) / [Active Directory](./active-directory) page. Add the domain.

## General

### Administrator cannot get in

The `Administrator` account always keeps password login as an escape hatch. Sign in with the
Administrator email and password directly, then fix the provider configuration.

### Still stuck?

Gather the exact error text (and the `redirect_uri` if shown) and contact support via
[Contact Us](/contact-us).
