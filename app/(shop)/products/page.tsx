'use client';

import { redirect, RedirectType, usePathname } from 'next/navigation';

export default function ProductsPage() {
  const pathname = usePathname();
  if (pathname.startsWith('/products')) {
    return redirect('/categories', RedirectType.replace);
  }

  return <div>Products Page</div>;
}
