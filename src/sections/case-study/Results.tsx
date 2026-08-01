export function ResultsSection() {
  return (
    <section aria-labelledby="results-title" className="container-shell py-14 lg:py-18">
      <div className="border-t border-white/8 pt-10">
        <p className="text-sm font-bold text-brand-soft">08</p>
        <h2 id="results-title" className="mt-3 text-3xl font-black tracking-tight">
          A repeatable workflow instead of repeated preparation
        </h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-copy-muted">
          IOC Workbench converted a fragmented manual process into a consistent workflow that can be used during daily SOC operations.
        </p>
        <ul className="mt-6 max-w-4xl space-y-2 text-base leading-7 text-copy-muted">
          <li>One interface for text, CSV, and XLSX inputs</li>
          <li>Consistent normalization and deduplication</li>
          <li>Platform-specific investigation queries</li>
          <li>Controlled exports for Defender, CrowdStrike, and QRadar</li>
          <li>Clear visibility into supported and unsupported indicators</li>
          <li>Automated test coverage protecting core workflow behavior</li>
        </ul>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-copy-muted">
          The strongest result is not a single metric. It is that analysts can spend less attention rebuilding files and queries and more attention reviewing the indicators and making investigation decisions.
        </p>
      </div>
    </section>
  );
}