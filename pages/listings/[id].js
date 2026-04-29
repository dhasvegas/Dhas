import { useRouter } from "next/router";
import Link from "next/link";
import listings from "../../data/listings.json";
import styles from "../../styles/ListingDetail.module.css";

export default function ListingDetail() {
  const router = useRouter();
  const { id } = router.query;
  const listing = listings.find((l) => l.id === Number(id));

  if (!listing) {
    return (
      <div className={styles.container}>
        <h1>Listing not found</h1>
        <Link href="/listings">Back to Listings</Link>
      </div>
    );
  }

  const priceFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(listing.price);

  return (
    <div className={styles.container}>
      <Link href="/listings" className={styles.back}>
        &larr; Back to Listings
      </Link>
      <div className={styles.imagePlaceholder}>
        <span>Photo</span>
      </div>
      <h1>{listing.title}</h1>
      <p className={styles.price}>{priceFormatted}</p>
      <p className={styles.address}>{listing.address}</p>
      <div className={styles.details}>
        <span>{listing.beds} Bedrooms</span>
        <span>{listing.baths} Bathrooms</span>
        <span>{listing.sqft.toLocaleString()} sqft</span>
      </div>
      <p className={styles.description}>{listing.description}</p>

      <section className={styles.contact}>
        <h2>Interested?</h2>
        <p>Contact us to schedule a viewing.</p>
        <Link href="/contact" className={styles.contactBtn}>
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
