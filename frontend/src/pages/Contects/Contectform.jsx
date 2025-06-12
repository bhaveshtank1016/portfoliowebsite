import React from "react";
import LocationCard from "./Locationcard";

function Contectform() {
  return (
    // Send Us a Message
    <div className="  flex flex-col lg:flex-row gap-12">
      <div className="lg:w-2/2 mt-10  ">
        <div className="bg-neutral-800 rounded-2xl p-8 shadow-lg  h-full ">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-1">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 text-white p-2 rounded-md"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Your Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800 text-white p-2 rounded-md"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1">Phone Number</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 text-white p-2 rounded-md"
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 text-white p-2 rounded-md"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1">Your Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-gray-800 text-white p-2 rounded-md"
                  placeholder="Please describe your project or inquiry..."
                />
              </div>
               <div className="flex items-center gap-2">
          <input type="checkbox" id="consent" className="accent-pink-500" />
          <label htmlFor="consent" className="text-sm w-full text-gray-300">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
        </div>
        
            </div>
             <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 text-white font-semibold py-3 rounded-md transition duration-300">
          Send Message
        </button>
          </form>
        </div>
          
      </div>
      <LocationCard/>
    </div>
  );
}

export default Contectform;
