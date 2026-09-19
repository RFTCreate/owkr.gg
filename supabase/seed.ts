
import { createClient } from "@supabase/supabase-js";

import players from "../seed/players.json";
import teams from "../seed/teams.json";
import brands from "../seed/brands.json";
import devices from "../seed/devices.json";
import searchAliases from "../seed/search_aliases.json";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function insertTable(table: string, data: unknown[]) {
  if (data.length === 0) {
    console.log(`⏭️ ${table} は空です`);
    return;
  }

  const { error } = await supabase
    .from(table)
    .upsert(data, {
      onConflict: "slug",
    });

  if (error) {
    console.error(`❌ ${table}`, error.message);
    return;
  }

  console.log(`✅ ${table}: ${data.length} 件`);
}

async function insertSearchAliases() {
  if (searchAliases.length === 0) {
    return;
  }

  const { error } = await supabase
    .from("search_aliases")
    .upsert(searchAliases, {
      onConflict: "player_id,alias",
    });

  if (error) {
    console.error("❌ search_aliases", error.message);
    return;
  }

  console.log(`✅ search_aliases: ${searchAliases.length} 件`);
}

async function seedDatabase() {
  console.log("🌱 OWKR.GG Seed Start");

  await insertTable("teams", teams);
  await insertTable("brands", brands);
  await insertTable("devices", devices);
  await insertTable("players", players);

  await insertSearchAliases();

  console.log("🎉 Seed Complete");
}

seedDatabase();
