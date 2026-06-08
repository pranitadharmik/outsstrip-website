import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { P as PageHero, S as StaggerGroup, a as StaggerItem } from "./Section-DwdtujKM.js";
import { d as destinations } from "./packages-CywPTjVD.js";
function Destinations() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { kicker: "Destinations", title: "Wander Without Limits", subtitle: "Beaches, mountains, cities — choose your next memory." }),
    /* @__PURE__ */ jsx("section", { className: "py-12 container mx-auto px-6", children: /* @__PURE__ */ jsx(StaggerGroup, { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: destinations.map((d) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(motion.div, { whileHover: {
      y: -6
    }, className: "group relative rounded-3xl overflow-hidden h-80 cursor-pointer shadow-card hover:shadow-glow transition-shadow", children: [
      /* @__PURE__ */ jsx(motion.img, { src: d.image, alt: d.name, className: "absolute inset-0 w-full h-full object-cover", whileHover: {
        scale: 1.15
      }, transition: {
        duration: 0.7
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 text-white translate-y-2 group-hover:translate-y-0 transition-transform", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold mt-2", children: d.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs opacity-90 flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-3 h-3" }),
          d.country
        ] })
      ] })
    ] }) }, d.name)) }) })
  ] });
}
export {
  Destinations as component
};
