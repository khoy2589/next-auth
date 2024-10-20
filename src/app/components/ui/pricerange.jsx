import React from "react";
import { Slider } from "@/components/ui/slider";

const PriceRange = () => {
  const [price, setPrice] = React.useState([20, 100]);

  const getColor = (value) => {
    const hue = 200 - (value / 100) * 200; // From blue (200) to red (0)
    return `hsl(${hue}, 100%, 50%)`;
  };

  const getGlowIntensity = (value) => {
    return value / 100; // Intensity increases with price
  };

  const sliderStyle = {
    "--start-color": getColor(price[0]),
    "--end-color": getColor(price[1]),
    "--start-glow": getGlowIntensity(price[0]),
    "--end-glow": getGlowIntensity(price[1]),
  };

  return (
    <div className="pt-4">
      <div className="space-y-4 ">
        <Slider
          defaultValue={price}
          max={100}
          step={1}
          onValueChange={setPrice}
          className="w-full [&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-[var(--start-color)] [&_[role=slider]]:to-[var(--end-color)] [&_[role=slider]]:border-2 [&_[role=slider]]:border-white [&_[role=slider]]:shadow-lg [&_[role=slider]]:shadow-[var(--start-color)] [&_[role=slider]:last-of-type]:shadow-[var(--end-color)] [&_.range]:bg-gradient-to-r [&_.range]:from-[var(--start-color)] [&_.range]:to-[var(--end-color)] [&_[data-orientation=horizontal]]:h-2 [&_[data-orientation=horizontal]]:bg-gray-200"
          style={sliderStyle}
        />
      </div>
      <div className="flex justify-between">
        <span
          className="text-sm font-medium"
          style={{ color: getColor(price[0]) }}
        >
          $ {price[0]}
        </span>
        <span
          className="text-sm font-medium"
          style={{ color: getColor(price[1]) }}
        >
          $ {price[1]}
        </span>
      </div>
    </div>
  );
};

export default PriceRange;
