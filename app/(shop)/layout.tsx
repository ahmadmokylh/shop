import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function ShopLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        {children}
        <Footer />
      </div>
    </>
  );
}
