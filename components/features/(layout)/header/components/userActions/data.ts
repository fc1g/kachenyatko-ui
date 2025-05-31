// const loggedInUserActions: MenuItem[] = [
//   { label: 'Logout', href: '/auth/logout', icon: 'log-out' },
// ];
// const guestUserActions: MenuItem[] = [
//   { label: 'Login', href: '/auth/login', icon: 'log-in' },
//   { label: 'Sign up', href: '/auth/signup', icon: 'sign-up' },
// ];

export function generateUserActions() {
  return [
    {
      type: 'link',
      label: 'Basket',
      href: '/basket',
      icon: 'shopping-cart',
    },
    {
      type: 'link',
      label: 'Profile',
      href: '/profile',
      icon: 'user',
    },
    // {
    //   type: 'menu',
    //   label: 'User menu',
    //   href: '/account',
    //   icon: 'user',
    //   menu: [
    //     {
    //       label: 'Orders history',
    //       href: '/account/orders',
    //       icon: 'orders',
    //     },
    //     { label: 'Opinions', href: '/account/opinions', icon: 'opinion' },
    //     { label: 'My addresses', href: '/account/addresses', icon: 'map-pin' },
    //     { label: 'Change password', href: '/account/password', icon: 'key' },
    //     ...(isLoggedIn ? loggedInUserActions : guestUserActions),
    //   ],
    // },
  ];
}
