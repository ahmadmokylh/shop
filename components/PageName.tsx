'use client";';

import { arabicLabels } from '@/lib/arabicLabels';
import { usePathname } from 'next/navigation';

export default function PageName() {
  const pathname = usePathname();

  const parts = pathname.split('/').filter(Boolean);
  const last = parts[parts.length - 1];

  const arabicLabel = arabicLabels[last] || last;

  return <div className=" lg:text-4xl">{arabicLabel}</div>;
}
