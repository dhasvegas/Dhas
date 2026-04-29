import Link from "next/link";
import styles from "../../styles/Agent.module.css";

export default function DannyProfile() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.back}>
        ← Back to Home
      </Link>
      <section className={styles.header}>
        <img
          src="/images/headshots/danny.jpg"
          alt="Danny Dhas headshot"
          width={200}
          height={200}
          className={styles.photo}
        />
        <h1 className={styles.name}>Danny Dhas</h1>
        <h2 className={styles.subtitle}>Las Vegas Realtor</h2>
      </section>
      <section className={styles.bio}>
        <p>
          Danny Dhas is a Las Vegas real estate professional known for guiding
          clients through complex market conditions with clarity and care. Focus
          areas include luxury homes, investment properties, and first-time
          buyers. Available for consultations and tours.
        </p>
      </section>
      <section className={styles.contact}>
        <h3>Contact</h3>
        <p>Email: danny@example.com</p>
        <p>Phone: (555) 555-0123</p>
      </section>
    </div>
  );
}
