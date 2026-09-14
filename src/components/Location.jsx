import { motion } from "framer-motion";
import { Phone, MessageCircle, Navigation, MapPin } from "lucide-react";
import { RESTAURANT, WHATSAPP_NUMBER, GOOGLE_MAPS_URL } from "../data/menu";

export default function Location() {
  return (
    <section id="location" className="relative bg-ink px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-xs tracking-[0.1em] text-gold/70">लोकेशन</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ivory sm:text-4xl">
            मिलते हैं शुक्लागंज में।
          </h2>

          <div className="mt-8 space-y-1 font-body text-ivory/70">
            <p className="font-display text-lg font-semibold text-ivory">{RESTAURANT.name}</p>
            {RESTAURANT.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-4 space-y-1 font-body text-ivory/70">
            {RESTAURANT.phones.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${RESTAURANT.phones[0]}`}
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-body text-sm font-semibold text-ivory transition-transform hover:scale-[1.03] active:scale-95"
            >
              <Phone className="h-4 w-4" /> CALL NOW
            </a>

            {WHATSAPP_NUMBER ? (
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-6 py-3 font-body text-sm font-semibold text-ivory/85 transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" /> WHATSAPP
              </a>
            ) : null}

            {GOOGLE_MAPS_URL ? (
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-6 py-3 font-body text-sm font-semibold text-ivory/85 transition-colors hover:border-gold hover:text-gold"
              >
                <Navigation className="h-4 w-4" /> GET DIRECTIONS
              </a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-ivory/10 px-6 py-3 font-body text-sm text-ivory/30">
                <Navigation className="h-4 w-4" /> GET DIRECTIONS — लोकेशन लिंक जल्द जोड़ा जाएगा
              </span>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-ink-line bg-ink-surface texture-grain md:aspect-square"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(244,233,216,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,233,216,0.05) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="relative flex flex-col items-center gap-3 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ember shadow-ember">
              <MapPin className="h-6 w-6 text-ivory" />
            </span>
            <p className="font-display text-lg font-semibold text-ivory">{RESTAURANT.name}</p>
            <p className="max-w-[220px] font-body text-sm text-ivory/50">
              {RESTAURANT.addressLines.join(", ")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
