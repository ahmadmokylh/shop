'use client';

import DropdownCU from '@/components/DropdownCU';
import PaymentForm from '@/components/PaymentForm';
import { useCart } from '@/lib/stores/cartStore';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@heroui/react';
import { redirect, RedirectType } from 'next/navigation';

export default function PaymentPage() {
  const { items, total } = useCart();

  if (!items) return redirect('/', RedirectType.replace);

  return (
    <div className="w-full flex h-screen justify-center items-center bg-[url('/Pattern.svg')] bg-no-repeat bg-cover bg-center">
      <Card>
        <CardHeader className="flex flex-col gap-6 p-6">
          <div className="flex gap-2 items-center ">
            <Image alt="logo" src="/logo2.png" width={60} />
            <h1 className="text-2xl">MANAHAL ALTHUNYYAN CO</h1>
          </div>

          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col">
              <span className="text-2xl text-[#0018FF] font-semibold">
                {total()} KD
              </span>
              <span className="text-lg">Expire In 2 Days</span>
            </div>
            <DropdownCU />
          </div>
        </CardHeader>

        <CardBody className="flex flex-col items-center bg-[#f7f8ff] p-6 gap-4">
          <div className="text-sm">Insert Card Details</div>
          <PaymentForm />

          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <Image alt="myatoorah" src="/myato.png" width={110} />
          </div>
        </CardBody>

        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
