import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export interface Pkg {
  title: string;
  duration: string;
  price: string;
  image: string;
  tag?: string;
  includes?: string;
  includesList?: string[];
  destinations?: string[];
  highlights?: string[];
}

export function PackageCard({ pkg }: { pkg: Pkg }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-glow transition-shadow border border-border/50 flex flex-col h-full"
    >
      {/* BACKGROUND EFFECT */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(56,100,145,0.4), rgba(108,140,172,0.2))",
          filter: "blur(20px)",
        }}
      />

      {/* IMAGE */}
      <div className="relative overflow-hidden h-80">
        <motion.img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

        {/* TAG */}
        {pkg.tag && (
          <span className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold text-primary">
            {pkg.tag}
          </span>
        )}

        {/* TITLE */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-display text-xl font-bold">{pkg.title}</h3>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative p-5 bg-card flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {pkg.duration}
          </span>

          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            Tour Info
          </span>
        </div>

        {/* DESTINATIONS */}
        {pkg.destinations && (
          <div className="mb-3">
            <div className="text-xs text-muted-foreground">
              Destinations
            </div>
            <div className="text-sm font-medium">
              {pkg.destinations.join(", ")}
            </div>
          </div>
        )}

        {/* INCLUDES */}
        <div className="text-sm text-foreground/80 mb-4 space-y-1">
          {pkg.includesList?.length ? (
            pkg.includesList.slice(0, 5).map((item, i) => (
              <div key={i}>• {item}</div>
            ))
          ) : (
            <p>{pkg.includes}</p>
          )}
        </div>

        {/* HIGHLIGHTS */}
        {pkg.highlights && (
          <div className="mt-2">
            <div className="text-xs text-muted-foreground mb-1">
              Highlights
            </div>

            <ul className="text-xs space-y-1">
              {pkg.highlights.slice(0, 5).map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between mt-auto pt-5">
          <div>
            <div className="text-xs text-muted-foreground">
              Starting at
            </div>

            <div className="font-display text-2xl font-bold text-primary">
              {pkg.price}
            </div>
          </div>

          <Link
  to="/contact"
  className="group/btn inline-flex items-center gap-1 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:shadow-glow transition-all hover:scale-105"
>
  Book
  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
</Link>
        </div>
      </div>
    </motion.article>
  );
}