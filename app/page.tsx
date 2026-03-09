import {AboutSection} from "./components/home/AboutSection";
import {CapabilitiesSection} from "./components/home/CapabilitiesSection";
import {
  capabilities,
  heroMetrics,
  processSteps,
  projects,
  studioHighlights,
} from "./components/home/data";
import {HeroSection} from "./components/home/HeroSection";
import {ProcessStrip} from "./components/home/ProcessStrip";
import {ProjectsSection} from "./components/home/ProjectsSection";
import {SiteFooter} from "./components/home/SiteFooter";
import {SiteHeader} from "./components/home/SiteHeader";

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient-bg" aria-hidden="true" />

      <SiteHeader />
      <HeroSection highlights={studioHighlights} metrics={heroMetrics} />
      <CapabilitiesSection capabilities={capabilities} />
      <ProjectsSection projects={projects} />
      <ProcessStrip steps={processSteps} />
      <AboutSection />
      <SiteFooter />
    </main>
  );
}
