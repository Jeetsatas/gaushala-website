import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFF5F5]">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-stretch rounded-[32px] overflow-hidden bg-white shadow-sm ring-1 ring-black/5">
          {/* Left Content Column */}
          <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center relative">
            {/* Background decorative pattern (subtle) */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#4A2311]" />
                ))}
              </div>
            </div>

            <div className="space-y-6 max-w-xl">
              <h1 className="flex flex-col">
                <span className="font-display text-[#800000] text-4xl lg:text-5xl mb-2">
                  for Stray Gauvansh
                </span>
                <span className="text-[#666666] text-lg lg:text-xl font-sans font-normal tracking-wide">
                  A small offering of Gaugrass, a big step toward blessings
                </span>
              </h1>

              <div className="space-y-4 pt-4">
                {/* Stat 1 */}
                <div className="flex items-center gap-4 bg-[#F9F3F0] p-4 rounded-2xl border border-dashed border-[#DCDCDC] max-w-md transition-transform hover:scale-[1.02]">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm">
                    <span className="text-xl">🌾</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl lg:text-3xl font-serif font-extrabold text-[#4A2311]">
                      3 Crore KG+
                    </span>
                    <span className="text-[#666666] font-semibold text-sm uppercase tracking-wider">
                      Fodder Fed yearly
                    </span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-4 bg-[#F9F3F0] p-4 rounded-2xl border border-dashed border-[#DCDCDC] max-w-md transition-transform hover:scale-[1.02]">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm">
                    <span className="text-xl">🏠</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl lg:text-3xl font-serif font-extrabold text-[#4A2311]">
                      30,000+
                    </span>
                    <span className="text-[#666666] font-semibold text-sm uppercase tracking-wider">
                      Gauvansh Sheltered
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <p className="font-display text-[#800000] text-3xl italic">
                  Milk freely offered to needy
                </p>
              </div>

              {/* Certification Badge */}
              <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
                <div className="relative w-24 h-24 lg:w-28 lg:h-28">
                  <Image 
                    src="https://www.krishnayan.com/all-assets/images/icons/SVG/gov-certified.svg"
                    alt="Government Certified Since 2011"
                    width={112}
                    height={112}
                    className="object-contain"
                  />
                  {/* Fallback text UI if image fails or for better replica look */}
                  <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                    <span className="text-[10px] font-bold text-[#800000]">GOVERNMENT</span>
                    <span className="text-lg font-black text-[#800000]">2011</span>
                    <span className="text-[10px] font-bold text-[#800000]">CERTIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-[600px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/1531429386gaugrass-18.webp"
              alt="Cows being fed nutritious green fodder"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Soft overlay/gradient to blend text better on mobile if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
          </div>
        </div>
      </div>

      {/* Mobile-only stats peek-a-boo or repositioning could go here, but matches desktop layout structure primarily */}
    </section>
  );
};

export default HeroSection;