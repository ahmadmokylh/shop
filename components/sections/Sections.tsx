'use client';

import { Image } from '@heroui/react';
import Layout from '../Layout';
import { TopSection } from '../ui/TopSection';
import { typeSection } from '@/data/typeSections';
import { useRouter } from 'next/navigation';

export default function Sections() {
  const router = useRouter();

  return (
    <Layout className="mb-12 sm:mb-0">
      <TopSection>الأقسام</TopSection>
      <div
        dir="rtl"
        className="
          grid 
          grid-cols-3
          gap-x-10 gap-y-7
          justify-items-center
          items-center
          sm:flex sm:justify-center sm:items-center sm:gap-6
        "
      >
        {typeSection.map((type) => (
          <div
            onClick={() => router.push(type.id)}
            key={type.id}
            className="flex flex-col items-center text-center w-[127px] h-[127px] sm:w-[200px] sm:h-[200px] cursor-pointer"
          >
            <Image
              src={type.icon}
              alt={type.title}
              width={120}
              height={120}
              className="object-contain w-[65px] h-[65px] sm:w-[127px] sm:h-[127px]"
            />
            <span className="mt-2 text-sm sm:text-lg leading-tight">
              {type.title}
            </span>
          </div>
        ))}
      </div>
    </Layout>
  );
}
