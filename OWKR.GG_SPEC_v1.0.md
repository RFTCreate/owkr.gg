# OWKR.GG SPEC v1.0

> OWKR.GG 正式仕様書（Single Source of Truth）
>
> Version: v1.0
> Status: FIXED
> Language: 日本語
> UI: 日本語
> Player Name: 英語表記

---

# Chapter 0. プロジェクト概要

## 0.1 プロジェクト名

OWKR.GG

韓国Overwatchプロ・ストリーマーのデバイス・ゲーム設定・情報を日本語でまとめたデータベースサイト。

---

## 0.2 プロジェクトの目的

OWKR.GG はニュースサイト・攻略サイトではない。

「韓国Overwatchプロデータベース」を提供する。

提供する情報

- 韓国プロ選手情報
- 使用デバイス
- ゲーム設定
- メインヒーロー
- SNSリンク
- YouTube Shorts
- ランキング
- ブランド別一覧
- チーム別一覧

レビュー記事・ニュース記事は扱わない。

---

## 0.3 ターゲットユーザー

優先順位

1. 日本のOverwatchプレイヤー
2. 韓国プロを参考にしたいプレイヤー
3. デバイスを調べたいプレイヤー
4. 韓国コンテンツ視聴者

---

## 0.4 サイト方針

- UI は日本語。
- 選手名・チーム名・ブランド名は英語表記。
- 情報は確認できた内容のみ掲載する。
- 推測値は掲載しない。
- 情報未確認は「情報確認中」と表示する。

---

## 0.5 運営方針

運営者は1人。

更新作業を最小限にすることを優先する。

更新対象

- Players
- Devices
- Teams
- Brands
- Shorts

ニュース投稿機能は実装しない。

---

## 0.6 品質ルール

必須ルール

- TypeScript エラーゼロ
- ESLint エラーゼロ
- ダークモード対応
- モバイルファースト
- Lighthouse を意識した構成
- Server Components 優先

---

## 0.7 公開ステータス

すべてのデータは以下の3状態を持つ。

| ステータス | 公開 |
|------------|------|
| draft | × |
| needs_review | × |
| published | ○ |

needs_review はサイト上では公開しない。

---

# Chapter 1. ブランド・デザインシステム

## 1.1 デザインコンセプト

キーワード

- シンプル
- 高級感
- データベース
- esports
- グレースケール

派手な装飾は使わない。

---

## 1.2 カラーパレット

### ライトモード

| 用途 | 色 |
|------|----|
| Background | #FFFFFF |
| Surface | #F8F9FA |
| Border | #E5E7EB |
| Text | #111827 |
| Secondary Text | #6B7280 |

### ダークモード

| 用途 | 色 |
|------|----|
| Background | #09090B |
| Surface | #18181B |
| Border | #27272A |
| Text | #FAFAFA |
| Secondary Text | #A1A1AA |

アクセントカラーは使用しない。

使用率バッジのみ緑を使用可能。

---

## 1.3 余白ルール

8px グリッド。

| 用途 | 値 |
|------|----|
| XS | 4px |
| SM | 8px |
| MD | 16px |
| LG | 24px |
| XL | 32px |
| XXL | 48px |

---

## 1.4 角丸ルール

| 用途 | Radius |
|------|--------|
| Badge | 9999px |
| Card | 16px |
| Image | 16px |
| Button | 12px |

---

## 1.5 アイコン

ライブラリ

lucide-react

統一する。

---

## 1.6 フォント

日本語

システムフォント

英数字

Inter 系フォントスタック

外部フォントは読み込まない。

---

## 1.7 ボタンルール

Primary

黒背景・白文字。

Secondary

枠線のみ。

Danger

赤。

Amazon ボタンのみブランドカラー使用可。

---

## 1.8 バッジ

種類

- Tank
- DPS
- Support
- Published
- 情報確認中
- 使用率

使用率バッジのみ緑。

---

# Chapter 2. 共通UIコンポーネント

## 2.1 コンポーネント一覧

| コンポーネント | 用途 |
|----------------|------|
| Container | 最大幅管理 |
| Header | 共通ヘッダー |
| Footer | 共通フッター |
| Card | 基本カード |
| Badge | バッジ |
| Breadcrumb | パンくず |
| SearchBar | 共通検索バー |
| ThemeToggle | ライト・ダーク切替 |

---

## 2.2 Header仕様

表示

