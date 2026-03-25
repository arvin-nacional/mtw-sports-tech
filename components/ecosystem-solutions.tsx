import Link from 'next/link';

export function EcosystemSolutions() {
  return (
    <section
      className="px-6 py-24 lg:px-12"
      style={{ backgroundColor: 'var(--surface-container-low)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h2
            className="mb-3 text-3xl font-bold tracking-tight"
            style={{ color: 'var(--primary)' }}
          >
            Performance Solutions
          </h2>
          <div
            className="h-[2px] w-16 rounded-full"
            style={{ backgroundColor: 'var(--primary)' }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          {/* ── Large featured card (left, 2 cols) ── */}
          <div
            className="relative flex flex-col justify-end overflow-hidden rounded-xl p-8 lg:col-span-2"
            style={{
              backgroundColor: 'var(--surface-container)',
              border: '1px solid rgba(42,58,92,0.2)',
              minHeight: '360px',
            }}
          >
            {/* Ambient orb */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 70% 40%, rgba(142,213,255,0.06) 0%, transparent 70%)',
              }}
            />
            {/* HUD grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  'linear-gradient(var(--on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--on-surface) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10">
              <p
                className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: 'var(--primary)' }}
              >
                Full Ecosystem
              </p>
              <h3
                className="mb-4 text-4xl font-bold leading-tight"
                style={{ color: 'var(--on-surface)' }}
              >
                Complete Performance Suite
              </h3>
              <p
                className="mb-6 max-w-md text-sm leading-relaxed"
                style={{ color: 'var(--on-surface)', opacity: 0.6 }}
              >
                End-to-end kinetic data infrastructure for professional clubs and national programs.
                Combines AI tracking, live analytics, scoreboard integration, and dedicated
                performance engineering support.
              </p>
              <Link
                href="/search"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: 'var(--primary)' }}
              >
                Configure Your System
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>

          {/* ── Right stacked cards ── */}
          <div className="flex flex-col gap-4">

            {/* Card 1 — Tournament Operations */}
            <div
              className="flex flex-1 flex-col justify-between rounded-xl p-6"
              style={{
                backgroundColor: 'var(--surface-container)',
                borderLeft: '3px solid var(--tertiary)',
                border: '1px solid rgba(42,58,92,0.2)',
                borderLeftWidth: '3px',
                borderLeftColor: 'var(--tertiary)',
              }}
            >
              <div>
                <h4
                  className="mb-2 text-lg font-bold"
                  style={{ color: 'var(--on-surface)' }}
                >
                  Tournament Operations
                </h4>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: 'var(--on-surface)', opacity: 0.55 }}
                >
                  Rapid-deploy event coverage with AI cameras, live scoring overlays, and instant
                  video replay. Built for leagues, cups, and multi-day competitions.
                </p>
              </div>
              <Link
                href="/search"
                className="text-[10px] font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-70"
                style={{ color: 'var(--tertiary)' }}
              >
                Explore Packages →
              </Link>
            </div>

            {/* Card 2 — Team & Academy */}
            <div
              className="flex flex-1 flex-col justify-between rounded-xl p-6"
              style={{
                backgroundColor: 'var(--surface-container)',
                border: '1px solid rgba(42,58,92,0.2)',
                borderLeftWidth: '3px',
                borderLeftColor: 'var(--primary)',
              }}
            >
              <div>
                <h4
                  className="mb-2 text-lg font-bold"
                  style={{ color: 'var(--on-surface)' }}
                >
                  Team &amp; Academy
                </h4>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: 'var(--on-surface)', opacity: 0.55 }}
                >
                  Scalable tracking and coaching analytics for development programs — from youth
                  academies to professional squads chasing measurable gains.
                </p>
              </div>
              <Link
                href="/search"
                className="text-[10px] font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-70"
                style={{ color: 'var(--primary)' }}
              >
                Learn More →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
