'use client';
import SmallProductCard from '@/components/ui/SmallProductCard';
import { ProductType } from '@/types/ProductType';
import { use, useEffect, useState } from 'react';
import { Skeleton } from '@heroui/react';

export default function ProductsCategory({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = use(params);

  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const pageTitle: Record<string, string> = {
    promotions: 'العروض',
    'organic-honey': 'العسل العضوي',
    'honey-mixtures': 'خلطات العسل',
    'cell-products': 'منتجات الخلية',
    'farm-products': 'منتجات المزرعة',
  };

  useEffect(() => {
    const res = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_GET_BY_CATEGORY}?category=${pageTitle[page]}`
      );
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    };

    res();
  }, [page]);

  return (
    <div
      className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] mt-6 w-full"
      dir="rtl"
    >
      {loading
        ? Array.from({ length: 12 }).map((_, i) => (
            <Skeleton
              key={i}
              className="rounded-xl w-full h-[260px]"
              disableAnimation={false}
            />
          ))
        : products.map((product) => (
            <SmallProductCard
              key={product._id}
              title={product.name}
              image={product.img}
              description={product.description}
              price={product.price}
              slug={product.slug}
            />
          ))}
    </div>
  );
}
