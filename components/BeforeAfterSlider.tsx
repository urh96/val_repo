
import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto aspect-[16/9] overflow-hidden rounded-sm select-none group">
      <img
        src={beforeImage}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` }}
      />
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/50 cursor-ew-resize"
        style={{ left: `calc(${sliderValue}% - 2px)` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-neutral-dark">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
          </svg>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full cursor-ew-resize opacity-0"
        aria-label="Before and after image slider"
      />
    </div>
  );
};

export default BeforeAfterSlider;
