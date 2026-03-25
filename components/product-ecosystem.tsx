import Link from "next/link";

const collections = [
  {
    label: "AI Cameras & Tracking",
    category: "Automated camera systems",
    products: ["Spot", "Playsight"],
    description:
      "Fully automated multi-angle camera systems that track live action without a human operator — so your staff can focus on the game, not the lens.",
    href: "/search/ai-cameras",
    icon: "⬡",
  },
  {
    label: "Video Analysis",
    category: "Coaching & breakdown tools",
    products: ["Preciser"],
    description:
      "Frame-by-frame tactical breakdown and annotation tools built for coaches. Cut, tag, and deliver clips to athletes in minutes, not hours.",
    href: "/search/video-analysis",
    icon: "▶",
  },
  {
    label: "Live Streaming",
    category: "Broadcast & streaming",
    products: ["Omnistream"],
    description:
      "Professional-grade broadcast straight from the venue. Multi-platform streaming with zero latency overlays and real-time scoreboard sync.",
    href: "/search/live-streaming",
    icon: "◉",
  },
  {
    label: "Scoreboards",
    category: "Digital scoring solutions",
    products: ["Scorli"],
    description:
      "Dynamic digital scoreboards designed for indoor and outdoor venues. Real-time sync with analytics systems for a fully connected game-day experience.",
    href: "/search/scoreboards",
    icon: "▦",
  },
  {
    label: "Statistics & Analytics",
    category: "Performance tracking",
    products: ["Basketball Stats", "Volleyball Stats"],
    description:
      "Sport-specific stat tracking that turns raw numbers into actionable performance intelligence — from shot charts to serve efficiency reports.",
    href: "/search/statistics",
    icon: "◈",
  },
];

const packages = [
  {
    label: "School Package",
    category: "Bundled solution",
    tagline: "Built for educational institutions and development programs.",
    description:
      "Everything a school sports program needs to compete at the next level — video analysis, live stats, athlete assessment, and automated highlight capture. No dedicated tech staff required.",
    includes: ["Reelr", "Preciser", "Stats", "Athletes Assessment"],
    href: "/search/packages",
    accentColor: "var(--primary)",
    accentBg: "rgba(142,213,255,0.07)",
  },
  {
    label: "Tournament Package",
    category: "Bundled solution",
    tagline: "End-to-end coverage for competitive events.",
    description:
      "The complete event operations stack — from automated cameras and live broadcast to real-time stats and AI-powered voice commentary. Run a professional production with a lean crew.",
    includes: ["Reelr", "Preciser", "Stats", "Omnistream", "AI Voice Over"],
    href: "/search/packages",
    accentColor: "var(--tertiary)",
    accentBg: "rgba(255,193,118,0.07)",
  },
];

export function ProductEcosystem() {
  return (
    <section
      className="px-6 py-24 lg:px-12"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* ── Header ── */}
        <div className="mb-14">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "var(--primary)", opacity: 0.7 }}
          >
            What We Offer
          </p>
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ color: "var(--on-surface)" }}
          >
            The MTW Ecosystem
          </h2>
          <div
            className="mt-4 h-[2px] w-12 rounded-full"
            style={{ backgroundColor: "var(--primary)" }}
          />
        </div>

        {/* ── Collections grid ── */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((col) => (
            <Link
              key={col.label}
              href={col.href}
              className="product-card group flex flex-col rounded-xl p-6"
              style={{ border: "1px solid rgba(42,58,92,0.15)" }}
            >
              {/* Icon + category */}
              <div className="mb-4 flex items-center justify-between">
                <span
                  className="text-xl"
                  style={{ color: "var(--primary)", opacity: 0.5 }}
                  aria-hidden
                >
                  {col.icon}
                </span>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--on-surface)", opacity: 0.35 }}
                >
                  {col.category}
                </span>
              </div>

              {/* Title */}
              <h3
                className="mb-2 text-base font-bold"
                style={{ color: "var(--on-surface)" }}
              >
                {col.label}
              </h3>

              {/* Description */}
              <p
                className="mb-5 text-sm leading-relaxed"
                style={{ color: "var(--on-surface)", opacity: 0.5 }}
              >
                {col.description}
              </p>

              {/* Product chips */}
              <div className="mt-auto flex flex-wrap gap-2">
                {col.products.map((p) => (
                  <span
                    key={p}
                    className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.05em]"
                    style={{
                      backgroundColor: "var(--surface-container-high)",
                      color: "var(--primary)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* ── Packages ── */}
        <div className="mt-12">
          <p
            className="mb-6 text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "var(--tertiary)", opacity: 0.8 }}
          >
            Bundled Solutions
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {packages.map((pkg) => (
              <div
                key={pkg.label}
                className="flex flex-col rounded-xl p-8"
                style={{
                  backgroundColor: pkg.accentBg,
                  border: "1px solid rgba(42,58,92,0.15)",
                  borderLeftWidth: "3px",
                  borderLeftColor: pkg.accentColor,
                }}
              >
                {/* Header */}
                <div className="mb-1 flex items-center gap-3">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: pkg.accentColor, opacity: 0.7 }}
                  >
                    {pkg.category}
                  </span>
                </div>
                <h3
                  className="mb-1 text-2xl font-bold"
                  style={{ color: "var(--on-surface)" }}
                >
                  {pkg.label}
                </h3>
                <p
                  className="mb-4 text-sm font-medium"
                  style={{ color: pkg.accentColor }}
                >
                  {pkg.tagline}
                </p>
                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{ color: "var(--on-surface)", opacity: 0.55 }}
                >
                  {pkg.description}
                </p>

                {/* Includes */}
                <div className="mb-6">
                  <p
                    className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: "var(--on-surface)", opacity: 0.4 }}
                  >
                    Includes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.includes.map((item) => (
                      <span
                        key={item}
                        className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.05em]"
                        style={{
                          backgroundColor: "var(--surface-container-high)",
                          color: pkg.accentColor,
                          border: `1px solid ${pkg.accentColor}30`,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={pkg.href}
                  className="mt-auto inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-70"
                  style={{ color: pkg.accentColor }}
                >
                  View Package →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
