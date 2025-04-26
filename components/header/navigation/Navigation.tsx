'use client';

import { useGT } from 'gt-next/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavStore } from '../store/NavStore';
import { navigationLinks } from './data';

type NavigationProps = {
  itemsPosition?: 'center' | 'start';
  flexDirection?: 'row' | 'column';
  isFooter?: boolean;
};

export default function Navigation({
  flexDirection = 'row',
  itemsPosition = 'center',
  isFooter = false,
}: NavigationProps) {
  const closeMenu = useNavStore(state => state.closeMenu);
  const pathname = usePathname();
  const t = useGT();

  return (
    <nav id="navigation" role="navigation">
      <ul
        role="list"
        className={`${flexDirection === 'row' ? 'inline-flex gap-6 lg:gap-8 xl:gap-12' : 'flex flex-col gap-4 md:gap-6'} ${itemsPosition === 'center' ? 'items-center' : 'items-start'}`}
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
                onClick={closeMenu}
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
