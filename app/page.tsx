import {AboutSection} from "../components/AboutSection";

import {capabilities, heroMetrics, projects} from "../lib/data";
import {HeroSection} from "../components/landing/HeroSection";

import {ProjectsSection} from "../components/ProjectsSection";
import {SiteFooter} from "../components/landing/SiteFooter";
import {SiteHeader} from "@/components/landing/SiteHeader";
import {CapabilitiesSection} from "@/components/CapabilitiesSection";
import Stats from "@/components/landing/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <Stats metrics={heroMetrics} />
      <CapabilitiesSection capabilities={capabilities} />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <SiteFooter />
    </main>
  );
}
