'use client';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Image,
} from '@heroui/react';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  _id?: string;
  slug?: string;
  image: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
}

export default function SmallProductCard({
  slug,
  image,
  title,
  description,
  price,
  oldPrice,
}: ProductCardProps) {
  const router = useRouter();

  return (
    <Card
      disableAnimation
      className="w-full  rounded-xl  border-neutral-200 cursor-pointer"
      onClick={() => router.push(`/products/${slug}`)}
    >
      <CardHeader className="p-2">
        <div className="w-full aspect-square bg-white flex items-center justify-center overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </CardHeader>

      <CardBody className="flex flex-col gap-1 items-start text-start pb-0">
        <h3 className="text-xs font-semibold text-neutral-800 text-start">
          {title}
        </h3>
        <p className="text-[9px] line-clamp-1">{description}</p>
      </CardBody>

      <CardFooter className="flex  flex-col items-start gap-2 pb-4 justify-between pt-0">
        <div className="text-neutral-700 flex">
          {oldPrice && (
            <span className="text-sm line-through text-neutral-400 ml-2">
              {oldPrice.toFixed(3)}
            </span>
          )}

          <div className="text-start">
            <span className="text-[9px]">يبدأ من</span>
            <span className="font-bold text-neutral-900 flex items-center gap-1 text-sm">
              {price.toFixed(3)}
              <span className="text-xs font-medium">د.ك.</span>
            </span>
          </div>
        </div>
        <Button
          size="sm"
          radius="full"
          className="text-white font-medium px-12 bg-[#ff7b00] w-full"
          onPress={() => router.push(`/products/${slug}`)}
        >
          عرض
        </Button>
      </CardFooter>
    </Card>
  );
}
