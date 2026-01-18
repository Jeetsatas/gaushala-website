import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube, Send, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

/**
 * Footer Component
 * 
 * Clones the dark themed footer with newsletter subscription, 
 * about section, quick links, and contact information.
 */
const Footer = () => {
  return (
    <footer className="bg-[#2D1A12] text-white font-sans overflow-hidden">
      {/* Newsletter Subscription Bar */}
      <div className="border-b border-white/10 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Subscribe To Our Newsletter</h3>
              <p className="text-white/70 text-sm md:text-base">Regular inspections and feedback mechanisms</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full sm:w-[400px]">
                <input 
                  type="email" 
                  placeholder="*Email" 
                  className="w-full h-12 px-6 rounded-full bg-white text-black text-sm outline-none placeholder:text-gray-400"
                />
              </div>
              <button className="bg-[#800000] hover:bg-[#660000] transition-colors w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                <Send size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* About Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-white uppercase tracking-tight">Krishnayan</h2>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                Our secure online donation platform allows you to make contributions quickly and safely. Choose from various.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FFB340] hover:text-[#2D1A12] transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FFB340] hover:text-[#2D1A12] transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FFB340] hover:text-[#2D1A12] transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FFB340] hover:text-[#2D1A12] transition-all">
                  <Youtube size={18} />
                </a>
              </div>
              <div className="pt-4">
                <p className="text-sm font-semibold mb-4 text-white/50 uppercase tracking-widest">Download Now</p>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="block transition-transform hover:scale-105 active:scale-95">
                    <img 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/svgs/googleplay-5.svg" 
                      alt="Get it on Google Play" 
                      className="h-10 w-auto" 
                    />
                  </a>
                  <a href="#" className="block transition-transform hover:scale-105 active:scale-95">
                    <img 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/svgs/appstore-6.svg" 
                      alt="Download on App Store" 
                      className="h-10 w-auto" 
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-serif font-bold text-white mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', link: '#' },
                  { name: 'Blogs', link: '#' },
                  { name: 'Downloads', link: '#' },
                  { name: 'FAQ', link: '#' },
                  { name: 'Contact Us', link: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="text-white/70 hover:text-[#FFB340] transition-colors text-sm flex items-center gap-2 group">
                      <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Links */}
            <div>
              <h4 className="text-xl font-serif font-bold text-white mb-8">Information Links</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Feedback & Complaint', link: '#' },
                  { name: "Faq's", link: '#' },
                  { name: 'Latest News & Updates', link: '#' },
                  { name: 'Disclaimer', link: '#' },
                  { name: 'End User Agreement', link: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.link} className="text-white/70 hover:text-[#FFB340] transition-colors text-sm flex items-center gap-2 group">
                      <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="text-xl font-serif font-bold text-white mb-8">Get In Touch</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <MapPin size={18} className="text-[#FFB340]" />
                  </div>
                  <span className="text-white/70 text-sm leading-relaxed">
                    Haripur Kalan, Near<br />
                    Premvihar Chowk,<br />
                    Pincode-249205 Haridwar
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Phone size={18} className="text-[#FFB340]" />
                  </div>
                  <a href="tel:+918755955000" className="text-white/70 hover:text-[#FFB340] transition-colors text-sm">
                    +91 8755955000
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="shrink-0">
                    <Mail size={18} className="text-[#FFB340]" />
                  </div>
                  <a href="mailto:care@krishnayan.com" className="text-white/70 hover:text-[#FFB340] transition-colors text-sm">
                    care@krishnayan.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1F120C] py-6 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/50 text-xs md:text-sm text-center md:text-left">
              Copyright © 2026 <span className="text-white/80 font-bold">Krishnayan</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-semibold">
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;