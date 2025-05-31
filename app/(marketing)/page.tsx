import { NewsletterCtaSection } from '@/components/common';
import {
  BestsellersSection,
  CustomOrderSection,
  HeroSection,
  NewestSection,
  ResourcesSection,
  Reveal,
} from './components/features';

export default function MarketingPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Best Sellers */}
      <Reveal>
        <BestsellersSection />
      </Reveal>

      {/* Resources */}
      <Reveal>
        <ResourcesSection />
      </Reveal>

      {/* Newest Products */}
      <Reveal>
        <NewestSection />
      </Reveal>

      {/* Custom Order */}
      <Reveal>
        <CustomOrderSection />
      </Reveal>

      {/* CTA */}
      <Reveal>
        <NewsletterCtaSection />
      </Reveal>
    </>
  );
}
