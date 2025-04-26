import LocaleSelector from '@/components/LocaleSelector';
import { T, Var } from 'gt-next';
export default function Home() {
  return (
    <T>
      <p className="text-4xl font-bold">
        This gets translated. <Var>This does not.</Var>
      </p>

      <LocaleSelector />
    </T>
  );
}
