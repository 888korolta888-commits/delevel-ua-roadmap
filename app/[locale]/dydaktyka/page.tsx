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
    heroTitle: "Методика раннього читання німецькою",
    heroParagraphs: [
      "DeLevel поєднує фонематичне сприйняття, упізнавання букв, читання по складах, розуміння слова та засвоєння мовних моделей у послідовному навчальному процесі.",
      "Кожен новий елемент вводиться після підготовчого кроку й спирається на вже знайомі звуки, букви, слова та конструкції. Так складність зростає поступово, а дитина не відчуває перевантаження й навчається у грі.",
    ],
    pathTitle: "Як у DeLevel формується навичка читання",
    pathAria: "Навчальна прогресія",
    learningPath: [
      "Літера",
      "Звук",
      "Склад",
      "Слово",
      "Словосполучення",
      "Речення",
      "Ключі читання",
    ],
    levelsTitle: "Яку навчальну задачу вирішує кожен рівень",
    levels: [
      {
        label: "Рівень 1",
        title: "Добукварна підготовка",
        text:
          "Дитина формує зв’язок між звуком, буквою, словом і образом та готується до переходу від усного мовлення до читання.",
        focus:
          "Методичний фокус — упізнавання букв, слухове виділення початкового звука та співвіднесення звучання з написанням і значенням.",
      },
      {
        label: "Рівень 2",
        title: "Перехід до читання",
        text:
          "Знайомі букви й звуки поєднуються у склади, слова, словосполучення та короткі речення.",
        focus:
          "Методичний фокус — читання по складах, поступовий перехід до цілого слова, розуміння прочитаного та засвоєння перших сталих мовних конструкцій.",
      },
      {
        label: "Рівень 3",
        title: "Ключі читання",
        text:
          "Дитина окремо опановує особливі букви, графеми й буквосполучення німецької мови, написання та звучання яких потребують спеціального впізнавання.",
        focus:
          "Методичний фокус — sch, ch, pf, ei, ie, au, eu, äu, ß та інші елементи, які поступово стають опорами для самостійного читання.",
      },
    ],
    principlesTitle: "Методичні рішення, закладені в DeLevel",
    principles: [
      {
        title: "Контрольована послідовність матеріалу",
        text:
          "Букви, слова й мовні конструкції вводяться у визначеному порядку. Новий матеріал з’являється лише після того, як дитина отримала необхідну основу.",
      },
      {
        title: "Звук, буква й значення",
        text:
          "Дитина не запам’ятовує букву ізольовано: вона чує звук у слові, бачить написання, співвідносить його з образом і виконує зрозумілу дію.",
      },
      {
        title: "Склад як перехід до слова",
        text:
          "Склад стає робочим містком між окремими буквами й цілим словом. Дитина бачить і чує, як знайомі елементи поєднуються під час читання.",
      },
      {
        title: "Накопичувальне читання",
        text:
          "Нові слова й речення будуються переважно з уже пройдених букв, складів і мовних моделей. Кожен наступний крок спирається на попередній.",
      },
      {
        title: "Граматика через мовну дію",
        text:
          "Артиклі, слова und, ist, hat, прості питання й сталі конструкції вводяться через контекст і використання, а не через пояснення абстрактних правил.",
      },
      {
        title: "Підтримка дітей з німецькою як другою мовою",
        text:
          "DeLevel враховує потреби дітей, які вивчають німецьку як другу мову. Аудіо, зображення й ігрова дія підтримують зміст, поки дитина опановує німецьке написання та правила читання.",
      },
    ],
    unitTitle: "Як побудована одна навчальна одиниця",
    unitParagraphs: [
      "Дитина спочатку чує слово або звук, бачить опорний образ і знаходить потрібну букву чи ключ читання. Потім вона виконує дію: вибирає, зіставляє, складає або читає.",
      "Після правильної дії слово з’являється повністю, озвучується та співвідноситься із сюжетом або зображенням. Так сприйняття, дія, читання й розуміння працюють як одна навчальна послідовність.",
    ],
    closingAria: "Коротке резюме",
    closing:
      "DeLevel не відокремлює звук від букви, читання від змісту, а вправу — від навчального маршруту. Кожна дія готує наступний крок і працює на спільний результат: самостійне читання німецькою з розумінням.",
    backLabel: "← До демо",
  },
  de: {
    heroTitle: "Didaktik des frühen Lesens im Deutschen",
    heroParagraphs: [
      "DeLevel – Drachi lernt Lesen verbindet phonologische Bewusstheit, Buchstabenkenntnis, Graphem-Phonem-Zuordnung, Lesen in Silben und sinnbezogenes Lesen in einem aufeinander aufgebauten Lernprozess.",
      "Jeder neue Lernschritt setzt auf bereits bekannten Lauten, Buchstaben, Wörtern und Sprachmustern auf. So steigt die Komplexität kontrolliert, während Hören, Schrift, Bild und Handlung miteinander verbunden bleiben.",
    ],
    pathTitle:
      "Wie sich die Lesefähigkeit schrittweise entwickelt",
    pathAria: "Lernprogression",
    learningPath: [
      "Buchstabe",
      "Laut",
      "Silbe",
      "Wort",
      "Wortgruppe",
      "Satz",
      "Leseschlüssel",
    ],
    levelsTitle:
      "Welche didaktische Aufgabe jede Stufe übernimmt",
    levels: [
      {
        label: "Stufe 1",
        title: "Vorbereitung auf das Lesen",
        text:
          "Das Kind erkennt Buchstabenformen, hört Laute und Anlaute in Wörtern und verbindet Schrift, Klang, Bild und Bedeutung.",
        focus:
          "Didaktischer Schwerpunkt sind phonologische Bewusstheit, visuelle Buchstabenerkennung und der Aufbau stabiler Laut-Buchstaben-Zuordnungen.",
      },
      {
        label: "Stufe 2",
        title: "Aufbau der Lesefähigkeit",
        text:
          "Bekannte Buchstaben werden zu Silben verbunden. Aus Silben entstehen Wörter, Wortgruppen und kurze verständliche Sätze.",
        focus:
          "Didaktischer Schwerpunkt sind Lesesynthese, Silbengliederung, Worterkennung, Sinnentnahme und erste grammatische Sprachmuster.",
      },
      {
        label: "Stufe 3",
        title: "Leseschlüssel der deutschen Schrift",
        text:
          "Das Kind erschließt Buchstaben, Grapheme und Buchstabenverbindungen, deren Schreibung und Aussprache gezielt erkannt und geübt werden müssen.",
        focus:
          "Didaktischer Schwerpunkt sind Muster wie sch, ch, pf, ei, ie, au, eu, äu und ß, die zu verlässlichen Orientierungshilfen beim Lesen werden.",
      },
    ],
    principlesTitle:
      "Didaktische Prinzipien der Lernarchitektur",
    principles: [
      {
        title: "Kontrollierte Progression",
        text:
          "Buchstaben, Wörter und Sprachmuster werden in einer definierten Reihenfolge eingeführt. Neue Anforderungen setzen auf bereits gesicherten Lernschritten auf.",
      },
      {
        title: "Laut, Schrift und Bedeutung",
        text:
          "Buchstaben werden nicht isoliert gelernt. Das Kind hört den Laut im Wort, erkennt die Schriftform, sieht eine Bedeutung und führt eine passende Handlung aus.",
      },
      {
        title: "Lesesynthese über Silben",
        text:
          "Die Silbe bildet die Brücke zwischen einzelnen Lauten und dem vollständigen Wort. Das Kind erlebt, wie bekannte Elemente hörbar und sichtbar zusammenfinden.",
      },
      {
        title: "Kumulativer Lernaufbau",
        text:
          "Neue Wörter und Sätze bestehen überwiegend aus bereits bekannten Buchstaben, Silben und Sprachmustern. Der aktive Lernbestand wächst schrittweise weiter.",
      },
      {
        title: "Grammatik über Sprachmuster",
        text:
          "Artikel, Funktionswörter, einfache Fragen und häufige Konstruktionen werden im sprachlichen Gebrauch vermittelt, nicht als abstrakte Regelblöcke.",
      },
      {
        title: "DaZ- und mehrsprachigkeitssensibel",
        text:
          "Für Kinder mit Deutsch als Zweitsprache stützen Audio, Bild und Spielhandlung das Verstehen, während deutsche Schrift- und Lesemuster systematisch aufgebaut werden.",
      },
    ],
    unitTitle: "Wie eine typische Lerneinheit aufgebaut ist",
    unitParagraphs: [
      "Eine Lerneinheit beginnt mit einem Laut, einem Wort oder einem visuellen Impuls. Das Kind hört, erkennt und ordnet zu. Anschließend wählt, verbindet, ergänzt oder liest es die gesuchte sprachliche Einheit.",
      "Auf die richtige Handlung folgt die vollständige Darstellung des Wortes oder Satzes mit Aussprache, Bild oder kurzer Handlung. So werden Wahrnehmung, aktive Entscheidung, Lesen und Verstehen in einer zusammenhängenden Lernsequenz verbunden.",
    ],
    closingAria: "Kurzfassung",
    closing:
      "DeLevel trennt Laut, Schrift und Bedeutung nicht voneinander. Einzelne Übungen sind Teil eines kontrollierten Lernwegs, in dem jede Handlung den nächsten Schritt vorbereitet und zum selbstständigen Lesen mit Verständnis führt.",
    backLabel: "← Zur Demo",
  },
  en: {
    heroTitle: "Methodology for Early German Literacy",
    heroParagraphs: [
      "DeLevel combines phonological awareness, letter knowledge, grapheme–phoneme correspondence, syllable-based decoding and meaningful reading within one cumulative learning process.",
      "Each new step builds on sounds, letters, words and language patterns that the child has already encountered. Complexity increases gradually while listening, print, imagery and interaction remain connected.",
    ],
    pathTitle: "How reading skills develop step by step",
    pathAria: "Literacy learning progression",
    learningPath: [
      "Letter",
      "Sound",
      "Syllable",
      "Word",
      "Phrase",
      "Sentence",
      "Reading keys",
    ],
    levelsTitle: "The instructional role of each level",
    levels: [
      {
        label: "Level 1",
        title: "Preparing for Reading",
        text:
          "Children recognise letter forms, hear sounds and initial sounds in words and connect print, sound, image and meaning.",
        focus:
          "The instructional focus is phonological awareness, visual letter recognition and stable sound–letter correspondences.",
      },
      {
        label: "Level 2",
        title: "Building Reading Skills",
        text:
          "Familiar letters and sounds are blended into syllables. Syllables develop into words, phrases and short meaningful sentences.",
        focus:
          "The instructional focus is blending, syllable segmentation, word recognition, comprehension and recurring grammatical language patterns.",
      },
      {
        label: "Level 3",
        title: "German Reading Keys",
        text:
          "Children learn letters, graphemes and letter combinations whose spelling and pronunciation require targeted recognition and practice.",
        focus:
          "The instructional focus is on patterns such as sch, ch, pf, ei, ie, au, eu, äu and ß, which become reliable cues for independent reading.",
      },
    ],
    principlesTitle: "Principles embedded in the learning architecture",
    principles: [
      {
        title: "Controlled progression",
        text:
          "Letters, words and language patterns are introduced in a defined sequence. New demands build on learning steps that have already been secured.",
      },
      {
        title: "Sound, print and meaning",
        text:
          "Letters are not learned in isolation. Children hear a sound in a word, recognise its written form, connect it with meaning and complete a purposeful action.",
      },
      {
        title: "Blending through syllables",
        text:
          "The syllable acts as a practical bridge between individual sounds and the complete word. Children see and hear how familiar elements combine during reading.",
      },
      {
        title: "Cumulative learning",
        text:
          "New words and sentences are built mainly from previously introduced letters, syllables and language patterns. The active reading repertoire grows step by step.",
      },
      {
        title: "Grammar through language patterns",
        text:
          "Articles, function words, simple questions and frequent constructions are learned through meaningful use rather than abstract rule explanations.",
      },
      {
        title: "Designed for multilingual learners",
        text:
          "Audio, images and interaction support comprehension while children build the written-language patterns of German as an additional or educational language.",
      },
    ],
    unitTitle: "How a typical learning unit is structured",
    unitParagraphs: [
      "A learning unit begins with a sound, word or visual prompt. The child listens, recognises and matches. The next action may involve selecting, blending, completing or reading the target unit.",
      "After the correct action, the complete word or sentence appears together with pronunciation, an image or a short narrative action. Perception, active choice, reading and comprehension therefore operate as one connected learning sequence.",
    ],
    closingAria: "Summary",
    closing:
      "DeLevel does not separate sound from print or reading from meaning. Each activity belongs to a controlled literacy pathway in which one action prepares the next and supports independent reading with understanding.",
    backLabel: "← Back to the demo",
  },
};

type DydaktykaPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function DydaktykaPage({
  params,
}: DydaktykaPageProps) {
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
        className={styles.pathSection}
        aria-labelledby="path-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="path-title">{content.pathTitle}</h2>
        </div>

        <div
          className={styles.pathChain}
          aria-label={content.pathAria}
        >
          {content.learningPath.map((item, index) => (
            <div className={styles.pathItem} key={item}>
              <span>{item}</span>

              {index < content.learningPath.length - 1 ? (
                <span
                  className={styles.pathArrow}
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section
        className={styles.levelSection}
        aria-labelledby="levels-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="levels-title">{content.levelsTitle}</h2>
        </div>

        <div className={styles.levelGrid}>
          {content.levels.map((level) => (
            <article
              className={styles.levelCard}
              key={level.title}
            >
              <span className={styles.levelLabel}>
                {level.label}
              </span>

              <h3>{level.title}</h3>
              <p>{level.text}</p>

              <p className={styles.levelFocus}>
                {level.focus}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.principlesSection}
        aria-labelledby="principles-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="principles-title">
            {content.principlesTitle}
          </h2>
        </div>

        <div className={styles.principlesGrid}>
          {content.principles.map((principle) => (
            <article
              className={styles.principleCard}
              key={principle.title}
            >
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.orientationSection}>
        <div>
          <h2>{content.unitTitle}</h2>
        </div>

        {content.unitParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section
        className={styles.closingSection}
        aria-label={content.closingAria}
      >
        <p>{content.closing}</p>
      </section>

      <PageLanguageSwitcher
        locale={locale}
        path="/dydaktyka"
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