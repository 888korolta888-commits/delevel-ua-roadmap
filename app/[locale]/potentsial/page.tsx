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
      "DeLevel має потенціал зростати разом із великою багатомовною аудиторією",
    heroParagraphs: [
      "У Німеччині, Австрії та Швейцарії (ринок DACH) живуть сотні тисяч дітей, для яких німецька є другою мовою або мовою освіти. Для багатьох із них перехід від усного мовлення до читання потребує окремої, послідовної підтримки.",
      "DeLevel відповідає на цю потребу готовою навчальною системою, яку можна використовувати вдома, у приватній освіті, у мовних центрах і в цифрових продуктах.",
    ],
    heroCardLabel: "Німецькомовний ринок DACH",
    heroCardTitle: "Сотні тисяч дітей",
    heroCardText:
      "Велику аудиторію об’єднує спільна освітня потреба: допомогти дитині пов’язати знайоме німецьке мовлення з буквами, правилами читання та письмовим словом.",
    sourceNote:
      "Офіційні статистичні дані Німеччини, Австрії та Швейцарії, 2024.",
    needTitle: "На чому тримається потенціал DeLevel",
    needItems: [
      {
        title: "Стабільна освітня потреба",
        text:
          "Кожне нове покоління дітей, які входять у німецькомовну освіту, потребує переходу від усного мовлення до читання. Це не разовий запит, а постійна навчальна потреба.",
      },
      {
        title: "Кілька каналів використання",
        text:
          "Один продукт може працювати для родини, педагога, приватного центру, мовної школи та цифрової платформи — у різних форматах доступу й використання.",
      },
      {
        title: "Продуктова система, а не один курс",
        text:
          "Три пов’язані рівні, єдина логіка прогресу, нагород і сюжетного закріплення створюють основу для послідовного розширення навчального контенту.",
      },
    ],
    businessTitle: "Можливі моделі використання",
    businessModels: [
      {
        title: "Домашній доступ",
        text:
          "Родини можуть проходити повний маршрут DeLevel або використовувати окремі рівні для регулярної підтримки читання вдома.",
      },
      {
        title: "Освітні ліцензії",
        text:
          "Приватні школи, освітні центри та мовні курси можуть використовувати DeLevel як готовий цифровий модуль для раннього читання.",
      },
      {
        title: "Видавничі та EdTech-партнерства",
        text:
          "За чітко визначених прав і умов співпраці DeLevel може розвиватися через видавців, EdTech-компанії, інтеграцію, дистрибуцію та локалізацію.",
      },
    ],
    scalingTitle: "Що можна розширювати",
    scalingParagraphs: [
      "У DeLevel уже сформовано навчальну архітектуру: три рівні, ігрові шаблони, система прогресу, нагороди та сюжетне закріплення через мультфільми.",
      "Нові модулі можна додавати до цієї системи без перебудови базового маршруту. Для виходу на інші мовні ринки продукт потребуватиме окремої методичної та мовної локалізації.",
    ],
    scalingAria: "Напрями розвитку",
    scalingItems: [
      "Тематичні набори слів",
      "Додаткові ключі читання",
      "Нові мовні моделі",
      "Розширена система прогресу",
      "Мультсерії",
      "Інші мови",
    ],
    closing:
      "DeLevel може зростати через новий навчальний контент, домашній доступ, освітні ліцензії, партнерські продукти та вихід на інші мовні ринки — на основі вже створеної системи.",
    backLabel: "← До демо",
  },
  de: {
    heroTitle:
      "Ein skalierbares Lernprodukt für mehrsprachige Kinder",
    heroParagraphs: [
      "In Deutschland, Österreich und der Schweiz leben Hunderttausende Kinder, für die Deutsch Zweit- oder Bildungssprache ist. Viele von ihnen verstehen und sprechen bereits Deutsch, benötigen jedoch gezielte Unterstützung beim Übergang zur deutschen Schrift und zum selbstständigen Lesen.",
      "DeLevel – Drachi lernt Lesen wurde vorrangig für Kinder mit Migrations- und Mehrsprachigkeitserfahrung entwickelt. Als ergänzendes digitales Lernangebot kann es in Familien, Förderangeboten und Bildungsprogrammen eingesetzt werden. Auch deutschsprachige Kinder können von der klaren Lernprogression profitieren.",
    ],
    heroCardLabel: "Bildungs- und Skalierungspotenzial",
    heroCardTitle: "Eine große, wiederkehrende Zielgruppe",
    heroCardText:
      "Jedes Jahr beginnen neue Kinder ihren Bildungsweg im deutschsprachigen Raum. Der Bedarf an einem strukturierten Übergang von der gesprochenen Sprache zum Lesen besteht damit dauerhaft und unabhängig von einzelnen Migrationsbewegungen.",
    sourceNote: "",
    needTitle: "Welchen Bildungsbedarf DeLevel adressiert",
    needItems: [
      {
        title: "Vom mündlichen Deutsch zum Lesen",
        text:
          "Viele Kinder verstehen und sprechen bereits Deutsch. Die Verbindung zwischen vertrauter Sprache, deutschen Buchstaben und den Regeln des Lesens müssen sie jedoch gezielt aufbauen.",
      },
      {
        title: "Mehrsprachige Lernbiografien",
        text:
          "Kinder bringen unterschiedliche Erstsprachen, Schriftsysteme und Leseerfahrungen mit. Sie benötigen einen klar aufgebauten Zugang zur deutschen Schrift, der diese Ausgangslage berücksichtigt.",
      },
      {
        title: "Ergänzung bestehender Bildungsangebote",
        text:
          "Familien, Fachkräfte und Bildungsträger erhalten einen strukturierten digitalen Lernweg, der bestehende Förderung ergänzt und in unterschiedliche Lernkontexte eingebunden werden kann.",
      },
    ],
    businessTitle: "Einsatz- und Partnerschaftsmodelle",
    businessModels: [
      {
        title: "Nutzung in Familien",
        text:
          "Familien können den vollständigen Lernweg oder einzelne Level nutzen, um Kinder regelmäßig und im eigenen Tempo beim Lesenlernen zu begleiten.",
      },
      {
        title: "Bildungslizenzen und Förderprogramme",
        text:
          "Sprachschulen, Bildungszentren, Stiftungen und weitere Träger können DeLevel als ergänzendes digitales Modul einsetzen oder den Zugang für mehrsprachige Kinder finanzieren.",
      },
      {
        title: "EdTech-, Verlags- und Lizenzpartnerschaften",
        text:
          "Das Produkt kann über digitale Plattformen, Verlage, Lizenzmodelle und institutionelle Vertriebskanäle weiterentwickelt und verbreitet werden.",
      },
    ],
    scalingTitle:
      "Eine Architektur für langfristige Produktentwicklung",
    scalingParagraphs: [
      "Die bestehende Lernarchitektur verbindet drei aufeinander aufbauende Level, definierte didaktische Abläufe, ein Fortschrittssystem, Belohnungen und kurze Animationssequenzen.",
      "Neue Lerninhalte können in diese Struktur integriert werden, ohne den grundlegenden Lernweg neu aufzubauen. Eine Übertragung auf weitere Sprachen ist nach einer eigenständigen sprachlichen und didaktischen Anpassung möglich.",
    ],
    scalingAria: "Bereiche der Produktentwicklung",
    scalingItems: [
      "Thematische Wortfelder",
      "Weitere Leseschlüssel",
      "Neue Sprachmuster",
      "Erweiterte Fortschrittslogik",
      "Animationsreihen",
      "Weitere Sprachen",
    ],
    closing:
      "DeLevel verbindet eine klar definierte Zielgruppe, eine entwickelte Lernarchitektur und mehrere Wege zur institutionellen und wirtschaftlichen Skalierung. So entsteht ein digitales Bildungsprodukt mit fachlicher Grundlage, gesellschaftlicher Relevanz und langfristigem Entwicklungspotenzial.",
    backLabel: "← Zur Demo",
  },
  en: {
    heroTitle:
      "A scalable early-literacy system for multilingual children",
    heroParagraphs: [
      "DeLevel’s first complete product addresses the transition from spoken German to independent reading for children aged 4–8 in the DACH market.",
      "The broader opportunity is to build language-specific literacy systems for multilingual education markets. A separately designed English pathway could support migrant and multilingual children who already understand or speak English but need structured help learning to read it.",
    ],
    heroCardLabel: "Platform opportunity",
    heroCardTitle: "German first. English as a separate next pathway.",
    heroCardText:
      "The English version would not be a translation of the German product. It would require its own phonics sequence, vocabulary, sound patterns, irregular words, audio and instructional content.",
    sourceNote: "",
    needTitle: "Why the opportunity extends beyond one language",
    needItems: [
      {
        title: "A recurring literacy transition",
        text:
          "Every year, multilingual children enter education systems in a language they may already understand orally but cannot yet read independently.",
      },
      {
        title: "An underserved learning gap",
        text:
          "General language-learning apps and broad preschool platforms do not always provide a complete, cumulative bridge from spoken proficiency to literacy.",
      },
      {
        title: "A reusable production architecture",
        text:
          "DeLevel has already established learning stages, game templates, progress logic, rewards, audio flows and content-production standards that can support new language-specific systems.",
      },
    ],
    businessTitle: "Commercial and partnership models",
    businessModels: [
      {
        title: "Family access",
        text:
          "Families can use the complete learning pathway or individual levels for regular literacy support at home.",
      },
      {
        title: "Educational licences and access programmes",
        text:
          "Learning providers, foundations and community programmes can license the product or fund access for multilingual children.",
      },
      {
        title: "Publishing, EdTech and licensing partnerships",
        text:
          "The system can be developed and distributed through publishers, digital platforms, licensing agreements and strategic product partnerships.",
      },
    ],
    scalingTitle:
      "From one German product to language-specific literacy systems",
    scalingParagraphs: [
      "The existing architecture combines three connected learning levels, defined instructional flows, reusable game patterns, progress tracking, rewards and animated reinforcement.",
      "An English literacy pathway could be developed on the same product foundation, but its pedagogy would be designed separately around English phonics, blending, digraphs, vowel patterns, high-frequency irregular words and reading comprehension.",
    ],
    scalingAria: "Areas of future development",
    scalingItems: [
      "English phonics pathway",
      "Language-specific content",
      "Additional reading patterns",
      "Progress analytics",
      "Animated learning series",
      "New education markets",
    ],
    closing:
      "DeLevel combines a developed German literacy product with a reusable product and content-production architecture. This creates a credible path from a focused DACH solution to separately designed literacy systems for multilingual children in English-speaking and other education markets.",
    backLabel: "← Back to the demo",
  },
};

type PotentsialPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function PotentsialPage({
  params,
}: PotentsialPageProps) {
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

        <aside className={styles.heroCard}>
          <span className={styles.cardLabel}>
            {content.heroCardLabel}
          </span>

          <strong>{content.heroCardTitle}</strong>

          <p>{content.heroCardText}</p>

          {content.sourceNote ? (
            <small className={styles.sourceNote}>
              {content.sourceNote}
            </small>
          ) : null}
        </aside>
      </section>

      <section
        className={styles.needSection}
        aria-labelledby="potential-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="potential-title">{content.needTitle}</h2>
        </div>

        <div className={styles.needGrid}>
          {content.needItems.map((item) => (
            <article
              className={styles.needCard}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.businessSection}
        aria-labelledby="business-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="business-title">
            {content.businessTitle}
          </h2>
        </div>

        <div className={styles.businessGrid}>
          {content.businessModels.map((item) => (
            <article
              className={styles.businessCard}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.scalingSection}
        aria-labelledby="scaling-title"
      >
        <div className={styles.scalingText}>
          <h2 id="scaling-title">{content.scalingTitle}</h2>

          {content.scalingParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div
          className={styles.scalingChips}
          aria-label={content.scalingAria}
        >
          {content.scalingItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className={styles.closingSection}>
        <p>{content.closing}</p>
      </section>

      <PageLanguageSwitcher
        locale={locale}
        path="/potentsial"
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