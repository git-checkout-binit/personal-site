import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { RunningSection } from '@/components/running-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <RunningSection />
      </main>
      <Footer />
    </div>
  );
}
