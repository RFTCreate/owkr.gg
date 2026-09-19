# OWKR.GG

韓国Overwatchプロ・ストリーマーの使用デバイス・ゲーム設定・SNS・YouTube Shorts を日本語でまとめたデータベースサイトです。

OWKR.GG はニュースサイトではなく、「韓国Overwatchプロデータベース」を目的としたサイトです。

---

## プロジェクト概要

OWKR.GG は以下の情報を掲載します。

* 韓国プロ選手データベース
* 使用デバイス（マウス・キーボード・マウスパッド・モニター・オーディオ）
* ゲーム設定（DPI・感度・Polling Rate など）
* メインヒーロー
* チーム情報
* ブランド情報
* デバイス使用率ランキング
* YouTube Shorts
* SNSリンク

掲載する情報は確認できた内容のみとし、未確認情報は公開しません。

---

## 技術スタック

| 項目        | 内容                         |
| --------- | -------------------------- |
| Framework | Next.js 16 (App Router)    |
| Language  | TypeScript                 |
| UI        | React 19 + Tailwind CSS v4 |
| Database  | Supabase (PostgreSQL)      |
| Hosting   | Cloudflare Pages           |
| Icons     | lucide-react               |

---

## 開発環境

推奨環境

* Node.js 20.9 以上
* pnpm 10 以上

### 起動方法

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

ブラウザで以下を開きます。

```
http://localhost:3000
```

---

## よく使うコマンド

| コマンド             | 内容               |
| ---------------- | ---------------- |
| `pnpm dev`       | 開発サーバー起動         |
| `pnpm build`     | 本番ビルド            |
| `pnpm start`     | 本番サーバー起動         |
| `pnpm lint`      | ESLint 実行        |
| `pnpm typecheck` | TypeScript 型チェック |

---

## ディレクトリ構成

```
owkr-gg/
├── app/                    # Next.js App Router
├── components/             # UIコンポーネント
├── lib/                    # Supabase・Queries・Utils
├── public/                 # 画像・アイコン
├── seed/                   # 初期データ(JSON)
├── supabase/               # SQL・Seed・設定
│
├── CLAUDE.md
├── OWKR.GG_SPEC_v1.0.md
├── PHASE2.md
├── PHASE2_TASK_01_SUPABASE.md
├── SEED_DATA.md
└── README.md
```

---

## 仕様書

OWKR.GG の仕様は **OWKR.GG_SPEC_v1.0.md** を唯一の正式仕様書（Single Source of Truth）とします。

優先順位

1. `OWKR.GG_SPEC_v1.0.md`
2. `CLAUDE.md`
3. `PHASE2.md`
4. `PHASE2_TASK_XX.md`
5. `SEED_DATA.md`
6. `seed/*.json`

旧 `docs/` ディレクトリ内の仕様書は参照しません。

---

## 開発フェーズ

### Phase 1

* プロジェクト初期構築
* デザインシステム
* トップページ
* ダークモード

### Phase 2

* Supabase構築
* Playersページ
* Devicesページ
* Brandsページ
* Teamsページ
* Rankingsページ
* Searchページ
* Adminページ

### Phase 3

* Cloudflare Pages デプロイ
* 独自ドメイン `owkr.gg`
* 本番公開

---

## データ運営ルール

OWKR.GG は事実確認を重視します。

### 公開ステータス

| Status         | 公開 |
| -------------- | -- |
| `draft`        | ❌  |
| `needs_review` | ❌  |
| `published`    | ✅  |

`needs_review` は管理画面で保持し、公開ページには表示しません。

### 情報ソース優先順位

1. 選手本人（配信・SNS）
2. チーム公式
3. メーカー公式
4. Liquipedia
5. その他信頼できる情報源

推測値は登録しません。

---

## Amazonアソシエイトについて

OWKR.GG は Amazon アソシエイト・プログラムに参加しています。

Amazon 商品リンクはデバイスページ・選手ページの DeviceCard のみ表示します。

ランキングページ・ブランドページには表示しません。

---

## ライセンス

本リポジトリは OWKR.GG の開発用リポジトリです。

画像・ロゴ・選手写真などの権利は各権利者に帰属します。
