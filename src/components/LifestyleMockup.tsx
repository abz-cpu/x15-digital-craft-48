import React from 'react';

interface LifestyleMockupProps {
  imageSrc: string;
  alt: string;
  variant?: 'desk-plant' | 'minimal-desk' | 'cozy-vase';
  className?: string;
}

export const LifestyleMockup: React.FC<LifestyleMockupProps> = ({
  imageSrc,
  alt,
  variant = 'desk-plant',
  className = ''
}) => {
  const getBackgroundStyle = () => {
    switch (variant) {
      case 'desk-plant':
        return 'from-[#f5f0ea] via-[#f8f5f0] to-[#faf8f5]';
      case 'minimal-desk':
        return 'from-[#f8e8e0] via-[#faf0ea] to-[#fcf5f2]';
      case 'cozy-vase':
        return 'from-[#f5f2ed] via-[#f8f6f2] to-[#faf9f7]';
      default:
        return 'from-[#f5f0ea] via-[#f8f5f0] to-[#faf8f5]';
    }
  };

  const getDecorations = () => {
    switch (variant) {
      case 'desk-plant':
        return (
          <>
            {/* Plant decoration - left */}
            <div className="absolute bottom-4 left-4 w-16 h-20">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-6 bg-[#d4c4b0] rounded-t-sm rounded-b-lg" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                <div className="w-1 h-10 bg-[#6b8f71]" />
                <div className="absolute -top-1 -left-3 w-6 h-4 bg-[#7fa67f] rounded-full rotate-[-30deg]" />
                <div className="absolute top-2 -right-2 w-5 h-3.5 bg-[#8fb88f] rounded-full rotate-[20deg]" />
                <div className="absolute top-5 -left-2.5 w-5 h-3 bg-[#7fa67f] rounded-full rotate-[-15deg]" />
              </div>
            </div>
            {/* Small decorative items - right */}
            <div className="absolute bottom-4 right-6 w-6 h-8 bg-[#e8ddd0] rounded-full opacity-60" />
            <div className="absolute bottom-4 right-14 w-4 h-5 bg-[#d9cfc2] rounded-sm opacity-50" />
          </>
        );
      case 'minimal-desk':
        return (
          <>
            {/* Minimal decoration - subtle items */}
            <div className="absolute bottom-4 right-8 w-20 h-3 bg-gradient-to-r from-[#e0d5c8] to-[#d5c8b8] rounded-full opacity-40" />
            <div className="absolute bottom-5 left-8 flex gap-2">
              <div className="w-3 h-3 bg-[#c9bfb0] rounded-full opacity-50" />
              <div className="w-3 h-3 bg-[#d4c8b8] rounded-full opacity-40" />
            </div>
          </>
        );
      case 'cozy-vase':
        return (
          <>
            {/* Vase decoration - right */}
            <div className="absolute bottom-4 right-6">
              <div className="w-10 h-14 bg-[#e5ddd0] rounded-full" style={{ borderRadius: '40% 40% 45% 45%' }} />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-3 bg-[#e0d5c5] rounded-t-full" />
            </div>
            {/* Small decorative frame - left */}
            <div className="absolute bottom-6 left-6 w-8 h-10 border-2 border-[#d5c8b8] opacity-40" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-xl ${className}`}>
      {/* Background with lifestyle gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getBackgroundStyle()}`} />
      
      {/* Subtle shadow/depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10" />
      
      {/* Decorative elements */}
      {getDecorations()}
      
      {/* Laptop mockup container */}
      <div className="relative z-10 flex items-end justify-center px-6 pt-8 pb-4">
        {/* Laptop */}
        <div className="relative w-full max-w-[280px]">
          {/* Screen bezel */}
          <div className="relative bg-[#2d2d2d] rounded-t-xl pt-2 px-2 pb-0 shadow-[0_-2px_20px_rgba(0,0,0,0.15)]">
            {/* Camera dot */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#1a1a1a] rounded-full" />
            
            {/* Screen */}
            <div className="relative bg-white rounded-t-sm overflow-hidden aspect-[16/10]">
              <img 
                src={imageSrc} 
                alt={alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          {/* Laptop base/keyboard */}
          <div className="relative">
            <div className="h-3 bg-gradient-to-b from-[#c5c5c5] to-[#a8a8a8] rounded-b-lg" />
            {/* Trackpad hint */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#999] rounded-full" />
          </div>
          
          {/* Shadow under laptop */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/10 blur-md rounded-full" />
        </div>
      </div>
    </div>
  );
};
