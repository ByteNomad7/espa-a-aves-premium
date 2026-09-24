# Email delivery setup — Aves del Sur

## Current status

**Automatic contact-form delivery is not configured or tested.** The form in `tools/site/components.mjs` renders with `data-endpoint=""`; `public/assets/js/site.js` stops submission and displays an error when there is no endpoint. There is no email provider, SMTP client or enquiry API route in this repository. The contact page now offers a direct `mailto:info@avesdelsur.com` link; opening a user's email app does **not** establish that the mailbox exists or receives mail. Do not tell visitors their form submission succeeded.

## Provider expected and implementation required

Choose and verify a transactional email service **before** enabling automatic submissions. A provider with an HTTPS API (for example, Resend) would avoid storing SMTP credentials in client code; this is a suggestion, **not an existing integration or a configured account**. A server-side route must validate input and consent, rate-limit/limit spam, call the provider, return an explicit failure on delivery errors, and only return success after the provider accepts the message. Set the form's `data-endpoint` to that route only after it works. Confirm how the optional newsletter opt-in will be handled before transmitting it.

Proposed configuration **for a future provider implementation** (none of these variables are currently required or consumed by this site):

| Variable | Where | Purpose |
|---|---|---|
| `CONTACT_EMAIL` | non-secret setting | Destination `info@avesdelsur.com`. Public site copy currently comes from `tools/site/config.mjs`. |
| `EMAIL_FROM` | non-secret setting | Sender mailbox/domain verified with the chosen provider. Confirm that `info@avesdelsur.com` is permitted as sender before using it. |
| Provider-specific key (for example, `RESEND_API_KEY`) | **Replit Secret, server-side only** | Authenticates a future email API integration. Never expose it in generated HTML, frontend JS, commits or `.env.example`. |

If SMTP is chosen instead, its host/port/user and password must be configured for the server-side adapter (password as a Replit Secret); no SMTP implementation exists today. Do not add either set of credentials until a provider is chosen and an integration is implemented.

## Local development and production checklist

1. Confirm the business controls `info@avesdelsur.com` and can receive a test email sent from an external mailbox. A `mailto:` link is only a hand-off to the visitor's email program.
2. Select a provider, verify its sender domain, and add **provider-issued** DNS records at the domain registrar (typically SPF and DKIM; DMARC policy as advised by the mail provider). Do not infer records from the website's DNS setup. Mailbox MX records are separate from website hosting.
3. Add the provider key securely to the appropriate Replit development/production Secrets after selecting the provider; set non-secret sender/destination configuration separately. Never copy secrets into repository files.
4. Test the server route locally with a sandbox recipient, invalid payloads, spam attempts and provider failures. Ensure failure is reported as failure and no personal form data is logged unnecessarily.
5. Publish the app, set production secrets there if needed, and verify an actual end-to-end submission arrives at the destination mailbox. Update the privacy notice with the real processor/retention policy after legal review; remove the visible “not configured” notice only after verified delivery.

Until then, the direct email link is the available contact pathway; **automated form delivery remains pending**.