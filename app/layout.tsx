import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OWKR.GG",
  description: "Korean Overwatch Pro Database",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
