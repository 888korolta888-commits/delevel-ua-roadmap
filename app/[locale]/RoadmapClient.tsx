/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { CSSProperties, useState } from "react";
import {
  SUPPORTED_LOCALES,
  isActiveLocale,
  localizedPath,
  type ActiveLocale,
  type Locale,
} from "../_lib/locales";
import styles from "./page.module.css";

const ASSET_VERSION = "1";

const ROADMAP_ASSETS = {
  bg: `/roadmap/roadmap-bg-clean.png?v=${ASSET_VERSION}`,
  bgPhone: `/roadmap/roadmap-bg-phone.png?v=${ASSET_VERSION}`,
  logo: `/roadmap/logo-drakonchyk.png?v=${ASSET_VERSION}`,
  drakoshaPresenting: `/roadmap/drakosha-presenting.png?v=${ASSET_VERSION}`,
  drakoshaWalking: `/roadmap/drakosha-walking-up.png?v=${ASSET_VERSION}`,
  drakoshaWalking2: `/roadmap/drakosha-walking-up2.png?v=${ASSET_VERSION}`,
  drakoshaFinish: `/roadmap/drakosha-finish.png?v=${ASSET_VERSION}`,
  levelOneSign: `/roadmap/level-1-sign.png?v=${ASSET_VERSION}`,
  levelTwoSign: `/roadmap/level-2-sign.png?v=${ASSET_VERSION}`,
  levelThreeSign: `/roadmap/level-3-sign.png?v=${ASSET_VERSION}`,
};

type DragonPoint = {
  x: number;
  y: number;
  scale: number;
};

type RoadmapStep = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  detail: string;
  overlayTitle: string;
  overlayText: string[];
  dragonSrc: string;
  signSrc?: string;
  signAlt?: string;
  desktop: DragonPoint;
  nest: DragonPoint;
  tablet: DragonPoint;
  phone: DragonPoint;
  focusClass: string;
};

type RoadmapClientProps = {
  locale: ActiveLocale;
};

const LANGUAGE_LABELS = {
  uk: "UA",
  de: "DE",
  en: "EN",
} satisfies Record<Locale, string>;

const UI_TEXT = {
  uk: {
    sceneAria: "Інтерактивна roadmap навчання читання",
    homeAria: "На головну",
    logoAlt: "Дракончик вчиться читати",
    navAria: "Головна навігація",
nav: {
  audience: "Аудиторія",
  project: "Проєкт",
  didactics: "Методика",
  potential: "Потенціал",
  contact: "Контакти",
},
    closeInfoAria: "Закрити інформаційну картку",
    more: "Докладніше",
    info: "Інфо",
    controlsAria: "Керування roadmap",
    previous: "Назад",
    next: "Далі",
    close: "Закрити",
    languageAria: "Вибір мови",
    currentLanguage: "поточна мова",
    goToLanguage: "Перейти на",
    unavailableLanguage: "Мовна версія готується",
  },
  de: {
    sceneAria: "Interaktive Lernroadmap",
    homeAria: "Zur Startseite",
    logoAlt: "Drachi lernt Lesen",
    navAria: "Hauptnavigation",
nav: {
  audience: "Zielgruppe",
  project: "Projekt",
  didactics: "Didaktik",
  potential: "Potenzial",
  contact: "Kontakt",
},
    closeInfoAria: "Infokarte schließen",
    more: "Mehr erfahren",
    info: "Info",
    controlsAria: "Roadmap-Steuerung",
    previous: "Zurück",
    next: "Weiter",
    close: "Schließen",
    languageAria: "Sprache auswählen",
    currentLanguage: "aktuelle Sprache",
    goToLanguage: "Wechseln zu",
    unavailableLanguage: "Sprachversion in Vorbereitung",
  },
  en: {
    sceneAria: "Interactive literacy learning roadmap",
    homeAria: "Go to the home page",
    logoAlt: "Drachi lernt Lesen",
    navAria: "Main navigation",
nav: {
  audience: "Target Group",
  project: "Project",
  didactics: "Methodology",
  potential: "Potential",
  contact: "Contact",
},
    closeInfoAria: "Close information card",
    more: "Learn more",
    info: "Info",
    controlsAria: "Roadmap controls",
    previous: "Back",
    next: "Next",
    close: "Close",
    languageAria: "Select language",
    currentLanguage: "current language",
    goToLanguage: "Switch to",
    unavailableLanguage: "Language version in preparation",
  },
} satisfies Record<
  ActiveLocale,
  {
    sceneAria: string;
    homeAria: string;
    logoAlt: string;
    navAria: string;
nav: {
  audience: string;
  project: string;
  didactics: string;
  potential: string;
  contact: string;
};
    closeInfoAria: string;
    more: string;
    info: string;
    controlsAria: string;
    previous: string;
    next: string;
    close: string;
    languageAria: string;
    currentLanguage: string;
    goToLanguage: string;
    unavailableLanguage: string;
  }
