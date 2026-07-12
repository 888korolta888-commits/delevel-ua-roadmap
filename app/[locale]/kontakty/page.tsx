import Link from "next/link";
import { notFound } from "next/navigation";
import PageLanguageSwitcher from "../../_components/PageLanguageSwitcher";
import {
  isActiveLocale,
  localizedPath,
} from "../../_lib/locales";
import styles from "./page.module.css";

const CONTACT_EMAIL = "kontakt@example.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/dein-profil";

const GERMAN_ORIGIN_STORY = {
  title: "Wie DeLevel entstanden ist",
  paragraphs: [
    "DeLevel ist aus eigener Migrationserfahrung, gelebter Mehrsprachigkeit und der intensiven Auseinandersetzung mit dem Erwerb der deutschen Sprache entstanden. Ich kenne den Moment, in dem eine neue Sprache zunächst wie eine geschlossene Struktur wirkt – und den Prozess, in dem aus fremden Lauten Orientierung, Sicherheit und schließlich Zugehörigkeit entsteht.",
    "Bei der Entwicklung von DeLevel habe ich diese persönliche Perspektive mit didaktischer Konzeption, visueller Gestaltung und digitaler Produktentwicklung verbunden. Im Mittelpunkt stand die Frage, wie Kinder deutsche Schrift nicht als zusätzliche Hürde, sondern als verständlichen und motivierenden Lernweg erleben können.",
    "Die persönliche Entstehungsgeschichte erklärt den Ausgangspunkt des Projekts. DeLevel selbst ist jedoch für eine breitere Nutzung konzipiert: als strukturierte digitale Leseförderung für mehrsprachige Kinder, Familien und Bildungspartner.",
  ],
};

