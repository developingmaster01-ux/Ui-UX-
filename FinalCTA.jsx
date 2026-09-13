import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import EmberGlow from "./shared/EmberGlow";
import { RESTAURANT } from "../data/menu";

export default function FinalCTA({ onMenuClick }) {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 texture-grain md:py-32">
      <EmberGlow />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-xl flex-col items-center text-center"
      >
        <h2 className="font-display text-3xl font-bold text-ivory sm:text-4xl">
          आज ही स्वाद का अनुभव लीजिए
        </h2>
        <p className="mt-3 font-body text-ivory/55">{RESTAURANT.tagline}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${RESTAURANT.phones[0]}`}
            className="inline-flex items-center gap-2 rounded-full bg-ember px-8 py-3.5 font-display text-base font-semibold text-ivory shadow-ember transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Phone className="h-4 w-4" /> अभी कॉल करें
          </a>
          <button
            onClick={onMenuClick}
            className="rounded-full border border-ivory/20 px-8 py-3.5 font-display text-base font-semibold text-ivory/85 transition-colors hover:border-gold hover:text-gold"
          >
            मेन्यू देखें
          </button>
        </div>
      </motion.div>
    </section>
  );
}
