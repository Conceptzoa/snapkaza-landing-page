

# Update Before/After Slider Images with Custom Assets

Replace the Unsplash placeholder images in the Showcase section with the four uploaded SnapKaza assets.

---

## Step 1: Copy uploaded images to `src/assets/`

Copy these 4 files from `user-uploads://` into the project:

| Source | Destination |
|--------|-------------|
| `user-uploads://Snapkaza_-_Living_Room_-_Before.png` | `src/assets/staging-before.png` |
| `user-uploads://Snapkaza_-_Living_Room_-_After.png` | `src/assets/staging-after.png` |
| `user-uploads://SnapKaza_-_Cozy_Scandinavian_kitchen_at_dusk_-_Before.png` | `src/assets/upscaling-before.png` |
| `user-uploads://SnapKaza_-_Cozy_Scandinavian_kitchen_at_dusk_-_After.png` | `src/assets/upscaling-after.png` |

---

## Step 2: Update `src/components/landing/Showcase.tsx`

**Add 4 ES6 imports** at the top of the file:

```
import stagingBefore from "@/assets/staging-before.png";
import stagingAfter from "@/assets/staging-after.png";
import upscalingBefore from "@/assets/upscaling-before.png";
import upscalingAfter from "@/assets/upscaling-after.png";
```

**Replace image URLs** in the two `BeforeAfterSlider` components:

| Slider | Prop | Old Value (Unsplash URL) | New Value |
|--------|------|-------------------------|-----------|
| AI Virtual Staging | `beforeImage` | `https://images.unsplash.com/photo-1558618666-...` | `{stagingBefore}` |
| AI Virtual Staging | `afterImage` | `https://images.unsplash.com/photo-1600596542815-...` | `{stagingAfter}` |
| 4K Upscaling | `beforeImage` | `https://images.unsplash.com/photo-1616594039964-...?w=120...` | `{upscalingBefore}` |
| 4K Upscaling | `afterImage` | `https://images.unsplash.com/photo-1616594039964-...?w=1200...` | `{upscalingAfter}` |

Labels ("Empty Room" / "AI Staged" and "Low Resolution" / "4K Enhanced") remain unchanged. No aspect ratio adjustments needed -- both image pairs share similar landscape proportions, and the `BeforeAfterSlider` uses `object-cover` which handles any minor ratio differences.

---

## Files Modified

| File | Change |
|------|--------|
| `src/assets/staging-before.png` | New file (copied from upload) |
| `src/assets/staging-after.png` | New file (copied from upload) |
| `src/assets/upscaling-before.png` | New file (copied from upload) |
| `src/assets/upscaling-after.png` | New file (copied from upload) |
| `src/components/landing/Showcase.tsx` | Add 4 imports, replace 4 image URL strings with imported assets |

