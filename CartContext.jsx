import { createContext, useContext, useMemo, useState, useCallback } from "react";
import { MENU_ITEMS } from "../data/menu";

const CartContext = createContext(null);

function priceOf(item) {
  if (item.single) return item.single.price;
  return item.full ?? item.half ?? null;
}

export function CartProvider({ children }) {
  const [qtyById, setQtyById] = useState({});

  const setQty = useCallback((id, qty) => {
    setQtyById((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }, []);

  const increment = useCallback((id) => {
    setQtyById((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }, []);

  const decrement = useCallback((id) => {
    setQtyById((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: current - 1 };
    });
  }, []);

  const clear = useCallback(() => setQtyById({}), []);

  const lines = useMemo(() => {
    return Object.entries(qtyById)
      .map(([id, qty]) => {
        const item = MENU_ITEMS.find((m) => m.id === id);
        if (!item) return null;
        const price = priceOf(item);
        return { item, qty, price, lineTotal: price != null ? price * qty : null };
      })
      .filter(Boolean);
  }, [qtyById]);

  const itemCount = useMemo(() => lines.reduce((s, l) => s + l.qty, 0), [lines]);
  const total = useMemo(
    () => lines.reduce((s, l) => s + (l.lineTotal || 0), 0),
    [lines]
  );
  const hasUnknownPrice = useMemo(() => lines.some((l) => l.price == null), [lines]);

  const value = {
    qtyById,
    setQty,
    increment,
    decrement,
    clear,
    lines,
    itemCount,
    total,
    hasUnknownPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
