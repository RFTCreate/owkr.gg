# OWKR.GG

日本向け韓国Overwatchプロ・ストリーマーデータサイト

---

## Project Overview

OWKR.GG は、日本のOverwatchプレイヤー向けに韓国プロ選手・ストリーマーの情報をまとめるデータベースサイトです。

このサイトは Wiki やニュースサイトではなく、「正確なデータベース」を目的として運営します。

掲載情報は運営者が確認したもののみ公開し、不明な情報は掲載しません。

---

## Mission

OWKR.GG が目指すもの。

* 韓国プロ選手を日本語で探せる。
* 使用デバイスをすぐ確認できる。
* DPI・感度などのゲーム設定を確認できる。
* YouTube Shorts と連携して選手を知れる。

---

## Main Features

### Players

* プロフィール
* メインヒーロー
* ゲーム設定
* 使用デバイス
* 実績
* SNS
* 関連ショート動画

### Devices

* マウス
* キーボード
* マウスパッド
* モニター
* オーディオデバイス

各デバイスページでは、そのデバイスを使用する韓国プロ一覧を表示します。

### Teams

韓国プロチームページ。

ロール順で選手を表示します。

* Tank
* DPS
* Support

### Brands

ブランド別ページ。

例：

* Logicool
* Logitech
* Razer
* Wooting
* BenQ ZOWIE
* SteelSeries

### Rankings

韓国プロ使用率ランキング。

例：

* Mouse Ranking
* Keyboard Ranking
* Mousepad Ranking
* Monitor Ranking

---

## Project Philosophy

OWKR.GG は以下を重視します。

1. Accuracy
2. Maintainability
3. SEO
4. Performance
5. Minimal UI

レビュー・価格比較・ニュースは掲載しません。

---

## Technology Stack

| Category  | Stack                |
| --------- | -------------------- |
| Framework | Next.js (App Router) |
| Language  | TypeScript           |
| Styling   | Tailwind CSS         |
| Database  | Supabase             |
| Storage   | Cloudflare R2        |
| Hosting   | Cloudflare Pages     |

---

## Repository Structure

```text
app/
components/
lib/
types/
public/
docs/
supabase/

README.md
CLAUDE.md
TASKS.md
```

---

## Development Phases

### Phase 1

* Project setup
* Layout
* Home page
* Theme
* SEO

### Phase 2

* Players
* Devices
* Teams
* Brands
* Rankings
* Search

### Phase 3

* Admin Dashboard
* CRUD
* Media
* Affiliate Management

### Phase 4

* Streamers
* Statistics
* Search Improvements

---

## Documentation

Detailed specifications are stored inside `/docs`.

| Document   | Description               |
| ---------- | ------------------------- |
| Chapter 00 | Project Charter           |
| Chapter 01 | Brand Identity            |
| Chapter 02 | Design System             |
| Chapter 03 | Home Page                 |
| Chapter 04 | Player Page               |
| Chapter 05 | Database Design           |
| Chapter 06 | Search & SEO              |
| Chapter 07 | Device Page               |
| Chapter 08 | Brand Page                |
| Chapter 09 | Team Page                 |
| Chapter 10 | Rankings                  |
| Chapter 11 | Admin Dashboard           |
| Chapter 12 | Implementation            |
| Appendix A | Asset Rules               |
| Appendix B | Source Verification Rules |

---

## Development Rules

Claude Code must follow `CLAUDE.md`.

Project specifications are maintained inside `/docs`.

Do not implement features that are not documented.

---

## Affiliate Disclosure

OWKR.GG participates in the Amazon Associates Program.

Some links on device pages may contain affiliate links.

Affiliate links are displayed only on individual device cards.
