import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Plane, Hotel, Car, Map, Compass, Globe, ArrowRight } from "lucide-react";
import { PageHero, StaggerGroup, StaggerItem } from "@/components/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Outsstrip" },
      { name: "description", content: "Holiday packages, hotel booking, transportation and bespoke travel planning by Outsstrip." },
      { property: "og:title", content: "Services — Outsstrip" },
      { property: "og:description", content: "Everything you need for a perfect trip." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Plane, title: "Holiday Packages", desc: "All-inclusive curated trips for couples, families and friends." },
  { icon: Hotel, title: "Hotel Booking", desc: "From boutique stays to 5-star resorts at best-rate guarantee." },
  { icon: Car, title: "Transportation", desc: "Private cabs, airport transfers, intercity travel — done." },
  { icon: Map, title: "Travel Planning", desc: "Custom itineraries crafted by certified travel experts." },
  { icon: Compass, title: "Guided Tours", desc: "Local guides who turn sightseeing into story-telling." },
{ icon: Globe, title: "Adventure Activities", desc: "Book thrilling experiences like trekking, scuba diving, and more." },
];

function Services() {
  return (
    <>
      <PageHero kicker="What We Do" title="Services Built Around You" subtitle="From inspiration to homecoming — every part of your trip handled with care." />

      <section className="py-20 container mx-auto px-6">
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-glow transition-shadow h-full overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary text-white flex items-center justify-center mb-5 group-hover:rotate-12 transition-transform">
                    <s.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{s.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-primary group/btn">
                    Enquire <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
      {/* TRAVEL MEMORIES */}
<section className="py-28 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
  <div className="container mx-auto px-6">

    <div className="text-center mb-16">
      <span className="text-primary font-semibold uppercase tracking-[0.2em]">
        Travel Memories
      </span>

      <h2 className="font-display text-4xl md:text-6xl font-bold mt-4">
        Moments We've Created
      </h2>

      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        Every trip tells a story. Here are some unforgettable memories
        shared by our travelers.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

      {/* <motion.div
        whileHover={{ scale: 1.03 }}
        className="col-span-2 row-span-2 rounded-3xl overflow-hidden"
      >
        <img
              src="/travelers/traveler1.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div> */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-3xl overflow-hidden"
      >
        <img
              src="travelers/traveler1.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-3xl overflow-hidden"
      >
        <img
              src="travelers/traveler2.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-3xl overflow-hidden"
      >
        <img
          src="/travelers/traveler3.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-3xl overflow-hidden"
      >
        <img
               src="/travelers/traveler4 (2).jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-3xl overflow-hidden"
      >
        <img
              src="/travelers/traveler5.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

<motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-3xl overflow-hidden"
      >
        <img
              src="/travelers/traveler6.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-3xl overflow-hidden"
      >
        <img
              src="/travelers/traveler7.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-3xl overflow-hidden"
      >
        <img
              src="/travelers/traveler8.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>


    </div>

    <div className="text-center mt-16">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
      >
        Create Your Own Story
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

  </div>
</section>
    </>

  );
}
