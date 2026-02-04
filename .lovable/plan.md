

# Update n8n Webhook to Production URL

A simple one-line change to switch the contact form from the test webhook to the production webhook.

---

## Change Summary

| Setting | Current (Test) | New (Production) |
|---------|----------------|------------------|
| Webhook URL | `https://conceptzoa.app.n8n.cloud/webhook-test/snapkaza-contact` | `https://conceptzoa.app.n8n.cloud/webhook/snapkaza-contact` |

The only difference is removing `-test` from the URL path.

---

## File to Modify

| File | Line | Change |
|------|------|--------|
| `src/components/landing/Contact.tsx` | 20 | Update `N8N_WEBHOOK_URL` constant |

---

## Technical Details

**Line 20 update:**

From:
```typescript
const N8N_WEBHOOK_URL = "https://conceptzoa.app.n8n.cloud/webhook-test/snapkaza-contact";
```

To:
```typescript
const N8N_WEBHOOK_URL = "https://conceptzoa.app.n8n.cloud/webhook/snapkaza-contact";
```

---

## Note

Make sure your n8n production webhook is active and configured to handle the same payload structure (name, email, subject, message) before going live.