- ロゴ
- Search
- Players
- Teams
- Devices
- Brands
- Rankings
- Theme Toggle

モバイルは横スクロールメニュー。

---

## 2.3 Footer仕様

表示内容

- © OWKR.GG
- Privacy
- Contact
- Affiliate Disclosure

小さく表示する。

文言

> OWKR.GG は Amazon アソシエイト・プログラムに参加しています。

---

## 2.4 SearchBar仕様

プレースホルダー

> 選手名・チーム名・デバイス名を検索

共通コンポーネントとして使用する。

---

## 2.5 Breadcrumb仕様

例

ホーム ＞ Players ＞ Proper

すべての詳細ページで表示する。

---

## 2.6 Theme Toggle

ライト・ダーク切替。

設定は LocalStorage に保存する。

初回は OS 設定を使用する。

---

# Chapter 3. トップページ

## 3.1 ページの目的

OWKR.GG の入口ページ。

検索とカテゴリ導線を提供する。

---

## 3.2 URL

/

---

## 3.3 PCワイヤーフレーム

Hero

↓

Search

↓

カテゴリカード

↓

人気ランキング

↓

人気選手

↓

最新Shorts

↓

Footer

---

## 3.4 Hero

表示

- OWKR.GG
- サブタイトル
- SearchBar

サブタイトル

> 韓国Overwatchプロデータベース

---

## 3.5 カテゴリカード

表示するカード

- Players
- Teams
- Devices
- Brands
- Rankings

クリックで一覧ページへ。

---

## 3.6 人気ランキング

カテゴリ

- Mouse
- Keyboard
- Mousepad
- Monitor
- Audio

各カテゴリ Top3 を表示する。

Amazon ボタンは表示しない。

---

## 3.7 人気選手

表示人数

最大8人。

表示内容

- 顔写真
- 英語名
- チーム
- ロール

クリックで Player ページへ。

---

## 3.8 最新Shorts

表示数

最大6件。

表示内容

- サムネイル
- タイトル
- 選手名

クリックで Shorts ページへ。

---

## 3.9 モバイル仕様

順番

Hero

↓

Search

↓

カテゴリ横スクロール

↓

ランキング横スクロール

↓

人気選手横スクロール

↓

Shorts横スクロール

---

## 3.10 SEO

Title

OWKR.GG｜韓国Overwatchプロデータベース

Description

韓国Overwatchプロの使用デバイス・感度・設定・SNSを日本語で掲載。

JSON-LD

WebSite

Canonical

/

---

# Chapter 4. 選手ページ

## 4.1 ページの目的

OWKR.GG の中核ページ。

1ページでその選手の情報を確認できることを目的とする。

---

## 4.2 URL仕様

/players/{slug}

例

- /players/proper
- /players/lip
- /players/hanbin

slug は英語のみ。

変更しない。

---

## 4.3 ページ構成

表示順は固定。

1. HeroCard
2. SummaryCard
3. ProfileCard
4. MainHeroCard
5. SettingsCard
6. DevicesSection
7. AchievementCard
8. SameDevicePlayersCard
9. SameTeamPlayersCard
10. RolePopularPlayersCard
11. ShortsCard
12. SNSCard
13. UpdateCard

---

## 4.4 HeroCard

表示項目

- 顔写真
- 英語名
- 韓国語名
- チーム
- ロール
- ステータスバッジ（情報確認中のみ）

顔写真は1:1。

---

## 4.5 SummaryCard

表示項目

- チーム
- ロール
- メインヒーロー（3体）
- DPI
- Sensitivity
- eDPI（自動計算）
- Polling Rate

eDPI = DPI × Sensitivity

整数表示。

---

## 4.6 ProfileCard

表示項目

- 英語名
- 韓国語名
- 日本語名
- 国籍
- 生年月日

所属チーム履歴は掲載しない。

経歴タイムラインは掲載しない。

---

## 4.7 MainHeroCard

最大3体表示。

表示内容

- Hero画像
- Hero名

ロール順で表示。

---

## 4.8 SettingsCard

表示項目

- DPI
- Sensitivity
- Scoped Sensitivity
- Polling Rate

未確認情報は表示しない。

---

## 4.9 DevicesSection

カテゴリ順固定。

1. Mouse
2. Keyboard
3. Mousepad
4. Monitor
5. Audio

各カテゴリは DeviceCard を表示する。

---

## 4.10 DeviceCard

