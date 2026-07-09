import Link from "next/link";
import styles from "./page.module.css";

const CONTACT_EMAIL = "kontakt@example.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/dein-profil";

const STORY_PARAGRAPHS = [
  "Я знаю, як змінюється життя, коли в нього входить нова мова.",
  "Спочатку вона звучить чужо: надто швидко, надто складно, іноді майже недосяжно. Потім з’являються перші знайомі звуки, перші слова, перші маленькі перемоги. І в якийсь момент розумієш: мова більше не стоїть перед тобою стіною. Вона стає шляхом.",
  "Я мігрантка. Я знаю шість мов, і мови для мене ніколи не були просто захопленням. Вони є частиною мого життя, мого шляху і мого способу знаходити своє місце у світі.",
  "Німецька стала для мене особливою мовою. Спочатку вона здавалася суворою, точною і не дуже доступною. З часом я відкрила її красу: структуру, логіку, звучання, тонкі відтінки значень і особливий порядок, який відкривається крок за кроком.",
  "Я навчилася любити німецьку.",
  "Із цього відчуття народився DeLevel: теплий, зрозумілий і дитячий шлях у мову та читання.",
  "Я хотіла створити навчальний світ, у якому діти спочатку відчувають не тиск, а цікавість. Світ, де вони слухають, бачать, пробують, грають, повторюють і поступово розуміють: я це розумію, я можу.",
  "Особливо важливим для мене цей шлях є для дітей із міграційним досвідом і для білінгвальних родин. Мова для дитини — це не лише школа. Мова означає дружбу, безпеку, участь, упевненість і можливість відчути себе на своєму місці.",
  "Перші звуки, літери й слова не мають звучати як перевірка. Вони мають асоціюватися з красою, грою, маленькими успіхами й відчуттям прийняття.",
  "У цьому проєкті я поєдную любов до мов, власний міграційний досвід, дидактичну роботу, візуальне мислення і цифрову розробку.",
  "DeLevel має допомогти дітям відкривати літери, чути мову, розуміти перші слова і крок за кроком приходити до читання.",
  "Я хочу, щоб діти навчалися любити мову — так, як я навчилася любити її сама.",
];

const CONTACT_AUDIENCES = [
  "Освітні організації",
  "Фонди та ініціативи",
  "Мовні центри",
  "EdTech-партнери",
  "Інвестори",
  "Інтеграційні проєкти",
];

export default function KontaktyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Авторка і контакт</p>
          <h1>Особиста мовна історія стає освітнім проєктом</h1>
          <p>
            DeLevel народився з міграційного досвіду, любові до мов і
            дидактичної роботи — з бажання зробити шлях дитини до мови й
            читання теплим, ясним і красивим.
          </p>
        </div>

        <aside className={styles.heroCard} aria-label="Контакт">
          <span className={styles.cardLabel}>Контакт</span>
          <strong>Цікава співпраця?</strong>
          <p>
            Проєкт відкритий для партнерів, організацій, інвесторів та освітніх
            ініціатив, які хочуть розвивати раннє мовлення і читання для дітей.
          </p>

          <div className={styles.contactButtons}>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.primaryLink}>
              Написати e-mail
            </a>
            <a
              href={LINKEDIN_URL}
              className={styles.secondaryLink}
              target="_blank"
              rel="noreferrer"
            >
              Відкрити LinkedIn
            </a>
          </div>
        </aside>
      </section>

      <section className={styles.storySection} aria-labelledby="story-title">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Історія проєкту</p>
          <h2 id="story-title">Чому я створюю DeLevel</h2>
        </div>

        <div className={styles.storyCard}>
          {STORY_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={styles.quoteSection} aria-label="Головна ідея">
        <p>
          Щоб мова для дитини була не бар’єром, а шляхом, яким можна йти крок
          за кроком.
        </p>
      </section>

      <section className={styles.partnerSection} aria-labelledby="partner-title">
        <div className={styles.partnerText}>
          <p className={styles.kicker}>Співпраця</p>
          <h2 id="partner-title">
            Для людей і організацій зі схожою освітньою ідеєю
          </h2>
          <p>
            DeLevel звернений до партнерів, які хочуть відкривати дітям доступ
            до мови, письма й освіти — педагогічно відповідально, візуально
            сильно і цифрово масштабовано.
          </p>
        </div>

        <div className={styles.audienceGrid}>
          {CONTACT_AUDIENCES.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className={styles.contactSection} aria-label="Контактні дані">
        <div>
          <p className={styles.kicker}>Прямий контакт</p>
          <h2>Контактна інформація</h2>
        </div>

        <div className={styles.contactList}>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            LinkedIn-профіль
          </a>
        </div>
      </section>

      <Link className={styles.backHome} href="/">
        ← До демо
      </Link>
    </main>
  );
}