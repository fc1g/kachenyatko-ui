import Heading from '@/components/common/Heading';
import { T } from 'gt-next';
import { resources } from './data';

export default function Resources() {
  return (
    <section
      id="info"
      aria-label="Resources section"
      className="relative mt-[clamp(4rem,10vw,7rem)] bg-[rgba(252,218,47,0.5)]"
    >
      <div className="p-[clamp(1rem,2vw,3rem)] xl:container xl:mx-auto">
        <Heading as="h2" title="Resources" className="text-left" />

        <ul role="list" className="mt-4 flex flex-col gap-6">
          {resources.map(({ icon, text }) => (
            <li key={icon} role="listitem" className="flex items-center gap-4">
              <div>
                <svg className="size-10" role="img" aria-hidden={true}>
                  <use href={`/icons/sprite.svg#${icon}`} />
                </svg>
              </div>

              <T>
                <p className="text-base xl:text-lg">{text}</p>
              </T>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