表示項目

- 商品画像
- ブランド
- 商品名
- Amazonボタン

このカードは全ページで共通利用する。

---

## 4.11 AchievementCard

表示項目

最大5件。

- 大会名
- 年
- 順位

時系列は新しい順。

---

## 4.12 SameDevicePlayersCard

現在使用しているプロのみ表示。

最大8人。

表示内容

- 顔写真
- 英語名
- チーム

クリックで Playerページへ。

---

## 4.13 SameTeamPlayersCard

同じチーム所属選手。

最大8人。

ロール順表示。

---

## 4.14 RolePopularPlayersCard

同ロール人気選手。

最大8人。

Tank / DPS / Support ごとに表示。

---

## 4.15 ShortsCard

対象選手のYouTube Shorts。

最大6件。

表示内容

- サムネイル
- タイトル
- 投稿日

---

## 4.16 SNSCard

表示対象

- X
- YouTube
- Twitch
- CHZZK
- Instagram
- AfreecaTV

存在するものだけ表示する。

---

## 4.17 UpdateCard

表示内容

最終更新日

形式

YYYY.MM.DD

情報確認中の場合

「情報確認中」

---

## 4.18 モバイル仕様

Hero → Summary → Devices → Shorts の順。

DeviceCard は横スクロールしない。

縦積み。

---

## 4.19 SEO仕様

Title

Proper｜使用デバイス・感度・メインヒーロー｜OWKR.GG

JSON-LD

Person

Canonical

/players/{slug}

---

# Chapter 5. デバイスページ

## 5.1 ページの目的

そのデバイスを使用している韓国プロを一覧表示するページ。

レビューサイトではない。

---

## 5.2 URL

/devices/{slug}

---

## 5.3 ページ構成

1. DeviceHeroCard
2. DeviceInfoCard
3. UsingPlayersCard
4. BrandPopularDevicesCard
5. RankingLinkCard

---

## 5.4 DeviceHeroCard

表示項目

- 商品画像
- 商品名
- ブランド
- カテゴリ
- 使用率バッジ
- Amazonボタン

---

## 5.5 使用率バッジ

表示項目

- 韓国プロ使用率
- 使用プロ人数

表示位置

商品名の直下。

計算式

使用率 = 使用人数 ÷ 公開中プロ人数 × 100

四捨五入して整数表示。

---

## 5.6 DeviceInfoCard

表示項目

- ブランド
- カテゴリ
- 接続方式
- センサー
- 重量
- サイズ

未確認情報は非表示。

---

## 5.7 UsingPlayersCard

最大12人表示。

表示内容

- 顔写真
- 英語名
- チーム
- ロール

現役選手を優先表示。

---

## 5.8 BrandPopularDevicesCard

同ブランドの人気デバイス。

最大4件。

Amazonボタンなし。

---

## 5.9 RankingLinkCard

カテゴリランキングへリンク。

表示

- 現在順位
- 使用率

---

## 5.10 モバイル仕様

UsingPlayers は横スクロール。

DeviceInfo は縦表示。

---

## 5.11 SEO仕様

Title

Logitech G PRO X Superlight 2｜使用韓国プロ一覧｜OWKR.GG

JSON-LD

Product

---

# Chapter 6. ブランドページ

## 6.1 ページの目的

ブランド単位で使用プロとデバイスを一覧表示する。

---

## 6.2 URL

/brands/{slug}

---

## 6.3 ページ構成

1. BrandHeroCard
2. PopularDevicesCard
3. UsingPlayersCard
4. AllDevicesCard

---

## 6.4 BrandHeroCard

表示項目

- ブランドロゴ
- ブランド名
- 使用韓国プロ人数

ブランド説明は掲載しない。

---

## 6.5 PopularDevicesCard

最大4件表示。

表示内容

- 商品画像
- 商品名
- 使用率
- 使用人数

クリックで Deviceページ。

---

## 6.6 UsingPlayersCard

最大12人。

表示内容

- 顔写真
- 英語名
- チーム
- ロール

---

## 6.7 AllDevicesCard

カテゴリ順表示。

- Mouse
- Keyboard
- Mousepad
- Monitor
- Audio

---

## 6.8 SEO仕様

Title

Logitech 使用韓国プロ一覧｜OWKR.GG

JSON-LD

Brand

---

# Chapter 7. チームページ

## 7.1 ページの目的

所属選手一覧ページ。

