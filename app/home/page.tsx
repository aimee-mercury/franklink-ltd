"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "../nav/page";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/relo.png",
    "/hrent.jpeg",
    "/chouffer.jpeg",
    "/rel.jpeg",
  ]; 

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <Nav />
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center mt-12 lg:mt-24 px-8 animate-bounce-in mt-20">
        <h1 className="text-5xl font-extrabold mt-8">Welcome to Franklink</h1>
        <p className="mt-4 text-lg max-w-xl">
          Experience luxury, reliability, and professionalism. Our services
          ensure you arrive stress-free and in style.
        </p>
        <div className="mt-6 space-x-4">
          <Link href="#Services">
            <button className="bg-blue-500 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform">
              Explore Services
            </button>
          </Link>
        
        </div>
      </main>

      {/* About Section */}
      <section
        id="About"
        className="py-12 px-8 text-center bg-white/80 text-gray-800 rounded-lg shadow-lg mx-6 mt-12 animate-fade-in-up"
      >
        {/* Sliding Images */}
        <div className="relative">
          <div className="w-full h-auto">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={400}
              height={200} 
              className="mx-auto rounded-lg"
            />
          </div>

          {/* Dots for Navigation */}
          <div className="flex justify-center space-x-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* About Us Text */}
        <h2 className="text-4xl font-bold mt-6">About Us</h2>
        <p className="text-lg max-w-4xl mx-auto mt-4">
          Franklink Limited is dedicated to simplifying your life. Whether you
          need a chauffeur, relocation assistance, or rental services, we provide
          exceptional quality tailored to your needs.
        </p>
      </section>

      {/* Services Section */}
      <section
        id="Services"
        className="py-12 px-8 mt-12 bg-transparent text-white text-center animate-fade-in-up"
      >
        <h2 className="text-4xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Service 1 */}
          <div className="bg-purple-700/80 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="font-semibold text-lg mt-4">Chauffeur (Umusare)</h3>
            <p className="mt-2">
              Our chauffeur service provides luxury, reliability, privacy,
              punctuality, and professionalism. It ensures you arrive stress-free.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-purple-700/80 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="font-semibold text-lg mt-4">Relocation Assistant</h3>
            <p className="mt-2">
              We assist in simplifying your relocation needs and preferences of
              essential services such as home-finding, transportation, household,
              and more to ease your transition.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-purple-700/80 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="font-semibold text-lg mt-4">Cars & Houses for Rent</h3>
            <p className="mt-2">
              We help our clients find long-term and short-term accommodation and
              vehicles for rent based on their preferences. Long & short-term.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="Contact"
        className="py-12 bg-gradient-to-r from-purple-800 via-indigo-700 to-pink-600 text-white mt-12"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20 px-6">
          {/* About */}
          <div className="w-full md:w-1/4 flex flex-col items-center">
            <Image src="/blu.png" alt="Logo" width={80} height={80} />
            <h2 className="text-2xl font-bold mt-4">Franklink Limited</h2>
            <p className="text-sm leading-relaxed text-center mt-2">
              Your trusted partner for simplified living.
            </p>
          </div>

          <div className="max-w-7xl mx-auto text-center px-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Contact Us to Know More</h2>
            <p className="text-lg font-medium mb-4 ">Get in touch with us for more information!</p>
            <div className="flex justify-center gap-10">
              <div className="text-md">
                <p className="text-white">+250 798 977 017</p>
                <p className="text-white">franklink2026@gmail.com</p>
                <p className="text-white">+250 783 490 189</p>
              </div>
            </div>
          </div>
    
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#Services">Services</Link>
              </li>
              <li>
                <Link href="#About">About</Link>
              </li>
              <li>
                <Link href="#Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          © 2024 Franklink Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
