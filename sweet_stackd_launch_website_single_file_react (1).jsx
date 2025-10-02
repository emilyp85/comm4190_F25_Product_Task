import React from "react";

// --- Brand Tokens ---
const brand = {
  bg: "#FFF9EE",
  brown: "#4B2E23",
  maple: "#C9771D",
  honey: "#F4B73B",
  butter: "#FFD46B",
};

const Star = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden className={props.className}>
    <path fill="currentColor" d="M12 2l2.92 6.26 6.9.61-5.2 4.6 1.56 6.78L12 16.9 5.82 20.25l1.56-6.78-5.2-4.6 6.9-.61L12 2z"/>
  </svg>
);

const Drip = ({className, color = brand.honey}) => (
  <svg className={className} viewBox="0 0 1440 200" preserveAspectRatio="none">
    <path fill={color} d="M0,64L60,85.3C120,107,240,149,360,165.3C480,181,600,171,720,149.3C840,128,960,96,1080,101.3C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
  </svg>
);

// Inline text-logo to avoid external assets
const TextLogo = ({primary = brand.honey, shadow = brand.brown}) => (
  <div className="relative inline-block">
    <div
      className="select-none"
      style={{
        textShadow: `3px 3px 0 ${shadow}`,
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <span
        className="block leading-none"
        style={{ color: primary, fontWeight: 900, fontSize: "54px" }}
      >
        Sweet & Stack’d
      </span>
    </div>
  </div>
);

const Badge = ({children}) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-amber-700/20 bg-amber-100 px-3 py-1 text-amber-800 text-sm">
    {children}
  </span>
);

const ReviewCard = ({name, quote}) => (
  <figure className="rounded-2xl border border-amber-900/10 bg-white p-5 shadow-sm">
    <div className="flex items-center gap-1 text-amber-600">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4" />
      ))}
    </div>
    <blockquote className="mt-3 text-slate-800">“{quote}”</blockquote>
    <figcaption className="mt-2 text-sm text-slate-500">— {name}</figcaption>
  </figure>
);

const FeatureCard = ({title, description, icon}) => (
  <div className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm">
    <div className="mb-3 text-amber-700">{icon}</div>
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-1 text-slate-600">{description}</p>
  </div>
);

const Pill = ({children}) => (
  <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-semibold text-amber-900">{children}</span>
);

