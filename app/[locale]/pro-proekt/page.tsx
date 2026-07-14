/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import {
  use,
  useEffect,
  useState,
} from "react";
import PageLanguageSwitcher from "../../_components/PageLanguageSwitcher";
import {
  isActiveLocale,
  localizedPath,
  type ActiveLocale,
} from "../../_lib/locales";
import styles from "./page.module.css";

type ProjectPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type Slide = {
  src: string;
  title: string;
  alt: string;
};

type LevelId = "level-1" | "level-2" | "level-3";

type LevelSection = {
  id: LevelId;
  title: string;
  subtitle: string;
  description: string;
  slides: Slide[];
};

type ProjectPageContent = {
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  routeItems: {
    title: string;
    text: string;
  }[];
  systemTitle: string;
  systemText: string;
  systemSlides: Slide[];
  levelsTitle: string;
  levelsText: string;
  levelSections: LevelSection[];
  finalTitle: string;
  finalText: string;
  finalSlide: Slide;
  backLabel: string;
  previousSlide: string;
  nextSlide: string;
  openSlide: string;
  closeSlide: string;
};

type SliderProps = {
  slides: Slide[];
  currentIndex: number;
  previousLabel: string;
  nextLabel: string;
  openLabel: string;
  onPrevious: () => void;
  onNext: () => void;
  onOpen: (slide: Slide) => void;
};

function slidePath(
  locale: ActiveLocale,
  filename: string,
): string {
  return `/presentation/${locale}/${filename}`;
}

