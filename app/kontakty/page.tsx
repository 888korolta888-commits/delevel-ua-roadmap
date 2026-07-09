import Link from "next/link";
import styles from "./page.module.css";

const CONTACT_EMAIL = "kontakt@example.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/dein-profil";



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