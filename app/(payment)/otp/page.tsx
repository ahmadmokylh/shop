'use client';

import OtpForm from '@/components/OtpForm';
import ThankYouModal from '@/components/ThankYouModal';
import { useCart } from '@/lib/stores/cartStore';
import { redirect, RedirectType } from 'next/navigation';

export default function OtpPage() {
  const { items } = useCart();

  if (!items) return redirect('/', RedirectType.replace);

  return (
    <div className="min-h-screen bg-[#dcdcdc] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white border border-gray-400 rounded-sm shadow-lg px-6 pb-20 pt-10">
        {/* IMPORTANT HERE */}
        <OtpForm />

        <ThankYouModal />
      </div>
    </div>
  );
}
