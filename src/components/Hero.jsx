import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import EmberGlow from "./shared/EmberGlow";
import { RESTAURANT } from "../data/menu";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ onMenuClick, onLocationClick }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink px-6 texture-grain"
    >
      <motion.div
        className="absolute inset-0 bg-ink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(196,69,28,0.10), transparent 60%)",
        }}
      />
      <EmberGlow />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <motion.span
          variants={rise}
          className="font-body text-sm tracking-wide text-gold/80"
        >
          {RESTAURANT.category}
        </motion.span>

        <motion.h1
          variants={rise}
          className="mt-5 font-display text-[15vw] font-extrabold leading-[0.95] text-ivory sm:text-7xl md:text-8xl"
        >
          {RESTAURANT.name}
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-6 max-w-xl font-body text-lg text-ivory/70 sm:text-xl"
        >
          {RESTAURANT.tagline}
        </motion.p>

        <motion.p variants={rise} className="mt-2 font-body text-sm text-ivory/45">
          शुक्लागंज, उन्नाव
        </motion.p>

        <motion.div variants={rise} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onMenuClick}
            className="rounded-full bg-ember px-8 py-3.5 font-display text-base font-semibold text-ivory shadow-ember transition-transform duration-300 hover:scale-[1.03] hover:bg-ember-bright active:scale-95"
          >
            मेन्यू देखें
          </button>
          <button
            onClick={onLocationClick}
            className="rounded-full border border-ivory/25 bg-transparent px-8 py-3.5 font-display text-base font-semibold text-ivory/90 transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            लोकेशन देखें
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-ivory/40"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
