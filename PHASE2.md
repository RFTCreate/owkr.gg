# OWKR.GG Phase 2 実装指示書

> このファイルは Claude Code が Phase2 を実装するためのロードマップです。

---

# Phase2 の目標

仕様書（docs/）に従って MVP を完成させる。

完成条件

- 選手ページが表示できる。
- デバイスページが表示できる。
- ブランドページが表示できる。
- チームページが表示できる。
- ランキングページが表示できる。
- Supabase と接続できる。
- 管理画面で更新できる。

---

# 実装ルール

Claude Code は以下を守る。

- CLAUDE.md を最優先で読む。
- docs/ の仕様書を参照する。
- TypeScript エラーゼロ。
- ESLint エラーゼロ。
- ダークモード対応。
- モバイルファースト。

実装後は lint・typecheck・build を実行する。

---

# 実装順序

## Phase 2-1 データベース

内容

- Supabase 初期設定。
- テーブル作成。
- リレーション作成。
- 型生成。

完了条件

- 6テーブル + device_usage 作成。
- RLS は一旦無効。

---

## Phase 2-2 データ取得レイヤー

作成するもの

- lib/supabase.ts
- lib/queries/
- lib/types.ts

内容

- Players取得
- Devices取得
- Brands取得
- Teams取得
- Rankings取得

完了条件

トップページで Supabase のデータが取得できる。

---

## Phase 2-3 Playersページ

作成ページ

- /players
- /players/[slug]

実装

- HeroCard
- SummaryCard
- ProfileCard
- MainHeroCard
- SettingsCard
- DeviceSection
- AchievementCard
- SameDevicePlayersCard
- SameTeamPlayersCard
- ShortsCard
- SNSCard
- UpdateCard

完了条件

Proper ページが表示される。

---

## Phase 2-4 Devicesページ

作成ページ

- /devices
- /devices/[slug]

実装

- DeviceHeroCard
- 使用率バッジ
- 基本情報
- 使用韓国プロ一覧
- ブランド人気デバイス
- ランキング導線

完了条件

Superlight2 ページが表示される。

---

## Phase 2-5 Brandsページ

作成ページ

- /brands
- /brands/[slug]

実装

- HeroCard
- 人気デバイス
- 使用韓国プロ一覧
- 全デバイス一覧

完了条件

Logitech ページが表示される。

---

## Phase 2-6 Teamsページ

作成ページ

- /teams
- /teams/[slug]

実装

- HeroCard
- ロール別選手一覧
- チームデバイスランキング
- 最新Shorts

完了条件

Team Falcons ページが表示される。

---

## Phase 2-7 Rankingsページ

作成ページ

- /rankings
- /rankings/[category]

カテゴリ

- Mouse
- Keyboard
- Mousepad
- Monitor
- Audio

実装

- 使用率ランキング
- 使用人数
- 使用韓国プロ一覧

完了条件

Mouse Ranking が表示される。

---

## Phase 2-8 Searchページ

作成ページ

- /search

対応

- 日本語検索
- 英語検索
- 韓国語検索
- エイリアス検索

完了条件

「プロパー」「Proper」「프로퍼」が同じ結果になる。

---

## Phase 2-9 管理画面

作成ページ

- /admin
- /admin/players
- /admin/devices
- /admin/brands
- /admin/teams
- /admin/shorts

機能

- CRUD
- ステータス管理
- 検索
- フィルター

完了条件

Players CRUD が動作する。

---

# 動作確認チェックリスト

各フェーズ終了時に実施。

- pnpm lint
- pnpm typecheck
- pnpm build
- モバイル表示確認
- ダークモード確認

すべて成功したら次フェーズへ進む。

---

# Claude Codeへの指示

重要事項

- 一度に全フェーズを実装しない。
- 必ずフェーズ単位で止まる。
- 完了したファイル一覧を報告する。
- 追加・変更したファイルを一覧化する。
- エラーがあれば修正してから終了する。

Phase2 完了後に Phase3 へ進む。
