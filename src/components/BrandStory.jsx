import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageWithFallback from "./shared/ImageWithFallback";

export default function BrandStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-10">
        <div className="order-2 md:order-1">
          <span className="font-body text-xs tracking-[0.1em] text-ember-bright/80">
            ब्रांड स्टोरी
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl md:text-5xl">
            भूख लगी है?
            <br />
            कुछ खास खाइए।
          </h2>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ivory/60">
            बादशाह स्पाइसी के स्वाद को एक ऐसी digital identity दें जो पहली नज़र में
            याद रह जाए।
          </p>

          <div className="mt-10 flex items-center gap-6">
            <span className="h-px w-12 bg-gold-dim" />
            <div className="flex gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-gold/30" />
            </div>
          </div>
        </div>

        <div className="order-1 relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink-line md:order-2">
          <motion.div style={{ y }} className="absolute inset-[-8%]">
            <ImageWithFallback
              src="/assets/food/brand-story.jpg"
              alt="बादशाह स्पाइसी"
              label="ब्रांड इमेज जल्द जोड़ी जाएगी"
              className="h-full w-full"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-ember/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
