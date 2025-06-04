import { socialMedia } from './data';

export default function SocialMedia() {
  return (
    <ul role="list" className="inline-flex items-center justify-center gap-8">
      {socialMedia.map(({ name, href }) => (
        <li key={href} role="listitem" className="group">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible:text-custom-primary inline-flex items-center justify-center rounded-[3px] p-1 transition-all duration-300 group-hover:scale-110 focus:outline-none focus-visible:bg-white focus-visible:outline-none"
          >
            <svg className="size-6">
              <use href={`/icons/sprite.svg#${name.toLowerCase()}`} />
            </svg>

            <span aria-hidden="true" className="sr-only">
              {name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
