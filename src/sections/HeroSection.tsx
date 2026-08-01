import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProductMockup } from "@/sections/ProductMockup";

export function HeroSection() {
  return (
    <section className="hero-shell container-shell grid min-h-[calc(100vh-92px)] items-center gap-12 py-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14 lg:py-20 xl:gap-18 2xl:gap-22">
      <div className="relative z-10 max-w-[600px]">
        <p className="eyebrow mb-8">SOC Analyst · Security Automation</p>

        <h1 className="hero-title text-[clamp(3.65rem,5.25vw,6.1rem)] font-black leading-[0.97] tracking-[-0.055em]">
          Building practical automation for modern{" "}
          <span className="hero-gradient-text">Security Operations.</span>
        </h1>

        <p className="mt-8 max-w-[540px] text-[1.05rem] leading-8 text-copy-muted sm:text-lg">
          I investigate security incidents in an MSSP environment and build tools
          that turn repetitive analyst workflows into fast, reliable processes.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink to="/#projects">
            <span>View Projects</span>
            <ArrowRight size={17} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/resume" variant="secondary">
            View Resume
          </ButtonLink>
        </div>
      </div>

      <div className="relative min-w-0 w-full max-w-[930px] justify-self-end lg:pr-4 xl:pr-6 2xl:pr-8">
        <div className="mockup-glow" aria-hidden="true" />
        <ProductMockup />
      </div>
    </section>
  );
}
