'use client';

import BestSeller from '@/components/sections/BestSeller';
import Hero from '@/components/sections/Hero';
import ImgSection from '@/components/sections/ImgSection';
import OurProducts from '@/components/sections/OurProducts';
import Promotions from '@/components/sections/Promotions';
import Promotions2 from '@/components/sections/Promotions2';
import Sections from '@/components/sections/Sections';
import Testimonials from '@/components/sections/Testimonials';

export default function HomePage() {
  return (
    <main className=" flex-1">
      <Hero />
      <BestSeller />
      <Sections />
      <Promotions />
      <OurProducts />
      <Promotions2 />
      <ImgSection />
      <Testimonials />
    </main>
  );
}
