

# Contact Form Update with Subject Dropdown and EmailJS Integration

This update will enhance the Contact Form with a subject dropdown field and connect it to EmailJS for sending emails.

---

## Summary of Changes

| Change | Description |
|--------|-------------|
| **Subject Dropdown** | Add required field with 5 inquiry type options |
| **Form Schema** | Update to include `name`, `email`, `subject`, `message` |
| **EmailJS Integration** | Connect form to EmailJS service for email delivery |

---

## 1. Subject Dropdown Options

A new dropdown will be added between the email field and the message area:

| Option | Description |
|--------|-------------|
| General Inquiry | Default option for general questions |
| Property Launch - Essential | For Essential package inquiries |
| Property Launch - Premium | For Premium package inquiries |
| Property Launch - Elite | For Elite package inquiries |
| Partnership & Business Opportunities | For B2B and partnership requests |

---

## 2. Updated Form Layout

```text
+------------------------+  +---------------------------+
| Full Name              |  | Agency Email              |
+------------------------+  +---------------------------+

+--------------------------------------------------+
| Subject (Dropdown)                               |
| - General Inquiry                                |
| - Property Launch - Essential                    |
| - Property Launch - Premium                      |
| - Property Launch - Elite                        |
| - Partnership & Business Opportunities           |
+--------------------------------------------------+

+--------------------------------------------------+
| Your Message                                     |
|                                                  |
+--------------------------------------------------+

            [ Send Message ] (Gold)
```

---

## 3. EmailJS Integration

### Required Setup

You will need to provide three EmailJS credentials:
- **Service ID** - From your EmailJS dashboard (e.g., `service_xxxxxxx`)
- **Template ID** - From your email template (e.g., `template_xxxxxxx`)
- **Public Key** - From your EmailJS account settings

### Template Variables

The following variables will be sent to your EmailJS template:

| Variable | Form Field |
|----------|------------|
| `{{name}}` | Full Name |
| `{{email}}` | Agency Email |
| `{{subject}}` | Subject dropdown selection |
| `{{message}}` | Message content |

---

## Technical Implementation

### File to Modify

**`src/components/landing/Contact.tsx`**

### Changes

1. **Add EmailJS package import** - Install and import `@emailjs/browser`

2. **Update Zod schema** - Add `subject` field with enum validation:
   - `general` - General Inquiry
   - `essential` - Property Launch - Essential
   - `premium` - Property Launch - Premium
   - `elite` - Property Launch - Elite
   - `partnership` - Partnership & Business Opportunities

3. **Add Subject dropdown** - Using Radix UI Select component with:
   - Custom styling matching the dark theme
   - ListFilter icon for visual consistency
   - Solid background color on dropdown to prevent transparency issues

4. **Update form submission** - Replace simulated submission with EmailJS `send()` method:
   - Map form values to template parameters
   - Handle success and error states
   - Show appropriate toast notifications

5. **Add form ref** - For EmailJS form submission compatibility

### New Dependencies

```text
@emailjs/browser
```

### EmailJS Configuration Constants

The implementation will use placeholder constants that you can replace with your actual EmailJS credentials:

```text
EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"
EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"
EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"
```

---

## EmailJS Template Setup

In your EmailJS dashboard, create a template with these placeholders:

```text
Subject: {{subject}}

From: {{name}} ({{email}})

Message:
{{message}}
```

