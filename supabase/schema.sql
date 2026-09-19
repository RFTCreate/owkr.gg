
-- ============================================================
-- OWKR.GG Database Schema v1.0
-- Part A : Extensions / ENUM Types / Common Functions
-- ============================================================

-- UUID生成拡張
create extension if not exists "pgcrypto";

-- ============================================================
-- ENUM TYPES
-- ============================================================

-- 公開ステータス
create type public.content_status as enum (
  'draft',
  'needs_review',
  'published'
);

-- プレイヤーロール
create type public.player_role as enum (
  'tank',
  'dps',
  'support'
);

-- デバイスカテゴリ
create type public.device_category as enum (
  'mouse',
  'keyboard',
  'mousepad',
  'monitor',
  'audio'
);

-- 検索エイリアス言語
create type public.alias_language as enum (
  'ja',
  'ko',
  'en'
);

-- ============================================================
-- 共通 Trigger Function
-- updated_at を自動更新する
-- ============================================================

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

comment on function public.handle_updated_at()
is 'updated_at を更新時に UTC 現在時刻へ更新する Trigger';

-- ============================================================
-- Utility Functions
-- ============================================================

-- eDPI = DPI × Sensitivity
create or replace function public.calculate_edpi(
  dpi integer,
  sensitivity numeric
)
returns integer
language sql
immutable
as $$
  select round(dpi * sensitivity)::integer;
$$;

comment on function public.calculate_edpi(integer, numeric)
is 'eDPI を計算する';

-- 使用率 (%) = 使用人数 ÷ 公開中プレイヤー人数 × 100
create or replace function public.calculate_usage_percent(
  player_count integer,
  total_players integer
)
returns integer
language sql
immutable
as $$
  select case
    when total_players = 0 then 0
    else round((player_count::numeric / total_players) * 100)::integer
  end;
$$;

comment on function public.calculate_usage_percent(integer, integer)
is '韓国プロ使用率を整数(%)で返す';

-- 現在時刻 (UTC)
create or replace function public.current_timestamp_utc()
returns timestamptz
language sql
stable
as $$
  select timezone('utc', now());
$$;

comment on function public.current_timestamp_utc()
is 'UTC の現在時刻を返す';

-- ============================================================
-- Part A End
-- ============================================================
