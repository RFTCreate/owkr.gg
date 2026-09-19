
-- ============================================================
-- OWKR.GG Database Schema v1.0
-- Part A : Extensions / Enums / Common Functions / Triggers
-- ============================================================

-- UUID生成
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

-- ロール
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
-- 共通 updated_at Trigger
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

-- ============================================================
-- 使用率計算用 View（ランキングで利用）
-- ============================================================

create or replace view public.device_usage_summary as
select
  d.id as device_id,
  d.slug,
  d.name,
  d.category,
  d.brand_id,
  count(du.player_id) filter (where du.is_current = true) as player_count
from public.devices d
left join public.device_usage du
  on du.device_id = d.id
group by d.id;

comment on view public.device_usage_summary is
'現在使用中プロ人数を集計するビュー';

-- ============================================================
-- Utility Function : eDPI計算
-- ============================================================

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
is 'eDPI = DPI × Sensitivity';

-- ============================================================
-- Utility Function : 使用率(%)
-- ============================================================

create or replace function public.calculate_usage_percent(
  player_count integer,
  total_players integer
)
returns integer
language sql
immutable
as $$
select
  case
    when total_players = 0 then 0
    else round((player_count::numeric / total_players) * 100)::integer
  end;
$$;

comment on function public.calculate_usage_percent(integer, integer)
is '韓国プロ使用率を整数で返す';

-- ============================================================
-- 共通 Timestamp Helper
-- ============================================================

create or replace function public.current_timestamp_utc()
returns timestamptz
language sql
stable
as $$
select timezone('utc', now());
$$;
