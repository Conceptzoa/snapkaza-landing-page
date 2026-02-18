# Update Hero & The SnapKaza Method — Copy-Only Changes

Both sections keep their existing design, layout, CSS classes, animations, and responsive grid exactly as they are. Only text content is updated.

---

## Hero Section (`src/components/landing/Hero.tsx`)

### Changes


| Element          | Current                                                                                                           | New                                                                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Headline         | "Elevate Your Property Marketing with AI."                                                                        | "Luxury Property Marketing from Your Smartphone."                                                                                           |
| Gold accent word | "AI."                                                                                                             | "Smartphone."                                                                                                                               |
| Sub-headline     | "Transform smartphone photos into cinematic 4K videos, AI-narrated tours, and luxury virtual staging in minutes." | "For independent estate agents. Transform mobile photos into 4K visuals and 3D tours instantly. Save thousands in professional fees today." |


The `<br className="hidden md:block" />` split will be repositioned to break naturally after "Marketing from Your" so the gold-accented word "Smartphone." anchors the second line on desktop.

All animations (`animate-fade-in`, `animate-fade-in-delay-1/2/3`), the badge, CTA buttons, and stats block are untouched.

---

## The SnapKaza Method Section (`src/components/landing/Process.tsx`)

### Changes

**Section header — add a subtitle paragraph:**
Below the existing `<h2>` title, the current descriptive `<p>` is replaced with the new subtitle:

> "Unlike traditional photographers who eat into your commission, we empower you to create professional assets instantly for a fraction of the cost."

**Step data array — descriptions only (icons, numbers, titles, and layout unchanged):**


| Step | Title (unchanged) | Old Description                                                | New Description                                                                     |
| ---- | ----------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 01   | Capture           | "Use your smartphone to photograph the property…"              | "Upload your property photos directly from your smartphone to the SnapKaza app."    |
| 02   | Upload            | "Securely upload your images through your personal dashboard…" | "Our AI engine enhances visuals and generates 3D renders and narrated video tours." |
| 03   | Deploy            | "Receive stunning marketing assets ready for global reach…"    | "Launch your listing with a full luxury marketing suite in less than 30 minutes."   |


Note: Step 02's title is currently "Upload" — the new description shifts focus to the AI engine processing. The title remains "Upload" as instructed to keep all structural elements intact.

The connector lines, gold icon badges, numbered badges, `hover-lift`, `hover-glow`, responsive `md:grid-cols-3` grid, and the "Start Your Transformation" CTA button are all preserved exactly.

---

## Files to Modify


| File                                 | Lines       | Type of change                                             |
| ------------------------------------ | ----------- | ---------------------------------------------------------- |
| `src/components/landing/Hero.tsx`    | 35–46       | Replace headline and sub-headline text only                |
| `src/components/landing/Process.tsx` | 3–22, 38–41 | Replace step descriptions; replace subtitle paragraph text |


---

## Technical Notes

- Zero structural, class, or layout changes in either file.
- The `gold-text` span in the headline moves to wrap "Smartphone." instead of "AI."
- The `<br className="hidden md:block" />` is kept for desktop line-breaking; its position within the headline is adjusted to suit the new, longer headline text.
- No new imports, hooks, or dependencies needed.