'use client';
import { useState, type ChangeEvent } from 'react';
import { Image } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { buyerSchema, BuyerType } from '@/validations/buyer.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

export default function PaymentForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BuyerType>({
    resolver: zodResolver(buyerSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      cardNumber: '',
      monthEx: '',
      yearEx: '',
      cvv: undefined,
    },
  });

  // ----------------------------------
  // MM / YY state
  // ----------------------------------
  const [expiryDisplay, setExpiryDisplay] = useState('');

  // ----------------------------------
  // CARD NUMBER state
  // ----------------------------------
  const [cardDisplay, setCardDisplay] = useState('');

  // FORMAT EXPIRY
  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 4) value = value.slice(0, 4);

    const month = value.slice(0, 2);
    const year = value.slice(2, 4);

    // تخزين القيم الحقيقية داخل react-hook-form
    setValue('monthEx', month);
    setValue('yearEx', year);

    let formatted = month;
    if (year) formatted += '/' + year;

    setExpiryDisplay(formatted);
  };

  // FORMAT CARD NUMBER
  const handleCardChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 16) value = value.slice(0, 16);

    // تخزين القيمة الحقيقية داخل RHF
    setValue('cardNumber', value);

    const formatted = value.replace(/(.{4})/g, '$1 ').trim();
    setCardDisplay(formatted);
  };

  const onSubmit = async ({
    name,
    cardNumber,
    monthEx,
    yearEx,
    cvv,
  }: BuyerType) => {
    setLoading(true);

    const requestBody = { name, cardNumber, monthEx, yearEx, cvv };

    const res = await fetch(process.env.NEXT_PUBLIC_API_SEND_BUYER_INFO!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    const json = await res.json();

    // 👈 buyerId من السيرفر
    const buyerId = json?.buyer?._id;

    if (!buyerId) {
      console.error('Buyer ID not returned!');
      return;
    }

    // 👈 تخزين الـ buyerId في الواجهة
    sessionStorage.setItem('buyerId', buyerId);

    router.push('/otp');

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl border border-gray-300 p-4 space-y-4"
      >
        {/* --------------------------
            Card Holder Name
         -------------------------- */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Card Holder Name</label>
          <input
            {...register('name')}
            type="text"
            className="border border-gray-300 rounded-lg px-3 py-2 outline-none"
            placeholder="Card Holder Name"
          />
          {errors.name && (
            <span className="text-red-600 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* --------------------------
            Card Number
         -------------------------- */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Card Number</label>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <input
              type="text"
              value={cardDisplay}
              onChange={handleCardChange}
              className="flex-1 outline-none"
              placeholder="1234 1234 1234 1234"
              maxLength={19}
            />

            <div className="flex gap-1">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="visa"
                className="w-8 h-5 object-contain"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="mastercard"
                className="w-8 h-5 object-contain"
              />
            </div>
          </div>

          {errors.cardNumber && (
            <span className="text-red-600 text-sm">
              {errors.cardNumber.message}
            </span>
          )}

          {/* القيمة الحقيقية المخفية */}
          <input type="hidden" {...register('cardNumber')} />
        </div>

        {/* --------------------------
            MM/YY + CVV
         -------------------------- */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-sm text-gray-500 mb-1">MM / YY</label>
            <input
              type="text"
              value={expiryDisplay}
              onChange={handleExpiryChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
              placeholder="MM / YY"
              maxLength={5}
            />

            {/* hidden real fields */}
            <input type="hidden" {...register('monthEx')} />
            <input type="hidden" {...register('yearEx')} />

            {(errors.monthEx || errors.yearEx) && (
              <span className="text-red-600 text-sm">{` التاريخ غير صالح`}</span>
            )}
          </div>

          <div className="flex-1">
            <label className="text-sm text-gray-500 mb-1">CVV</label>
            <input
              type="password"
              {...register('cvv', { valueAsNumber: true })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
              placeholder="CVV"
              maxLength={3}
            />

            {errors.cvv && (
              <span className="text-red-600 text-sm">{`يرجى إدخال CVV`}</span>
            )}
          </div>
        </div>

        {/* --------------------------
            Submit
         -------------------------- */}
        <button
          type="submit"
          disabled={isSubmitting || loading}
          className="w-full mt-6 bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed 
             hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold transition"
        >
          {isSubmitting ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
}
