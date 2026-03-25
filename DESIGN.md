# Design System Strategy: The Kinetic Lens

## 1. Overview & Creative North Star

**Creative North Star: "Precision Velocity"**

This design system moves away from the static, boxed nature of traditional e-commerce. Instead, it treats the interface as a high-performance heads-up display (HUD). The goal is to create a "Kinetic Lens"—an experience that feels as fast and sophisticated as the elite athletes using the technology.

We break the "template" look through **intentional asymmetry** and **tonal depth**. Rather than placing content in rigid rows, we use overlapping elements (e.g., product imagery bleeding out of containers) and high-contrast typography scales to create a sense of forward motion. The interface doesn't just hold data; it accelerates the user's journey through it.

## 2. Colors & Surface Architecture

The palette is rooted in the depth of the night stadium (`surface: #0b1326`) electrified by the glow of digital performance data (`primary: #8ed5ff`).

### Color Tokens (Quick Reference)

| Token                       | Hex     | Usage                                     |
| --------------------------- | ------- | ----------------------------------------- |
| `surface`                   | #0b1326 | Base background — the deep foundation     |
| `surface-container-low`     | #131b2e | Large secondary content blocks            |
| `surface-container`         | #171f33 | Cards / interactive elements              |
| `surface-container-high`    | #1e2740 | Hover states for cards                    |
| `surface-container-highest` | #2d3449 | Modals / active popped-out states         |
| `primary`                   | #8ed5ff | Accent glow, labels, links                |
| `primary-container`         | #38bdf8 | Gradient end for buttons                  |
| `on-surface`                | #dae2fd | Body text                                 |
| `on-primary`                | #001e2e | Text on primary-colored backgrounds       |
| `outline-variant`           | #2a3a5c | Ghost border base (use at 10–20% opacity) |
| `tertiary`                  | #ffc176 | Price tags, "New Tech" badges — SPARINGLY |

### The "No-Line" Rule

**Strict Mandate:** Traditional 1px solid borders are prohibited for sectioning.  
Structure must be defined through background shifts. Use `outline-variant` only at 10–20% opacity as a "Ghost Border" when absolute containment is required for accessibility.

### The "Glass & Gradient" Rule

Main CTAs and floating navigation elements must utilize **Glassmorphism**.

- **Glass Specs:** `surface-variant` at 60% opacity + `20px` backdrop-blur.
- **Signature Gradients:** Linear gradient from `primary` (#8ed5ff) → `primary-container` (#38bdf8) on primary action buttons.

## 3. Typography: The Editorial Edge

We use **GeistSans** (the project's default font) throughout — clean, modern, and precise.

- **Display:** GeistSans with tight tracking (-0.02em) via `.font-display`. This is your "Elite" voice—authoritative and modern.
- **Body:** GeistSans at regular weight, optimized for readability. Use `body-lg` for product descriptions.
- **Data Labels:** `label-md` in `primary` color for technical specs. The contrast between oversized display type and micro-labeling creates a sophisticated, data-driven editorial feel.

## 4. Elevation & Depth: Tonal Layering

No drop shadows. Use **Tonal Lift** instead.

- Place a `surface-container` card on a `surface-container-low` background for a "soft lift."
- Floating elements: shadow color from `on-surface` (#dae2fd) at 5% opacity, 48px blur.
- Break the "box": use z-index to let imagery overlap container edges.

## 5. Components

### Buttons

- **Primary:** Gradient `primary` → `primary-container`, `rounded-md`. Text: ALL-CAPS, 0.05em tracking.
- **Secondary:** Ghost — `outline-variant` at 20% opacity. Hover → `surface-container-high`.
- **Tertiary:** Text-only in `primary`. Low-priority actions ("Learn More").

### Data-Driven Chips

- Background: `surface-container-high`, `rounded-full`.
- Selected: background flips to `primary` with `on-primary` text. No borders.

### Input Fields

- Base: `surface-container-lowest` background.
- Border: Ghost border on **bottom edge only**.
- Focus: bottom border → `primary` 100% + subtle `primary` outer glow.

### Cards & Lists

- **No Dividers** — use 4rem vertical spacing instead.
- **Card Hover:** shift background `surface-container` → `surface-container-highest`. No scale transform.

### Signature: "Performance HUD" Card

- `20px` backdrop-blur, 10% opacity `outline-variant` border.
- `tertiary` (#ffc176) for "Critical Data" (price, performance gains).

## 6. Do's and Don'ts

### Do:

- Use asymmetrical layouts.
- Use `tertiary` (#ffc176) sparingly — price tags and "New Technology" badges only.
- Use extreme whitespace (spacing `20`–`24`) to separate major sections.

### Don't:

- Don't use pure black (#000000) or pure white (#ffffff). Use tokenized `surface` and `on-surface`.
- Don't use 1px solid dividers or high-contrast borders.
- Don't use standard drop shadows. Only tonal shift + ambient glow.
- Don't crowd the data. Show 3 key specs, hide the rest in a "Technical Deep-Dive" glass drawer.
