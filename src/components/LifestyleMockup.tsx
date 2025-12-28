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

  // Screen positioning for each variant (percentage based)
  const getScreenPosition = () => {
    switch (variant) {
      case 'imac':
        return {
          top: '8%',
          left: '12%',
          width: '76%',
          height: '52%',
        };
      case 'macbook':
        return {
          top: '10%',
          left: '18%',
          width: '64%',
          height: '48%',
        };
      case 'laptop':
        return {
          top: '8%',
          left: '16%',
          width: '68%',
          height: '52%',
        };
      default:
        return {
          top: '8%',
          left: '12%',
          width: '76%',
          height: '52%',
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
          borderRadius: '2px',
        }}
      >
        <img 
          src={imageSrc} 
          alt={alt}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};