チーム紹介ページではない。

---

## 7.2 URL

/teams/{slug}

---

## 7.3 ページ構成

1. TeamHeroCard
2. TeamPlayersSection
3. TeamDeviceRankingCard
4. ShortsSection

---

## 7.4 TeamHeroCard

表示項目

- チームロゴ
- チーム名
- 所属人数

---

## 7.5 TeamPlayersSection

ロール順固定。

1. Tank
2. DPS
3. Support

表示内容

- 顔写真
- 英語名
- ロールバッジ

---

## 7.6 TeamDeviceRankingCard

チーム所属選手の使用デバイス集計。

カテゴリ

- Mouse
- Keyboard
- Mousepad
- Monitor
- Audio

表示項目

- 商品画像
- 商品名
- 使用人数

Amazonボタンなし。

---

## 7.7 ShortsSection

チーム所属選手のShorts。

最大6件。

---

## 7.8 SEO仕様

Title

Team Falcons｜所属韓国プロ一覧｜OWKR.GG

JSON-LD

SportsTeam

Canonical

/teams/{slug}

---

# Chapter 8. データベース設計（Supabase）

## 8.1 データベース方針

Supabase PostgreSQL を使用する。

設計ルール

- UUID を Primary Key に使用。
- created_at / updated_at を全テーブルに持つ。
- status は全公開テーブルに持つ。
- 推測値は保存しない。
- 情報未確認は NULL にする。

---

## 8.2 テーブル一覧

| テーブル | 用途 |
|-----------|------|
| players | 選手情報 |
| teams | チーム情報 |
| brands | ブランド情報 |
| devices | デバイス情報 |
| device_usage | 選手とデバイスの関連 |
| shorts | YouTube Shorts |
| search_aliases | 検索用エイリアス |

---

## 8.3 players テーブル

| カラム | 型 | 必須 |
|--------|----|------|
| id | UUID | ○ |
| slug | TEXT | ○ |
| english_name | TEXT | ○ |
| korean_name | TEXT | ○ |
| japanese_name | TEXT | ○ |
| team_id | UUID | ○ |
| role | TEXT | ○ |
| nationality | TEXT |  |
| birthday | DATE |  |
| main_heroes | TEXT[] | ○ |
| dpi | INTEGER |  |
| sensitivity | NUMERIC |  |
| scoped_sensitivity | NUMERIC |  |
| polling_rate | INTEGER |  |
| x_url | TEXT |  |
| youtube_url | TEXT |  |
| twitch_url | TEXT |  |
| chzzk_url | TEXT |  |
| instagram_url | TEXT |  |
| afreecatv_url | TEXT |  |
| status | TEXT | ○ |
| created_at | TIMESTAMP | ○ |
| updated_at | TIMESTAMP | ○ |

---

## 8.4 teams テーブル

| カラム | 型 |
|--------|----|
| id | UUID |
| slug | TEXT |
| name | TEXT |
| short_name | TEXT |
| logo_url | TEXT |
| status | TEXT |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

## 8.5 brands テーブル

| カラム | 型 |
|--------|----|
| id | UUID |
| slug | TEXT |
| name | TEXT |
| logo_url | TEXT |
| official_url | TEXT |
| status | TEXT |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

## 8.6 devices テーブル

| カラム | 型 |
|--------|----|
| id | UUID |
| slug | TEXT |
| name | TEXT |
| brand_id | UUID |
| category | TEXT |
| image_url | TEXT |
| amazon_url | TEXT |
| amazon_asin | TEXT |
| connection | TEXT |
| sensor | TEXT |
| weight | INTEGER |
| size | TEXT |
| status | TEXT |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

カテゴリ

- mouse
- keyboard
- mousepad
- monitor
- audio

---

## 8.7 device_usage テーブル

選手とデバイスを結ぶ中間テーブル。

| カラム | 型 |
|--------|----|
| id | UUID |
| player_id | UUID |
| device_id | UUID |
| is_current | BOOLEAN |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

ルール

- 各カテゴリにつき is_current = true は1件だけ。
- 履歴は MVP では保存しない。

---

## 8.8 shorts テーブル

| カラム | 型 |
|--------|----|
| id | UUID |
| player_id | UUID |
| youtube_url | TEXT |
| youtube_video_id | TEXT |
| title | TEXT |
| thumbnail_url | TEXT |
| published_at | DATE |
| status | TEXT |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

