"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";

const Index_page = () => {
  const { data: session, status } = useSession(); // Example of using useSession

  // You can add conditional rendering based on session status if needed
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return (
      <>
        {/* <Navbar /> */}
        <div>Please log in to access the content.</div>
      </>
    );
  }

  return (
    <>
      <div>Welcome, {session.user?.name || "User"}!</div>
      <div>This is the main content for authenticated users.</div>
    </>
  );
};

export default Index_page; // Correct export syntax
