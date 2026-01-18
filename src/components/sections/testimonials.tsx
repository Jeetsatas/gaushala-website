import React from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

/**
 * Testimonials Component
 * 
 * Clones the VIP Testimonials slider section with portrait images, 
 * quotes, and star ratings of government and spiritual leaders.
 */

interface Testimonial {
  name: string;
  designation: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Shri Yogi Adityanath",
    designation: "(CM, Uttar Pradesh)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/images_4.png",
    quote: "I was overwhelmed to see the continuous service of thousands of destitute cows in Shree Krishnayan Gaushala. This gaushala can be ideal in the field of Gauseva.",
    rating: 5,
  },
  {
    name: "Shri Pushkar Singh Dhami",
    designation: "(Chief Minister, Uttrakhand)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/images_5.png",
    quote: "I am really proud to have Shree Krishnayan Desi Gauraksha in Uttrakhand which has exhibited an exemplary in the field of service to destitute cows and bulls.",
    rating: 5,
  },
  {
    name: "Shri Gurmit Singh",
    designation: "(Governor of Uttarakhand)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/images_8.png",
    quote: "Shree Krishnayan Gaushala is doing an incredible job in ensuring that our Gaumata/Desi Gauvansh are well-fed and cared for. Their work is truly inspiring.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-[#ECF1F7]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[34px] font-bold text-[#4A2311] font-serif mb-2">Testimonials</h2>
          <div className="w-16 h-1 bg-[#800000] mx-auto mt-2"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 md:p-8 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-b-4 border-[#800000] flex flex-col h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  {/* Portrait Image */}
                  <div className="flex-shrink-0 relative overflow-hidden rounded-md border border-[#DCDCDC] w-[100px] h-[100px]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  
                  {/* Name and Designation */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[18px] font-bold text-[#4A2311] font-serif leading-tight">
                          {testimonial.name}
                        </h4>
                        <p className="text-[14px] text-[#666666] mt-1 italic">
                          {testimonial.designation}
                        </p>
                      </div>
                      <span className="text-[#800000] opacity-20 transform translate-y-[-5px]">
                        <Quote size={32} strokeWidth={2} className="rotate-180" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quote Content */}
                <div className="flex-grow">
                  <p className="text-[15px] text-[#666666] leading-relaxed mb-6 font-sans">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Rating Footer */}
                <div className="flex items-center gap-1 mt-auto pt-4 border-t border-[#F0F0F0]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#000000" stroke="#000000" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button className="w-10 h-10 rounded-full bg-[#2D1A12] text-white flex items-center justify-center hover:bg-[#800000] transition-colors duration-200">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-[#DCDCDC] text-[#4A2311] flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-200">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;