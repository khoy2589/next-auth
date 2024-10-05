import React from "react";
import Navbar_game from "@/app/components/Navbar_game";
import { ShoppingCart, User } from "lucide-react";

import Link from "next/link";

const ContactHeader = () => {
  return (
    <Navbar_game />
    // <header className="bg-gray-800 text-white">
    //   <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    //     <div>
    //       <Link href="/">
    //         <h1 className="text-2xl font-bold">GameStore</h1>
    //       </Link>
    //       <p className="text-sm">Current Page: {ContactHeader}</p>
    //     </div>

    //     <nav>
    //       <ul className="flex space-x-4">
    //         <li>
    //           <Link href="/" className="hover:text-gray-300">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/contracts" className="hover:text-gray-300">
    //             Contracts
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/contact" className="hover:text-gray-300">
    //             Contact
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/games" className="hover:text-gray-300">
    //             Games
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/about" className="hover:text-gray-300">
    //             About
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
};

export default ContactHeader;
