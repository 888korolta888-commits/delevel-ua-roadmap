/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { CSSProperties, useState } from "react";
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

const STEPS: RoadmapStep[] = [
  {
    id: "start",
    eyebrow: "Roadmap-Demo",
    title: "DeLevel: раннє читання німецькою",
    text:
      "DeLevel — це цифровий EdTech-продукт для дітей 4–8 років, який навчає читанню німецькою мовою в ігровій формі. Дитина рухається від перших букв і звуків до словосполучень, речень та сталих мовних конструкцій.",
    detail:
      "DeLevel створений насамперед для дітей, які вивчають німецьку як другу мову. Система має три рівні: алфавітний — підготовка до читання, букварний — читання перших складів, слів і речень, та читацькі ключі — особливі букви й буквосполучення німецької.",
    overlayTitle: "Унікальність та переваги DeLevel",
    overlayText: [
      "DeLevel — це послідовна EdTech-лінійка з трьох пов’язаних рівнів. Граючи, дитина проходить шлях від слухового сприйняття до осмисленого читання.",
      "Перший рівень готує до читання: дитина чує слово, бачить образ, упізнає літеру й пов’язує звук, картинку та дію. Другий рівень переводить цю базу в читання: склад, слово, словосполучення, Satzmuster і коротке речення.",
      "Третій рівень закріплює Leseschlüssel — особливі читацькі ключі німецької: букви, буквосполучення, графеми й сталі моделі читання, які дитина впізнає, тренує і застосовує в ігрових міні-сценах.",
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
  eyebrow: "Етап 1 · Ліс літер",
  title: "Добукварний етап",
  text:
    "Дитина знайомиться з літерами, вчиться розпізнавати їхню форму та чути початковий звук у слові.",
  detail:
    "",
overlayTitle: "Ліс літер: підготовка до читання",
overlayText: [
  "Перший рівень DeLevel створює основу для читання: дитина впізнає німецькі літери, чує початкові звуки слів і пов’язує букву з конкретним образом.",
  "Кожна літера вводиться через коротку серію ігор: дитина слухає слово, знаходить потрібну літеру, розрізняє її серед інших і виконує просту дію.",
  "Аудіо, зображення та ігрові завдання дають зрозумілий контекст без граматичного перевантаження.",
   "Ігри-вправи на трейсинг допомагають дитині зрозуміти форму літери та запам’ятати напрям її написання.",
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
  eyebrow: "Етап 2 · Містечко слів",
  title: "Букварний етап",
  text:
    "Після повторення літер і звуків дитина переходить до читання: складає склади, слова, словосполучення та речення, розуміє прочитане й засвоює перші граматичні конструкції.",
  detail: "",
  overlayTitle: "Містечко слів: від складу до речення",
  overlayText: [
    "Другий рівень веде дитину від простих складів до коротких слів, словосполучень, речень і сталих конструкцій, які можна прочитати, почути й співвіднести з картинкою.",
    "Граматика подається через зрозумілу мовну дію. Слова und, ist, hat, артиклі й прості питання допомагають засвоїти мовленнєві патерни без перевантаження термінами.",
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
    eyebrow: "Етап 3 · Особливі букви",
    title: "Особливі ключі читання",
    text:
      "Третій рівень відкриває особливі букви та буквосполучення.",
    detail:
      "",
overlayTitle: "Особливі ключі читання",
overlayText: [
  "Третій рівень присвячений особливим графемам і буквосполученням німецької мови, які потребують окремого тренування.",
  "Дитина опановує ці ключі через знайому схему: бачить знак у слові, чує його звучання, пов’язує з опорним образом і тренує в коротких ігрових завданнях.",
  "Sch, ch, pf, ei, ie, au, eu, äu, ß та інші складні елементи поступово стають упізнаваними читацькими опорами.",
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
    "DeLevel веде дитину через навчальні ігри, блокнот прогресу, нагороди та короткі мультфільми.",
  detail:
    "Ігри допомагають вчитися, блокнот прогресу фіксує пройдений шлях, нагороди підтримують інтерес, а мультфільми закріплюють знайомі слова й образи в сюжеті.",
  overlayTitle: "Як це працює",
  overlayText: [
    "У DeLevel навчання має зрозумілу послідовність: дитина проходить ігрові завдання, відкриває нові елементи маршруту й бачить власний прогрес.",
    "Після виконання завдань результат з’являється в блокноті прогресу. Це особистий простір дитини, де видно, що вже пройдено і які етапи відкриті.",
    "Нагороди позначають завершені етапи та роблять результат видимим. Дитина бачить, що її дії приводять до відкриття нового елемента.",
    "Короткі мультфільми повертають знайомі слова, персонажів та образи в сюжет. Так DeLevel поєднує навчальні вправи, прогрес і повторення в цілісний освітній маршрут.",
  ],
  dragonSrc: ROADMAP_ASSETS.drakoshaFinish,
  desktop: { x: 65, y: 22, scale: 0.71 },
  nest: { x: 65, y: 24, scale: 0.62 },
  tablet: { x: 88, y: 24, scale: 0.72 },
  phone: { x: 75, y: 22, scale: 0.66 },
  focusClass: styles.focusFinish,
},
];

export default function DemoLevelPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isInfoCardOpen, setIsInfoCardOpen] = useState(true);

  const activeStep = STEPS[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === STEPS.length - 1;

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
    setActiveIndex((current) => Math.min(STEPS.length - 1, current + 1));
    setIsOverlayOpen(false);
    setIsInfoCardOpen(true);
  }

  return (
    <main className={styles.page}>
            <section
        className={styles.scene}
        data-step={activeStep.id}
        aria-label="Інтерактивна roadmap навчання читання"
      >
        <header className={styles.header}>
          <Link href="/" className={styles.brandLogo} aria-label="На головну">
            <img
              src={ROADMAP_ASSETS.logo}
              alt="Дракончик вчиться читати"
              className={styles.logoImage}
              draggable={false}
            />
          </Link>

<nav className={styles.nav} aria-label="Головна навігація">
  <Link href="/dlya-koho">Для кого DeLevel</Link>
  <Link href="/potentsial">Потенціал</Link>
  <Link href="/dydaktyka">Дидактика</Link>
  <Link href="/kontakty">Контакти</Link>
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

          <div className={`${styles.focusGlow} ${activeStep.focusClass}`} />

          <div className={styles.dragonPosition} style={dragonStyle}>
            <span className={styles.dragonGlow} aria-hidden="true" />

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
                aria-label="Закрити інформаційну картку"
                onClick={() => setIsInfoCardOpen(false)}
              >
                ×
              </button>

              <p className={styles.eyebrow}>{activeStep.eyebrow}</p>
              <h1>{activeStep.title}</h1>
              <p className={styles.mainText}>{activeStep.text}</p>

              {activeStep.detail ? (
                <p className={styles.detailText}>{activeStep.detail}</p>
              ) : null}

              <button
                className={styles.moreButton}
                type="button"
                onClick={() => setIsOverlayOpen(true)}
              >
                Докладніше
              </button>
            </article>
          </div>
        ) : (
          <button
            className={styles.infoOpenButton}
            type="button"
            onClick={() => setIsInfoCardOpen(true)}
          >
            Інфо
          </button>
        )}

        <div className={styles.stepControls} aria-label="Керування roadmap">
          <button
            className={styles.secondaryButton}
            type="button"
            onClick={goPrevious}
            disabled={isFirst}
          >
            Назад
          </button>

          <button
            className={styles.primaryButton}
            type="button"
            onClick={goNext}
            disabled={isLast}
          >
            Далі
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
              <p className={styles.overlayEyebrow}>{activeStep.eyebrow}</p>
              <h2 id="roadmap-overlay-title">{activeStep.overlayTitle}</h2>

              {activeStep.overlayText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <button
                className={styles.closeButton}
                type="button"
                onClick={() => setIsOverlayOpen(false)}
              >
                Закрити
              </button>
            </article>
          </div>
        ) : null}
      </section>
    </main>
  );
}