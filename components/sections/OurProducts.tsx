'use client';

import Layout from '../Layout';
import { TopSection } from '../ui/TopSection';
import SmallProductCard from '../ui/SmallProductCard';

import { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@heroui/react';
import { ProductType } from '@/types/ProductType';

export default function OurProducts() {
  const [data, setData] = useState<ProductType[]>([]);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loading, setLoading] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  // مراقبة القسم
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // تحميل المنتجات عند الوصول للقسم
  useEffect(() => {
    if (!shouldLoad) return;

    const getProduct = async () => {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_GET_BY_CATEGORY}?category=خلطات العسل&category=العسل العضوي`
      );

      const json = await res.json();
      setData(json.products || []);
      setLoading(false);
    };

    getProduct();
  }, [shouldLoad]);

  return (
    <Layout className="mt-13">
      <TopSection>منتجاتنا</TopSection>

      {/* القسم الذي نراقبه */}
      <div ref={sectionRef}>
        <div
          className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] mt-6"
          dir="rtl"
        >
          {/* ❗ Skeleton قبل التحميل */}
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-40 sm:h-56 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-1/2 rounded-md" />
                <Skeleton className="h-4 w-1/3 rounded-md" />
              </div>
            ))}

          {/* بعد التحميل */}
          {!loading &&
            data.map((product) => (
              <SmallProductCard
                key={product._id}
                image={product.img}
                title={product.name}
                description={product.description}
                price={product.price}
                slug={product.slug}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
}
