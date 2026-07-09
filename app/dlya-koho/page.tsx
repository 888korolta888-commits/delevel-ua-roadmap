import Link from "next/link";
import styles from "./page.module.css";

const CONTEXT_ITEMS = [
  {
    country: "Мовне середовище",
    value: "дві мови",
    label: "вдома й в освіті",
    text:
      "Багато дітей чують одну мову вдома, а німецьку використовують у садку, школі та суспільному житті.",
  },
  {
    country: "Старт читання",
    value: "4–8 років",
    label: "період перших читацьких навичок",
    text:
      "У цьому віці дитині потрібні короткі завдання, повторення, образи й зрозуміла послідовність.",
  },
  {
    country: "Канали застосування",
    value: "дім / курс / центр",
    label: "реальні місця використання",
    text:
      "Потреба виникає не лише в школі: її бачать батьки, приватні центри, мовні курси й цифрові освітні сервіси.",
  },
];

const USE_CASES = [
  {
    title: "У родині",
    text:
      "Для регулярної домашньої практики читання німецькою.",
  },
  {
    title: "У приватній освіті",
    text:
      "Як матеріал для занять із дітьми 4–8 років.",
  },
  {
    title: "У мовних школах",
    text:
      "Як окремий блок для переходу до читання.",
  },
  {
    title: "У цифрових продуктах",
    text:
      "Як основа для ліцензування, інтеграції або локалізації.",
  },
];

export default function DlyaKohoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Для кого DeLevel</p>
          <h1>Для дітей, які починають читати німецькою</h1>
          <p>
            DeLevel як освітньо-ігровий застосунок розроблений для дітей 4–8 років, які роблять перші 
            кроки в навчанні читанню німецькою мовою.
          </p>
          <p>
            Найчастіше потреба виникає там, де дитина зростає у двомовному середовищі:
            у дошкільних закладах, молодшій школі, у 
            в приватних освітніх  центрах. Малюки прекрасно розуміють усне мовлення, але навчитися читати та писати для них вкрай важко.
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
          <p className={styles.kicker}>Застосування</p>
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
          DeLevel має чітку дитячу аудиторію, зрозумілих дорослих користувачів
          і канали поширення: родини, приватні центри, мовні школи,
          EdTech-платформи та видавничі продукти.
        </p>
      </section>

      <Link className={styles.backHome} href="/">
        ← До демо
      </Link>
    </main>
  );
}