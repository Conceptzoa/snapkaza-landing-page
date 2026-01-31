
# Handle Hash Navigation on Page Load

This update will fix the navigation so that when arriving at the home page with a hash (like `/#contact` from a sub-page), the page scrolls to the correct section instead of staying at the top.

---

## Problem

When clicking a link like "Contact Us" (`/#contact`) from a sub-page (e.g., Privacy Policy), the page navigates to the home page but stays at the top because:
1. The `ScrollToTop` component scrolls to `(0, 0)` on pathname change
2. There's no logic to handle the URL hash after navigation

---

## Solution Overview

Modify the `ScrollToTop` component to:
1. Check if the URL contains a hash when the route changes
2. If there's a hash: scroll to that element instead of scrolling to top
3. If there's no hash: scroll to top as before
4. Use a small timeout to ensure the DOM is fully rendered before scrolling

---

## Implementation Details

### Update ScrollToTop.tsx

**Current behavior:**
```text
Route changes -> Scroll to top (0, 0)
```

**New behavior:**
```text
Route changes
      |
      v
+------------------+
| Has hash in URL? |
+------------------+
    |          |
   Yes         No
    |          |
    v          v
Scroll to    Scroll to
#element     top (0, 0)
```

**Key changes:**
- Import `useLocation` to access both `pathname` and `hash`
- Check if `location.hash` exists when pathname changes
- If hash exists, find the element and scroll to it with smooth behavior
- Use `setTimeout` to ensure content is rendered before scrolling
- If no hash, scroll to top as before

---

## File to Modify

| File | Changes |
|------|---------|
| `src/components/ScrollToTop.tsx` | Add hash detection and scroll-to-element logic |

---

## Technical Implementation

The updated `ScrollToTop` component will:

1. Use `useLocation()` to get both `pathname` and `hash`
2. On pathname change, check if there's a hash
3. If hash exists:
   - Wait for a brief moment (using `setTimeout`) to ensure DOM is ready
   - Find the element with `document.querySelector(hash)`
   - Scroll to it using `scrollIntoView({ behavior: 'smooth' })`
4. If no hash: scroll to top as before

---

## Expected Behavior After Fix

| Scenario | Current Behavior | New Behavior |
|----------|-----------------|--------------|
| Click "Contact Us" from Privacy Policy | Lands at top of home page | Scrolls to contact section |
| Click "FAQ" from Terms of Service | Lands at top of home page | Scrolls to FAQ section |
| Click "Privacy Policy" from home | Scrolls to top | Scrolls to top (unchanged) |
| Click logo from any page | Scrolls to top | Scrolls to top (unchanged) |
