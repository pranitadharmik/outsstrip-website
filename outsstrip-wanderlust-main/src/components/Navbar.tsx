import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import logo from "@/assets/outsstrip-logo.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-card py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div whileHover={{ rotate: -10, scale: 1.1 }} className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-card">
            <img src={logo} alt="Outsstrip" className="w-full h-full object-cover" />
          </motion.div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg text-primary">outsstrip</div>
            <div className="text-[10px] text-muted-foreground hidden sm:block">Turning Trips into Memories</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    active ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="navactive"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-card hover:shadow-glow transition-all hover:scale-105"
        >
          <Plane className="w-4 h-4" /> Book Now
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-full glass"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="lg:hidden fixed top-0 right-0 h-screen w-80 glass shadow-elegant pt-24 px-6"
          >
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    className="block px-4 py-3 rounded-2xl text-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <Link
                to="/contact"
                className="mt-4 inline-flex justify-center items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-full font-semibold"
              >
                <Plane className="w-4 h-4" /> Book Now
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
