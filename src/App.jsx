import React from "react";

const listings = [
  {
    label: "Showcase Listing",
    title: "5201 Peak Climb Dr",
    area: "Las Vegas, NV 89135 • Summerlin South",
    details: "4 Beds • 5 Baths • 4,166 Sq.Ft. • Built 2020",
    price: "$3,200,000",
    note: "Fully furnished modern residence on an ultra-private lot with no rear neighbors, mountain backdrop, private courtyard, water feature, pool, spa, EV charging, and 3-car garage.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    label: "Active Under Contract",
    title: "4016 Rubicon Peak Ct",
    area: "Las Vegas, NV 89129 • Lone Mountain Classics",
    details: "5 Beds • 3 Baths • 3,342 Sq.Ft. • 0.35 Acres",
    price: "$925,000",
    note: "Gated community home with mountain views, expansive lot, private backyard oasis, pool, spa, RV access/parking, and generous entertaining areas.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    label: "Active Listing",
    title: "1606 Rock Kestrel St",
    area: "Las Vegas, NV 89138 • Summerlin West",
    details: "4 Beds • 3 Baths • 2,068 Sq.Ft. • Built 2024",
    price: "$599,000",
    note: "Like-new gated Summerlin West residence with open-concept living, stainless steel appliances, walk-in pantry, elevated lot privacy, loft, and peek-a-boo Strip views from the primary suite.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    label: "Active Listing",
    title: "639 Pepper Tree Cir",
    area: "Henderson, NV 89014 • Green Valley North",
    details: "2 Beds • 2 Baths • 1,176 Sq.Ft. • Townhouse",
    price: "$299,000",
    note: "Updated single-story townhome with open-concept layout, two-car garage, spacious patio, community pools, clubhouse, tennis courts, and convenient access to shopping, parks, and freeways.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
  },
];

const neighborhoods = [
  { name: "The Summit Club", area: "Summerlin South", note: "Ultra-private Discovery Land Company community known for custom estates, golf, mountain views, and some of the highest-end residences in Las Vegas." },
  { name: "The Ridges", area: "Summerlin", note: "One of Summerlin’s most recognized guard-gated luxury communities with modern architecture, elevated lots, and Red Rock views." },
  { name: "MacDonald Highlands", area: "Henderson", note: "A hillside luxury community with dramatic Strip views, DragonRidge Country Club, and architecturally significant custom homes." },
  { name: "Ascaya", area: "Henderson", note: "A private mountainside enclave with custom desert-modern estates, panoramic city views, and strong architectural identity." },
  { name: "Southern Highlands Golf Club", area: "Southwest Las Vegas", note: "A prestigious guard-gated golf community known for estate homes, mature landscaping, privacy, and club-centered living." },
  { name: "Spanish Hills", area: "West Las Vegas", note: "A discreet luxury enclave with large custom estates, privacy, and quick access to the Strip and Summerlin corridor." },
  { name: "Tournament Hills", area: "Summerlin / TPC Las Vegas", note: "A classic guard-gated luxury neighborhood with golf-front estates and a more established, private feel." },
  { name: "Red Rock Country Club", area: "Summerlin", note: "Guard-gated golf course living with luxury homes, club amenities, mountain views, and strong lifestyle appeal." },
];

const process = [
  { number: "01", title: "Pricing & Positioning", text: "Strategic pricing, buyer-profile analysis, neighborhood comparison, and launch timing built around the home’s strongest selling angle." },
  { number: "02", title: "Cinematic Presentation", text: "Editorial photography, cinematic video, drone visuals where permitted, social media cuts, detail-focused storytelling, and luxury listing copy." },
  { number: "03", title: "Private Launch Strategy", text: "Pre-market preparation, agent-to-agent exposure, private showings, digital campaigns, and curated buyer outreach before the home is treated like a commodity." },
  { number: "04", title: "Negotiation & Closing", text: "Offer review, buyer qualification, contract strategy, inspection navigation, and hands-on communication from first showing to final closing." },
];

