import React from "react";
// import { useSession } from "next-auth/react";

import WelcomePage from "../welcome/page";

function Index_Page() {
  return (
    <div>
      <div>Welcome, {session.user?.name || "User"}!</div>
      <h1>Welcome to the Index Page</h1>
      <p>This is the main landing page of your application.</p>
      <WelcomePage />
    </div>
  );
}

export default Index_Page;
