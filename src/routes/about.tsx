import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Target, Eye, Award, Users, Plane, Smile } from "lucide-react";
import { PageHero, Reveal, StaggerGroup, StaggerItem } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Outsstrip — Your Trusted Travel Partner" },
      { name: "description", content: "Outsstrip is a newly established travel agency creating unforgettable, affordable travel experiences worldwide." },
      { property: "og:title", content: "About Outsstrip" },
      { property: "og:description", content: "Learn about our mission, vision and team." },
    ],
  }),
  component: About,
});

function Counter({ end, suffix = "+", label }: { end: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl font-bold text-gradient">{n}{suffix}</div>
      <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function About() {
  const stats = [
    { end: 100, label: "Trips Delivered", icon: Plane },
    { end: 50, label: "Destinations", icon: Award },
    { end: 500, label: "Happy Travelers", icon: Smile },
    { end: 24, label: "Hours Support", suffix: "/7", icon: Users },
  ];

  return (
    <>
      <PageHero kicker="About Us" title="Your Trusted Travel Partner" subtitle="Welcome to Outsstrip — where every trip becomes a memory worth keeping." />

      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80" alt="Travelers" className="rounded-3xl shadow-elegant w-full h-[460px] object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Story</div>
            <h2 className="font-display text-4xl font-bold mb-5">Crafting journeys with heart</h2>
            <p className="text-foreground/80 mb-4">
              Outsstrip is a newly established travel agency dedicated to creating unforgettable travel experiences. We believe travel should be effortless, affordable and personal — so every itinerary we design is built around your story.
            </p>
            <p className="text-foreground/80">
              From beach escapes to mountain adventures and luxury getaways, we partner with hand-picked hotels, transport providers and local guides to deliver journeys that feel premium without the premium price tag.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Counters */}
      <section className="py-16 bg-gradient-sky">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}><Counter end={s.end} suffix={s.suffix} label={s.label} /></Reveal>
          ))}
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 container mx-auto px-6">
        <StaggerGroup className="grid md:grid-cols-2 gap-6">
          {[
  {
    icon: Target,
    title: "Our Mission",
    text: "Our mission is to make travel not just a service, but a beautifully crafted experience for every Indian traveler. We aim to provide world-class, affordable, and hassle-free travel solutions that remove all complexities of planning. From curated holiday packages to personalized journeys, we focus on comfort, safety, and unforgettable memories. Every trip we design is built with care so that our customers can simply relax, explore, and enjoy the journey while we take care of everything else."
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "Our vision is to become India’s most trusted and loved travel companion, recognized for creating meaningful and memorable travel experiences across the globe. We aspire to redefine the way people travel by combining transparency, innovation, and personalized service. We envision a future where every traveler, whether solo, family, or group, chooses us first for reliable planning, seamless execution, and emotional connection with every journey they take."
  },
].map((b) => (
            <StaggerItem key={b.title}>
              <motion.div whileHover={{ y: -6 }} className="p-8 rounded-3xl bg-gradient-card border border-border shadow-card h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-white flex items-center justify-center mb-5">
                  <b.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{b.title}</h3>
                <p className="text-foreground/80">{b.text}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