const PAGE_CONTENT = {
  uk: {
    eyebrow: "Навчальна система DeLevel",
    heroTitle: "Як працює DeLevel",
    heroText:
      "DeLevel — це цілісна цифрова система навчання читання для дітей 4–8 років, які опановують німецьку мову в багатомовному середовищі. Три послідовні рівні ведуть дитину від сприйняття звуків і впізнавання букв до читання слів, речень та характерних моделей німецького письма.",
    routeItems: [
      {
        title: "Buchstabenwald",
        text: "Почути й упізнати",
      },
      {
        title: "Wortdorf",
        text: "Скласти й прочитати",
      },
      {
        title: "Zauberschlüssel",
        text: "Опанувати ключі читання",
      },
    ],
    systemTitle: "Єдина пов’язана система навчання",
    systemText:
      "Три рівні DeLevel — це не окремі набори ігор. Кожен рівень виконує власне навчальне завдання й готує перехід до наступного. Дитина рухається зрозумілим і повторюваним маршрутом, а дорослий може бачити навчальну мету, методичну структуру та помітний результат кожної дії.",
    systemSlides: [
      {
        src: slidePath("uk", "01-system.webp"),
        title: "DeLevel. Шлях до читання німецькою",
        alt:
          "DeLevel для дітей, які вивчають німецьку як другу мову",
      },
      {
        src: slidePath("uk", "02-system.webp"),
        title: "Один маршрут — три рівні навчання",
        alt:
          "Три пов’язані рівні DeLevel від звуків і букв до моделей німецького читання",
      },
      {
        src: slidePath("uk", "03-child-journey.webp"),
        title: "Прогрес перетворюється на творчий цикл",
        alt:
          "Дитина досліджує карту букви, проходить ігри, отримує наліпку, створює мультфільм і зберігає його в Кіно",
      },
      {
        src: slidePath("uk", "04-information-layers.webp"),
        title: "Два інформаційні рівні",
        alt:
          "Дитина бачить гру, а дорослий може бачити навчальну мету, методику та прогрес",
      },
    ],
    levelsTitle: "Три рівні розвитку читання",
    levelsText:
      "Відкрийте кожен рівень, щоб побачити його навчальне завдання, послідовність і систему ігор.",
    levelSections: [
      {
        id: "level-1",
        title: "Рівень 1 · Buchstabenwald",
        subtitle: "Підготовка до читання",
        description:
          "Перший рівень формує основу читання ще до того, як дитина починає розшифровувати цілі слова. Візуальні та слухові ігри поєднують звуки, форми букв, образи й осмислені дії. Знайомі принципи взаємодії повторюються для всього алфавіту, а складність розрізнення та навантаження на пам’ять поступово зростають.",
        slides: [
          {
            src: slidePath(
              "uk",
              "05-level-1-reproducible-design.webp",
            ),
            title: "Відтворювана система ігор",
            alt:
              "Відтворювана система першого рівня для всього алфавіту з візуальними та слуховими циклами",
          },
          {
            src: slidePath(
              "uk",
              "06-level-1-buchstabenwald.webp",
            ),
            title: "Дві лінії ігор готують дитину до читання",
            alt:
              "ABC-ігри розвивають візуальне впізнавання букв, а слухові ігри — фонологічне сприйняття",
          },
          {
            src: slidePath(
              "uk",
              "07-level-1-listening-templates.webp",
            ),
            title: "Шаблони слухових ігор",
            alt:
              "Шаблони слухових ігор на початкові звуки, пропущений початок, склади, класифікацію та позицію звука",
          },
        ],
      },
      {
        id: "level-2",
        title: "Рівень 2 · Wortdorf",
        subtitle: "Формування навички читання",
        description:
          "Другий рівень перетворює декодування на осмислене читання. Дитина поєднує знайомі звуки у склади, складає й читає слова, а потім переходить до словосполучень і речень. Граматика вводиться через сталі мовні моделі, а слухові завдання й надалі розвивають точність фонематичного розрізнення та вибору графеми.",
        slides: [
          {
            src: slidePath(
              "uk",
              "08-level-2-wortdorf.webp",
            ),
            title: "Ігри перетворюють декодування на читання",
            alt:
              "Розвиток другого рівня від звука й складу до слова, речення та змісту",
          },
          {
            src: slidePath(
              "uk",
              "09-level-2-cumulative-design.webp",
            ),
            title: "Одна послідовність — шість етапів",
            alt:
              "Накопичувальна послідовність від сприйняття звука до складів, слів, граматики, фонематичної точності та складних слів",
          },
          {
            src: slidePath(
              "uk",
              "10-level-2-grammar-progression.webp",
            ),
            title: "Граматика зростає через ігрові моделі",
            alt:
              "Граматична прогресія від поєднання слів до речень, описів, дій і запитань",
          },
          {
            src: slidePath(
              "uk",
              "11-level-2-grammar-families.webp",
            ),
            title: "Сталі мовні рамки поступово розширюються",
            alt:
              "Сімейства граматичних ігор з моделями ist, об’єктами, запитаннями та позначенням місця",
          },
          {
            src: slidePath(
              "uk",
              "12-level-2-phonemic-development.webp",
            ),
            title: "Слухове сприйняття стає точнішим",
            alt:
              "Фонематичний розвиток через класифікацію звуків, близькі контрасти, вибір графеми та читання",
          },
        ],
      },
      {
        id: "level-3",
        title: "Рівень 3 · Zauberschlüssel",
        subtitle: "Німецькі ключі читання",
        description:
          "Третій рівень вводить поширені німецькі графеми та буквосполучення як цілісні одиниці читання. Кожен ключ дитина чує, складає, знаходить у словах і застосовує під час осмисленого читання. Три навчальні будинки впорядковують сполучення приголосних, голосних і особливі букви.",
        slides: [
          {
            src: slidePath(
              "uk",
              "13-level-3-zauberschluessel.webp",
            ),
            title: "Моделі читання стають ключами",
            alt:
              "Третій рівень вводить німецькі графеми й буквосполучення як цілісні ключі читання",
          },
          {
            src: slidePath(
              "uk",
              "14-level-3-key-houses.webp",
            ),
            title: "Три будинки впорядковують ключі",
            alt:
              "Mitlaut-Haus, Klingerhaus і Sonderhaus впорядковують сполучення приголосних, голосних та особливі букви",
          },
          {
            src: slidePath(
              "uk",
              "15-level-3-complete-key.webp",
            ),
            title: "Повний маршрут одного ключа",
            alt:
              "Повний навчальний маршрут ключа sch від знайомства й складання до впізнавання, читання та розуміння",
          },
        ],
      },
    ],
    finalTitle: "Одна система — три навчальні світи",
    finalText:
      "DeLevel поєднує підготовку до читання, формування навички декодування й розуміння та впізнавання характерних моделей німецького письма в одному безперервному маршруті. Навчальне завдання ускладнюється, але взаємодія залишається знайомою й послідовною.",
    finalSlide: {
      src: slidePath(
        "uk",
        "16-one-system-three-worlds.webp",
      ),
      title: "Одна система читання. Три світи.",
      alt:
        "DeLevel як казковий світ для дитини, безперервний навчальний шлях і відтворювана система розробки",
    },
    backLabel: "← До демо",
    previousSlide: "Попередній слайд",
    nextSlide: "Наступний слайд",
    openSlide: "Відкрити слайд у повному розмірі",
    closeSlide: "Закрити слайд",
  },

  de: {
    eyebrow: "Das DeLevel-Lernsystem",
    heroTitle: "Wie DeLevel funktioniert",
    heroText:
      "DeLevel ist ein zusammenhängendes digitales Leselernsystem für Kinder von 4 bis 8 Jahren, die in einem mehrsprachigen Umfeld Deutsch lesen lernen. Drei aufeinander aufbauende Stufen führen vom Hören und Erkennen von Lauten und Buchstaben über Wörter und Sätze bis zu typischen Mustern der deutschen Schrift.",
    routeItems: [
      {
        title: "Buchstabenwald",
        text: "Hören und erkennen",
      },
      {
        title: "Wortdorf",
        text: "Bilden und lesen",
      },
      {
        title: "Zauberschlüssel",
        text: "Lesemuster erkennen",
      },
    ],
    systemTitle: "Ein zusammenhängendes Lernsystem",
    systemText:
      "Die drei Stufen sind keine voneinander getrennten Spielsammlungen. Jede Stufe erfüllt eine eigene didaktische Aufgabe und bereitet die nächste systematisch vor. Das Kind erlebt einen klaren und wiederholbaren Lernweg, während Erwachsene Lernziel, methodische Struktur und sichtbaren Fortschritt nachvollziehen können.",
    systemSlides: [
      {
        src: slidePath("de", "01-system.webp"),
        title: "DeLevel. Ein Weg zum Lesen auf Deutsch",
        alt:
          "DeLevel für Kinder, die Deutsch als Zweitsprache lernen",
      },
      {
        src: slidePath("de", "02-system.webp"),
        title: "Ein Lernweg — drei aufeinander aufbauende Stufen",
        alt:
          "Drei verbundene DeLevel-Stufen vom Laut und Buchstaben bis zu deutschen Lesemustern",
      },
      {
        src: slidePath("de", "03-child-journey.webp"),
        title: "Fortschritt wird zu einem kreativen Kreislauf",
        alt:
          "Das Kind erkundet eine Buchstabenkarte, löst Spiele, erhält einen Sticker, erstellt einen Kurzfilm und speichert ihn im Kino",
      },
      {
        src: slidePath("de", "04-information-layers.webp"),
        title: "Zwei Informationsebenen",
        alt:
          "Das Kind sieht ein Spiel, während Erwachsene Lernziel, Methode und Fortschritt sehen können",
      },
    ],
    levelsTitle: "Drei Stufen der Leseentwicklung",
    levelsText:
      "Öffnen Sie jede Stufe, um ihre Lernaufgabe, Progression und Spielarchitektur kennenzulernen.",
    levelSections: [
      {
        id: "level-1",
        title: "Stufe 1 · Buchstabenwald",
        subtitle: "Vorbereitung auf das Lesen",
        description:
          "Stufe 1 entwickelt die Grundlagen des Lesens, bevor Kinder vollständige Wörter entschlüsseln sollen. Visuelle Spiele und Hörspiele verbinden Laute, Buchstabenformen, Bilder und sinnvolle Handlungen. Vertraute Interaktionsmuster werden für das gesamte Alphabet wiederverwendet, während Wahrnehmungsunterschiede und Gedächtnisanforderungen schrittweise zunehmen.",
        slides: [
          {
            src: slidePath(
              "de",
              "05-level-1-reproducible-design.webp",
            ),
            title: "Ein reproduzierbares Spielsystem",
            alt:
              "Reproduzierbares Design der ersten Stufe für das gesamte Alphabet mit visuellen und auditiven Spielzyklen",
          },
          {
            src: slidePath(
              "de",
              "06-level-1-buchstabenwald.webp",
            ),
            title: "Zwei Spiellinien bereiten auf das Lesen vor",
            alt:
              "ABC-Spiele fördern die visuelle Buchstabenerkennung und Hörspiele die phonologische Bewusstheit",
          },
          {
            src: slidePath(
              "de",
              "07-level-1-listening-templates.webp",
            ),
            title: "Vorlagen für Hörspiele",
            alt:
              "Hörspielvorlagen zu Anlauten, fehlenden Wortanfängen, Silben, Klassifikation und Lautposition",
          },
        ],
      },
      {
        id: "level-2",
        title: "Stufe 2 · Wortdorf",
        subtitle: "Aufbau der Lesefähigkeit",
        description:
          "Stufe 2 macht aus dem Dekodieren sinnbezogenes Lesen. Kinder verbinden vertraute Laute zu Silben, bilden und lesen Wörter und gehen schrittweise zu Wortgruppen und Sätzen über. Grammatik wird über stabile Sprachmuster eingeführt, während Hörübungen die phonematische Unterscheidung und die Wahl der passenden Grapheme weiter präzisieren.",
        slides: [
          {
            src: slidePath(
              "de",
              "08-level-2-wortdorf.webp",
            ),
            title: "Spiele machen Dekodieren zu sinnvollem Lesen",
            alt:
              "Progression der zweiten Stufe von Laut und Silbe zu Wörtern, Satzmustern und Bedeutung",
          },
          {
            src: slidePath(
              "de",
              "09-level-2-cumulative-design.webp",
            ),
            title: "Eine Abfolge — sechs Lernphasen",
            alt:
              "Kumulative Abfolge vom Hören eines Lautes über Silben, Wörter und Grammatik bis zu phonematischer Präzision und Komposita",
          },
          {
            src: slidePath(
              "de",
              "10-level-2-grammar-progression.webp",
            ),
            title: "Grammatik wächst durch spielbare Muster",
            alt:
              "Grammatische Progression vom Verbinden einzelner Wörter zu Sätzen, Beschreibungen, Handlungen und Fragen",
          },
          {
            src: slidePath(
              "de",
              "11-level-2-grammar-families.webp",
            ),
            title: "Stabile Sprachrahmen werden schrittweise erweitert",
            alt:
              "Familien von Grammatikspielen mit ist-Konstruktionen, Objekten, Fragen und Ortsangaben",
          },
          {
            src: slidePath(
              "de",
              "12-level-2-phonemic-development.webp",
            ),
            title: "Das Hören wird zunehmend präziser",
            alt:
              "Phonematische Entwicklung durch Lautklassifikation, enge Kontraste, Graphemwahl und Lesen",
          },
        ],
      },
      {
        id: "level-3",
        title: "Stufe 3 · Zauberschlüssel",
        subtitle: "Leseschlüssel der deutschen Schrift",
        description:
          "Stufe 3 führt häufige deutsche Grapheme und Buchstabenverbindungen als vollständige lesbare Einheiten ein. Jeder Leseschlüssel wird gehört, zusammengesetzt, in Wörtern gefunden und beim sinnbezogenen Lesen angewendet. Drei Lernhäuser ordnen Konsonantenblöcke, Vokalverbindungen und besondere Buchstaben.",
        slides: [
          {
            src: slidePath(
              "de",
              "13-level-3-zauberschluessel.webp",
            ),
            title: "Lesemuster werden zu Schlüsseln",
            alt:
              "Die dritte Stufe führt deutsche Grapheme und Buchstabenverbindungen als vollständige Leseschlüssel ein",
          },
          {
            src: slidePath(
              "de",
              "14-level-3-key-houses.webp",
            ),
            title: "Drei Häuser ordnen die Leseschlüssel",
            alt:
              "Mitlaut-Haus, Klingerhaus und Sonderhaus ordnen Konsonantenblöcke, Vokalverbindungen und besondere Buchstaben",
          },
          {
            src: slidePath(
              "de",
              "15-level-3-complete-key.webp",
            ),
            title: "Der vollständige Weg eines Leseschlüssels",
            alt:
              "Der vollständige Lernweg für sch vom Kennenlernen und Zusammensetzen bis zum Erkennen, Lesen und Verstehen",
          },
        ],
      },
    ],
    finalTitle: "Ein System — drei Lernwelten",
    finalText:
      "DeLevel verbindet die Vorbereitung auf das Lesen, den Aufbau von Dekodierung und Leseverstehen sowie das Erkennen typischer Muster der deutschen Schrift in einem durchgehenden Lernweg. Die Anforderungen wachsen, während die Interaktion vertraut und kohärent bleibt.",
    finalSlide: {
      src: slidePath(
        "de",
        "16-one-system-three-worlds.webp",
      ),
      title: "Ein Lesesystem. Drei Welten.",
      alt:
        "DeLevel als Märchenwelt für das Kind, durchgehender Lernweg und reproduzierbares Entwicklungssystem",
    },
    backLabel: "← Zur Demo",
    previousSlide: "Vorherige Folie",
    nextSlide: "Nächste Folie",
    openSlide: "Folie in voller Größe öffnen",
    closeSlide: "Folie schließen",
  },

  en: {
    eyebrow: "The DeLevel learning system",
    heroTitle: "How DeLevel Works",
    heroText:
      "DeLevel is a connected digital literacy system for children aged 4–8 who are learning to read German in a multilingual environment. Three progressive levels guide the child from sounds and letter recognition to words, sentences and the characteristic reading patterns of German.",
    routeItems: [
      {
        title: "Buchstabenwald",
        text: "Hear and recognise",
      },
      {
        title: "Wortdorf",
        text: "Build and read",
      },
      {
        title: "Zauberschlüssel",
        text: "Recognise reading patterns",
      },
    ],
    systemTitle: "One Connected Learning System",
    systemText:
      "The three levels are not separate collections of games. Each level performs a distinct instructional task and prepares the next one. The child experiences a clear, repeatable journey, while adults can also see the learning purpose, methodological structure and visible progress behind each activity.",
    systemSlides: [
      {
        src: slidePath("en", "01-system.webp"),
        title: "DeLevel. A Guided Journey into German Reading",
        alt:
          "For children learning German as a second language",
      },
      {
        src: slidePath("en", "02-system.webp"),
        title: "One Connected Journey, Three Learning Levels",
        alt:
          "DeLevel system with three connected learning levels from sound and letter recognition to German reading patterns",
      },
      {
        src: slidePath("en", "03-child-journey.webp"),
        title: "Progress Becomes a Creative Cycle",
        alt:
          "The child explores a letter card, completes games, earns a sticker, creates a mini-film and saves it in Kino",
      },
      {
        src: slidePath("en", "04-information-layers.webp"),
        title: "Two Information Layers",
        alt:
          "The child sees an accessible game while the adult can view the learning purpose, method and progress",
      },
    ],
    levelsTitle: "Three Levels of Reading Development",
    levelsText:
      "Open each level to explore its learning task, progression and game architecture.",
    levelSections: [
      {
        id: "level-1",
        title: "Level 1 · Buchstabenwald",
        subtitle: "Preparing for reading",
        description:
          "Level 1 develops the foundations of reading before children are expected to decode complete words. Visual and listening games connect sounds, letter forms, images and meaningful actions. Familiar interaction patterns are reused across the alphabet while perceptual contrasts and memory demands increase gradually.",
        slides: [
          {
            src: slidePath(
              "en",
              "05-level-1-reproducible-design.webp",
            ),
            title: "A Reproducible Game System",
            alt:
              "Level 1 reproducible design for the alphabet using paired visual and listening game cycles",
          },
          {
            src: slidePath(
              "en",
              "06-level-1-buchstabenwald.webp",
            ),
            title: "Two Game Lines Prepare the Child to Read",
            alt:
              "ABC games develop visual letter recognition and listening games develop phonological awareness",
          },
          {
            src: slidePath(
              "en",
              "07-level-1-listening-templates.webp",
            ),
            title: "Listening Game Templates",
            alt:
              "Listening game templates for initial sounds, missing beginnings, syllables, classification and sound position",
          },
        ],
      },
      {
        id: "level-2",
        title: "Level 2 · Wortdorf",
        subtitle: "Building reading skills",
        description:
          "Level 2 turns decoding into meaningful reading. Children blend familiar sounds into syllables, build and read words, and gradually move towards phrases and sentences. Grammar is introduced through stable language frames, while listening activities continue to refine phonemic discrimination and grapheme choice.",
        slides: [
          {
            src: slidePath(
              "en",
              "08-level-2-wortdorf.webp",
            ),
            title: "Games Turn Decoding into Meaningful Reading",
            alt:
              "Level 2 progression from sound and syllable to words, sentence patterns and meaning",
          },
          {
            src: slidePath(
              "en",
              "09-level-2-cumulative-design.webp",
            ),
            title: "One Sequence, Six Learning Stages",
            alt:
              "Level 2 cumulative sequence from hearing sounds to blending, words, grammar, phonemic precision and compounds",
          },
          {
            src: slidePath(
              "en",
              "10-level-2-grammar-progression.webp",
            ),
            title: "Grammar Grows Through Playable Patterns",
            alt:
              "Grammar progression through connecting words, first sentences, noun phrases, descriptions, actions and questions",
          },
          {
            src: slidePath(
              "en",
              "11-level-2-grammar-families.webp",
            ),
            title: "Stable Language Frames Expand Step by Step",
            alt:
              "Grammar game families based on ist constructions, object patterns, questions and place expressions",
          },
          {
            src: slidePath(
              "en",
              "12-level-2-phonemic-development.webp",
            ),
            title: "Listening Becomes More Precise",
            alt:
              "Phonemic development through sound classification, close contrasts, grapheme choice and reading",
          },
        ],
      },
      {
        id: "level-3",
        title: "Level 3 · Zauberschlüssel",
        subtitle: "German reading keys",
        description:
          "Level 3 introduces frequent German graphemes and letter combinations as complete readable units. Each Reading Key is heard, assembled, located inside words and applied in meaningful reading. Three learning houses organise consonant blocks, vowel combinations and special letters.",
        slides: [
          {
            src: slidePath(
              "en",
              "13-level-3-zauberschluessel.webp",
            ),
            title: "Reading Patterns Become Keys",
            alt:
              "Level 3 introduces German grapheme groups as complete reading keys",
          },
          {
            src: slidePath(
              "en",
              "14-level-3-key-houses.webp",
            ),
            title: "Three Houses Organise the Reading Keys",
            alt:
              "Mitlaut-Haus, Klingerhaus and Sonderhaus organise consonant blocks, vowel combinations and special letters",
          },
          {
            src: slidePath(
              "en",
              "15-level-3-complete-key.webp",
            ),
            title: "One Complete Reading Key",
            alt:
              "The complete learning pipeline for sch from key card and construction to recognition, reading and meaning",
          },
        ],
      },
    ],
    finalTitle: "One System, Three Learning Worlds",
    finalText:
      "DeLevel combines preparation for reading, the development of decoding and comprehension, and the recognition of German orthographic patterns in one continuous pathway. The learning challenge grows while the interaction remains coherent and familiar.",
    finalSlide: {
      src: slidePath(
        "en",
        "16-one-system-three-worlds.webp",
      ),
      title: "One Reading System. Three Worlds.",
      alt:
        "DeLevel as a fairy-tale world for the child, a continuous learning path and a reproducible development system",
    },
    backLabel: "← Back to the demo",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    openSlide: "Open slide in full size",
    closeSlide: "Close full-size slide",
  },
} satisfies Record<ActiveLocale, ProjectPageContent>;

