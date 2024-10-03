"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Navbar_game from "@/components/Navbar_game";
import { useSession } from "next-auth/react";

import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import GameFilter from "../components/GameFilter";
import PopularGames from "../components/PopularGames";
import RecommendedGames from "../components/RecommendedGames";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
  if (error) return <div>Error fetching games</div>;

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar_game />
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
          <GameFilter />
          <PopularGames games={games} />
          <RecommendedGames games={games} />
        </main>
      </div>
    </>
  );
};

export default IndexPage; // Correct export syntax
