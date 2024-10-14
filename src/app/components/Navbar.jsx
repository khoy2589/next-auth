"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import LoginPage from "../login/page";

function Navbar() {
  let navLinks;
  const pathname = usePathname(); // Get current page name
  const { data: session, status } = useSession();
  const router = useRouter();

  // Function to clear session history on first run
  useEffect(() => {
    const isFirstRun = localStorage.getItem("isFirstRun");
    if (!isFirstRun) {
      localStorage.setItem("isFirstRun", "true");
      sessionStorage.clear();
    }
  }, [session, router]);

  if (status === "loading") {
    navLinks = <li className="mx-3">Loading...</li>;
  } else if (!session) {
    navLinks = (
      <>
        <li className="mx-3">
          <Link href="/login">
            <Button className="bg-grey-500 text-white bg-orange-400 border py-2 px-3 rounded-md text-lg my-2 cursor-pointer">
              Sign In
            </Button>
          </Link>
        </li>
        <li className="mx-3">
          <Link href="/register">
            <Button className="bg-grey-500 text-white bg-green-500 border py-2 px-3 rounded-md text-lg my-2 cursor-pointer">
              Sign Up
            </Button>
          </Link>
        </li>
      </>
    );
  } else {
    const name = session.user?.name || "User"; // Get the user's name
    navLinks = (
      <>
        <li className="mx-3">
          <Link href="/welcome">
            <Button className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-orange-500 text-white border-none border-gray-600 py-2 px-6 rounded-md text-lg my-2 cursor-pointer transition-all duration-300 hover:from-orange-600 hover:via-gray-700 hover:to-gray-800 flex items-center justify-between">
              {/* Profile name */}
              <span className="font-bold tracking-wide">{name}</span>

              {/* Icon positioned to the right */}
              <span className="ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5"
                >
                  <path d="M1 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9zm10-7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2zM3 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3z" />
                </svg>
              </span>
            </Button>
          </Link>
        </li>

        <li className="mx-3">
          <Button
            onClick={() => signOut({ callbackUrl: "/" })} // Optional: redirect after logout
            className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white border-none py-2 px-3 rounded-md text-lg my-2 cursor-pointer hover:from-red-800 hover:via-red-700 hover:to-red-600 transition-colors"
            aria-label="Logout"
          >
            Logout
          </Button>
        </li>
      </>
    );
  }

  const pageName =
    pathname === "/"
      ? "Home"
      : pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2);

  return (
    <nav className="bg-[#333] text-white p-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <h1 className="text-3xl font-bold">This is Navbar</h1>
            </Link>
            <span className="ml-4 text-sm font-medium text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
              Current Page: {pageName}
            </span>
            {/* Display current page name */}
          </div>
          <ul className="flex">{navLinks}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
