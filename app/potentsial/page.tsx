import Link from "next/link";
import styles from "./page.module.css";

const POTENTIAL_ITEMS = [
  {
    title: "Стабільна освітня потреба",
    text:
      "Кожне нове покоління дітей, які входять у німецькомовну освіту, потребує переходу від усного мовлення до читання. Це не разовий запит, а постійна навчальна потреба.",
  },
  {
    title: "Кілька каналів використання",
    text:
      "Один продукт може працювати для родини, педагога, приватного центру, мовної школи та цифрової платформи — у різних форматах доступу й використання.",
  },
  {
    title: "Продуктова система, а не один курс",
    text:
      "Три пов’язані рівні, єдина логіка прогресу, нагород і сюжетного закріплення створюють основу для послідовного розширення навчального контенту.",
  },
];

const BUSINESS_MODELS = [
  {
    title: "Домашній доступ",
    text:
      "Родини можуть проходити повний маршрут DeLevel або використовувати окремі рівні для регулярної підтримки читання вдома.",
  },
  {
    title: "Освітні ліцензії",
    text:
      "Приватні школи, освітні центри та мовні курси можуть використовувати DeLevel як готовий цифровий модуль для раннього читання.",
  },
  {
    title: "Видавничі та EdTech-партнерства",
    text:
      "За чітко визначених прав і умов співпраці DeLevel може розвиватися через видавців, EdTech-компанії, інтеграцію, дистрибуцію та локалізацію.",
  },
];

const SCALING_ITEMS = [
  "Тематичні набори слів",
  "Додаткові ключі читання",
  "Нові мовні моделі",
  "Розширена система прогресу",
  "Мультсерії",
  "Інші мови",
];

export default function PotentsialPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            DeLevel має потенціал зростати разом із великою багатомовною
            аудиторією
          </h1>

          <p>
            У Німеччині, Австрії та Швейцарії (ринок DACH) живуть сотні тисяч дітей, для
            яких німецька є другою мовою або мовою освіти. Для багатьох із них
            перехід від усного мовлення до читання потребує окремої,
            послідовної підтримки.
          </p>

          <p>
            DeLevel відповідає на цю потребу готовою навчальною системою, яку
            можна використовувати вдома, у приватній освіті, у мовних центрах
            і в цифрових продуктах.
          </p>
        </div>

        <aside className={styles.heroCard}>
          <span className={styles.cardLabel}>
            Німецькомовний ринок DACH
          </span>

          <strong>Сотні тисяч дітей</strong>

          <p>
            Велику аудиторію об’єднує спільна освітня потреба: допомогти дитині
            пов’язати знайоме німецьке мовлення з буквами, правилами читання та
            письмовим словом.
          </p>

          <small className={styles.sourceNote}>
            Офіційні статистичні дані Німеччини, Австрії та Швейцарії, 2024.
          </small>
        </aside>
      </section>

      <section
        className={styles.needSection}
        aria-labelledby="potential-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="potential-title">На чому тримається потенціал DeLevel</h2>
        </div>

        <div className={styles.needGrid}>
          {POTENTIAL_ITEMS.map((item) => (
            <article className={styles.needCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.businessSection}
        aria-labelledby="business-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="business-title">Можливі моделі використання</h2>
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

      <section
        className={styles.scalingSection}
        aria-labelledby="scaling-title"
      >
        <div className={styles.scalingText}>
          <h2 id="scaling-title">Що можна розширювати</h2>

          <p>
            У DeLevel уже сформовано навчальну архітектуру: три рівні, ігрові
            шаблони, система прогресу, нагороди та сюжетне закріплення через
            мультфільми.
          </p>

          <p>
            Нові модулі можна додавати до цієї системи без перебудови базового
            маршруту. Для виходу на інші мовні ринки продукт потребуватиме
            окремої методичної та мовної локалізації.
          </p>
        </div>

        <div className={styles.scalingChips} aria-label="Напрями розвитку">
          {SCALING_ITEMS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className={styles.closingSection}>
        <p>
          DeLevel може зростати через новий навчальний контент, домашній доступ,
          освітні ліцензії, партнерські продукти та вихід на інші мовні ринки —
          на основі вже створеної системи.
        </p>
      </section>

      <Link className={styles.backHome} href="/">
        ← До демо
      </Link>
    </main>
  );
}