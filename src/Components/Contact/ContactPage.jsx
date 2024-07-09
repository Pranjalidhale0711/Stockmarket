import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Footer from '../../Utilis/Footer/Footer';
import Navbar from '../../Utilis/Navbar/Navbar';

function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
        <h1 className="text-[#111a6f] font-extrabold text-5xl text-center mb-8">How can we help you?</h1>
        <div className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</div>
        <div className="text-lg text-[#7743DB] mb-6 text-center max-w-md">
          We are here to help and answer any questions you have
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-black mr-2" />
            <span className="text-lg font-bold bg-gray-100">Avadhut Plaza, Baramati, Pune</span>
          </div>
          <div className="flex items-center">
            <SiGmail className="text-black mr-2" />
            <a href="mailto:dhalepranjali07@gmail.com" className="text-lg font-bold">
              dhalepranjali07@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
