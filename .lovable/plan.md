
# Update FAQ Content

A content-only update to the `faqs` array in `src/components/landing/FAQ.tsx`. No layout, styling, component structure, or class names will be changed — only the question and answer text for each of the 5 entries.

---

## What Changes

The existing 7 FAQ entries are replaced with 5 new sales-focused entries targeting UK early adopters. Everything else — the accordion component, glassmorphism card styling, gold text hover, "Still have questions?" footer, and section header — remains identical.

---

## New FAQ Content

| # | Question | Key Message |
|---|----------|-------------|
| 1 | Do I really only need my smartphone? | No expensive gear needed — AI transforms mobile photos into 4K luxury assets |
| 2 | How much can I save compared to traditional photography? | Save up to 70% vs. £300–£600 pro shoots with Essential (£79) or Pro (£179) packs |
| 3 | What is the turnaround time for a full Elite Pack? | Minutes, not 48h+ — go from listed to live on the same day |
| 4 | Is there a monthly subscription fee? | No — Pay-per-Listing only, no contracts, no hidden fees |
| 5 | Are the AI Avatars professional enough for luxury clients? | High-fidelity voice-over technology acting as a 24/7 concierge |

---

## File to Modify

| File | Lines | Change |
|------|-------|--------|
| `src/components/landing/FAQ.tsx` | 9–38 | Replace `faqs` array content only |

---

## Technical Notes

- The `faqs` array currently has 7 entries; the new version has 5. The `map()` render loop handles any count automatically — no template changes needed.
- Tone is kept professional and sophisticated to match the luxury aesthetic.
- UK price formatting (£) is used as requested.
