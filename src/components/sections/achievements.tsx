"use client";

import React from 'react';
import Image from 'next/image';

const achievementsData = [
  {
    value: '150k+',
    title: 'Gauvansh Medicated',
    icon: '💊',
  },
  {
    value: '5352+',
    title: 'Gauvansh Operated',
    icon: '🏥',
  },
  {
    value: '45k+',
    title: 'Gauvansh rescued',
    icon: '🐄',
  },
  {
    value: '10 lakh Sq feet',
    title: 'Cow Sheds',
    icon: '🏠',
  },
];

const Achievements: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-[#FFF5F5]">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-[#800000] text-xl">♦</span>
          <h2 className="text-[28px] md:text-[34px] font-bold font-serif text-[#4A2311]">
            Our Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[16px] border border-[#DCDCDC] p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col items-start relative overflow-hidden"
              style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
            >
              <div className="mb-2 text-[#800000] opacity-40 text-sm font-serif">
                Krishnayan
              </div>

              <div className="relative z-10 w-full mb-4">
                <h3 className="text-[24px] md:text-[32px] font-extrabold font-serif text-[#4A2311] leading-tight">
                  {item.value}
                </h3>
                <p className="text-[16px] md:text-[18px] font-semibold text-[#666666] mt-1">
                  {item.title}
                </p>
              </div>

              <div className="mt-auto w-full flex justify-end">
                <div className="relative w-40 h-32 md:w-48 md:h-36 overflow-hidden rounded-[20%_80%_30%_70%/60%_40%_60%_40%] bg-gradient-to-br from-[#FFD580] to-[#FFF5F5] flex items-center justify-center">
                  <span className="text-6xl">{item.icon}</span>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFB340] to-transparent opacity-30"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 w-full border-b border-dashed border-[#800000] opacity-30"></div>
      </div>
    </section>
  );
};

export default Achievements;
