export function ProblemSection() {
  return (
    <section aria-labelledby="problem-title" className="container-shell py-14 lg:py-18">
      <div className="border-t border-white/8 pt-10">
        <p className="text-sm font-bold text-brand-soft">01</p>
        <h2 id="problem-title" className="mt-3 text-3xl font-black tracking-tight">
          A repetitive workflow with too many failure points
        </h2>
        <div className="mt-5 space-y-5 max-w-4xl text-lg leading-8 text-copy-muted">
          <p>IOC requests frequently arrived as unstructured email text, CSV files, XLSX files, or mixed data containing indicators and unrelated metadata.</p>
          <p>Before an analyst could begin hunting or blocking, the input had to be manually reviewed, refanged, classified, deduplicated, validated, and reformatted for several security platforms.</p>
          <p>The process was repetitive and easy to get wrong. Small formatting issues, unsupported indicator types, malformed files, duplicate values, or incorrect export fields could delay the investigation or produce unusable output.</p>
        </div>
        <ul className="mt-6 max-w-3xl space-y-2 text-base leading-7 text-copy-muted">
          <li>Indicators arrived in inconsistent formats</li>
          <li>Manual refanging and classification</li>
          <li>Duplicate and invalid values</li>
          <li>Different requirements for each security platform</li>
          <li>Repetitive query and export preparation</li>
          <li>Increased risk of analyst error</li>
        </ul>
      </div>
    </section>
  );
}