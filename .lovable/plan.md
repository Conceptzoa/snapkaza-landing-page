

# Add Calendly Popup Widget to Contact Section

Add a "Schedule a Demo Meeting" button below the contact form that opens a Calendly popup, styled to match the luxury/minimalist theme.

---

## What Will Change

A new button will appear below the contact form's trust indicators section, separated by an "or" divider. Clicking it opens the Calendly scheduling popup.

---

## Implementation Details

### File: `src/components/landing/Contact.tsx`

**1. Add Calendly type declaration and script loader:**
- Add a `useEffect` hook that dynamically loads the Calendly external script (`https://assets.calendly.com/assets/external/widget.css` and `https://assets.calendly.com/assets/external/widget.js`) on component mount
- Declare the `Calendly` global on the `window` object for TypeScript safety

**2. Add click handler:**
- Create an `openCalendly` function that calls `window.Calendly.initPopupWidget({ url: 'https://calendly.com/hello-snapkaza/30min' })`

**3. Add the button below the trust indicators:**
- An "or" text divider after the trust indicators
- A ghost-style button with `Calendar` icon from lucide-react and text "Schedule a Demo Meeting"
- Styled with a border matching the gold theme (`border-primary/50`), hover glow effect
- Full width, responsive, matching the form's button height (h-12)

### Layout After Change

```text
┌──────────────────────────────────┐
│         Contact Form             │
│  [Name]           [Email]        │
│  [Subject Dropdown]              │
│  [Message Textarea]              │
│  [====== Send Message ======]    │
│                                  │
│  Trust indicator text            │
│                                  │
│  ─────────── or ───────────      │
│                                  │
│  [ Schedule a Demo Meeting ]     │
└──────────────────────────────────┘
```

---

## Technical Notes

- The Calendly script and CSS are loaded dynamically via `useEffect` with cleanup to avoid duplicates
- TypeScript types are extended on `window` to avoid errors
- No new dependencies needed -- uses the official Calendly widget JS from their CDN
- The popup opens as an overlay, so no page navigation occurs
- Button is fully responsive and inherits the same width/padding as the form

