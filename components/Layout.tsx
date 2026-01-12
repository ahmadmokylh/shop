import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return <div className={cn(` w-full px-12 ${className}`)}>{children}</div>;
}
