import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Hotel, Car, Map, Shield, Heart, Headphones, Wallet, Star, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/data/packages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Outsstrip" },
      { name: "description", content: "Discover handcrafted holiday packages, hotels, transport and custom travel planning with Outsstrip." },
      { property: "og:title", content: "Outsstrip — Turning Trips into Memories" },
      { property: "og:description", content: "Explore the world with comfort." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Plane, title: "Holiday Packages", desc: "Curated trips for every traveler." },
  { icon: Hotel, title: "Hotel Booking", desc: "Best stays at unbeatable prices." },
  { icon: Car, title: "Transportation", desc: "Comfortable rides door-to-door." },
  { icon: Map, title: "Travel Planning", desc: "Custom itineraries built for you." },
];

const why = [
  { icon: Wallet, title: "Affordable", desc: "Honest pricing, no hidden fees." },
  { icon: Shield, title: "Trusted", desc: "100% secure bookings." },
  { icon: Heart, title: "Customized Trips", desc: "Designed around your dreams." },
  { icon: Headphones, title: "24/7 Support", desc: "We're with you everywhere." },
];

const testimonials = [
  {
    name: "Priyanka Sharma",
    text: "Our Rajasthan trip was beautifully organized by Outsstrip. Hotels, transfers, and sightseeing were all perfectly managed.",
    role: "Rajasthan Traveler",
  },
  {
    name: "Ankit Mehta",
    text: "Had a fantastic Kerala vacation with Outsstrip. Everything was smooth, well-planned, and hassle-free.",
    role: "Kerala Traveler",
  },
  {
    name: "Shruti Mathur",
    text: "Our Darjeeling and Gangtok holiday was amazing. Hotels, sightseeing, and transportation were arranged perfectly.",
    role: "Gangtok Explorer",
  },
  {
    name: "Mohd Zaid",
    text: "We traveled to Jaisalmer in a group of 30 people and every arrangement was handled flawlessly.",
    role: "Jaisalmer Traveler",
  },
  {
    name: "Subhamna Patil",
    text: "Our South India tour was extremely well organized. Every destination was covered smoothly.",
    role: "South India Traveler",
  },
  {
    name: "Dibakar",
    text: "The Rajasthan itinerary was perfectly planned from start to finish. A completely stress-free experience.",
    role: "Rajasthan Explorer",
  },
  {
    name: "Neeraj Kashyap",
    text: "One of the best travel experiences we've had. The team was professional and always ready to help.",
    role: "Happy Traveler",
  },
  {
    name: "Rahul Verma",
    text: "Booking with Outsstrip was the best decision for our family vacation. Everything was organized perfectly.",
    role: "Family Traveler",
  },
  {
    name: "Sneha Kulkarni",
    text: "Excellent service, great hotels, and smooth transportation throughout the trip.",
    role: "Holiday Traveler",
  },
  {
    name: "Aditi Joshi",
    text: "From planning to execution, the experience was seamless. We enjoyed every moment.",
    role: "Vacation Explorer",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-32 left-10 w-32 h-16 bg-white/40 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-40 right-20 w-48 h-20 bg-white/30 rounded-full blur-3xl"
        />

        <div className="relative container mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6"
          >
            ✈ Premium Travel Experiences
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
          >
            Turning Trips into <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Memories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
           Explore the world with comfort and confidence. From relaxing getaways to thrilling adventures — we create journeys that turn into unforgettable memories.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link to="/packages" className="group inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-full font-semibold shadow-elegant hover:scale-105 transition-transform">
              Explore Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 glass-dark text-white border border-white/30 px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs"
        >
          Scroll to explore
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24 container mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Services</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Everything you need to travel well</h2>
        </Reveal>
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative p-7 rounded-3xl bg-gradient-card border border-border/50 shadow-card hover:shadow-glow transition-shadow h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-white flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* PACKAGES */}
<section className="py-24 bg-muted/40">
  <div className="container mx-auto px-6">
    <Reveal className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
        Featured Trips
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold">
        Hand-picked travel packages
      </h2>
    </Reveal>

    <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {packages.slice(0, 4).map((p) => (
        <StaggerItem key={p.title}>
          <PackageCard pkg={p} />
        </StaggerItem>
      ))}
    </StaggerGroup>

    <Reveal className="text-center mt-12">
      <Link
        to="/packages"
        className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3 rounded-full font-semibold hover:shadow-glow transition-shadow"
      >
        View all packages <ArrowRight className="w-4 h-4" />
      </Link>
    </Reveal>
  </div>
</section>

      {/* WHY US */}
      <section className="py-24 container mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Why Choose Us</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Your journey, our promise</h2>
        </Reveal>
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {why.map((w) => (
            <StaggerItem key={w.title}>
              <motion.div whileHover={{ scale: 1.04 }} className="text-center p-6 rounded-3xl glass border border-white/40 h-full">
                <div className="mx-auto w-14 h-14 rounded-full bg-gradient-primary text-white flex items-center justify-center mb-4">
                  <w.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-bold mb-1">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* TESTIMONIALS */}

<section className="py-24 bg-gradient-sky overflow-hidden">
  <div className="container mx-auto px-6">
    <Reveal className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
        Travelers Love Us
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold">
        Stories from happy explorers
      </h2>
    </Reveal>


<div className="overflow-hidden">
  <motion.div
    className="flex gap-6 w-max"
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {[...testimonials, ...testimonials].map((t, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -6 }}
        className="w-[380px] flex-shrink-0 p-7 rounded-3xl bg-card shadow-card border border-border/50"
      >
        <Quote className="w-8 h-8 text-primary/30 mb-3" />

        <p className="text-foreground/85 mb-5 italic">
          "{t.text}"
        </p>

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
            {t.name[0]}
          </div>

          <div>
            <div className="font-semibold">{t.name}</div>
            <div className="text-xs text-muted-foreground">
              {t.role}
            </div>
          </div>

          <div className="ml-auto flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-primary text-primary"
              />
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
</div>


  </div>
</section>


      {/* CTA */}
      <section className="py-24 container mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-20 text-center shadow-elegant">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-white/10"
            />
            <h2 className="relative font-display text-4xl md:text-6xl font-bold text-white">Plan Your Dream Trip Today</h2>
            <p className="relative text-white/85 mt-4 max-w-xl mx-auto">Tell us where you want to go — we'll handle the rest.</p>
            <Link to="/contact" className="relative inline-flex items-center gap-2 mt-8 bg-white text-primary px-8 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform">
              Start Planning <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
