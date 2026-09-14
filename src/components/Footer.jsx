import { RESTAURANT } from "../data/menu";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-ivory">{RESTAURANT.name}</p>
          <p className="font-body text-xs text-ivory/40">{RESTAURANT.category} · शुक्लागंज, उन्नाव</p>
        </div>
        <p className="font-body text-xs text-ivory/30">
          यह एक digital brand showcase है — {RESTAURANT.nameEn} के लिए तैयार किया गया।
        </p>
      </div>
    </footer>
  );
}
