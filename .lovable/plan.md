
# Fix Anchor Link Navigation on Home Page

This update will implement smart navigation logic that detects the current page and either smooth scrolls (when on home page) or navigates then scrolls (when on sub-pages).

---

## Problem

When using React Router's `Link` component with paths like `/#contact`, clicking these links on the home page causes a full navigation event instead of smooth scrolling. The browser treats `/#contact` as a route change rather than a hash anchor.

---

## Solution Overview

Create a custom `AnchorLink` component that:
1. Detects if user is already on the home page (`/`)
2. If on home page: prevents default navigation and smooth scrolls to the target section
3. If on sub-page: uses React Router to navigate to `/#section`

---

## Implementation Details

### 1. Create AnchorLink Component

**New file:** `src/components/AnchorLink.tsx`

This component will:
- Accept `to` prop with format `/#section`
- Use `useLocation` to detect current pathname
- If on home page (`/`): call `scrollIntoView()` with smooth behavior
- If on sub-page: use React Router's `useNavigate` to go to home page with hash

```text
User clicks link
      |
      v
+------------------+
| Is pathname "/"? |
+------------------+
    |          |
   Yes         No
    |          |
    v          v
Smooth scroll  Navigate to
to #section    /#section
```

### 2. Update Navigation.tsx

- Import `AnchorLink` component
- Replace `<Link>` with `<AnchorLink>` for all anchor navigation links
- Keep the logo as regular `<Link to="/">` since it's not an anchor link

### 3. Update Footer.tsx

- Import `AnchorLink` component
- Replace `<Link>` with `<AnchorLink>` for product and company links that use `/#section` format
- Keep legal links as regular `<Link>` since they navigate to different pages

---

## Section IDs Verification

All section IDs are correctly set and match the links:

| Section | Component ID | Link Target |
|---------|-------------|-------------|
| Features | `id="showcase"` | `/#showcase` |
| Contact | `id="contact"` | `/#contact` |
| Pricing | `id="pricing"` | `/#pricing` |
| Process | `id="process"` | `/#process` |
| FAQ | `id="faq"` | `/#faq` |
| About | `id="about"` | `/#about` |

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/AnchorLink.tsx` | Smart anchor link component with conditional scroll/navigate behavior |

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/landing/Navigation.tsx` | Import and use `AnchorLink` for nav links |
| `src/components/landing/Footer.tsx` | Import and use `AnchorLink` for product/company links |

---

## Technical Implementation

### AnchorLink Component Logic

```text
function AnchorLink({ to, children, className, onClick }) {
  const location = useLocation()
  const navigate = useNavigate()
  
  const handleClick = (e) => {
    // Extract hash from "/#section" -> "#section"
    const hash = to.replace('/', '')
    
    if (location.pathname === '/') {
      // Already on home page - smooth scroll
      e.preventDefault()
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // On sub-page - navigate to home with hash
      e.preventDefault()
      navigate(to)
    }
    
    // Call optional onClick (for mobile menu close)
    onClick?.()
  }
  
  return <a href={to} onClick={handleClick} className={className}>{children}</a>
}
```

---

## Expected Behavior After Fix

| Scenario | Before | After |
|----------|--------|-------|
| On home page, click "Contact Us" | Page reloads/jumps | Smooth scroll to contact section |
| On home page, click "Features" | Page reloads/jumps | Smooth scroll to showcase section |
| On Privacy Policy, click "Contact Us" | Nothing happens | Navigates to home, scrolls to contact |
| On any sub-page, click footer link | Nothing happens | Navigates to home, scrolls to section |
