import Bestsellers from './containers/bestsellers/Bestsellers';
import HeroSection from './containers/hero/HeroSection';
import Resources from './containers/resources/Resources';

export default function Home() {
  return (
    <>
      <HeroSection />

      <Bestsellers />

      <Resources />
    </>
  );
}
