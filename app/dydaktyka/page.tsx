import Link from "next/link";
import styles from "./page.module.css";

const LEARNING_PATH = [
  "Літера",
  "Звук",
  "Картинка",
  "Склад",
  "Слово",
  "Мовна модель",
  "Читацький ключ",
  "Читання",
];

const LEVELS = [
  {
    label: "Етап 1",
    title: "Звуки і літери",
    text:
      "Дитина слухає слова, бачить картинки, впізнає форми літер і поєднує звук, знак та значення.",
    focus:
      "Тренуються слухове розрізнення, зорове впізнавання, знання літер і надійне зіставлення слова з образом.",
  },
  {
    label: "Етап 2",
    title: "Перші кроки читання",
    text:
      "Зі звуків складаються склади, зі складів — слова, а зі слів — перші короткі мовні моделі зі змістом.",
    focus:
      "Тренуються читання складів, побудова слова, короткі службові слова й прості мовні структури з опорою на зображення та аудіо.",
  },
  {
    label: "Етап 3",
    title: "Читацькі ключі",
    text:
      "Дитина відкриває складніші моделі письма як упізнавані ключі до впевненого читання.",
    focus:
      "Тренуються буквосполучення, особливі знаки, читацькі контрасти й зв’язок між написанням, звучанням, словом і значенням.",
  },
];

const PRINCIPLES = [
  {
    title: "Системно",
    text:
      "Навчальні кроки мають підготовлену прогресію. Новий матеріал спирається на те, що вже було закріплено раніше.",
  },
  {
    title: "Поступово",
    text:
      "Кожне завдання зменшує складність. Дитина зустрічає нові вимоги маленькими, повторюваними кроками.",
  },
  {
    title: "Через звук",
    text:
      "Старт іде через слухання: звуки, початкові звуки, звукові відмінності та зв’язок між звуком і літерою стають відчутними.",
  },
  {
    title: "Через склад",
    text:
      "Склад стає мостом між окремими звуками й читабельним словом. Він робить будову слова видимою та керованою.",
  },
  {
    title: "З опорою на контекст",
    text:
      "Дитині допомагають зрозумілі картинки, аудіо, повторення, дія та стабільні мовні моделі.",
  },
  {
    title: "Через зміст",
    text:
      "Читання від початку пов’язане з розумінням: слово або мовна модель веде до картинки, дії та значення.",
  },
];

export default function DydaktykaPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Дидактика, яка м’яко веде дитину до читання</h1>
          <p>
            DeLevel поєднує ранню literacy, фонологічну усвідомленість і
            структуроване входження в письмо у зрозумілий цифровий навчальний
            шлях.
          </p>
          <p>
            Дитина слухає, бачить, розрізняє, обирає, складає і читає крок за
            кроком: від звуку до письма і від знака до змісту.
          </p>
        </div>
      </section>

      <section className={styles.pathSection} aria-labelledby="path-title">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Навчальний шлях</p>
          <h2 id="path-title">Від літери до читання</h2>
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
          <p className={styles.kicker}>Три навчальні світи</p>
          <h2 id="levels-title">Прогресія у трьох етапах</h2>
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
          <h2 id="principles-title">Як ведеться навчальний шлях</h2>
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
          <h2>Рання literacy і структурована підтримка читання</h2>
        </div>

        <p>
          Підхід спирається на ключові сфери раннього входження в письмо:
          фонологічну усвідомленість, знання літер, зв’язок між звуком і знаком,
          роботу зі складом, поєднання слова з образом і читання зі змістом.
        </p>
        <p>
          Цифрове середовище робить ці навчальні сфери видимими, повторюваними
          й близькими до дії. Дитина чує мову, бачить значення, діє у грі й
          поступово зустрічає письмо маленькими підготовленими кроками.
        </p>
      </section>

      <section className={styles.closingSection} aria-label="Коротке резюме">
        <p>Від слухання до впізнавання.</p>
        <p>Від впізнавання до поєднання.</p>
        <p>Від поєднання до читання.</p>
        <strong>Ігрово на поверхні. Системно в побудові.</strong>
      </section>

      <Link className={styles.backHome} href="/">
        ← До демо
      </Link>
    </main>
  );
}