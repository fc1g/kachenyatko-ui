import Heading from '@/components/common/Heading';
import { Button } from '@/components/ui/button';
import { T } from 'gt-next';
import { contacts } from './data';

export default function Contacts() {
  return (
    <T>
      <section id="contacts" className="flex flex-col items-center gap-4">
        <Heading as="h3" title="Reach out to us" className="text-white" />

        <ul role="list" className="flex flex-col items-center">
          {contacts.map(({ type, label, value }) => (
            <li key={type} role="listitem">
              <Button
                variant="link"
                asChild
                className="rounded-[3px] text-white focus-visible:ring-0 md:text-base"
              >
                <a
                  href={`${type}:${value}`}
                  className="focus-visible:text-custom-primary transition-colors duration-300 focus:outline-none focus-visible:bg-white focus-visible:outline-none"
                >
                  {label ? label : value}
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </section>
    </T>
  );
}
