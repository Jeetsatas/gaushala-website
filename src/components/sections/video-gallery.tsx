"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

/**
 * Assets from provided list
 */
const sectionAssets = {
  cow1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/images_1.png",
  cow2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/images_2.png",
  cow12: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dd434688-c110-4e57-9e0c-dc4cca76a1f3-krishnayan-com/assets/images/images_12.png",
};

/**
 * Videos data
 */
const videos = [
  {
    id: "v1",
    thumbnail: sectionAssets.cow1,
    title: "Feeding Cows - Fodder Distribution",
    duration: "2:45",
  },
  {
    id: "v2",
    thumbnail: sectionAssets.cow2,
    title: "Rescued Cow Medical Care",
    duration: "3:12",
  },
];

/**
 * Gallery images data
 */
const galleryImages = [
  { src: sectionAssets.cow1, alt: "Cows grazing at Shreekrishnayan Gaushala" },
  { src: sectionAssets.cow2, alt: "Medical treatment of injured gauvansh" },
  { src: sectionAssets.cow12, alt: "Aerial view of cow sheds at Krishnayan" },
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <section className="bg-[#FFF5F5] py-20 px-4">
      <div className="container mx-auto max-w-[1320px]">
        
        {/* === Video Section === */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b border-dashed border-[#800000] pb-4">
            <span className="text-[#800000] text-xl">◆</span>
            <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#4A2311]">
              Video
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="relative group cursor-pointer overflow-hidden rounded-[16px] shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="aspect-video relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="fill-[#800000] text-[#800000] translate-x-0.5" size={28} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Gallery Section === */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-dashed border-[#800000] pb-4">
            <span className="text-[#800000] text-xl">◆</span>
            <h2 className="text-[28px] md:text-[34px] font-serif font-bold text-[#4A2311]">
              Gallery:-
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="relative group cursor-pointer aspect-[4/3] rounded-[16px] overflow-hidden shadow-sm hover:shadow-lg transition-all"
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#800000]/0 group-hover:bg-[#800000]/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Maximize2 className="text-white" size={32} />
                </div>
                {/* Visual indicator from screenshot */}
                <div className="absolute top-4 right-4 bg-white/80 p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                   <Maximize2 className="text-[#4A2311]" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Lightbox / Video Modal --- */}
      {(selectedVideo || lightboxIndex !== null) && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <button 
            onClick={() => { setSelectedVideo(null); closeLightbox(); }}
            className="absolute top-6 right-6 text-white hover:text-[#FFB340] transition-colors p-2 z-50"
          >
            <X size={40} />
          </button>

          {/* Video Placeholder (Simulated Embedded Player) */}
          {selectedVideo && (
            <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
                <div className="w-20 h-20 rounded-full border-4 border-white/30 border-t-white animate-spin mb-4"></div>
                <p className="font-sans font-medium text-lg">Loading Sanctuary Story...</p>
                <p className="text-white/60 text-sm mt-2">Connecting to YouTube/Vimeo Secure Stream</p>
              </div>
              {/* Note: In a real app, embed iframe here: <iframe src={`.../${selectedVideo}`} /> */}
            </div>
          )}

          {/* Image Lightbox */}
          {lightboxIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center select-none">
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#FFB340] bg-black/20 p-3 rounded-full transition-all"
              >
                <ChevronLeft size={48} />
              </button>
              
              <div className="relative w-full max-w-[90vw] h-[80vh]">
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-[-60px] left-0 right-0 text-center text-white">
                  <p className="text-lg font-serif italic text-[#FFD580]">
                    {galleryImages[lightboxIndex].alt}
                  </p>
                  <p className="text-sm opacity-60 mt-2 font-sans">
                    {lightboxIndex + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#FFB340] bg-black/20 p-3 rounded-full transition-all"
              >
                <ChevronRight size={48} />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}