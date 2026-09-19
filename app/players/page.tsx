
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

type Player = {
  id: string;
  slug: string;
  english_name: string;
  japanese_name: string;
  korean_name: string;
  role: "tank" | "dps" | "support";
  image_url: string | null;
  teams: {
    short_name: string;
  } | null;
};

const ROLE_LABEL = {
  tank: "Tank",
  dps: "DPS",
  support: "Support",
};

const ROLE_COLOR = {
  tank: "bg-green-500/20 text-green-300",
  dps: "bg-red-500/20 text-red-300",
  support: "bg-yellow-500/20 text-yellow-300",
};

export default async function PlayersPage() {
  const { data: players, error } = await supabase
    .from("players")
    .select(
      `
      id,
      slug,
      english_name,
      japanese_name,
      korean_name,
      role,
      image_url,
      teams (
        short_name
      )
    `
    )
    .eq("status", "published")
    .order("english_name");

  if (error) {
    return (
      <main className="min-h-screen bg-[#0B1120] text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Players</h1>

        <p className="text-red-400">
          Supabase接続エラー: {error.message}
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
          Players Database
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          Korean Pro Players
        </h1>

        <p className="mt-4 text-slate-400">
          韓国Overwatchプロ選手一覧
        </p>

        <p className="mt-2 text-slate-500">
          {players?.length ?? 0} Players
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {players?.map((player: Player) => (
            <Link
              key={player.id}
              href={`/players/${player.slug}`}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400 hover:bg-slate-800"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-slate-700 text-3xl font-bold">
                {player.image_url ? (
                  <img
                    src={player.image_url}
                    alt={player.english_name}
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  player.english_name[0]
                )}
              </div>

              <h2 className="text-2xl font-bold text-white">
                {player.english_name}
              </h2>

              <p className="text-slate-300">
                {player.japanese_name}
              </p>

              <p className="text-sm text-slate-500">
                {player.korean_name}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-slate-400">
                  {player.teams?.short_name ?? "-"}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${ROLE_COLOR[player.role]}`}
                >
                  {ROLE_LABEL[player.role]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
