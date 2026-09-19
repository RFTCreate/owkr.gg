# Chapter 01 — Brand Identity & Design System

> Status: FIXED
>
> This chapter defines the visual identity and UI rules of OWKR.GG.
> Every page must follow this design system.

---

# 1.1 Design Concept

Reference website:

- ohmygear.net

OWKR.GG follows a minimal esports database design.

Keywords:

- Minimal
- Premium
- Fast
- Spacious
- Readable

The website should feel closer to a database than a blog.

---

# 1.2 Brand Identity

Website name:

**OWKR.GG**

Tagline:

> Korean Overwatch Player Database

Primary language:

Japanese

Player names:

English

---

# 1.3 Design Keywords

The UI should communicate:

- Professional.
- Trustworthy.
- Organized.
- Lightweight.

Avoid colorful or noisy layouts.

---

# 1.4 Color System

## Base Colors

| Token | Usage |
|-------|-------|
| background | Page background |
| surface | Cards |
| surface-secondary | Secondary cards |
| border | Borders |
| text-primary | Main text |
| text-secondary | Secondary text |

The palette is grayscale.

---

## Accent Colors

Accent colors are used only when information belongs to a team, brand or role.

Examples:

- Team badge.
- Brand badge.
- Role badge.
- Links.

Never use accent colors for page backgrounds.

---

# 1.5 Typography

Interface language is Japanese.

Player names stay English.

Typography hierarchy:

| Element | Weight |
|----------|--------|
| Page Title | Bold |
| Section Title | Semibold |
| Card Title | Semibold |
| Body Text | Regular |
| Metadata | Regular |

Use consistent spacing instead of different font sizes whenever possible.

---

# 1.6 Spacing Rules

Spacing is part of the brand.

| Token | Value |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |

Cards should have generous padding.

---

# 1.7 Border Radius

Rounded corners are consistent across the website.

| Component | Radius |
|-----------|--------|
| Card | Large |
| Badge | Full |
| Button | Large |
| Hero Image | Large |

Avoid mixing many radius sizes.

---

# 1.8 Shadow Rules

Use soft shadows only.

Cards use one shared shadow token.

Do not use heavy shadows.

---

# 1.9 Layout Rules

The website is mobile-first.

Desktop layout has a centered content container.

Rules:

- Maximum readable width.
- Equal horizontal padding.
- Large vertical spacing between sections.

---

# 1.10 Header

Header contains:

- OWKR.GG logo.
- Navigation.
- Search button.
- Theme toggle.

Header stays minimal.

No large hero banner.

---

# 1.11 Footer

Footer contains:

- Navigation.
- Copyright.
- Affiliate disclosure.
- Last update.
- GitHub (optional later).

Footer is visually smaller than page content.

---

# 1.12 Navigation

Public navigation order:

1. Players
2. Teams
3. Devices
4. Brands
5. Rankings

Search icon is placed at the end.

---

# 1.13 Role Colors

Roles have fixed accent colors.

| Role | Token |
|------|-------|
| Tank | role-tank |
| DPS | role-dps |
| Support | role-support |

Only badges and small indicators use these colors.

---

# 1.14 Card System

Every page is built using reusable cards.

Approved cards:

- HeroCard
- ProfileCard
- MainHeroCard
- SettingsCard
- DeviceCard
- AchievementCard
- SNSCard
- ShortsCard
- UpdateCard
- RankingCard

Never create duplicate versions.

---

# 1.15 Button System

Three button variants only.

| Variant | Usage |
|----------|-------|
| Primary | Main actions |
| Secondary | Secondary actions |
| Ghost | Text actions |

Amazon button uses Primary.

SNS buttons use Ghost.

---

# 1.16 Icon Rules

Icons come from Lucide Icons.

Icons are outline style.

Never mix icon libraries.

---

# 1.17 Image Rules

Images always have consistent aspect ratios.

| Asset | Aspect Ratio |
|-------|--------------|
| Player | 1:1 |
| Device | 1:1 |
| Hero | 1:1 |
| Team Logo | Original / SVG |
| Brand Logo | Original / SVG |

Use WebP whenever possible.

---

# 1.18 Animation Rules

Animations are minimal.

Allowed:

- Fade.
- Hover.
- Small scale.
- Theme transition.

Avoid:

- Large motion.
- Auto-playing animation.
- Flashing effects.

---

# 1.19 Responsive Rules

Mobile is the primary target.

Desktop expands the layout without changing hierarchy.

Navigation becomes horizontal on desktop.

Cards stack vertically on mobile.

---

# 1.20 Design Principles Checklist

Every page must satisfy:

- Minimal layout.
- Reusable cards.
- Japanese UI.
- English player names.
- Mobile-first.
- Dark/Light mode support.
- Grayscale base colors.
- Accent colors only for metadata.

---

# Chapter Status

| Item | Status |
|------|--------|
| Brand Identity | FIXED |
| Color System | FIXED |
| Typography | FIXED |
| Card System | FIXED |
| Responsive Rules | FIXED |
| Button Rules | FIXED |
