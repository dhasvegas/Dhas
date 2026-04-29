import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Find Your Dream Home</h1>
        <p>Your trusted partner in Los Angeles real estate</p>
        <Link href="/listings" className={styles.cta}>
          Browse Listings
        </Link>
      </header>

      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>Buy</h3>
          <p>Browse our curated selection of homes for sale.</p>
        </div>
        <div className={styles.feature}>
          <h3>Sell</h3>
          <p>Get top dollar for your property with expert guidance.</p>
        </div>
        <div className={styles.feature}>
          <h3>Rent</h3>
          <p>Find the perfect rental in your ideal neighborhood.</p>
        </div>
      </section>

      <section className={styles.about}>
        <h2>About Us</h2>
        <p>
          We are a full-service real estate team dedicated to helping you
          navigate the LA market with confidence. Whether you are buying,
          selling, or renting, we have got you covered.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2026 Theo Ayala Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
}
