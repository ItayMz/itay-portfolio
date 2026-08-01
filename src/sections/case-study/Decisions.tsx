const decisions = [
  {
    title: "Separate queries by IOC category",
    reason: "Large mixed queries were more fragile and harder to review. Separate outputs made investigation workflows clearer and reduced formatting-related failures.",
  },
  {
    title: "Keep platform workflows distinct",
    reason: "Microsoft Defender, CrowdStrike, and QRadar support different IOC types, query formats, and export requirements. A single generic export would hide important operational differences.",
  },
  {
    title: "Normalize before deduplication",
    reason: "Different defanged representations of the same IOC should resolve to one normalized value rather than appear as separate indicators.",
  },
  {
    title: "Treat sender email addresses separately",
    reason: "Email investigation and blocking follow a different operational workflow and should not be mixed into endpoint hunting queries.",
  },
  {
    title: "Keep the analyst in control",
    reason: "The tool prepares and validates outputs, but it does not automatically perform blocking or containment actions.",
  },
];

export function DecisionsSection() {
  return (
    <section aria-labelledby="decisions-title" className="container-shell py-14 lg:py-18">
      <div className="border-t border-white/8 pt-10">
        <p className="text-sm font-bold text-brand-soft">06</p>
        <h2 id="decisions-title" className="mt-3 text-3xl font-black tracking-tight">
          Decisions shaped by operational use
        </h2>
        <div className="mt-6 max-w-4xl space-y-6">
          {decisions.map((decision, index) => (
            <article key={decision.title} className="border-t border-white/8 pt-5">
              <p className="text-sm font-bold text-brand-soft">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-copy">{decision.title}</h3>
              <p className="mt-2 text-base leading-7 text-copy-muted">{decision.reason}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}