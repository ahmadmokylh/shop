import Cart from './Cart';
import { ChevronDown } from 'lucide-react';
import useSiteConfig from '@/data/configSite';
import { usePathname } from 'next/navigation';
import { Image, Tooltip } from '@heroui/react';
import Link from 'next/link';

export default function Navbar() {
  const { navLinks } = useSiteConfig();
  const pathname = usePathname();

  return (
    <nav className=" mx-full flex items-center justify-between px-12 py-2 gap-6">
      {/* Left Actions */}
      <Cart />

      {/* navItem */}
      <div className="flex items-center gap-6 w-full justify-end ">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.url}
            className={`text-neutral-700 hover:text-amber-600 transition flex ${
              pathname === link.url ? 'text-amber-600' : ''
            }`}
          >
            {i === 2 && <ChevronDown strokeWidth={1} />}
            {i === 2 ? (
              <Tooltip
                disableAnimation
                dir="rtl"
                offset={10}
                shadow="none"
                content={
                  <div className="p-1  w-40 flex flex-col  text-xs">
                    {navLinks[2].subLinks?.map((item) => (
                      <Link
                        href={item.url}
                        key={item.title}
                        className="hover:bg-[#191919] hover:text-white py-1 px-2 rounded-lg"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                }
              >
                {link.title}
              </Tooltip>
            ) : (
              link.title
            )}
          </Link>
        ))}
      </div>

      {/* logo */}
      <Link href="/" className="relative w-full max-w-[150px] h-12">
        <Image
          src="/Logo.png"
          alt="Logo"
          sizes="(max-width: 768px) 120px, 150px"
          className="object-contain"
        />
      </Link>
    </nav>
  );
}
