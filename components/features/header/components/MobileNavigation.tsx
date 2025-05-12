'use client';

import Navigation from '@/components/common/navigation/Navigation';
import { useNavStore } from '@/store/NavStore';

export default function MobileNavigation() {
  const isOpen = useNavStore(state => state.isOpen);

  return (
    <div
      className={`absolute inset-x-0 top-full z-10 transform p-4 font-medium transition-all duration-300 md:hidden ${
        isOpen
          ? 'bg-custom-primary border-custom-white translate-y-0 border-t opacity-100'
          : 'pointer-events-none -translate-y-full opacity-0'
      }`}
    >
      <Navigation className="items-center" flexDirection="column" />
    </div>
  );
}
