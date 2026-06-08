import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
function PackageCard({ pkg }) {
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      whileHover: { y: -10 },
      transition: { type: "spring", stiffness: 300 },
      className: "group relative rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-glow transition-shadow border border-border/50 flex flex-col h-full",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0",
            style: {
              background: "linear-gradient(135deg, rgba(56,100,145,0.4), rgba(108,140,172,0.2))",
              filter: "blur(20px)"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden h-80", children: [
          /* @__PURE__ */ jsx(
            motion.img,
            {
              src: pkg.image,
              alt: pkg.title,
              className: "w-full h-full object-cover object-top",
              whileHover: { scale: 1.08 },
              transition: { duration: 0.6 }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" }),
          pkg.tag && /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold text-primary", children: pkg.tag }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 text-white", children: /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold", children: pkg.title }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative p-5 bg-card flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground mb-3", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5" }),
              pkg.duration
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5" }),
              "Tour Info"
            ] })
          ] }),
          pkg.destinations && /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Destinations" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: pkg.destinations.join(", ") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground/80 mb-4 space-y-1", children: pkg.includesList?.length ? pkg.includesList.slice(0, 5).map((item, i) => /* @__PURE__ */ jsxs("div", { children: [
            "• ",
            item
          ] }, i)) : /* @__PURE__ */ jsx("p", { children: pkg.includes }) }),
          pkg.highlights && /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Highlights" }),
            /* @__PURE__ */ jsx("ul", { className: "text-xs space-y-1", children: pkg.highlights.slice(0, 5).map((item, i) => /* @__PURE__ */ jsxs("li", { children: [
              "• ",
              item
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-auto pt-5", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Starting at" }),
              /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-bold text-primary", children: pkg.price })
            ] }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/contact",
                className: "group/btn inline-flex items-center gap-1 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:shadow-glow transition-all hover:scale-105",
                children: [
                  "Book",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  PackageCard as P
};
