import { useCart } from '@/lib/stores/cartStore';
import { Image } from '@heroui/react';
import { Minus, Plus, Trash } from 'lucide-react';

export default function CartItem() {
  const { items, removeItem, increaseQty, decreaseQty } = useCart();
  return (
    <div className="w-full">
      {items.map((item) => (
        <div
          key={item._id}
          className="border-1 border-gray-200 rounded-2xl w-full p-2 flex flex-wrap items-start gap-2 justify-between my-4"
        >
          {/* img */}
          <Image src={item.img} alt={item.name} width="100px" />

          {/* info */}
          <div className="flex-1 flex flex-col gap-3">
            <span>{item.name}</span>
            <span className="text-[#5a3519] text-sm ">{item.price} د.ك.</span>
            <span className="text-[#acacac] text-sm ">{item.weight} جرام</span>
          </div>

          {/* btn */}

          <div className="flex items-center justify-between gap-2 bg-[#f2f2f2] h-10 w-[140px] rounded-xl px-3 self-end ">
            <button
              className="cursor-pointer"
              onClick={() => removeItem(item._id)}
            >
              <Trash width={15} />
            </button>
            {item.quantity > 1 && (
              <button
                className="cursor-pointer"
                onClick={() => decreaseQty(item._id)}
              >
                <Minus width={15} />
              </button>
            )}
            <span>{item.quantity}</span>
            <button
              className="cursor-pointer"
              onClick={() => increaseQty(item._id)}
            >
              <Plus width={15} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
