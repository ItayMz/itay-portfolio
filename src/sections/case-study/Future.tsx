export function FutureSection() {
  return (
    <section aria-labelledby="future-title" className="container-shell py-14 lg:py-20">
      <div className="border-t border-white/8 pt-10">
        <p className="text-sm font-bold text-brand-soft">10</p>
        <h2 id="future-title" className="mt-3 text-3xl font-black tracking-tight">
          Possible next iterations
        </h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-copy-muted">
          The current version focuses on the workflows required for daily operational use. Future development would only be added where it provides clear analyst value.
        </p>
        <ul className="mt-6 max-w-4xl space-y-2 text-base leading-7 text-copy-muted">
          <li>Additional platform integrations</li>
          <li>Configurable export templates</li>
          <li>Optional threat-intelligence enrichment</li>
          <li>Saved analyst presets</li>
          <li>Expanded audit and activity history</li>
        </ul>
      </div>
    </section>
  );
}