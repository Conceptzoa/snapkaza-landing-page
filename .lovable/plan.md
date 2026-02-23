

# Landing Page Updates: Subtitle, Email Links

Three targeted changes across three files.

---

## 1. Process Section -- Add Subtitle

**File:** `src/components/landing/Process.tsx` (lines 38-40)

Insert a new subtitle paragraph between the existing description and the closing `</div>`, right after the current `<p>` tag:

```tsx
<p className="text-base md:text-lg text-muted-foreground/80 italic font-serif mt-3">
  Professional AI transformations with automated delivery within minutes.
</p>
```

The italic serif font at a slightly smaller size maintains the luxury aesthetic while distinguishing it from the main description above.

---

## 2. Footer -- Add Email Link

**File:** `src/components/landing/Footer.tsx`

Add an email entry to the `company` array in `footerLinks`:

```ts
{ name: "hello@snapkaza.com", href: "mailto:hello@snapkaza.com" },
```

This will render under the "Company" column as a clickable mailto link, using the existing `AnchorLink` component (which handles both hash links and regular hrefs).

---

## 3. Contact Form -- Add Email Fallback Link

**File:** `src/components/landing/Contact.tsx` (lines 287-290)

Update the trust indicator text to include a clickable email link:

```tsx
<p className="text-center text-muted-foreground text-sm">
  We typically respond within 24 hours. Your information is secure
  and will never be shared. You can also reach us at{" "}
  <a href="mailto:hello@snapkaza.com" className="text-primary hover:underline">
    hello@snapkaza.com
  </a>.
</p>
```

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/landing/Process.tsx` | Add italic subtitle below section header |
| `src/components/landing/Footer.tsx` | Add `hello@snapkaza.com` mailto link to Company column |
| `src/components/landing/Contact.tsx` | Add clickable email in trust indicator text |

