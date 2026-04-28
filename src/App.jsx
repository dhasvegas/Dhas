import React from "react";

const listings = [
  {
    label: "Showcase Listing",
    title: "5201 Peak Climb Dr",
    area: "Las Vegas, NV 89135 • Summerlin South",
    details: "4 Beds • 5 Baths • 4,166 Sq.Ft. • Built 2020",
    price: "$3,200,000",
    note: "Fully furnished modern residence on an ultra-private lot with no rear neighbors, mountain backdrop, private courtyard, water feature, pool, spa, EV charging, and 3-car garage.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "Active Under Contract",
    title: "4016 Rubicon Peak Ct",
    area: "Las Vegas, NV 89129 • Lone Mountain Classics",
    details: "5 Beds • 3 Baths • 3,342 Sq.Ft. • 0.35 Acres",
    price: "$925,000",
    note: "Gated community home with mountain views, expansive lot, private backyard oasis, pool, spa, RV access/parking, and generous entertaining areas.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "Active Listing",
    title: "1606 Rock Kestrel St",
    area: "Las Vegas, NV 89138 • Summerlin West",
    details: "4 Beds • 3 Baths • 2,068 Sq.Ft. • Built 2024",
    price: "$599,000",
    note: "Like-new gated Summerlin West residence with open-concept living, stainless steel appliances, walk-in pantry, elevated lot privacy, loft, and peek-a-boo Strip views from the primary suite.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "Active Listing",
    title: "639 Pepper Tree Cir",
    area: "Henderson, NV 89014 • Green Valley North",
    details: "2 Beds • 2 Baths • 1,176 Sq.Ft. • Townhouse",
    price: "$299,000",
    note: "Updated single-story townhome with open-concept layout, two-car garage, spacious patio, community pools, clubhouse, tennis courts, and convenient access to shopping, parks, and freeways.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1400&auto=format&fit=crop",
  },
];

const neighborhoods = [
  {
    name: "The Summit Club",
    area: "Summerlin South",
    note: "Ultra-private Discovery Land Company community known for custom estates, golf, mountain views, and some of the highest-end residences in Las Vegas.",
  },
  {
    name: "The Ridges",
    area: "Summerlin",
    note: "One of Summerlin’s most recognized guard-gated luxury communities with modern architecture, elevated lots, and Red Rock views.",
  },
  {
    name: "MacDonald Highlands",
    area: "Henderson",
    note: "A hillside luxury community with dramatic Strip views, DragonRidge Country Club, and architecturally significant custom homes.",
  },
  {
    name: "Ascaya",
    area: "Henderson",
    note: "A private mountainside enclave with custom desert-modern estates, panoramic city views, and strong architectural identity.",
  },
  {
    name: "Southern Highlands Golf Club",
    area: "Southwest Las Vegas",
    note: "A prestigious guard-gated golf community known for estate homes, mature landscaping, privacy, and club-centered living.",
  },
  {
    name: "Spanish Hills",
    area: "West Las Vegas",
    note: "A discreet luxury enclave with large custom estates, privacy, and quick access to the Strip and Summerlin corridor.",
  },
  {
    name: "Tournament Hills",
    area: "Summerlin / TPC Las Vegas",
    note: "A classic guard-gated luxury neighborhood with golf-front estates and a more established, private feel.",
  },
  {
    name: "Red Rock Country Club",
    area: "Summerlin",
    note: "Guard-gated golf course living with luxury homes, club amenities, mountain views, and strong lifestyle appeal.",
  },
];

