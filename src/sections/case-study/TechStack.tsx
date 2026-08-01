const techStack = {
  securityPlatforms: ["Microsoft Defender", "CrowdStrike Falcon", "IBM QRadar"],
  frontend: ["React", "TypeScript", "Vite"],
  backend: ["Python", "FastAPI"],
  quality: ["ESLint", "TypeScript strict mode"],
} as const;

export function TechStackSection() {
  return (
    <section aria-labelledby="tech-stack-title" className="container-shell py-14 lg:py-18">
      <div className="border-t border-white/8 pt-10">
        <p className="text-sm font-bold text-brand-soft">09</p>
        <h2 id="tech-stack-title" className="mt-3 text-3xl font-black tracking-tight">
          Technology selected for maintainability and speed
        </h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <section aria-labelledby="security-platforms-heading">
            <h3 id="security-platforms-heading" className="text-sm font-bold uppercase tracking-[0.14em] text-copy">
              Security platforms
            </h3>
            <ul className="mt-4 space-y-2 text-base leading-7 text-copy-muted">
              {techStack.securityPlatforms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="frontend-stack-heading">
            <h3 id="frontend-stack-heading" className="text-sm font-bold uppercase tracking-[0.14em] text-copy">
              Frontend
            </h3>
            <ul className="mt-4 space-y-2 text-base leading-7 text-copy-muted">
              {techStack.frontend.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="backend-stack-heading">
            <h3 id="backend-stack-heading" className="text-sm font-bold uppercase tracking-[0.14em] text-copy">
              Backend
            </h3>
            <ul className="mt-4 space-y-2 text-base leading-7 text-copy-muted">
              {techStack.backend.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="quality-stack-heading">
            <h3 id="quality-stack-heading" className="text-sm font-bold uppercase tracking-[0.14em] text-copy">
              Testing and quality
            </h3>
            <ul className="mt-4 space-y-2 text-base leading-7 text-copy-muted">
              {techStack.quality.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}