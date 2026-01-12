'use client';

import BreadcrumbsDynamic from '@/components/BreadcrumbsDynamic';
import DropdownFilter from '@/components/DropdownFilter';
import DropdownWeight from '@/components/DropdownWeight';
import PageName from '@/components/PageName';
import { TopSection } from '@/components/ui/TopSection';
import { typeSection } from '@/data/typeSections';
import { Image, Slider } from '@heroui/react';
import { usePathname, useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="p-6 min-h-screen" dir="rtl">
      <BreadcrumbsDynamic />
      <div className="my-5">
        <PageName />
      </div>

      <div className="flex mb-7">
        {pathName === '/categories' &&
          typeSection.map((type) => (
            <div
              onClick={() => router.push(type.id)}
              key={type.id}
              className="flex flex-col sm:flex-row items-center text-center cursor-pointer gap-2 pe-8"
            >
              <Image src={type.icon} alt={type.title} width={70} />
              <span className="mt-2 text-sm  leading-tight">{type.title}</span>
            </div>
          ))}
      </div>

      <div className="flex gap-20 mb-6">
        <div className="hidden  min-w-[306px] sm:flex flex-col gap-10 p-4">
          <div>
            <h3 className="my-4 text-[#5a3519]">ترتيب</h3>
            <DropdownFilter />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="my-4 text-[#5a3519]">فلاتر</h3>
              <button
                disabled
                className="bg-[#5a3519] text-white py-2 px-3 rounded-lg"
              >
                ازالة الفلاتر
              </button>
            </div>

            <div>
              <TopSection dir="ltr" className="text-sm font-light">
                مجال السعر
              </TopSection>
              <Slider
                classNames={{
                  base: 'max-w-md gap-3',
                  filler: 'bg-[#5a3519]',
                }}
                renderThumb={(props) => (
                  <div
                    {...props}
                    className=" border-small border-default-200  shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                  >
                    <span className="transition-transform bg-[#5a3519] rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                  </div>
                )}
                defaultValue={[0, 64]}
                formatOptions={{ style: 'currency', currency: 'KWD' }}
                label="السعر"
                maxValue={64}
                minValue={0}
                size="sm"
              />
            </div>

            <div>
              <TopSection dir="ltr" className="text-sm font-light">
                الوزن
              </TopSection>
              <DropdownWeight />
            </div>
          </div>
        </div>

        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
