import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Slider from "react-slick/lib/slider";

const RecommendedGames = ({ games }) => {
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
    <section>
      <h3 className="text-2xl font-semibold mb-4">Recommended for You</h3>

      {/* Slick Slider */}
      <Slider {...settings}>
        {games.map((game) => (
          <div key={game.id} className="px-2">
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

export default RecommendedGames;
