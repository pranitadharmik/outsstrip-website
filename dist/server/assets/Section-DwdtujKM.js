import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};
function Reveal({ children, className = "", delay = 0 }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      variants: fadeUp,
      transition: { delay },
      className,
      children
    }
  );
}
function StaggerGroup({ children, className = "" }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-60px" },
      variants: stagger,
      className,
      children
    }
  );
}
function StaggerItem({ children, className = "" }) {
  return /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className, children });
}
function PageHero({ title, subtitle, kicker }) {
  return /* @__PURE__ */ jsxs("section", { className: "relative pt-36 pb-20 bg-gradient-sky overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -left-10 w-72 h-72 bg-primary-glow/30 rounded-full blur-3xl animate-float-slow" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" }),
    /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto px-6 text-center", children: [
      kicker && /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-primary mb-4", children: kicker }),
      /* @__PURE__ */ jsx(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "font-display text-5xl md:text-6xl font-bold text-gradient", children: title }),
      subtitle && /* @__PURE__ */ jsx(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15, duration: 0.6 }, className: "mt-4 text-lg text-muted-foreground max-w-2xl mx-auto", children: subtitle })
    ] })
  ] });
}
export {
  PageHero as P,
  Reveal as R,
  StaggerGroup as S,
  StaggerItem as a
};
