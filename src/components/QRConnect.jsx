import { motion } from "framer-motion";
import { ScanLine } from "lucide-react";
import ImageWithFallback from "./shared/ImageWithFallback";
import { GOOGLE_MAPS_URL, GOOGLE_REVIEW_URL } from "../data/menu";

const QR_CARDS = [
  {
    key: "payment",
    src: "/assets/payment-qr.png",
    title: "PAYMENT",
    desc: "आसान और तेज़ भुगतान",
    href: null,
  },
  {
    key: "maps",
    src: "/assets/maps-qr.png",
    title: "GET DIRECTIONS",
    desc: "हम तक आसानी से पहुँचें",
    href: GOOGLE_MAPS_URL,
  },
  {
    key: "review",
    src: "/assets/review-qr.png",
    title: "GOOGLE REVIEW",
    desc: "अपना अनुभव शेयर करें",
    href: GOOGLE_REVIEW_URL || null,
  },
];

export default function QRConnect() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 md:py-36">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(217,164,65,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <span className="font-body text-xs tracking-[0.1em] text-gold/70">QR / CONNECT</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ivory sm:text-4xl">
            एक स्कैन की दूरी पर।
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {QR_CARDS.map((card, i) => {
            const Wrapper = card.href ? "a" : "div";
            const wrapperProps = card.href
              ? { href: card.href, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`flex flex-col items-center gap-5 rounded-2xl border border-ivory/10 bg-ink-surface/60 p-7 text-center backdrop-blur-md transition-colors ${
                    card.href ? "hover:border-gold/40" : ""
                  }`}
                >
                  <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-xl bg-ivory/95 p-3">
                    <ImageWithFallback
                      src={card.src}
                      alt={card.title}
                      label="QR CODE"
                      fill={true}
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-center gap-1.5 text-ivory/40">
                      <ScanLine className="h-3.5 w-3.5" />
                      <span className="font-body text-[11px] tracking-wide">{card.title}</span>
                    </div>
                    <p className="font-body text-sm text-ivory/60">{card.desc}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-8 text-center font-body text-xs text-ivory/30">
          Payment QR असली मेन्यू फोटो से लिया गया है। Directions बटन आपके पते से बनी Google Maps
          search लिंक खोलता है। Review QR अभी placeholder है — असली रिव्यू लिंक मिलते ही जोड़ दिया जाएगा।
        </p>
      </div>
    </section>
  );
}
