---
title: SSO Settings (Allowed Domains)
description: Control which email domains can auto-provision new Zymmr users through OIDC Single Sign-On.
head:
  - - meta
    - name: keywords
      content: sso settings, allowed domains, jit provisioning, auto-provisioning, zymmr sso, oidc domains
outline: deep
---

# SSO Settings (Allowed Domains)

**SSO Settings** controls which email domains are allowed to automatically create new
Zymmr users when they sign in through an OIDC provider (Google, Microsoft 365, or a custom
provider). This is your guardrail against unexpected accounts being created via SSO.

Open it in Zymmr at **Admin -> SSO -> Settings** (`/administrator/sso/settings`).

## Allowed domains for SSO auto-provisioning

Add each email domain that is allowed to create new users via OIDC SSO.

| Behavior | Result |
|----------|--------|
| List is empty | Any account from an enabled SSO provider can auto-provision a new user |
| List has domains | Only matching email domains can auto-create users via SSO |
| Existing Zymmr users | Not affected by this list - disable the user account to revoke access |

::: warning Empty list = open
If no domains are configured, any email can auto-provision via SSO. Add your domains before
inviting users. Removing the last domain requires a confirmation.
:::

Changes are **saved immediately** as you add or remove a domain.

## How to enter a domain

Enter the bare domain only.

Correct:

```text
your-company.com
```

Incorrect:

```text
@your-company.com
user@your-company.com
https://your-company.com
```

Do not include `@`, a full email address, a URL scheme, or a path.

## Important scope notes

- This list governs **OIDC auto-provisioning only** (the "Continue with ..." buttons).
- It is **separate** from **LDAP / Active Directory Domain Routing**, which is configured on
  the [LDAP](./ldap) / [Active Directory](./active-directory) pages.
- It does **not** block existing users. To stop an existing user from signing in, disable
  their Zymmr user account.
- The `Administrator` account always keeps password login as an emergency escape hatch.

## Example

To allow only your company's Google/Microsoft accounts to create Zymmr users via SSO:

1. Open **Admin -> SSO -> Settings**.
2. Add `your-company.com`.

Now a user signing in with `someone@your-company.com` can auto-provision, while a personal
account from another domain cannot create a new Zymmr user via SSO.
