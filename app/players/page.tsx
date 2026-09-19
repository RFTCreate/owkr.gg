"use client";

import { useMemo, useState } from "react";

type Role = "tank" | "dps" | "support";

type Player = {
  slug: string;
  englishName: string;
  koreanName: string;
  japaneseName: string;
  team: string;
  role: Role;
};

const PLAYERS: Player[] = [
  {
    slug: "proper",
    englishName: "Proper",
    koreanName: "프로퍼",
    japaneseName: "プロパー",
    team: "Team Falcons",
    role: "dps",
  },
  {
    slug: "lip",
    englishName: "Lip",
    koreanName: "립",
    japaneseName: "リップ",
    team: "Team Falcons",
    role: "dps",
  },
  {
    slug: "stalk3r",
    englishName: "Stalk3r",
    koreanName: "스탈커",
    japaneseName: "ストーカー",
    team: "Team Falcons",
    role: "dps",
  },
  {
    slug: "heesang",
    englishName: "Heesang",
    koreanName: "희상",
    japaneseName: "ヒサン",
    team: "Crazy Raccoon",
    role: "dps",
  },
  {
    slug: "hanbin",
    englishName: "Hanbin",
    koreanName: "한빈",
    japaneseName: "ハンビン",
    team: "Team Falcons",
    role: "tank",
  },
  {
    slug: "fearless",
    englishName: "Fearless",
    koreanName: "피어리스",
    japaneseName: "フィアレス",
    team: "Team Falcons",
    role: "tank",
  },
  {
    slug: "smurf",
    englishName: "Smurf",
    koreanName: "스머프",
    japaneseName: "スマーフ",
    team: "ZETA DIVISION",
    role: "tank",
  },
  {
    slug: "chiyo",
    englishName: "Chiyo",
    koreanName: "치요",
    japaneseName: "チヨ",
    team: "Team Falcons",
    role: "support",
  },
  {
    slug: "fielder",
    englishName: "Fielder",
    koreanName: "필더",
    japaneseName: "フィルダー",
    team: "Team Falcons",
    role: "support",
  },
  {
    slug: "shu",
    englishName: "Shu",
    koreanName: "슈",
    japaneseName: "シュウ",
    team: "Crazy Raccoon",
    role: "support",
  },
];

const ROLE_LABELS: Record<Role, string> = {
  tank: "Tank",
  dps: "DPS",
  support: "Support",
};

const ROLE_COLORS: Record<Role, string> = {
  tank: "bg-green-500/20 text-green-400 border-green-500/30",
  dps: "bg-red-500/20 text-red-400 border-red-500/30",
  support: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
};

export default function PlayersPage() {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState<"all" | Role>("all");

  const filteredPlayers = useMemo(() => {
    return PLAYERS.filter((player) => {
      const matchRole = role === "all" || player.role === role;

      const keyword = query.toLowerCase();

      const matchSearch =
        player.englishName.toLowerCase().includes(keyword) ||
        player.koreanName.includes(query) ||
        player.japaneseName.includes(query) ||
        player.team.toLowerCase().includes(keyword);

      return matchRole && matchSearch;
    });
  }, [query, role]);

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
            Players Database
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Korean Pro Players
          </h1>

          <p className="mt-4 text-slate-400">
            韓国Overwatchプロ選手を日本語・韓国語・英語で検索できます。
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="選手名・韓国語・チーム名で検索..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />
        </div>

        {/* Role Filter */}
        <div className="mb-10 flex flex-wrap gap-3">
          {["all", "tank", "dps", "support"].map((value) => (
            <button
              key={value}
              onClick={() => setRole(value as "all" | Role)}
              className={`rounded-xl border px-5 py-2 transition ${
                role === value
                  ? "border-cyan-400 bg-cyan-500 text-black"
                  : "border-slate-700 bg-slate-900 hover:border-slate-500"
              }`}
            >
              {value === "all"
                ? "All"
                : ROLE_LABELS[value as Role]}
            </button>
          ))}
        </div>

        {/* Result Count */}
        <div className="mb-6 text-slate-400">
          {filteredPlayers.length} Players
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredPlayers.map((player) => (
            <a
              key={player.slug}
              href={`/players/${player.slug}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-400 hover:bg-slate-800"
            >
              {/* Avatar Placeholder */}
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-slate-700 text-2xl font-bold">
                {player.englishName[0]}
              </div>

              <h2 className="text-xl font-bold group-hover:text-cyan-400">
                {player.englishName}
              </h2>

              <p className="mt-1 text-slate-300">{player.japaneseName}</p>

              <p className="text-sm text-slate-500">{player.koreanName}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-slate-400">{player.team}</span>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${ROLE_COLORS[player.role]}`}
                >
                  {ROLE_LABELS[player.role]}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
