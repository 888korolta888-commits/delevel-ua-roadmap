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

type LevelSection = {
  id: "level-1" | "level-2" | "level-3";
  title: string;
  subtitle: string;
  description: string;
  slides: Slide[];
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

const SYSTEM_SLIDES: Slide[] = [
  
    {
    src: "/presentation/en/01-system.png",
    title: "DeLevel. A guided journey into German reading",
    alt:
      "For children learning German as a second language",
  },
    {
    src: "/presentation/en/02-system.png",
    title: "One Connected Journey, Three Learning Levels",
    alt:
      "DeLevel system: three connected learning levels from sound and letter recognition to German reading patterns",
  },
  {
    src: "/presentation/en/03-child-journey.png",
    title: "Progress Becomes a Creative Cycle",
    alt:
      "The child explores a letter card, completes games, earns a sticker, creates a mini-film and saves it in Kino",
  },
  {
    src: "/presentation/en/04-information-layers.png",
    title: "Two Information Layers",
    alt:
      "The child sees an accessible game while the adult can view the learning purpose, method and progress",
  },
];

const LEVEL_SECTIONS: LevelSection[] = [
  {
    id: "level-1",
    title: "Level 1 · Buchstabenwald",
    subtitle: "Preparing for reading",
    description:
      "Level 1 develops the foundations of reading before children are expected to decode complete words. Visual and listening games connect sounds, letter forms, images and meaningful actions. Familiar interaction patterns are reused across the alphabet while perceptual contrasts and memory demands increase gradually.",
    slides: [
      {
        src:
          "/presentation/en/05-level-1-reproducible-design.png",
        title: "A Reproducible Game System",
        alt:
          "Level 1 reproducible design for the alphabet using paired visual and listening game cycles",
      },
      {
        src:
          "/presentation/en/06-level-1-buchstabenwald.png",
        title: "Two Game Lines Prepare the Child to Read",
        alt:
          "ABC games develop visual letter recognition and listening games develop phonological awareness",
      },
      {
        src:
          "/presentation/en/07-level-1-listening-templates.png",
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
        src: "/presentation/en/08-level-2-wortdorf.png",
        title: "Games Turn Decoding into Meaningful Reading",
        alt:
          "Level 2 progression from sound and syllable to words, sentence patterns and meaning",
      },
      {
        src:
          "/presentation/en/09-level-2-cumulative-design.png",
        title: "One Sequence, Six Learning Stages",
        alt:
          "Level 2 cumulative sequence from hearing sounds to blending, words, grammar, phonemic precision and compounds",
      },
      {
        src:
          "/presentation/en/10-level-2-grammar-progression.png",
        title: "Grammar Grows Through Playable Patterns",
        alt:
          "Grammar progression through connecting words, first sentences, noun phrases, descriptions, actions and questions",
      },
      {
        src:
          "/presentation/en/11-level-2-grammar-families.png",
        title: "Stable Language Frames Expand Step by Step",
        alt:
          "Grammar game families based on ist constructions, object patterns, questions and place expressions",
      },
      {
        src:
          "/presentation/en/12-level-2-phonemic-development.png",
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
        src:
          "/presentation/en/13-level-3-zauberschluessel.png",
        title: "Reading Patterns Become Keys",
        alt:
          "Level 3 introduces German grapheme groups as complete reading keys",
      },
      {
        src:
          "/presentation/en/14-level-3-key-houses.png",
        title: "Three Houses Organise the Reading Keys",
        alt:
          "Mitlaut-Haus, Klingerhaus and Sonderhaus organise consonant blocks, vowel combinations and special letters",
      },
      {
        src:
          "/presentation/en/15-level-3-complete-key.png",
        title: "One Complete Reading Key",
        alt:
          "The complete learning pipeline for sch from key card and construction to recognition, reading and meaning",
      },
    ],
  },
];

const FINAL_SLIDE: Slide = {
  src: "/presentation/en/16-one-system-three-worlds.png",
  title: "One Reading System. Three Worlds.",
  alt:
    "DeLevel as a fairy-tale world for the child, a continuous learning path and a reproducible development system",
};

const UI_TEXT = {
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
  levelsTitle: "Three Levels of Reading Development",
  levelsText:
    "Open each level to explore its learning task, progression and game architecture.",
  finalTitle: "One System, Three Learning Worlds",
  finalText:
    "DeLevel combines preparation for reading, the development of decoding and comprehension, and the recognition of German orthographic patterns in one continuous pathway. The world changes as the learning challenge grows, while the interaction remains coherent and familiar.",

  backLabel: "← Back to the demo",
  previousSlide: "Previous slide",
  nextSlide: "Next slide",
  openSlide: "Open slide in full size",
  closeSlide: "Close full-size slide",
};

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
    useState<LevelSection["id"] | null>(null);

  const [levelSlideIndexes, setLevelSlideIndexes] =
    useState<Record<LevelSection["id"], number>>({
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

  function toggleLevel(levelId: LevelSection["id"]) {
    setOpenLevelId((currentLevelId) =>
      currentLevelId === levelId ? null : levelId,
    );
  }

  function goToPreviousLevelSlide(
    levelId: LevelSection["id"],
  ) {
    setLevelSlideIndexes((currentIndexes) => ({
      ...currentIndexes,
      [levelId]: Math.max(
        0,
        currentIndexes[levelId] - 1,
      ),
    }));
  }

  function goToNextLevelSlide(
    level: LevelSection,
  ) {
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
          {UI_TEXT.eyebrow}
        </p>

        <h1>{UI_TEXT.heroTitle}</h1>

        <p>{UI_TEXT.heroText}</p>

        <ol className={styles.levelRoute}>
          {UI_TEXT.routeItems.map((item) => (
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
            {UI_TEXT.systemTitle}
          </h2>

          <p>{UI_TEXT.systemText}</p>
        </div>

        <Slider
          slides={SYSTEM_SLIDES}
          currentIndex={systemSlideIndex}
          previousLabel={UI_TEXT.previousSlide}
          nextLabel={UI_TEXT.nextSlide}
          openLabel={UI_TEXT.openSlide}
          onPrevious={() =>
            setSystemSlideIndex((currentIndex) =>
              Math.max(0, currentIndex - 1),
            )
          }
          onNext={() =>
            setSystemSlideIndex((currentIndex) =>
              Math.min(
                SYSTEM_SLIDES.length - 1,
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
            {UI_TEXT.levelsTitle}
          </h2>

          <p>{UI_TEXT.levelsText}</p>
        </div>

        <div className={styles.accordionList}>
          {LEVEL_SECTIONS.map((level) => {
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
                        UI_TEXT.previousSlide
                      }
                      nextLabel={UI_TEXT.nextSlide}
                      openLabel={UI_TEXT.openSlide}
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
              aria-label={`${UI_TEXT.openSlide}: ${FINAL_SLIDE.title}`}
              onClick={() =>
                setModalSlide(FINAL_SLIDE)
              }
            >
              <img
                className={styles.slideImage}
                src={FINAL_SLIDE.src}
                alt={FINAL_SLIDE.alt}
                draggable={false}
              />
            </button>
          </div>

          <div className={styles.finalText}>
            <h2>{UI_TEXT.finalTitle}</h2>

            <p>{UI_TEXT.finalText}</p>


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
        {UI_TEXT.backLabel}
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
              aria-label={UI_TEXT.closeSlide}
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