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
    title: "Дракончик вчиться читати",
    text: "Українська демо-версія roadmap DeLevel — інтерактивний шлях до читання: від звуків і літер до перших слів і речень.",
    detail:
      "Дитина спочатку слухає і бачить, потім розрізняє, будує слова й поступово переходить до читання зі змістом.",
    overlayTitle: "Що показує ця roadmap?",
    overlayText: [
      "Ця roadmap показує навчальний шлях «Дракончик вчиться читати»: від слухового впізнавання й літер до перших читацьких кроків і впевнених читацьких ключів.",
      "Дракончик веде дитину крок за кроком через три етапи. Кожна станція показує, яка навичка формується і чому вона важлива для читання.",
      "Зовні це залишається теплим ігровим простором, а всередині має чітку дидактичну структуру: спочатку звук і знак, потім слова й мовні моделі, далі складніші читацькі патерни.",
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
    title: "Звуки і літери",
    text: "Дитина слухає слова, впізнає форми літер і поєднує звук, картинку та букву.",
    detail:
      "Етап 1 зміцнює слухове сприйняття й робить літери знайомими, впізнаваними знаками.",
    overlayTitle: "Звуки і літери: слухати, бачити, впізнавати",
    overlayText: [
      "Етап 1 готує дитину до читання без вимоги вже читати слова. Дитина слухає, дивиться, впізнає форми літер і поєднує звук, картинку та знак.",
      "Завдання тренують слухове розрізнення, зорове впізнавання та надійне зіставлення: що я чую, що я бачу, яка літера до цього належить.",
      "Для дітей, які навчаються поступово, сенс підтримують голос, зображення й дія. Так формується надійна основа перед справжніми читацькими кроками.",
    ],
    dragonSrc: ROADMAP_ASSETS.drakoshaWalking,
    desktop: { x: 48, y: 72, scale: 0.98 },
    nest: { x: 48, y: 72, scale: 0.92 },
    tablet: { x: 87, y: 58, scale: 0.95 },
    phone: { x: 52, y: 61, scale: 0.92 },
    focusClass: styles.focusLevelOne,
  },
  {
    id: "level-2",
    eyebrow: "Етап 2 · Селище слів",
    title: "Перші кроки читання",
    text: "Зі звуків складаються склади, зі складів — слова, зі слів — перші короткі мовні моделі.",
    detail:
      "Етап 2 системно веде від звука до складу, від складу до слова і до короткого змістового читання.",
    overlayTitle: "Перші кроки читання: від звуків до слів",
    overlayText: [
      "Етап 2 веде від звука до складу, від букви до слова і від слова до перших коротких мовних моделей.",
      "Дитина поступово будує слова, впізнає короткі службові слова й читає прості структури з сильною опорою на зображення.",
      "Граматика не пояснюється як правило. Повторювані форми переживаються як зрозумілі читацькі моделі, що допомагають дитині читати зі змістом.",
    ],
    dragonSrc: ROADMAP_ASSETS.drakoshaWalking2,
    desktop: { x: 63, y: 52, scale: 0.92 },
    nest: { x: 62, y: 53, scale: 0.84 },
    tablet: { x: 75, y: 45, scale: 0.88 },
    phone: { x: 72, y: 45, scale: 0.84 },
    focusClass: styles.focusLevelTwo,
  },
  {
    id: "level-3",
    eyebrow: "Етап 3 · Читацькі ключі",
    title: "Ключі до читання",
    text: "Дитина відкриває поєднання літер і особливі знаки як ключі до впевненого читання.",
    detail:
      "Третій етап упорядковує складніші читацькі патерни й допомагає впізнавати їх без випадковості.",
    overlayTitle: "Ключі до читання: впевнено впізнавати патерни",
    overlayText: [
      "Етап 3 тренує складніші моделі письма: поєднання літер, особливі знаки й читацькі контрасти.",
      "Ключі організовані не випадково, а як зрозуміла система. Дитина бачить знак, чує відповідний звук, читає слово й розуміє різницю між схожими моделями.",
      "Мета — повторювана читацька впевненість: побачити знак, упізнати звук, прочитати слово, зрозуміти контраст і втримати сенс.",
    ],
    dragonSrc: ROADMAP_ASSETS.drakoshaWalking,
    desktop: { x: 64, y: 35, scale: 0.74 },
    nest: { x: 64, y: 36, scale: 0.66 },
    tablet: { x: 91, y: 33, scale: 0.78 },
    phone: { x: 75, y: 30, scale: 0.72 },
    focusClass: styles.focusLevelThree,
  },
  {
    id: "whole-way",
    eyebrow: "Логіка навчання",
    title: "Цілісний шлях до читання",
    text: "Три етапи утворюють єдиний маршрут: від слуху до письма, від знака до слова, від слова до змісту.",
    detail:
      "Ліс літер готує основу, Селище слів будує читання, Читацькі ключі стабілізують складніші патерни.",
    overlayTitle: "Навчальний шлях у трьох етапах",
    overlayText: [
      "Звуки і літери закладають основу: дитина слухає, бачить, упізнає й поєднує.",
      "Перші кроки читання будують із цієї основи читання: звуки, склади, слова й короткі мовні моделі поступово з’єднуються.",
      "Ключі до читання стабілізують навичку: складніші поєднання та особливі знаки впізнаються впевнено й повторювано.",
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
            <p className={styles.detailText}>{activeStep.detail}</p>

            <button
              className={styles.moreButton}
              type="button"
              onClick={() => setIsOverlayOpen(true)}
            >
              Докладніше
            </button>
          </article>
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