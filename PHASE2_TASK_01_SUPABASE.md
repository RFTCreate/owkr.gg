# Phase 2-1 実装タスク：Supabase構築

> このタスクのみ実装すること。

---

## 実装範囲

OWKR.GG の Supabase を構築する。

実装対象

- Supabase接続設定
- テーブル作成
- リレーション設定
- TypeScript型生成準備
- Seedデータ投入準備

Playerページ・検索ページなどは実装しない。

---

## 参照する仕様書

優先順位

1. CLAUDE.md
2. docs/05_データベース設計.md
3. docs/06_検索仕様.md
4. seed/

---

## 作成するテーブル

- players
- teams
- brands
- devices
- device_usage
- shorts
- search_aliases

---

## 必須カラム

仕様書どおり作成する。

UUID Primary Key を使用する。

created_at / updated_at を追加する。

---

## リレーション

brands → devices

teams → players

players → device_usage

devices → device_usage

players → shorts

players → search_aliases

---

## Seed対応

`seed/` フォルダの JSON を読み込める構成を作る。

まだ投入はしない。

---

## 実装ファイル

例

lib/supabase.ts

lib/database.types.ts

supabase/schema.sql

supabase/seed.ts

supabase/config.toml

※ ファイル構成は実装しやすい方法でよい。

---

## 完了条件

- pnpm lint
- pnpm typecheck
- pnpm build

すべて成功。

---

## 完了時に報告する内容

1. 作成・変更したファイル一覧。
2. schema.sql の内容。
3. TypeScript型生成方法。
4. Seed投入方法。
5. 実行したコマンドと結果。
