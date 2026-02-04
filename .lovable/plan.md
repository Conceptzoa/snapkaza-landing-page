
# Replace EmailJS with n8n Webhook

This update will remove the EmailJS integration and replace it with a direct POST request to your n8n webhook, keeping all existing form fields intact.

---

## Summary of Changes

| Item | Action |
|------|--------|
| EmailJS import | Remove |
| EmailJS constants | Remove |
| EmailJS dependency | Remove from package.json |
| Form fields | Keep all (name, email, subject, message) |
| Submission logic | Replace with fetch POST to n8n webhook |
| Loading state | Already exists (keep as-is) |
| Toast notifications | Keep existing sonner toasts |

---

## Webhook Configuration

| Setting | Value |
|---------|-------|
| **Endpoint** | `https://conceptzoa.app.n8n.cloud/webhook-test/snapkaza-contact` |
| **Method** | POST |
| **Content-Type** | application/json |

**Payload Example:**
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "subject": "Property Launch - Essential",
  "message": "I'm interested in your services..."
}
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/landing/Contact.tsx` | Remove EmailJS code, update onSubmit to use fetch |
| `package.json` | Remove `@emailjs/browser` dependency |

---

## Technical Details

### Contact.tsx Changes

**1. Remove EmailJS imports and constants (lines 6, 20-24):**
- Remove `import emailjs from "@emailjs/browser"`
- Remove all four EmailJS configuration constants

**2. Remove helper function (lines 71-73):**
- Remove `getSubjectLabel` function (will inline the logic in onSubmit)

**3. Update onSubmit function (lines 75-110):**

Replace the EmailJS Promise.all with a single fetch call:

```text
Current Flow:
  EmailJS.send() x2 → success toast → reset form

New Flow:
  fetch POST to n8n → check response.ok → success/error toast → reset form on success
```

The new implementation will:
- Build JSON payload with name, email, subject (human-readable label), and message
- Send POST request with Content-Type: application/json
- Check `response.ok` (status 200-299) for success
- Show success toast and reset form on success
- Show error toast on failure (network error or non-2xx response)
- Log errors to console for debugging

### package.json Changes

**Remove dependency (line 16):**
- Delete `"@emailjs/browser": "^4.4.1"` from dependencies

---

## What Stays the Same

- All form fields (name, email, subject dropdown, message)
- Zod validation schema
- Loading spinner on submit button
- Toast notification styling and messages
- Form reset behavior on success
- Subject dropdown sends human-readable label (e.g., "Property Launch - Essential")

---

## Submission Flow

```text
User clicks "Send Message"
         │
         ▼
   Zod validates all fields
         │
         ▼
   Button shows loading spinner
         │
         ▼
   POST to n8n webhook
         │
    ┌────┴────┐
    │         │
  2xx      Error
    │         │
    ▼         ▼
Success    Error
 toast     toast
    │         │
    ▼         │
Reset form    │
    │         │
    └────┬────┘
         │
         ▼
   Button re-enables
```
