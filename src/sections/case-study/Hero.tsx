export function CaseStudyHero() {
  return (
    <section aria-labelledby="ioc-workbench-title" className="container-shell py-16 lg:py-24">
      <p className="eyebrow">Project case study</p>
      <h1 id="ioc-workbench-title" className="mt-4 text-5xl font-black tracking-[-0.04em] sm:text-7xl">
        IOC Workbench
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-copy-muted">
        Internal SOC Automation Platform
      </p>
      <p className="mt-6 max-w-3xl text-base leading-7 text-copy-muted">
        IOC Workbench is an analyst-focused tool built to transform raw indicator lists into normalized, validated, and platform-ready investigation and blocking outputs.
      </p>
      <p className="mt-4 max-w-3xl text-base leading-7 text-copy-muted">
        The project originated from a recurring operational problem in an MSSP environment: customer IOC requests often required repetitive manual preparation across Microsoft Defender, CrowdStrike, and QRadar.
      </p>
      <dl className="mt-8 grid gap-4 text-sm text-copy-muted sm:grid-cols-2 lg:max-w-4xl">
        <div>
          <dt className="font-semibold text-copy">Role</dt>
          <dd className="mt-1">Product design, frontend, backend, testing</dd>
        </div>
        <div>
          <dt className="font-semibold text-copy">Environment</dt>
          <dd className="mt-1">Security Operations</dd>
        </div>
        <div>
          <dt className="font-semibold text-copy">Status</dt>
          <dd className="mt-1">Production Ready</dd>
        </div>
        <div>
          <dt className="font-semibold text-copy">Year</dt>
          <dd className="mt-1">2026</dd>
        </div>
      </dl>
    </section>
  );
}