function Slider({
  slides,
  currentIndex,
  previousLabel,
  nextLabel,
  openLabel,
  onPrevious,
  onNext,
  onOpen,
}: SliderProps) {
  const currentSlide = slides[currentIndex];

  return (
    <div className={styles.slider}>
      <button
        className={styles.slideButton}
        type="button"
        aria-label={`${openLabel}: ${currentSlide.title}`}
        onClick={() => onOpen(currentSlide)}
      >
        <img
          className={styles.slideImage}
          src={currentSlide.src}
          alt={currentSlide.alt}
          draggable={false}
        />
      </button>

      <div className={styles.sliderFooter}>
        <button
          className={styles.sliderArrow}
          type="button"
          aria-label={previousLabel}
          onClick={onPrevious}
          disabled={currentIndex === 0}
        >
          ←
        </button>

        <div className={styles.slideMeta}>
          <strong>{currentSlide.title}</strong>

          <span>
            {currentIndex + 1} / {slides.length}
          </span>
        </div>

        <button
          className={styles.sliderArrow}
          type="button"
          aria-label={nextLabel}
          onClick={onNext}
          disabled={currentIndex === slides.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default function ProjectPage({
  params,
}: ProjectPageProps) {
  const { locale } = use(params);

  const [systemSlideIndex, setSystemSlideIndex] =
    useState(0);

  const [openLevelId, setOpenLevelId] =
    useState<LevelId | null>(null);

  const [levelSlideIndexes, setLevelSlideIndexes] =
    useState<Record<LevelId, number>>({
      "level-1": 0,
      "level-2": 0,
      "level-3": 0,
    });

  const [modalSlide, setModalSlide] =
    useState<Slide | null>(null);

  useEffect(() => {
    if (!modalSlide) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setModalSlide(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalSlide]);

  if (!isActiveLocale(locale)) {
    return null;
  }

  const content = PAGE_CONTENT[locale];

  function toggleLevel(levelId: LevelId) {
    setOpenLevelId((currentLevelId) =>
      currentLevelId === levelId ? null : levelId,
    );
  }

  function goToPreviousLevelSlide(levelId: LevelId) {
    setLevelSlideIndexes((currentIndexes) => ({
      ...currentIndexes,
      [levelId]: Math.max(
        0,
        currentIndexes[levelId] - 1,
      ),
    }));
  }

  function goToNextLevelSlide(level: LevelSection) {
    setLevelSlideIndexes((currentIndexes) => ({
      ...currentIndexes,
      [level.id]: Math.min(
        level.slides.length - 1,
        currentIndexes[level.id] + 1,
      ),
    }));
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>
          {content.eyebrow}
        </p>

        <h1>{content.heroTitle}</h1>

        <p>{content.heroText}</p>

        <ol className={styles.levelRoute}>
          {content.routeItems.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section
        className={styles.systemSection}
        aria-labelledby="system-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="system-title">
            {content.systemTitle}
          </h2>

          <p>{content.systemText}</p>
        </div>

        <Slider
          slides={content.systemSlides}
          currentIndex={systemSlideIndex}
          previousLabel={content.previousSlide}
          nextLabel={content.nextSlide}
          openLabel={content.openSlide}
          onPrevious={() =>
            setSystemSlideIndex((currentIndex) =>
              Math.max(0, currentIndex - 1),
            )
          }
          onNext={() =>
            setSystemSlideIndex((currentIndex) =>
              Math.min(
                content.systemSlides.length - 1,
                currentIndex + 1,
              ),
            )
          }
          onOpen={setModalSlide}
        />
      </section>

      <section
        className={styles.levelsSection}
        aria-labelledby="levels-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="levels-title">
            {content.levelsTitle}
          </h2>

          <p>{content.levelsText}</p>
        </div>

        <div className={styles.accordionList}>
          {content.levelSections.map((level) => {
            const isOpen = openLevelId === level.id;
            const currentSlideIndex =
              levelSlideIndexes[level.id];

            return (
              <article
                className={`${styles.accordionItem} ${
                  isOpen
                    ? styles.accordionItemOpen
                    : ""
                }`}
                key={level.id}
              >
                <button
                  className={styles.accordionTrigger}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${level.id}-panel`}
                  id={`${level.id}-trigger`}
                  onClick={() => toggleLevel(level.id)}
                >
                  <span
                    className={styles.accordionHeading}
                  >
                    <strong>{level.title}</strong>
                    <span>{level.subtitle}</span>
                  </span>

                  <span
                    className={styles.accordionIcon}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>

                {isOpen ? (
                  <div
                    className={styles.accordionPanel}
                    id={`${level.id}-panel`}
                    role="region"
                    aria-labelledby={`${level.id}-trigger`}
                  >
                    <p
                      className={
                        styles.levelDescription
                      }
                    >
                      {level.description}
                    </p>

                    <Slider
                      slides={level.slides}
                      currentIndex={currentSlideIndex}
                      previousLabel={
                        content.previousSlide
                      }
                      nextLabel={content.nextSlide}
                      openLabel={content.openSlide}
                      onPrevious={() =>
                        goToPreviousLevelSlide(level.id)
                      }
                      onNext={() =>
                        goToNextLevelSlide(level)
                      }
                      onOpen={setModalSlide}
                    />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={styles.finalLayout}>
          <div className={styles.finalSlide}>
            <button
              type="button"
              aria-label={`${content.openSlide}: ${content.finalSlide.title}`}
              onClick={() =>
                setModalSlide(content.finalSlide)
              }
            >
              <img
                className={styles.slideImage}
                src={content.finalSlide.src}
                alt={content.finalSlide.alt}
                draggable={false}
              />
            </button>
          </div>

          <div className={styles.finalText}>
            <h2>{content.finalTitle}</h2>

            <p>{content.finalText}</p>
          </div>
        </div>
      </section>

      <PageLanguageSwitcher
        locale={locale}
        path="/pro-proekt"
      />

      <Link
        className={styles.backHome}
        href={localizedPath(locale)}
      >
        {content.backLabel}
      </Link>

      {modalSlide ? (
        <div
          className={styles.modalBackdrop}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setModalSlide(null);
            }
          }}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label={modalSlide.title}
          >
            <button
              className={styles.modalClose}
              type="button"
              aria-label={content.closeSlide}
              onClick={() => setModalSlide(null)}
            >
              ×
            </button>

            <img
              className={styles.modalImage}
              src={modalSlide.src}
              alt={modalSlide.alt}
              draggable={false}
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}