## 8.9 search_aliases テーブル

日本語・韓国語検索対応。

| カラム | 型 |
|--------|----|
| id | UUID |
| player_id | UUID |
| alias | TEXT |
| language | TEXT |
| created_at | TIMESTAMP |

language

- ja
- ko
- en

---

## 8.10 リレーション

teams → players

brands → devices

players → device_usage

devices → device_usage

players → shorts

players → search_aliases

---

## 8.11 status ルール

| status | 公開 |
|--------|------|
| draft | × |
| needs_review | × |
| published | ○ |

needs_review はサイトに表示しない。

---

## 8.12 情報確認中ルール

公開ページでは NULL を表示しない。

代わりに

「情報確認中」

バッジを表示する。

対象

- DPI
- 感度
- デバイス
- SNS
- 実績

---

# Chapter 9. 検索仕様

## 9.1 検索対象

検索対象は4種類。

- Players
- Teams
- Devices
- Brands

---

## 9.2 プレイヤー検索

一致条件

- 英語名
- 韓国語名
- 日本語名
- エイリアス

例

Proper

プロパー

프로퍼

すべて Proper ページへ。

---

## 9.3 日本語検索対応

日本語名で検索できる。

例

- プロパー
- リップ
- ハンビン

---

## 9.4 韓国語検索対応

韓国語でも検索できる。

例

- 프로퍼
- 립
- 한빈

---

## 9.5 表記揺れ対応

search_aliases を使用する。

例

| 入力 | 遷移先 |
|------|--------|
| Proper | proper |
| PROPER | proper |
| プロパー | proper |
| 프로퍼 | proper |

大文字小文字を区別しない。

---

## 9.6 デバイス検索

検索対象

- 商品名
- ブランド名

例

- Superlight
- GPX
- Wooting
- Artisan Zero

---

## 9.7 チーム検索

Team Falcons

Falcons

両方一致。

---

## 9.8 ブランド検索

Logitech

Logicool

どちらでも Logitech。

ブランド別エイリアスを追加可能。

---

## 9.9 検索順位

優先順位

1. 完全一致
2. 前方一致
3. 部分一致
4. エイリアス一致

---

# Chapter 10. ランキングページ

## 10.1 URL

/rankings/{category}

---

## 10.2 カテゴリ

- mouse
- keyboard
- mousepad
- monitor
- audio

---

## 10.3 ランキング基準

device_usage を集計する。

対象

- published の選手
- is_current = true

---

## 10.4 使用率

使用率 = 使用人数 ÷ 公開中プロ人数 × 100

整数表示。

---

## 10.5 ランキングカード

表示内容

- 順位
- 商品画像
- 商品名
- ブランド
- 使用率
- 使用人数

クリックで Device ページ。

Amazon ボタンなし。

---

## 10.6 使用プロ一覧

ランキングカード下に表示。

最大6人。

「もっと見る」で全表示。

---

## 10.7 SEO

Title

韓国Overwatchプロ マウス使用率ランキング｜OWKR.GG

JSON-LD

CollectionPage

---

# Chapter 11. SEO仕様

## 11.1 URLルール

英語 slug 固定。

URL は公開後変更しない。

---

## 11.2 Titleルール

トップ

OWKR.GG｜韓国Overwatchプロデータベース

Player

Proper｜使用デバイス・感度・メインヒーロー｜OWKR.GG

Device

Logitech G PRO X Superlight 2｜使用韓国プロ一覧｜OWKR.GG

Brand

Logitech 使用韓国プロ一覧｜OWKR.GG

Team

Team Falcons｜所属韓国プロ一覧｜OWKR.GG

Ranking

韓国Overwatchプロ マウス使用率ランキング｜OWKR.GG

---

## 11.3 Descriptionルール

100〜140文字。

事実情報のみ。

---

## 11.4 OGP

サイズ

1200 × 630

Player

- 顔写真
- 名前
- チーム
- ロール

Device

- 商品画像
- ブランド
- 商品名

---

## 11.5 JSON-LD

| ページ | Schema |
|--------|--------|
| Top | WebSite |
| Player | Person |
| Device | Product |
| Brand | Brand |
| Team | SportsTeam |
| Ranking | CollectionPage |

---

## 11.6 Canonical

全ページ設定する。

---

## 11.7 Sitemap

含める

