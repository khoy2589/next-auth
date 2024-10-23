import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";

import GameList from "@assets/GameList.json";

const PriceRange = () => {
  const [price, setPrice] = React.useState([20, 100]);
  const [maxPrice, setMaxPrice] = React.useState(100);
  // const [checkpoints, setCheckpoints] = useState([]);

  useEffect(() => {
    const prices = GameList.map((game) => game.price);
    // const uniquePrices = [...new Set(prices)].sort((a, b) => a - b); // Unique and sorted prices
    // setCheckpoints(uniquePrices);

    const higestPrice = Math.max(...prices);
    setMaxPrice(higestPrice);
    setPrice([0.01, higestPrice]);
  }, []);

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
    // price range
    <div className="pt-3 ">
      {/* Single slider with two handles */}
      <div className="flex justify-center self-center">
        <Slider
          value={price} // Use both price values price[0], price[1]
          max={maxPrice}
          step={0.01}
          onValueChange={(val) => setPrice(val)} // Update price range
          className="PriceRange"
          style={sliderStyle}
        />
      </div>

      {/* Render checkpoints */}
      {/* <div className="relative flex justify-between pt-2">
        {checkpoints.map((checkpoint) => (
          <div
            key={checkpoint}
            className="absolute"
            style={{
              left: `${(checkpoint / maxPrice) * 100}%`, // Calculate position as a percentage
              transform: "translateX(-50%)",
              color: getColor(checkpoint),
              whiteSpace: "nowrap", // Prevent text from wrapping
            }}
          >
            <span className="text-xs font-medium">{checkpoint}</span>
          </div>
        ))}
      </div> */}

      {/* price input */}
      <div className="flex justify-between pt-1">
        <input
          type="number"
          value={price[0]} // Display the first price
          min={0.01}
          max={price[1]} // Ensure the first input can't exceed the second
          onChange={(e) => {
            const newValue = Math.min(Math.max(+e.target.value, 0), price[1]); // Clamp value
            setPrice([newValue, price[1]]);
          }} // Update the first price on change
          className="text-sm font-medium w-20 text-center border rounded-md" // Styling for the input
          style={{ color: getColor(price[0]) }}
        />

        <input
          type="number"
          value={price[1]} // Display the current price
          min={price[0]} // Ensure the second input can't go below the first
          max={maxPrice}
          readOnly
          // onChange={(e) => {
          //   const newValue = Math.min(
          //     Math.max(+e.target.value, price[0]),
          //     maxPrice,
          //   );
          //   setPrice([price[0], newValue]);
          // }} // Update the second price
          className="text-sm font-medium w-20 text-center border rounded-md" // Styling for the input
          style={{ color: getColor(price[1]) }}
        />
      </div>
    </div>
  );
};

export default PriceRange;
