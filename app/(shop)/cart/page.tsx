'use client';

import BreadcrumbsDynamic from '@/components/BreadcrumbsDynamic';
import CartItem from '@/components/ui/CartItem';
import { useCart } from '@/lib/stores/cartStore';
import { Button, Link } from '@heroui/react';

export default function CartPage() {
  const { items, total, clearCart } = useCart();

  return (
    <main className="p-6" dir="rtl">
      <BreadcrumbsDynamic />
      <div className="my-6">
        {items.length === 0 ? (
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col py-5px-4 gap-4 items-center max-w-[360px]">
              <h1 className="font-semibold text-2xl text-[#5a3519]">
                السلة فارغة
              </h1>
              <p className="text-center font-light">
                أضف ما تود شراءه الى السلة لإظهاره هنا والمضي قدماً لإتمام عملية
                الشراء
              </p>
            </div>
            <Button as={Link} href="/" className="bg-[#5a3519] text-white py-7">
              ابدأ التسوق الآن
            </Button>
          </div>
        ) : (
          <>
            <div className="w-full flex flex-col gap-4">
              {/* header */}
              <div className="flex justify-between items-center sm:w-1/2">
                <span className="text-md">
                  محتويات السلة {`(${items.length})`}
                </span>
                <span
                  onClick={() => clearCart()}
                  className="text-red-500 underline text-sm font-light ml-5 cursor-pointer"
                >
                  إفراغ السلة
                </span>
              </div>

              <div className="w-full flex justify-between gap-10 sm:px-6 items-start ">
                {/* right side */}
                <div className="w-full">
                  <CartItem />
                </div>

                {/* left side */}
                <div className="w-full hidden sm:flex flex-col gap-3 ">
                  <span>المجموع الكلي</span>
                  <span className="text-[#5a3519] font-bold text-2xl">
                    {total()} د.ك.
                  </span>
                  <div className="w-full flex justify-between items-center gap-4">
                    <Button
                      as={Link}
                      className="w-full bg-[#5a3519] text-white"
                      size="lg"
                      radius="sm"
                      href="/checkout"
                    >
                      الدفع
                    </Button>
                    <Button
                      as={Link}
                      radius="sm"
                      className="w-full border-[#5a3519] text-[#5a3519] border-1"
                      size="lg"
                      variant="bordered"
                      href="/"
                    >
                      متابعة التسوق
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div
              dir="rtl"
              className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#fafafa] h-[140px] rounded-t-3xl  shadow-xl/30 shadow-blac border-t-1 border-neutral-200"
            >
              <div className="flex flex-col items-center w-full px-6 py-6 gap-4">
                <div className="flex w-full items-center justify-between">
                  <span className="text-sm">المجموع الكلي</span>
                  <span className="text-[#5a3519] font-bold ">
                    {total()} د.ك.
                  </span>
                </div>

                <Button
                  as={Link}
                  className="w-full bg-[#5a3519] text-white"
                  size="lg"
                  radius="sm"
                  href="/checkout"
                >
                  الدفع
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
