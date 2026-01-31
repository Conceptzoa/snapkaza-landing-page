
# Dual EmailJS Template Configuration

Update the contact form to send emails to both the client template and your internal alert template simultaneously.

---

## Summary of Changes

| Change | Description |
|--------|-------------|
| **Add Internal Template ID** | Add new constant for `template_scehzw3` |
| **Update Submission Logic** | Send to both templates using `Promise.all()` |

---

## Configuration Update

### Template IDs

| Template | ID | Purpose |
|----------|-----|---------|
| Client Template | `template_s04o9o8` | Confirmation/response to the sender |
| Internal Alert | `template_scehzw3` | Internal notification for your team |

---

## Technical Implementation

### File to Modify

**`src/components/landing/Contact.tsx`**

### Changes

1. **Add second template constant** (line 23):
```text
EMAILJS_TEMPLATE_ID_CLIENT = "template_s04o9o8"
EMAILJS_TEMPLATE_ID_INTERNAL = "template_scehzw3"
```

2. **Update onSubmit function** - Use `Promise.all()` to send to both templates in parallel:
   - Both emails use the same `templateParams` (name, email, subject, message)
   - Both requests run simultaneously for faster submission
   - If either fails, the error is caught and displayed

### Updated Submission Flow

```text
Form Submit
    |
    v
Build templateParams
    |
    v
+---------------------------+
|      Promise.all()        |
|  +---------------------+  |
|  | Send to Client      |  |
|  | (template_s04o9o8)  |  |
|  +---------------------+  |
|           +               |
|  +---------------------+  |
|  | Send to Internal    |  |
|  | (template_scehzw3)  |  |
|  +---------------------+  |
+---------------------------+
    |
    v
Success Toast / Reset Form
```

---

## Both Templates Receive

| Variable | Value |
|----------|-------|
| `{{name}}` | User's full name |
| `{{email}}` | User's email address |
| `{{subject}}` | Selected inquiry type |
| `{{message}}` | User's message |

Ensure your internal alert template (`template_scehzw3`) uses these same variable names to receive the form data correctly.
