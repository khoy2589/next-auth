import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PopularGames = ({ games }) => {
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Popular Games</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {games.slice(0, 4).map((game) => (
          <Card key={game.id}>
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
        ))}
      </div>
    </section>
  );
};

export default PopularGames;
