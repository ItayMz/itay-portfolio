const workflowSteps = [
  {
    title: "Input",
    description: "Free text, CSV, or XLSX",
  },
  {
    title: "Parse",
    description: "Extract potential indicators from structured and unstructured data",
  },
  {
    title: "Normalize",
    description: "Refang values and standardize supported IOC formats",
  },
  {
    title: "Classify",
    description: "Identify URLs, domains, IPv4 addresses, hashes, and sender email addresses",
  },
  {
    title: "Validate",
    description: "Remove invalid and duplicate values",
  },
  {
    title: "Generate",
    description: "Create investigation queries and platform-specific exports",
  },
  {
    title: "Review",
    description: "The analyst reviews the results before copying or exporting them",
  },
];

export function WorkflowSection() {
  return (
    <section aria-labelledby="workflow-title" className="container-shell py-14 lg:py-18">
      <div className="border-t border-white/8 pt-10">
        <p className="text-sm font-bold text-brand-soft">03</p>
        <h2 id="workflow-title" className="mt-3 text-3xl font-black tracking-tight">
          From customer input to platform-ready output
        </h2>
        <ol className="mt-6 max-w-4xl space-y-4">
          {workflowSteps.map((step, index) => (
            <li key={step.title} className="grid gap-2 sm:grid-cols-[120px_1fr] sm:gap-6">
              <div>
                <p className="text-sm font-bold text-brand-soft">0{index + 1}</p>
                <p className="mt-1 text-lg font-semibold text-copy">{step.title}</p>
              </div>
              <p className="text-base leading-7 text-copy-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}