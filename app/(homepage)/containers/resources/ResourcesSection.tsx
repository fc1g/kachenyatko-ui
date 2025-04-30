import { T } from 'gt-next';
import SectionHeading from '../../components/SectionHeading';
import { resources } from './data';

export default function Resources() {
  return (
    <section
      id="info"
      aria-label="Resources section"
      className="relative mt-[clamp(4rem,10vw,7rem)] bg-[rgba(252,218,47,0.5)]"
    >
      <div className="px-4 py-4 sm:px-6 lg:px-8 xl:container xl:mx-auto">
        <SectionHeading title="Resources" align="left" />

        <ul role="list" className="mt-4 flex flex-col gap-6">
          {resources.map(({ icon, text }) => (
            <li key={icon} role="listitem" className="flex items-center gap-4">
              <div>
                <svg className="h-10 w-10" role="img" aria-hidden={true}>
                  <use href={`/icons/sprite.svg#${icon}`} />
                </svg>
              </div>

              <T>
                <p className="text-custom-black">{text}</p>
              </T>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
