# Chapter 03 — Home Page Specification

> Status: FIXED
>
> This chapter defines the complete layout and behavior of the OWKR.GG homepage.

---

# 3.1 Homepage Purpose

The homepage is the entrance of OWKR.GG.

Primary goals:

- Introduce Korean Overwatch players.
- Allow users to search immediately.
- Show players grouped by role.
- Lead users to player pages, rankings and Shorts.

The homepage should be lightweight and searchable.

---

# 3.2 Homepage Layout Order

The homepage always follows this order.

1. Header
2. Hero Section
3. Search Section
4. Players by Role
5. Rankings Preview
6. Latest Shorts
7. Latest Updates
8. Footer

No additional sections above the Hero Section.

---

# 3.3 Header

Header contents:

- OWKR.GG logo
- Players
- Teams
- Devices
- Brands
- Rankings
- Search button
- Theme toggle

Behavior:

- Sticky on scroll.
- Transparent at top.
- Solid background after scrolling.

---

# 3.4 Hero Section

Purpose:

Explain what OWKR.GG is.

Contents:

- Title
- Description
- Search button
- Browse Players button

Copy (Japanese):

Title:

韓国Overwatchプロデータベース

Description:

韓国プロ・ストリーマーの使用デバイス、感度、メインヒーローを日本語で検索できます。

CTA Buttons:

- 選手を探す
- ランキングを見る

---

# 3.5 Search Section

Search is the first interactive element.

Placeholder:

選手名・チーム名・デバイス名を検索

Search supports:

- English player names.
- Korean player names.
- Japanese aliases.
- Team names.
- Device names.

Search opens a dedicated Search Page.

---

# 3.6 Players by Role

This is the homepage's main visual section.

Display order is fixed.

## Tank

Player names appear under the Tank heading.

## DPS

Player names appear under the DPS heading.

## Support

Player names appear under the Support heading.

Rules:

- Role headings stay in one horizontal row.
- Player names hang below each role.
- English names only.
- Maximum 10 players visible.
- "もっと見る" button opens the full player list.

---

# 3.7 Player Card (Homepage)

Homepage cards are simplified HeroCards.

Contains:

- Player image.
- English name.
- Team badge.
- Role badge.

Click opens Player Page.

Do not display devices on the homepage.

---

# 3.8 Rankings Preview

Purpose:

Lead users to ranking pages.

Display four cards.

- Mouse Ranking
- Keyboard Ranking
- Mousepad Ranking
- Monitor Ranking

Each card shows:

- #1 device.
- Usage percentage.
- "ランキングを見る" button.

No affiliate buttons.

---

# 3.9 Latest Shorts Section

Purpose:

Connect YouTube Shorts with database pages.

Display latest six Shorts.

Each Shorts card contains:

- Thumbnail.
- Title.
- Player name.
- Publish date.

Click opens the Player Page first.

Player page contains embedded Shorts.

---

# 3.10 Latest Updates Section

Placed near the bottom of the homepage.

Contains latest published updates.

Display:

- Player updated.
- Device updated.
- Team updated.

Fields:

- Title.
- Update type.
- Date.

Maximum five updates.

---

# 3.11 Footer

Footer contains:

Navigation:

- Players
- Teams
- Devices
- Brands
- Rankings

Information:

- Affiliate disclosure.
- Copyright.
- Last updated.
- Version.

---

# 3.12 Mobile Layout

Order remains identical.

Hero Section stacks vertically.

Role columns become horizontal scroll.

Ranking cards become horizontal scroll.

Shorts become horizontal scroll.

---

# 3.13 Desktop Layout

Content is centered.

Role section displays three equal columns.

Ranking preview displays four cards.

Shorts display three columns.

Latest updates display one column list.

---

# 3.14 Homepage SEO

Metadata

Title:

OWKR.GG｜韓国Overwatchプロデータベース

Description:

韓国Overwatchプロ・ストリーマーの使用デバイス、感度、メインヒーローを日本語で検索できるデータサイト。

JSON-LD:

WebSite schema.

Canonical:

/

---

# 3.15 Homepage Checklist

Homepage must include:

- Header
- Hero
- Search
- Players by Role
- Rankings Preview
- Shorts Preview
- Latest Updates
- Footer

---

# Chapter Status

| Section | Status |
|--------|--------|
| Hero Section | FIXED |
| Search | FIXED |
| Role Layout | FIXED |
| Rankings Preview | FIXED |
| Shorts Preview | FIXED |
| Latest Updates | FIXED |
| Responsive Layout | FIXED |
