import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.avatarWrap}>
          <img
            src="/images/headshots/danny.jpg"
            alt="Danny Dhas headshot"
            className={styles.avatar}
          />
        </div>
        <h1>Find Your Dream Home in Las Vegas</h1>
        <p>Danny Dhas — Your trusted Las Vegas real estate expert</p>
        <Link href="/listings" className={styles.cta}>
          Browse Listings
        </Link>
      </header>

      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>Buy</h3>
          <p>Browse our curated selection of Las Vegas homes for sale.</p>
        </div>
        <div className={styles.feature}>
          <h3>Sell</h3>
          <p>Get top dollar for your property with expert guidance.</p>
        </div>
        <div className={styles.feature}>
          <h3>Rent</h3>
          <p>Find the perfect rental in your ideal Las Vegas neighborhood.</p>
        </div>
      </section>

      <section className={styles.meet}>
        <h2>Meet Danny Dhas</h2>
        <img src="/images/headshots/danny-meet.jpg" alt="Meet Danny Dhas" className={styles.meetImage} />
        <p>Bio: Danny Dhas is a Las Vegas realtor dedicated to helping you navigate the market with confidence. Whether you are buying, selling, or renting, Danny has got you covered.</p>
      </section>

      <section className={styles.about}>
        <h2>About Danny</h2>
        <p>
          Danny Dhas is a full-service Las Vegas realtor dedicated to helping
          you navigate the market with confidence. Whether you are buying,
          selling, or renting, Danny has got you covered.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2026 Danny Dhas Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
}
