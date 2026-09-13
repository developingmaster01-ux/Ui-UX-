import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X, Plus, Minus, Phone, MessageCircle, Copy, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import { RESTAURANT, WHATSAPP_NUMBER } from "../data/menu";

export default function FloatingOrderBar() {
  const { lines, itemCount, total, hasUnknownPrice, increment, decrement, clear } = useCart();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (itemCount === 0) return null;

  const orderText = [
    `${RESTAURANT.name} — ऑर्डर`,
    ...lines.map((l) => {
      const unit = l.item.single ? l.item.single.unit : "";
      const priceLabel = l.price != null ? `₹${l.price}${unit ? "/" + unit : ""}` : "मूल्य जानने हेतु पूछें";
      return `• ${l.item.name} x${l.qty} — ${priceLabel}`;
    }),
    hasUnknownPrice
      ? `कुल (जो दाम पता हैं): ₹${total} + कुछ आइटम का मूल्य कॉल पर पूछें`
      : `कुल: ₹${total}`,
  ].join("\n");

  const copyOrder = async () => {
    try {
      await navigator.clipboard.writeText(orderText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available — silently ignore, user can still read the summary on screen
    }
  };

  return (
    <>
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        onClick={() => setOpen(true)}
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between rounded-2xl bg-ember px-5 py-4 shadow-ember sm:inset-x-auto sm:right-6 sm:w-80"
      >
        <span className="flex items-center gap-2 font-body text-sm font-semibold text-ivory">
          <ShoppingBag className="h-4 w-4" />
          {itemCount} आइटम चुने गए
        </span>
        <span className="font-display text-base font-bold text-ivory">
          ₹{total}
          {hasUnknownPrice ? "+" : ""}
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-end justify-center bg-ink/80 backdrop-blur-sm sm:items-center"
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] w-full max-w-md overflow-y-auto rounded-t-2xl border border-ink-line bg-ink-surface p-6 sm:rounded-2xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-ivory">आपका ऑर्डर</h3>
                <button onClick={() => setOpen(false)} aria-label="बंद करें" className="text-ivory/50 hover:text-ivory">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-3">
                {lines.map((l) => (
                  <div key={l.item.id} className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-body text-sm text-ivory">{l.item.name}</p>
                      <p className="font-body text-xs text-ivory/40">
                        {l.price != null ? `₹${l.price}` : "मूल्य जानने हेतु पूछें"}
                        {l.item.single ? ` / ${l.item.single.unit}` : ""}
                      </p>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-3">
                      <button
                        onClick={() => decrement(l.item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 hover:border-gold hover:text-gold"
                        aria-label="घटाएं"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-4 text-center font-body text-sm text-ivory">{l.qty}</span>
                      <button
                        onClick={() => increment(l.item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 hover:border-gold hover:text-gold"
                        aria-label="बढ़ाएं"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-5 h-px bg-ink-line" />

              <div className="flex items-center justify-between font-body text-sm text-ivory/60">
                <span>कुल {hasUnknownPrice ? "(अनुमानित)" : ""}</span>
                <span className="font-display text-lg font-bold text-gold-bright">
                  ₹{total}
                  {hasUnknownPrice ? "+" : ""}
                </span>
              </div>
              {hasUnknownPrice && (
                <p className="mt-1 font-body text-xs text-ivory/35">
                  कुछ आइटम का दाम कॉल पर पूछना होगा।
                </p>
              )}

              <div className="mt-6 flex flex-col gap-3">
                {WHATSAPP_NUMBER ? (
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 font-body text-sm font-semibold text-ivory transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp पर ऑर्डर भेजें
                  </a>
                ) : (
                  <a
                    href={`tel:${RESTAURANT.phones[0]}`}
                    className="flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 font-body text-sm font-semibold text-ivory transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    <Phone className="h-4 w-4" /> कॉल करके ऑर्डर करें
                  </a>
                )}
                <button
                  onClick={copyOrder}
                  className="flex items-center justify-center gap-2 rounded-full border border-ivory/20 px-6 py-3 font-body text-sm text-ivory/80 transition-colors hover:border-gold hover:text-gold"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "कॉपी हो गया" : "ऑर्डर लिस्ट कॉपी करें"}
                </button>
                <button
                  onClick={clear}
                  className="font-body text-xs text-ivory/35 hover:text-ivory/60"
                >
                  ऑर्डर खाली करें
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
