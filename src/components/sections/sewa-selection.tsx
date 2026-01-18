import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Heart, Plus } from 'lucide-react';

interface SewaItem {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText?: string;
}

interface SewaCategory {
  categoryTitle: string;
  items: SewaItem[];
}

const sewaData: SewaCategory[] = [
  {
    categoryTitle: "FESTIVAL SPECIAL",
    items: [
      {
        id: "mankar-sankranti",
        title: "Makar Sankranti Special",
        description: "Makar Sankranti marks the sacred transition of the Sun into Uttarayan, symbolizing...",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_25_5015-19.webp",
      }
    ]
  },
  {
    categoryTitle: "HELP STRAY GAUVANSH",
    items: [
      {
        id: "feed-cows",
        title: "Feed Cows",
        description: "We feed our gauvansh a variety of fodder types. Select the specific fodder you wish t...",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_24_451-20.webp",
      },
      {
        id: "construction",
        title: "Construction",
        description: "With the growing number of gauvansh each month, we continually need to construct ne...",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_23_3413-21.webp",
      },
      {
        id: "pehli-roti",
        title: "Pehli Roti",
        description: "You can feed pehli roti to the cows. Select from the item list",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_22_144-24.webp",
      },
      {
        id: "monthly-care",
        title: "Monthly Care",
        description: "Shree Krishnayan provides shelter for destitute cows and bulls, often abandoned ...",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_21_155-25.webp",
      },
      {
        id: "medical-seva",
        title: "Medical Seva",
        description: "We primarily shelter elderly and destitute gauvansh rescued from critical conditions....",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_23_3413-21.webp",
      },
      {
        id: "monthly-medical",
        title: "Monthly Medical Seva",
        description: "With your seva, we will provide full medical care to one cow or bull for an entire month....",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_21_155-25.webp",
      }
    ]
  },
  {
    categoryTitle: "POOJA, YAGYA & JAAP",
    items: [
      {
        id: "gaudaan",
        title: "Gaudaan",
        description: "Gaudaan involves donating a desi cow to saints and ashrams. The cow's milk will...",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_35_1720-22.webp",
      },
      {
        id: "tuladaan",
        title: "Tuladaan",
        description: "Tula Daan is a sacred Hindu ritual where items equal to one's weight are donated to...",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_34_1317-23.webp",
      }
    ]
  },
  {
    categoryTitle: "SPECIAL PACKAGES",
    items: [
      {
        id: "cow-fodder-special",
        title: "Cow Fodder Special",
        description: "A specially crafted package of nutritious cow fodder, ensuring the well-being of our...",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_24_451-20.webp",
      },
      {
        id: "medical-seva-special",
        title: "Medical Seva Special",
        description: "Contribute to the healing of sick and injured cows through essential medical care and...",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_21_155-25.webp",
      }
    ]
  }
];

const AdoptCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12 mb-20">
    <div className="bg-[#FFD580] rounded-[16px] p-4 flex flex-col h-full border border-[#DCDCDC]/30 shadow-sm transition-transform hover:scale-[1.01]">
      <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden mb-4">
        <Image 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_22_144-24.webp"
          alt="Adopt a Cow"
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-[20px] font-semibold text-[#4A2311] mb-2">Adopt a Cow</h3>
      <p className="text-[14px] text-[#666666] flex-grow leading-relaxed mb-4">
        You can own a cow in Krishnayan. Select your cow and adopt it. Its your gauvansh which i... <button className="text-[#800000] font-semibold">Read more</button>
      </p>
      <button className="w-full bg-[#2D1A12] text-white py-2.5 rounded-pill flex items-center justify-center gap-2 font-bold text-sm tracking-wide">
        <Plus size={16} /> Add Gauvansh
      </button>
    </div>

    <div className="bg-[#FFD580] rounded-[16px] p-4 flex flex-col h-full border border-[#DCDCDC]/30 shadow-sm transition-transform hover:scale-[1.01]">
      <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden mb-4 bg-white flex items-center justify-center p-6">
        <div className="relative w-full h-full">
           <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/19_08_2025_12_25_5015-19.webp"
            alt="Any Amount"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <h3 className="text-[20px] font-semibold text-[#4A2311] mb-2">Any Amount</h3>
      <p className="text-[14px] text-[#666666] flex-grow leading-relaxed mb-4">
        You can donate any amount of your choice which will be used for fodder to feed cows. <button className="text-[#800000] font-semibold">Read more</button>
      </p>
      <div className="flex gap-2 p-1 bg-white rounded-md border border-[#DCDCDC]">
        <input 
          type="text" 
          placeholder="(Min Rs.350)" 
          className="flex-grow bg-transparent border-none outline-none px-3 text-sm italic"
        />
        <button className="bg-transparent text-[#800000] font-bold px-4 text-sm border-l border-[#DCDCDC]">Add</button>
      </div>
    </div>
  </div>
);

const SewaSelection = () => {
  return (
    <section className="bg-[#FFF5F5] py-20">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-10">
          <div className="w-3 h-3 bg-[#800000] rotate-45"></div>
          <h2 className="text-[32px] font-serif font-bold text-[#4A2311]">Select Your Sewa</h2>
        </div>
        
        <div className="divider-dashed mb-12"></div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {sewaData.map((category) => (
            <div key={category.categoryTitle}>
              <div className="flex items-center justify-between mb-8">
                <div className="px-4 py-1.5 bg-white border border-[#DCDCDC] rounded-sm text-[12px] font-bold text-[#800000] inline-flex items-center gap-2 tracking-wider">
                  {category.categoryTitle} <span className="text-[10px]">▶</span>
                </div>
                <div className="flex-grow h-[1px] bg-[#DCDCDC] ml-4"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-[#FFD580] rounded-[16px] p-4 flex flex-col h-full border border-[#DCDCDC]/20 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                  >
                    <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden mb-4">
                      <Image 
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#4A2311] mb-2">{item.title}</h3>
                    <p className="text-[14px] text-[#666666] leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <button className="text-[#800000] text-[13px] font-semibold mb-4 text-left">
                      Read more
                    </button>
                    <div className="mt-auto">
                      <button className="w-full bg-[#800000] text-white py-2.5 rounded-pill flex items-center justify-center gap-2 font-bold text-sm transition-colors hover:bg-opacity-90 active:scale-95">
                        <ShoppingCart size={16} /> Add Items to donate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Adopt & Any Amount Section */}
        <div className="mt-16 pt-8 border-t border-[#DCDCDC] relative">
          <div className="absolute top-0 left-0 -translate-y-1/2 bg-[#FFF5F5] pr-4">
             <div className="w-3 h-3 bg-[#800000] rotate-45"></div>
          </div>
          <AdoptCards />
        </div>
      </div>
    </section>
  );
};

export default SewaSelection;