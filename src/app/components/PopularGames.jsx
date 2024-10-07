import React from "react";
import Slider from "react-slick";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularGames = ({ games }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Popular Games</h3>
      {/* Slick Slider */}
      <Slider {...settings}>
        {games.map((game) => (
          <div key={game.id} className="px-2">
            {/* Padding here simulates gap  */}
            <Card>
              <CardContent className="p-4">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <h4 className="font-semibold">{game.title}</h4>
                <div className="flex justify-between items-center mt-2">
                  <Badge>{game.genre}</Badge>
                  <span className="font-bold">${game.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Badge variant="outline">{game.ageRating}</Badge>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PopularGames;
