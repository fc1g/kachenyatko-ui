import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui';
import { T } from 'gt-next';
import Link from 'next/link';

type PageBreadcrumbsProps = {
  pathname: string;
  basePath?: string;
};

export default function PageBreadcrumbs({
  pathname,
  basePath = '',
}: PageBreadcrumbsProps) {
  const paths = pathname.split('/');

  return (
    <T>
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
    </T>
  );
}
