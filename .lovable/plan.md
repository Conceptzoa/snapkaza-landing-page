

# UI and Navigation Refinements

This update will apply navigation link changes, remove redundant elements, and ensure proper internal anchor linking with smooth scroll behavior.

---

## Summary of Changes

| Area | Change |
|------|--------|
| **Header Navigation** | Rename 'Showcase' to 'Contact Us', link to `#contact` |
| **Hero Section** | Remove scroll indicator element |
| **About Section** | Remove 'About Us' label badge |
| **Contact Section** | Remove 'Contact Us' label badge |
| **Footer** | Update links, remove Careers/Blog/Press, add Contact Us |
| **FAQ Section** | Add `id="faq"` for anchor linking |
| **Process Section** | Add `id="process"` for anchor linking |

---

## Detailed Changes

### 1. Header Navigation (Navigation.tsx)

**Current navLinks array:**
```text
Features     -> #showcase
Showcase     -> #showcase
Pricing      -> #pricing
```

**Updated navLinks array:**
```text
Features     -> #showcase
Contact Us   -> #contact
Pricing      -> #pricing
```

---

### 2. Hero Section (Hero.tsx)

**Remove:** The scroll indicator at the bottom of the hero section (lines 81-87)

```text
BEFORE:
+--------------------+
|    Hero Content    |
+--------------------+
|  Scroll to explore |
|      [icon]        |
+--------------------+

AFTER:
+--------------------+
|    Hero Content    |
+--------------------+
```

---

### 3. About Section (About.tsx)

**Remove:** The 'About Us' badge/label (line 35-37)

```text
BEFORE:
[ About Us ]  <-- Remove this badge
Elevating Property Marketing

AFTER:
Elevating Property Marketing
```

---

### 4. Contact Section (Contact.tsx)

**Remove:** The 'Contact Us' badge/label (lines 120-122)

```text
BEFORE:
[ Contact Us ]  <-- Remove this badge
Get in Touch

AFTER:
Get in Touch
```

---

### 5. Footer Updates (Footer.tsx)

**Product column - Update links:**

| Link | Current Target | New Target |
|------|----------------|------------|
| How It Works | `#process` | `#process` (keep, section will have id) |
| FAQ | `#faq` | `#faq` (keep, section will have id) |

**Company column - Changes:**

| Action | Link |
|--------|------|
| Keep | About Us -> `#about` |
| **Add** | Contact Us -> `#contact` (new, placed after About Us) |
| **Remove** | Careers |
| **Remove** | Blog |
| **Remove** | Press |

---

### 6. Section ID Attributes

**Add missing section IDs:**

| Section | Component | ID to Add |
|---------|-----------|-----------|
| The SnapKaza Method | Process.tsx | `id="process"` |
| Frequently Asked Questions | FAQ.tsx | `id="faq"` |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/landing/Navigation.tsx` | Update navLinks: rename 'Showcase' to 'Contact Us', change href to `#contact` |
| `src/components/landing/Hero.tsx` | Remove scroll indicator div (lines 81-87) |
| `src/components/landing/About.tsx` | Remove 'About Us' span badge (lines 35-37) |
| `src/components/landing/Contact.tsx` | Remove 'Contact Us' span badge (lines 120-122) |
| `src/components/landing/Footer.tsx` | Update company links array: remove Careers/Blog/Press, add Contact Us after About Us |
| `src/components/landing/Process.tsx` | Add `id="process"` to section element |
| `src/components/landing/FAQ.tsx` | Add `id="faq"` to section element |

---

## Smooth Scroll

Smooth scrolling is already enabled globally in `src/index.css`:

```css
html {
  scroll-behavior: smooth;
}
```

All internal anchor links (`#contact`, `#process`, `#faq`, etc.) will automatically use smooth scrolling.

