'use client';

import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProductType } from '@/types/ProductType';
import { arabicLabels } from '@/lib/arabicLabels';

export default function BreadcrumbsDynamic() {
  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean);

  const [products, setProducts] = useState<ProductType[]>([]);

  // -------------------------------------------------------------------
  // Fetch products from API
  // -------------------------------------------------------------------
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_GET_ALL_PRODUCTS!);

        const json = await res.json();
        setProducts(json.products || []);
      } catch (err) {
        console.error('Error fetching products for breadcrumbs:', err);
      }
    };

    getProducts();
  }, []);

  // -------------------------------------------------------------------
  // Static Arabic labels
  // -------------------------------------------------------------------

  // -------------------------------------------------------------------
  // Detect dynamic product
  // -------------------------------------------------------------------
  const product = products.find((p) => pathname.includes(p.slug ?? ''));

  const arabicProductLabels: Record<string, string> = {};

  if (product?.slug && product?.name) {
    arabicProductLabels[product.slug] = product.name;
  }

  // merge labels
  const labels = {
    ...arabicLabels,
    ...arabicProductLabels,
  };

  // -------------------------------------------------------------------
  // Build breadcrumbs list
  // -------------------------------------------------------------------
  const crumbs = [
    { label: 'الرئيسية', href: '/' },
    ...parts.map((part, idx) => {
      const href = '/' + parts.slice(0, idx + 1).join('/');
      const label = labels[part] ?? part;
      return { label, href };
    }),
  ];

  return (
    <Breadcrumbs dir="rtl" separator="›">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <BreadcrumbItem key={crumb.href} href={crumb.href} isCurrent={isLast}>
            {crumb.label}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
}
