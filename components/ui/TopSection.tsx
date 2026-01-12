import { cn } from '@/lib/utils';
import Link from 'next/link';

interface TopSectionProps {
  children: React.ReactNode;
  isShowAll?: boolean;
  path?: string;
  className?: string;
  dir?: string;
}

export const TopSection: React.FC<TopSectionProps> = ({
  children = '',
  isShowAll = false,
  path = '',
  className,
  dir,
}) => {
  return (
    <div className={cn(`flex items-center w-full my-6 ${className}`)} dir={dir}>
      {isShowAll && (
        <Link
          href={path}
          className="text-gray-800 text-xs underline cursor-pointer"
        >
          عرض الكل
        </Link>
      )}
      <div className="flex-1 border-t border-gray-200"></div>
      <span className="px-3  text-gray-800 font-bold">{children}</span>
    </div>
  );
};
