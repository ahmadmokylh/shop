'use client';
import { useState } from 'react';
import { X, Search, ShoppingCart, Home, TextAlignJustify } from 'lucide-react';
import Link from 'next/link';
import { Badge, Button, Image } from '@heroui/react';
import Navbar from './components/Navbar';
import { useCart } from '@/lib/stores/cartStore';
import NavbarDrawer from './components/NavbarDrawer';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { items } = useCart();

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <header className="hidden md:block w-full bg-white sticky top-0 z-50 font-light">
        <Navbar />
      </header>

      {/* ===== Mobile Navbar ===== */}
      <header className="md:hidden sticky top-0 left-0 right-0 z-50 bg-[#fafafa]">
        <div className="flex items-center justify-between px-4 py-3">
          <Badge
            color="danger"
            content={items.length}
            placement="bottom-right"
            shape="circle"
            isInvisible={items.length === 0}
          >
            <Button as={Link} isIconOnly variant="light" size="sm" href="/cart">
              <ShoppingCart className="w-5 h-5 " />
            </Button>
          </Badge>

          <Link href="/" className="relative w-full h-9 max-w-[150px] mx-auto">
            <Image
              src="/Logo.png"
              alt="Logo"
              sizes="(max-width: 768px) 120px, 150px"
              className="object-contain"
            />
          </Link>
          <NavbarDrawer>
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <TextAlignJustify className="w-5 h-5" />
            )}
          </NavbarDrawer>
          {/* <button onClick={() => setOpen(!open)}>
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <TextAlignJustify className="w-5 h-5" />
            )}
          </button> */}
        </div>
      </header>

      {/* ===== Bottom Bar ===== */}
      <nav
        dir="rtl"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#fafafa] h-[72px] rounded-t-4xl  shadow-xl/30 shadow-blac border-t-1 border-neutral-200"
      >
        <div className="flex items-center w-full justify-around h-full px-6">
          <Link href="/">
            <Home className="w-5 h-6 text-[#7a4d00]" />
          </Link>

          <Badge
            color="danger"
            content={items.length}
            isInvisible={items.length === 0 && true}
          >
            <Link
              href="/cart"
              className="bg-[#7a4d00] text-[#fafafa] p-4 rounded-full"
            >
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </Badge>

          <Link href="/contact">
            <Search className="w-5 h-6 text-[#d8d8d8]" />
          </Link>
        </div>
      </nav>
    </>
  );
}
