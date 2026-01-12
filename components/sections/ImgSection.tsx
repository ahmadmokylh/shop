'use client';

import { Image } from '@heroui/react';

export default function ImgSection() {
  return (
    <div className="w-full my-10">
      <Image
        src="/lastImg.png"
        alt="Description"
        radius="none"
        className="w-full h-auto object-cover"
        removeWrapper
      />
    </div>
  );
}
