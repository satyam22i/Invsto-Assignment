import { useState, useRef, useEffect } from "react";

interface SliderProps {
  views: number;
  setViews: (value: number) => void;
}

export default function Slider({ views, setViews }: SliderProps) {
  const [thumbPosition, setThumbPosition] = useState(
    ((views - 10000) / (1000000 - 10000)) * 100
  );
  const thumbRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLInputElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setViews(newValue);
    setThumbPosition(((newValue - 10000) / (1000000 - 10000)) * 100);
  };

  const handleThumbDrag = (e: MouseEvent) => {
    if (sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const newLeft = Math.min(
        Math.max(e.clientX - sliderRect.left, 0),
        sliderRect.width
      );
      const newValue = Math.round(
        (newLeft / sliderRect.width) * (1000000 - 10000) + 10000
      );
      setViews(newValue);
      setThumbPosition(((newValue - 10000) / (1000000 - 10000)) * 100);
    }
  };

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleThumbDrag);
    document.addEventListener("mouseup", handleThumbMouseUp);
  };

  const handleThumbMouseUp = () => {
    document.removeEventListener("mousemove", handleThumbDrag);
    document.removeEventListener("mouseup", handleThumbMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleThumbDrag);
      document.removeEventListener("mouseup", handleThumbMouseUp);
    };
  }, []);

  return (
    <div className="relative w-full flex justify-center mt-4">
      {/* Styled Range Input */}
      <input
        ref={sliderRef}
        type="range"
        min="10000"
        max="1000000"
        step="10000"
        value={views}
        onChange={handleSliderChange}
        className="w-full h-2 rounded-lg appearance-none bg-gradient-to-r from-green-300 to-gray-300 outline-none cursor-pointer"
        style={{
          WebkitAppearance: "none",
        }}
      />

      {/* Custom Movable Thumb */}
      <div
        ref={thumbRef}
        className="absolute top-1/2 -translate-y-1/2 transform cursor-pointer"
        style={{
          left: `calc(${thumbPosition}% - 20px)`, // Moves dynamically
        }}
        onMouseDown={handleThumbMouseDown}
      >
        <div className="w-10 h-10 flex items-center justify-center bg-teal-400 rounded-full shadow-lg">
          <img src="./icon-slider.svg" alt="arrows" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}