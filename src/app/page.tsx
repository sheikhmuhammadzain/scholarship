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
      <main className="flex-grow">
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