const services = [
  { number: "01", title: "Luxury Buying Strategy", text: "Buyer representation, relocation guidance, first-time buyer support, investor strategy, new construction, and luxury home search across Las Vegas and Henderson." },
  { number: "02", title: "Listing Presentation", text: "Listing representation backed by The Agency brand, Zillow Showcase exposure where applicable, digital presentation, virtual tour strategy, and elevated launch marketing." },
  { number: "03", title: "Relocation to Vegas", text: "Local market guidance focused on Danny’s public service areas: Las Vegas, Henderson, Summerlin North, and Summerlin South." },
  { number: "04", title: "New Construction", text: "Builder guidance, lot selection, design center insight, community comparison, and negotiation support for new-home buyers." },
];

function Button({ children, href = "#contact", outline = false }) {
  return <a href={href} className={outline ? "btn btn-outline" : "btn"}>{children}</a>;
}

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top">Danny Dhas</a>
        <nav>
          <a href="#properties">Properties</a>
          <a href="#list-with-danny">List With Danny</a>
          <a href="#about">About</a>
          <a href="#neighborhoods">Neighborhoods</a>
          <a href="#youtube">YouTube</a>
          <a href="#contact">Contact</a>
        </nav>
        <Button>Book Consult</Button>
      </header>

      <section id="top" className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div>
            <p className="eyebrow">Las Vegas Luxury Real Estate</p>
            <h1>Real estate with a sharper Vegas point of view.</h1>
          </div>
          <div className="hero-card">
            <p>The Agency Las Vegas REALTOR® helping buyers, sellers, relocation clients, first-time buyers, investors, new-construction buyers, and luxury clients across Las Vegas, Henderson, and Summerlin.</p>
            <div className="actions">
              <Button href="#properties">View Properties</Button>
              <Button href="#youtube" outline>Play Video</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section container about-grid">
        <div>
          <p className="eyebrow muted">Meet</p>
          <h2>Danny Dhas</h2>
        </div>
        <div className="about-content">
          <div className="portrait">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop" alt="Agent portrait placeholder" />
          </div>
          <div className="copy-block">
            <p className="lead">Danny Dhas is a Las Vegas REALTOR® with The Agency Las Vegas. He brings a background in engineering and business, giving clients a sharp problem-solving mindset, strong attention to detail, and a service-first real estate experience.</p>
            <p>His public specialties include buyer representation, listing representation, relocation, first-time homebuyers, investment properties, luxury homes, new construction, and lot/land. His service areas include Las Vegas, Henderson, Summerlin North, and Summerlin South.</p>
            <Button href="#contact">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div><strong>16</strong><span>Total Sales on Zillow</span></div>
          <div><strong>6</strong><span>Sales Last 12 Months</span></div>
          <div><strong>$1M</strong><span>Average Sale Price</span></div>
        </div>
      </section>

      <section id="properties" className="section container">
        <div className="section-header">
          <div>
            <p className="eyebrow muted">Browse</p>
            <h2>Featured Properties</h2>
          </div>
          <Button outline>View All</Button>
        </div>
        <div className="listing-grid">
          {listings.map((listing) => (
            <article className="listing-card" key={listing.title}>
              <div className="listing-image">
                <img src={listing.image} alt={listing.title} />
                <span>{listing.label}</span>
              </div>
              <div className="listing-copy">
                <p className="area">{listing.area}</p>
                <h3>{listing.title}</h3>
                <p>{listing.details}</p>
                <p className="note">{listing.note}</p>
                <div className="card-footer"><b>{listing.price}</b><em>↗</em></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="list-with-danny" className="section container seller-section">
        <div className="seller-intro">
          <div>
            <p className="eyebrow muted">List With Danny Dhas</p>
            <h2>A white-glove selling strategy for luxury Las Vegas homes.</h2>
            <p className="lead">Selling a luxury home is not just putting it on the MLS. It is positioning, presentation, exposure, and negotiation — designed to make the right buyer feel like the opportunity is rare.</p>
            <div className="actions"><Button>Request Listing Consultation</Button><Button href="#properties" outline>View Featured Listings</Button></div>
          </div>
          <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1400&auto=format&fit=crop" alt="Luxury listing presentation" />
        </div>
        <div className="process-grid">
          {process.map((item) => (
            <div className="process-card" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="seller-note">
          <div><p className="eyebrow muted">Seller Experience</p><h3>White-glove from prep to close.</h3></div>
          <p>Danny’s selling process is designed for homeowners who want more than a sign in the yard. The goal is to create a controlled, elevated presentation that protects the home’s perceived value, attracts qualified buyers, and gives the seller clarity at every step.</p>
        </div>
      </section>

      <section className="section container">
        <div className="service-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="neighborhoods" className="neighborhoods">
        <div className="neighborhood-bg" />
        <div className="container neighborhood-content">
          <p className="eyebrow muted">Explore</p>
          <h2>Las Vegas’ most exclusive luxury communities.</h2>
          <div className="neighborhood-grid">
            {neighborhoods.map((item) => (
              <div className="neighborhood-card" key={item.name}>
                <div><h3>{item.name}</h3><span>⌖</span></div>
                <p className="area">{item.area}</p>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="youtube" className="section container">
        <div className="section-header">
          <div>
            <p className="eyebrow muted">Watch</p>
            <h2>YouTube</h2>
            <p className="lead narrow">Explore Danny’s Las Vegas real estate videos, luxury home tours, new construction walkthroughs, and neighborhood insight directly from his YouTube channel.</p>
          </div>
          <a className="btn" href="https://www.youtube.com/@dannydhas" target="_blank" rel="noreferrer">Visit Channel</a>
        </div>
        <div className="youtube-grid">
          <div className="video-card">
            <div className="video-frame"><iframe src="https://www.youtube.com/embed/hmF7P57Jolc" title="Working with Danny Dhas" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
            <div className="video-copy"><p className="eyebrow muted">Featured Video</p><h3>Working with Danny Dhas</h3><p>A credibility-focused video that introduces Danny through client trust, Las Vegas expertise, and the experience of working with him.</p></div>
          </div>
          <div className="video-links">
            <a href="https://www.youtube.com/watch?v=yP9_RSAxYoY" target="_blank" rel="noreferrer"><span>Luxury Tour</span><h3>Las Vegas Mega Mansion with Lazy River</h3><p>A high-impact luxury property tour built for buyers who want resort-level Vegas living.</p></a>
            <a href="https://www.youtube.com/watch?v=5i0Z4RG7iEk" target="_blank" rel="noreferrer"><span>Home Tour</span><h3>Modern 1-Story Luxury Home</h3><p>A polished property walkthrough highlighting design, lifestyle, and location.</p></a>
            <a href="https://www.youtube.com/@dannydhas" target="_blank" rel="noreferrer"><span>Channel</span><h3>More Las Vegas Real Estate Videos</h3><p>Luxury homes, new construction, buyer education, and market-focused video content.</p></a>
          </div>
        </div>
      </section>

      <section id="contact" className="section container contact-grid">
        <div>
          <p className="eyebrow muted">Work With Danny</p>
          <h2>Ready for a more intentional real estate experience?</h2>
          <p className="lead">Whether you’re buying, selling, relocating, or preparing a luxury listing for market, Danny’s process is built to feel elevated, informed, and direct.</p>
        </div>
        <form className="contact-card">
          <div className="contact-lines">
            <p>Phone: (702) 728-1188</p>
            <p>Email: danny.dhas@theagencyre.com</p>
            <p>Instagram: @dannydhas</p>
          </div>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Tell Danny what you’re looking for" />
          <button type="button">Submit Inquiry</button>
        </form>
      </section>

      <footer>
        <div className="container footer-inner">
          <p>© 2026 Danny Dhas. REALTOR® • The Agency Las Vegas • NV License S.198191</p>
          <p>Public-data concept preview. Verify all MLS details, brokerage compliance language, and listing status before publishing.</p>
        </div>
      </footer>
    </main>
  );
}
