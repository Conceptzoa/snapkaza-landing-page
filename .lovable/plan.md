

# Update Pricing & FAQ Sections

This update will refresh the pricing section with new branding, GBP currency, and updated package features, plus fix the FAQ contact link.

---

## Summary of Changes

| Section | Change |
|---------|--------|
| **Pricing Title** | "Service Packages" → "Cinematic Packages" |
| **Pricing Subtitle** | New copy about AI-generated cinema |
| **Currency** | Euro (€) → British Pound (£) |
| **Package Features** | Updated features for all three tiers |
| **Agency Note** | Updated copy with link to contact form |
| **Environmental Note** | Updated wording |
| **FAQ Link** | "Contact our support team" → smooth scroll to contact form |

---

## Pricing Tiers Update

### Essential - £79/property
| Current | New |
|---------|-----|
| 15s AI Cinema Video | 30s AI Cinema Video |
| Virtual Enhancements | 6 Virtual Enhancements |
| HD Quality Output | AI Voice-over |
| 48-hour Delivery | HD Quality Output |
| 1 Revision Included | 48-hour Delivery |
| | Social Media Formats |
| | 1 Revisions |

### Pro - £179/property  
| Current | New |
|---------|-----|
| Everything in Essential | 60s AI Cinema Video |
| AI Avatar Intro | 12 Virtual Enhancements |
| AI Voice-over (UK/PT-PT) | AI Avatar Intro |
| 4K Quality Output | AI Voice-over |
| 24-hour Delivery | 4K Quality Output |
| 3 Revisions Included | 36-hour Delivery |
| Social Media Formats | Social Media Formats |
| | 3 Revisions |

### Elite - £399/property
| Current | New |
|---------|-----|
| Everything in Pro | 90s+ Full AI Avatar Cinematic Narrative |
| 4K Full Narrative Video | 4K Full Narrative Video |
| Voice Cloning Technology | 18+ Virtual Enhancements |
| Priority Processing | Voice Cloning Technology |
| 12-hour Rush Delivery | Priority Processing |
| Unlimited Revisions | 24-hour Delivery |
| Dedicated Account Manager | Social Media Formats |
| White-label Options | 6 Revisions |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/landing/Pricing.tsx` | Update title, subtitle, pricing data, footer notes |
| `src/components/landing/FAQ.tsx` | Import AnchorLink, update contact link |

---

## Technical Details

### Pricing.tsx Changes

1. **Import AnchorLink** for the contact link in the agency note
2. **Update section header:**
   - Title: `Cinematic <span className="gold-text">Packages</span>`
   - Subtitle: "Elevate your listings with AI-generated cinema. Our technology transforms your property photographs into high-impact cinematic experiences."

3. **Update pricingTiers array** with new prices and features

4. **Update agency note:** 
   - Text: "Operating a high-volume agency? Contact us for bespoke enterprise solutions and automated workflows."
   - Link uses AnchorLink pointing to `/#contact`

5. **Update environmental note:**
   - Text: "Investing in the future: 1% of every purchase is dedicated to global carbon removal initiatives."

### FAQ.tsx Changes

1. **Import AnchorLink** from `@/components/AnchorLink`
2. **Replace the `<a href="#">` tag** with `<AnchorLink to="/#contact">` for the "Contact our support team" link
3. This ensures smooth scroll when on home page, proper navigation from sub-pages

---

## Expected Result

- Pricing section displays new "Cinematic Packages" branding
- All prices shown in GBP (£79, £179, £399)
- Updated feature lists for each tier
- Agency note links directly to contact form with smooth scroll
- Environmental commitment note has updated wording
- FAQ "Contact our support team" link smooth scrolls to contact section

