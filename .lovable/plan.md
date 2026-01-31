

# EmailJS Credentials Configuration

Update the contact form with your EmailJS credentials to enable email functionality.

---

## Changes Required

### File to Modify

**`src/components/landing/Contact.tsx`**

### Current Placeholders (lines 20-22)

| Constant | Current Value | New Value |
|----------|---------------|-----------|
| `EMAILJS_SERVICE_ID` | `YOUR_SERVICE_ID` | `service_2l0qm3e` |
| `EMAILJS_TEMPLATE_ID` | `YOUR_TEMPLATE_ID` | `template_s04o9o8` |
| `EMAILJS_PUBLIC_KEY` | `YOUR_PUBLIC_KEY` | `e66X25OZ_571CE0tV` |

---

## Template Variable Mapping

Your EmailJS template should use these variables, which are already configured in the form submission:

| Template Variable | Form Field | Description |
|-------------------|------------|-------------|
| `{{name}}` | Full Name | User's full name |
| `{{email}}` | Agency Email | User's email address |
| `{{subject}}` | Subject dropdown | Selected inquiry type (human-readable label) |
| `{{message}}` | Message | User's message content |

---

## Security Note

EmailJS public keys are designed to be used on the client-side and are safe to include in frontend code. They are not secret keys and cannot be used to access your EmailJS account settings or send emails without proper domain restrictions configured in your EmailJS dashboard.

