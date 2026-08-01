import { useEffect } from "react";
import { Download } from "lucide-react";

const securityPlatforms = [
  "Microsoft Defender XDR",
  "Microsoft Sentinel",
  "Microsoft 365 Defender",
  "IBM QRadar",
  "Splunk",
  "Coralogix",
  "SentinelOne",
  "Trend Vision One",
  "Cortex XDR",
  "Cortex XSOAR",
  "CrowdStrike Falcon",
];

const developmentSkills = ["Python", "FastAPI", "React", "TypeScript", "JavaScript", "Java", "MySQL"];

export function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container-shell py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Resume</p>
          <h1 className="mt-3 text-5xl font-black tracking-tight">Itay M.</h1>
          <p className="mt-3 text-copy-muted">SOC Analyst · Security Automation</p>
        </div>

        <a href="/Itay_Mazor_Resume.pdf" download="Itay_Mazor_Resume.pdf" className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/12 px-4 py-3 text-sm font-semibold">
          <Download size={16} />
          Download PDF
        </a>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <aside className="space-y-8 text-sm text-copy-muted">
          <section aria-labelledby="summary-heading">
            <h2 id="summary-heading" className="font-bold text-copy">
              Professional Summary
            </h2>
            <p className="mt-3 leading-7">
              SOC Analyst with hands-on experience monitoring, investigating, and responding to security incidents across enterprise MSSP environments. Experienced in Threat Hunting, incident triage, containment, and working with SIEM, EDR, XDR, and Microsoft Security technologies.
            </p>
            <p className="mt-4 leading-7">
              Passionate about improving Security Operations through practical automation and building internal tools that eliminate repetitive analyst workflows.
            </p>
          </section>

          <section aria-labelledby="platforms-heading">
            <h2 id="platforms-heading" className="font-bold text-copy">
              Security Platforms
            </h2>
            <ul className="mt-3 space-y-1.5 leading-6">
              {securityPlatforms.map((platform) => (
                <li key={platform}>{platform}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="development-heading">
            <h2 id="development-heading" className="font-bold text-copy">
              Development
            </h2>
            <ul className="mt-3 space-y-1.5 leading-6">
              {developmentSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="languages-heading">
            <h2 id="languages-heading" className="font-bold text-copy">
              Languages
            </h2>
            <p className="mt-3 leading-6">Hebrew — Native</p>
            <p className="mt-1 leading-6">English — Professional Working Proficiency</p>
          </section>
        </aside>

        <div className="space-y-12">
          <section aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="text-xl font-black">Experience</h2>
            <div className="mt-5 border-l border-white/12 pl-6">
              <p className="font-bold">SOC Analyst</p>
              <p className="mt-1 text-sm text-copy-muted">Trustnet</p>
              <p className="mt-1 text-sm text-copy-muted">2026 – Present</p>
              <div className="mt-4 space-y-3 leading-7 text-copy-muted">
                <p>Monitor, investigate, and respond to security incidents across multiple enterprise customers within an MSSP environment.</p>
                <p>Perform alert triage using correlation rules, anomaly detection, and multiple security telemetry sources.</p>
                <p>Execute containment actions including blocking malicious IP addresses, domains, and URLs, and isolating compromised endpoints according to organizational procedures.</p>
                <p>Conduct proactive threat hunting to identify Indicators of Compromise (IOCs) and suspicious activity.</p>
                <p>Work daily with SIEM, EDR, XDR, Firewall, and Email Security platforms.</p>
                <p>Document investigations, manage incident tickets, and escalate security events according to severity and organizational procedures.</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="education-heading">
            <h2 id="education-heading" className="text-xl font-black">Education</h2>

            <div className="mt-5 space-y-8">
              <article>
                <h3 className="font-bold text-copy">Cyber Security Practitioner</h3>
                <p className="mt-1 text-sm text-copy-muted">ITQ College</p>
                <p className="mt-1 text-sm text-copy-muted">2025 – 2026</p>
                <p className="mt-4 leading-7 text-copy-muted">650-hour practical training including:</p>
                <ul className="mt-3 space-y-2 leading-7 text-copy-muted">
                  <li>Enterprise networking and infrastructure (Cisco)</li>
                  <li>Windows Server administration</li>
                  <li>Linux fundamentals</li>
                  <li>FortiGate NGFW deployment and administration</li>
                  <li>IBM QRadar SIEM</li>
                  <li>Security monitoring and incident analysis</li>
                </ul>
              </article>

              <article>
                <h3 className="font-bold text-copy">Full Stack Development</h3>
                <p className="mt-1 text-sm text-copy-muted">John Bryce College</p>
                <p className="mt-1 text-sm text-copy-muted">2021 – 2022</p>
                <p className="mt-4 leading-7 text-copy-muted">Topics included:</p>
                <ul className="mt-3 space-y-2 leading-7 text-copy-muted">
                  <li>Software Engineering</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>MySQL</li>
                  <li>Application Architecture</li>
                </ul>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}