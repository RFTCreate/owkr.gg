# CLAUDE.md — OWKR.GG Development Constitution (v1.1)

> This file defines the implementation rules for OWKR.GG.
> Claude Code must follow this document throughout the entire project.

---

# Project Identity

OWKR.GG is a Japanese database website dedicated to Korean Overwatch professional players and streamers.

This project is **not**:

- A news website.
- A wiki.
- A review website.
- A strategy guide.
- A shopping website.

Its purpose is to provide the most accurate Japanese database of Korean Overwatch players, teams, heroes, settings, and gaming devices.

Development priorities:

1. Accuracy
2. Maintainability
3. Performance
4. SEO
5. UI consistency

The project owner manages all content and assets.

---

# Source of Truth

Project documents are organized as follows:

1. `README.md` — Project overview.
2. `/docs/*` — Complete specification (Chapter 0–12 and Appendices).
3. `CLAUDE.md` — Implementation rules for Claude Code.

If these documents conflict:

`/docs` specification has priority over implementation assumptions.

Claude must never invent specifications that do not exist.

---

# Design Principles

Design reference:

- ohmygear.net (Korean device database)

Theme:

- Minimal.
- Clean.
- Spacious.
- Fast.
- Modern esports database.

UI principles:

- Mobile-first.
- Responsive desktop layout.
- Dark mode support.
- Light mode support.
- Rounded cards.
- Consistent spacing.
- Neutral grayscale palette.
- Accent colors only for teams, brands, badges and role indicators.

Do not create custom page-specific styles if an existing component can be reused.

---

# Technology Stack

Framework

- Next.js (App Router)

Language

- TypeScript

Styling

- Tailwind CSS

Database

- Supabase

Storage

- Cloudflare R2

Hosting

- Cloudflare Pages

Icons

- Lucide Icons

Package Manager

- pnpm

---

# Architecture Rules

## Server Components First

Use Server Components whenever possible.

Client Components are allowed only for:

- Search.
- Filters.
- Admin dashboard.
- Comparison widgets.
- Small interactive UI.

SEO pages must remain Server Components.

## Reusable Components

All reusable UI belongs inside `/components`.

Never duplicate layouts.

Reuse components through props.

Prefer composition over duplication.

---

# Directory Rules

Use this directory structure.

app/
components/
lib/
types/
public/
docs/
supabase/

Rules:

- Pages only inside `app`.
- Shared UI only inside `components`.
- Utilities only inside `lib`.
- Types only inside `types`.
- Static assets only inside `public`.

---

# Database Rules

Supabase is the only data source.

Tables:

- players
- devices
- brands
- teams
- shorts

Rules:

- Player stores Device IDs only.
- Team does not store Player IDs.
- Brand does not store Device IDs.
- Relationships are generated through queries.
- eDPI is calculated, never stored.

## Status Values

Every record has:

- draft
- needs_review
- published

Public website displays only `published`.

---

# Player Rules

A Player page always contains:

- Hero section.
- Profile card.
- Main Hero card.
- Settings card.
- Device cards.
- Achievement card.
- Same Device Players.
- Same Team Players.
- Shorts section.
- SNS links.
- Last Updated card.

Never include:

- Crosshair.
- Crosshair code.
- Device history.
- Team history.
- Streaming schedule.

---

# Device Rules

There is exactly one reusable Device Card component.

Device Card contains:

- Image.
- Brand.
- Model.
- Category.
- Used by players.
- Related devices.
- Amazon button.

Button text is always:

Amazonで見る

Never display:

- Price.
- Rating.
- Review score.
- Recommendation score.

---

# Team Rules

A Team page contains:

- Team Hero.
- Players grouped by role.
- Team device statistics.
- Related Shorts.
- Update card.

Role order is fixed:

1. Tank
2. DPS
3. Support

---

# Brand Rules

Brand page contains:

- Brand Hero.
- Device list.
- Most used devices.
- Players using this brand.

Do not include affiliate buttons on Brand pages.

---

# Search Rules

Website language:

Japanese UI.

Player names:

English display.

Search supports:

