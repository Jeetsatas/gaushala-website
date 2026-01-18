import React from 'react';
import Image from 'next/image';

const RecentUpdates = () => {
  const updates = [
    {
      id: 1,
      title: 'Bhusa for gaumata',
      date: '04-May-2025',
      description: '4 trolly of bhusa has been unloaded in gaushala',
      image: 'https://www.krishnayan.com/all-assets/images/krishnayan-logo.webp', // Using logo as placeholder as specific assets for these small cards weren't provided in the top list but are in the screenshots
      hasVideo: true,
    },
    {
      id: 2,
      title: 'Green grass for Gaumata',
      date: '24-Apr-2025',
      description: 'A trolly of green grass has been unloaded in gaurakshashala',
      image: 'https://www.krishnayan.com/all-assets/images/krishnayan-logo.webp',
      hasVideo: true,
    },
    {
      id: 3,
      title: 'Truck of bhusa',
      date: '24-Apr-2025',
      description: 'A truck of bhusa has been reached at Gaurakshashala',
      image: 'https://www.krishnayan.com/all-assets/images/krishnayan-logo.webp',
      hasVideo: true,
    },
    {
      id: 4,
      title: 'Trolly of green grass',
      date: '27-Feb-2025',
      description: 'A truckload of fodder arrived at the Gaushala.',
      image: 'https://www.krishnayan.com/all-assets/images/krishnayan-logo.webp',
      hasVideo: true,
    },
  ];

  return (
    <section className="py-12 bg-[#FFF5F5]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xl text-[#800000]">◆</span>
          <h2 className="text-[24px] font-bold text-[#4A2311] font-serif">
            Recent Updates:-
          </h2>
        </div>

        {/* Top Featured Monthly Update */}
        <div className="mb-10 w-full overflow-hidden rounded-[16px] shadow-sm bg-gradient-to-r from-[#FFFFFF] to-[#FFD1D1] border border-[#DCDCDC]/30">
          <div className="flex flex-col md:flex-row h-full">
            <div className="relative w-full md:w-[350px] aspect-[4/3] bg-black group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/svgs/play-icon-3.svg"
                    width={40}
                    height={40}
                    alt="Play"
                    className="ml-1"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-[#000000]/20 group-hover:bg-[#000000]/10 transition-colors" />
              {/* This would be the "Monthly Report - December" Thumbnail */}
              <div className="w-full h-full flex items-center justify-center bg-[#2D1A12]/10">
                <span className="text-[#800000] font-serif italic text-lg opacity-30 px-4 text-center">Video Presentation</span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-[28px] font-bold text-[#800000] font-serif mb-2">
                Monthly Report - December
              </h3>
              <p className="text-[#666666] text-sm mb-4">12-Jan-2026</p>
              <p className="text-[#4A2311] text-lg font-sans">
                Monthly Report - December 2025
              </p>
            </div>
          </div>
        </div>

        {/* Small Update Cards Slider Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {updates.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#FFF5F5] border border-[#DCDCDC]/50 rounded-[12px] overflow-hidden group hover:shadow-md transition-shadow duration-300"
              style={{ backgroundColor: 'rgba(255, 209, 209, 0.2)' }}
            >
              <div className="relative aspect-[16/10] bg-[#2D1A12]/5 cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-[#DCDCDC]">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/svgs/play-icon-3.svg"
                      width={20}
                      height={20}
                      alt="Play"
                      className="ml-0.5"
                    />
                  </div>
                </div>
                {/* Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center p-8 overflow-hidden grayscale opacity-40 group-hover:opacity-60 transition-opacity">
                  <Image 
                    src="https://www.krishnayan.com/all-assets/images/krishnayan-logo.webp"
                    width={150}
                    height={46}
                    alt={item.title}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="text-[18px] font-bold text-[#800000] font-serif mb-1 leading-tight line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[#666666] text-xs mb-2">{item.date}</p>
                <p className="text-[#4A2311] text-sm line-clamp-2 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Special Slide/Placeholder to represent the "Slider" aspect */}
          <div className="hidden lg:flex flex-col items-center justify-center bg-[#FFFFFF]/30 border border-dashed border-[#800000]/30 rounded-[12px] aspect-[16/22]">
            <div className="w-12 h-12 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
            <span className="text-[#800000] font-bold text-sm">View More</span>
          </div>
        </div>

        {/* Divider matches site style */}
        <div className="mt-16 w-full border-b border-dashed border-[#800000]/40"></div>
      </div>
    </section>
  );
};

export default RecentUpdates;