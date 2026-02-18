
# Update Pricing CTA Buttons with Stripe Payment Links

A minimal, targeted change to `src/components/landing/Pricing.tsx` only. No layout, styling, or structural changes.

---

## What Changes

### 1. Add a `stripeLink` field to each tier in `pricingTiers`

Each tier object gains one new property:

| Tier | Stripe Link |
|------|-------------|
| Essential | `https://buy.stripe.com/5kQfZhcTyf4d4Nm9Hib3q00` |
| Pro | `https://buy.stripe.com/cNi28raLq09jgw42eQb3q01` |
| Elite | `https://buy.stripe.com/cNi6oH8Di8FP4Nm4mYb3q02` |

### 2. Update the CTA `<a>` tag (lines 121–130)

The single `href="#"` placeholder is replaced with `href={tier.stripeLink}`, and two new attributes are added:

- `target="_blank"` — opens in a new tab
- `rel="noopener noreferrer"` — security best practice for external links opened in new tabs

All existing class names (`btn-gold`, `border-2 border-border`, `hover:border-primary`, etc.) and the `{tier.cta}` text remain completely unchanged.

---

## File to Modify

| File | Lines | Change |
|------|-------|--------|
| `src/components/landing/Pricing.tsx` | 4–57 (data) | Add `stripeLink` to each tier object |
| `src/components/landing/Pricing.tsx` | 121–130 (CTA tag) | Replace `href="#"` with `href={tier.stripeLink}` and add `target`/`rel` |

---

## Hero & Footer Anchor Links

The Hero section "Get Started" button already uses `href="#pricing"` (an in-page anchor), which correctly scrolls to the pricing section. No change is needed there — the request only asks to verify these work, which they do, as the `#pricing` ID is already on the section element at line 62 of `Pricing.tsx`.

---

## Technical Notes

- TypeScript: the `pricingTiers` array is not typed with an explicit interface, so adding `stripeLink: string` to each object literal is sufficient — no type declaration changes needed.
- Security: `rel="noopener noreferrer"` is always required when using `target="_blank"` to prevent the opened page from accessing `window.opener`.
- No new imports, hooks, or dependencies are required.
