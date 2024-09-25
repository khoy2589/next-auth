"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

function Navbar() {
  let navLinks;
  const pathname = usePathname(); // Get current page name
  const { data: session, status } = useSession();

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
            <Button className="bg-grey-500 text-white border py-2 px-3 rounded-md text-lg my-2 cursor-pointer">
              Profile
            </Button>
          </Link>
        </li>

        <li className="mx-3">
          <Button
            onClick={() => signOut({ callbackUrl: "/" })} // Optional: redirect after logout
            className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2 cursor-pointer hover:bg-red-600 transition-colors"
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
            <p className="text-l">Current Page: {pageName}</p>{" "}
            {/* Display current page name */}
          </div>
          <ul className="flex">{navLinks}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
