import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

const PAGES = ["/assets/menu.jpg", "/assets/menu-page2.jpg"];

export default function MenuLightbox({ open, onClose }) {
  const [page, setPage] = useState(0);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="पूरा मेन्यू"
        >
          <button
            onClick={onClose}
            aria-label="बंद करें"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[85vh] max-w-3xl flex-col items-center gap-4"
          >
            <div className="max-h-[75vh] overflow-auto rounded-xl border border-ink-line touch-pinch-zoom">
              <ImageWithFallback
                src={PAGES[page]}
                alt={`बादशाह स्पाइसी — मेन्यू पेज ${page + 1}`}
                label="मेन्यू की फोटो जल्द जोड़ी जाएगी"
                className="max-h-[75vh] w-full"
                fill={false}
              />
            </div>

            {PAGES.length > 1 && (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setPage((p) => (p - 1 + PAGES.length) % PAGES.length)}
                  aria-label="पिछला पेज"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 hover:border-gold hover:text-gold"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="font-body text-sm text-ivory/60">
                  पेज {page + 1} / {PAGES.length}
                </span>
                <button
                  onClick={() => setPage((p) => (p + 1) % PAGES.length)}
                  aria-label="अगला पेज"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 hover:border-gold hover:text-gold"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
