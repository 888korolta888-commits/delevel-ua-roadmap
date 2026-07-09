import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Дракончик вчиться читати",
  description:
    "Українська демо-версія roadmap DeLevel — інтерактивний шлях до читання: від звуків і літер до перших слів і речень.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}