# Hero Specification — v1

## Purpose

Within a few seconds, communicate that Itay is a SOC analyst who builds practical security automation.

## Desktop layout

- One centered container shared with the navbar.
- Container max width: 1560px.
- Horizontal safe space: 64px per side on large desktop.
- Two-column grid:
  - Copy: approximately 41%.
  - Product mockup: approximately 59%.
- Column gap: 64–96px depending on viewport width.
- Both columns vertically centered.

## Product mockup

- Flat, front-facing orientation.
- Maximum width: 980px.
- Right padding inside its column: 8–24px by breakpoint.
- No negative margin or off-screen overflow.
- Subtle glow may sit behind it but must not alter layout.

## Copy

Eyebrow:
`SOC Analyst · Security Automation`

Headline:
`Building practical automation for modern Security Operations.`

Body:
`I investigate security incidents in an MSSP environment and build tools that turn repetitive analyst workflows into fast, reliable processes.`

Actions:
- View Projects
- View Resume

## Responsive behavior

- Below desktop, stack copy above the product mockup.
- Reduce page padding progressively.
- Keep the mockup at 100% available width.
- Do not horizontally scroll at any supported viewport.
