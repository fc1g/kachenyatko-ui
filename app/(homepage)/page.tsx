import Reveal from '@/components/Reveal';
import BestsellersSection from './containers/bestsellers/BestsellersSection';
import CustomOrderSection from './containers/custom/CustomOrderSection';
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

      <Reveal>
        <CustomOrderSection />
      </Reveal>
    </>
  );
}
