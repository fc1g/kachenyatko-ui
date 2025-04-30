'use client';

import { useGT } from 'gt-next/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { useNavStore } from '../store/NavStore';
import { navigationLinks } from './data';

type NavigationProps = {
  className?: string;
  flexDirection?: 'row' | 'column';
  isFooter?: boolean;
};

export default function Navigation({
  flexDirection = 'row',
  className = '',
  isFooter = false,
}: NavigationProps) {
  const closeMenu = useNavStore(state => state.closeMenu);
  const pathname = usePathname();
  const t = useGT();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const isAnchor = href.includes('#');

      if (isAnchor) {
        e.preventDefault();
        closeMenu();

        const element = document.getElementById(`${href.split('#')[1]}`);

        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        closeMenu();
      }
    },
    [closeMenu],
  );

  return (
    <nav id="navigation" role="navigation">
      <ul
        role="list"
        className={`${flexDirection === 'row' ? 'inline-flex gap-6 lg:gap-8 xl:gap-12' : 'flex flex-col gap-4 md:gap-6'} ${className}`}
      >
        {navigationLinks.map(({ href, label }) => {
          if (isFooter && href.includes('contacts')) return null;
          const isActive = pathname.startsWith(href) && href !== '/';

          return (
            <li key={href} role="listitem">
              <Link
                role="link"
                href={href}
                tabIndex={flexDirection === 'column' && isActive ? -1 : 0}
                onClick={e => handleClick(e, href)}
                className={`${isActive ? 'text-custom-primary bg-white font-semibold' : 'text-white'} focus-visible:text-custom-primary rounded-[3px] p-1 transition-colors duration-300 focus:outline-none focus-visible:bg-white`}
              >
                {t(label)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
