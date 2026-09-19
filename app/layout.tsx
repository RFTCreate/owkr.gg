export const metadata = {
  title: "OWKR.GG",
  description: "韓国Overwatchプロのデバイス・設定データベース",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        style={{
          margin: 0,
          background: "#0B1120",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
