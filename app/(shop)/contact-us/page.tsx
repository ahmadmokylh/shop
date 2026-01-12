'use client';

import CountryDrawer from '@/components/CountryDrawer';
import { Image } from '@heroui/react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <div className="w-full h-screen flex flex-col-reverse lg:flex-row-reverse gap-12 lg:gap-32 mt-10 px-12">
      {/* القسم اليمين - شبكات التواصل + العنوان */}
      <aside className="lg:w-1/3 w-full space-y-10 text-right">
        {/* شبكات التواصل */}
        <div>
          <h3 className="text-lg  mb-10">شبكات التواصل الاجتماعي</h3>

          <div className="flex items-end justify-end gap-5 text-2xl">
            <Link target='_blank' href="https://api.whatsapp.com/send?phone=96597388320&utm_campaign=wa_phone_number_xma_not_in_test&source_surface=49">
            <Image src="/whatsapp.png" alt="whatsapp" width={24} />
            </Link>
        
            <Image src="/tiktok.png" alt="tiktok" width={24} />
           
            <Link href="https://instagram.com/honeyaithnayan" target='_blank'>
            <Image src="/instagram.png" alt="instagram" width={24} />
            </Link>
          </div>
        </div>

        {/* عنوان الشركة */}
        <div>
          <CountryDrawer />
          <h3 className="text-lg  mb-4">عنوان الشركة</h3>
          <div className="flex items-start gap-3 justify-end">
            <MapPin />
          </div>
        </div>
      </aside>

      {/* الفورم */}
      <form className="lg:w-2/3 w-full space-y-6" dir="rtl">
        <h2 className=" text-xl ">مراسلة فريق الدعم الفني</h2>

        {/* الاسم */}
        <input
          type="text"
          placeholder="الاسم *"
          className="w-full rounded-md border px-4 py-3 focus:outline-none"
        />

        {/* البريد */}
        <input
          type="email"
          placeholder="البريد الإلكتروني *"
          className="w-full rounded-md border px-4 py-3 focus:outline-none"
        />

        {/* رقم التواصل */}
        <div className="flex w-full gap-2">
          <div className="w-24 flex items-center justify-center border rounded-md">
            🇯🇴 +962
          </div>
          <input
            type="number"
            placeholder="رقم التواصل *"
            className="flex-1 rounded-md border px-4 py-3 focus:outline-none"
          />
        </div>

        {/* الموضوع */}
        <input
          type="text"
          placeholder="الموضوع *"
          className="w-full rounded-md border px-4 py-3 focus:outline-none"
        />

        {/* الرسالة */}
        <textarea
          rows={6}
          placeholder="اكتب رسالتك هنا..."
          className="w-full rounded-md border px-4 py-3 resize-none focus:outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#5b351d] text-white py-3 rounded-md font-semibold"
        >
          إرسال
        </button>
      </form>
    </div>
  );
}
