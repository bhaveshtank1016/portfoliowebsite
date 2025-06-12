import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationCard() {
  return (
    <div className="bg-neutral-700 rounded-2xl p-12 text-center shadow-xl relative overflow-hidden md:hidden min-h-[250px] flex flex-col justify-center items-center">
      
      {/* Optional decorative background pattern (fake blocks) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10" />

      {/* Icon */}
      <div className="relative z-10 bg-blue-400/20 p-4 rounded-full mb-4">
        <FaMapMarkerAlt className="text-blue-500 text-3xl" />
      </div>

      {/* Text */}
      <div className="relative z-10">
        <h2 className="text-white text-2xl font-bold mb-2">Our Location</h2>
        <p className="text-gray-400 text-md">Delhi, India</p>
      </div>
    </div>
  );
}
