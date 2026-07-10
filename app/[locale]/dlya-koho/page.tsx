import Link from "next/link";
import { notFound } from "next/navigation";
import PageLanguageSwitcher from "../../_components/PageLanguageSwitcher";
import {
  isActiveLocale,
  localizedPath,
} from "../../_lib/locales";
import styles from "./page.module.css";

const PAGE_CONTENT = {
  uk: {
    heroTitle:
      "Для дітей, які починають читати німецькою в багатомовному середовищі",
    heroParagraphs: [
      "DeLevel створений для дітей 4–8 років, які опановують німецьку як другу мову й переходять від усного мовлення до читання.",
      "Дитина може добре розуміти й говорити німецькою, але читання потребує окремого переходу — особливо якщо перші букви й правила письма вона засвоювала іншою мовою. DeLevel допомагає крок за кроком пов’язати знайоме звучання з німецьким написанням і перейти до самостійного читання.",
    ],
    audienceAria: "Аудиторії DeLevel",
    contextItems: [
      {
        category: "Основна аудиторія",
        value: "Дитина",
        label: "починає читати німецькою",
        text:
          "Дитина вчиться поєднувати звук, букву, слово й образ та поступово переходить до самостійного читання.",
      },
      {
        category: "Дорослі користувачі",
        value: "Батьки й педагоги",
        label: "супроводжують навчання",
        text:
          "Вони отримують готову послідовність завдань, яку можна використовувати вдома, на індивідуальних заняттях або як частину навчальної програми.",
      },
      {
        category: "Освітні організації",
        value: "Центри й платформи",
        label: "забезпечують доступ до продукту",
        text:
          "Приватні освітні центри, мовні школи та цифрові сервіси можуть використовувати DeLevel як структурований інструмент раннього читання німецькою.",
      },
    ],
    useTitle: "Де працює DeLevel",
    useCases: [
      {
        title: "У родині",
        text:
          "Для короткої регулярної практики вдома у зручному для дитини темпі.",
      },
      {
        title: "На індивідуальних заняттях",
        text:
          "Як готовий навчальний маршрут для роботи педагога або викладача німецької.",
      },
      {
        title: "У мовних школах і центрах",
        text:
          "Як окремий навчальний блок для переходу від усного мовлення до читання.",
      },
      {
        title: "У цифровому навчанні",
        text:
          "Як навчальний модуль у складі EdTech-платформи або іншого цифрового освітнього продукту.",
      },
    ],
    statement:
      "Головний користувач DeLevel — дитина. Батьки й педагоги супроводжують навчання, а освітні організації та цифрові платформи забезпечують доступ до продукту в різних навчальних середовищах.",
    backLabel: "← До демо",
  },
  de: {
    heroTitle:
      "Für Kinder, die in einem mehrsprachigen Umfeld Deutsch lesen lernen",
    heroParagraphs: [
      "DeLevel wurde für Kinder von 4 bis 8 Jahren entwickelt, die Deutsch als Zweitsprache erwerben und von der gesprochenen Sprache zum Lesen übergehen.",
      "Ein Kind kann Deutsch bereits gut verstehen und sprechen – Lesen muss es dennoch gesondert erlernen. Das gilt besonders, wenn es Buchstaben und erste Schriftregeln zunächst in einer anderen Sprache kennengelernt hat. DeLevel verbindet die vertraute gesprochene Sprache systematisch mit der deutschen Schrift und führt schrittweise zum selbstständigen Lesen.",
    ],
    audienceAria: "Zielgruppen von DeLevel",
    contextItems: [
      {
        category: "Kernzielgruppe",
        value: "Kinder",
        label: "beginnen, auf Deutsch zu lesen",
        text:
          "Sie lernen, Laute, Buchstaben, Wörter und Bilder miteinander zu verknüpfen und schrittweise selbstständig zu lesen.",
      },
      {
        category: "Begleitende Erwachsene",
        value: "Eltern und Fachkräfte",
        label: "unterstützen den Lernprozess",
        text:
          "Sie erhalten eine klar strukturierte Abfolge von Aufgaben, die zu Hause, in der Einzelförderung oder als Teil eines Lernangebots eingesetzt werden kann.",
      },
      {
        category: "Bildungsanbieter",
        value: "Zentren und Plattformen",
        label: "schaffen Zugang zum Produkt",
        text:
          "Private Bildungszentren, Sprachschulen und digitale Lernangebote können DeLevel als strukturiertes Instrument für den Einstieg in das Lesen auf Deutsch einsetzen.",
      },
    ],
    useTitle: "Wo DeLevel eingesetzt werden kann",
    useCases: [
      {
        title: "In der Familie",
        text:
          "Für kurze, regelmäßige Übungen zu Hause im individuellen Tempo des Kindes.",
      },
      {
        title: "In der Einzelförderung",
        text:
          "Als klar aufgebauter Lernweg für die Arbeit mit pädagogischen Fachkräften oder Deutschlehrkräften.",
      },
      {
        title: "In Sprachschulen und Bildungszentren",
        text:
          "Als eigenständiger Lernbaustein für den Übergang von der gesprochenen Sprache zum Lesen.",
      },
      {
        title: "In digitalen Lernangeboten",
        text:
          "Als Lernmodul innerhalb einer EdTech-Plattform oder eines anderen digitalen Bildungsprodukts.",
      },
    ],
    statement:
      "Der wichtigste Nutzer von DeLevel ist das Kind. Eltern und pädagogische Fachkräfte begleiten das Lernen; Bildungsanbieter und digitale Plattformen schaffen Zugänge in unterschiedlichen Lernumgebungen.",
    backLabel: "← Zur Demo",
  },
  en: {
    heroTitle:
      "For children learning to read German in a multilingual environment",
    heroParagraphs: [
      "DeLevel was developed for children aged 4–8 who are acquiring German as a second or educational language and need a structured transition from spoken language to reading.",
      "A child may already understand and speak German well but still need to learn how German speech maps onto written words. This is especially important when the child first encountered letters or literacy conventions in another language. DeLevel builds that connection step by step.",
    ],
    audienceAria: "DeLevel target groups",
    contextItems: [
      {
        category: "Primary learner",
        value: "The child",
        label: "begins to read in German",
        text:
          "The child connects sounds, letters, words, images and meaning and gradually moves towards independent reading.",
      },
      {
        category: "Supporting adults",
        value: "Parents and educators",
        label: "guide the learning process",
        text:
          "They receive a clearly structured sequence that can be used at home, in individual support or as part of a wider learning programme.",
      },
      {
        category: "Delivery partners",
        value: "Centres and platforms",
        label: "provide access to the product",
        text:
          "Educational centres, language providers and digital learning platforms can use DeLevel as a structured early-literacy pathway for German.",
      },
    ],
    useTitle: "Where DeLevel can be used",
    useCases: [
      {
        title: "At home",
        text:
          "For short, regular literacy practice at a pace that suits the child.",
      },
      {
        title: "In individual support",
        text:
          "As a ready-made learning pathway for educators, tutors or German-language specialists.",
      },
      {
        title: "In language and learning centres",
        text:
          "As a focused module supporting the transition from spoken German to reading.",
      },
      {
        title: "Within digital learning products",
        text:
          "As a literacy module integrated into an EdTech platform or another digital education product.",
      },
    ],
    statement:
      "The child is the primary user of DeLevel. Parents and educators support the learning process, while educational providers and digital platforms create access across different learning environments.",
    backLabel: "← Back to the demo",
  },
};

type DlyaKohoPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function DlyaKohoPage({
  params,
}: DlyaKohoPageProps) {
  const { locale } = await params;

  if (!isActiveLocale(locale)) {
    notFound();
  }

  const content = PAGE_CONTENT[locale];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>{content.heroTitle}</h1>

          {content.heroParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section
        className={styles.marketSection}
        aria-label={content.audienceAria}
      >
        <div className={styles.marketGrid}>
          {content.contextItems.map((item) => (
            <article
              className={styles.marketCard}
              key={item.category}
            >
              <p className={styles.country}>{item.category}</p>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.useSection}
        aria-labelledby="use-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="use-title">{content.useTitle}</h2>
        </div>

        <div className={styles.useGrid}>
          {content.useCases.map((item) => (
            <article
              className={styles.useCard}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.statementSection}>
        <p>{content.statement}</p>
      </section>

      <PageLanguageSwitcher
        locale={locale}
        path="/dlya-koho"
      />

      <Link
        className={styles.backHome}
        href={localizedPath(locale)}
      >
        {content.backLabel}
      </Link>
    </main>
  );
}