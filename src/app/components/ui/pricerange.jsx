import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css"; // Import default styles

const PriceRange = () => {
  const [price, setPrice] = useState([20, 80]); // Example initial values

  const handlePriceChange = (values) => {
    setPrice(values);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Price Range</h2>

      <RangeSlider
        min={0}
        max={100}
        step={1}
        value={price}
        onInput={handlePriceChange}
        className="w-full"
      />

      <div className="flex justify-between mt-4">
        <span className="text-lg">${price[0]}</span>
        <span className="text-lg">${price[1]}</span>
      </div>
    </div>
  );
};

export default PriceRange;
