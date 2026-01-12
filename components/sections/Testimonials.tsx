import React from 'react';
import Layout from '../Layout';
import { TopSection } from '../ui/TopSection';
import { Card, Image } from '@heroui/react';

export default function Testimonials() {
  const testimonials = [
    {
      img: '/testimonials/salem.png',
      name: 'سالم القحطاني',
      starts: '★★★★★',
      describtion:
        '"جربت عسل مناحل الثنيان لأول مرة وصار أساسي عندي في البيت. طعم أصلي وجودة ممتازة."',
    },
    {
      img: '/testimonials/fahed.png',
      name: 'فهد السبيعي',
      starts: '★★★★★',
      describtion:
        '"عسل طبيعي 100٪ وطعمه مختلف فعلاً عن أي عسل ثاني. أنصح فيه."',
    },
    {
      img: '/testimonials/sara.png',
      name: 'نورة الدوسري',
      starts: '★★★★★',
      describtion:
        '"طلبت أكثر من نوع من عسل الثنيان. جودة ممتازة وتغليف راقي ومصدر موثوق."',
    },
  ];

  return (
    <Layout className="my-7 px-6">
      <TopSection>`</TopSection>

      <div className="w-full justify-center flex text-3xl my-4">
        <h2>آراء عملائنا</h2>
      </div>

      <div className="sm:flex gap-6 pb-10 space-y-1" dir="rtl">
        {testimonials.map((item) => (
          <Card
            shadow="sm"
            key={item.name}
            className="flex flex-col w-full items-center p-5 gap-2 text-center"
          >
            <Image alt={item.name} src={item.img} width={60} />
            <h3 className="text-xl font-semibold ">{item.name}</h3>

            <span className="text-yellow-300">{item.starts}</span>
            <p className="text-[14.5px] text-[#7e8c8d]">{item.describtion}</p>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
