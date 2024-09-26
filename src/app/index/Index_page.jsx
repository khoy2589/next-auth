"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";

const IndexPage = () => {
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
      <div>This is the Index page</div>
    </>
  );
};

export default IndexPage; // Correct export syntax
