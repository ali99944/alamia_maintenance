'use client'; // Required for Framer Motion components on the page

import React from 'react';
import { motion } from 'framer-motion'; // Import motion

// Import Components
import BrandsSection from "@/components/brands-section"; // Your existing brands section
import HeroSlider from '@/components/brand-sections/hero-slider';
import { HeroSlide } from '@/src/types/brand';

const homePageSlides: HeroSlide[] = [
  {
    image: 'https://maintenance-eg.com/files/slider1.webp', // Replace with actual image path
    title: "مركز العالمية للصيانة المعتمد",
    subtitle: "خدمة سريعة وموثوقة لجميع الأجهزة المنزلية",
    buttonText: "اتصل بنا الآن",
    buttonLink: "tel:+201098765432" // <<-- REPLACE with main contact number
  },
  {
    image: 'https://maintenance-eg.com/files/slider2.webp', // Replace with actual image path
    title: "فنيون خبراء وقطع غيار أصلية",
    subtitle: "ضمان على الصيانة لجميع الماركات",
    buttonText: "اعرف المزيد عن خدماتنا",
    buttonLink: "/about" // Link to about page, for example
  },
   {
    image: 'https://maintenance-eg.com/files/slider3.webp', // Replace with actual image path
    title: "صيانة معتمدة لـ كارير، سامسونج، ال جي والمزيد",
    subtitle: "نغطي كافة أنحاء الجمهورية",
    buttonText: "اطلب صيانة فورية",
    buttonLink: "/contact" // Link to contact page, for example
  },
];
// ----------------------------------


export default function HomePage() {
  const sitePrimaryColor = "#0d6efd"; // Your main site primary color

  return (
    <>
      {/* --- Hero Slider Section --- */}
      {/* Reusing the HeroSlider component */}
      <HeroSlider slides={homePageSlides} primaryColor={sitePrimaryColor} />


      {/* --- Brands Section (Animated) --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <BrandsSection />
      </motion.div>


      {/* Add other homepage sections here and wrap them in motion.div if desired */}
      {/* Example:
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Add delay if needed
      >
        <SomeOtherSectionComponent />
      </motion.div>
      */}
    </>
  );
}