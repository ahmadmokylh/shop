'use client';
import { Image } from '@heroui/react';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const social = [
    {
      platform: 'instagram',
      link: 'https://www.instagram.com/honeyaithnayan/',
      icon: '/instagram.png',
    },
    {
      platform: 'tiktok',
      link: 'https://www.tiktok.com',
      icon: '/tiktok.png',
    },
    {
      platform: 'whatsapp',
      link: 'https://api.whatsapp.com/send?phone=96597388320&utm_campaign=wa_phone_number_xma_not_in_test&source_surface=49',
      icon: '/whatsapp.png',
    },
  ];

  return (
    <footer className="w-full bg-[#e5e5e5] p-6 h-[333px] mt-auto" dir="rtl">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div className="flex flex-col items-start gap-3 text-right">
            <div className="flex items-center gap-5">
              <Image src="/logo.png" alt="مناحل الثنيان" className="h-10" />
              <div>
                <p className="text-xs">
                  {new Date().getFullYear()} مناحل النيبان
                </p>
                <p className="text-xs text-gray-700">حقوق النشر محفوظة</p>
              </div>
            </div>

            <p className="font-semibold text-sm mt-2">
              وسائل التواصل الاجتماعي
            </p>
            <div className="flex items-center gap-3 text-xl">
              {social.map((item) => (
                <Link key={item.platform} href={item.link}>
                  <Image className="w-6" src={item.icon} alt={item.platform} />
                </Link>
              ))}
            </div>

            <p className="flex items-center gap-2 text-sm" dir="ltr">
             +96597388320 <Phone size={15} />
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-end gap-3 text-right">
            <p className="font-semibold">روابط مفيدة</p>
            <Link href="/mn-nhn" className="text-sm hover:text-black">
              من نحن
            </Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3 text-right">
            <p className="font-semibold">طرق الدفع</p>
            <div className="flex items-center gap-3 text-3xl">
              <Image src={'/visa.png'} alt="visacard" className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
