import { ArrowRight, type LucideIcon } from 'lucide-react';
import { BOOST_URL } from '@/lib/constants';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  url?: string;
}

export default function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  url = BOOST_URL,
}: CTAButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-wider transition-all duration-300 clip-corner';

  const variants = {
    primary:
      'bg-military-500 text-white hover:bg-military-400 shadow-lg shadow-military-900/50 hover:shadow-military-600/50 hover:scale-[1.02]',
    secondary:
      'bg-tactical-orange text-white hover:bg-tactical-orange/90 shadow-lg shadow-tactical-orange/20 hover:scale-[1.02]',
    outline:
      'border-2 border-military-600 text-military-300 hover:bg-military-600/20 hover:border-military-500 hover:text-military-200',
  };

  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
