import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Plane, Hotel, Car, Map, Compass, Globe, ArrowRight } from "lucide-react";
import { P as PageHero, S as StaggerGroup, a as StaggerItem } from "./Section-DwdtujKM.js";
const services = [{
  icon: Plane,
  title: "Holiday Packages",
  desc: "All-inclusive curated trips for couples, families and friends."
}, {
  icon: Hotel,
  title: "Hotel Booking",
  desc: "From boutique stays to 5-star resorts at best-rate guarantee."
}, {
  icon: Car,
  title: "Transportation",
  desc: "Private cabs, airport transfers, intercity travel — done."
}, {
  icon: Map,
  title: "Travel Planning",
  desc: "Custom itineraries crafted by certified travel experts."
}, {
  icon: Compass,
  title: "Guided Tours",
  desc: "Local guides who turn sightseeing into story-telling."
}, {
  icon: Globe,
  title: "Adventure Activities",
  desc: "Book thrilling experiences like trekking, scuba diving, and more."
}];
function Services() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { kicker: "What We Do", title: "Services Built Around You", subtitle: "From inspiration to homecoming — every part of your trip handled with care." }),
    /* @__PURE__ */ jsx("section", { className: "py-20 container mx-auto px-6", children: /* @__PURE__ */ jsx(StaggerGroup, { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(motion.div, { whileHover: {
      y: -10
    }, className: "group relative p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-glow transition-shadow h-full overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -right-12 -top-12 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-primary text-white flex items-center justify-center mb-5 group-hover:rotate-12 transition-transform", children: /* @__PURE__ */ jsx(s.icon, { className: "w-8 h-8" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold mb-2", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: s.desc }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-1 text-sm font-semibold text-primary group/btn", children: [
          "Enquire ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform" })
        ] })
      ] })
    ] }) }, s.title)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-28 bg-gradient-to-b from-background to-muted/30 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold uppercase tracking-[0.2em]", children: "Travel Memories" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl font-bold mt-4", children: "Moments We've Created" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl mx-auto", children: "Every trip tells a story. Here are some unforgettable memories shared by our travelers." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: [
        /* @__PURE__ */ jsx(motion.div, { whileHover: {
          scale: 1.05
        }, className: "rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "travelers/traveler1.jpeg", alt: "", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsx(motion.div, { whileHover: {
          scale: 1.05
        }, className: "rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "travelers/traveler2.jpeg", alt: "", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsx(motion.div, { whileHover: {
          scale: 1.05
        }, className: "rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "/travelers/traveler3.jpeg", alt: "", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsx(motion.div, { whileHover: {
          scale: 1.05
        }, className: "rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "/travelers/traveler4 (2).jpeg", alt: "", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsx(motion.div, { whileHover: {
          scale: 1.05
        }, className: "rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "/travelers/traveler5.jpeg", alt: "", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsx(motion.div, { whileHover: {
          scale: 1.05
        }, className: "rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "/travelers/traveler6.jpeg", alt: "", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsx(motion.div, { whileHover: {
          scale: 1.05
        }, className: "rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "/travelers/traveler7.jpeg", alt: "", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsx(motion.div, { whileHover: {
          scale: 1.05
        }, className: "rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: "/travelers/traveler8.jpeg", alt: "", className: "w-full h-full object-cover" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-16", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform", children: [
        "Create Your Own Story",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
      ] }) })
    ] }) })
  ] });
}
export {
  Services as component
};
