import React from "react";
import { Slider } from "../components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

// Function to fetch games based on filters
const fetchGames = async (filters) => {
  const { genre, ageRating, mode, priceRange } = filters;
  const response = await fetch(
    `/api/games?genre=${genre}&ageRating=${ageRating}&mode=${mode}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`,
  );
  if (!response.ok) {
    throw new Error("Network response was not doing well!");
  }
  return response.json();
};

const GameFilter = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-2xl font-semibold mb-4">Find Your Perfect Game</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-md font-medium text-gray-700 mb-1">
            Genre
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select genre" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Genres</SelectItem>
              <SelectItem value="action">Action</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="rpg">RPG</SelectItem>
              <SelectItem value="strategy">Strategy</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-md font-medium text-gray-700 mb-1">
            Age Rating
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select age rating" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Ages</SelectItem>
              <SelectItem value="e">E (Everyone)</SelectItem>
              <SelectItem value="t">T (Teen)</SelectItem>
              <SelectItem value="m">M (Mature)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className=" block text-md font-medium text-gray-700 mb-1">
            Mode
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select mode" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Modes</SelectItem>
              <SelectItem value="single">Single Player</SelectItem>
              <SelectItem value="multi">Multiplayer</SelectItem>
              <SelectItem value="coop">Co-op</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-md font-medium text-gray-700 mb-4">
            Price Range
          </label>
          <Slider
            className="px-4 "
            defaultValue={[0, 100]}
            max={100}
            step={1}
          />
        </div>
      </div>
    </div>
  );
};

export default GameFilter;
