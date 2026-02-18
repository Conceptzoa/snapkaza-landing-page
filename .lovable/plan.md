
# Refactor 'Powerful AI Features' — Dynamic Showcase Layout

Only `src/components/landing/Showcase.tsx` needs to change. `BeforeAfterSlider.tsx` is reused as-is.

---

## What Changes

### 1. `featureTabs` data array — extend with `benefit` copy

Each tab entry gains a `benefit` string (the sales-focused paragraph shown below the visual), and the tab order is updated to match the request:

| Tab ID | Label | Benefit copy |
|--------|-------|-------------|
| `staging` | AI Virtual Staging | "Stop wasting £2,000 on physical staging. Our AI creates beautifully furnished 3D interiors from your raw photos, helping buyers visualise their dream home instantly." |
| `video` | Cinematic AI Video | "Sell the future, not just the present. We transform a photo of a plot of land or a renovation project into a cinematic video of the completed building. Show your clients the final result before the first brick is even laid." |
| `upscaling` | 4K Upscaling | "DSLR quality from your pocket. Our AI upgrades every smartphone photo to crystal-clear 4K resolution, ensuring your listings stand out on premium portals like Rightmove and Zoopla." |
| `avatars` | AI Avatars | "Stop wasting hours filming and narrating. Simply send us your property photos, and we will create a high-end video narrated by your own Personalised AI Avatar. Build your personal brand on autopilot." |

---

### 2. Visual panels per tab

| Tab | Visual |
|-----|--------|
| **AI Virtual Staging** | `BeforeAfterSlider` — Before: empty room with raw cement floor / After: same room with Scandinavian furniture and wooden flooring |
| **Cinematic AI Video** | `VideoPlaceholder` (existing component, updated description) |
| **4K Upscaling** | `BeforeAfterSlider` — Before: blurry/pixelated bedroom crop / After: same crop, sharp and clear |
| **AI Avatars** | `VideoPlaceholder` (existing component, updated description) |

**Unsplash image pairs (no auth required, free):**

- Staging Before (empty/raw): `photo-1558618666-fcd25c85cd64` (unfurnished concrete-look room)
- Staging After (furnished): `photo-1600596542815-ffad4c1539a9` (Scandinavian styled interior)
- Upscaling Before: same bedroom image rendered blurry via CSS `filter: blur(3px) contrast(0.8)` with low `?w=200` resolution param to simulate pixelation
- Upscaling After: same bedroom image rendered sharp at `?w=1200&q=90` — `photo-1616594039964-ae9021a400a0` (sharp bedroom detail)

---

### 3. Dynamic benefit copy block (below the visual panel)

Replace the static `<div className="text-center mt-6">` description with a new animated benefit block. When the active tab changes, this area shows:

```text
┌────────────────────────────────────────────┐
│  [Icon]  Tab Label                          │
│                                            │
│  Benefit-focused paragraph text...         │
│  (max-w-2xl, centered, muted-foreground)   │
└────────────────────────────────────────────┘
```

- Uses `key={activeTab}` on the inner container so React remounts it on tab switch, triggering the `animate-fade-in` CSS animation for a smooth content transition
- Icon and label displayed in gold (`text-primary`), matching the active tab pill

---

### 4. Before/After images — `filter` trick for 4K Upscaling

The `BeforeAfterSlider` already accepts any image URL. For the 4K Upscaling pair, we layer CSS classes on the image elements. Since `BeforeAfterSlider` doesn't expose image className props, two options exist:

**Chosen approach:** Pass the same Unsplash image at very low resolution (`?w=120&q=30`) for "Before" and full resolution (`?w=1200&q=90`) for "After". The Unsplash CDN handles the quality difference, making the pixelation effect authentic without any CSS hacks or changes to `BeforeAfterSlider.tsx`.

---

## Full Layout After Change

```text
┌──────────────────────────────────────────────────────┐
│              Powerful AI Features                    │
│   [AI Virtual Staging] [Cinematic AI Video]          │
│   [4K Upscaling]       [AI Avatars]                  │
│                                                      │
│  ┌──────────────── glass-card ───────────────────┐   │
│  │  [Visual: BeforeAfterSlider or VideoPlaceholder]│  │
│  └───────────────────────────────────────────────┘   │
│                                                      │
│  ── Animated benefit block (fades on tab change) ──  │
│  [Icon]  Active Tab Label (gold)                     │
│  Benefit copy paragraph (muted, centered)            │
└──────────────────────────────────────────────────────┘
```

---

## File to Modify

| File | Change |
|------|--------|
| `src/components/landing/Showcase.tsx` | Full rewrite of data array, tab content panels, and bottom copy block |

No other files change. `BeforeAfterSlider.tsx` is used as-is.

---

## Technical Notes

- **Tab order** is updated to: Staging → Video → Upscaling → Avatars (matching the user's requested order).
- The `VideoPlaceholder` component's `description` prop is updated to match the new benefit-focused wording displayed inside the placeholder card.
- The `key={activeTab}` prop on the benefit block wrapper ensures the `animate-fade-in` class retriggers on every tab change.
- No new dependencies, no changes to `BeforeAfterSlider.tsx` or any UI component.
- All existing class names (`glass-card`, `gold-gradient`, `gold-text`, `animate-fade-in`, `data-[state=active]` variants) are preserved.
