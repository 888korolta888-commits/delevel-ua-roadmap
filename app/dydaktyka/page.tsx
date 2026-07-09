import Link from "next/link";
import styles from "./page.module.css";

const LEARNING_PATH = [
  "Буква",
  "Звук",
  "Склад",
  "Слово",
  "Словосполучення",
  "Речення",
];

const LEVELS = [
  {
    label: "Етап 1",
    title: "Звуки і літери",
    text:
      "Дитина знайомиться з літерами, чує їхнє звучання у словах і пов’язує букву з конкретним образом.",
    focus:
      "Фокус етапу — впізнавання літер, початкові звуки, зв’язок між буквою, словом, картинкою та дією.",
  },
  {
    label: "Етап 2",
    title: "Перші кроки читання",
    text:
      "Дитина переходить від букв і звуків до складів, слів, словосполучень і коротких речень.",
    focus:
      "Фокус етапу — читання складів і слів, розуміння прочитаного та перші сталі мовні конструкції з опорою на аудіо й зображення.",
  },
  {
    label: "Етап 3",
    title: "Читацькі ключі",
    text:
      "Дитина опановує особливі букви та буквосполучення німецької мови, які важливо впізнавати під час читання.",
    focus:
      "Фокус етапу — sch, ch, pf, ei, ie, au, eu, äu, ß та інші елементи, де написання і звучання потребують окремого тренування.",
  },
];

const PRINCIPLES = [
  {
    title: "Послідовно",
    text:
      "Порядок букв, ігор і завдань вибудований заздалегідь. Нове з’являється після підготовленого кроку.",
  },
  {
    title: "Покроково",
    text:
      "Кожна нова дія спирається на попередню: дитина рухається від простого впізнавання до складання й читання.",
  },
  {
    title: "Від звуку",
    text:
      "Старт іде зі звучання букви у слові. Дитина чує звук і пов’язує його з буквою.",
  },
  {
    title: "Через склад",
    text:
      "Склад допомагає перейти від окремих букв до слова. Дитина бачить, як слово будується з менших частин.",
  },
  {
    title: "Накопичувально",
    text:
      "Слова й речення складаються з уже знайомих букв, складів і мовних моделей. Новий матеріал підтримується попереднім.",
  },
  {
    title: "Чутливо до DaZ",
    text:
      "Картинка й аудіо тримають зміст, а граматика входить через мовну дію без перевантаження правилами.",
  },
];

export default function DydaktykaPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Дидактика раннього читання</h1>
          <p>
            DeLevel веде дитину від знайомства з буквою, звуком і образом до
            складів, слів, словосполучень, речень та особливих читацьких ключів
            німецької мови.
          </p>
          <p>
            Кожен рівень має свою навчальну задачу: підготувати до читання,
            навчити читати перші слова й речення, а потім розібрати складні
            букви та буквосполучення німецької.
          </p>
        </div>
      </section>

      <section className={styles.pathSection} aria-labelledby="path-title">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Навчальний шлях</p>
          <h2 id="path-title">Від букви й звуку до читання</h2>
        </div>

        <div className={styles.pathChain} aria-label="Навчальна прогресія">
          {LEARNING_PATH.map((item, index) => (
            <div className={styles.pathItem} key={item}>
              <span>{item}</span>
              {index < LEARNING_PATH.length - 1 ? (
                <span className={styles.pathArrow} aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.levelSection} aria-labelledby="levels-title">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Три етапи</p>
          <h2 id="levels-title">Як зростає складність</h2>
        </div>

        <div className={styles.levelGrid}>
          {LEVELS.map((level) => (
            <article className={styles.levelCard} key={level.title}>
              <span className={styles.levelLabel}>{level.label}</span>
              <h3>{level.title}</h3>
              <p>{level.text}</p>
              <p className={styles.levelFocus}>{level.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.principlesSection}
        aria-labelledby="principles-title"
      >
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Методичні принципи</p>
          <h2 id="principles-title">На чому тримається навчання</h2>
        </div>

        <div className={styles.principlesGrid}>
          {PRINCIPLES.map((principle) => (
            <article className={styles.principleCard} key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.orientationSection}>
        <div>
          <p className={styles.kicker}>Фахова основа</p>
          <h2>Підготовка до читання через звук, знак і зміст</h2>
        </div>

        <p>
          DeLevel працює з базовими навичками, які потрібні дитині на старті
          читання: упізнавати літери, чути звуки в словах, поєднувати написання
          зі звучанням, читати склади й розуміти короткі слова та речення.
        </p>
        <p>
          Цифровий формат робить ці кроки видимими й повторюваними. Дитина чує
          мову, бачить образ, виконує дію у грі та поступово переходить до
          читання з розумінням.
        </p>
      </section>

      <section className={styles.closingSection} aria-label="Коротке резюме">
        <p>Від букви й звуку до складу.</p>
        <p>Від складу до слова.</p>
        <p>Від слова до речення й читацьких ключів.</p>
        <strong>Зрозумілий маршрут, послідовна методика, жива взаємодія.</strong>
      </section>

      <Link className={styles.backHome} href="/">
        ← До демо
      </Link>
    </main>
  );
}