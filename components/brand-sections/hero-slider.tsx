'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HeroSlide } from '@/src/types/brand';

interface HeroSliderProps {
  slides: HeroSlide[];
  primaryColor: string;
  logo: string
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides, primaryColor, logo }) => {
  return (
    // Wrap the entire slider container with motion.div for initial load animation
    <motion.div
      className="relative h-[70vh] md:h-[85vh] lg:h-[90vh] w-full group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ clickable: true, dynamicBullets: true }} // Added dynamic bullets
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full">
            <Image
              src={slide.image}
              alt={slide.title || 'صيانة الأجهزة'}
              layout="fill"
              objectFit="contain"
              priority={index === 0} // Prioritize first image
            />
            <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center text-center">
              <div className="max-w-3xl px-4">
                <div className="mb-6">
                  <Image
                    src={logo}
                    alt="Brand Logo"
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                </div>
                {slide.subtitle && (
                  <p className="text-lg md:text-xl text-gray-200 mb-2">{slide.subtitle}</p>
                )}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <Link href={slide.buttonLink}>
                  <button
                    className="mt-4 px-8 py-3 text-white font-semibold rounded-md hover:opacity-90 transition duration-300 transform hover:scale-105"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button className="swiper-button-next-custom absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-3 rounded-full transition duration-300 group-hover:opacity-100 opacity-0 md:opacity-100">
        <ChevronLeft className="w-6 h-6" /> {/* RTL: Left arrow for Next */}
      </button>
      <button className="swiper-button-prev-custom absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-3 rounded-full transition duration-300 group-hover:opacity-100 opacity-0 md:opacity-100">
        <ChevronRight className="w-6 h-6" /> {/* RTL: Right arrow for Prev */}
      </button>
    </motion.div>
  );
};

export default HeroSlider;