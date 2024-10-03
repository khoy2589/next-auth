"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import NavbarGame from "@/components/Navbar_game";
import { useSession } from "next-auth/react";

import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import GameFilter from "../components/GameFilter";
import PopularGames from "../components/PopularGames";
import RecommendedGames from "../components/RecommendedGames";

import GameList from "@assets/GameList.json";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const fetchGames = async () => {
  const response = await fetch("/assets/GameList.json"); // Correct URL path
  if (!response.ok) {
    throw new Error("Ops, i can't fetch games");
  }
  const data = await response.json();
  return data;
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
