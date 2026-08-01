import { socialLinks } from "@/data/socialLinks";

const platforms = ["Microsoft Defender", "Microsoft Sentinel", "CrowdStrike Falcon", "IBM QRadar", "Splunk", "Cortex XDR"];

export function ProfileSections() {
  return (
    <>
      <section id="experience" className="container-shell scroll-mt-28 py-24 lg:py-28">
        <p className="eyebrow">Experience</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div className="space-y-2"><h2 className="text-3xl font-black tracking-tight">SOC Analyst</h2><p className="text-copy-muted">MSSP environment · 2026—Present</p></div>
          <p className="max-w-3xl text-lg leading-8 text-copy-muted">Hands-on incident triage, investigation, containment, IOC hunting, and cross-platform correlation across customer security environments. I also identify operational friction and build practical automation around it.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">{platforms.map((platform) => <span key={platform} className="rounded-full border border-white/9 bg-white/[.035] px-3 py-1.5 text-xs text-copy-muted">{platform}</span>)}</div>
      </section>
      <section id="about" className="container-shell scroll-mt-28 py-28 lg:py-32">
        <div className="grid gap-10 border-t border-white/8 pt-20 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div><p className="eyebrow">About</p><h2 className="mt-4 text-3xl font-black tracking-tight">Analyst first.<br />Builder when needed.</h2></div>
          <p className="max-w-3xl text-lg leading-8 text-copy-muted">My development background helps me approach SOC problems differently. Instead of accepting repetitive work as part of the job, I map the workflow, identify failure points, and build a solution that fits how analysts actually operate.</p>
        </div>
      </section>
      <section id="contact" className="container-shell scroll-mt-28 py-24 lg:py-28">
        <div className="rounded-3xl border border-white/9 bg-gradient-to-br from-brand/14 to-surface p-10 md:p-14">
          <p className="eyebrow">Contact</p><h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.03em]">Interested in how I investigate, automate, and improve SOC workflows?</h2>
          <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-copy-muted"><a href={socialLinks.linkedin.href} target="_blank" rel="noopener noreferrer" aria-label={socialLinks.linkedin.ariaLabel} className="focus-ring rounded-full px-2 py-1 transition-colors hover:bg-white/[0.05] hover:text-white">LinkedIn ↗</a><a href={socialLinks.github.href} target="_blank" rel="noopener noreferrer" aria-label={socialLinks.github.ariaLabel} className="focus-ring rounded-full px-2 py-1 transition-colors hover:bg-white/[0.05] hover:text-white">GitHub ↗</a><a href={socialLinks.email.href} target="_blank" rel="noopener noreferrer" aria-label={socialLinks.email.ariaLabel} className="focus-ring rounded-full px-2 py-1 transition-colors hover:bg-white/[0.05] hover:text-white">Email ↗</a></div>
        </div>
      </section>
    </>
  );
}
