import { TopSection } from '../ui/TopSection';
import Layout from '../Layout';
import { bestSellerProducts } from '@/data/bestSellerProducts';
import BestSellerCard from '../ui/BestSellerCard';

export default function BestSeller() {
  return (
    <Layout>
      <TopSection>الأكثر مبيعاً ( خلطات العسل )</TopSection>
      <div
        className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6"
        dir="rtl"
      >
        {bestSellerProducts.map((product) => (
          <BestSellerCard
            key={product.name}
            img={product.img}
            name={product.name}
            description={product.description}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </Layout>
  );
}
