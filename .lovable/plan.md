

# Multilingual i18n Architecture Plan for SnapKaza

## Infrastructure Selection

**Recommendation: `react-i18next`** (with `i18next`)

- Industry standard for React SPAs, lightweight (~13KB gzipped for both packages)
- Works perfectly with React + Vite + react-router-dom (no Next.js dependency)
- Supports lazy-loading translation files, namespace splitting, and interpolation
- Large ecosystem (browser language detection via `i18next-browser-languagedetector`)
- `next-intl` is Next.js-only -- not compatible. A custom context would work but lacks interpolation, plurals, and tooling.

**Packages to install:** `i18next`, `react-i18next`, `i18next-browser-languagedetector`

---

## Folder Structure

```text
public/
  locales/
    en-GB/
      common.json        ← Nav, footer, WhatsApp FAB, shared UI
      hero.json
      showcase.json
      testimonials.json
      pricing.json
      process.json
      faq.json
      about.json
      contact.json
      legal.json          ← Privacy, Terms, Cookie, GDPR pages
    pt-PT/
      common.json
      hero.json
      showcase.json
      ... (same structure)
```

Namespaced JSON files allow lazy-loading per section and keep files manageable. Placed in `public/locales/` so Vite serves them as static assets loaded at runtime (no rebuild needed to add languages).

---

## The UK English Baseline

Strings to audit and extract across **14 component files** and **4 legal pages**. Key British English corrections to enforce:

| Current (if any) | Correct UK English |
|---|---|
| "optimize" | "optimise" |
| "personalized" | "personalised" (already correct in Showcase) |
| "center" | "centre" |
| "color" | "colour" |
| "neighborhood" | "neighbourhood" |
| "license" | "licence" |

Current copy appears mostly UK-correct. During extraction, every string will be verified.

**String count estimate:** ~200 translatable strings across all components and pages.

---

## SEO & Routing Strategy

**Approach: URL sub-path prefixes** (`/en/`, `/pt/`, etc.)

Update `App.tsx` routing to:

```text
/:lang/                    → Index
/:lang/privacy-policy      → PrivacyPolicy
/:lang/terms-of-service    → TermsOfService
/:lang/cookie-policy       → CookiePolicy
/:lang/gdpr                → GDPR
/                          → Redirect to /en/ (or detected language)
```

- A `LanguageLayout` wrapper component reads `:lang` from the URL, sets `i18next.language`, and updates `<html lang="">`.
- `AnchorLink` updated to prepend the current language prefix.
- Canonical and `hreflang` meta tags added to `<head>` dynamically for SEO indexing.

---

## Language Switcher UI

A minimal dropdown in the Navigation bar (desktop: right side before "Client Login"; mobile: top of mobile menu):

- Small globe icon + current language code (e.g. "EN")
- Dropdown with flag emoji + full name: "🇬🇧 English", "🇵🇹 Português"
- On select: navigates to the equivalent path with the new prefix (e.g. `/en/#pricing` → `/pt/#pricing`)
- Styled with existing `glass` + `text-muted-foreground` classes to match the SnapKaza aesthetic
- Uses Radix `DropdownMenu` (already installed)

---

## Dynamic Content & Metadata

- **Page titles & meta descriptions**: A `usePageMeta` hook (or logic inside `LanguageLayout`) that sets `document.title` and meta description from `common.json` translation keys per route.
- **`index.html`**: Keep a generic fallback title; the React app overrides it on mount.
- **OG/Twitter meta tags**: Updated dynamically per language using `react-helmet-async` (or a simple `useEffect` on `document.head`). Alternative: keep them English-only since social crawlers often don't execute JS.
- **`robots.txt` / `sitemap.xml`**: Add all language-prefixed URLs to sitemap for indexing.

---

## Files to Modify

| File | Change |
|------|--------|
| `package.json` | Add `i18next`, `react-i18next`, `i18next-browser-languagedetector` |
| `src/i18n.ts` | **New** — i18next config with backend, detection, namespaces |
| `src/main.tsx` | Import `./i18n` before rendering |
| `src/App.tsx` | Wrap routes in `/:lang` prefix, add `LanguageLayout` wrapper, redirect `/` |
| `src/components/LanguageLayout.tsx` | **New** — reads `:lang`, syncs i18next, sets `<html lang>` and meta |
| `src/components/LanguageSwitcher.tsx` | **New** — globe dropdown using Radix DropdownMenu |
| `src/components/landing/Navigation.tsx` | Add `LanguageSwitcher`, use `useTranslation` for nav link names |
| `src/components/landing/Hero.tsx` | Replace hardcoded strings with `t()` calls |
| `src/components/landing/Showcase.tsx` | Replace hardcoded strings with `t()` calls |
| `src/components/landing/Testimonials.tsx` | Replace hardcoded strings with `t()` calls |
| `src/components/landing/Pricing.tsx` | Replace hardcoded strings with `t()` calls |
| `src/components/landing/Process.tsx` | Replace hardcoded strings with `t()` calls |
| `src/components/landing/FAQ.tsx` | Replace hardcoded strings with `t()` calls |
| `src/components/landing/About.tsx` | Replace hardcoded strings with `t()` calls |
| `src/components/landing/Contact.tsx` | Replace hardcoded strings with `t()` calls |
| `src/components/landing/Footer.tsx` | Replace hardcoded strings with `t()` calls |
| `src/components/WhatsAppFAB.tsx` | Translate tooltip text |
| `src/components/AnchorLink.tsx` | Prepend language prefix to navigation |
| `src/pages/PrivacyPolicy.tsx` | Use `t()` for legal content |
| `src/pages/TermsOfService.tsx` | Use `t()` for legal content |
| `src/pages/CookiePolicy.tsx` | Use `t()` for legal content |
| `src/pages/GDPR.tsx` | Use `t()` for legal content |
| `src/pages/NotFound.tsx` | Use `t()` for 404 text |
| `index.html` | Update default title/description |

## New Files to Create

| File | Purpose |
|------|---------|
| `src/i18n.ts` | i18next initialisation and config |
| `src/components/LanguageLayout.tsx` | Route wrapper syncing language |
| `src/components/LanguageSwitcher.tsx` | UI dropdown for language selection |
| `public/locales/en-GB/common.json` | Shared English translations |
| `public/locales/en-GB/hero.json` | Hero section strings |
| `public/locales/en-GB/showcase.json` | Showcase section strings |
| `public/locales/en-GB/testimonials.json` | Testimonials strings |
| `public/locales/en-GB/pricing.json` | Pricing strings |
| `public/locales/en-GB/process.json` | Process section strings |
| `public/locales/en-GB/faq.json` | FAQ strings |
| `public/locales/en-GB/about.json` | About section strings |
| `public/locales/en-GB/contact.json` | Contact form strings |
| `public/locales/en-GB/legal.json` | All legal page strings |
| `public/locales/pt-PT/*.json` | Portuguese translations (same structure) |

---

## Implementation Order

1. Install packages and create `src/i18n.ts`
2. Create all `en-GB` JSON translation files (extract every string)
3. Create `LanguageLayout` and update `App.tsx` routing
4. Create `LanguageSwitcher` and add to Navigation
5. Update `AnchorLink` for language-aware navigation
6. Refactor each landing component to use `useTranslation` + `t()` calls
7. Refactor legal pages
8. Create `pt-PT` translation files
9. Add SEO meta tags and `hreflang` links
10. Test both languages end-to-end on desktop and mobile

