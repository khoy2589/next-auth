"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";

import IndexPage from "./index/Index_page";

const Index = () => {
  const { data: session, status } = useSession(); // Example of using useSession

  // You can add conditional rendering based on session status if needed
  status === "loading" ? console.log("loading...") : console.log("");

  session ? console.log(session) : console.log("no session");

  return (
    <div>
      <Navbar />
      <IndexPage />
    </div>
  );
};

export default Index; // Correct export syntax
