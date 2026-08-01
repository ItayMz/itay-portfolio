import { ArchitectureSection } from "@/sections/case-study/Architecture";
import { ChallengesSection } from "@/sections/case-study/Challenges";
import { DecisionsSection } from "@/sections/case-study/Decisions";
import { FeaturesSection } from "@/sections/case-study/Features";
import { FutureSection } from "@/sections/case-study/Future";
import { CaseStudyHero } from "@/sections/case-study/Hero";
import { ProblemSection } from "@/sections/case-study/Problem";
import { ResultsSection } from "@/sections/case-study/Results";
import { SolutionSection } from "@/sections/case-study/Solution";
import { TechStackSection } from "@/sections/case-study/TechStack";
import { WorkflowSection } from "@/sections/case-study/Workflow";

export function IocWorkbenchPage() {
  return (
    <main>
      <CaseStudyHero />
      <ProblemSection />
      <SolutionSection />
      <WorkflowSection />
      <ArchitectureSection />
      <FeaturesSection />
      <DecisionsSection />
      <ChallengesSection />
      <ResultsSection />
      <TechStackSection />
      <FutureSection />
    </main>
  );
}