- English names.
- Korean names.
- Japanese names.
- Nickname aliases.

Search behavior:

- Ignore capitalization.
- Ignore spacing.
- Support partial matches.
- Support Japanese aliases defined in `search_aliases`.

---

# SEO Rules

Every public page generates metadata.

Include:

- title
- description
- canonical URL
- Open Graph
- Twitter Card
- JSON-LD

URL structure examples:

/players/proper

/devices/logitech-g-pro-x-superlight-2

/teams/falcons

/brands/logitech

/rankings/mouse

---

# Amazon Affiliate Rules

Affiliate links appear only inside Device Cards.

Never place Amazon buttons on:

- Rankings.
- Brand pages.
- Team pages.
- Hero cards.
- Comparison pages.

Footer contains a small affiliate disclosure.

No promotional language.

---

# Admin Rules

Admin route:

/admin

Admin sections:

- Players
- Devices
- Teams
- Brands
- Shorts
- Affiliate
- Media

Admin features:

- Duplicate Player.
- Status filter.
- Searchable Device selector.
- Draft / Needs Review / Published workflow.

---

# Asset Rules

Assets are managed manually by the project owner.

Naming conventions:

players/proper.webp

devices/gpro-superlight2.webp

teams/falcons.svg

brands/logicool.svg

heroes/tracer.webp

Claude must never hardcode external asset URLs.

Use IDs consistently.

---

# Code Quality Rules

Always:

- Use TypeScript types.
- Create reusable hooks when appropriate.
- Avoid duplicated logic.
- Split large components.
- Keep components focused.
- Keep functions small.
- Use async server actions when appropriate.

Prefer readability over cleverness.

---

# Performance Rules

Prioritize static generation.

Requirements:

- Lazy-load images.
- Use WebP images.
- Optimize metadata.
- Avoid unnecessary client-side JavaScript.
- Keep bundle size minimal.

---

# Build Order

Claude Code must implement features in this order.

## Phase 1 — MVP Foundation

- Project setup.
- Tailwind setup.
- Supabase connection.
- Global layout.
- Header.
- Footer.
- Home page.
- Player page.
- Device page.
- Search.

## Phase 2 — Database Pages

- Team pages.
- Brand pages.
- Rankings.
- Comparison pages.
- Related players/devices.

## Phase 3 — Admin System

- Admin dashboard.
- CRUD for Players.
- CRUD for Devices.
- CRUD for Teams.
- CRUD for Brands.
- Shorts management.
- Affiliate management.
- Media management.

## Phase 4 — Expansion

- Streamer pages.
- Statistics pages.
- Advanced search.
- Additional ranking pages.

Claude must not skip phases unless explicitly instructed.

---

# Forbidden Rules

Claude Code must NOT implement features that are not defined in `/docs`.

Forbidden features include:

- News system.
- Review articles.
- Product ratings.
- Star scores.
- Price comparison.
- Crosshair pages.
- Crosshair history.
- Device history.
- Team history.
- Streaming schedule pages.
- User comments.
- Public login/account system.
- Favorite/bookmark system.
- Recommendation scores.

Do not invent new pages or database tables without specification.

---

# Specification Change Policy

Claude Code must not silently change the project architecture.

If implementation conflicts with the specification:

1. Preserve the existing specification.
2. Explain the conflict.
3. Suggest a new Chapter, Appendix or Rule.
4. Wait for approval before changing architecture.

Never modify established behavior on your own.

---

# Project Philosophy

OWKR.GG values:

- Accurate information over quantity.
- Maintainable architecture over shortcuts.
- Consistent UI over flashy design.
- Database quality over content volume.

Every implementation decision should support these principles.

---

# OWKR.GG 仕様書参照ルール（正式）

Claude Code は仕様を参照する場合、必ず以下の順番を使用する。

1. OWKR.GG_SPEC_v1.0.md（唯一の正式仕様書）
2. PHASE2.md
3. PHASE2_TASK_XX.md
4. SEED_DATA.md
5. seed/*.json

旧 docs/ ディレクトリ内の仕様書は参照しない。
