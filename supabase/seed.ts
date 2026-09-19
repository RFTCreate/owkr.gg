import { createClient } from "@supabase/supabase-js";

import teams from "../seed/teams.json";
import brands from "../seed/brands.json";
import devices from "../seed/devices.json";
import players from "../seed/players.json";
import searchAliases from "../seed/search_aliases.json";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function seedDatabase() {
  console.log("🌱 OWKR.GG Seed Start");

  // -------------------------
  // Teams
  // -------------------------
  await supabase.from("teams").upsert(teams, { onConflict: "slug" });

  // -------------------------
  // Brands
  // -------------------------
  await supabase.from("brands").upsert(brands, { onConflict: "slug" });

  // ブランド一覧取得
  const { data: brandRows } = await supabase
    .from("brands")
    .select("id, slug");

  const brandMap = new Map(
    (brandRows ?? []).map((b) => [b.slug, b.id])
  );

  // -------------------------
  // Devices
  // -------------------------
  const devicesForInsert = devices.map((device: any) => ({
    slug: device.slug,
    name: device.name,
    brand_id: brandMap.get(device.brand_slug),
    category: device.category,
    image_url: device.image_url,
    amazon_url: device.amazon_url ?? null,
    amazon_asin: device.amazon_asin ?? null,
    connection: device.connection,
    sensor: device.sensor,
    weight: device.weight,
    size: device.size,
    status: device.status
  }));

  await supabase.from("devices").upsert(devicesForInsert, {
    onConflict: "slug"
  });

  // -------------------------
  // Teams取得
  // -------------------------
  const { data: teamRows } = await supabase
    .from("teams")
    .select("id, slug");

  const teamMap = new Map(
    (teamRows ?? []).map((t) => [t.slug, t.id])
  );

  // -------------------------
  // Players
  // -------------------------
  const playersForInsert = players.map((player: any) => ({
    slug: player.slug,
    english_name: player.english_name,
    korean_name: player.korean_name,
    japanese_name: player.japanese_name,
    team_id: teamMap.get(player.team_slug) ?? null,
    role: player.role,
    nationality: player.nationality,
    birthday: player.birthday,
    main_heroes: player.main_heroes,
    dpi: player.dpi,
    sensitivity: player.sensitivity,
    scoped_sensitivity: player.scoped_sensitivity,
    polling_rate: player.polling_rate,
    x_url: player.x_url,
    youtube_url: player.youtube_url,
    twitch_url: player.twitch_url,
    chzzk_url: player.chzzk_url,
    instagram_url: player.instagram_url,
    afreecatv_url: player.afreecatv_url,
    image_url: player.image_url,
    status: player.status
  }));

  await supabase.from("players").upsert(playersForInsert, {
    onConflict: "slug"
  });

  // -------------------------
  // Players取得
  // -------------------------
  const { data: playerRows } = await supabase
    .from("players")
    .select("id, slug");

  const playerMap = new Map(
    (playerRows ?? []).map((p) => [p.slug, p.id])
  );

  // -------------------------
  // Search Aliases
  // -------------------------
  const aliasesForInsert = searchAliases.map((alias: any) => ({
    player_id: playerMap.get(alias.player_slug),
    alias: alias.alias,
    language: alias.language
  }));

  await supabase.from("search_aliases").upsert(aliasesForInsert, {
    onConflict: "player_id,alias"
  });

  console.log("🎉 Seed Complete");
}

seedDatabase().catch(console.error);
