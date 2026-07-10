import { notFound } from "next/navigation";
import { isActiveLocale } from "../_lib/locales";
import RoadmapClient from "./RoadmapClient";

type LocaleHomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleHomePage({
  params,
}: LocaleHomePageProps) {
  const { locale } = await params;

  if (!isActiveLocale(locale)) {
    notFound();
  }

  return <RoadmapClient locale={locale} />;
}