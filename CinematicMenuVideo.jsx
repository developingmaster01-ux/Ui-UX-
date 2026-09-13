import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import ImageWithFallback from "./shared/ImageWithFallback";

const VIDEO_SRC = "/assets/badshah-spicy-menu-video.mp4";
const POSTER_SRC = "/assets/menu.jpg";

export default function CinematicMenuVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-15%" });

  const [videoAvailable, setVideoAvailable] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // वीडियो फ़ाइल मौजूद है या नहीं, यह जांचें ताकि टूटा हुआ प्लेयर न दिखे
    fetch(VIDEO_SRC, { method: "HEAD" })
      .then((res) => setVideoAvailable(res.ok))
      .catch(() => setVideoAvailable(false));
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) v.pause();
    else v.play();
    setPlaying(!playing);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  const toggleFullscreen = () => {
    const v = videoRef.current;
    if (v?.requestFullscreen) v.requestFullscreen();
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink-soft px-6 py-28 md:py-36"
    >
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(196,69,28,0.08), transparent 65%)",
          opacity: inView ? 1 : 0,
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <span className="font-body text-xs tracking-[0.15em] text-gold/70">
            CINEMATIC MENU EXPERIENCE
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ivory sm:text-4xl md:text-5xl">
            आपका मेन्यू, अब एक experience.
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-ivory/55">
            Traditional menu को cinematic digital experience में बदलें.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mx-auto aspect-video w-full overflow-hidden rounded-2xl border border-ink-line shadow-ember"
        >
          {videoAvailable ? (
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              muted={muted}
              playsInline
              onTimeUpdate={onTimeUpdate}
              onEnded={() => setPlaying(false)}
              className="h-full w-full object-cover"
            />
          ) : (
            <ImageWithFallback
              src={POSTER_SRC}
              alt="बादशाह स्पाइसी मेन्यू"
              label="मेन्यू वीडियो जल्द जोड़ा जाएगा"
              className="absolute inset-0"
            />
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />

          {!playing && (
            <button
              onClick={videoAvailable ? togglePlay : undefined}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="वीडियो चलाएं"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory/95 shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                <Play className="ml-1 h-7 w-7 text-ink" fill="currentColor" />
              </span>
            </button>
          )}

          {videoAvailable && (
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-4 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button onClick={togglePlay} aria-label="Play/Pause" className="text-ivory/90 hover:text-gold">
                {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-ivory/20">
                <div
                  className="h-full rounded-full bg-ember-bright transition-[width]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <button onClick={toggleMute} aria-label="Mute/Unmute" className="text-ivory/90 hover:text-gold">
                {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <button onClick={toggleFullscreen} aria-label="Fullscreen" className="text-ivory/90 hover:text-gold">
                <Maximize className="h-5 w-5" />
              </button>
            </div>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-8 max-w-lg text-center font-body text-ivory/45"
        >
          आपके मेन्यू को सिर्फ दिखाया नहीं जाता — उसे यादगार बनाया जाता है।
        </motion.p>
        <p className="mx-auto mt-2 max-w-md text-center font-body text-xs text-ivory/25">
          यह एक digital concept प्रस्तुति है, आधिकारिक विज्ञापन नहीं।
        </p>
      </div>
    </section>
  );
}