export default function SweetAndStackdSite() {
  return (
    <div style={{ background: brand.bg }} className="min-h-screen w-full text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-amber-900/10 bg-[\#FFF7E8]/80 backdrop-blur supports-[backdrop-filter]:bg-[\#FFF7E8]/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <TextLogo />
            <Pill>New</Pill>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#features" className="hover:text-amber-700">Features</a>
            <a href="#reviews" className="hover:text-amber-700">Reviews</a>
            <a href="#buy" className="hover:text-amber-700">Buy</a>
            <a href="#faq" className="hover:text-amber-700">FAQ</a>
          </nav>
          <a href="#buy" className="rounded-xl bg-amber-600 px-4 py-2 font-semibold text-white shadow hover:bg-amber-700">Snack the Stack™</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2">
          <div>
            <Badge>Breakfast Meets Crunch</Badge>
            <h1 className="mt-4 text-5xl font-black leading-tight text-amber-900">Pancakes, but Make It Crunchy</h1>
            <p className="mt-4 text-lg text-slate-700">
              <strong>Sweet & Stack’d™</strong> flips golden pancake bliss—buttery, honeyed, and a whisper of maple—into an
              anytime, anywhere snack with a craveable ridged crunch.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#buy" className="rounded-2xl bg-amber-600 px-6 py-3 text-white shadow-md hover:bg-amber-700">Buy Now</a>
              <a href="#story" className="rounded-2xl border border-amber-900/10 bg-white px-6 py-3 text-amber-900 hover:border-amber-700/30">Learn More</a>
              <div className="flex items-center gap-2 text-sm text-amber-700">
                <Star className="h-4 w-4"/><span>4.9/5 snackers approve</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Honey-Maple</Badge>
              <Badge>Buttery Crunch</Badge>
              <Badge>Sweet–Savory Balance</Badge>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl border border-amber-900/10 bg-white p-6 shadow-xl">
              {/* Mock bag render */}
              <div className="rounded-2xl bg-gradient-to-b from-amber-100 to-amber-200 p-6 text-center">
                <TextLogo />
                <p className="mt-2 text-sm font-semibold text-amber-800">Honey Butter Hotcake Flavor</p>
                <div className="mx-auto mt-4 h-32 w-full rounded-xl bg-[radial-gradient(circle_at_30%_30%,#FFE9A8,transparent_60%),radial-gradient(circle_at_70%_70%,#FFD46B,transparent_55%)]" />
                <p className="mt-4 text-sm text-slate-600">Ridged potato chips • Net wt. 6 oz</p>
              </div>
            </div>
          </div>
        </div>
        <Drip className="absolute bottom-0 left-0 h-12 w-full" />
      </section>

      {/* STORY */}
      <section id="story" className="bg-amber-100/60 py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-extrabold text-amber-900">The Sweet & Stack’d™ Story</h2>
          <p className="mt-3 text-lg text-slate-700">
            Born from cozy brunch vibes and late‑night cravings, Sweet & Stack’d™ is comfort food reimagined for
            real life. We took the crispy edge of pancakes, the glow of warm honey, and a buttery finish and stacked
            them into a chip that just makes sense.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold text-amber-900">Why You’ll Crave It</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              title="Breakfast‑Inspired Flavor"
              description="Buttery pancake notes with a drizzle of honey and maple sweetness."
              icon={<span className="text-2xl">🥞</span>}
            />
            <FeatureCard
              title="Sweet–Savory Balance"
              description="Comforting sweetness meets salty chip satisfaction for endless munchability."
              icon={<span className="text-2xl">🍯</span>}
            />
            <FeatureCard
              title="Extra Crunch, Extra Seasoning"
              description="Ridged texture locks in more flavor for a perfect bite every time."
              icon={<span className="text-2xl">🔥</span>}
            />
          </div>
          <div className="mt-6 rounded-xl border border-amber-900/10 bg-white p-4 text-sm text-slate-600">
            <strong>Ingredients (concept):</strong> potatoes, sunflower oil, sugar, salt, natural flavors (honey, maple), butter powder (milk),
            spices. <em>Allergen:</em> contains milk.
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold text-amber-900">Real Snackers, Real Love</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <ReviewCard name="Ava M." quote="Tastes like brunch in a bag. Sweet, salty, and totally addictive." />
            <ReviewCard name="Jordan P." quote="The honey‑maple aftertaste is perfection. I finished the bag in one sitting." />
            <ReviewCard name="Sam K." quote="Finally a sweet‑savory chip that actually balances both. New favorite!" />
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">Average rating 4.9/5 from early taste tests.</p>
        </div>
      </section>

      {/* BUY */}
      <section id="buy" className="relative bg-gradient-to-b from-amber-50 to-amber-200 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-extrabold text-amber-900">Get Sweet & Stack’d™</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Single Bag</h3>
              <p className="mt-1 text-slate-600">Net wt. 6 oz • Limited Launch</p>
              <p className="mt-4 text-3xl font-black text-amber-700">$3.99</p>
              <a className="mt-5 block rounded-xl bg-amber-600 px-4 py-2 text-center font-semibold text-white hover:bg-amber-700" href="#">Add to Cart</a>
            </div>
            <div className="relative rounded-2xl border border-amber-900/10 bg-white p-6 shadow-md ring-2 ring-amber-500">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-700 px-3 py-1 text-xs font-semibold text-white">Best Value</span>
              <h3 className="mt-1 text-xl font-bold">Party Pack (6)</h3>
              <p className="mt-1 text-slate-600">Perfect for movie nights & study sessions</p>
              <p className="mt-4 text-3xl font-black text-amber-700">$21.99</p>
              <a className="mt-5 block rounded-xl bg-amber-600 px-4 py-2 text-center font-semibold text-white hover:bg-amber-700" href="#">Add to Cart</a>
            </div>
            <div className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Subscribe & Snack</h3>
              <p className="mt-1 text-slate-600">Monthly delivery • Cancel anytime</p>
              <p className="mt-4 text-3xl font-black text-amber-700">$3.59 <span className="text-base font-semibold text-slate-500">/ bag</span></p>
              <a className="mt-5 block rounded-xl bg-amber-600 px-4 py-2 text-center font-semibold text-white hover:bg-amber-700" href="#">Start Subscription</a>
            </div>
          </div>
        </div>
        <Drip className="absolute bottom-0 left-0 h-10 w-full" color={brand.maple} />
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-amber-50 py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-extrabold text-amber-900">FAQ</h2>
          <div className="mt-6 space-y-4">
            <details className="group rounded-xl border border-amber-900/10 bg-white p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900 group-open:text-amber-800">Is it really sweet and savory?</summary>
              <p className="mt-2 text-slate-600">Yes! Expect a balanced hit of salty chip goodness followed by buttery honey‑maple notes.</p>
            </details>
            <details className="group rounded-xl border border-amber-900/10 bg-white p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900 group-open:text-amber-800">Is this gluten‑free?</summary>
              <p className="mt-2 text-slate-600">The base is potato; check final production labels for certified gluten‑free status.</p>
            </details>
            <details className="group rounded-xl border border-amber-900/10 bg-white p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900 group-open:text-amber-800">What’s the slogan?</summary>
              <p className="mt-2 text-slate-600"><strong>Snack the Stack™</strong> — because pancakes shouldn’t have to wait for morning.</p>
            </details>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-amber-900/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <div className="flex items-center gap-3">
            <TextLogo />
            <span className="text-sm text-slate-500">© {new Date().getFullYear()} Sweet & Stack’d™</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a href="#" className="hover:text-amber-700">Instagram</a>
            <a href="#" className="hover:text-amber-700">TikTok</a>
            <a href="#" className="hover:text-amber-700">Twitter/X</a>
            <a href="#" className="hover:text-amber-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
