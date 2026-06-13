import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Plane,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/outsstrip.in?utm_source=qr",
      label: "Instagram",
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/@Outsstrip",
      label: "YouTube",
    },
    {
      icon: MessageCircle,
      link: "https://wa.me/918929314069",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden mt-20">
      <div className="absolute inset-0 bg-gradient-primary opacity-90" />

      {/* Decorative animation */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 opacity-10"
      >
        <Plane className="w-40 h-40" />
      </motion.div>

      <div className="relative container mx-auto px-6 pt-16 pb-10 grid md:grid-cols-3 gap-12">
        
        {/* BRAND */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-3">
            Outsstrip
          </h3>

          <p className="text-sm opacity-80 leading-relaxed mb-5">
            Explore the world with comfort and confidence. From relaxing
            getaways to thrilling adventures, we design journeys that turn into
            unforgettable memories.
          </p>

          <div className="flex gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/destinations", "Destinations"],
              ["/packages", "Packages"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-white transition hover:translate-x-1 inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>

          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              WZ-14 B-74, Rajnagar Street No 7, Palam, Dwarka, New Delhi
            </li>

            <li className="flex gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:outtstrip@gmail.com" className="hover:underline">
                outtstrip@gmail.com
              </a>
            </li>

            <li className="flex gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <a href="tel:+918929314069" className="hover:underline">
               <p>Megha Bhat</p> : +91 89293 14069
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative border-t border-white/10 py-5 text-center text-xs opacity-70 space-y-1">
        <div>© {new Date().getFullYear()} Outsstrip. All rights reserved.</div>

        <div>
          Designed & Developed by{" "}
          <a
            href="https://www.grapiondigital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:underline"
          >
            Grapion Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
