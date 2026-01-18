import React from 'react';
import Image from 'next/image';
import { Globe, User, LogIn, Menu, Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full relative z-[1000]">
      {/* Top Main Navigation Bar */}
      <div className="bg-white border-b border-[#DCDCDC] py-2 md:py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left: Mobile Menu & Event Info */}
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-[#4A2311]">
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-serif font-bold text-[#4A2311] text-[18px] leading-tight">Magha, Amavasya</span>
                <span className="text-[12px] text-[#666666] leading-none opacity-75">Anvadhan, Darsha Amavasya, Magha...</span>
              </div>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <a href="/" className="block">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/krishnayan-logo-16.webp"
                alt="Krishnayan Logo"
                className="h-[50px] md:h-[65px] lg:h-[72px] w-auto transition-all duration-300"
              />
            </a>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-3 md:gap-4 mr-2 md:mr-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-1">
                <Globe size={18} className="text-[#4A2311]" />
                <span className="hidden sm:inline text-[13px] font-bold text-[#4A2311] uppercase tracking-wider">HI</span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
                <User size={18} className="text-[#4A2311]" />
                <span className="absolute -top-1 -right-1 bg-[#800000] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">0</span>
              </button>
            </div>
            <a 
              href="#donate" 
              className="hidden md:block bg-white border-2 border-[#800000] text-[#800000] px-6 py-2.5 rounded-full font-bold text-[14px] hover:bg-[#800000] hover:text-white transition-all duration-300"
            >
              Donate Now
            </a>
            {/* Mobile Donate Button */}
            <a 
              href="#donate" 
              className="md:hidden bg-[#800000] text-white p-2.5 rounded-full"
            >
              <ShoppingCart size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Secondary Navigation Bar */}
      <nav className="sticky top-0 w-full bg-[#FFB340] shadow-md z-[999] overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between lg:justify-center lg:gap-8 py-2 md:py-3">
            {[
              "Sewa",
              "Other Services",
              "Recent Update",
              "Certificates",
              "Cause",
              "Videos",
              "Gallery",
              "Benefits",
              "How To Contribute",
              "Accreditations",
              "Highlights",
              "About Us",
              "Recent Donors"
            ].map((link) => (
              <li key={link} className="shrink-0 px-2 lg:px-0">
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[11px] md:text-[13px] font-bold text-[#4A2311] uppercase tracking-wide hover:text-[#800000] transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;