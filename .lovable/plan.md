

# Fix Navigation Links for Sub-Pages + Scroll-to-Top

This update will fix internal anchor links to work from any page and add automatic scroll-to-top behavior when navigating between pages.

---

## Summary of Changes

| Change | Description |
|--------|-------------|
| **Absolute Anchor Paths** | Convert `#section` to `/#section` in Navigation and Footer |
| **React Router Links** | Use `Link` component for proper SPA navigation |
| **Scroll-to-Top Component** | Create a component that scrolls to top on route changes |
| **Smooth Scroll Preservation** | Maintain smooth scroll when already on home page |

---

## Detailed Implementation

### 1. Create ScrollToTop Component

**New file:** `src/components/ScrollToTop.tsx`

This component will:
- Listen for route changes using React Router's `useLocation` hook
- Scroll to top when the pathname changes (but not when hash changes)
- Preserve smooth scroll behavior for anchor links on the same page

```text
Route Change Detected
        |
        v
+------------------+
| Is hash-only     |
| change?          |
+------------------+
    |         |
   Yes        No
    |         |
    v         v
(Do nothing) Scroll to top
```

### 2. Update App.tsx

- Import and add `ScrollToTop` component inside the `BrowserRouter`
- This ensures scroll-to-top runs on every route change

### 3. Update Navigation.tsx

**Changes:**
- Import `Link` from `react-router-dom`
- Update logo to use `<Link to="/">` 
- Update navLinks to use absolute paths with hash

| Link | Current | Updated |
|------|---------|---------|
| Logo | `#` | `/` |
| Features | `#showcase` | `/#showcase` |
| Contact Us | `#contact` | `/#contact` |
| Pricing | `#pricing` | `/#pricing` |

- Replace `<a href={...}>` with `<Link to={...}>` for all internal links

### 4. Update Footer.tsx

**Changes:**
- Update footerLinks.product array to use absolute paths
- Update footerLinks.company array to use absolute paths
- Use `Link` component for all internal anchor links

| Section | Link | Updated href |
|---------|------|-------------|
| Product | Features | `/#showcase` |
| Product | Pricing | `/#pricing` |
| Product | How It Works | `/#process` |
| Product | FAQ | `/#faq` |
| Company | About Us | `/#about` |
| Company | Contact Us | `/#contact` |

---

## How Navigation Will Work

| Scenario | Behavior |
|----------|----------|
| **On home page, click anchor link** | React Router navigates to `/#section`, browser smooth scrolls to anchor |
| **On sub-page, click anchor link** | React Router navigates to home page (`/`), then browser scrolls to `#section` |
| **Click legal page link (e.g., Privacy Policy)** | React Router navigates to `/privacy-policy`, ScrollToTop scrolls page to top |
| **Click logo from any page** | Navigates to home page, starts at top |

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/ScrollToTop.tsx` | Component that scrolls to top on route changes |

## Files to Modify

| File | Changes |
|------|---------|
| `src/App.tsx` | Import and add ScrollToTop component inside BrowserRouter |
| `src/components/landing/Navigation.tsx` | Import Link, update logo and nav links to use absolute paths |
| `src/components/landing/Footer.tsx` | Update product and company links to use absolute paths with Link component |

---

## Technical Notes

- The `scroll-behavior: smooth` CSS property in `index.css` will continue to handle smooth scrolling
- Using React Router's `Link` component ensures proper SPA navigation without full page reloads
- The ScrollToTop component only triggers on pathname changes, so hash navigation within the same page won't cause unwanted scrolling

