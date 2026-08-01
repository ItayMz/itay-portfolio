const features = [
  {
    title: "Smart IOC parsing",
    description: "Extracts indicators from free text, structured CSV files, headerless files, mixed cells, and XLSX uploads.",
  },
  {
    title: "Normalization and refanging",
    description: "Converts common defanged formats into usable values and standardizes domains, hashes, IP addresses, and URLs.",
  },
  {
    title: "Detection summary",
    description: "Shows valid, invalid, unique, and type-based indicator counts before the analyst proceeds.",
  },
  {
    title: "Microsoft Defender workflow",
    description: "Generates separate Advanced Hunting queries by relevant IOC category and produces Defender-compatible CSV exports.",
  },
  {
    title: "CrowdStrike workflow",
    description: "Generates an Advanced Event Search query and creates blocking exports for supported indicator types.",
  },
  {
    title: "QRadar workflow",
    description: "Creates a dedicated IPv4-only CSV for the relevant blocking process.",
  },
  {
    title: "Accumulated processing",
    description: "Allows indicators from multiple uploads and text inputs to be combined while preserving normalized deduplication.",
  },
  {
    title: "Analyst-focused copy controls",
    description: "Provides grouped, selectable, and platform-specific outputs without forcing the analyst to manually rebuild the data.",
  },
];

export function FeaturesSection() {
  return (
    <section aria-labelledby="features-title" className="container-shell py-14 lg:py-18">
      <div className="border-t border-white/8 pt-10">
        <p className="text-sm font-bold text-brand-soft">05</p>
        <h2 id="features-title" className="mt-3 text-3xl font-black tracking-tight">
          Built around real analyst workflows
        </h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="border-t border-white/8 pt-5">
              <h3 className="text-lg font-semibold text-copy">{feature.title}</h3>
              <p className="mt-2 text-base leading-7 text-copy-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}