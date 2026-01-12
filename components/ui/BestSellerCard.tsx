'use client';

import { useCart } from '@/lib/stores/cartStore';
import { ProductType } from '@/types/ProductType';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Image,
} from '@heroui/react';

export default function BestSellerCard({
  _id,
  img,
  name,
  description,
  price,
  oldPrice,
}: ProductType) {
  const addItem = useCart((s) => s.addItem);

  return (
    <Card disableAnimation className="w-full  rounded-xl  border-neutral-200">
      <CardHeader className="overflow-visible">
        <Image src={img} alt={name} className="object-cover rounded-3xl p-1" />
      </CardHeader>

      <CardBody className="flex flex-col gap-4 items-start text-start">
        <h3 className="text-sm font-semibold text-neutral-800 text-start">
          {name}
        </h3>
        <p className="text-xs line-clamp-1">{description}</p>
      </CardBody>

      <CardFooter className="flex  items-center gap-2 pb-4 justify-between">
        <div className="text-neutral-700 flex">
          {oldPrice && (
            <span className="text-sm line-through text-neutral-400 ml-2">
              {oldPrice.toFixed(3)}
            </span>
          )}
          <span className="font-bold text-neutral-900 flex items-center gap-1 text-sm">
            {price.toFixed(3)}
            <span className="text-xs font-medium">د.ك.</span>
          </span>
        </div>
        <Button
          size="sm"
          radius="full"
          className="text-white font-medium px-12 bg-[#ff7b00]"
          onPress={() => addItem({ _id: _id || '', name: name, price, img })}
        >
          أضف الى السلة
        </Button>
      </CardFooter>
    </Card>
  );
}
