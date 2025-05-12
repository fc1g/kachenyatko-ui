import Heading from '@/components/common/Heading';
import BestsellersSupsense from './BestsellersSupsense';

export default function BestsellersSection() {
  return (
    <section aria-label="Bestsellers section">
      <div className="px-4 sm:px-6 lg:px-8 xl:container xl:mx-auto">
        <Heading as="h2" title="Bestsellers" className="text-center" />

        <BestsellersSupsense />
      </div>
    </section>
  );
}
