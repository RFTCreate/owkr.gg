
-- ============================================================
-- OWKR.GG Database Schema v1.0
-- PostgreSQL / Supabase
-- ============================================================

create extension if not exists "pgcrypto";

-- ============================================================
-- ENUMS
-- ============================================================

create type public.content_status as enum (
  'draft',
  'needs_review',
  'published'
);

create type public.player_role as enum (
  'tank',
  'dps',
  'support'
);

create type public.device_category as enum (
  'mouse',
  'keyboard',
  'mousepad',
  'monitor',
  'audio'
);

create type public.alias_language as enum (
  'ja',
  'ko',
  'en'
);

-- ============================================================
-- COMMON FUNCTIONS
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

-- ============================================================
-- TEAMS
-- ============================================================

create table public.teams (
  id uuid primary key default gen_random_uuid(),

  slug text not null unique,
  name text not null,
  short_name text not null,

  logo_url text,

  status public.content_status
    not null default 'published',

  created_at timestamptz
    not null default timezone('utc', now()),

  updated_at timestamptz
    not null default timezone('utc', now())
);

create trigger teams_updated_at
before update on public.teams
for each row execute function public.handle_updated_at();

-- ============================================================
-- BRANDS
-- ============================================================

create table public.brands (
  id uuid primary key default gen_random_uuid(),

  slug text not null unique,
  name text not null unique,

  logo_url text,
  official_url text,

  status public.content_status
    not null default 'published',

  created_at timestamptz
    not null default timezone('utc', now()),

  updated_at timestamptz
    not null default timezone('utc', now())
);

create trigger brands_updated_at
before update on public.brands
for each row execute function public.handle_updated_at();

-- ============================================================
-- DEVICES
-- ============================================================

create table public.devices (
  id uuid primary key default gen_random_uuid(),

  slug text not null unique,
  name text not null,

  brand_id uuid
    not null references public.brands(id)
    on delete restrict,

  category public.device_category not null,

  image_url text,

  amazon_url text,
  amazon_asin text,

  connection text,
  sensor text,

  weight integer check (weight is null or weight > 0),

  size text,

  status public.content_status
    not null default 'published',

  created_at timestamptz
    not null default timezone('utc', now()),

  updated_at timestamptz
    not null default timezone('utc', now())
);

create trigger devices_updated_at
before update on public.devices
for each row execute function public.handle_updated_at();

-- ============================================================
-- PLAYERS
-- ============================================================

create table public.players (
  id uuid primary key default gen_random_uuid(),

  slug text not null unique,

  english_name text not null,
  korean_name text not null,
  japanese_name text not null,

  team_id uuid
    references public.teams(id)
    on delete set null,

  role public.player_role not null,

  nationality text,
  birthday date,

  main_heroes text[] not null default '{}',

  dpi integer check (dpi is null or dpi > 0),

  sensitivity numeric(6,3)
    check (sensitivity is null or sensitivity > 0),

  scoped_sensitivity numeric(6,3)
    check (
      scoped_sensitivity is null
      or scoped_sensitivity between 0 and 100
    ),

  polling_rate integer
    check (
      polling_rate is null
      or polling_rate in (125,250,500,1000,2000,4000,8000)
    ),

  x_url text,
  youtube_url text,
  twitch_url text,
  chzzk_url text,
  instagram_url text,
  afreecatv_url text,

  image_url text,

  status public.content_status
    not null default 'draft',

  created_at timestamptz
    not null default timezone('utc', now()),

  updated_at timestamptz
    not null default timezone('utc', now())
);

create trigger players_updated_at
before update on public.players
for each row execute function public.handle_updated_at();

-- ============================================================
-- DEVICE USAGE
-- ============================================================

create table public.device_usage (
  id uuid primary key default gen_random_uuid(),

  player_id uuid
    not null references public.players(id)
    on delete cascade,

  device_id uuid
    not null references public.devices(id)
    on delete cascade,

  is_current boolean
    not null default true,

  created_at timestamptz
    not null default timezone('utc', now()),

  updated_at timestamptz
    not null default timezone('utc', now()),

  unique(player_id, device_id)
);

