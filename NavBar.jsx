import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESTAURANT } from "../data/menu";

export default function NavBar({ onMenuClick, onLocationClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-0 z-40 border-b border-ink-line bg-ink/85 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
            <span className="font-display text-base font-bold text-ivory">
              {RESTAURANT.name}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onLocationClick}
                className="hidden font-body text-sm text-ivory/60 transition-colors hover:text-gold sm:block"
              >
                लोकेशन
              </button>
              <button
                onClick={onMenuClick}
                className="rounded-full bg-ember px-5 py-2 font-body text-sm font-semibold text-ivory transition-transform hover:scale-105 active:scale-95"
              >
                मेन्यू
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
