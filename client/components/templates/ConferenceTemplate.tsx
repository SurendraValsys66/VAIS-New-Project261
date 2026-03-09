import React from "react";
import { Button } from "@/components/ui/button";
import { Layout, Calendar, Clock, MapPin, Users, Ticket } from "lucide-react";

export const ConferenceTemplate: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4f9fe383bdce4fd2b2b0bd5b6244ee81%2F4530b443ade54618a314c39026239da4?format=webp&width=800&height=1200"
            alt="Conference Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A1A7]/60 to-[#E99E9E]/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl text-white space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            Online Marketing Conference
          </h1>
          <div className="space-y-2 uppercase tracking-widest text-sm md:text-base font-medium">
            <p>LEARN MORE ABOUT INTERNET MARKETING IN LONDON,</p>
            <p className="text-2xl md:text-3xl font-bold">26 - 28 NOV, 2021</p>
          </div>
          <button className="mt-8 px-8 py-3 bg-white text-gray-800 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg">
            Register Now!
          </button>
        </div>
      </section>

      {/* Section 1: Fresh Perspective */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Get a fresh perspective</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Listen to over 10 speakers that have made it in the digital world
              of marketing, attend over 100 scheduled workshops and get the
              tools, insights and inspiration you need to take your marketing to
              the next level.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4f9fe383bdce4fd2b2b0bd5b6244ee81%2F5666827e0aca4b688472211ea84758d3?format=webp&width=800&height=1200"
              alt="Fresh Perspective"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Folsom Street */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold">Folsom Street,</h3>
              <h3 className="text-2xl font-bold">San Francisco</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                San Francisco is the center of the online world, so we're able to
                bring in the best speakers in the industry at the same time, a
                unique chance!
              </p>
            </div>
            <div className="w-full md:w-64 aspect-video rounded-lg overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4f9fe383bdce4fd2b2b0bd5b6244ee81%2Fe376ac9a9d904f59b4afb08625710801?format=webp&width=800&height=1200"
                alt="San Francisco"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold">August 20th.</h3>
              <h3 className="text-2xl font-bold">2021 - Be there!</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Each year we're gathering to share ideas worth sharing. Be there
                if you're a B2B marketer who wants to learn more about the world
                of online marketing.
              </p>
            </div>
            <div className="w-full md:w-64 aspect-video rounded-lg overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F4f9fe383bdce4fd2b2b0bd5b6244ee81%2Fe376ac9a9d904f59b4afb08625710801?format=webp&width=800&height=1200"
                alt="August 20th"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="bg-[#009BA5] py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 items-center opacity-80">
          <div className="flex items-center gap-2 font-bold text-sm">
            <div className="w-4 h-4 bg-white transform rotate-45" />
            The Amazing Company
          </div>
          <div className="flex items-center gap-2 font-bold text-sm">
            <Users className="w-5 h-5" />
            The Wonderful Company
          </div>
          <div className="flex items-center gap-2 font-bold text-sm">
            <Layout className="w-5 h-5" />
            The Awesome Company
          </div>
          <div className="flex items-center gap-2 font-bold text-sm">
            <MapPin className="w-5 h-5" />
            The Incredible Company
          </div>
        </div>
      </section>

      {/* Section: Speakers */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Our Speakers</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Listen to over 10 speakers that have made it in the digital world
              of marketing, attend over 100 scheduled workshops and get the
              tools, insights and inspiration you need to take your marketing to
              the next level.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {/* Speaker Card: John Mac */}
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4f9fe383bdce4fd2b2b0bd5b6244ee81%2F57d998cefdf04a988d7a3e435c6d26e0?format=webp&width=800&height=1200"
                  alt="John Mac"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#009BA5]/90 p-4 text-white">
                  <h4 className="font-bold text-sm">John Mac</h4>
                  <p className="text-[10px] opacity-80">Web Company</p>
                </div>
              </div>

              {/* Speaker Card: Marry Deo */}
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4f9fe383bdce4fd2b2b0bd5b6244ee81%2Fb96689ff0e8b44f0bb3739e35fee7f9e?format=webp&width=800&height=1200"
                  alt="Marry Deo"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#E99E9E]/90 p-4 text-white">
                  <h4 className="font-bold text-sm">Marry Deo</h4>
                  <p className="text-[10px] opacity-80">Web Company</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-4">
              {/* Speaker Card: Richard */}
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4f9fe383bdce4fd2b2b0bd5b6244ee81%2F57d998cefdf04a988d7a3e435c6d26e0?format=webp&width=800&height=1200"
                  alt="Richard"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#009BA5]/90 p-4 text-white">
                  <h4 className="font-bold text-sm">Richard</h4>
                  <p className="text-[10px] opacity-80">CEO</p>
                </div>
              </div>

              {/* Speaker Card: David Mark */}
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4f9fe383bdce4fd2b2b0bd5b6244ee81%2F57d998cefdf04a988d7a3e435c6d26e0?format=webp&width=800&height=1200"
                  alt="David Mark"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#E99E9E]/90 p-4 text-white">
                  <h4 className="font-bold text-sm">David Mark</h4>
                  <p className="text-[10px] opacity-80">Newsletter</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">August 20th.</h3>
                <h3 className="text-2xl font-bold">2018 - Be there!</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Each year we're gathering to share ideas worth sharing. Be there
                  if you're a B2B marketer who wants to learn more about the world
                  of online marketing.
                </p>
              </div>
              <div className="w-full md:w-64 aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4f9fe383bdce4fd2b2b0bd5b6244ee81%2Fe376ac9a9d904f59b4afb08625710801?format=webp&width=800&height=1200"
                  alt="August 2018"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4f9fe383bdce4fd2b2b0bd5b6244ee81%2Fda738765c7dd4548bc6cf97df2134c5c?format=webp&width=800&height=1200"
            alt="Footer Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00A1A7]/80 to-[#E99E9E]/80 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-2xl text-white space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What are you waiting for?
          </h2>
          <p className="text-xs md:text-sm font-medium tracking-wide">
            Save your spot and get to learn more about online marketing.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-gray-800 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg">
            Register Now!
          </button>
        </div>
      </section>
    </div>
  );
};
