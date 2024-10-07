import React, { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";

// const HeroSection = () => {
//   const [backgroundImage, setBackgroundImage] = useState(
//     "/assets/hero-background.jpg",
//   );

//   useEffect(() => {
//     // Check if the primary background image exists
//     const img = new Image();
//     img.src = backgroundImage;

//     img.onload = () => {
//       // Image exists, no need to do anything
//     };

//     img.onerror = () => {
//       // If the image doesn't load, set the fallback image
//       setBackgroundImage("/assets/cover/UnderGo.png");
//     };
//   }, [backgroundImage]);
//   return (
//     // <div className="bg-blue-600 text-white py-20 px-4 rounded-lg mb-8">
//     backgroundImage ? (
//       <div
//         className="bg-cover bg-center py-20 px-4 rounded-lg mb-8"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-4">Welcome to Store page</h2>
//           <p className="text-xl mb-8">
//             Discover the best games for your platform and preferences
//           </p>
//           <h1 className="animate-waveRGB text-2xl font-bold mb-4 text-white xl:text-3xl">
//             Background image not found!
//           </h1>
//           <Button variant="secondary" size="lg">
//             Explore Games
//           </Button>
//         </div>
//       </div>
//     ) : (
//       <div
//         className="bg-cover bg-center py-20 px-4 rounded-lg mb-8"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-4">Welcome to Store page</h2>
//           <p className="text-xl mb-8">
//             Discover the best games for your platform and preferences
//           </p>
//           <Button variant="secondary" size="lg">
//             Explore Games
//           </Button>
//         </div>
//       </div>
//     )
//   );
// };

// export default HeroSection;

const HeroSection = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "/assets/hero-background.jpg",
  );
  const [isImageError, setIsImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onerror = () => {
      setBackgroundImage("/assets/cover/UnderGo.png");
      setIsImageError(true);
    };
  }, []);

  return (
    <div
      className="bg-cover bg-center py-20 px-4 rounded-lg mb-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Store page</h2>
        <p className="text-xl mb-8">
          Discover the best games for your platform and preferences
        </p>
        {isImageError && (
          <h1 className="animate-waveRGB text-2xl font-bold mb-4 text-white xl:text-3xl">
            Background image not found!
          </h1>
        )}
        <Button variant="secondary" size="lg">
          Explore Games
        </Button>
      </div>
    </div>
  );
};
export default HeroSection;
