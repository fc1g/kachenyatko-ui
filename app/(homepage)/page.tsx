import { CtaSection, Reveal } from '@/components/common';
import {
  BestsellersSection,
  CustomOrderSection,
  HeroSection,
  NewestProductsSection,
  ResourcesSection,
} from './containers';

export default function Home() {
  return (
    <>
      <HeroSection />

      <Reveal>
        <BestsellersSection />
      </Reveal>

      <Reveal>
        <ResourcesSection />
      </Reveal>

      <Reveal>
        <NewestProductsSection />
      </Reveal>

      <Reveal>
        <CustomOrderSection />
      </Reveal>

      <Reveal>
        <CtaSection />
      </Reveal>
    </>
  );
}
