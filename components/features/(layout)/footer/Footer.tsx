import { BaseNavigation } from '@/components/common';
import Contacts from './components/contacts/Contacts';
import Copyrights from './components/Copyrights';
import Logo from './components/Logo';
import SocialMedia from './components/socialMedia/SocialMedia';

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-custom-primary grid grid-cols-1 justify-items-center gap-8 px-2 py-4 text-white md:grid-cols-2 md:p-6 lg:grid-cols-3"
    >
      <div className="inline-flex items-start gap-16">
        {/* Footer logo */}
        <Logo />

        {/* Footer navigation */}
        <BaseNavigation
          className="items-center md:items-start"
          flexDirection="column"
          isFooter={true}
        />
      </div>

      {/* Contacts and social media */}
      <section className="flex flex-col items-center gap-4">
        <Contacts />

        <SocialMedia />
      </section>

      {/* Copyrights */}
      <Copyrights />
    </footer>
  );
}
