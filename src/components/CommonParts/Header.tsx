"use client";

import { AlignCenterHorizontal, AlignCenterIcon, Clock, Phone, X } from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";


const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

const [currentRoute, setCurrentRoute] = useState('Home')

  


  const Routes = [{
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },{
    name: 'Services',


  
    path: '/services'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]

  return (
    <div>
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between px-1 bg-secondary-200 p-3 text-white text-[15px]">
        <div className="flex justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <Clock size={15} className="text-secondary-100 font-bold" />
            <h1 className="font-medium">
              Working Hour: 08.00am - 09.00pm
            </h1>
          </div>
          |
          <div className="flex items-center gap-2">
            <Phone size={15} className="text-secondary-100 font-bold" />
            <h1 className="font-medium">Call Us: +91 1234567890</h1>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center gap-5">
            <FaFacebook size={20} className="text-white font-bold hover:text-secondary-100 transition duration-300 ease-in-out hover:scale-75" />
            <BsYoutube size={20} className="text-white font-bold" />
            <BsInstagram size={20} className="text-white font-bold" />
          </div>
          |
          <div className="flex items-center gap-1">
            <Phone size={20} className="text-secondary-100 font-bold" />
            <h1 className="font-medium">sojib@1gmail.com</h1>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center px-4 py-5">
        <div>
          <h1 className="text-2xl font-bold text-primary-100">Logo</h1>
        </div>
        
        <div className="flex gap-10 items-center text-[15px] font-medium">
            {Routes.map((route, index) => (
                <Link href={route.path} key={index}>
                   <h1
          
            className={`cursor-pointer relative group transition-all hover:text-primary-100`}
          >
            {route.name}
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-0 bg-primaryown group-hover:w-full group-hover:transition-all`}
              style={{
                transitionDuration: '0.5s',
               
              }}
            ></span>
          </h1>
                </Link>
            ))}
        
        </div>

        <button className="bg-primaryown px-14 py-3 font-medium rounded-full text-white hover:scale-90 transition-all">
          Contact us
        </button>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden justify-between px-4 py-3 bg-secondary-200 text-white">
  <div>
    <h1 className="text-2xl font-bold text-primary-100">Logo</h1>
  </div>
  <button
    className="text-white focus:outline-none"
    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
  >
    {isMobileMenuOpen ? (
      <AlignCenterIcon
        className="transform rotate-90"
        size={24}/>
    ) : (
      <AlignCenterIcon
        size={24}
        
      />
    )}
  </button>
</div>


      {/* Mobile Menu with Slide-in Animation */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-secondary-200 pl-5 text-white z-50 transform transition-transform duration-700 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between px-4 py-3">
          <h1 className="text-2xl font-bold text-primary-100">Logo</h1>
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-4 px-4 items-start text-[15px] font-medium">
            {Routes.map((route, index) => (
                <Link href={route.path} key={index}>
                <h1 className="cursor-pointer hover:text-primary-100 transition-all">
                    {route.name}
                </h1>
                </Link>
            ))}
        </div>
        <button className="bg-primaryown mt-4 px-6 py-2 font-medium rounded-full text-white hover:scale-90 transition-all">
          Contact us
        </button>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;
