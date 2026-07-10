import Link from "next/link";
import styles from "./page.module.css";

const LEARNING_PATH = [
  "Літера",
  "Звук",
  "Склад",
  "Слово",
  "Словосполучення",
  "Речення",
  "Ключі читання",
];

const LEVELS = [
  {
    label: "Рівень 1",
    title: "Добукварна підготовка",
    text:
      "Дитина формує зв’язок між звуком, буквою, словом і образом та готується до переходу від усного мовлення до читання.",
    focus:
      "Методичний фокус — упізнавання букв, слухове виділення початкового звука та співвіднесення звучання з написанням і значенням.",
  },
  {
    label: "Рівень 2",
    title: "Перехід до читання",
    text:
      "Знайомі букви й звуки поєднуються у склади, слова, словосполучення та короткі речення.",
    focus:
      "Методичний фокус — читання по складах, поступовий перехід до цілого слова, розуміння прочитаного та засвоєння перших сталих мовних конструкцій.",
  },
  {
    label: "Рівень 3",
    title: "Ключі читання",
    text:
      "Дитина окремо опановує особливі букви, графеми й буквосполучення німецької мови, написання та звучання яких потребують спеціального впізнавання.",
    focus:
      "Методичний фокус — sch, ch, pf, ei, ie, au, eu, äu, ß та інші елементи, які поступово стають опорами для самостійного читання.",
  },
];

const PRINCIPLES = [
  {
    title: "Контрольована послідовність матеріалу",
    text:
      "Букви, слова й мовні конструкції вводяться у визначеному порядку. Новий матеріал з’являється лише після того, як дитина отримала необхідну основу.",
  },
  {
    title: "Звук, буква й значення",
    text:
      "Дитина не запам’ятовує букву ізольовано: вона чує звук у слові, бачить написання, співвідносить його з образом і виконує зрозумілу дію.",
  },
  {
    title: "Склад як перехід до слова",
    text:
      "Склад стає робочим містком між окремими буквами й цілим словом. Дитина бачить і чує, як знайомі елементи поєднуються під час читання.",
  },
  {
    title: "Накопичувальне читання",
    text:
      "Нові слова й речення будуються переважно з уже пройдених букв, складів і мовних моделей. Кожен наступний крок спирається на попередній.",
  },
  {
    title: "Граматика через мовну дію",
    text:
      "Артиклі, слова und, ist, hat, прості питання й сталі конструкції вводяться через контекст і використання, а не через пояснення абстрактних правил.",
  },
  {
    title: "Підтримка дітей з німецькою як другою мовою",
    text:
      "DeLevel враховує потреби дітей, які вивчають німецьку як другу мову. Аудіо, зображення й ігрова дія підтримують зміст, поки дитина опановує німецьке написання та правила читання.",
  },
];

export default function DydaktykaPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Методика раннього читання німецькою</h1>

<p>
  DeLevel поєднує фонематичне сприйняття, упізнавання букв, читання
  по складах, розуміння слова та засвоєння мовних моделей у
  послідовному навчальному процесі.
</p>

<p>
  Кожен новий елемент вводиться після підготовчого кроку й
  спирається на вже знайомі звуки, букви, слова та конструкції. Так
  складність зростає поступово, а дитина не відчуває перевантаження й
  навчається у грі.
</p>
        </div>
      </section>

      <section className={styles.pathSection} aria-labelledby="path-title">
        <div className={styles.sectionHeader}>
          <h2 id="path-title">
            Як у DeLevel формується навичка читання
          </h2>
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
          <h2 id="levels-title">
            Яку навчальну задачу вирішує кожен рівень
          </h2>
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
          <h2 id="principles-title">
            Методичні рішення, закладені в DeLevel
          </h2>
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
          <h2>Як побудована одна навчальна одиниця</h2>
        </div>

        <p>
          Дитина спочатку чує слово або звук, бачить опорний образ і знаходить
          потрібну букву чи ключ читання. Потім вона виконує дію: вибирає,
          зіставляє, складає або читає.
        </p>

        <p>
          Після правильної дії слово з’являється повністю, озвучується та
          співвідноситься із сюжетом або зображенням. Так сприйняття, дія,
          читання й розуміння працюють як одна навчальна послідовність.
        </p>
      </section>

      <section className={styles.closingSection} aria-label="Коротке резюме">
        <p>
          DeLevel не відокремлює звук від букви, читання від змісту, а вправу —
          від навчального маршруту. Кожна дія готує наступний крок і працює на
          спільний результат: самостійне читання німецькою з розумінням.
        </p>
      </section>

      <Link className={styles.backHome} href="/">
        ← До демо
      </Link>
    </main>
  );
}