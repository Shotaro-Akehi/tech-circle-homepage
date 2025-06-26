import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech サークル - 2025年4月発足の技術コミュニティ",
  description: "2025年4月に新しく発足した技術系サークル。エンジニア同士が気軽に集まり、情報交換や新しい知識のインプットができる場を目指しています。初心者から経験者まで、みんなで学び合い成長するコミュニティです。",
  keywords: ["技術サークル", "プログラミング", "エンジニア", "情報交換", "学習", "コミュニティ", "2025年", "新設"],
  authors: [{ name: "Tech サークル" }],
  creator: "Tech サークル",
  publisher: "Tech サークル",
  openGraph: {
    title: "Tech サークル - 2025年4月発足の技術コミュニティ",
    description: "エンジニア同士が気軽に集まり、情報交換や新しい知識のインプットができる新しい技術系サークルです。",
    images: ["/tech-circle-logo.png"],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech サークル - 2025年4月発足の技術コミュニティ",
    description: "エンジニア同士が気軽に集まり、情報交換や新しい知識のインプットができる新しい技術系サークルです。",
    images: ["/tech-circle-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
