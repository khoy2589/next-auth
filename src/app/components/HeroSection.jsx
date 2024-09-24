import React from "react";
import { Button } from "@/app/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-blue-600 text-white py-20 px-4 rounded-lg mb-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to GameStore</h2>
        <p className="text-xl mb-8">
          Discover the best games for your platform and preferences
        </p>
        <Button variant="secondary" size="lg">
          Explore Games
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
