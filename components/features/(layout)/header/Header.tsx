import { BaseNavigation, MobileNavigation } from '@/components/common';
import Hamburger from './components/hamburger/Hamburger';
import Logo from './components/Logo';
import UserActions from './components/userActions/UserActions';

export function Header() {
  return (
    <header
      role="banner"
      className="bg-custom-primary relative flex items-center justify-between px-4 py-4 text-white lg:px-6"
    >
      <div className="inline-flex items-center gap-4">
        {/* Hamburger menu */}
        <Hamburger />

        {/* Logo */}
        <Logo />
      </div>

      {/* Mobile navigation */}
      <MobileNavigation />

      {/* Desktop navigation */}
      <div className="hidden md:block">
        <BaseNavigation className="items-center" />
      </div>

      {/* User actions. Shopping cart and account */}
      <UserActions />
    </header>
  );
}
