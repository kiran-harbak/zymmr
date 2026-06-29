---
title: Signing in with SSO
description: How to sign in to Zymmr using Single Sign-On with your company Google, Microsoft, or directory account.
head:
  - - meta
    - name: keywords
      content: sso login, sign in, continue with google, continue with office 365, zymmr login, single sign-on user guide
outline: deep
---

# Signing in with SSO

If your organization uses Single Sign-On (SSO), you sign in to Zymmr with your existing
company account instead of a separate Zymmr password. This page is for everyday users.

::: info You do not need a separate Zymmr password
With SSO, your identity provider (for example Google or Microsoft) checks who you are.
Zymmr never sees or stores your company password.
:::

## Option 1 - Sign in with a button (Google, Microsoft, Okta)

If your company uses Google, Microsoft 365, or another OIDC provider, the Zymmr login page
shows a button such as **Continue with Google** or **Continue with Office 365**.

1. Open your Zymmr URL.
2. Click the **Continue with &lt;provider&gt;** button.
3. Sign in at your provider (and approve access the first time).
4. You are returned to Zymmr and land on your dashboard.

## Option 2 - Sign in with email and password (LDAP / Active Directory)

If your company uses LDAP or Active Directory, there is **no special button**. You use the
normal form with your **company email and directory password**:

1. Open your Zymmr URL.
2. Enter your company email (for example `you@your-company.com`).
3. Enter your directory password.
4. Click **Login**.

Zymmr automatically checks your password against your company directory based on your email
domain.

## First time you sign in

The first time you sign in via SSO, Zymmr creates your account automatically. You do not
need to register beforehand. After that, your account is reused on every login.

::: tip Use the same email everywhere
Zymmr matches you by email address. Always sign in with the same company email so you keep
the same Zymmr account and don't accidentally create a duplicate.
:::

## Common questions

### I don't see a sign-in button

Your organization may use the email + password method (LDAP / Active Directory), or SSO may
not be enabled yet. Try signing in with your company email and password, or contact your
Zymmr administrator.

### My login was rejected after I authenticated

Your account or email domain may not be permitted yet. Contact your Zymmr administrator to
confirm your access.

### I was sent to my company login page unexpectedly

That is expected with SSO - your identity provider handles authentication, then returns you
to Zymmr.

### I'm signed out / my session expired

Sign in again using the same method. Signing out of Zymmr ends your Zymmr session; it does
not necessarily sign you out of your Google or Microsoft account.

## Need help?

Contact your organization's Zymmr administrator. For broader help, see
[Contact Us](/contact-us).
