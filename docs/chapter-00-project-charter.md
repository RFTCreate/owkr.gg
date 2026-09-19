# Chapter 00 — Project Charter

> Status: FIXED
>
> This document defines the mission, scope and operating principles of OWKR.GG.
> Every future specification follows this chapter.

---

# 0.1 Project Name

**OWKR.GG**

Japanese database for Korean Overwatch professional players and streamers.

---

# 0.2 Mission

OWKR.GG exists to make Korean Overwatch professionals easier to discover for Japanese players.

The website provides verified information about players, teams, devices and game settings in Japanese.

Goals:

- Introduce Korean professional players to Japanese audiences.
- Provide accurate gaming device information.
- Connect YouTube Shorts with searchable player pages.
- Build a maintainable database rather than a content-heavy media site.

---

# 0.3 Vision

Create the most complete Japanese database of Korean Overwatch players.

The website should become the place users visit after discovering a player through Shorts.

Flow:

YouTube Shorts

↓

OWKR.GG Player Page

↓

Device Page

↓

Amazon Affiliate

---

# 0.4 Target Audience

Primary audience:

- Japanese Overwatch players.
- FPS players (Overwatch / VALORANT / Apex Legends).
- People interested in Korean professional players.
- People searching for gaming devices used by pros.

Secondary audience:

- Esports fans.
- Streamer fans.
- Competitive FPS beginners.

---

# 0.5 Project Scope

Included in MVP:

## Players

- Professional players.
- Popular Korean streamers (later phase).

## Devices

- Mouse
- Keyboard
- Mousepad
- Monitor
- Audio devices

## Teams

Current Korean teams and organizations.

## Brands

Gaming device manufacturers.

## Rankings

Usage rankings generated from player data.

---

# 0.6 Out of Scope

The following features are intentionally excluded.

- News articles.
- Match results.
- Tournament schedules.
- Crosshair database.
- Crosshair history.
- Team history.
- Device history.
- Product reviews.
- Product ratings.
- Price comparison.
- Community comments.
- User accounts.

Reason:

OWKR.GG is a database website.

---

# 0.7 Core Principles

Every page follows these principles.

## Accuracy First

Publish only verified information.

Unknown information should remain unpublished.

## Maintainability

Every reusable element should exist once.

Never duplicate cards or layouts.

## Japanese UI

Interface language is Japanese.

Player names remain English.

## Mobile First

Shorts users mainly arrive from smartphones.

Every page must work comfortably on mobile.

---

# 0.8 Information Policy

Information categories.

| Category | Policy |
|----------|--------|
| Player Name | Verified |
| Korean Name | Verified |
| Team | Verified |
| Main Heroes | Verified |
| DPI | Verified |
| Sensitivity | Verified |
| Devices | Verified |
| Social Links | Verified |
| Unknown Information | Do not publish |

---

# 0.9 Verification Policy

Every published record must have an internal verification status.

Status values:

- draft
- needs_review
- published

Only published records appear publicly.

Verification metadata is managed internally.

---

# 0.10 Affiliate Policy

OWKR.GG participates in the Amazon Associates Program.

Rules:

- Affiliate links appear only inside Device Cards.
- Rankings do not contain affiliate buttons.
- Brand pages do not contain affiliate buttons.
- Footer displays affiliate disclosure.

Affiliate revenue must never influence factual information.

---

# 0.11 Website Structure

Public pages.

- Home
- Players
- Devices
- Teams
- Brands
- Rankings
- Search

Admin pages.

- Players
- Devices
- Teams
- Brands
- Shorts
- Affiliate
- Media

---

# 0.12 Development Philosophy

OWKR.GG values long-term maintainability over short-term speed.

When adding a new feature:

1. Update the specification first.
2. Update TASKS.md.
3. Implement the feature.
4. Review against CLAUDE.md.

Never implement undocumented functionality.

---

# Chapter Status

| Item | Status |
|------|--------|
| Mission | FIXED |
| Vision | FIXED |
| Scope | FIXED |
| Principles | FIXED |
| Verification Policy | FIXED |
| Affiliate Policy | FIXED |
