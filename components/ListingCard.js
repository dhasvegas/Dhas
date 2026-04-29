import Link from "next/link";
import styles from "../styles/ListingCard.module.css";

export default function ListingCard({ listing }) {
  const priceFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(listing.price);

  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <span>Photo</span>
      </div>
      <div className={styles.info}>
        <h3>{listing.title}</h3>
        <p className={styles.price}>{priceFormatted}</p>
        <p className={styles.address}>{listing.address}</p>
        <div className={styles.details}>
          <span>{listing.beds} bed</span>
          <span>{listing.baths} bath</span>
          <span>{listing.sqft.toLocaleString()} sqft</span>
        </div>
        <Link href={`/listings/${listing.id}`} className={styles.viewBtn}>
          View Details
        </Link>
      </div>
    </div>
  );
}
