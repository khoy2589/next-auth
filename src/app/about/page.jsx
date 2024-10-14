import React from "react";
import Navbar_game from "@/app/components/Navbar_game";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/contact/components/Avatar";

const teamMembers = [
  {
    name: "Chanathip Khamchan",
    role: "CEO & Founder",
    image: "/placeholder.svg",
  },
  {
    name: "Chanathip Khamchan 2",
    role: "Lead Developer",
    image: "/placeholder.svg",
  },
  {
    name: "Chanathip Khamchan 3",
    role: "UX Designer",
    image: "/placeholder.svg",
  },
  {
    name: "Chanathip Khamchan 4",
    role: "Marketing Manager",
    image: "/placeholder.svg",
  },
];

const about = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar_game />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About GameStore</h1>

        {/* Mission and Vision */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to provide the best gaming experience through
            intuitive designs and innovative technology. We strive to connect
            gamers with their perfect games, fostering a community of passionate
            players.
          </p>
        </section>

        {/* Company Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Founded in 2020, GameStore started as a small passion project by a
            group of avid gamers. We've since grown into a leading online
            destination for game enthusiasts, with over 1 million happy
            customers.
          </p>
          <p className="text-lg">
            Our journey has been marked by continuous innovation, from launching
            our first mobile app in 2021 to introducing our revolutionary game
            recommendation engine in 2022.
          </p>
        </section>

        {/* Values and Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Customer-Centric Approach</li>
            <li>Innovation in Gaming Technology</li>
            <li>Inclusivity and Diversity in Gaming</li>
            <li>Commitment to Quality</li>
            <li>Fostering Gaming Communities</li>
          </ul>
        </section>

        {/* Team Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            What Our Customers Say
          </h2>
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <p className="text-lg italic mb-4">
                &quot;GameStore has revolutionized how I discover and purchase
                games. Their recommendation engine is spot-on!&quot;
              </p>
              <p className="text-right font-semibold">
                - Alex G., Loyal Customer
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Start Your Gaming Journey?
          </h2>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Explore Our Games
          </Button>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            Have questions? We'd love to hear from you!
          </p>
          <Button variant="outline" size="lg" className="bg-white">
            Contact Us
          </Button>
        </section>
      </main>
    </div>
  );
};

export default about;
