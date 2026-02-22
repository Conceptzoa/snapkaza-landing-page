

# Global Email, Footer & Social Media Updates

Targeted edits across 5 files. No layout or styling changes.

---

## 1. Email Updates — Replace all `mailto:` links with `hello@snapkaza.com`

| File | Line(s) | Current Email | New Email |
|------|---------|---------------|-----------|
| `src/pages/PrivacyPolicy.tsx` | 97–98 | `privacy@snapkaza.com` | `hello@snapkaza.com` |
| `src/pages/TermsOfService.tsx` | 112–113 | `legal@snapkaza.com` | `hello@snapkaza.com` |
| `src/pages/CookiePolicy.tsx` | 132–133 | `privacy@snapkaza.com` | `hello@snapkaza.com` |
| `src/pages/GDPR.tsx` | 99–100 | `dpo@snapkaza.com` | `hello@snapkaza.com` |
| `src/pages/GDPR.tsx` | 109–110 | `privacy@snapkaza.com` | `hello@snapkaza.com` |

Each change updates both the `href="mailto:..."` attribute and the visible link text to `hello@snapkaza.com`.

---

## 2. Footer Social Media Updates (`src/components/landing/Footer.tsx`)

**Remove LinkedIn:** Delete the LinkedIn entry from the `socialLinks` array (line 27) and remove the `Linkedin` import from lucide-react (line 2).

**Update YouTube URL:** Change the YouTube `href` from `"#"` to `"https://www.youtube.com/@SnapKaza"` (line 29).

After these changes, the `socialLinks` array will contain only Instagram and YouTube — both with real external URLs.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/landing/Footer.tsx` | Remove LinkedIn icon/link; update YouTube URL; clean up import |
| `src/pages/PrivacyPolicy.tsx` | Update email to `hello@snapkaza.com` |
| `src/pages/TermsOfService.tsx` | Update email to `hello@snapkaza.com` |
| `src/pages/CookiePolicy.tsx` | Update email to `hello@snapkaza.com` |
| `src/pages/GDPR.tsx` | Update both email references to `hello@snapkaza.com` |

---

## Technical Notes

- All external links (`target="_blank"`) in the footer already have `rel="noopener noreferrer"` applied conditionally for `http` URLs — YouTube will automatically get these attributes via the existing logic.
- No new imports or dependencies needed.

