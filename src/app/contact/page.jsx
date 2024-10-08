"use client"; // Add this line to mark the component as a Client Component
import React from "react";

import ContactHeader from "./components/ContactHeader";
// import NavbarGame from "@/app/components/Navbar_game";
import ContactButton from "./components/ContactButton";
import ContactInput from "./components/ContactInput";
import ContactTextarea from "./components/ContactTextarea";

import { Mail, MessageSquare } from "lucide-react";

const contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <ContactHeader />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                Send a Message to Us
              </h3>
              <div className="flex items-center mb-4 text-blue-600">
                <MessageSquare className="h-6 w-6 mr-2" />
                <span>We'd love to hear from you!</span>
              </div>
              <p className="text-gray-600 mb-4">
                Have a question, suggestion, or just want to say hello? Use the
                form below to send us a message, and we'll get back to you as
                soon as possible.
              </p>
              <div className="flex items-center text-green-600">
                <Mail className="h-6 w-6 mr-2" />
                <span>support@gamestore.com</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
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
                <ContactButton type="submit" className="w-full">
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