create trigger device_usage_updated_at
before update on public.device_usage
for each row execute function public.handle_updated_at();

-- ============================================================
-- SHORTS
-- ============================================================

create table public.shorts (
  id uuid primary key default gen_random_uuid(),

  player_id uuid
    not null references public.players(id)
    on delete cascade,

  youtube_url text not null,
  youtube_video_id text not null unique,

  title text not null,

  thumbnail_url text,

  published_at date,

  status public.content_status
    not null default 'published',

  created_at timestamptz
    not null default timezone('utc', now()),

  updated_at timestamptz
    not null default timezone('utc', now())
);

create trigger shorts_updated_at
before update on public.shorts
for each row execute function public.handle_updated_at();

-- ============================================================
-- SEARCH ALIASES
-- ============================================================

create table public.search_aliases (
  id uuid primary key default gen_random_uuid(),

  player_id uuid
    not null references public.players(id)
    on delete cascade,

  alias text not null,

  language public.alias_language not null,

  created_at timestamptz
    not null default timezone('utc', now()),

  unique(player_id, alias)
);

-- ============================================================
-- INDEXES
-- ============================================================

create index idx_players_slug
  on public.players(slug);

create index idx_players_team
  on public.players(team_id);

create index idx_players_role
  on public.players(role);

create index idx_players_status
  on public.players(status);

create index idx_players_name_en
  on public.players(english_name);

create index idx_players_name_ko
  on public.players(korean_name);

create index idx_players_name_ja
  on public.players(japanese_name);

create index idx_devices_brand
  on public.devices(brand_id);

create index idx_devices_category
  on public.devices(category);

create index idx_devices_status
  on public.devices(status);

create index idx_device_usage_device
  on public.device_usage(device_id);

create index idx_device_usage_player
  on public.device_usage(player_id);

create index idx_device_usage_current
  on public.device_usage(is_current);

create index idx_search_alias
  on public.search_aliases(alias);

create index idx_search_language
  on public.search_aliases(language);

create index idx_shorts_player
  on public.shorts(player_id);

create index idx_shorts_date
  on public.shorts(published_at desc);

-- ============================================================
-- VIEW : Device Usage Summary
-- ============================================================

create or replace view public.device_usage_summary as
select
  d.id as device_id,
  d.slug,
  d.name,
  d.category,
  d.brand_id,

  count(du.player_id)
    filter (where du.is_current = true) as player_count

from public.devices d
left join public.device_usage du
  on du.device_id = d.id

group by
  d.id,
  d.slug,
  d.name,
  d.category,
  d.brand_id;

comment on view public.device_usage_summary is
'現在使用中の韓国プロ人数を集計するビュー';

-- ============================================================
-- RLS（Phase2 MVP）
-- ============================================================

alter table public.players enable row level security;
alter table public.teams enable row level security;
alter table public.brands enable row level security;
alter table public.devices enable row level security;
alter table public.device_usage enable row level security;
alter table public.shorts enable row level security;
alter table public.search_aliases enable row level security;

create policy "Public read players"
on public.players
for select
using (status = 'published');

create policy "Public read teams"
on public.teams
for select
using (status = 'published');

create policy "Public read brands"
on public.brands
for select
using (status = 'published');

create policy "Public read devices"
on public.devices
for select
using (status = 'published');

create policy "Public read device_usage"
on public.device_usage
for select
using (true);

create policy "Public read shorts"
on public.shorts
for select
using (status = 'published');

create policy "Public read search_aliases"
on public.search_aliases
for select
using (true);

-- ============================================================
-- COMMENTS
-- ============================================================

comment on table public.players is '韓国Overwatchプロ選手';
comment on table public.teams is 'チーム一覧';
comment on table public.brands is 'デバイスブランド一覧';
comment on table public.devices is 'デバイス情報';
comment on table public.device_usage is '選手とデバイスの関連';
comment on table public.shorts is 'YouTube Shorts';
comment on table public.search_aliases is '検索エイリアス';
