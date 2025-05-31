'use client';

import { useNavigationStore } from '@/components/common/navigation';
import { useGT } from 'gt-next/client';
import { useEffect } from 'react';
import './Hamburger.css';

export default function Hamburger() {
  const t = useGT();
  const isOpen = useNavigationStore(state => state.isOpen);
  const setIsOpen = useNavigationStore(state => state.setIsOpen);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('keydown', handleEscapeKey);

    return () => document.body.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, setIsOpen]);

  return (
    <button
      aria-label={isOpen ? t('Close menu') : t('Open menu')}
      aria-expanded={isOpen}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={`${isOpen ? 'open' : ''} hamburger group focus:outline-none focus-visible:outline-none md:hidden`}
    >
      <span className="hamburger-top group-focus-visible:bg-custom-yellow bg-white"></span>
      <span className="hamburger-middle group-focus-visible:bg-custom-yellow bg-white"></span>
      <span className="hamburger-bottom group-focus-visible:bg-custom-yellow bg-white"></span>

      <span aria-hidden="true" className="sr-only">
        {t('Mobile menu')}
      </span>
    </button>
  );
}
