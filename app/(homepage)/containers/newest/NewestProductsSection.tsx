import Heading from '@/components/common/Heading';
import NewestProductsSuspense from './NewestProductsSuspense';

export default function NewestProductsSection() {
  return (
    <section aria-label="Newest products section">
      <div className="mt-16 px-4 sm:px-6 lg:px-8 xl:container xl:mx-auto">
        <Heading as="h2" title="New products" className="text-center" />

        <NewestProductsSuspense />
      </div>
    </section>
  );
}
