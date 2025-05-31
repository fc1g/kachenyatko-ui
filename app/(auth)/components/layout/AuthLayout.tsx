import { Children } from '@/types/Children';

export function AuthLayout({ children }: Children) {
  return (
    <div className="container mx-auto flex h-screen w-full items-center justify-center">
      {children}
    </div>
  );
}
