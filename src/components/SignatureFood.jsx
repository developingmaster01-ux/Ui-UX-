import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ImageWithFallback from "./shared/ImageWithFallback";
import { SIGNATURE_FOOD } from "../data/menu";

export default function SignatureFood() {
  return (
    <section className="relative bg-ink-soft px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-body text-xs tracking-[0.1em] text-gold/70">
              सिग्नेचर फूड
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ivory sm:text-4xl">
              इन डिशेज़ के लिए आइए
            </h2>
          </div>
        </div>

        <div className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4 hide-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {SIGNATURE_FOOD.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative w-[76vw] flex-shrink-0 sm:w-auto"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink-line">
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                  <ImageWithFallback
                    src={`/assets/food/${item.id}.jpg`}
                    alt={item.name}
                    label={item.name}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-ivory/20 bg-ink/50 px-3 py-1 font-body text-[11px] text-ivory/70 backdrop-blur-sm">
                  {item.tag}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ivory">
                        {item.name}
                      </h3>
                      <p className="mt-1 font-body text-sm text-ivory/55">
                        {item.desc}
                      </p>
                    </div>
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ivory/10 text-ivory/70 transition-all duration-300 group-hover:bg-ember group-hover:text-ivory">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
