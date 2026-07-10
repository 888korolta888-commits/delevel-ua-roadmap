import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import {
  ACTIVE_LOCALES,
  isActiveLocale,
  type ActiveLocale,
} from "../_lib/locales";

export const dynamicParams = false;

export function generateStaticParams() {
  return ACTIVE_LOCALES.map((locale) => ({
    locale,
  }));
}

const METADATA_BY_LOCALE = {
  uk: {
    title: "Дракончик вчиться читати",
    description:
      "Українська демо-версія roadmap DeLevel — інтерактивний шлях до читання: від звуків і літер до перших слів і речень.",
  },
  de: {
    title: "Drachi lernt Lesen | DeLevel",
    description:
      "DeLevel ist eine digitale Lernarchitektur für den Übergang von gesprochener deutscher Sprache zum selbstständigen Lesen.",
  },
  en: {
    title: "DeLevel | Early Literacy for Multilingual Children",
    description:
      "DeLevel is a developed digital literacy system that guides multilingual children from spoken German to independent reading.",
  },
} satisfies Record<ActiveLocale, Metadata>;

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isActiveLocale(locale)) {
    notFound();
  }

  return METADATA_BY_LOCALE[locale];
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isActiveLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}