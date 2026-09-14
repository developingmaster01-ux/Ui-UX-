import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { Search, Expand, Plus, Minus } from "lucide-react";
import { CATEGORIES, MENU_ITEMS, RESTAURANT } from "../data/menu";
import MenuLightbox from "./shared/MenuLightbox";
import { useCart } from "../context/CartContext";

function priceLabel(item) {
  if (item.single) return { primary: `₹${item.single.price}`, note: item.single.unit };
  return null;
}

function ItemRow({ item, isLast }) {
  const { qtyById, increment, decrement } = useCart();
  const qty = qtyById[item.id] || 0;
  const single = priceLabel(item);

  return (
    <div
      className={`flex items-center justify-between gap-4 px-6 py-5 ${
        isLast ? "" : "border-b border-ink-line sm:border-b-0"
      }`}
    >
      <div className="min-w-0">
        <h3 className="font-display text-base font-semibold text-ivory">{item.name}</h3>
        {single ? (
          <p className="mt-0.5 font-body text-sm text-gold-bright">
            {single.primary} <span className="text-ivory/35">/ {single.note}</span>
          </p>
        ) : (
          <div className="mt-0.5 flex gap-4 font-body text-sm">
            <span className="text-ivory/40">
              हाफ <span className="text-gold-bright">₹{item.half}</span>
            </span>
            <span className="text-ivory/40">
              फुल <span className="text-gold-bright">₹{item.full}</span>
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-shrink-0 items-center gap-2">
        {qty > 0 && (
          <button
            onClick={() => decrement(item.id)}
            aria-label="घटाएं"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
        )}
        {qty > 0 && <span className="w-5 text-center font-body text-sm text-ivory">{qty}</span>}
        <button
          onClick={() => increment(item.id)}
          aria-label="जोड़ें"
          className={`flex h-8 items-center justify-center gap-1 rounded-full font-body text-xs font-semibold transition-colors ${
            qty > 0
              ? "w-8 border border-ivory/20 text-ivory/70 hover:border-gold hover:text-gold"
              : "px-3 bg-ember/15 text-ember-bright hover:bg-ember hover:text-ivory"
          }`}
        >
          <Plus className="h-3.5 w-3.5" />
          {qty === 0 && "जोड़ें"}
        </button>
      </div>
    </div>
  );
}

export default function InteractiveMenu() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [query, setQuery] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const items = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = item.category === activeCategory;
      const matchesQuery = item.name.toLowerCase().includes(query.trim().toLowerCase());
      return query ? matchesQuery : matchesCategory;
    });
  }, [activeCategory, query]);

  return (
    <section id="menu" className="relative bg-ink px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="mb-3 text-center">
          <span className="font-body text-xs tracking-[0.1em] text-gold/70">डिजिटल मेन्यू</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ivory sm:text-4xl">
            आज क्या खाएंगे?
          </h2>
        </div>
        <p className="mb-8 text-center font-body text-xs text-ivory/30">
          {RESTAURANT.ratesEffective}
        </p>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <LayoutGroup>
            <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 hide-scrollbar sm:mx-0 sm:flex-wrap sm:px-0">
              {CATEGORIES.map((cat) => {
                const active = activeCategory === cat && !query;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setQuery("");
                    }}
                    className="relative flex-shrink-0 rounded-full px-4 py-2 font-body text-sm text-ivory/55 transition-colors duration-300 hover:text-ivory"
                  >
                    {active && (
                      <motion.span
                        layoutId="category-pill"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-ember"
                      />
                    )}
                    <span className={`relative ${active ? "text-ivory" : ""}`}>{cat}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          <div className="relative flex-shrink-0">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ivory/35" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="डिश खोजें..."
              className="w-full rounded-full border border-ink-line bg-ink-surface py-2.5 pl-10 pr-4 font-body text-sm text-ivory placeholder:text-ivory/30 focus:border-gold-dim sm:w-52"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink-line bg-ink-surface">
          <AnimatePresence mode="wait">
            <motion.div
              key={query ? "search" : activeCategory}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2"
            >
              {items.length === 0 ? (
                <p className="col-span-2 px-6 py-10 text-center font-body text-ivory/40">
                  कोई डिश नहीं मिली
                </p>
              ) : (
                items.map((item, i) => (
                  <div key={item.id} className={i % 2 === 0 ? "sm:border-r sm:border-ink-line" : ""}>
                    <ItemRow item={item} isLast={i === items.length - 1} />
                  </div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setLightboxOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-6 py-3 font-body text-sm text-ivory/80 transition-colors hover:border-gold hover:text-gold"
          >
            <Expand className="h-4 w-4" />
            पूरा मेन्यू देखें
          </button>
        </div>
      </div>

      <MenuLightbox open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </section>
  );
}
