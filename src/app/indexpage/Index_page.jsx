"use client";

// import Image from "next/image";
// import Navbar from "@/components/Navbar";
import NavbarGame from "@/components/Navbar_game";
import { useSession } from "next-auth/react";

import React, { useState, useEffect } from "react";

// import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import GameFilter from "../components/GameFilter";
import PopularGames from "../components/PopularGames";
import RecommendedGames from "../components/RecommendedGames";

import GameList from "@assets/GameList.json";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();

const fetchGames = async () => {
  const response = await fetch("/assets/GameList.json"); // Correct URL path
  if (!response.ok) {
    throw new Error("Ops!, i can't fetch any items!");
  }

  const data = await response.json();

  // Set a default image path if no image is provided
  const updatedData = data.map((game) => ({
    ...game,
    image: game.image ? game.image : "/assets/cover/UnderGo.png",
    id: game.id ? game.id : 0,
    title: game.title ? game.title : "Undefined title",
    ageRating: game.ageRating ? game.ageRating : "Undefined age rating",
    price: game.price ? game.price : 0,
    genre: game.genre ? game.genre : "Undefined genre",
  }));

  return updatedData;
};

const IndexPage = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGames = async () => {
      try {
        const data = await fetchGames();
        setGames(data);
      } catch (err) {
        setError("Error fetching games");
      } finally {
        setIsLoading(false);
      }
    };
    getGames();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Defect! : {error}</div>;

  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <NavbarGame />
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
          <GameFilter />
          <PopularGames games={games} />
          <RecommendedGames games={games} />
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
