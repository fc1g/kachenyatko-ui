import LocaleSelector from '@/components/LocaleSelector';
import Reveal from '@/components/Reveal';
import BestsellersSection from './containers/bestsellers/BestsellersSection';
import HeroSection from './containers/hero/HeroSection';
import NewestProductsSection from './containers/newest/NewestProductsSection';
import ResourcesSection from './containers/resources/ResourcesSection';

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

      <LocaleSelector />
    </>
  );
}