const PAGE_CONTENT = {
  uk: {
    heroTitle: "Партнерство для розвитку й масштабування DeLevel",
    heroParagraphs: [
      "DeLevel — це розроблена освітня система з трьома рівнями навчання, власною методикою, цифровою архітектурою та готовим продуктом. Наступний етап — розвиток, вихід на ринок і масштабування разом із сильним партнером.",
      "Ми відкриті до предметної розмови з інвесторами, видавцями, EdTech-компаніями та освітніми організаціями, які мають ресурси й експертизу для розвитку, ліцензування, інтеграції або дистрибуції продукту.",
    ],
    partnerTitle: "Напрями співпраці",
    partnershipModels: [
      {
        title: "Інвестиційне партнерство",
        text:
          "Для подальшого продуктового розвитку, підготовки до виходу на ринок і побудови сталої моделі масштабування.",
      },
      {
        title: "Видавниче та ліцензійне партнерство",
        text:
          "Для ліцензування й поширення DeLevel через наявні освітні канали, видавничі продукти та професійні мережі.",
      },
      {
        title: "EdTech-інтеграція",
        text:
          "Для включення DeLevel або його окремих рівнів до цифрової освітньої платформи чи партнерського продукту.",
      },
      {
        title: "Мовна локалізація",
        text:
          "Для методично обґрунтованої адаптації системи до інших мов і виходу на нові освітні ринки.",
      },
    ],
    valueTitle: "Що DeLevel приносить у партнерство",
    partnershipValue: [
      {
        title: "Сформована методика",
        text:
          "Послідовний маршрут від букви й звуку до читання складів, слів, словосполучень, речень і ключів німецького читання.",
      },
      {
        title: "Розроблений цифровий продукт",
        text:
          "Три взаємопов’язані рівні, навчальні ігри, система прогресу, нагороди та сюжетне закріплення через мультфільми.",
      },
      {
        title: "Потенціал масштабування",
        text:
          "Велика аудиторія на ринку DACH, кілька моделей використання та можливість подальшої мовної локалізації.",
      },
    ],
    contactTitle: "Обговорити співпрацю",
    contactText:
      "Для запиту на презентацію продукту, обговорення партнерської моделі або наступних кроків зв’яжіться безпосередньо електронною поштою чи через LinkedIn.",
    emailButton: "Написати електронною поштою",
    linkedinButton: "Відкрити LinkedIn",
    backLabel: "← До демо",
  },
  de: {
    heroTitle:
      "Partnerschaft für die Weiterentwicklung und Verbreitung von DeLevel",
    heroParagraphs: [
      "DeLevel – Drachi lernt Lesen ist eine entwickelte digitale Lernarchitektur für Kinder, die Deutsch als Zweit- oder Bildungssprache erwerben und den Übergang zum selbstständigen Lesen bewältigen.",
      "Für die nächste Entwicklungsphase sucht DeLevel Partner aus Bildung, Verlagswesen, EdTech und Förderung, die das Produkt fachlich, strukturell oder finanziell weiterentwickeln und in geeignete Nutzungskontexte bringen können.",
    ],
    partnerTitle: "Formen der Zusammenarbeit",
    partnershipModels: [
      {
        title: "Entwicklungs- und Finanzierungspartnerschaft",
        text:
          "Für die weitere Produktentwicklung, fachliche Evaluation, Markteinführung und den Aufbau einer tragfähigen Skalierungsstruktur.",
      },
      {
        title: "Verlags- und Lizenzpartnerschaft",
        text:
          "Für redaktionelle Weiterentwicklung, Veröffentlichung, Lizenzierung und Verbreitung über etablierte Bildungs- und Vertriebskanäle.",
      },
      {
        title: "EdTech-Integration",
        text:
          "Für die Einbindung von DeLevel oder einzelnen Lernstufen in eine bestehende digitale Bildungsplattform oder ein Partnerprodukt.",
      },
      {
        title: "Bildungs- und Förderprogramme",
        text:
          "Für den Zugang mehrsprachiger Kinder zu strukturierter früher Leseförderung im Rahmen institutioneller oder gemeinnütziger Programme.",
      },
    ],
    valueTitle:
      "Was DeLevel in eine Partnerschaft einbringt",
    partnershipValue: [
      {
        title: "Entwickelte Lernarchitektur",
        text:
          "Drei aufeinander aufbauende Lernstufen, definierte didaktische Abläufe, interaktive Übungen, Fortschrittssystem und motivierende Lernwelten.",
      },
      {
        title: "Eigene Methodik und Inhalte",
        text:
          "Eine kontrollierte Progression vom Laut und Buchstaben über Silben und Wörter bis zu Sätzen und Leseschlüsseln der deutschen Schrift.",
      },
      {
        title: "Klar definierte Zielgruppe",
        text:
          "Kinder mit Migrations- und Mehrsprachigkeitserfahrung, die beim Übergang von der gesprochenen deutschen Sprache zum Lesen Unterstützung benötigen.",
      },
    ],
    contactTitle: "Zusammenarbeit besprechen",
    contactText:
      "Für eine Produktpräsentation, die Besprechung eines geeigneten Partnerschaftsmodells oder weitere Informationen können Sie direkt per E-Mail oder über LinkedIn Kontakt aufnehmen.",
    emailButton: "E-Mail schreiben",
    linkedinButton: "LinkedIn-Profil öffnen",
    backLabel: "← Zur Demo",
  },
  en: {
    heroTitle: "Partnerships for the Next Stage of DeLevel",
    heroParagraphs: [
      "DeLevel is a developed and demonstrable three-level digital literacy system for children moving from spoken German to independent reading. The product includes its own methodology, interactive learning architecture, progress system, visual world, audio and animated reinforcement.",
      "The company is at pre-seed. We are seeking investment and strategic partners who can support product development, formal market validation, commercialisation, distribution and the creation of future language-specific literacy systems.",
    ],
    partnerTitle: "Partnership opportunities",
    partnershipModels: [
      {
        title: "Pre-seed investment and product development",
        text:
          "To build the core team, strengthen measurement and analytics, prepare the product for market entry and establish a scalable operating model.",
      },
      {
        title: "Publishing and licensing",
        text:
          "To develop, publish, license and distribute DeLevel through established educational, family and digital-content channels.",
      },
      {
        title: "EdTech integration",
        text:
          "To integrate DeLevel or selected learning levels into an existing education platform, digital product or partner ecosystem.",
      },
      {
        title: "English literacy pathway",
        text:
          "To co-develop a separately designed early-literacy system for migrant and multilingual children learning to read in English-medium education.",
      },
    ],
    valueTitle: "What DeLevel brings to a partnership",
    partnershipValue: [
      {
        title: "A developed German literacy system",
        text:
          "Three connected learning levels take children from sound and letter recognition through syllables, words, sentences and German orthographic patterns.",
      },
      {
        title: "A reusable product architecture",
        text:
          "The project includes defined instructional flows, game templates, audio standards, progress logic, rewards and a repeatable content-production system.",
      },
      {
        title: "A credible expansion pathway",
        text:
          "Germany and the DACH region provide the first market, while a separately designed English system could address multilingual learners in larger international education markets.",
      },
    ],
    contactTitle: "Discuss a partnership",
    contactText:
      "For a product presentation, an investment discussion or an initial conversation about publishing, licensing, EdTech integration or an English literacy pathway, please contact us by email or LinkedIn.",
    emailButton: "Send an email",
    linkedinButton: "Open LinkedIn profile",
    backLabel: "← Back to the demo",
  },
};

type KontaktyPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function KontaktyPage({
  params,
}: KontaktyPageProps) {
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
        className={styles.partnerSection}
        aria-labelledby="partner-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="partner-title">{content.partnerTitle}</h2>
        </div>

        <div className={styles.partnerGrid}>
          {content.partnershipModels.map((item) => (
            <article
              className={styles.partnerCard}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.valueSection}
        aria-labelledby="value-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="value-title">{content.valueTitle}</h2>
        </div>

        <div className={styles.valueGrid}>
          {content.partnershipValue.map((item) => (
            <article
              className={styles.valueCard}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {locale === "de" ? (
        <section
          className={styles.storySection}
          aria-labelledby="story-title"
        >
          <div className={styles.sectionHeader}>
            <h2 id="story-title">
              {GERMAN_ORIGIN_STORY.title}
            </h2>
          </div>

          <div className={styles.storyCard}>
            {GERMAN_ORIGIN_STORY.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ) : null}

      <section
        className={styles.contactSection}
        aria-labelledby="contact-title"
      >
        <div className={styles.contactText}>
          <h2 id="contact-title">{content.contactTitle}</h2>
          <p>{content.contactText}</p>
        </div>

        <div className={styles.contactArea}>
          <div className={styles.contactList}>
            <a
              className={styles.primaryLink}
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {content.emailButton}
            </a>

            <a
              className={styles.secondaryLink}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              {content.linkedinButton}
            </a>
          </div>

          <a
            className={styles.emailAddress}
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>

      <PageLanguageSwitcher
        locale={locale}
        path="/kontakty"
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