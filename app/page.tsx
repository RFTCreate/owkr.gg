export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Korean Overwatch Pro Database
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            OWKR.GG
          </h1>

          <p className="max-w-2xl text-lg text-slate-300">
            韓国Overwatchプロ選手のデバイス・感度・設定をまとめたデータベース。
            日本語で検索できるOverwatch Gearサイトです。
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/players"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Playersを見る
            </a>

            <a
              href="/devices"
              className="rounded-xl border border-slate-600 px-6 py-3 transition hover:border-slate-400"
            >
              Devicesを見る
            </a>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3">
        <FeatureCard
          title="Players"
          description="韓国プロ選手一覧。ロール・チーム・検索対応。"
        />

        <FeatureCard
          title="Devices"
          description="マウス・キーボード・マウスパッド・モニターを一覧表示。"
        />

        <FeatureCard
          title="Rankings"
          description="韓国プロ使用率ランキングをカテゴリ別に表示。"
        />
      </section>

      {/* Coming Soon */}
      <section className="border-t border-slate-800 py-16 text-center">
        <p className="text-slate-400">OWKR.GG MVP Version</p>

        <h2 className="mt-2 text-2xl font-bold">
          Korean Pro Settings Database
        </h2>

        <p className="mt-4 text-slate-500">
          Phase 3では Players / Devices / Rankings を実装します。
        </p>
      </section>
    </main>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 text-slate-400">{description}</p>
    </div>
  );
}
