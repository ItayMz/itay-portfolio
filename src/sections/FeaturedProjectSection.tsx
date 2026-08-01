import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projectLinks } from "@/data/projectLinks";

const capabilities = ["Multi-format IOC parsing", "Defender KQL generation", "CrowdStrike & QRadar exports", "Validation and normalization"];
const metadata = ["Production Ready", "React + TypeScript", "FastAPI + Python"];
const facts = [
  { value: "3", label: "Security Platforms" },
  { value: "7", label: "IOC Types" },
  { value: "Tested", label: "Workflow" },
] as const;

export function FeaturedProjectSection() {
  return (
    <section id="projects" className="container-shell scroll-mt-28 py-24 lg:py-28">
      <p className="eyebrow">Featured project</p>
      <div className="mt-5 rounded-3xl border border-white/9 bg-surface/65 p-6 md:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start lg:gap-12">
          <div className="flex h-full flex-col lg:pt-1">
            <p className="text-sm font-medium text-brand-soft">Internal SOC Automation Platform</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.035em] sm:text-5xl">IOC Workbench</h2>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-7 text-copy-muted">A production-ready tool created from a real SOC workflow: parse raw indicators, normalize and validate them, generate investigation queries, and prepare platform-specific exports.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {metadata.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-1.5 text-xs font-semibold tracking-[0.01em] text-copy-muted"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <div className="flex flex-wrap gap-3">
                <Link
                  to={projectLinks.iocWorkbench.caseStudy}
                  className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/14 bg-white/[0.045] px-5 py-3 text-sm font-semibold text-copy transition duration-200 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  <span>Read the case study</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
                <a
                  href={projectLinks.iocWorkbench.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open IOC Workbench live application in a new tab"
                  className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/12 bg-transparent px-5 py-3 text-sm font-semibold text-copy-muted transition duration-200 hover:border-white/18 hover:bg-white/[0.03] hover:text-copy"
                >
                  <span>Open IOC Workbench</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-7">
            <div>
              <p className="text-sm font-semibold text-copy">Capabilities</p>
              <ul className="mt-4 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-4 text-sm text-copy-muted transition-colors hover:text-copy">
                    <span className="mt-2 inline-flex size-2 shrink-0 rounded-full bg-brand-soft/80" aria-hidden="true" />
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-copy">Project facts</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/[0.06]">
                {facts.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/[0.025] px-4 py-3 sm:rounded-none sm:bg-transparent sm:px-4 first:sm:pl-0 last:sm:pr-0">
                    <p className="text-sm font-semibold text-copy">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-copy-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
