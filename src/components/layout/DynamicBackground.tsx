
"use client";

import { useTheme } from '@/components/theme/ThemeProvider';
import { useEffect, useState } from 'react';

const lightBg = '/day-city-tram.png';
const darkBg = '/night-city-tram.png';

export function DynamicBackground() {
  const { theme } = useTheme();
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Preload images
    const lightImage = new Image();
    lightImage.src = lightBg;
    const darkImage = new Image();
    darkImage.src = darkBg;
  }, []);

  useEffect(() => {
    setBackgroundImage(theme === 'dark' ? darkBg : lightBg);
  }, [theme]);

  // Added a check for backgroundImage to prevent initial render with empty string if theme isn't ready
  // This could be improved with a loading state or placeholder, but for now, it prevents a flash.
  if (!backgroundImage) {
    return null; 
  }

  return (
    <div
      className="fixed inset-0 -z-50 bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
}
