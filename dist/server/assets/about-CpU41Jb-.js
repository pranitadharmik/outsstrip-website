import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Plane, Award, Smile, Users, Target, Eye } from "lucide-react";
import { P as PageHero, R as Reveal, S as StaggerGroup, a as StaggerItem } from "./Section-DwdtujKM.js";
function Counter({
  end,
  suffix = "+",
  label
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true
  });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return /* @__PURE__ */ jsxs("div", { ref, className: "text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "font-display text-5xl md:text-6xl font-bold text-gradient", children: [
      n,
      suffix
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-2 uppercase tracking-wider", children: label })
  ] });
}
function About() {
  const stats = [{
    end: 100,
    label: "Trips Delivered",
    icon: Plane
  }, {
    end: 50,
    label: "Destinations",
    icon: Award
  }, {
    end: 500,
    label: "Happy Travelers",
    icon: Smile
  }, {
    end: 24,
    label: "Hours Support",
    suffix: "/7",
    icon: Users
  }];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { kicker: "About Us", title: "Your Trusted Travel Partner", subtitle: "Welcome to Outsstrip — where every trip becomes a memory worth keeping." }),
    /* @__PURE__ */ jsx("section", { className: "py-20 container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80", alt: "Travelers", className: "rounded-3xl shadow-elegant w-full h-[460px] object-cover" }) }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.1, children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-primary uppercase tracking-wider mb-3", children: "Our Story" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold mb-5", children: "Crafting journeys with heart" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80 mb-4", children: "Outsstrip is a newly established travel agency dedicated to creating unforgettable travel experiences. We believe travel should be effortless, affordable and personal — so every itinerary we design is built around your story." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/80", children: "From beach escapes to mountain adventures and luxury getaways, we partner with hand-picked hotels, transport providers and local guides to deliver journeys that feel premium without the premium price tag." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gradient-sky", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsx(Counter, { end: s.end, suffix: s.suffix, label: s.label }) }, s.label)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 container mx-auto px-6", children: /* @__PURE__ */ jsx(StaggerGroup, { className: "grid md:grid-cols-2 gap-6", children: [{
      icon: Target,
      title: "Our Mission",
      text: "Our mission is to make travel not just a service, but a beautifully crafted experience for every Indian traveler. We aim to provide world-class, affordable, and hassle-free travel solutions that remove all complexities of planning. From curated holiday packages to personalized journeys, we focus on comfort, safety, and unforgettable memories. Every trip we design is built with care so that our customers can simply relax, explore, and enjoy the journey while we take care of everything else."
    }, {
      icon: Eye,
      title: "Our Vision",
      text: "Our vision is to become India’s most trusted and loved travel companion, recognized for creating meaningful and memorable travel experiences across the globe. We aspire to redefine the way people travel by combining transparency, innovation, and personalized service. We envision a future where every traveler, whether solo, family, or group, chooses us first for reliable planning, seamless execution, and emotional connection with every journey they take."
    }].map((b) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(motion.div, { whileHover: {
      y: -6
    }, className: "p-8 rounded-3xl bg-gradient-card border border-border shadow-card h-full", children: [
      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-gradient-primary text-white flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx(b.icon, { className: "w-7 h-7" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold mb-2", children: b.title }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground/80", children: b.text })
    ] }) }, b.title)) }) })
  ] });
}
export {
  About as component
};
