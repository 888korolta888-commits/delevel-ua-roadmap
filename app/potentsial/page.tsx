import Link from "next/link";
import styles from "./page.module.css";

const NEED_ITEMS = [
  {
    title: "Ранній розвиток мовлення й читання",
    text:
      "Вхід у письмо починається задовго до вільного читання: зі слухання, впізнавання, повторення, зіставлення та перших стабільних мовних моделей.",
  },
  {
    title: "Українська дитяча EdTech-ніша",
    text:
      "Батькам і освітнім командам потрібні цифрові продукти, які не просто розважають дитину, а ведуть її через зрозумілий навчальний шлях.",
  },
  {
    title: "Цифрові освітні звички",
    text:
      "Сім’ї дедалі частіше шукають якісний цифровий контент: емоційно привабливий для дитини й водночас професійно продуманий для навчання.",
  },
];

const BUSINESS_MODELS = [
  {
    title: "B2C · Домашнє навчання",
    text:
      "Родини можуть використовувати окремі етапи або повну навчальну подорож, щоб підтримати дитину на старті читання вдома.",
  },
  {
    title: "B2B · Освітні ліцензії",
    text:
      "Дитячі центри, підготовчі групи, приватні школи та освітні платформи можуть використовувати DeLevel як додатковий цифровий навчальний матеріал.",
  },
  {
    title: "B2G · Освітні та соціальні програми",
    text:
      "Громади, фонди й освітні ініціативи можуть масштабувати доступ до раннього мовного та читацького розвитку для ширших груп дітей.",
  },
  {
    title: "IP · Продуктова лінійка",
    text:
      "Навчальна архітектура може розширюватися в нові етапи, тематичні світи, читацькі ключі, мовні моделі та інші цільові мови.",
  },
];

const SCALING_ITEMS = [
  "Етапи",
  "Літери",
  "Читацькі ключі",
  "Тематичні світи",
  "Мовні моделі",
  "Модулі",
  "Ліцензії",
  "Цільові мови",
];

export default function PotentsialPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Масштабований освітній продукт для раннього читання</h1>
          <p>
            DeLevel поєднує педагогічну глибину, емоційний світ персонажа і
            модульну продуктову архітектуру в інтерактивну навчальну подорож
            для дітей.
          </p>
          <p>
            Продукт відповідає на зростаючу потребу: якісний цифровий старт у
            читанні, зрозумілий шлях від звуків і літер до слів, речень і
            впевненого розуміння.
          </p>
        </div>

        <aside className={styles.heroCard} aria-label="Investment Case">
          <span className={styles.cardLabel}>Investment Case</span>
          <strong>Дидактика як продуктова архітектура.</strong>
          <p>
            Повторювані навчальні формати, розширюваний контент і кілька
            каналів використання створюють основу для зростання.
          </p>
        </aside>
      </section>

      <section className={styles.needSection} aria-labelledby="need-title">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Потреба ринку</p>
          <h2 id="need-title">Релевантна проблема з чіткою аудиторією</h2>
        </div>

        <div className={styles.needGrid}>
          {NEED_ITEMS.map((item) => (
            <article className={styles.needCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.statementSection}>
        <p>
          DeLevel робить раннє читання видимим як продукт: теплим і дитячим у
          взаємодії, системним у структурі, масштабованим у розвитку.
        </p>
      </section>

      <section className={styles.businessSection} aria-labelledby="business-title">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Бізнес-потенціал</p>
          <h2 id="business-title">Кілька шляхів використання і монетизації</h2>
        </div>

        <div className={styles.businessGrid}>
          {BUSINESS_MODELS.map((item) => (
            <article className={styles.businessCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.scalingSection} aria-labelledby="scaling-title">
        <div className={styles.scalingText}>
          <p className={styles.kicker}>Масштабування</p>
          <h2 id="scaling-title">Архітектура, яка не закінчується одним курсом</h2>
          <p>
            Сила продукту — у повторюваному поєднанні навчальної логіки,
            персонажа, світу, аудіо, зображення, ігрової дії та поступового
            прогресу.
          </p>
          <p>
            Нові матеріали не потрібно щоразу створювати з нуля. Їх можна
            вбудовувати в наявні формати, розширювати й розвивати як продуктову
            лінійку.
          </p>
        </div>

        <div className={styles.scalingChips} aria-label="Напрями масштабування">
          {SCALING_ITEMS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className={styles.valueSection} aria-labelledby="value-title">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Вплив</p>
          <h2 id="value-title">Освітня цінність, яка має економічну основу</h2>
        </div>

        <div className={styles.valueBody}>
          <p>
            DeLevel підтримує раннє мовлення, готовність до читання і впевненість
            дитини у взаємодії з письмом. Продукт може допомагати родинам,
            доповнювати педагогічну роботу й відкривати дитині м’який вхід у
            читання.
          </p>
          <p>
            Саме поєднання соціальної значущості, емоційної прив’язаності до
            героя і модульної розширюваності робить продукт цікавим для
            домашнього використання, освітніх ліцензій і партнерських програм.
          </p>
        </div>
      </section>

      <section className={styles.closingSection} aria-label="Коротке резюме">
        <p>DeLevel поєднує три інвестиційні аргументи:</p>
        <div className={styles.closingGrid}>
          <strong>педагогічна глибина</strong>
          <strong>масштабована продуктова логіка</strong>
          <strong>емоційний світ бренду</strong>
        </div>
        <p className={styles.closingFinal}>
          Цифровий освітній продукт із чіткою цільовою аудиторією,
          розширюваною архітектурою і переконливою соціальною цінністю.
        </p>
      </section>

      <Link className={styles.backHome} href="/">
        ← До демо
      </Link>
    </main>
  );
}