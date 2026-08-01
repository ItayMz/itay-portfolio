export function SolutionSection() {
  return (
    <section aria-labelledby="solution-title" className="container-shell py-14 lg:py-18">
      <div className="border-t border-white/8 pt-10">
        <p className="text-sm font-bold text-brand-soft">02</p>
        <h2 id="solution-title" className="mt-3 text-3xl font-black tracking-tight">
          One workflow from raw input to operational output
        </h2>
        <div className="mt-5 space-y-5 max-w-4xl text-lg leading-8 text-copy-muted">
          <p>IOC Workbench centralizes the preparation process into one analyst-focused workflow.</p>
          <p>The user can paste free text or upload CSV and XLSX files. The application extracts supported indicators, normalizes their values, removes duplicates, validates the results, and generates outputs according to the selected security workflow.</p>
          <p>The application supports Microsoft Defender investigation and export workflows, CrowdStrike Advanced Event Search and blocking exports, and QRadar IPv4 blocking exports.</p>
        </div>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-copy-muted">
          The analyst remains responsible for the investigation and final action. The tool removes repetitive preparation work and makes the process more consistent.
        </p>
      </div>
    </section>
  );
}