

# SnapKaza Landing Page Updates

Comprehensive updates to transform the Features Showcase, add new sections, create legal pages, and integrate external links.

---

## Summary of Changes

| Category | Updates |
|----------|---------|
| **Features Showcase** | Transform into 4-tab hub with AI Virtual Staging, Cinematic AI Video, AI Avatars, and 4K Upscaling |
| **Contact Section** | New glassmorphism contact form with Full Name, Agency Email, Message fields |
| **About Us Section** | New section with UK-based company description |
| **Legal Pages** | Four new pages: Privacy Policy, Terms of Service, Cookie Policy, GDPR |
| **Navigation Links** | Client Login to app.snapkaza.com, How It Works to #process, About Us to #about |

---

## 1. Reimagined Features Showcase

### New Tab Structure

```text
+-------------------+-------------------+-------------------+-------------------+
| AI Virtual        | Cinematic AI      | AI Avatars        | 4K Upscaling      |
| Staging           | Video             |                   |                   |
+-------------------+-------------------+-------------------+-------------------+
|                                                                               |
|              [Tab Content - Slider or Video/Gallery Placeholder]              |
|                                                                               |
+-------------------------------------------------------------------------------+
```

### Tab Content

**AI Virtual Staging (Tab 1)**
- Keep the interactive Before/After slider
- Images: Empty room transforming to fully furnished luxury lounge
- Retains drag functionality with labels "Before" and "After"

**Cinematic AI Video, AI Avatars, 4K Upscaling (Tabs 2-4)**
- Sophisticated video player placeholder with glassmorphism styling
- Play button overlay with feature icon
- Feature description and capability highlights
- Elegant "Coming Soon" or demo indicator

---

## 2. Contact Section

Positioned directly above the Footer, featuring:

```text
+------------------------------------------------------------------+
|                      Get in Touch                                 |
|        Ready to transform your property marketing?                |
|                                                                   |
|  +------------------------+  +---------------------------+        |
|  | Full Name              |  | Agency Email              |        |
|  +------------------------+  +---------------------------+        |
|                                                                   |
|  +----------------------------------------------------------+    |
|  | Your Message                                              |    |
|  |                                                           |    |
|  +----------------------------------------------------------+    |
|                                                                   |
|                    [ Send Message ] (Gold)                        |
+------------------------------------------------------------------+
```

- Glassmorphism card container
- Form validation with react-hook-form
- Toast notification on submission (sonner)
- Gold CTA button matching site design

---

## 3. About Us Section

New section positioned after FAQ:

> "Based in the UK, SnapKaza is a next-generation PropTech platform dedicated to empowering luxury real estate consultants through bespoke AI-driven visual assets."

- Elegant typography with serif headline
- Supporting visuals or icons
- UK-focused credibility indicators

---

## 4. Legal Pages

Four new standalone pages with consistent styling:

| Page | Route | Content |
|------|-------|---------|
| Privacy Policy | `/privacy-policy` | Data collection, usage, third-party sharing |
| Terms of Service | `/terms-of-service` | Usage terms, liability, user obligations |
| Cookie Policy | `/cookie-policy` | Cookie types, consent, management |
| GDPR | `/gdpr` | EU data rights, compliance, contact |

Each page includes:
- Navigation header
- Glassmorphism content container
- Footer
- Back to home link

---

## 5. Link Updates

| Element | Current | Updated |
|---------|---------|---------|
| Client Login (Nav) | No link | `https://app.snapkaza.com` (new tab) |
| Client Login (Mobile) | No link | `https://app.snapkaza.com` (new tab) |
| How It Works (Footer) | `#process` | Already correct |
| About Us (Footer) | `#` | `#about` |
| Legal Links (Footer) | `#` | React Router links to pages |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/landing/Showcase.tsx` | Complete rewrite with 4 feature tabs |
| `src/components/landing/Navigation.tsx` | Update Client Login to external link |
| `src/components/landing/Footer.tsx` | Update About Us and legal links with React Router |
| `src/pages/Index.tsx` | Add About and Contact sections |
| `src/components/landing/index.ts` | Export new components |
| `src/App.tsx` | Add routes for legal pages |

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/landing/About.tsx` | About Us section component |
| `src/components/landing/Contact.tsx` | Contact form component |
| `src/pages/PrivacyPolicy.tsx` | Privacy Policy page |
| `src/pages/TermsOfService.tsx` | Terms of Service page |
| `src/pages/CookiePolicy.tsx` | Cookie Policy page |
| `src/pages/GDPR.tsx` | GDPR compliance page |

---

## Page Flow After Updates

```text
Navigation (Client Login -> app.snapkaza.com)
    |
Hero
    |
Features Showcase (4 tabs: AI Virtual Staging, Cinematic AI Video, AI Avatars, 4K Upscaling)
    |
Testimonials
    |
Pricing
    |
Process (id="process" - linked from "How It Works")
    |
FAQ
    |
About Us (NEW - id="about")
    |
Contact (NEW)
    |
Footer (Legal links -> /privacy-policy, /terms-of-service, etc.)
```

---

## Technical Implementation Details

### Showcase Component Rewrite
- State management for active tab
- CSS transitions for smooth tab switching
- Video placeholder with overlay and animation
- Responsive grid layout

### Contact Form
- Uses existing react-hook-form and zod for validation
- Email format validation
- Required field checks
- Sonner toast for success/error feedback

### Legal Pages
- Shared layout with Navigation and Footer
- ScrollArea for long content
- Consistent glassmorphism styling
- Standard legal document formatting

### External Links
- `target="_blank"` and `rel="noopener noreferrer"` for security
- React Router `Link` components for internal navigation

