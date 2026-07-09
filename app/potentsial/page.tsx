import Link from "next/link";
import styles from "./page.module.css";

const NEED_ITEMS = [


  {
    title: "Діти з німецькою як другою мовою",
    text:
      "Продукт розрахований насамперед на дітей, які зростають у багатомовному середовищі й потребують м’якого входу в німецьку мову.",
  },

{
  title: "DeLevel як універсальний продукт",
  text:
    "DeLevel ідеально підходить для домашнього навчання, для дошкільної підготовки, у початковій школі, на курсах та приватних заняття. Один продукт працює для кількох учасників — дитини, батьків, педагогів і освітніх організацій.",
},
    {
    title: "Масштабованість проєкту DeLevel",
    text:
      "Завдяки повторюваним ігровим форматам та сучасній методиці безбар’єрного навчання DeLevel може бути адаптований під будь-яку мову.",
  },
];

const BUSINESS_MODELS = [
  {
    title: "Домашнє використання",
    text:
      "Родини можуть проходити DeLevel як повний навчальний маршрут або використовувати окремі рівні для підтримки дитини вдома.",
  },
  {
    title: "Освітні ліцензії",
    text:
      "Приватні школи, дитячі центри, мовні курси та освітні платформи можуть використовувати продукт як готовий цифровий інструмент для раннього читання.",
  },
  {
    title: "Партнерства та ліцензування",
    text:
      "Після оформлення прав і умов співпраці DeLevel може розвиватися через видавців, EdTech-платформи, освітні програми та локалізацію для інших мов.",
  },
];

const SCALING_ITEMS = [
  "Нові рівні",
  "Набори слів",
  "Читацькі ключі",
  "Нагороди",
  "Мультсерії",
  "Інші мови",
];

export default function PotentsialPage() {
  return (
    <main className={styles.page}>
            <section className={styles.needSection} aria-labelledby="need-title">
        <div className={styles.sectionHeader}>
                    <h2 id="need-title">Методика, розвивальний контент і гра як єдиний освітній простір DeLevel</h2>
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

      <section className={styles.businessSection} aria-labelledby="business-title">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Бізнес-потенціал</p>
          <h2 id="business-title">Можливі шляхи використання</h2>
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
          <p className={styles.kicker}>Розвиток продукту</p>
          <h2 id="scaling-title">Що можна розширювати</h2>
          <p>
            Система DeLevel побудована на повторюваних форматах: навчальна гра,
            фіксація прогресу, нагорода та сюжетне закріплення через мультфільм.
          </p>
          <p>
            Це дозволяє додавати новий контент без зміни основної логіки
            продукту: рівні, слова, читацькі ключі, персонажів, нагороди та
            короткі сюжетні серії.
          </p>
        </div>

        <div className={styles.scalingChips} aria-label="Напрями розвитку">
          {SCALING_ITEMS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

 

      <Link className={styles.backHome} href="/">
        ← До демо
      </Link>
    </main>
  );
}