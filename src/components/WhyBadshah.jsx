import { motion } from "framer-motion";
import { Flame, Smile, Wallet, HeartHandshake } from "lucide-react";
import { RESTAURANT } from "../data/menu";

const FEATURES = [
  { icon: Flame, title: "ताज़ा बनकर तैयार", desc: "ऑर्डर मिलते ही तैयारी शुरू होती है।" },
  { icon: Smile, title: "स्वाद में भरोसा", desc: "जाने-पहचाने मसालों का बेहतरीन संतुलन।" },
  { icon: Wallet, title: "जेब के अनुकूल", desc: "रोज़ खाने लायक कीमतें।" },
  { icon: HeartHandshake, title: "खाने के शौकीनों के लिए", desc: "हर प्लेट में मेहनत साफ़ दिखे।" },
];

export default function WhyBadshah() {
  return (
    <section className="relative bg-ink-soft px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <span className="font-body text-xs tracking-[0.1em] text-gold/70">
            क्यों {RESTAURANT.name}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ivory sm:text-4xl">
            जो चीज़ें मायने रखती हैं
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-4 bg-ink-soft p-7"
            >
              <f.icon className="h-6 w-6 text-ember-bright" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-semibold text-ivory">{f.title}</h3>
              <p className="font-body text-sm leading-relaxed text-ivory/55">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
