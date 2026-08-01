export function ChallengesSection() {
  return (
    <section aria-labelledby="challenges-title" className="container-shell py-14 lg:py-18">
      <div className="border-t border-white/8 pt-10">
        <p className="text-sm font-bold text-brand-soft">07</p>
        <h2 id="challenges-title" className="mt-3 text-3xl font-black tracking-tight">
          The difficult parts were in the edge cases
        </h2>
        <div className="mt-6 max-w-4xl space-y-6 text-base leading-7 text-copy-muted">
          <article>
            <h3 className="font-semibold text-copy">Resilient file parsing</h3>
            <p className="mt-2">CSV files could contain headers, no headers, metadata columns, several indicators in one cell, or indicators outside the first column.</p>
          </article>
          <article>
            <h3 className="font-semibold text-copy">Accurate classification</h3>
            <p className="mt-2">URLs, domains, IP addresses, hashes, and email addresses required careful ordering and validation to avoid false classification.</p>
          </article>
          <article>
            <h3 className="font-semibold text-copy">Export compatibility</h3>
            <p className="mt-2">Each platform expected a different schema, supported different indicator types, and applied different action rules.</p>
          </article>
          <article>
            <h3 className="font-semibold text-copy">Character encoding</h3>
            <p className="mt-2">CrowdStrike CSV exports required UTF-8 BOM support so Hebrew descriptions displayed correctly.</p>
          </article>
          <article>
            <h3 className="font-semibold text-copy">Cross-browser performance</h3>
            <p className="mt-2">Dropdown and scroll behavior differed between Firefox, Chrome, and Edge and required focused performance and rendering improvements.</p>
          </article>
          <article>
            <h3 className="font-semibold text-copy">Regression protection</h3>
            <p className="mt-2">Changes to parsing or export logic could silently break operational behavior, so focused backend and frontend tests were added throughout development.</p>
          </article>
        </div>
      </div>
    </section>
  );
}