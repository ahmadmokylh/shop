import { bestSellerProducts } from '@/data/bestSellerProducts';
import Layout from '../Layout';
import ProductCard from '../ui/ProductCard';
import { TopSection } from '../ui/TopSection';

export default function Promotions() {
  return (
    <Layout>
      <TopSection isShowAll path="/promotions">
        عروضنا
      </TopSection>

      <div
        className="grid gap-7 grid-cols-[repeat(auto-fill,minmax(262px,1fr))] mt-6"
        dir="rtl"
      >
        {bestSellerProducts.map((product, i) => (
          <ProductCard
            key={i}
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
