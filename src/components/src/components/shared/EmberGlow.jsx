import { motion } from "framer-motion";

/**
 * धीमी, सिनेमैटिक ambient glow — कोई cheesy flame animation नहीं,
 * सिर्फ धीरे-धीरे घूमती हुई रोशनी।
 */
export default function EmberGlow({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -left-1/4 top-1/3 h-[60vh] w-[60vh] rounded-full bg-ember/25 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-[50vh] w-[50vh] rounded-full bg-gold/15 blur-[130px]"
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
