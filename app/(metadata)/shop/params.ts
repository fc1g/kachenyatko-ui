import { getProductStaticParams } from '@/api/features';

export async function generateStaticParams() {
  const staticParams = await getProductStaticParams();

  return staticParams.map(param => ({
    ...param,
  }));
}
