'use client';
import CountryDrawer from '@/components/CountryDrawer';
import InputC from '@/components/ui/Input';
import { useCart } from '@/lib/stores/cartStore';
import { Button, Link, Image } from '@heroui/react';
import { redirect } from 'next/navigation';

export default function CheckoutPage() {
  const { items, total } = useCart();

  if (!items) return redirect('/');

  return (
    <main className="p-6 min-h-screen" dir="rtl">
      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* القسم الأول */}
        <div className="bg-white p-6  gap-10 flex flex-col max-w-[700px]">
          {/* contact */}
          <div className="w-full space-y-3">
            <div className="text-xl mb-5">معلومات التواصل</div>
            <InputC label="الاسم" />

            <div className="flex w-full">
              <InputC label="رقم التواصل" />
              <CountryDrawer />
            </div>
          </div>

          {/* address */}
          <div className="w-full space-y-3">
            <div className="text-xl mb-5">معلومات التواصل</div>
            <InputC label="البلد" />
            <InputC label="المحافظة" />
            <InputC label="المنطقة" />
            <InputC label="القطعة" />
            <InputC label="الشارع" />
            <InputC label="الجادة" />
            <InputC label="رقم المبنى" />
            <InputC label="ملاحظات" />
          </div>

          {/* payment */}
          <div className="w-full space-y-3">
            <div className="text-xl mb-5">طريقة الدفع</div>
            <div className="w-full flex justify-between items-center p-4 border border-[#dee2e6] rounded-md">
              <label className="flex gap-3">
                <input type="radio" id="visa" />
                visa
              </label>
              <Image alt="visa" src="/visa.png" width={25} />
            </div>
          </div>
        </div>

        {/* القسم الثاني – نسخة الموبايل فقط */}
        <div className="bg-[#fafafa] p-6 lg:hidden">
          <div className="flex flex-col justify-end p-10 gap-4 max-w-[500px] text-[#2b2b2b]">
            <div className="flex justify-between">
              <div>المجموع</div>
              <div>{total()} د.ك. </div>
            </div>
            <div className="flex justify-between">
              <div>خصم المنتجات</div>
              <div>0.000 د.ك.</div>
            </div>
            <div className="flex justify-between">
              <div>رسوم التوصيل</div>
              <div>0.000 د.ك.</div>
            </div>
            <div className="flex justify-between">
              <div>الضريبة</div>
              <div>0.000 د.ك.</div>
            </div>
            <div className="flex justify-between">
              <div>الخصم</div>
              <div>0.000 د.ك.</div>
            </div>
            <div className="flex justify-between text-2xl">
              <div>الإجمالي</div>
              <div>{total()} د.ك. </div>
            </div>

            <Button
              as={Link}
              className="w-full bg-[#5a3519] text-white"
              size="lg"
              radius="sm"
              href="/payment"
            >
              الذهاب لاتمام الطلب
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="fixed top-20 left-6 w-[calc(50%-24px)] bg-[#fafafa] p-6 rounded-md h-full">
          <div className="flex flex-col justify-end p-10 gap-4 max-w-[500px] text-[#2b2b2b]">
            <div className="flex justify-between">
              <div>المجموع</div>
              <div>{total()} د.ك. </div>
            </div>
            <div className="flex justify-between">
              <div>خصم المنتجات</div>
              <div>0.000 د.ك.</div>
            </div>
            <div className="flex justify-between">
              <div>رسوم التوصيل</div>
              <div>0.000 د.ك.</div>
            </div>
            <div className="flex justify-between">
              <div>الضريبة</div>
              <div>0.000 د.ك.</div>
            </div>
            <div className="flex justify-between">
              <div>الخصم</div>
              <div>0.000 د.ك.</div>
            </div>
            <div className="flex justify-between text-2xl">
              <div>الإجمالي</div>
              <div>{total()} د.ك. </div>
            </div>

            <Button
              as={Link}
              className="w-full bg-[#5a3519] text-white"
              size="lg"
              radius="sm"
              href="/payment"
            >
              الذهاب لاتمام الطلب
            </Button>
          </div>
        </div>
      </div>

      <div
        dir="rtl"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#fafafa] h-[140px] rounded-t-3xl  shadow-xl/30 shadow-blac border-t-1 border-neutral-200"
      >
        <div className="flex items-center w-full px-6 py-10 gap-4">
          <Button
            as={Link}
            className="w-full bg-[#5a3519] text-white"
            size="lg"
            radius="sm"
            href="/payment"
          >
            الذهاب لاتمام الطلب
          </Button>
        </div>
      </div>
    </main>
  );
}
