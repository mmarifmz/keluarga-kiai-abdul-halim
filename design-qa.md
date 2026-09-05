# Design QA — Family organisation chart

- Source visual truth: `D:\UserData\OneDrive\Documents\WhatsApp Image 2026-09-05 at 08.56.56.jpeg`
- Implementation screenshot: `design-qa-implementation-1080x607.png`
- Side-by-side comparison: `design-qa-comparison.png`
- Viewport and state: 1080 × 607 CSS pixels, device scale factor 1, home page at `#carta`
- Source pixels: 1080 × 607
- Implementation pixels: 1080 × 607
- Density normalization: none required; both artifacts use the same pixel dimensions

## Full-view comparison evidence

The implementation preserves the source hierarchy: founder, Hj. Shukur and Hjh. Mariam, one horizontal connector, and eight ordered family branches. All eight branch headers fit within the 1080 px comparison viewport. The source's compact cyan boxes are intentionally translated into the site's established cream, forest, mint, rounded-card, and serif design system.

## Focused-region comparison evidence

A separate crop was not needed because founder names, the couple node, all eight branch headers, spouse labels, and connector lines are legible in the equal-size side-by-side comparison. The longer descendant lists continue below the viewport in the implementation and remain available through normal vertical scrolling.

## Required fidelity surfaces

- Fonts and typography: existing Newsreader and Manrope hierarchy is retained; headings, names, spouse labels, and small generation labels remain readable at desktop and mobile sizes.
- Spacing and layout rhythm: the three-level hierarchy and eight-column rhythm match the reference structure; compacted vertical spacing keeps the main lineage visible without crowding.
- Colors and visual tokens: the reference cyan is adapted to the site's established mint palette with sufficient contrast and consistent borders.
- Image quality and asset fidelity: the reference is a structural chart with no photographic or illustrative assets to reproduce. Existing Lucide icons are used consistently for navigation, spouses, and WhatsApp.
- Copy and content: founder details, the Hj. Shukur couple, all eight branches, spouse names, and direct descendants match the merged family data.

## Primary interactions tested

- Desktop navigation jumps to the family chart.
- Mobile menu opens, closes, and navigates to the detailed family list.
- Mobile chart scrolls horizontally without causing page-level overflow.
- Floating WhatsApp control resolves to Mior Mohd Arif at `601140030076` with a prefilled update message.
- Search and existing branch controls remain present.
- Browser console error check returned no errors; no framework error overlay was present.

## Comparison history

1. Initial P2: at 1080 px the eighth branch was partially outside the visible chart and the WhatsApp label obscured content. Fixed by reducing the chart minimum width, keeping all eight branches visible, and changing the floating control to an icon-only circle.
2. Initial P2: the sticky header covered part of the chart heading when navigating by anchor. Fixed with responsive scroll margins for `#carta` and `#keluarga`.
3. Initial P2: the chart was too vertically loose compared with the source, leaving descendant names below the first viewport. Fixed by compacting node padding, connector gaps, and branch headers while retaining readability.

## Findings

No actionable P0, P1, or P2 findings remain. The rounded cards, serif typography, navigation header, and floating WhatsApp icon are intentional adaptations to the existing site rather than fidelity defects.

## Follow-up polish

- P3: consider a small directional hint animation on the mobile horizontal scrollbar if family members overlook the swipe instruction.

final result: passed
