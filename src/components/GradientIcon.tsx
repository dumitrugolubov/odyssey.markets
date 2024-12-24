import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GradientIconProps {
  Icon: LucideIcon;
  size?: number;
  className?: string;
}

export default function GradientIcon({ Icon, size = 24, className = '' }: GradientIconProps) {
  return (
    <div className="relative">
      <Icon
        size={size}
        className={`text-transparent ${className}`}
        style={{
          fill: 'url(#blue-purple-gradient)',
          stroke: 'url(#blue-purple-gradient)',
        }}
      />
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="blue-purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3B82F6' }} />
            <stop offset="100%" style={{ stopColor: '#8B5CF6' }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}