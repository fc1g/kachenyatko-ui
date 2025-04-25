import { MenuItem } from './type';

const loggedInUserActions: MenuItem[] = [
  { label: 'Logout', href: '/auth/logout' },
];
const guestUserActions: MenuItem[] = [
  { label: 'Sign in', href: '/auth/login' },
  { label: 'Sign up', href: '/auth/signup' },
];

export function generateUserActions(isLoggedIn: boolean) {
  return [
    {
      type: 'link',
      label: 'Basket',
      href: '/basket',
      icon: 'shopping-cart',
    },
    {
      type: 'menu',
      label: 'User menu',
      href: '/account',
      icon: 'user',
      menu: [
        { label: 'Orders history', href: '/account/orders' },
        { label: 'Opinions', href: '/account/opinions' },
        { label: 'My addresses', href: '/account/addresses' },
        { label: 'Change password', href: '/account/password' },
        ...(isLoggedIn ? loggedInUserActions : guestUserActions),
      ],
    },
  ];
}
