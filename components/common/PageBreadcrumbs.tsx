import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';

type PageBreadcrumbsProps = {
  pathname: string;
  basePath?: string;
  children?: React.ReactNode;
};

export default function PageBreadcrumbs({
  pathname,
  basePath = '',
  children,
}: PageBreadcrumbsProps) {
  const paths = pathname.split('/');

  return (
    <div className="mt-4 flex flex-col gap-[clamp(1.5rem,3vw,3rem)] px-[clamp(2rem,3vw,3rem)]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {paths.map((path, i) => (
            <div key={path} className="flex items-center gap-1.5">
              <BreadcrumbItem key={path}>
                {i !== paths.length - 1 ? (
                  <BreadcrumbLink asChild>
                    <Link
                      href={`${basePath === path ? '' : `/${basePath}`}/${path}`}
                      className="capitalize"
                    >
                      {path}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage tabIndex={-1} className="capitalize">
                    {path}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {i !== paths.length - 1 && <BreadcrumbSeparator />}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {children}
    </div>
  );
}
