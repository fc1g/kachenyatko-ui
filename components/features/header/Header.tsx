import Navigation from '@/components/common/navigation/Navigation';
import Hamburger from '@/components/features/header/components/hamburger/Hamburger';
import Logo from '@/components/features/header/components/Logo';
import MobileNavigation from '@/components/features/header/components/MobileNavigation';
import UserActions from '@/components/features/header/components/userActions/UserActions';

export default function Header() {
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
        <Navigation className="items-center" />
      </div>

      {/* User actions. Shopping cart and account */}
      <UserActions />
    </header>
  );
}
