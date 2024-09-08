"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <Navbar session={session} />
      <div className="container mx-auto">
        <h3>Welcome to home page</h3>
        <hr className="my-3" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          tenetur odit, sapiente blanditiis consectetur velit, molestiae quidem
          voluptate dignissimos non nihil adipisci obcaecati cupiditate unde
          facere. Optio aliquam provident nostrum.
        </p>
      </div>
    </main>
  );
}
