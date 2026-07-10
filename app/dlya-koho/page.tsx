import Link from "next/link";
import styles from "./page.module.css";

const CONTEXT_ITEMS = [
  {
    country: "Основна аудиторія",
    value: "Дитина",
    label: "починає читати німецькою",
    text:
      "Дитина вчиться поєднувати звук, букву, слово й образ та поступово переходить до самостійного читання.",
  },
  {
    country: "Дорослі користувачі",
    value: "Батьки й педагоги",
    label: "супроводжують навчання",
    text:
      "Вони отримують готову послідовність завдань, яку можна використовувати вдома, на індивідуальних заняттях або як частину навчальної програми.",
  },
  {
    country: "Освітні організації",
    value: "Центри й платформи",
    label: "забезпечують доступ до продукту",
    text:
      "Приватні освітні центри, мовні школи та цифрові сервіси можуть використовувати DeLevel як структурований інструмент раннього читання німецькою.",
  },
];

const USE_CASES = [
  {
    title: "У родині",
    text:
      "Для короткої регулярної практики вдома у зручному для дитини темпі.",
  },
  {
    title: "На індивідуальних заняттях",
    text:
      "Як готовий навчальний маршрут для роботи педагога або викладача німецької.",
  },
  {
    title: "У мовних школах і центрах",
    text:
      "Як окремий навчальний блок для переходу від усного мовлення до читання.",
  },
  {
    title: "У цифровому навчанні",
    text:
      "Як навчальний модуль у складі EdTech-платформи або іншого цифрового освітнього продукту.",
  },
];

export default function DlyaKohoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Для дітей, які починають читати німецькою в багатомовному
            середовищі
          </h1>

          <p>
            DeLevel створений для дітей 4–8 років, які опановують німецьку як
            другу мову й переходять від усного мовлення до читання.
          </p>
<p>
  Дитина може добре розуміти й говорити німецькою, але читання потребує
  окремого переходу — особливо якщо перші букви й правила письма вона
  засвоювала іншою мовою. DeLevel допомагає крок за кроком пов’язати знайоме
  звучання з німецьким написанням і перейти до самостійного читання.
</p>
        </div>
      </section>

      <section className={styles.marketSection} aria-labelledby="market-title">
        <div className={styles.marketGrid}>
          {CONTEXT_ITEMS.map((item) => (
            <article className={styles.marketCard} key={item.country}>
              <p className={styles.country}>{item.country}</p>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.useSection} aria-labelledby="use-title">
        <div className={styles.sectionHeader}>
         <h2 id="use-title">Де працює DeLevel</h2>
        </div>

        <div className={styles.useGrid}>
          {USE_CASES.map((item) => (
            <article className={styles.useCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.statementSection}>
        <p>
          Головний користувач DeLevel — дитина. Батьки й педагоги супроводжують
          навчання, а освітні організації та цифрові платформи забезпечують
          доступ до продукту в різних навчальних середовищах.
        </p>
      </section>

      <Link className={styles.backHome} href="/">
        ← До демо
      </Link>
    </main>
  );
}