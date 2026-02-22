

# Swap Assets: Video to Cinematic AI Video, Slider Back to AI Virtual Staging

Two changes in `src/components/landing/Showcase.tsx` plus copying new image assets.

---

## Step 1: Copy uploaded images to `src/assets/`

| Source | Destination |
|--------|-------------|
| `user-uploads://Snapkaza_-_Living_Room_-_Before-2.png` | `src/assets/staging-before.png` |
| `user-uploads://Snapkaza_-_Living_Room_-_After-2.png` | `src/assets/staging-after.png` |

The existing `staging-video.mp4` stays in place -- it will now be used by the Cinematic AI Video tab instead.

---

## Step 2: Update `src/components/landing/Showcase.tsx`

**Add two new imports** for the staging before/after images:

```ts
import stagingBefore from "@/assets/staging-before.png";
import stagingAfter from "@/assets/staging-after.png";
```

**Replace the "staging" TabsContent** (lines 119-126): swap the `<video>` element back to a `BeforeAfterSlider`:

```tsx
<BeforeAfterSlider
  beforeImage={stagingBefore}
  afterImage={stagingAfter}
  beforeLabel="Empty Room"
  afterLabel="AI Staged"
/>
```

**Replace the "video" TabsContent** (lines 133-137): swap the `VideoPlaceholder` with the video player using the existing `stagingVideo` import:

```tsx
<video
  src={stagingVideo}
  autoPlay
  loop
  muted
  playsInline
  className="w-full aspect-[16/10] rounded-xl object-cover"
/>
```

No other files change. The `stagingVideo` import already exists; the `BeforeAfterSlider` import already exists. Labels, descriptions, and benefit text remain unchanged.

---

## Files Modified

| File | Change |
|------|--------|
| `src/assets/staging-before.png` | New file (copied from upload) |
| `src/assets/staging-after.png` | New file (copied from upload) |
| `src/components/landing/Showcase.tsx` | Add 2 image imports; swap staging tab back to slider; move video to cinematic tab |

