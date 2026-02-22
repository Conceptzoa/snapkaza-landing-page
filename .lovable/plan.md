

# Replace AI Virtual Staging Slider with Video Player

Replace the `BeforeAfterSlider` in the "staging" tab with an autoplaying, looping, muted video using the uploaded MP4 file.

---

## Step 1: Copy video to project

Copy the uploaded file into the assets directory:

| Source | Destination |
|--------|-------------|
| `user-uploads://SnapKaza_-_Modern_townhouses_in_suburban_setting_-Construction_timelapse.mp4` | `src/assets/staging-video.mp4` |

---

## Step 2: Update `src/components/landing/Showcase.tsx`

**Add import** at the top (alongside existing asset imports):

```ts
import stagingVideo from "@/assets/staging-video.mp4";
```

**Remove** the now-unused `stagingBefore` and `stagingAfter` imports (they are no longer referenced).

**Replace the BeforeAfterSlider** in the "staging" `TabsContent` (lines 120-125) with a `<video>` element:

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

This matches the existing `BeforeAfterSlider` aspect ratio (`aspect-[16/10]`) and rounded corner style (`rounded-xl`), and uses `object-cover` for consistent framing. The `playsInline` attribute ensures autoplay works on mobile Safari.

---

## Step 3: Clean up unused assets

The files `src/assets/staging-before.png` and `src/assets/staging-after.png` are no longer used anywhere and can be deleted.

---

## Files Modified

| File | Change |
|------|--------|
| `src/assets/staging-video.mp4` | New file (copied from upload) |
| `src/assets/staging-before.png` | Deleted (no longer referenced) |
| `src/assets/staging-after.png` | Deleted (no longer referenced) |
| `src/components/landing/Showcase.tsx` | Replace slider with video element; update imports |

