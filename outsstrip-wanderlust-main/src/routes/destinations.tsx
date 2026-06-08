import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { PageHero, StaggerGroup, StaggerItem } from "@/components/Section";
import { destinations } from "@/data/packages";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Outsstrip" },
      { name: "description", content: "Explore stunning destinations curated by Outsstrip." },
      { property: "og:title", content: "Destinations — Outsstrip" },
      { property: "og:description", content: "Find your next adventure." },
    ],
  }),
  component: Destinations,
});

function Destinations() {
  return (
    <>
      <PageHero
        kicker="Destinations"
        title="Wander Without Limits"
        subtitle="Beaches, mountains, cities — choose your next memory."
      />

      <section className="py-12 container mx-auto px-6">
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((d) => (
            <StaggerItem key={d.name}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl overflow-hidden h-80 cursor-pointer shadow-card hover:shadow-glow transition-shadow"
              >
                <motion.img
                  src={d.image}
                  alt={d.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.7 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                  
                  {/* ❌ category removed */}
                  
                  <h3 className="font-display text-2xl font-bold mt-2">
                    {d.name}
                  </h3>

                  <p className="text-xs opacity-90 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {d.country}
                  </p>

                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}