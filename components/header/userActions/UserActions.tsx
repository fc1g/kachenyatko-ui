'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/store/authStore';
import { useGT } from 'gt-next/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { generateUserActions } from './data';

// TODO: implement user actions

export default function UserActions() {
  const t = useGT();
  const pathname = usePathname();
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);
  const userActions = generateUserActions(isLoggedIn);

  return (
    <ul role="list" className="flex items-center justify-center gap-8">
      {userActions.map(action => (
        <li key={action.icon} role="listitem">
          {action.type === 'link' && action.href && (
            <Link
              role="link"
              href={action.href}
              className="group inline-flex items-center justify-center focus:outline-none"
            >
              <svg
                aria-label={t(action.label)}
                className={`${pathname.startsWith(action.href) ? 'text-custom-primary bg-white' : 'text-white'} group-focus-visible:text-custom-primary size-6 cursor-pointer rounded-[3px] transition-colors duration-300 group-focus-visible:bg-white`}
              >
                <use href={`/icons/sprite.svg#${action.icon}`} />
              </svg>
            </Link>
          )}

          {action.type === 'menu' && action?.menu?.length && (
            <DropdownMenu>
              <DropdownMenuTrigger className="group focus:outline-none">
                <svg
                  aria-label={t(action.label)}
                  className={`${pathname.startsWith(action.href) ? 'text-custom-primary bg-white' : 'text-white'} group-focus-visible:text-custom-primary size-6 cursor-pointer rounded-[3px] transition-colors duration-300 group-focus-visible:bg-white`}
                >
                  <use href={`/icons/sprite.svg#${action.icon}`} />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {action.menu.map(item => (
                  <div key={item.href}>
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link
                        role="link"
                        href={item.href}
                        className="focus-visible:bg-custom-secondary inline-flex w-full items-center gap-4 font-medium transition-colors duration-300"
                      >
                        <svg
                          className="text-custom-black size-6"
                          role="img"
                          aria-hidden={true}
                        >
                          <use href={`/icons/sprite.svg#${item.icon}`} />
                        </svg>

                        {t(item.label)}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <span aria-hidden="true" className="sr-only">
            {t(action.label)}
          </span>
        </li>
      ))}
    </ul>
  );
}
