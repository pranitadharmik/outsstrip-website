import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export function FlyingPlane() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <motion.div
        initial={{ x: "-10vw", y: "70vh", rotate: -20 }}
        animate={{
          x: ["−10vw", "110vw"],
          y: ["70vh", "10vh", "60vh"],
          rotate: [-20, 10, -15],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", repeatDelay: 6 }}
        className="absolute"
      >
        <Plane className="w-8 h-8 text-primary/70 drop-shadow-lg" />
      </motion.div>
    </div>
  );
}
