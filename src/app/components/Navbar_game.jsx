"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";

function NavbarGame() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const isFirstRun = localStorage.getItem("isFirstRun");
    if (!isFirstRun) {
      localStorage.setItem("isFirstRun", "true");
      sessionStorage.clear();
    }
  }, [session, router]);

  let navLinks;
  if (status === "loading") {
    navLinks = <li className="mx-3">Loading your data...</li>;
  } else if (!session) {
    navLinks = (
      <>
        <li className="mx-3">
          <Link href="/login">
            <Button className="bg-orange-400 text-white py-2 px-3 rounded-md text-lg my-2 cursor-pointer">
              Sign In
            </Button>
          </Link>
        </li>
        <li className="mx-3">
          <Link href="/register">
            <Button className="bg-green-500 text-white py-2 px-3 rounded-md text-lg my-2 cursor-pointer">
              Sign Up
            </Button>
          </Link>
        </li>
      </>
    );
  } else {
    const name = session.user?.name || "User";
    navLinks = (
      <>
        <li className="mx-3">
          <Link href="/welcome">
            <Button className="bg-gradient-to-r from-gray-800 via-gray-700 to-orange-500 text-white py-2 px-6 rounded-md flex items-center">
              <span className="font-bold">{name}</span>
              <span className="ml-3">
                <User className="w-5 h-5" />
              </span>
            </Button>
          </Link>
        </li>
        <li className="mx-3">
          <Button
            onClick={() => {
              sessionStorage.clear();
              signOut({ callbackUrl: "/" });
            }}
            className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-2 px-3 rounded-md cursor-pointer"
          >
            Logout
          </Button>
        </li>
      </>
    );
  }

  // Pathname to display name mapping
  const pathNameMap = {
    "/": "Home Page",
    "/games": "Games",
    "/about": "About Us",
    "/contact": "contact",
    "/login": "Login",
    "/register": "Register",
    "/welcome": "Welcome",
  };

  const pageName =
    pathNameMap[pathname] ||
    pathname.charAt(1).toUpperCase() + pathname.slice(2);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-1 py-2 flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold">GameStore</h1>
          </Link>
          <p className="text-sm">Current Page: {pageName}</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Games
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <ShoppingCart className="h-6 w-6 cursor-pointer" />
          <ul className="flex">{navLinks}</ul>
        </div>
      </div>
    </header>
  );
}

export default NavbarGame;
