# TASKS.md — OWKR.GG Development Roadmap

> OWKR.GG implementation checklist.
>
> Claude Code should complete tasks in order.
> Do not skip phases unless explicitly instructed.

---

# Project Progress

## Phase Status

- [x] Phase 1 — MVP Foundation
- [ ] Phase 1.5 — Foundation Cleanup
- [ ] Phase 2 — Database Pages
- [ ] Phase 3 — Admin Dashboard
- [ ] Phase 4 — Expansion

---

# Phase 1.5 — Foundation Cleanup

## Site Configuration

- [ ] Create `lib/site.ts` as the single site configuration file.
- [ ] Store site name.
- [ ] Store site description.
- [ ] Store canonical URL.
- [ ] Store affiliate disclosure.
- [ ] Store navigation items.

## Design System

- [ ] Create design tokens.
- [ ] Define color tokens.
- [ ] Define spacing tokens.
- [ ] Define radius tokens.
- [ ] Define shadow tokens.

## Constants

- [ ] Create Role enum.
- [ ] Create Hero enum.
- [ ] Create Team constants.
- [ ] Create Brand constants.

## Shared UI

- [ ] Create reusable Button component.
- [ ] Primary button.
- [ ] Secondary button.
- [ ] Ghost button.

---

# Phase 2 — Database Pages

## Players

- [ ] Dynamic player page.
- [ ] HeroCard.
- [ ] ProfileCard.
- [ ] MainHeroCard.
- [ ] SettingsCard.
- [ ] AchievementCard.
- [ ] SNSCard.
- [ ] UpdateCard.

## Devices

- [ ] Device page layout.
- [ ] Mouse page.
- [ ] Keyboard page.
- [ ] Mousepad page.
- [ ] Monitor page.
- [ ] Audio page.

## Teams

- [ ] Team page template.
- [ ] Team Hero section.
- [ ] Players grouped by role.
- [ ] Team statistics.

## Brands

- [ ] Brand page template.
- [ ] Device list.
- [ ] Players using brand.
- [ ] Related brands.

## Rankings

- [ ] Mouse ranking.
- [ ] Keyboard ranking.
- [ ] Mousepad ranking.
- [ ] Monitor ranking.
- [ ] Audio ranking.

## Search

- [ ] Search input.
- [ ] Player search.
- [ ] Japanese aliases.
- [ ] Korean aliases.
- [ ] Partial match search.

---

# Phase 3 — Supabase Integration

## Database

- [ ] Create players table.
- [ ] Create devices table.
- [ ] Create brands table.
- [ ] Create teams table.
- [ ] Create shorts table.

## Fetching

- [ ] Fetch players.
- [ ] Fetch devices.
- [ ] Fetch teams.
- [ ] Fetch brands.
- [ ] Fetch rankings.

## Status Workflow

- [ ] Draft support.
- [ ] Needs Review support.
- [ ] Published support.

---

# Phase 3 — Admin Dashboard

## Dashboard

- [ ] Dashboard layout.
- [ ] Sidebar navigation.
- [ ] Status counters.

## Players CRUD

- [ ] List players.
- [ ] Create player.
- [ ] Edit player.
- [ ] Delete player.
- [ ] Duplicate player.

## Devices CRUD

- [ ] List devices.
- [ ] Create device.
- [ ] Edit device.
- [ ] Delete device.

## Teams CRUD

- [ ] List teams.
- [ ] Create team.
- [ ] Edit team.

## Brands CRUD

- [ ] List brands.
- [ ] Create brand.
- [ ] Edit brand.

## Shorts CRUD

- [ ] Register Shorts.
- [ ] Edit Shorts.
- [ ] Delete Shorts.

## Media Manager

- [ ] Upload player images.
- [ ] Upload device images.
- [ ] Upload logos.
- [ ] Upload hero icons.

## Affiliate Manager

- [ ] Register Amazon URL.
- [ ] Register product image.
- [ ] Register affiliate disclosure.

---

# Phase 4 — Expansion

## Streamers

- [ ] Streamer page template.
- [ ] Streamer profile.
- [ ] Streamer devices.
- [ ] Streamer Shorts.

## Statistics

- [ ] Device popularity statistics.
- [ ] Brand popularity statistics.
- [ ] Team device statistics.

## Comparison

- [ ] Player comparison page.
- [ ] Device comparison page.

## Search Improvements

- [ ] Hero search.
- [ ] Team search.
- [ ] Brand search.

## SEO Improvements

- [ ] JSON-LD for players.
- [ ] JSON-LD for devices.
- [ ] JSON-LD for teams.
- [ ] JSON-LD for brands.

---

# Final Release Checklist

## Content

- [ ] Proper
- [ ] Lip
- [ ] Stalk3r
- [ ] HeeSang
- [ ] Viol2t
- [ ] Shu
- [ ] Hanbin
- [ ] Ch0r0ng
- [ ] JJoNak
- [ ] Haksal

## Devices

- [ ] Logitech G PRO X Superlight 2
- [ ] Logitech G PRO Wireless
- [ ] Razer Viper V3 Pro
- [ ] Wooting 60HE
- [ ] BenQ ZOWIE XL2566K
- [ ] Artisan Mousepads

## Pre Launch

- [ ] Configure Supabase production.
- [ ] Configure Cloudflare Pages.
- [ ] Configure custom domain `owkr.gg`.
- [ ] Configure Cloudflare R2.
- [ ] Verify SEO metadata.
- [ ] Verify sitemap.
- [ ] Verify robots.txt.
- [ ] Verify affiliate disclosure.

---

# Development Rules

- Complete tasks in order.
- Mark completed tasks with `[x]`.
- Never implement tasks that are not listed here unless approved.
- If a new feature is needed, add it to this file before implementation.
