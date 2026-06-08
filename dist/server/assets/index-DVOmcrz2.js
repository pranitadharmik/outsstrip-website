import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Hotel, Car, Map, Wallet, Shield, Heart, Headphones, Quote, Star } from "lucide-react";
import { R as Reveal, S as StaggerGroup, a as StaggerItem } from "./Section-DwdtujKM.js";
import { P as PackageCard } from "./PackageCard-Cx73NVTX.js";
import { p as packages } from "./packages-CywPTjVD.js";
const heroBg = "/assets/hero-bg-CBOzz2rJ.jpg";
const services = [{
  icon: Plane,
  title: "Holiday Packages",
  desc: "Curated trips for every traveler."
}, {
  icon: Hotel,
  title: "Hotel Booking",
  desc: "Best stays at unbeatable prices."
}, {
  icon: Car,
  title: "Transportation",
  desc: "Comfortable rides door-to-door."
}, {
  icon: Map,
  title: "Travel Planning",
  desc: "Custom itineraries built for you."
}];
const why = [{
  icon: Wallet,
  title: "Affordable",
  desc: "Honest pricing, no hidden fees."
}, {
  icon: Shield,
  title: "Trusted",
  desc: "100% secure bookings."
}, {
  icon: Heart,
  title: "Customized Trips",
  desc: "Designed around your dreams."
}, {
  icon: Headphones,
  title: "24/7 Support",
  desc: "We're with you everywhere."
}];
const testimonials = [{
  name: "Priyanka Sharma",
  text: "Our Rajasthan trip was beautifully organized by Outsstrip. Hotels, transfers, and sightseeing were all perfectly managed.",
  role: "Rajasthan Traveler"
}, {
  name: "Ankit Mehta",
  text: "Had a fantastic Kerala vacation with Outsstrip. Everything was smooth, well-planned, and hassle-free.",
  role: "Kerala Traveler"
}, {
  name: "Shruti Mathur",
  text: "Our Darjeeling and Gangtok holiday was amazing. Hotels, sightseeing, and transportation were arranged perfectly.",
  role: "Gangtok Explorer"
}, {
  name: "Mohd Zaid",
  text: "We traveled to Jaisalmer in a group of 30 people and every arrangement was handled flawlessly.",
  role: "Jaisalmer Traveler"
}, {
  name: "Subhamna Patil",
  text: "Our South India tour was extremely well organized. Every destination was covered smoothly.",
  role: "South India Traveler"
}, {
  name: "Dibakar",
  text: "The Rajasthan itinerary was perfectly planned from start to finish. A completely stress-free experience.",
  role: "Rajasthan Explorer"
}, {
  name: "Neeraj Kashyap",
  text: "One of the best travel experiences we've had. The team was professional and always ready to help.",
  role: "Happy Traveler"
}, {
  name: "Rahul Verma",
  text: "Booking with Outsstrip was the best decision for our family vacation. Everything was organized perfectly.",
  role: "Family Traveler"
}, {
  name: "Sneha Kulkarni",
  text: "Excellent service, great hotels, and smooth transportation throughout the trip.",
  role: "Holiday Traveler"
}, {
  name: "Aditi Joshi",
  text: "From planning to execution, the experience was seamless. We enjoyed every moment.",
  role: "Vacation Explorer"
}];
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: heroBg, alt: "", className: "absolute inset-0 w-full h-full object-cover", width: 1920, height: 1280 }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
      /* @__PURE__ */ jsx(motion.div, { animate: {
        y: [0, -20, 0]
      }, transition: {
        duration: 8,
        repeat: Infinity
      }, className: "absolute top-32 left-10 w-32 h-16 bg-white/40 rounded-full blur-2xl" }),
      /* @__PURE__ */ jsx(motion.div, { animate: {
        y: [0, 25, 0]
      }, transition: {
        duration: 10,
        repeat: Infinity,
        delay: 1
      }, className: "absolute bottom-40 right-20 w-48 h-20 bg-white/30 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto px-6 py-32 text-center", children: [
        /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, className: "inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6", children: "✈ Premium Travel Experiences" }),
        /* @__PURE__ */ jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7
        }, className: "font-display text-5xl md:text-7xl font-bold text-white drop-shadow-lg", children: [
          "Turning Trips into ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-white to-accent bg-clip-text text-transparent", children: "Memories" })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.2,
          duration: 0.7
        }, className: "mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto", children: "Explore the world with comfort and confidence. From relaxing getaways to thrilling adventures — we create journeys that turn into unforgettable memories." }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.35,
          duration: 0.7
        }, className: "mt-10 flex flex-wrap gap-4 justify-center", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/packages", className: "group inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-full font-semibold shadow-elegant hover:scale-105 transition-transform", children: [
            "Explore Packages ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 glass-dark text-white border border-white/30 px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors", children: "Contact Us" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { animate: {
        y: [0, 10, 0]
      }, transition: {
        duration: 2,
        repeat: Infinity
      }, className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs", children: "Scroll to explore" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 container mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-primary uppercase tracking-wider mb-2", children: "Our Services" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground", children: "Everything you need to travel well" })
      ] }),
      /* @__PURE__ */ jsx(StaggerGroup, { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: services.map((s) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(motion.div, { whileHover: {
        y: -8
      }, className: "group relative p-7 rounded-3xl bg-gradient-card border border-border/50 shadow-card hover:shadow-glow transition-shadow h-full", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-gradient-primary text-white flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform", children: /* @__PURE__ */ jsx(s.icon, { className: "w-7 h-7" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold mb-2", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: s.desc })
      ] }) }, s.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-muted/40", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-primary uppercase tracking-wider mb-2", children: "Featured Trips" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold", children: "Hand-picked travel packages" })
      ] }),
      /* @__PURE__ */ jsx(StaggerGroup, { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: packages.slice(0, 4).map((p) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx(PackageCard, { pkg: p }) }, p.title)) }),
      /* @__PURE__ */ jsx(Reveal, { className: "text-center mt-12", children: /* @__PURE__ */ jsxs(Link, { to: "/packages", className: "inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3 rounded-full font-semibold hover:shadow-glow transition-shadow", children: [
        "View all packages ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 container mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-primary uppercase tracking-wider mb-2", children: "Why Choose Us" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold", children: "Your journey, our promise" })
      ] }),
      /* @__PURE__ */ jsx(StaggerGroup, { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: why.map((w) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(motion.div, { whileHover: {
        scale: 1.04
      }, className: "text-center p-6 rounded-3xl glass border border-white/40 h-full", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto w-14 h-14 rounded-full bg-gradient-primary text-white flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(w.icon, { className: "w-7 h-7" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold mb-1", children: w.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: w.desc })
      ] }) }, w.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-sky overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-primary uppercase tracking-wider mb-2", children: "Travelers Love Us" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold", children: "Stories from happy explorers" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(motion.div, { className: "flex gap-6 w-max", animate: {
        x: ["0%", "-50%"]
      }, transition: {
        duration: 35,
        repeat: Infinity,
        ease: "linear"
      }, children: [...testimonials, ...testimonials].map((t, index) => /* @__PURE__ */ jsxs(motion.div, { whileHover: {
        y: -6
      }, className: "w-[380px] flex-shrink-0 p-7 rounded-3xl bg-card shadow-card border border-border/50", children: [
        /* @__PURE__ */ jsx(Quote, { className: "w-8 h-8 text-primary/30 mb-3" }),
        /* @__PURE__ */ jsxs("p", { className: "text-foreground/85 mb-5 italic", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold", children: t.name[0] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: t.name }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "ml-auto flex gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-primary text-primary" }, i)) })
        ] })
      ] }, index)) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 container mx-auto px-6", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-20 text-center shadow-elegant", children: [
      /* @__PURE__ */ jsx(motion.div, { animate: {
        rotate: 360
      }, transition: {
        duration: 60,
        repeat: Infinity,
        ease: "linear"
      }, className: "absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/20" }),
      /* @__PURE__ */ jsx(motion.div, { animate: {
        rotate: -360
      }, transition: {
        duration: 80,
        repeat: Infinity,
        ease: "linear"
      }, className: "absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-white/10" }),
      /* @__PURE__ */ jsx("h2", { className: "relative font-display text-4xl md:text-6xl font-bold text-white", children: "Plan Your Dream Trip Today" }),
      /* @__PURE__ */ jsx("p", { className: "relative text-white/85 mt-4 max-w-xl mx-auto", children: "Tell us where you want to go — we'll handle the rest." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "relative inline-flex items-center gap-2 mt-8 bg-white text-primary px-8 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform", children: [
        "Start Planning ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) }) })
  ] });
}
export {
  Home as component
};
