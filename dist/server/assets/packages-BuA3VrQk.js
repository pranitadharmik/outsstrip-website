import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHero, R as Reveal, S as StaggerGroup, a as StaggerItem } from "./Section-DwdtujKM.js";
import { P as PackageCard } from "./PackageCard-Cx73NVTX.js";
import { p as packages } from "./packages-CywPTjVD.js";
import "framer-motion";
import "@tanstack/react-router";
import "lucide-react";
function Packages() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { kicker: "Packages", title: "Find Your Perfect Trip", subtitle: "From budget-friendly getaways to bucket-list luxury experiences." }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/40", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "text-center max-w-2xl mx-auto mb-12", children: /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold", children: "Featured Curated Trips" }) }),
      /* @__PURE__ */ jsx(StaggerGroup, { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: packages.map((p) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx(PackageCard, { pkg: p }) }, p.title)) })
    ] }) })
  ] });
}
export {
  Packages as component
};
