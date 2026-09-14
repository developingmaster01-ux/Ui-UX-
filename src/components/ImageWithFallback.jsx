import { useState } from "react";
import { ImageOff } from "lucide-react";

/**
 * असली फ़ोटो न मिलने पर एक premium placeholder दिखाता है — कभी टूटा हुआ
 * image icon या error नहीं दिखेगा।
 */
export default function ImageWithFallback({
  src,
  alt,
  className = "",
  label,
  fill = true,
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-ink-surface via-ink-soft to-ink border border-ink-line ${className}`}
      >
        <div className="texture-grain absolute inset-0" />
        <div className="relative flex flex-col items-center gap-2 px-4 text-center">
          <ImageOff className="h-6 w-6 text-gold-dim" strokeWidth={1.5} />
          <span className="font-body text-xs text-ivory/40">
            {label || "इमेज जल्द जोड़ी जाएगी"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={fill ? `h-full w-full object-cover ${className}` : className}
      loading="lazy"
    />
  );
}
