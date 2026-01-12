import CartItem from '@/components/ui/CartItem';
import { TopSection } from '@/components/ui/TopSection';
import { useCart } from '@/lib/stores/cartStore';
import { cn } from '@/lib/utils';
import { Button, Link, Tooltip } from '@heroui/react';
import { Search, ShoppingCart } from 'lucide-react';

export default function Cart() {
  const { items, total } = useCart();

  return (
    <div className="flex items-center gap-4">
      <Tooltip
        content={
          items.length === 0 ? (
            <div className="flex flex-col py-5 px-4 gap-2 items-center max-w-[330px]">
              <span className="font-semibold text-2xl text-[#5a3519]">
                السلة فارغة
              </span>
              <span className="text-center">
                أضف ما تود شراءه الى السلة لإظهاره هنا والمضي قدماً لإتمام عملية
                الشراء
              </span>
            </div>
          ) : (
            <div
              dir="rtl"
              className="flex flex-col my-2 px-2 gap-2 items-center max-w-[400px]"
            >
              <TopSection className="my-2">محتويات السلة</TopSection>

              {/* products */}
              <div className="max-h-[250px] overflow-auto">
                <CartItem />
              </div>

              {/* total */}
              <div className="w-full flex items-center justify-between text-[16px] my-3">
                <span>المجموع الكلي:</span>

                <span className="flex gap-2 font-bold ">
                  <span>{total()}</span>
                  <span>د.ك.</span>
                </span>
              </div>
              <Button
                as={Link}
                className="w-full border-[#5a3519] text-[#5a3519]"
                size="lg"
                variant="bordered"
                href="/cart"
              >
                الذهاب الى صفحة السلة
              </Button>
              <Button
                className="w-full bg-[#5a3519] text-white"
                size="lg"
                as={Link}
                href="/checkout"
              >
                الدفع
              </Button>
            </div>
          )
        }
      >
        <Button
          as={Link}
          variant="bordered"
          className={cn(
            ` border-black border ${items.length > 0 && 'bg-black text-white'}`
          )}
          size="sm"
          href="/cart"
        >
          {items.length > 0 && items.length}
          <ShoppingCart className="w-5 h-5 " />
        </Button>
      </Tooltip>
      <button className="p-2 hover:bg-neutral-100 rounded-full">
        <Search className="w-5 h-5 text-neutral-700" />
      </button>
    </div>
  );
}
