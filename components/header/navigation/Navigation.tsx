'use client';

import { useGT } from 'gt-next/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavStore } from '../store/NavStore';
import { navigationLinks } from './data';

type NavigationProps = {
  flexDirection?: 'row' | 'column';
};

export default function Navigation({ flexDirection = 'row' }: NavigationProps) {
  const closeMenu = useNavStore(state => state.closeMenu);
  const pathname = usePathname();
  const t = useGT();

  return (
    <nav id="navigation" role="navigation">
      <ul
        role="list"
        className={`${flexDirection === 'row' ? 'inline-flex' : 'flex flex-col'} items-center gap-6 lg:gap-8 xl:gap-12`}
      >
        {navigationLinks.map(({ href, label }) => {
          const isActive = pathname.startsWith(href) && href !== '/';

          return (
            <li key={href} role="listitem">
              <Link
                role="link"
                href={href}
                tabIndex={flexDirection === 'column' && isActive ? -1 : 0}
                onClick={closeMenu}
                className={`${isActive ? 'text-custom-primary bg-white font-semibold' : 'text-white'} focus-visible:text-primary rounded-[3px] p-1 transition-colors duration-300 focus:outline-none focus-visible:bg-white`}
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
