import React from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "../app/components/Header";
import HeroSection from "../app/components/HeroSection";
import GameFilter from "../app/components/GameFilter";
import PopularGames from "../app/components/PopularGames";
import RecommendedGames from "../app/components/RecommendedGames";

const fetchGames = async () => {
  // This is a mock API call. In a real application, you'd fetch from your backend.
  return [
    {
      id: 1,
      title: "Cyberpunk 2077",
      genre: "RPG",
      ageRating: "M",
      price: 59.99,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "The Legend of Zelda: Breath of the Wild",
      genre: "Adventure",
      ageRating: "E10+",
      price: 59.99,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "FIFA 23",
      genre: "Sports",
      ageRating: "E",
      price: 49.99,
      image: "/placeholder.svg",
    },
    // Add more game objects as needed
  ];
};
const Index = () => {
  const {
    data: games,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching games</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <GameFilter />
        <PopularGames games={games} />
        <RecommendedGames games={games} />
      </main>
    </div>
  );
};

export default Index;
