"use client";

import React from "react";
// import Navbar from "../components/Navbar";
import NavbarGame from "../components/Navbar_game";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import Link from "next/link";

import Image from "next/image";
// import UnderGo from "../../../public/assets/cover/undergo.png";
import default_avatar from "../../../public/assets/default_avatar.png";
import IndexPage from "../indexpage/Index_page";

function WelcomePage() {
  const { data: session, status } = useSession();
  console.log(session);

  //   const { data: session, status } = useSession();

  //   if (status === "loading") {
  //     return <div>Loading...</div>;
  //   }

  //   if (status === "unauthenticated") {
  //     return (
  //       <>
  //         {/* <Navbar /> */}
  //         <div>Please log in to access the content.</div>
  //       </>
  //     );
  //   }
  status === "loading" ? (
    <>loading...</>
  ) : (
    <>Please log in to access the content.</>
  );

  /* <div>Welcome, {session.user?.name || "User"}!</div> */

  /* <h1>Welcome to the Index Page</h1>
      <p>This is the main landing page of your application.</p> */
  !session ? redirect("/login") : IndexPage;

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarGame session={session} />
      <div className="container mx-auto  py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex place-items-center">
            <div className="md:flex-shrink-0">
              <Image
                className="pl-4 h-48 w-full object-cover md:w-48"
                src={session.user.image || default_avatar}
                alt={session.user.name}
                width={192}
                height={192}
              />
            </div>
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Welcome back!
              </div>
              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {session.user.name}
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-gray-500">
                We're glad to see you again! Here's what's new since your last
                visit:
              </p>
              <ul className="mt-6 list-disc list-inside space-y-2 text-gray-600">
                <li>สวัสดีครับ พี่ชาย</li>
                <li>ปวดหัวกับโครงสร้างเว็บนี้จังครับ</li>
                <li>บักเยอะกว่าโค้ดอีกครับ</li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  passHref
                >
                  สำรวจร้านค้า
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
