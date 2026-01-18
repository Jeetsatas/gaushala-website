"use client";

import React from 'react';
import Image from 'next/image';

const Accreditations = () => {
  // Asset mapping from the provided assets list
  const logoAssets = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_42_4211-26.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_13_37_2816-27.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_26_316-28.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_41_5012-29.webp",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_13_37_2816-27.webp", // Reusing for variety
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_42_4211-26.webp"  // Reusing for variety
  ];

  const badges = [
    {
      img: logoAssets[0],
      text: "Registered under section 12AA of the Income Tax Act"
    },
    {
      img: logoAssets[1],
      text: "Animal Welfare Board of India, Chennai"
    },
    {
      img: logoAssets[2],
      text: "Uttar Pradesh Gau Sewa Ayog"
    },
    {
      img: logoAssets[3],
      text: "Uttarakhand Animal Development Board"
    },
    {
      img: logoAssets[4],
      text: "Madhya Pradesh Gausewa Ayog"
    },
    {
      img: logoAssets[5],
      text: "Registered under section 80G of the Income Tax Act"
    }
  ];

  const highlights = [
    {
      title: "WE DON'T SELL MILK OR MILK PRODUCTS",
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_26_316-28.webp", // Mockup image as highlight container
    },
    {
      title: "GOVERNMENT CERTIFIED AND APPROVED",
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_41_5012-29.webp",
    },
    {
      title: "WE SHELTER & FEED 30000+ INJURED, ABANDONED, STRAY COWS & BULLS.",
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_13_37_2816-27.webp",
    },
    {
      title: "COMPLETE INHOUSE FACILITY TO CARE FOR COWS",
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_42_4211-26.webp",
    }
  ];

  return (
    <section className="bg-[#FFF5F5] py-20 px-4">
      <div className="container mx-auto max-w-[1320px]">
        {/* Accreditations Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-[#800000] text-xl">◆</span>
            <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#4A2311]">
              Accreditations & Recognitions
            </h2>
          </div>
          <div className="flex flex-wrap items-stretch justify-center gap-4 lg:flex-nowrap">
            {badges.map((badge, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#DCDCDC] rounded-[16px] p-6 flex flex-col items-center flex-1 min-w-[180px] text-center shadow-sm hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="w-[100px] h-[100px] rounded-full border border-[#DCDCDC] flex items-center justify-center p-3 mb-4 bg-white overflow-hidden">
                  <img 
                    src={badge.img} 
                    alt="Accreditation Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[#666666] text-[14px] font-sans leading-tight">
                  {badge.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Section */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-[#800000] text-xl">◆</span>
            <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#4A2311]">
              Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, idx) => (
              <div 
                key={idx} 
                className="relative h-[280px] rounded-[100px] overflow-hidden group border-4 border-white shadow-md hover:shadow-lg transition-all"
                style={{
                  clipPath: "ellipse(50% 100% at 50% 100%)",
                  borderRadius: '160px 160px 20px 20px'
                }}
              >
                <Image
                  src={highlight.img}
                  alt={highlight.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6 text-center">
                  <h5 className="text-white font-sans font-bold text-[16px] leading-snug uppercase tracking-wide drop-shadow-lg">
                    {highlight.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-b border-dashed border-[#800000]/20" />
      </div>
    </section>
  );
};

export default Accreditations;