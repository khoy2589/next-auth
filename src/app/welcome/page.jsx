"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import Link from "next/link";

import Image from "next/image";
import UnderGo from "../../../public/assets/undergo.png";
import default_avatar from "../../../public/assets/default_avatar.png";
import IndexPage from "../index/Index_page";

function WelcomePage() {
  const { data: session, status } = useSession();
  console.log(session);

  status === "loading" ? <li>"loading..."</li> : console.log("");

  !session ? redirect("/login") : IndexPage;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar session={session} />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-48 w-full object-cover md:w-48"
                src={session.user.image || default_avatar}
                alt={session.user.name}
                width={192}
                height={192}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Welcome back
              </div>
              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {session.user.name}
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-gray-500">
                We're glad to see you again! Here's what's new since your last
                visit:
              </p>
              <ul className="mt-6 list-disc list-inside space-y-2 text-gray-600">
                <li>New feature: Dark mode now available in settings</li>
                <li>Improved performance for large data sets</li>
                <li>Bug fixes and minor improvements</li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/store_pages/index"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  passHref
                >
                  Explore Store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
