import { FeaturedProjectSection } from "@/sections/FeaturedProjectSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProfileSections } from "@/sections/ProfileSections";

export function HomePage() {
  return <main><HeroSection /><FeaturedProjectSection /><ProfileSections /></main>;
}
