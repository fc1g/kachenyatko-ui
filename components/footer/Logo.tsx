import logo from '@/public/logo.webp';
import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src={logo}
      alt="Kachenyatko Store Logo"
      className="hidden rounded-full md:block"
      width={100}
      height={100}
      priority
    />
  );
}
