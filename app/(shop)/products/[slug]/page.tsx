'use client';

import BreadcrumbsDynamic from '@/components/BreadcrumbsDynamic';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { use, useEffect, useState, ChangeEvent } from 'react';
import { TopSection } from '../../../../components/ui/TopSection';
import { Button, Image, Select, SelectItem } from '@heroui/react';
import { useCart } from '@/lib/stores/cartStore';
import { cn } from '@/lib/utils';
import { ProductType } from '@/types/ProductType';

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const [allRes, honeyRes] = await Promise.all([
        fetch(process.env.NEXT_PUBLIC_API_GET_ALL_PRODUCTS!),
        fetch(
          `${process.env.NEXT_PUBLIC_API_GET_BY_CATEGORY}?category=خلطات العسل&category=العسل العضوي`
        ),
      ]);

      const all = await allRes.json();
      const honey = await honeyRes.json();

      const products = [...all.products, ...honey.products];

      const found = products.find((p: ProductType) => p.slug === slug);

      setProduct(found || null);
    };

    fetchData();
  }, [slug]);

  const [value, setValue] = useState('');
  const addItem = useCart((s) => s.addItem);

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  const handleItem = () => {
    if (!product) return;

    addItem({
      _id: product._id ? product._id.toString() : '',
      name: product.name,
      price: product.price,
      img: product.img,
      weight: value,
    });
  };

  if (!product)
    return (
      <div className="p-6">
        <p>غير موجود</p>
        <Link href="/">الصفحة الرئيسية</Link>
      </div>
    );

  return (
    <main
      className="p-6 flex flex-col flex-1 bg-[#fafafa] min-h-screen"
      dir="rtl"
    >
      {/* header */}
      <div className="flex items-center gap-3">
        <Link href={'/'}>
          <ChevronRight strokeWidth={1} />
        </Link>
        <BreadcrumbsDynamic />
      </div>

      {/* content */}
      <div className="flex flex-col justify-between flex-1">
        <div className="w-full flex items-start flex-1 mt-6 gap-10 max-lg:flex-col max-lg:items-center">
          {/* right section */}
          <section className="w-[33.6667%] max-lg:w-full max-lg:flex max-lg:justify-center">
            <Image
              src={product.img}
              alt={product.name}
              className="w-[357.9px] sm:w-[602.9px]"
            />
          </section>

          {/* left */}
          <section className="w-[66.3333%] max-lg:w-full flex flex-col gap-9 mt-6">
            <h1 className="text-2xl font-bold">{product.name}</h1>

            <div className="flex flex-col gap-3">
              <p className="font-semibold text-[15px]">الوصف</p>
              <p className="text-sm whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* price */}
            <h2 className="font-semibold text-2xl text-[#5a3519]">
              {product.price} د.ك.
            </h2>

            {/* weight */}
            <div className="flex flex-col w-full">
              <TopSection dir="ltr">الوزن</TopSection>
              <Select
                dir="rtl"
                label="اختر من القائمة"
                selectedKeys={[value]}
                onChange={handleSelectionChange}
                size="lg"
                className="bg-white"
                isRequired
              >
                <SelectItem key="500">500 جرام</SelectItem>
                <SelectItem key="1000">1000 جرام</SelectItem>
                <SelectItem key="250">250 جرام</SelectItem>
              </Select>
            </div>

            {/* add */}
            <Button
              size="lg"
              radius="lg"
              className={cn(
                'text-white font-medium px-12 w-1/2 py-9 max-lg:w-full hidden sm:block',
                !value ? 'bg-[#acacac]' : 'bg-[#ff7b00]'
              )}
              disabled={!value}
              onPress={handleItem}
            >
              أضف الى السلة
            </Button>

            {/* mobile bottom */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#fafafa] h-[120px] rounded-t-2xl shadow-2xl border-t-1 border-gray-400">
              <div className="flex justify-center items-center h-full px-6">
                <Button
                  size="lg"
                  radius="lg"
                  className={cn(
                    'text-white font-medium px-12 w-full py-9',
                    !value ? 'bg-[#acacac]' : 'bg-[#ff7b00]'
                  )}
                  disabled={!value}
                  onPress={handleItem}
                >
                  أضف الى السلة
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
