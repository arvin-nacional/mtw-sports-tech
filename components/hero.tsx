"use client";

export function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 text-center"
      style={{ minHeight: "88vh", backgroundColor: "var(--surface)" }}
    >
      {/* Ambient glow — tonal, not harsh */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(142,213,255,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid overlay for HUD feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--on-surface) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Data label */}
        <p
          className="mb-6 text-xs font-semibold uppercase tracking-[0.35em]"
          style={{ color: "var(--primary)" }}
        >
          More Than Winning
        </p>

        {/* Display headline — Space Grotesk */}
        <h1
          className="font-display mb-6 text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl"
          style={{ color: "var(--on-surface)" }}
        >
          Transforming Sports{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--primary), var(--primary-container))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Through Technology
          </span>
        </h1>

        <p
          className="mx-auto max-w-2xl text-lg leading-relaxed md:text-xl"
          style={{ color: "var(--on-surface)", opacity: 0.6 }}
        >
          Engineering elite performance through kinetic data. We transform
          athletic potential into measurable dominance with the world&apos;s
          most advanced sports tracking ecosystem.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* Primary — gradient CTA */}
          <a
            href="/search"
            className="btn-primary px-8 py-3 transition-opacity hover:opacity-90"
          >
            Explore Products
          </a>
          {/* Secondary — ghost */}
          <a
            href="/search"
            className="rounded-md px-8 py-3 text-xs font-semibold uppercase tracking-[0.05em] transition-colors"
            style={{
              border: "1px solid rgba(42,58,92,0.4)",
              color: "var(--on-surface)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--surface-container-high)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "transparent";
            }}
          >
            View Packages
          </a>
        </div>
      </div>
    </section>
  );
}
