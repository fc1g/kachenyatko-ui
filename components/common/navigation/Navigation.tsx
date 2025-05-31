'use client';

import { useGT } from 'gt-next/client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { navigationLinks } from './data';
import { useNavigationStore } from './useNavigationStore';

type NavigationProps = {
  className?: string;
  flexDirection?: 'row' | 'column';
  isFooter?: boolean;
};

export function BaseNavigation({
  flexDirection = 'row',
  className = '',
  isFooter = false,
}: NavigationProps) {
  const router = useRouter();
  const closeMenu = useNavigationStore(state => state.closeMenu);
  const pathname = usePathname();
  const t = useGT();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const isAnchor = href.includes('#');
      const anchorId = href.split('#')[1];

      if (isAnchor) {
        e.preventDefault();
        closeMenu();

        if (pathname !== '/' && !href.includes('contacts')) {
          router.push(`/#${anchorId}`, { scroll: true });
        }

        const element = document.getElementById(anchorId);

        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        closeMenu();
      }
    },
    [closeMenu, pathname, router],
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
                className={`${isActive ? 'text-custom-primary bg-white' : 'text-white'} focus-visible:text-custom-primary rounded-[3px] p-1 transition-colors duration-300 focus:outline-none focus-visible:bg-white`}
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

export function MobileNavigation() {
  const isOpen = useNavigationStore(state => state.isOpen);

  return (
    <div
      className={`absolute inset-x-0 top-full z-10 transform p-4 font-medium transition-all duration-300 md:hidden ${
        isOpen
          ? 'bg-custom-primary border-custom-white translate-y-0 border-t opacity-100'
          : 'pointer-events-none -translate-y-full opacity-0'
      }`}
    >
      <BaseNavigation className="items-center" flexDirection="column" />
    </div>
  );
}
