import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useRouterState, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, Outlet, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Plane, X, Menu, Instagram, Youtube, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { z } from "zod";
const appCss = "/assets/styles-D4b3ezEg.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const logo = "/assets/outsstrip-logo-BX17ffd6.jpeg";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-card py-2" : "bg-transparent py-4"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "container mx-auto px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsx(motion.div, { whileHover: { rotate: -10, scale: 1.1 }, className: "w-10 h-10 rounded-full overflow-hidden bg-white shadow-card", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "Outsstrip", className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-lg text-primary", children: "outsstrip" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-muted-foreground hidden sm:block", children: "Turning Trips into Memories" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => {
            const active = location.pathname === l.to;
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: l.to,
                className: `relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${active ? "text-primary" : "text-foreground/70 hover:text-primary"}`,
                children: [
                  l.label,
                  active && /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      layoutId: "navactive",
                      className: "absolute inset-0 -z-10 rounded-full bg-primary/10",
                      transition: { type: "spring", stiffness: 380, damping: 30 }
                    }
                  )
                ]
              }
            ) }, l.to);
          }) }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/contact",
              className: "hidden lg:inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-card hover:shadow-glow transition-all hover:scale-105",
              children: [
                /* @__PURE__ */ jsx(Plane, { className: "w-4 h-4" }),
                " Book Now"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen(!open),
              className: "lg:hidden p-2 rounded-full glass",
              "aria-label": "Menu",
              children: open ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: "100%" },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: "100%" },
            transition: { type: "spring", damping: 25 },
            className: "lg:hidden fixed top-0 right-0 h-screen w-80 glass shadow-elegant pt-24 px-6",
            children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2", children: [
              links.map((l, i) => /* @__PURE__ */ jsx(
                motion.li,
                {
                  initial: { opacity: 0, x: 30 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: i * 0.05 },
                  children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: l.to,
                      className: "block px-4 py-3 rounded-2xl text-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors",
                      children: l.label
                    }
                  )
                },
                l.to
              )),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/contact",
                  className: "mt-4 inline-flex justify-center items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-full font-semibold",
                  children: [
                    /* @__PURE__ */ jsx(Plane, { className: "w-4 h-4" }),
                    " Book Now"
                  ]
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/outsstrip.in?utm_source=qr",
      label: "Instagram"
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/@Outsstrip",
      label: "YouTube"
    },
    {
      icon: MessageCircle,
      link: "https://wa.me/918929314069",
      label: "WhatsApp"
    }
  ];
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-primary text-primary-foreground overflow-hidden mt-20", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-primary opacity-90" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { x: [0, 20, 0], y: [0, -10, 0] },
        transition: { duration: 8, repeat: Infinity },
        className: "absolute top-10 right-10 opacity-10",
        children: /* @__PURE__ */ jsx(Plane, { className: "w-40 h-40" })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto px-6 pt-16 pb-10 grid md:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold mb-3", children: "Outsstrip" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80 leading-relaxed mb-5", children: "Explore the world with comfort and confidence. From relaxing getaways to thrilling adventures, we design journeys that turn into unforgettable memories." }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: socialLinks.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsx(
            motion.a,
            {
              href: item.link,
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: { y: -4, scale: 1.1 },
              className: "w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition",
              "aria-label": item.label,
              children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
            },
            item.label
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm opacity-80", children: [
          ["/", "Home"],
          ["/about", "About"],
          ["/services", "Services"],
          ["/destinations", "Destinations"],
          ["/packages", "Packages"]
        ].map(([to, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to,
            className: "hover:text-white transition hover:translate-x-1 inline-block",
            children: label
          }
        ) }, to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm opacity-80", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 mt-0.5 shrink-0" }),
            "WZ-14 B-74, Rajnagar Street No 7, Palam, Dwarka, New Delhi"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:outtstrip@gmail.com", className: "hover:underline", children: "outtstrip@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+918929314069", className: "hover:underline", children: "+91 89293 14069" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative border-t border-white/10 py-5 text-center text-xs opacity-70 space-y-1", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Outsstrip. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Designed & Developed by",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.grapiondigital.com/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-white font-medium hover:underline",
            children: "Grapion Digital"
          }
        )
      ] })
    ] })
  ] });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxs(
    motion.a,
    {
      href: "https://wa.me/918929314069",
      target: "_blank",
      rel: "noopener noreferrer",
      initial: { scale: 0, y: 100 },
      animate: { scale: 1, y: 0 },
      transition: { delay: 1, type: "spring" },
      whileHover: { scale: 1.1, rotate: 6 },
      className: "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center",
      "aria-label": "WhatsApp",
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" }),
        /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-7 h-7 relative", children: /* @__PURE__ */ jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.85 9.85 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01a1.1 1.1 0 00-.793.371c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" }) })
      ]
    }
  );
}
function FlyingPlane() {
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 z-40 overflow-hidden", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { x: "-10vw", y: "70vh", rotate: -20 },
      animate: {
        x: ["−10vw", "110vw"],
        y: ["70vh", "10vh", "60vh"],
        rotate: [-20, 10, -15]
      },
      transition: { duration: 22, repeat: Infinity, ease: "easeInOut", repeatDelay: 6 },
      className: "absolute",
      children: /* @__PURE__ */ jsx(Plane, { className: "w-8 h-8 text-primary/70 drop-shadow-lg" })
    }
  ) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This destination doesn't exist on our map." }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground", children: "Back home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try refreshing or go home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => {
        router.invalidate();
        reset();
      }, className: "rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground", children: "Try again" }),
      /* @__PURE__ */ jsx("a", { href: "/", className: "rounded-full border border-border px-5 py-2.5 text-sm font-semibold", children: "Home" })
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Outsstrip — Turning Trips into Memories" },
      { name: "description", content: "Outsstrip is a trusted travel agency crafting holiday packages, flights, hotels and custom trips across India and the world." },
      { name: "author", content: "Outsstrip" },
      { property: "og:title", content: "Outsstrip — Turning Trips into Memories" },
      { property: "og:description", content: "Plan unforgettable holidays with Outsstrip." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Outsstrip" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function AnimatedOutlet() {
  const { location } = useRouterState();
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: 0.4, ease: "easeOut" },
      children: /* @__PURE__ */ jsx(Outlet, {})
    },
    location.pathname
  ) });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(FlyingPlane, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(AnimatedOutlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppButton, {})
  ] }) });
}
const BASE_URL = "";
const paths = ["/", "/about", "/services", "/destinations", "/packages", "/contact"];
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      }
    }
  }
});
const $$splitComponentImporter$5 = () => import("./services-BiZUE-eG.js");
const Route$5 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Outsstrip"
    }, {
      name: "description",
      content: "Holiday packages, hotel booking, transportation and bespoke travel planning by Outsstrip."
    }, {
      property: "og:title",
      content: "Services — Outsstrip"
    }, {
      property: "og:description",
      content: "Everything you need for a perfect trip."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./packages-BuA3VrQk.js");
const Route$4 = createFileRoute("/packages")({
  head: () => ({
    meta: [{
      title: "Travel Packages & Pricing — Outsstrip"
    }, {
      name: "description",
      content: "Choose from Basic, Premium and Luxury travel packages — or pick a featured curated trip."
    }, {
      property: "og:title",
      content: "Packages — Outsstrip"
    }, {
      property: "og:description",
      content: "Affordable to luxury — find your perfect trip."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./destinations-CPDO8n0Y.js");
const Route$3 = createFileRoute("/destinations")({
  head: () => ({
    meta: [{
      title: "Destinations — Outsstrip"
    }, {
      name: "description",
      content: "Explore stunning destinations curated by Outsstrip."
    }, {
      property: "og:title",
      content: "Destinations — Outsstrip"
    }, {
      property: "og:description",
      content: "Find your next adventure."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-CpynHT3G.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Outsstrip — Plan Your Trip"
    }, {
      name: "description",
      content: "Get in touch with Outsstrip to plan your next holiday. WZ-14 B-74 Rajnagar, Palam, Dwarka, New Delhi."
    }, {
      property: "og:title",
      content: "Contact Outsstrip"
    }, {
      property: "og:description",
      content: "We'd love to plan your next trip with you."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Valid email required").max(120),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  destination: z.string().trim().min(2, "Where to?").max(80),
  message: z.string().trim().optional().refine((val) => !val || val.length >= 5, {
    message: "Tell us a bit more"
  })
});
const $$splitComponentImporter$1 = () => import("./about-CpU41Jb-.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Outsstrip — Your Trusted Travel Partner"
    }, {
      name: "description",
      content: "Outsstrip is a newly established travel agency creating unforgettable, affordable travel experiences worldwide."
    }, {
      property: "og:title",
      content: "About Outsstrip"
    }, {
      property: "og:description",
      content: "Learn about our mission, vision and team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DVOmcrz2.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Outsstrip — Turning Trips into Memories"
    }, {
      name: "description",
      content: "Discover handcrafted holiday packages, hotels, transport and custom travel planning with Outsstrip."
    }, {
      property: "og:title",
      content: "Outsstrip — Turning Trips into Memories"
    }, {
      property: "og:description",
      content: "Explore the world with comfort."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const PackagesRoute = Route$4.update({
  id: "/packages",
  path: "/packages",
  getParentRoute: () => Route$7
});
const DestinationsRoute = Route$3.update({
  id: "/destinations",
  path: "/destinations",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  DestinationsRoute,
  PackagesRoute,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
