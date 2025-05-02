import { withGTConfig } from 'gt-next/config';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  // TODO: add my backend domain
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withGTConfig(nextConfig, {
  locales: ['uk', 'en'],
});
