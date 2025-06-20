import Hamburger from './hamburger/Hamburger';
import Logo from './Logo';
import MobileNavigation from './MobileNavigation';
import Navigation from './navigation/Navigation';
import UserActions from './userActions/UserActions';

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
        <Navigation />
      </div>

      {/* User actions. Shopping cart and account */}
      <UserActions />
    </header>
  );
}
