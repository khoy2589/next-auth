"use client"; // Add this line to mark the component as a Client Component
import React, { useState } from "react";

import NavbarGame from "@/app/components/Navbar_game";
import ContactButton from "./components/ContactButton";
import ContactInput from "./components/ContactInput";
import ContactTextarea from "./components/ContactTextarea";

import { Mail, MessageSquare, MessageSquareText } from "lucide-react";

import Link from "next/link";

const contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarGame />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                Send a Message to Me
              </h3>
              <a
                href="https://www.facebook.com/TaleNoTale/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-center mb-4 text-blue-600 ">
                  {isHovered ? (
                    <MessageSquareText className="MessageSquare animate-bounce" />
                  ) : (
                    <MessageSquare className="MessageSquare" />
                  )}
                  <span>I'd love to hear from you!</span>
                </div>
              </a>
              <p className="text-gray-600 mb-4">
                Have a question, suggestion, or just want to say hello? Use the
                form below to send us a message, and we'll get back to you as
                soon as possible.
              </p>

              <div className="flex items-center text-green-600">
                <Mail className="h-6 w-6 mr-2" />
                <span>6431503131@lamduan.mfu.ac.th</span>
              </div>
            </div>
            <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
              {/* <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-center mb-4 text-blue-600 ">
                  {isHovered ? (
                    <MessageSquareText className="h-6 w-6 mr-2 transition-all duration-300 transform hover:scale-110 animate-bounce" />
                  ) : (
                    <MessageSquare className="h-6 mr-2 transition-all duration-300 transform hover:scale-110" />
                  )}
                  <span>I'd love to hear from you!</span>
                </div>
              </a> */}

              <Link href="/mydetails" className="hover:text-gray-300">
                My Details
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 ">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <ContactInput
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <ContactInput
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <ContactTextarea
                    id="message"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                <ContactButton
                  type="submit"
                  className="w-full bg-blue-700 text-white py-2 px-3 rounded-md text-lg my-2 cursor-pointer"
                >
                  Send Message
                </ContactButton>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default contact;
