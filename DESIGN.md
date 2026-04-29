---
name: TTT Solar (Pure Solar)
description: Future-forward solar turbine technology landing page and tools.
colors:
  primary: "#eab308"
  background: "#0a0a0a"
  foreground: "#ffffff"
  muted: "#9ca3af"
  border: "rgba(255, 255, 255, 0.1)"
  surface: "#0f0f0f"
typography:
  display:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(3rem, 10vw, 6rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  huge: "40px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#000000"
    rounded: "{rounded.lg}"
    padding: "20px 32px"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "20px 32px"
---

# Design System: TTT Solar

## 1. Overview

**Creative North Star: "The Solar Turbine"**

The TTT Solar design system embodies the precision, efficiency, and sustainability of advanced solar turbine technology. It utilizes a high-fidelity dark mode aesthetic to evoke a sense of professional, "pro-grade" technology, contrasted with vibrant solar-yellow accents that symbolize energy and hope.

**Key Characteristics:**
- High-contrast dark mode foundation.
- Precision spacing using the 4px base system.
- Glassmorphic layering for depth and hierarchy.
- Bold, tracking-tight typography for strong brand identity.

## 2. Colors

The palette is anchored in deep space neutrals and a singular, powerful energy accent.

### Primary
- **Stellar Yellow** (#eab308): The primary energy color. Used for CTAs, key highlights, and to symbolize the sun. Its rarity is its power—use it on ≤10% of any given screen.

### Neutral
- **Deep Space** (#0a0a0a): The primary background color. Provides a stable, premium foundation.
- **Pure White** (#ffffff): Primary text color for maximum readability.
- **Ghost White** (rgba(255, 255, 255, 0.1)): Used for borders and subtle glassmorphic backgrounds.
- **Muted Gray** (#9ca3af): Used for secondary text and descriptions.

**The Contrast Rule.** Text on dark backgrounds must maintain a high contrast ratio. Never use dark text on dark backgrounds; always default to White or Stellar Yellow for legibility.

## 3. Typography

**Display Font:** Geist (sans-serif)
**Body Font:** Geist (sans-serif)

**Character:** The typography is bold, technical, and confident. It uses tight tracking and heavy weights for headlines to create a sense of engineering precision.

### Hierarchy
- **Display** (900, clamp(3rem, 10vw, 6rem), 1.1): Used for main Hero headlines.
- **Headline** (700, 2rem, 1.2): Used for section titles.
- **Body** (400, 1rem, 1.6): Used for general descriptions and content.
- **Label** (500, 0.875rem, 0.05em tracking): Used for badges and small UI metadata.

## 4. Elevation

The system uses tonal layering and glassmorphism instead of heavy drop shadows. Depth is conveyed through background opacity and subtle borders.

### Shadow Vocabulary
- **Solar Glow** (0 0 15px rgba(234, 179, 8, 0.5)): Used only on active primary elements to simulate energy emission.
- **Ambient Shadow** (0 4px 24px rgba(0,0,0,0.5)): Used on elevated cards for subtle separation.

## 5. Components

### Buttons
- **Shape:** Softly squared with large radii (16px).
- **Primary:** Stellar Yellow background with Black text. Bold weight. Hover scale (1.05).
- **Secondary:** Transparent background with 5% white opacity and 1px white border (10% opacity).

### Cards
- **Corner Style:** Large radii (40px) for a modern, organic feel.
- **Background:** 5% White opacity with a 1px border at 10% opacity.
- **Internal Padding:** 32px (lg).

### SolarCalcForm
- **Style:** Encapsulated in a glassmorphic container with a gradient border (#eab308/20 to transparent).

## 6. Do's and Don'ts

### Do:
- **Do** use the 4px spacing system strictly (4, 8, 12, 16, 24px).
- **Do** maintain the dark mode foundation for all screens.
- **Do** use the Stellar Yellow accent sparingly for maximum impact.
- **Do** ensure all CTAs are within the mobile "Thumb Zone".

### Don't:
- **Don't** use generic "Commerce" patterns like 2-column product grids unless it's a shop interface.
- **Don't** use standard shadows; prefer glassmorphism and subtle glows.
- **Don't** use low-contrast text (e.g. dark gray on black).
- **Don't** add elements for "decoration" only; every element should serve the "Solar Turbine" precision theme.
