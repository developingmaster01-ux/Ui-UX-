import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GOOGLE_REVIEW_URL } from "../data/menu";

export default function GoogleReview() {
  return (
    <section className="relative bg-ink-soft px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-xl flex-col items-center text-center"
      >
        <div className="mb-5 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-gold text-gold" />
          ))}
        </div>
        <h2 className="font-display text-3xl font-bold text-ivory sm:text-4xl">
          खाना पसंद आया?
        </h2>
        <p className="mt-3 font-body text-ivory/60">अपना अनुभव Google पर शेयर करें ❤️</p>

        {GOOGLE_REVIEW_URL ? (
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 rounded-full bg-gold px-8 py-3.5 font-display text-base font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
          >
            Google पर Review दें
          </a>
        ) : (
          // असली Google Review लिंक src/data/menu.js में GOOGLE_REVIEW_URL में डालें
          <button
            disabled
            className="mt-8 cursor-not-allowed rounded-full border border-ivory/15 px-8 py-3.5 font-display text-base font-semibold text-ivory/30"
          >
            Google पर Review दें
          </button>
        )}
      </motion.div>
    </section>
  );
}
