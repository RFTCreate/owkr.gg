
type Player = {
  englishName: string;
  japaneseName: string;
  koreanName: string;
  team: string;
  role: string;
  heroes: string[];
  dpi: number | null;
  sensitivity: number | null;
};

const players: Record<string, Player> = {
  proper: {
    englishName: "Proper",
    japaneseName: "プロパー",
    koreanName: "프로퍼",
    team: "Team Falcons",
    role: "DPS",
    heroes: ["Tracer", "Sojourn", "Cassidy"],
    dpi: null,
    sensitivity: null,
  },
  lip: {
    englishName: "Lip",
    japaneseName: "リップ",
    koreanName: "립",
    team: "Team Falcons",
    role: "DPS",
    heroes: ["Sombra", "Ashe", "Cassidy"],
    dpi: null,
    sensitivity: null,
  },
  hanbin: {
    englishName: "Hanbin",
    japaneseName: "ハンビン",
    koreanName: "한빈",
    team: "Team Falcons",
    role: "Tank",
    heroes: ["D.Va", "Junker Queen", "Zarya"],
    dpi: null,
    sensitivity: null,
  },
};

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const player = players[slug];

  if (!player) {
    return (
      <main className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Player Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="h-40 w-40 rounded-full bg-slate-700 flex items-center justify-center text-5xl font-bold">
            {player.englishName[0]}
          </div>

          <div className="flex-1">
            <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
              {player.role}
            </p>

            <h1 className="mt-2 text-5xl font-bold">
              {player.englishName}
            </h1>

            <p className="mt-2 text-xl text-slate-300">
              {player.japaneseName}
            </p>

            <p className="text-slate-500">{player.koreanName}</p>

            <div className="mt-6 inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300">
              {player.team}
            </div>
          </div>
        </div>

        {/* Game Settings */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Game Settings</h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <SettingCard
              label="DPI"
              value={player.dpi?.toString() ?? "情報確認中"}
            />

            <SettingCard
              label="Sensitivity"
              value={player.sensitivity?.toString() ?? "情報確認中"}
            />

            <SettingCard
              label="Polling Rate"
              value="情報確認中"
            />

            <SettingCard
              label="eDPI"
              value={
                player.dpi && player.sensitivity
                  ? String(player.dpi * player.sensitivity)
                  : "情報確認中"
              }
            />
          </div>
        </section>

        {/* Main Heroes */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Main Heroes</h2>

          <div className="flex flex-wrap gap-3">
            {player.heroes.map((hero) => (
              <span
                key={hero}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300"
              >
                {hero}
              </span>
            ))}
          </div>
        </section>

        {/* Devices */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Current Devices</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <DeviceCard
              category="Mouse"
              name="情報確認中"
            />

            <DeviceCard
              category="Keyboard"
              name="情報確認中"
            />

            <DeviceCard
              category="Mousepad"
              name="情報確認中"
            />

            <DeviceCard
              category="Monitor"
              name="情報確認中"
            />
          </div>
        </section>

        {/* Shorts */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">YouTube Shorts</h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-400">
            Shorts は今後追加されます。
          </div>
        </section>
      </div>
    </main>
  );
}

function SettingCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-500">{label}</p>

      <h3 className="mt-2 text-2xl font-bold">{value}</h3>
    </div>
  );
}

function DeviceCard({
  category,
  name,
}: {
  category: string;
  name: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-500">{category}</p>

      <h3 className="mt-2 text-xl font-semibold">{name}</h3>
    </div>
  );
}
