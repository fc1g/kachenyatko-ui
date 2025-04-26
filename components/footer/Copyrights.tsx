import { T, Var } from 'gt-next';

export default function Copyrights() {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <T>
        <p className="text-center text-sm">
          &copy; <Var>{new Date().getFullYear()} Kachenyatko Store.</Var> All
          rights reserved.
        </p>
      </T>
    </div>
  );
}
