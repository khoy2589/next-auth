"use client";

import { useSession } from "next-auth/react";
import IndexPage from "./indexpage/Index_page";
import Typed from "typed.js";
import Alert from "@mui/material/Alert";
import Link from "next/link";

const Index = () => {
  const { data: session, status } = useSession();

  session ? console.log(session) : console.log("no session");

  // You can add conditional rendering based on session status if needed
  status === "loading" ? console.log("loading...") : console.log("");

  return (
    <div>
      <IndexPage />
    </div>
  );
};

export default Index;
