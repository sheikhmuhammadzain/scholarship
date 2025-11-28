
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { StatsDashboard, FeatureDeepDive, ComparisonTable, ImpactMetrics, FAQ, TrustSection, CTASection } from '@/components/sections/NewSections';
import { AIFeatures } from '@/components/sections/AIFeatures';
import { Workflow } from '@/components/sections/Workflow';
import { Destinations, ExpertGuidance, TrustedBy, Newsletter } from '@/components/sections/ContentSections';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* 
        Main content wrapper:
        - relative z-10: Sits ON TOP of the fixed footer (z-0).
        - bg-[var(--background)]: Opaque background to hide footer until scrolled.
        - shadow-2xl: Adds depth between the "floor" (footer) and the "curtain" (main content).
      */}
      <main className="relative z-10 bg-[var(--background)] shadow-2xl rounded-b-[3rem]"> 
        <Hero />
        <StatsDashboard />
        <AIFeatures />
        <Workflow />
        <FeatureDeepDive />
        <ComparisonTable />
        <ImpactMetrics />
        <TrustedBy />
        <TrustSection />
        <Destinations />
        <FAQ />
        <ExpertGuidance />
        <CTASection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