- /
- /players/*
- /devices/*
- /brands/*
- /teams/*
- /rankings/*

draft・needs_review は含めない。

---

## 11.8 robots.txt

許可

公開ページのみ。

除外

- /admin
- draft
- needs_review

---

## 11.9 Breadcrumb

すべての詳細ページに表示する。

ホーム ＞ Players ＞ Proper

JSON-LD BreadcrumbList を生成する。

---

## 11.10 画像SEO

ルール

- alt 必須
- WebP 推奨
- Lazy Load
- 英語ファイル名

- ---

# Chapter 12. 管理画面仕様

## 12.1 管理画面の目的

管理画面は OWKR.GG を一人で運営・更新するためのページ。

一般ユーザーには公開しない。

ニュース投稿・記事投稿機能は実装しない。

---

## 12.2 URL構成

/admin

サブページ

- /admin/players
- /admin/devices
- /admin/teams
- /admin/brands
- /admin/shorts

---

## 12.3 管理画面トップ

表示カード

| カード | 内容 |
|--------|------|
| Players | 登録人数 |
| Devices | 登録デバイス数 |
| Teams | 登録チーム数 |
| Brands | 登録ブランド数 |
| Shorts | 登録Shorts数 |

各カードから一覧ページへ移動。

---

## 12.4 Players一覧

表示項目

- 顔写真
- 英語名
- チーム
- ロール
- ステータス
- 最終更新日

機能

- 検索
- フィルター
- 編集
- 新規追加
- 削除

---

## 12.5 Player編集画面

### 基本情報

- 英語名
- 韓国語名
- 日本語名
- チーム
- ロール
- 国籍
- 生年月日

### メインヒーロー

最大3体。

複数選択。

### ゲーム設定

- DPI
- Sensitivity
- Scoped Sensitivity
- Polling Rate

### SNS

- X
- YouTube
- Twitch
- CHZZK
- Instagram
- AfreecaTV

### ステータス

- draft
- needs_review
- published

---

## 12.6 デバイス選択UI

カテゴリごとに検索して選択する。

新規入力は禁止。

カテゴリ

- Mouse
- Keyboard
- Mousepad
- Monitor
- Audio

---

## 12.7 Devices一覧

表示項目

- 商品画像
- 商品名
- ブランド
- カテゴリ
- 使用人数
- ステータス
- 更新日

---

## 12.8 Device編集画面

入力項目

- 商品名
- ブランド
- カテゴリ
- 商品画像URL
- Amazon URL
- Amazon ASIN
- 接続方式
- センサー
- 重量
- サイズ
- ステータス

---

## 12.9 Teams管理

表示項目

- ロゴ
- チーム名
- 所属人数
- ステータス

編集項目

- チーム名
- ロゴURL
- ステータス

---

## 12.10 Brands管理

表示項目

- ロゴ
- ブランド名
- デバイス数
- 使用プロ人数

編集項目

- ブランド名
- ロゴURL
- 公式サイト
- ステータス

---

## 12.11 Shorts管理

表示項目

- サムネイル
- タイトル
- 対象選手
- 投稿日
- ステータス

入力項目

- YouTube URL
- タイトル
- 対象選手
- 投稿日
- ステータス

thumbnail は YouTube Video ID から自動取得。

---

## 12.12 検索・フィルター

Players

- 名前
- チーム
- ロール
- ステータス

Devices

- 商品名
- ブランド
- カテゴリ
- ステータス

---

## 12.13 保存ルール

保存ボタンは1つだけ。

保存成功時

「保存しました」

トースト表示。

自動保存は実装しない。

---

## 12.14 削除ルール

削除前に確認ダイアログ表示。

文言

「本当に削除しますか？」

MVPでは物理削除。

---

# Chapter 13. 実装ルール

## 13.1 ディレクトリ構成

app/
components/
lib/
public/
seed/
supabase/
docs/

固定する。

---

## 13.2 components構成

components/

- ui/
- layout/
- player/
- device/
- brand/
- team/
- ranking/
- home/
- shorts/
- seo/

カテゴリごとに管理。

---

## 13.3 lib構成

lib/

- supabase.ts
- database.types.ts
- queries/
- utils/
- site.ts

データ取得は queries にまとめる。

---

## 13.4 命名規則

ページ

PlayerPage.tsx

カード

PlayerHeroCard.tsx

BrandHeroCard.tsx

DeviceCard.tsx

SummaryCard.tsx

PascalCase を使用する。

---

## 13.5 Server Componentsルール

Server Components を優先する。

Client Component を使うもの

- Theme Toggle
- Search
- Admin Form
- Modal

それ以外は Server Component。

---

## 13.6 データ取得ルール

ページ内で直接 SQL を書かない。

lib/queries を経由する。

例

getPlayerBySlug()

getDeviceRanking()

getBrandDevices()

---

## 13.7 ダークモード

必須対応。

ThemeToggle で切替。

LocalStorage 保存。

---

## 13.8 エラー処理

404

存在しない slug。

情報確認中

published 以外。

500

Supabase エラー。

---

## 13.9 型ルール

TypeScript strict。

any 使用禁止。

database.types.ts を利用する。

---

## 13.10 品質チェック

毎フェーズ実行する。

pnpm lint

pnpm typecheck

pnpm build

失敗状態で終了しない。

---

# Chapter 14. 運営ルール

## 14.1 情報更新ルール

掲載する情報は確認済みのみ。

確認できない情報は NULL。

---

## 14.2 情報確認待ち

needs_review を使用する。

サイトには表示しない。

管理画面では黄色バッジ表示。

---

## 14.3 デバイス更新ルール

デバイス情報は DeviceCard を使い回す。

1商品 = 1レコード。

選手ページでは DeviceCard を参照するだけ。

---

## 14.4 Amazonアフィリエイトルール

Amazonリンクは devices テーブルで管理する。

表示場所

- DeviceHeroCard
- DeviceCard

ランキングページには表示しない。

ブランドページには表示しない。

---

## 14.5 Shorts更新ルール

Shorts は YouTube URL のみ登録する。

サムネイル・Video ID は自動取得。

対象選手は1人。

---

## 14.6 検索エイリアス運営

search_aliases に追加する。

対象

- 日本語名
- 韓国語名
- 英語名
- 表記揺れ

例

Proper

PROPER

プロパー

프로퍼

---

## 14.7 画像管理ルール

画像は public/images 配下。

構成

images/

- players/
- teams/
- brands/
- devices/
- heroes/
- shorts/

ファイル名は slug.webp。

---

## 14.8 更新履歴

UpdateCard は updated_at を表示する。

形式

YYYY.MM.DD

---

## 14.9 MVP範囲

MVPで実装する。

- Players
- Teams
- Brands
- Devices
- Rankings
- Shorts
- Search
- Admin

実装しない。

- ニュース
- コメント
- お気に入り
- 多言語UI

---

# Chapter 15. リリースチェックリスト

## 15.1 Phase1

- トップページ
- ライトモード
- ダークモード
- Header
- Footer

---

## 15.2 Phase2

- Supabase接続
- Players
- Devices
- Brands
- Teams
- Rankings
- Search
- Admin

---

## 15.3 公開前チェック

### データ

- published のみ公開
- needs_review 非公開
- Amazon URL 設定済み

### SEO

- Title
- Description
- Canonical
- OGP
- JSON-LD
- Sitemap
- robots.txt

### UI

- モバイル
- PC
- ダークモード
- パンくず
- 検索

### パフォーマンス

- 画像 Lazy Load
- WebP
- 不要な Client Component なし

---

## 15.4 Claude Code 完了条件

Claude Code は以下を満たした場合のみフェーズ完了とする。

- pnpm lint 成功
- pnpm typecheck 成功
- pnpm build 成功
- 変更ファイル一覧を報告
- 実装範囲外を変更していない

---

# Appendix A. 使用率計算ルール

韓国プロ使用率 = 現在使用中プロ人数 ÷ 公開中韓国プロ人数 × 100

対象

- players.status = published
- device_usage.is_current = true

小数点は四捨五入して整数表示。

HeroCard と RankingCard に表示する。

---

# Appendix B. 情報ソース運営ルール

優先順位

1. 選手本人（SNS・配信）
2. チーム公式
3. メーカー公式
4. Liquipedia
5. その他信頼できる情報源

複数情報が一致した場合のみ更新する。

一致しない場合は needs_review にする。

---

# Appendix C. OWKR.GG 完成定義（Definition of Done）

OWKR.GG v1 MVP は以下を満たした時点で完成とする。

- Playersページ実装
- Devicesページ実装
- Brandsページ実装
- Teamsページ実装
- Rankingsページ実装
- Search実装
- Admin実装
- Supabase接続
- Cloudflare Pages公開
- 独自ドメイン owkr.gg 接続
