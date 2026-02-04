

# Update Instagram Social Link

This is a simple update to add the real Instagram URL to the footer social links and ensure it opens securely in a new tab.

---

## Changes Required

| Item | Current | New |
|------|---------|-----|
| Instagram href | `#` | `https://www.instagram.com/snapkaza` |
| target attribute | (none) | `_blank` |
| rel attribute | (none) | `noopener noreferrer` |

---

## Implementation Details

### Update socialLinks array (line 24-28)

Change the Instagram entry from:
```
{ name: "Instagram", icon: Instagram, href: "#" }
```
to:
```
{ name: "Instagram", icon: Instagram, href: "https://www.instagram.com/snapkaza" }
```

### Update link rendering (lines 50-59)

Add `target` and `rel` attributes to the anchor tag for external links. This ensures:
- **target="_blank"**: Opens in a new browser tab
- **rel="noopener noreferrer"**: Prevents the new page from accessing the original page (security best practice)

The link rendering will conditionally apply these attributes when the href starts with `http` (external link).

---

## File to Modify

| File | Changes |
|------|---------|
| `src/components/landing/Footer.tsx` | Update Instagram href, add target and rel attributes to external social links |

---

## Security Note

The `rel="noopener noreferrer"` attributes are important because:
- **noopener**: Prevents the new page from accessing `window.opener`, which could be used for phishing attacks
- **noreferrer**: Prevents the browser from sending the referrer header to the new page

