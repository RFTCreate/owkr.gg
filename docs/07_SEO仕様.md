# OWKR.GG SEO仕様

> ステータス：FIXED

OWKR.GG の SEO・メタデータ・構造化データ・サイトマップ仕様を定義する。

---

# 1. SEO方針

OWKR.GG は検索エンジンから「選手情報データベース」と認識されることを目指す。

優先順位

1. 選手ページ
2. デバイスページ
3. ブランドページ
4. チームページ
5. ランキングページ
6. トップページ

---

# 2. URLルール

すべて英語 slug を使用する。

| ページ | URL |
|--------|-----|
| トップ | / |
| 選手 | /players/proper |
| チーム | /teams/team-falcons |
| デバイス | /devices/logitech-g-pro-x-superlight-2 |
| ブランド | /brands/logitech |
| ランキング | /rankings/mouse |

URL は公開後変更しない。

---

# 3. ページタイトル

フォーマットを統一する。

## トップページ

OWKR.GG｜韓国Overwatchプロデータベース

## 選手ページ

Proper｜使用デバイス・感度・メインヒーロー｜OWKR.GG

## デバイスページ

Logitech G PRO X Superlight 2｜使用韓国プロ一覧｜OWKR.GG

## ブランドページ

Logitech 使用韓国プロ一覧｜OWKR.GG

## チームページ

Team Falcons｜所属選手一覧｜OWKR.GG

---

# 4. meta description

100〜140文字程度。

## 選手ページ

Proper の使用マウス・キーボード・モニター・感度・メインヒーロー・SNSを日本語で掲載。

## デバイスページ

Logitech G PRO X Superlight 2 を使用する韓国Overwatchプロ一覧。

---

# 5. OGP画像

全ページ OGP を設定する。

## 選手ページ

- 選手画像
- 選手名
- チーム
- ロール

## デバイスページ

- 商品画像
- ブランド
- 商品名

画像サイズ

1200 × 630

---

# 6. JSON-LD

構造化データを使用する。

| ページ | Schema |
|--------|--------|
| トップ | WebSite |
| 選手 | Person |
| デバイス | Product |
| ブランド | Brand |
| チーム | SportsTeam |

---

# 7. Canonical

すべて canonical を設定する。

例

/players/proper

重複URLは禁止。

---

# 8. Sitemap

自動生成する。

含めるページ

- /
- /players/*
- /devices/*
- /brands/*
- /teams/*
- /rankings/*

draft・needs_review は含めない。

---

# 9. robots.txt

公開ページのみクロール許可。

除外

- /admin
- draftページ
- needs_reviewページ

---

# 10. インデックス対象

Google に公開するページ。

| ページ | index |
|--------|-------|
| published | ○ |
| draft | × |
| needs_review | × |

---

# 11. パンくずリスト

すべての詳細ページで表示する。

例

ホーム ＞ Players ＞ Proper

JSON-LD BreadcrumbList を生成する。

---

# 12. 内部リンク

選手ページから必ずリンクする。

- Team
- Devices
- Brand
- Ranking
- 同じデバイスの選手

孤立ページを作らない。

---

# 13. 画像SEO

ルール

- alt 必須
- 英語ファイル名
- WebP 推奨
- Lazy Load

例

proper-player.webp

---

# 14. 実装チェックリスト

- Title
- Description
- Canonical
- OGP
- JSON-LD
- Breadcrumb
- Sitemap
- robots.txt
- alt
- Lazy Load
