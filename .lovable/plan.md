

# Add WhatsApp Floating Action Button (FAB)

Create a new `WhatsAppFAB` component and render it globally in `App.tsx` so it appears on all pages.

---

## New File: `src/components/WhatsAppFAB.tsx`

A fixed-position button in the bottom-right corner with:

- **Custom WhatsApp SVG icon** (clean, recognizable silhouette) -- lucide-react does not include a WhatsApp icon, so we use an inline SVG.
- **Styling**: Dark background with a subtle gold glow (`shadow-[0_0_20px_hsl(40_55%_60%_/_0.3)]`), rounded-full, matching the luxury theme.
- **onClick**: Opens `https://wa.me/351962997070?text=Hi!%20I'm%20interested%20in%20SnapKaza%20AI%20features%20and%20would%20like%20more%20information.` in a new tab.
- **Tooltip**: A small "Message us" label that appears on load (via a 3-second auto-dismiss animation using CSS) and also on hover.
- **Positioning**: `fixed bottom-6 right-6` on desktop, `bottom-20 right-4` on mobile (using `md:` breakpoints) to avoid overlapping footer links.
- **Size**: `w-14 h-14` (56px) -- touch-friendly on mobile.
- **z-index**: `z-50` to stay above all content.

The tooltip auto-shows on mount with a fade-in/fade-out animation (appears after 1s, disappears after 4s) using a `useState` + `useEffect` timer.

---

## Updated File: `src/App.tsx`

Add `<WhatsAppFAB />` inside the `TooltipProvider`, after `<Sonner />` and before `<BrowserRouter>`, so it renders on every page:

```tsx
import WhatsAppFAB from "./components/WhatsAppFAB";
// ...
<Sonner />
<WhatsAppFAB />
<BrowserRouter>
```

---

## Files Summary

| File | Change |
|------|--------|
| `src/components/WhatsAppFAB.tsx` | New component |
| `src/App.tsx` | Import and render `WhatsAppFAB` |