function Button({ children, dark = false }) {
  return (
    <button
      className={
        dark
          ? "rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
          : "rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.22em] text-black transition hover:bg-white/80"
      }
    >
      {children}
    </button>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-sm uppercase tracking-[0.42em]">Danny Dhas</div>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.24em] text-white/65 md:flex">
            <a href="#properties" className="hover:text-white">Properties</a>
            <a href="#list-with-danny" className="hover:text-white">List With Danny</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#neighborhoods" className="hover:text-white">Neighborhoods</a>
            <a href="#youtube" className="hover:text-white">YouTube</a>
            <a href="#sell" className="hover:text-white">Sell</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <Button>Book Consult</Button>
        </div>
      </header>

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1609770231080-e321deccc34c?q=80&w=1900&auto=format&fit=crop"
          alt="Luxury Las Vegas home"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.16),transparent_36%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-40 md:grid-cols-[1.25fr_.75fr] md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.38em] text-white/65">Las Vegas Luxury Real Estate</p>
            <h1 className="max-w-5xl font-serif text-6xl leading-[0.95] md:text-8xl">
              Real estate with a sharper Vegas point of view.
            </h1>
          </div>
          <div className="max-w-md border-l border-white/25 pl-6">
            <p className="text-lg leading-8 text-white/75">
              The Agency Las Vegas REALTOR® helping buyers, sellers, relocation clients, first-time buyers, investors, new-construction buyers, and luxury clients across Las Vegas, Henderson, and Summerlin.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button>View Properties</Button>
              <Button dark>Play Video</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">Meet</p>
          <h2 className="font-serif text-5xl md:text-6xl">Danny Dhas</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
              alt="Agent portrait placeholder"
              className="h-[440px] w-full object-cover grayscale"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl leading-9 text-white/75">
              Danny Dhas is a Las Vegas REALTOR® with The Agency Las Vegas. He brings a background in engineering and business, giving clients a sharp problem-solving mindset, strong attention to detail, and a service-first real estate experience.
            </p>
            <p className="mt-6 leading-8 text-white/55">
              His public specialties include buyer representation, listing representation, relocation, first-time homebuyers, investment properties, luxury homes, new construction, and lot/land. His service areas include Las Vegas, Henderson, Summerlin North, and Summerlin South.
            </p>
            <div className="mt-8">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 text-center md:grid-cols-3">
          <div>
            <p className="font-serif text-5xl">16</p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">Total Sales on Zillow</p>
          </div>
          <div>
            <p className="font-serif text-5xl">6</p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">Sales Last 12 Months</p>
          </div>
          <div>
            <p className="font-serif text-5xl">$1M</p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">Average Sale Price</p>
          </div>
        </div>
      </section>

      <section id="properties" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">Browse</p>
            <h2 className="font-serif text-5xl md:text-6xl">Featured Properties</h2>
          </div>
          <Button dark>View All</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {listings.map((listing) => (
            <article key={listing.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
              <div className="relative h-80 overflow-hidden">
                <img src={listing.image} alt={listing.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-5 top-5 rounded-full bg-black/55 px-4 py-2 text-xs uppercase tracking-[0.2em] backdrop-blur">
                  {listing.label}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-white/45">{listing.area}</p>
                <h3 className="mt-2 font-serif text-3xl">{listing.title}</h3>
                <p className="mt-4 text-sm text-white/55">{listing.details}</p>
                <p className="mt-4 text-sm leading-6 text-white/45">{listing.note}</p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-lg">{listing.price}</p>
                  <span className="text-white/50">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="list-with-danny" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">List With Danny Dhas</p>
            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              A white-glove selling strategy for luxury Las Vegas homes.
            </h2>
            <p className="mt-8 text-xl leading-9 text-white/60">
              Selling a luxury home is not just putting it on the MLS. It is positioning, presentation, exposure, and negotiation — designed to make the right buyer feel like the opportunity is rare.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.22em] text-black transition hover:bg-white/80">
                Request Listing Consultation
              </a>
              <a href="#properties" className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black">
                View Featured Listings
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury listing presentation"
              className="h-[520px] w-full object-cover opacity-90"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">01</p>
            <h3 className="mt-5 font-serif text-3xl">Pricing & Positioning</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Strategic pricing, buyer-profile analysis, neighborhood comparison, and launch timing built around the home’s strongest selling angle.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">02</p>
            <h3 className="mt-5 font-serif text-3xl">Cinematic Presentation</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Editorial photography, cinematic video, drone visuals where permitted, social media cuts, detail-focused storytelling, and luxury listing copy.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">03</p>
            <h3 className="mt-5 font-serif text-3xl">Private Launch Strategy</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Pre-market preparation, agent-to-agent exposure, private showings, digital campaigns, and curated buyer outreach before the home is treated like a commodity.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">04</p>
            <h3 className="mt-5 font-serif text-3xl">Negotiation & Closing</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Offer review, buyer qualification, contract strategy, inspection navigation, and hands-on communication from first showing to final closing.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">Seller Experience</p>
              <h3 className="mt-4 font-serif text-4xl md:text-5xl">White-glove from prep to close.</h3>
            </div>
            <p className="text-lg leading-9 text-white/60">
              Danny’s selling process is designed for homeowners who want more than a sign in the yard. The goal is to create a controlled, elevated presentation that protects the home’s perceived value, attracts qualified buyers, and gives the seller clarity at every step.
            </p>
          </div>
        </div>
      </section>

      <section id="sell" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">01</div>
            <h3 className="font-serif text-3xl">Luxury Buying Strategy</h3>
            <p className="mt-5 leading-8 text-white/55">Buyer representation, relocation guidance, first-time buyer support, investor strategy, new construction, and luxury home search across Las Vegas and Henderson.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">02</div>
            <h3 className="font-serif text-3xl">Listing Presentation</h3>
            <p className="mt-5 leading-8 text-white/55">Listing representation backed by The Agency brand, Zillow Showcase exposure where applicable, digital presentation, virtual tour strategy, and elevated launch marketing.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">03</div>
            <h3 className="font-serif text-3xl">Relocation to Vegas</h3>
            <p className="mt-5 leading-8 text-white/55">Local market guidance focused on Danny’s public service areas: Las Vegas, Henderson, Summerlin North, and Summerlin South.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">04</div>
            <h3 className="font-serif text-3xl">New Construction</h3>
            <p className="mt-5 leading-8 text-white/55">Builder guidance, lot selection, design center insight, community comparison, and negotiation support for new-home buyers.</p>
          </div>
        </div>
      </section>

      <section id="neighborhoods" className="relative overflow-hidden px-6 py-24">
        <img
          src="https://images.unsplash.com/photo-1575871322997-746f5278dd1a?q=80&w=1900&auto=format&fit=crop"
          alt="Las Vegas skyline"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">Explore</p>
          <h2 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Las Vegas’ most exclusive luxury communities.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {neighborhoods.map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur transition hover:bg-white/[0.08]">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-serif text-2xl">{item.name}</span>
                  <span className="text-white/45">⌖</span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/35">{item.area}</p>
                <p className="mt-4 text-sm leading-6 text-white/55">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="youtube" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">Watch</p>
            <h2 className="font-serif text-5xl leading-tight md:text-7xl">YouTube</h2>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/60">
              Explore Danny’s Las Vegas real estate videos, luxury home tours, new construction walkthroughs, and neighborhood insight directly from his YouTube channel.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@dannydhas"
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.22em] text-black transition hover:bg-white/80"
          >
            Visit Channel
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
            <div className="aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/hmF7P57Jolc"
                title="Working with Danny Dhas: A Trusted Advisor in Las Vegas Real Estate"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Featured Video</p>
              <h3 className="mt-3 font-serif text-3xl">Working with Danny Dhas</h3>
              <p className="mt-4 leading-8 text-white/55">
                A credibility-focused video that introduces Danny through client trust, Las Vegas expertise, and the experience of working with him.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <a href="https://www.youtube.com/watch?v=yP9_RSAxYoY" target="_blank" rel="noreferrer" className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:bg-white/[0.07]">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Luxury Tour</p>
              <h3 className="mt-3 font-serif text-2xl">Las Vegas Mega Mansion with Lazy River</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">A high-impact luxury property tour built for buyers who want resort-level Vegas living.</p>
            </a>
            <a href="https://www.youtube.com/watch?v=5i0Z4RG7iEk" target="_blank" rel="noreferrer" className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:bg-white/[0.07]">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Home Tour</p>
              <h3 className="mt-3 font-serif text-2xl">Modern 1-Story Luxury Home</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">A polished property walkthrough highlighting design, lifestyle, and location.</p>
            </a>
            <a href="https://www.youtube.com/@dannydhas" target="_blank" rel="noreferrer" className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:bg-white/[0.07]">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Channel</p>
              <h3 className="mt-3 font-serif text-2xl">More Las Vegas Real Estate Videos</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">Luxury homes, new construction, buyer education, and market-focused video content.</p>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[1fr_.8fr]">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">Work With Danny</p>
          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            Ready for a more intentional real estate experience?
          </h2>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/60">
            Whether you’re buying, selling, relocating, or preparing a luxury listing for market, Danny’s process is built to feel elevated, informed, and direct.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <div className="space-y-5 text-white/70">
            <p>Phone: (702) 728-1188</p>
            <p>Email: danny.dhas@theagencyre.com</p>
            <p>Instagram: @dannydhas</p>
          </div>
          <form className="mt-8 grid gap-4">
            <input className="rounded-full border border-white/10 bg-black/40 px-5 py-4 outline-none placeholder:text-white/30" placeholder="Name" />
            <input className="rounded-full border border-white/10 bg-black/40 px-5 py-4 outline-none placeholder:text-white/30" placeholder="Email" />
            <textarea className="min-h-32 rounded-[1.5rem] border border-white/10 bg-black/40 px-5 py-4 outline-none placeholder:text-white/30" placeholder="Tell Danny what you’re looking for" />
            <button className="rounded-full bg-white px-6 py-4 text-xs uppercase tracking-[0.22em] text-black transition hover:bg-white/80" type="button">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-white/45">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© 2026 Danny Dhas. REALTOR® • The Agency Las Vegas • NV License S.198191</p>
          <p>Public-data concept preview. Verify all MLS details, brokerage compliance language, and listing status before publishing.</p>
        </div>
      </footer>
    </main>
  );
}
