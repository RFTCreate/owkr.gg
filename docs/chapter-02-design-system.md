# Chapter 02 — UI Component Design System

> Status: FIXED
>
> This chapter defines every reusable UI component used throughout OWKR.GG.

---

# 2.1 Component Philosophy

Every page must be assembled using reusable cards.

Rules:

- One component = One responsibility.
- Reuse components with props.
- Never duplicate layouts.
- Every component supports Light / Dark mode.

---

# 2.2 Approved Components

| Component | Purpose |
|-----------|---------|
| HeroCard | Page hero section |
| ProfileCard | Player information |
| MainHeroCard | Main heroes |
| SettingsCard | DPI / Sensitivity |
| DeviceCard | Gaming device |
| AchievementCard | Tournament achievements |
| SNSCard | External links |
| ShortsCard | Embedded Shorts |
| UpdateCard | Last updated |
| RankingCard | Ranking item |
| Badge | Metadata badges |
| Button | Shared buttons |
| SectionHeader | Section titles |

Only these components are allowed.

---

# 2.3 HeroCard

Purpose:

Top section of Player / Team / Brand pages.

Contains:

- Image
- English name
- Korean name
- Team badge
- Role badge
- Main heroes
- Status badge

Layout:

Mobile:

Image above text.

Desktop:

Image left, information right.

---

# 2.4 ProfileCard

Contains:

- English name
- Korean name
- Team
- Role
- Nationality
- Birthday (optional)
- Active status

SNS links appear at the bottom.

---

# 2.5 MainHeroCard

Displays player's representative heroes.

Rules:

- Maximum 5 heroes.
- Hero icon.
- Hero name (Japanese).
- Ordered by importance.

No statistics.

---

# 2.6 SettingsCard

Contains verified game settings.

Fields:

- DPI
- Sensitivity
- eDPI (calculated)
- Scoped Sensitivity (optional)
- Polling Rate (optional)

Unknown values remain empty.

---

# 2.7 DeviceCard

Most important reusable card.

Contains:

- Product image
- Brand logo
- Product name
- Category
- Players using this device
- Amazon button

Button text:

Amazonで見る

No price.

No review.

No recommendation score.

---

# 2.8 AchievementCard

Displays notable achievements.

Fields:

- Tournament
- Placement
- Year

Maximum 5 entries.

Ordered newest first.

---

# 2.9 SNSCard

Contains official links only.

Supported:

- X
- Twitch
- YouTube
- Instagram
- CHZZK
- AfreecaTV

Open in new tab.

---

# 2.10 ShortsCard

Purpose:

Connect YouTube Shorts with player pages.

Contains:

- Thumbnail
- Title
- Published date
- Duration

Maximum 6 shorts.

Newest first.

---

# 2.11 UpdateCard

Shows freshness of information.

Fields:

- Last Updated
- Verification Status

Status badge:

- Published
- Needs Review

Draft never appears publicly.

---

# 2.12 RankingCard

Shared ranking component.

Contains:

- Rank number
- Device image
- Device name
- Usage count
- Usage percentage

No affiliate button.

---

# 2.13 Badge Component

Badge types:

| Badge | Usage |
|-------|-------|
| Team | Team name |
| Brand | Device brand |
| Role | Tank / DPS / Support |
| Status | Published / Review |
| Hero | Hero metadata |

Shape:

Rounded pill.

---

# 2.14 Button Component

Three variants only.

| Variant | Usage |
|----------|-------|
| Primary | Main CTA |
| Secondary | Secondary CTA |
| Ghost | SNS / Small actions |

Sizes:

- Small
- Medium
- Large

---

# 2.15 SectionHeader

Reusable section title.

Contains:

- Title
- Optional description
- Optional action button

Used on every page.

---

# 2.16 Card Spacing Rules

Every card uses shared spacing.

Padding:

24px desktop.

16px mobile.

Gap:

16px between content.

---

# 2.17 Image Rules

| Asset | Ratio |
|-------|-------|
| Player | 1:1 |
| Device | 1:1 |
| Hero | 1:1 |
| Team Logo | Original SVG |
| Brand Logo | Original SVG |

Images use lazy loading.

---

# 2.18 Empty State Rules

Unknown information displays:

「情報確認中」

Never display fake values.

---

# 2.19 Loading State Rules

Loading uses skeleton cards.

Never use spinners for page content.

---

# 2.20 Component Checklist

Every component must support:

- Light Mode
- Dark Mode
- Mobile Layout
- Desktop Layout
- TypeScript Props
- Reusability

---

# Chapter Status

| Component | Status |
|-----------|--------|
| HeroCard | FIXED |
| ProfileCard | FIXED |
| SettingsCard | FIXED |
| DeviceCard | FIXED |
| AchievementCard | FIXED |
| ShortsCard | FIXED |
| Badge | FIXED |
| Button | FIXED |