>;

const STEPS_BY_LOCALE = {
  uk: [
    {
      id: "start",
      eyebrow: "Огляд продукту",
      title: "DeLevel: раннє читання німецькою",
      text:
        "DeLevel — це цифровий EdTech-продукт для дітей 4–8 років, який навчає читати німецькою мовою в ігровій формі. Дитина рухається від перших букв і звуків до складів, слів, словосполучень, речень та сталих мовних конструкцій.",
      detail:
        "DeLevel створений насамперед для дітей, які вивчають німецьку як другу мову. Система має три рівні: алфавітний — підготовка до читання; букварний — читання перших складів, слів і речень; третій — опанування ключів читання: особливих букв і буквосполучень німецької.",
      overlayTitle: "Як побудований DeLevel",
      overlayText: [
        "DeLevel — це не набір окремих ігор, а послідовна освітня система з трьох пов’язаних рівнів. Дитина переходить від слухового сприйняття й упізнавання букв до самостійного читання.",
        "Перший рівень готує до читання: дитина чує слово, бачить образ, упізнає букву й пов’язує звук, картинку та дію.",
        "Другий рівень спирається на цю основу: дитина складає й читає склади, слова, словосполучення та короткі речення.",
        "Третій рівень вводить ключі читання — особливі букви, буквосполучення, графеми й сталі моделі читання. Дитина вчиться впізнавати їх у словах, співвідносити написання зі звучанням і читати слова з ними в ігрових міні-сценах.",
        "Аудіо, зображення та ігрові дії підтримують розуміння й допомагають дитині пов’язувати звучання, написання та зміст.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaPresenting,
      desktop: { x: 25, y: 80, scale: 1.08 },
      nest: { x: 25, y: 80, scale: 1.02 },
      tablet: { x: 57, y: 67, scale: 1.03 },
      phone: { x: 55, y: 94, scale: 1 },
      focusClass: styles.focusStart,
    },
    {
      id: "level-1",
      eyebrow: "Рівень 1 · Ліс літер",
      title: "Добукварний етап",
      text:
        "Дитина знайомиться з буквами, вчиться розпізнавати їхню форму, чути початковий звук у слові та пов’язувати його з буквою й словом-образом.",
      detail: "",
      overlayTitle: "Підготовка до читання",
      overlayText: [
        "Перший рівень DeLevel створює основу для читання: дитина впізнає німецькі букви, чує початкові звуки у словах і пов’язує звучання з написанням та конкретними образами.",
        "Кожна буква вводиться через коротку серію ігор: дитина слухає слово, знаходить потрібну букву, розрізняє її серед інших і виконує зрозумілу ігрову дію.",
        "Аудіо, зображення та ігрові дії допомагають дитині побачити зв’язок між звуком, буквою та образом.",
        "Ігри на трейсинг (обведення букв за зразком) допомагають дитині краще запам’ятати форму букви та напрям її написання.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaWalking,
      signSrc: ROADMAP_ASSETS.levelOneSign,
      signAlt: "Stufe 1 Buchstabenwald",
      desktop: { x: 48, y: 72, scale: 0.98 },
      nest: { x: 48, y: 72, scale: 0.92 },
      tablet: { x: 87, y: 58, scale: 0.95 },
      phone: { x: 52, y: 61, scale: 0.92 },
      focusClass: styles.focusLevelOne,
    },
    {
      id: "level-2",
      eyebrow: "Рівень 2 · Містечко слів",
      title: "Букварний етап",
      text:
        "Після повторення літер і звуків дитина переходить до читання: складає склади, слова, словосполучення та речення, розуміє прочитане й засвоює перші граматичні конструкції.",
      detail: "",
      overlayTitle: "Від складу до речення",
      overlayText: [
        "Навчання починається зі складання знайомих букв у склади. Далі дитина читає слова, поєднує їх у словосполучення й короткі речення та співвідносить прочитане із зображенням і дією.",
        "Граматика подається через усталені мовні моделі-конструкції. Слова und, ist, hat, артиклі й прості питання допомагають засвоїти мовленнєві патерни без перевантаження термінами.",
        "Дитина сприймає їх у контексті, співвідносить зі змістом і поступово навчається впізнавати в нових реченнях.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaWalking2,
      signSrc: ROADMAP_ASSETS.levelTwoSign,
      signAlt: "Stufe 2 Wortdorf",
      desktop: { x: 63, y: 52, scale: 0.92 },
      nest: { x: 62, y: 53, scale: 0.84 },
      tablet: { x: 75, y: 45, scale: 0.88 },
      phone: { x: 72, y: 45, scale: 0.84 },
      focusClass: styles.focusLevelTwo,
    },
    {
      id: "level-3",
      eyebrow: "Рівень 3 · Ключі читання",
      title: "Особливі ключі читання",
      text:
        "Дитина вчиться впізнавати й читати особливі букви та буквосполучення німецької мови, поєднуючи їхнє написання зі звучанням у слові.",
      detail: "",
      overlayTitle: "Особливості німецького читання",
      overlayText: [
        "Третій рівень присвячений буквам, графемам і буквосполученням німецької мови, написання та звучання яких потребують окремого впізнавання й тренування.",
        "Дитина опановує ці ключі за знайомою схемою: бачить їх у слові, чує звучання, пов’язує з опорним словом-образом і закріплює в коротких ігрових завданнях.",
        "Складні німецькі букви та буквосполучення sch, ch, pf, ei, ie, au, eu, äu, ß поступово стають упізнаваними читацькими опорами.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaWalking,
      signSrc: ROADMAP_ASSETS.levelThreeSign,
      signAlt: "Stufe 3 Zauberschlüssel",
      desktop: { x: 64, y: 35, scale: 0.74 },
      nest: { x: 64, y: 36, scale: 0.66 },
      tablet: { x: 91, y: 33, scale: 0.78 },
      phone: { x: 75, y: 30, scale: 0.72 },
      focusClass: styles.focusLevelThree,
    },
    {
      id: "whole-way",
      eyebrow: "Логіка навчання",
      title: "Навчальний маршрут DeLevel",
      text:
        "DeLevel поєднує навчальні ігри, блокнот прогресу, нагороди та короткі мультфільми в послідовний освітній маршрут.",
      detail:
        "Ігри допомагають опановувати матеріал, блокнот показує пройдений шлях, нагороди позначають завершені кроки, а мультфільми повертають знайомі слова й образи у відеосюжетах.",
      overlayTitle: "Як дитина рухається маршрутом",
      overlayText: [
        "Навчання має чітку послідовність: дитина виконує ігрові завдання, відкриває нові елементи маршруту й бачить, як кожен завершений крок веде її далі.",
        "Після виконання завдань результат зберігається в блокноті прогресу. Це особистий простір дитини, де видно пройдені етапи, отримані нагороди та нові відкриття.",
        "Нагороди позначають завершені етапи та роблять результат видимим. Дитина бачить, що її дії ведуть до відкриття нового елемента.",
        "Короткі мультфільми повертають знайомі слова, персонажів та образи. Так навчальний матеріал повторюється в іншому контексті й стає частиною цілісної історії.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaFinish,
      desktop: { x: 65, y: 22, scale: 0.71 },
      nest: { x: 65, y: 24, scale: 0.62 },
      tablet: { x: 88, y: 24, scale: 0.72 },
      phone: { x: 75, y: 22, scale: 0.66 },
      focusClass: styles.focusFinish,
    },
  ],
  de: [
    {
      id: "start",
      eyebrow: "Lernweg im Überblick",
      title: "Drachi lernt Lesen",
      text:
        "Drei Stufen führen vom Hören und Erkennen über das Lesen von Silben und Wörtern bis zu den Leseschlüsseln der deutschen Schrift.",
      detail:
        "Der Lernweg verbindet Laut, Buchstabe, Silbe, Wort, Satz und Bedeutung in einer kontrollierten Progression.",
      overlayTitle: "Wie ist der Lernweg aufgebaut?",
      overlayText: [
        "Die Roadmap zeigt den gesamten Lernweg von DeLevel – Drachi lernt Lesen: von der Vorbereitung auf das Lesen über den Aufbau der Lesefähigkeit bis zur sicheren Orientierung in typischen Mustern der deutschen Schrift.",
        "Jede Stufe übernimmt eine eigene didaktische Aufgabe und baut auf den bereits gesicherten Fähigkeiten auf. So wächst die Komplexität, ohne dass das Kind mit zu vielen neuen Anforderungen gleichzeitig konfrontiert wird.",
        "Hören, Bild, Schrift und Spielhandlung bleiben miteinander verbunden. Das Kind erkennt, ordnet zu, setzt zusammen und liest zunehmend selbstständig mit Verständnis.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaPresenting,
      desktop: { x: 25, y: 80, scale: 1.08 },
      nest: { x: 25, y: 80, scale: 1.02 },
      tablet: { x: 57, y: 67, scale: 1.03 },
      phone: { x: 55, y: 94, scale: 1 },
      focusClass: styles.focusStart,
    },
    {
      id: "level-1",
      eyebrow: "Stufe 1 · Buchstabenwald",
      title: "Vorbereitung auf das Lesen",
      text:
        "Das Kind hört Laute in Wörtern, erkennt Buchstabenformen und verbindet Laut, Schrift, Bild und Bedeutung.",
      detail:
        "Stufe 1 entwickelt phonologische Bewusstheit, Buchstabenkenntnis und sichere Laut-Buchstaben-Zuordnungen.",
      overlayTitle: "Vorbereitung auf das Lesen",
      overlayText: [
        "Stufe 1 bereitet das Lesen vor. Das Kind muss noch keine Wörter entschlüsseln, sondern lernt, Laute wahrzunehmen, Buchstaben wiederzuerkennen und beides mit Bildern und bekannten Wörtern zu verbinden.",
        "Die Aufgaben trainieren Anlauthören, Lautunterscheidung, visuelle Buchstabenerkennung und Wort-Bild-Zuordnung. Audio, Bild und Spielhandlung sichern dabei das Verständnis.",
        "Erst wenn Laut, Buchstabe und Bedeutung stabil miteinander verbunden sind, beginnt der Übergang zu Silben und ersten Wörtern.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaWalking,
      signSrc: ROADMAP_ASSETS.levelOneSign,
      signAlt: "Stufe 1 Buchstabenwald",
      desktop: { x: 48, y: 72, scale: 0.98 },
      nest: { x: 48, y: 72, scale: 0.92 },
      tablet: { x: 87, y: 58, scale: 0.95 },
      phone: { x: 52, y: 61, scale: 0.92 },
      focusClass: styles.focusLevelOne,
    },
    {
      id: "level-2",
      eyebrow: "Stufe 2 · Wortdorf",
      title: "Aufbau der Lesefähigkeit",
      text:
        "Das Kind verbindet bekannte Laute zu Silben, liest Wörter und erschließt erste Wortgruppen und Sätze.",
      detail:
        "Stufe 2 führt kontrolliert von der Lesesynthese über die Worterkennung zum sinnbezogenen Lesen.",
      overlayTitle: "Von Lauten und Silben zu Wörtern und Sätzen",
      overlayText: [
        "Stufe 2 beginnt mit der Lesesynthese: Bekannte Laute und Buchstaben werden zu Silben verbunden, Silben zu Wörtern und Wörter zu kurzen Wortgruppen und Sätzen.",
        "Das Material wächst kumulativ. Neue Wörter bestehen überwiegend aus bereits eingeführten Buchstaben und Mustern, sodass das Kind seine Lesefähigkeit auf einer sicheren Grundlage erweitert.",
        "Artikel, Funktionswörter und einfache Satzmuster werden im sprachlichen Gebrauch gelernt. Bild, Audio und kurze Handlungen unterstützen die Sinnentnahme, ohne das Lesen zu ersetzen.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaWalking2,
      signSrc: ROADMAP_ASSETS.levelTwoSign,
      signAlt: "Stufe 2 Wortdorf",
      desktop: { x: 63, y: 52, scale: 0.92 },
      nest: { x: 62, y: 53, scale: 0.84 },
      tablet: { x: 75, y: 45, scale: 0.88 },
      phone: { x: 72, y: 45, scale: 0.84 },
      focusClass: styles.focusLevelTwo,
    },
    {
      id: "level-3",
      eyebrow: "Stufe 3 · Zauberschlüssel",
      title: "Leseschlüssel der deutschen Schrift",
      text:
        "Das Kind erkennt häufige Grapheme, Buchstabenverbindungen und besondere Zeichen als verlässliche Orientierung beim Lesen.",
      detail:
        "Mitlaut-Haus, Klingerhaus und Sonderhaus ordnen zentrale Muster der deutschen Schrift.",
      overlayTitle: "Leseschlüssel systematisch erkennen",
      overlayText: [
        "Stufe 3 erschließt Leseschlüssel wie sch, ch, pf, sp, st, ng, nk, qu, ei, ie, au, eu, äu und ß. Das Kind lernt, typische Schreibungen mit ihrem Lautwert zu verbinden.",
        "Die Leseschlüssel sind im Mitlaut-Haus, Klingerhaus und Sonderhaus geordnet. Dadurch werden komplexe Muster systematisch aufgebaut und nicht als zufällige Einzelfälle gelernt.",
        "Jeder Schlüssel wird gehört, erkannt, in Wörtern angewendet und im Kontrast zu ähnlichen Mustern gefestigt. Ziel ist ein sichereres und zunehmend flüssiges Lesen mit Verständnis.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaWalking,
      signSrc: ROADMAP_ASSETS.levelThreeSign,
      signAlt: "Stufe 3 Zauberschlüssel",
      desktop: { x: 64, y: 35, scale: 0.74 },
      nest: { x: 64, y: 36, scale: 0.66 },
      tablet: { x: 91, y: 33, scale: 0.78 },
      phone: { x: 75, y: 30, scale: 0.72 },
      focusClass: styles.focusLevelThree,
    },
    {
      id: "whole-way",
      eyebrow: "Zusammenhängende Lernprogression",
      title: "Ein Lernweg in drei Stufen",
      text:
        "Die drei Stufen führen von der Vorbereitung auf das Lesen über den Aufbau der Lesefähigkeit bis zur sicheren Anwendung deutscher Lesemuster.",
      detail:
        "Jede Stufe erfüllt eine eigene didaktische Aufgabe und bereitet die nächste systematisch vor.",
      overlayTitle: "Wie die drei Stufen zusammenwirken",
      overlayText: [
        "Stufe 1 verbindet Laut, Buchstabe, Bild und Bedeutung und schafft damit die Grundlage für das Lesen.",
        "Stufe 2 entwickelt daraus Lesesynthese, Worterkennung und das Lesen erster Wortgruppen und Sätze mit Verständnis.",
        "Stufe 3 ordnet besondere Grapheme und Buchstabenverbindungen zu Leseschlüsseln, die das weitere Lesen stabilisieren.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaFinish,
      desktop: { x: 65, y: 22, scale: 0.71 },
      nest: { x: 65, y: 24, scale: 0.62 },
      tablet: { x: 88, y: 24, scale: 0.72 },
      phone: { x: 75, y: 22, scale: 0.66 },
      focusClass: styles.focusFinish,
    },
  ],
  en: [
    {
      id: "start",
      eyebrow: "Learning path at a glance",
      title: "DeLevel: From Spoken German to Independent Reading",
      text:
        "Three connected learning levels guide children from sound and letter recognition to syllables, words, sentences and the characteristic reading patterns of German.",
      detail:
        "The system links listening, print, visual meaning and active learning in a controlled literacy progression for multilingual children.",
      overlayTitle: "How is the DeLevel learning path structured?",
      overlayText: [
        "DeLevel is not a collection of isolated learning games. It is a coherent three-level literacy system that supports the transition from spoken German to independent reading.",
        "Each level has a distinct instructional role and builds on previously secured skills. Complexity increases gradually without introducing too many new demands at once.",
        "Listening, visual meaning, written language and interaction remain connected throughout the learning process. Children recognise, match, blend, read and increasingly understand independently.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaPresenting,
      desktop: { x: 25, y: 80, scale: 1.08 },
      nest: { x: 25, y: 80, scale: 1.02 },
      tablet: { x: 57, y: 67, scale: 1.03 },
      phone: { x: 55, y: 94, scale: 1 },
      focusClass: styles.focusStart,
    },
    {
      id: "level-1",
      eyebrow: "Level 1 · Buchstabenwald",
      title: "Preparing for Reading",
      text:
        "Children listen for sounds in words, recognise letter forms and connect sound, print, image and meaning.",
      detail:
        "Level 1 develops phonological awareness, letter knowledge and stable sound–letter correspondences.",
      overlayTitle: "Building the foundations for reading",
      overlayText: [
        "Level 1 prepares children for reading before they are expected to decode complete words. They learn to hear sounds, recognise letters and connect both with familiar words and images.",
        "Activities develop initial-sound awareness, sound discrimination, visual letter recognition and word–image matching. Audio, illustration and interaction support comprehension.",
        "The transition to syllables and first words begins only after the relationship between sound, letter and meaning has become sufficiently stable.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaWalking,
      signSrc: ROADMAP_ASSETS.levelOneSign,
      signAlt: "Level 1 Buchstabenwald",
      desktop: { x: 48, y: 72, scale: 0.98 },
      nest: { x: 48, y: 72, scale: 0.92 },
      tablet: { x: 87, y: 58, scale: 0.95 },
      phone: { x: 52, y: 61, scale: 0.92 },
      focusClass: styles.focusLevelOne,
    },
    {
      id: "level-2",
      eyebrow: "Level 2 · Wortdorf",
      title: "Building Reading Skills",
      text:
        "Children blend familiar sounds into syllables, read words and move towards short phrases and meaningful sentences.",
      detail:
        "Level 2 develops decoding, word recognition and early reading comprehension through cumulative material.",
      overlayTitle: "From sounds and syllables to words and sentences",
      overlayText: [
        "Level 2 begins with blending. Familiar sounds and letters are combined into syllables, syllables into words and words into short phrases and sentences.",
        "The material grows cumulatively. New words are built mainly from letters and patterns that have already been introduced, allowing reading skills to expand on a secure foundation.",
        "Articles, function words and recurring sentence patterns are learned through meaningful use. Images, audio and short actions support comprehension without replacing the act of reading.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaWalking2,
      signSrc: ROADMAP_ASSETS.levelTwoSign,
      signAlt: "Level 2 Wortdorf",
      desktop: { x: 63, y: 52, scale: 0.92 },
      nest: { x: 62, y: 53, scale: 0.84 },
      tablet: { x: 75, y: 45, scale: 0.88 },
      phone: { x: 72, y: 45, scale: 0.84 },
      focusClass: styles.focusLevelTwo,
    },
    {
      id: "level-3",
      eyebrow: "Level 3 · Zauberschlüssel",
      title: "German Reading Keys",
      text:
        "Children learn to recognise common graphemes, letter combinations and special written patterns as reliable cues for reading.",
      detail:
        "The Mitlaut-Haus, Klingerhaus and Sonderhaus organise central patterns of German orthography.",
      overlayTitle: "Recognising German reading patterns systematically",
      overlayText: [
        "Level 3 introduces German reading patterns such as sch, ch, pf, sp, st, ng, nk, qu, ei, ie, au, eu, äu and ß. Children connect characteristic spellings with their sound values.",
        "The patterns are organised into three learning houses: Mitlaut-Haus, Klingerhaus and Sonderhaus. Complex forms are therefore learned as an ordered system rather than as unrelated exceptions.",
        "Each reading key is heard, recognised, applied in words and contrasted with similar patterns. The goal is increasingly secure, fluent and meaningful reading.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaWalking,
      signSrc: ROADMAP_ASSETS.levelThreeSign,
      signAlt: "Level 3 Zauberschlüssel",
      desktop: { x: 64, y: 35, scale: 0.74 },
      nest: { x: 64, y: 36, scale: 0.66 },
      tablet: { x: 91, y: 33, scale: 0.78 },
      phone: { x: 75, y: 30, scale: 0.72 },
      focusClass: styles.focusLevelThree,
    },
    {
      id: "whole-way",
      eyebrow: "Scalable literacy architecture",
      title: "One Coherent Path in Three Levels",
      text:
        "The three levels connect preparation for reading, the development of decoding and comprehension, and the secure recognition of German orthographic patterns.",
      detail:
        "The current complete implementation is German. The underlying product and content-production architecture can support separately designed literacy systems for other languages.",
      overlayTitle: "How the three levels work together",
      overlayText: [
        "Level 1 connects sound, letter, image and meaning and establishes the foundations for reading.",
        "Level 2 develops blending, word recognition and the reading of short phrases and sentences with understanding.",
        "Level 3 organises distinctive graphemes and letter combinations into reliable reading keys that stabilise further reading development.",
        "German is the first fully developed language system. The same architecture could support a separately designed English literacy pathway for migrant and multilingual children, with its own phonics sequence, vocabulary, audio and learning content.",
      ],
      dragonSrc: ROADMAP_ASSETS.drakoshaFinish,
      desktop: { x: 65, y: 22, scale: 0.71 },
      nest: { x: 65, y: 24, scale: 0.62 },
      tablet: { x: 88, y: 24, scale: 0.72 },
      phone: { x: 75, y: 22, scale: 0.66 },
      focusClass: styles.focusFinish,
    },
  ],
} satisfies Record<ActiveLocale, RoadmapStep[]>;

export default function RoadmapClient({
  locale,
}: RoadmapClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isInfoCardOpen, setIsInfoCardOpen] = useState(true);

  const steps = STEPS_BY_LOCALE[locale];
  const ui = UI_TEXT[locale];
  const activeStep = steps[activeIndex];

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === steps.length - 1;

  const dragonStyle = {
    "--dragon-desktop-x": `${activeStep.desktop.x}%`,
    "--dragon-desktop-y": `${activeStep.desktop.y}%`,
    "--dragon-desktop-scale": activeStep.desktop.scale,
    "--dragon-nest-x": `${activeStep.nest.x}%`,
    "--dragon-nest-y": `${activeStep.nest.y}%`,
    "--dragon-nest-scale": activeStep.nest.scale,
    "--dragon-tablet-x": `${activeStep.tablet.x}%`,
    "--dragon-tablet-y": `${activeStep.tablet.y}%`,
    "--dragon-tablet-scale": activeStep.tablet.scale,
    "--dragon-phone-x": `${activeStep.phone.x}%`,
    "--dragon-phone-y": `${activeStep.phone.y}%`,
    "--dragon-phone-scale": activeStep.phone.scale,
  } as CSSProperties;

  function goPrevious() {
    setActiveIndex((current) => Math.max(0, current - 1));
    setIsOverlayOpen(false);
    setIsInfoCardOpen(true);
  }

  function goNext() {
    setActiveIndex((current) =>
      Math.min(steps.length - 1, current + 1),
    );
    setIsOverlayOpen(false);
    setIsInfoCardOpen(true);
  }

  return (
    <main className={styles.page}>
      <section
        className={styles.scene}
        data-step={activeStep.id}
        aria-label={ui.sceneAria}
      >
        <header className={styles.header}>
          <Link
            href={localizedPath(locale)}
            className={styles.brandLogo}
            aria-label={ui.homeAria}
          >
            <img
              src={ROADMAP_ASSETS.logo}
              alt={ui.logoAlt}
              className={styles.logoImage}
              draggable={false}
            />
          </Link>

          <nav
            className={styles.nav}
            aria-label={ui.navAria}
          >
<Link href={localizedPath(locale, "/dlya-koho")}>
  {ui.nav.audience}
</Link>

<Link href={localizedPath(locale, "/pro-proekt")}>
  {ui.nav.project}
</Link>

<Link href={localizedPath(locale, "/dydaktyka")}>
  {ui.nav.didactics}
</Link>

<Link href={localizedPath(locale, "/potentsial")}>
  {ui.nav.potential}
</Link>

<Link href={localizedPath(locale, "/kontakty")}>
  {ui.nav.contact}
</Link>

            <div
              className={styles.languageSwitcher}
              aria-label={ui.languageAria}
            >
              {SUPPORTED_LOCALES.map((language) => {
                const label = LANGUAGE_LABELS[language];

                if (language === locale) {
                  return (
                    <span
                      className={`${styles.languageOption} ${styles.languageOptionActive}`}
                      aria-current="page"
                      aria-label={`${label}: ${ui.currentLanguage}`}
                      key={language}
                    >
                      {label}
                    </span>
                  );
                }

                if (isActiveLocale(language)) {
                  return (
                    <Link
                      className={styles.languageOption}
                      href={localizedPath(language)}
                      aria-label={`${ui.goToLanguage} ${label}`}
                      key={language}
                    >
                      {label}
                    </Link>
                  );
                }

                return (
                  <span
                    className={`${styles.languageOption} ${styles.languageOptionDisabled}`}
                    aria-disabled="true"
                    aria-label={`${label}: ${ui.unavailableLanguage}`}
                    title={ui.unavailableLanguage}
                    key={language}
                  >
                    {label}
                  </span>
                );
              })}
            </div>
          </nav>
        </header>

        <div className={styles.mapLayer} aria-hidden="true">
          <img
            className={`${styles.roadmapImage} ${styles.roadmapImageLandscape}`}
            src={ROADMAP_ASSETS.bg}
            alt=""
            draggable={false}
          />

          <img
            className={`${styles.roadmapImage} ${styles.roadmapImagePhone}`}
            src={ROADMAP_ASSETS.bgPhone}
            alt=""
            draggable={false}
          />

          <div
            className={`${styles.focusGlow} ${activeStep.focusClass}`}
          />

          <div
            className={styles.dragonPosition}
            style={dragonStyle}
          >
            <span
              className={styles.dragonGlow}
              aria-hidden="true"
            />

            <img
              className={styles.dragonImg}
              src={activeStep.dragonSrc}
              alt=""
              draggable={false}
            />
          </div>
        </div>

        {isInfoCardOpen ? (
          <div className={styles.infoWrap}>
            {activeStep.signSrc ? (
              <img
                className={styles.levelSign}
                src={activeStep.signSrc}
                alt={activeStep.signAlt ?? ""}
                draggable={false}
              />
            ) : null}

            <article className={styles.infoCard}>
              <button
                className={styles.infoCloseButton}
                type="button"
                aria-label={ui.closeInfoAria}
                onClick={() => setIsInfoCardOpen(false)}
              >
                ×
              </button>

              <p className={styles.eyebrow}>
                {activeStep.eyebrow}
              </p>

              <h1>{activeStep.title}</h1>

              <p className={styles.mainText}>
                {activeStep.text}
              </p>

              {activeStep.detail ? (
                <p className={styles.detailText}>
                  {activeStep.detail}
                </p>
              ) : null}

              <button
                className={styles.moreButton}
                type="button"
                onClick={() => setIsOverlayOpen(true)}
              >
                {ui.more}
              </button>
            </article>
          </div>
        ) : (
          <button
            className={styles.infoOpenButton}
            type="button"
            onClick={() => setIsInfoCardOpen(true)}
          >
            {ui.info}
          </button>
        )}

        <div
          className={styles.stepControls}
          aria-label={ui.controlsAria}
        >
          <button
            className={styles.secondaryButton}
            type="button"
            onClick={goPrevious}
            disabled={isFirst}
          >
            {ui.previous}
          </button>

          <button
            className={styles.primaryButton}
            type="button"
            onClick={goNext}
            disabled={isLast}
          >
            {ui.next}
          </button>
        </div>

        {isOverlayOpen ? (
          <div
            className={styles.overlayBackdrop}
            role="dialog"
            aria-modal="true"
            aria-labelledby="roadmap-overlay-title"
          >
            <article className={styles.overlayCard}>
              <p className={styles.overlayEyebrow}>
                {activeStep.eyebrow}
              </p>

              <h2 id="roadmap-overlay-title">
                {activeStep.overlayTitle}
              </h2>

              {activeStep.overlayText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <button
                className={styles.closeButton}
                type="button"
                onClick={() => setIsOverlayOpen(false)}
              >
                {ui.close}
              </button>
            </article>
          </div>
        ) : null}
      </section>
    </main>
  );
}