# Chapter 04 — Player Page Specification

> Status: FIXED
>
> This chapter defines the complete layout, data fields and behavior of every player page on OWKR.GG.

---

# 4.1 Purpose

The Player Page is the core page of OWKR.GG.

Its goals are:

- Introduce a Korean professional player.
- Show verified settings and devices.
- Connect YouTube Shorts to the player.
- Lead users to related devices and players.

---

# 4.2 URL Structure

Each player has one page.

Examples:

/players/proper
/players/lip
/players/stalk3r

Player ID is always lowercase English.

---

# 4.3 Page Layout Order

Every player page follows this order.

1. HeroCard
+2. SummaryCard ⭐
-2. ProfileCard
+3. ProfileCard
-3. MainHeroCard
+4. MainHeroCard
-4. SettingsCard
+5. SettingsCard
-5. Device Section
+6. Device Section
-6. AchievementCard
+7. AchievementCard
-7. Same Device Players
+8. Same Device Players
-8. Same Team Players
+9. Same Team Players
-9. Shorts Section
+10. Shorts Section
-10. SNSCard
+11. SNSCard
-11. UpdateCard
+12. UpdateCard

The order is fixed.

---

# 4.4 HeroCard

Top visual section.

Contains:

- Player image.
- English name.
- Korean name.
- Team badge.
- Role badge.
- Main hero badges.
- Verification status.

Do not include biography here.

---

# 4.5 SummaryCard ⭐ NEW

Purpose:

Allow Shorts viewers to understand a player in less than 30 seconds.

The SummaryCard is displayed directly below the HeroCard.

It summarizes the player's most important information before the detailed cards.

## Layout

Display as a compact two-column information card.

### Fields

| Field | Required |
|-------|----------|
| Team | Yes |
| Role | Yes |
| Main Heroes | Yes |
| Mouse | Yes |

Rules:

- Hero icons are displayed.
- Mouse links to the Device Page.
- No Amazon button inside SummaryCard.
- Always visible on every player page.

Example order:

Team Falcons

DPS

Tracer / Cassidy / Sojourn

Logitech G PRO X Superlight 2

# 4.5 ProfileCard

Fields

| Field | Required |
|-------|----------|
| English Name | Yes |
| Korean Name | Yes |
| Team | Yes |
| Role | Yes |
| Nationality | Yes |
| Birthday | Optional |
| Active Status | Yes |

No long biography.

---

# 4.6 MainHeroCard

Purpose:

Display representative heroes.

Rules:

- Maximum 5 heroes.
- Ordered by importance.
- Japanese hero names.
- Hero icons.

No win rate.

No statistics.

---

# 4.7 SettingsCard

Verified game settings.

Fields

| Field | Required |
|-------|----------|
| DPI | Yes |
| Sensitivity | Yes |
| eDPI | Auto Calculated |
| Scoped Sensitivity | Optional |
| Polling Rate | Optional |

If unknown:

「情報確認中」

Never guess values.

---

# 4.8 Device Section

Display order is fixed.

1. Mouse
2. Keyboard
3. Mousepad
4. Monitor
5. Audio Device

Every item uses DeviceCard.

---

# 4.9 DeviceCard Usage

Each DeviceCard contains:

- Device image.
- Device name.
- Brand.
- Category.
- Amazon button.

Button text:

Amazonで見る

Click opens Device Page.

Affiliate links exist only here.

---

# 4.10 AchievementCard

Maximum five achievements.

Fields:

- Tournament.
- Placement.
- Year.

Newest first.

---

# 4.11 Same Device Players

Purpose:

Recommend players using identical devices.

Example title:

同じマウスを使用している韓国プロ

Display:

- Player image.
- Name.
- Team.
- Role.

Maximum six players.

---

# 4.12 Same Team Players

Purpose:

Navigate inside the same team.

Display active teammates only.

Fields:

- Player image.
- English name.
- Role badge.

Maximum six players.

---

# 4.13 Shorts Section

Purpose:

Connect YouTube content with the database.

Display latest Shorts related to this player.

Fields:

- Thumbnail.
- Title.
- Publish date.

Maximum six videos.

Newest first.

---

# 4.14 SNSCard

Official links only.

Supported platforms:

- X
- Twitch
- YouTube
- Instagram
- CHZZK
- AfreecaTV

Open in new tab.

---

# 4.15 UpdateCard

Fields:

- Last Updated
- Verification Status

Status badge:

- Published
- Needs Review

Draft never appears publicly.

---

# 4.16 SEO

Title format:

Proper｜韓国Overwatchプロデータベース｜OWKR.GG

Description format:

Proper の使用デバイス・感度・メインヒーロー・SNSを日本語で掲載。

JSON-LD:

Person Schema.

Canonical:

/players/{id}

---

# 4.17 Internal Links

Player Page links to:

- Device Pages.
- Team Page.
- Brand Page.
- Ranking Pages.
- Related Player Pages.

No orphan pages.

---

# 4.18 Empty State Rules

Unknown information displays:

情報確認中

Hidden information is preferable to incorrect information.

---

# 4.19 Responsive Rules

Mobile:

Cards stacked vertically.

Desktop:

Cards stacked vertically.

Device section uses two-column grid when possible.

Hero section becomes two-column layout.

---

# 4.20 Player Page Checklist

Every Player Page includes:

- HeroCard
- ProfileCard
- MainHeroCard
- SettingsCard
- Device Section
- AchievementCard
- Same Device Players
- Same Team Players
- Shorts Section
- SNSCard
- UpdateCard

No additional sections without specification.

---

# Chapter Status

| Component | Status |
|-----------|--------|
| HeroCard | FIXED |
| ProfileCard | FIXED |
| MainHeroCard | FIXED |
| SettingsCard | FIXED |
| Device Section | FIXED |
| AchievementCard | FIXED |
| Related Players | FIXED |
| Shorts | FIXED |
| SNS | FIXED |
| Update | FIXED |
