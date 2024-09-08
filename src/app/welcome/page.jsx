"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function WelcomePage() {
  const { data: session } = useSession();
  console.log(session);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <Navbar session={session} />
      <div className="container mx-auto ">
        <h3 className="text-3xl my-3">Welcome {session?.user?.name}</h3>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus eum iure, error ullam nam fuga corrupti. Iste tempore
          quidem aut, ullam illo velit? Laborum aliquid minima facere
          dignissimos nulla qui cupiditate, dolore mollitia dolor molestias
          voluptatum architecto rerum explicabo iure, dicta neque alias
          similique maxime? Perspiciatis in id, veritatis eveniet officia facere
          aliquam sunt quibusdam voluptates a. Officia provident et aut vitae
          perspiciatis repellat consectetur magnam quae, rerum, fuga obcaecati,
          exercitationem odio sed debitis doloremque. Nobis maiores vitae, et
          quo illum beatae optio soluta pariatur quidem cumque ipsum quisquam!
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
