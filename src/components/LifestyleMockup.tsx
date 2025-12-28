import React from 'react';
import lifestyleImac from '@/assets/lifestyle-mockup-imac.png';
import lifestyleMacbook from '@/assets/lifestyle-mockup-macbook.png';
import lifestyleLaptop from '@/assets/lifestyle-mockup-laptop.png';

interface LifestyleMockupProps {
  imageSrc: string;
  alt: string;
  variant?: 'imac' | 'macbook' | 'laptop';
  className?: string;
}

export const LifestyleMockup: React.FC<LifestyleMockupProps> = ({
  imageSrc,
  alt,
  variant = 'imac',
  className = ''
}) => {
  const getBackgroundImage = () => {
    switch (variant) {
      case 'imac':
        return lifestyleImac;
      case 'macbook':
        return lifestyleMacbook;
      case 'laptop':
        return lifestyleLaptop;
      default:
        return lifestyleImac;
    }
  };

  // Screen positioning for each variant - calibrated to match device screens exactly
  const getScreenPosition = () => {
    switch (variant) {
      case 'imac':
        // iMac screen position - centered, upper portion
        return {
          top: '10.5%',
          left: '18.5%',
          width: '63%',
          height: '51%',
          borderRadius: '1px',
        };
      case 'macbook':
        // MacBook screen position - centered with laptop open
        return {
          top: '13%',
          left: '24%',
          width: '52%',
          height: '42%',
          borderRadius: '4px',
        };
      case 'laptop':
        // Silver laptop screen position
        return {
          top: '11%',
          left: '21%',
          width: '58%',
          height: '50%',
          borderRadius: '6px',
        };
      default:
        return {
          top: '10.5%',
          left: '18.5%',
          width: '63%',
          height: '51%',
          borderRadius: '1px',
        };
    }
  };

  const screenPos = getScreenPosition();

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-xl ${className}`}>
      {/* Background lifestyle mockup image */}
      <img 
        src={getBackgroundImage()} 
        alt={`${alt} lifestyle mockup`}
        className="w-full h-full object-cover"
      />
      
      {/* Website screenshot overlay on screen */}
      <div 
        className="absolute overflow-hidden"
        style={{
          top: screenPos.top,
          left: screenPos.left,
          width: screenPos.width,
          height: screenPos.height,
          borderRadius: screenPos.borderRadius,
        }}
      >
        <img 
          src={imageSrc} 
          alt={alt}
          className="w-full h-full object-cover object-top"
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
      </div>
    </div>
  );
};
