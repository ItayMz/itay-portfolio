export function ArchitectureSection() {
  return (
    <section aria-labelledby="architecture-title" className="container-shell py-14 lg:py-18">
      <div className="border-t border-white/8 pt-10">
        <p className="text-sm font-bold text-brand-soft">04</p>
        <h2 id="architecture-title" className="mt-3 text-3xl font-black tracking-tight">
          A focused frontend and backend architecture
        </h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-copy-muted">
          The application separates the analyst interface from the parsing and export logic so that each part of the workflow remains testable and maintainable.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section aria-labelledby="frontend-title">
            <h3 id="frontend-title" className="text-sm font-bold uppercase tracking-[0.14em] text-copy">
              Frontend
            </h3>
            <ul className="mt-4 space-y-2 text-base leading-7 text-copy-muted">
              <li>React</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>Analyst workflow controls</li>
              <li>Detection summary</li>
              <li>Query presentation</li>
              <li>Client-side CrowdStrike and QRadar exports</li>
            </ul>
          </section>

          <section aria-labelledby="backend-title">
            <h3 id="backend-title" className="text-sm font-bold uppercase tracking-[0.14em] text-copy">
              Backend
            </h3>
            <ul className="mt-4 space-y-2 text-base leading-7 text-copy-muted">
              <li>FastAPI</li>
              <li>Python</li>
              <li>File and free-text parsing</li>
              <li>IOC normalization and classification</li>
              <li>Validation and deduplication</li>
              <li>Defender KQL generation</li>
              <li>Defender CSV export</li>
            </ul>
          </section>
        </div>

        <p className="mt-8 max-w-4xl text-base leading-7 text-copy-muted">
          Flow: Input → Parser → Normalizer → Classifier → Validator → Query / Export Builders → Results
        </p>
      </div>
    </section>
  );
}