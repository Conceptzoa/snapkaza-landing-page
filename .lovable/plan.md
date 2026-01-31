

# Add Environmental Commitment Note

This update will add a discreet environmental commitment message to the Service Packages section and the Footer, maintaining the luxury aesthetic of the site.

---

## Summary of Changes

| Location | Change |
|----------|--------|
| **Pricing Section** | Add carbon removal note below the "custom solution" text |
| **Footer** | Add carbon removal note in the bottom bar area |
| **Icon** | Include a minimalist Leaf icon from Lucide |

---

## Implementation Details

### 1. Update Pricing.tsx

**Changes:**
- Import `Leaf` icon from `lucide-react`
- Add a new paragraph below the existing "custom solution" note
- Style with smaller font (`text-xs`), muted color, and subtle opacity
- Include a small leaf icon aligned with the text

**Placement:** After line 135, add a new environmental note that sits below the enterprise packages text.

**Styling:**
- Font size: `text-xs` (12px) - smaller than surrounding text
- Color: `text-muted-foreground/70` - more subtle than regular muted text
- Icon: `Leaf` at `w-3 h-3` - very small, matches text size
- Layout: Centered with flex, icon and text inline

### 2. Update Footer.tsx

**Changes:**
- Import `Leaf` icon from `lucide-react`
- Add the environmental note in the bottom bar section
- Position it between copyright and tagline on desktop, or as a third row on mobile

**Placement:** Inside the bottom bar div (line 125), add a centered environmental message.

**Styling:**
- Font size: `text-xs` - consistent with pricing section
- Color: `text-muted-foreground/60` - slightly more subtle in footer
- Icon: `Leaf` at `w-3 h-3`
- Layout: Flex with icon, centered in the footer area

---

## Visual Design

Both notes will have:
- **Minimalist leaf icon**: Small green-tinted or muted leaf icon
- **Subtle typography**: Extra small font size, reduced opacity
- **Centered layout**: Fits naturally below main content
- **Non-distracting**: Doesn't compete with CTAs or main content

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/landing/Pricing.tsx` | Add Leaf import, add environmental note below pricing cards |
| `src/components/landing/Footer.tsx` | Add Leaf import, add environmental note in bottom bar |

---

## Code Preview

**Pricing Section Note:**
```text
┌─────────────────────────────────────────────────┐
│  Need a custom solution? Contact us...          │
│                                                 │
│     🌿 1% of every purchase is dedicated to     │
│        carbon removal initiatives.              │
└─────────────────────────────────────────────────┘
```

**Footer Bottom Bar:**
```text
┌─────────────────────────────────────────────────┐
│ © SnapKaza 2026          🌿 1% to carbon...     │
│                     Crafted with passion...     │
└─────────────────────────────────────────────────┘
```

