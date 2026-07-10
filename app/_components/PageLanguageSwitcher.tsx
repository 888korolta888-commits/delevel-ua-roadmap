import Link from "next/link";
import {
  SUPPORTED_LOCALES,
  isActiveLocale,
  localizedPath,
  type ActiveLocale,
  type Locale,
} from "../_lib/locales";
import styles from "./PageLanguageSwitcher.module.css";

const LANGUAGE_LABELS = {
  uk: "UA",
  de: "DE",
  en: "EN",
} satisfies Record<Locale, string>;

const SWITCHER_TEXT = {
  uk: {
    ariaLabel: "Вибір мови",
    currentLanguage: "поточна мова",
    goToLanguage: "Перейти на",
    unavailableLanguage: "Мовна версія готується",
  },
  de: {
    ariaLabel: "Sprache auswählen",
    currentLanguage: "aktuelle Sprache",
    goToLanguage: "Wechseln zu",
    unavailableLanguage: "Sprachversion in Vorbereitung",
  },
  en: {
    ariaLabel: "Select language",
    currentLanguage: "current language",
    goToLanguage: "Switch to",
    unavailableLanguage: "Language version in preparation",
  },
} satisfies Record<
  ActiveLocale,
  {
    ariaLabel: string;
    currentLanguage: string;
    goToLanguage: string;
    unavailableLanguage: string;
  }
>;

type PageLanguageSwitcherProps = {
  locale: ActiveLocale;
  path: string;
};

export default function PageLanguageSwitcher({
  locale,
  path,
}: PageLanguageSwitcherProps) {
  const text = SWITCHER_TEXT[locale];

  return (
    <nav
      className={styles.switcher}
      aria-label={text.ariaLabel}
    >
      {SUPPORTED_LOCALES.map((language) => {
        const label = LANGUAGE_LABELS[language];

        if (language === locale) {
          return (
            <span
              className={`${styles.option} ${styles.optionActive}`}
              aria-current="page"
              aria-label={`${label}: ${text.currentLanguage}`}
              key={language}
            >
              {label}
            </span>
          );
        }

        if (isActiveLocale(language)) {
          return (
            <Link
              className={styles.option}
              href={localizedPath(language, path)}
              aria-label={`${text.goToLanguage} ${label}`}
              key={language}
            >
              {label}
            </Link>
          );
        }

        return (
          <span
            className={`${styles.option} ${styles.optionDisabled}`}
            aria-disabled="true"
            aria-label={`${label}: ${text.unavailableLanguage}`}
            title={text.unavailableLanguage}
            key={language}
          >
            {label}
          </span>
        );
      })}
    </nav>
  );
}