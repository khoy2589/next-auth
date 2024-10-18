"use client";
// Dummy API By MrChimKy

import React, { useEffect } from "react";
import Typed from "typed.js"; // Ensure you have the typed.js library installed
import NavbarGame from "../components/Navbar_game";

// Define the MyDetails component
const MyDetails = () => {
  // Effect to initialize Typed.js after the component renders
  useEffect(() => {
    const typed = new Typed("#typing", {
      strings: ["Welcome to My Details page", "Let's get to know me better!"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    // Cleanup Typed.js instance when the component is unmounted
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="container mx-auto p-4">
      <NavbarGame />
      <nav className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
        <div className="navbar-logo">
          <img
            src="/public/mrchimky-mascot.png"
            alt="MrChimKy Mascot"
            className="h-12"
          />
        </div>
        <div className="navbar-content">
          <h2 className="text-xl font-bold">Hi</h2>
        </div>
        <div className="nav-link">
          <a href="#mrchimky" className="text-blue-500 hover:underline">
            เกี่ยวกับผม
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <section className="content mt-8">
        <div className="sect_1 shadow-lg p-4 bg-white rounded-lg">
          <span id="typing" className="text-2xl font-medium"></span>
        </div>
        <div className="sect_2 mt-4">
          <div className="shadow-lg flex justify-center bg-white rounded-lg p-4">
            <img
              src="/public/code_tutorial_1.png"
              alt="Code Preview 1"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Other sections */}
      {/* Add the remaining sections here as needed */}

      {/* Footer */}
      <footer className="footer mt-16 text-center text-gray-600">
        <p>2024 | Dummy API made with ❤️ by MrChimKy, MrChimKy Developments</p>
      </footer>
    </main>
  );
};

export default MyDetails;
