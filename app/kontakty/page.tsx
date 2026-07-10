import Link from "next/link";
import styles from "./page.module.css";

const CONTACT_EMAIL = "kontakt@example.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/dein-profil";

const PARTNERSHIP_MODELS = [
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
];

const PARTNERSHIP_VALUE = [
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
];

export default function KontaktyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Партнерство для розвитку й масштабування DeLevel</h1>

          <p>
            DeLevel — це розроблена освітня система з трьома рівнями навчання,
            власною методикою, цифровою архітектурою та готовим продуктом.
            Наступний етап — розвиток, вихід на ринок і масштабування разом із
            сильним партнером.
          </p>

          <p>
            Ми відкриті до предметної розмови з інвесторами, видавцями,
            EdTech-компаніями та освітніми організаціями, які мають ресурси й
            експертизу для розвитку, ліцензування, інтеграції або дистрибуції
            продукту.
          </p>
        </div>
      </section>

      <section
        className={styles.partnerSection}
        aria-labelledby="partner-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="partner-title">Напрями співпраці</h2>
        </div>

        <div className={styles.partnerGrid}>
          {PARTNERSHIP_MODELS.map((item) => (
            <article className={styles.partnerCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.valueSection} aria-labelledby="value-title">
        <div className={styles.sectionHeader}>
          <h2 id="value-title">Що DeLevel приносить у партнерство</h2>
        </div>

        <div className={styles.valueGrid}>
          {PARTNERSHIP_VALUE.map((item) => (
            <article className={styles.valueCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.contactSection}
        aria-labelledby="contact-title"
      >
        <div className={styles.contactText}>
          <h2 id="contact-title">Обговорити співпрацю</h2>

          <p>
            Для запиту на презентацію продукту, обговорення партнерської моделі
            або наступних кроків зв’яжіться безпосередньо електронною поштою чи
            через LinkedIn.
          </p>
        </div>

        <div className={styles.contactArea}>
          <div className={styles.contactList}>
            <a className={styles.primaryLink} href={`mailto:${CONTACT_EMAIL}`}>
              Написати електронною поштою
            </a>

            <a
              className={styles.secondaryLink}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              Відкрити LinkedIn
            </a>
          </div>

          <a className={styles.emailAddress} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>

      <Link className={styles.backHome} href="/">
        ← До демо
      </Link>
    </main>
  );
}