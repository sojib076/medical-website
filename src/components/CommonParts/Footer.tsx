import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 lg:px-10  ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      
        <div>
          <div className="flex items-center mb-4">
        
            <h2 className="text-xl font-bold">Medicial website</h2>
          </div>
          <p>5M+ Satisfied Clients</p>
          <div className="mt-4">
            <label className="text-sm font-semibold" htmlFor="subscribe">
              Subscribe:
            </label>
            <div className="flex mt-2">
              <input
                type="email"
                id="subscribe"
                placeholder="Enter Your Email"
                className="px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 border-none outline-none"
              />
              <button className="px-4 py-2 bg-green-600 rounded-r-md hover:bg-green-700">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm mb-4">
            It is a long established fact that the read will been distracted by
            there readable an important content.
          </p>
          <p className="text-sm font-semibold">Find Us On:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Department
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Doctors
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                FAQ’s
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="text-sm">
            <p className="mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i> Obere Haltenstrasse,
              Lugaggia, Switzerland - 6953
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope mr-2"></i> 
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope mr-2"></i> S@fadsgmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-2"></i> +410 123 456 789
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy;  Sojib Das 
        </p>
        <a href="#" className="text-gray-400 hover:text-white mt-2 inline-block">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
