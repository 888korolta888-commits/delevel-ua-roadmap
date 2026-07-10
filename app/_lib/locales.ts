export const SUPPORTED_LOCALES = ["uk", "de", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const ACTIVE_LOCALES = ["uk", "de", "en"] as const;

export type ActiveLocale = (typeof ACTIVE_LOCALES)[number];

export function isSupportedLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function isActiveLocale(value: string): value is ActiveLocale {
  return ACTIVE_LOCALES.includes(value as ActiveLocale);
}

export function localizedPath(
  locale: Locale,
  path: string = "",
): string {
  if (!path || path === "/") {
    return `/${locale}`;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `/${locale}${normalizedPath}`;
}