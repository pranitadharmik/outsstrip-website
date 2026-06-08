import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Crown, Sparkles, Plane } from "lucide-react";
import { PageHero, Reveal, StaggerGroup, StaggerItem } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/data/packages";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Travel Packages & Pricing — Outsstrip" },
      { name: "description", content: "Choose from Basic, Premium and Luxury travel packages — or pick a featured curated trip." },
      { property: "og:title", content: "Packages — Outsstrip" },
      { property: "og:description", content: "Affordable to luxury — find your perfect trip." },
    ],
  }),
  component: Packages,
});

const tiers = [
  {
    name: "Basic",
    price: "₹9,999",
    icon: Plane,
    desc: "Perfect for short weekend escapes.",
    features: ["3-star accommodation", "Daily breakfast", "Airport transfers", "Sightseeing tour", "Email support"],
    featured: false,
  },
  {
    name: "Premium",
    price: "₹24,999",
    icon: Sparkles,
    desc: "Our most popular tier — balanced comfort.",
    features: ["4-star accommodation", "All meals included", "Private transport", "Guided tours", "24/7 phone support", "Travel insurance"],
    featured: true,
  },
  {
    name: "Luxury",
    price: "₹59,999",
    icon: Crown,
    desc: "Five-star indulgence, every detail handled.",
    features: ["5-star resorts", "Fine dining", "Luxury chauffeur", "Private guides", "Spa & experiences", "Concierge & visa"],
    featured: false,
  },
];

function Packages() {
  return (
    <>
      <PageHero kicker="Packages" title="Find Your Perfect Trip" subtitle="From budget-friendly getaways to bucket-list luxury experiences." />

      {/* PRICING */}
      {/* <section className="py-20 container mx-auto px-6">
        <StaggerGroup className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-3xl border h-full flex flex-col ${
                  t.featured
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-elegant scale-105"
                    : "bg-card border-border shadow-card"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs px-3 py-1 rounded-full font-bold shadow-card">MOST POPULAR</span>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${t.featured ? "bg-white/20" : "bg-gradient-primary text-white"}`}>
                  <t.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold">{t.name}</h3>
                <p className={`text-sm mb-5 ${t.featured ? "text-white/80" : "text-muted-foreground"}`}>{t.desc}</p>
                <div className="font-display text-4xl font-bold mb-1">{t.price}</div>
                <div className={`text-xs mb-6 ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>per person</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.featured ? "text-white" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`text-center py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                    t.featured ? "bg-white text-primary" : "bg-gradient-primary text-primary-foreground"
                  }`}
                >
                  Book Now
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section> */}

      {/* Featured */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Curated Trips</h2>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((p) => <StaggerItem key={p.title}><PackageCard pkg={p} /></StaggerItem>)}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
