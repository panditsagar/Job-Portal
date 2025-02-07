import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-10 border-t border-gray-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold   text-[#6A38C2]">JobPortal</h2>
            <p className="mt-2 text-sm">Find your dream job with us.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-2 space-y-2 cursor-pointer">
              <li>
                <a className="hover:text-[#6A38C2]">Home</a>
              </li>
              <li>
                <a className="hover:text-[#6A38C2]">Jobs</a>
              </li>
              <li>
                <a className="hover:text-[#6A38C2]">About</a>
              </li>
              <li>
                <a className="hover:text-[#6A38C2]">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                className="text-gray-600 hover:text-[#6A38C2]"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 hover:text-[#6A38C2]"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://Linkedincom"
                className="text-gray-600 hover:text-[#6A38C2]"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-600 hover:text-[#6A38C2]"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm border-t border-gray-300 pt-4">
          © {new Date().getFullYear()} JobPortal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
