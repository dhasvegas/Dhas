import ListingCard from "../../components/ListingCard";
import listings from "../../data/listings.json";
import styles from "../../styles/Listings.module.css";

export default function Listings() {
  return (
    <div className={styles.container}>
      <h1>Property Listings</h1>
      <div className={styles.grid}>
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
