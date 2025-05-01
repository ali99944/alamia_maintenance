'use client'; // Required for Framer Motion components on the page

import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import AcServiceSection from '@/components/ac-service-section';
import HeroSlider from '@/components/brand-sections/hero-slider';
import BrandsSection from '@/components/brands-section';
import { HeroSlide } from '@/src/types/brand';
import ProcessSection from '@/components/proccess-section';
import WhyChooseUsSection from '@/components/why-choose-us';


// --- Define Homepage Slider Data ---
// <<-- KEEP YOUR UPDATED homePageSlides ARRAY HERE -->>
const homePageSlides: HeroSlide[] = [
  {
    image: 'https://maintenance-eg.com/files/slider1.webp',
    title: "مركز العالمية للصيانة المعتمد",
    subtitle: "خدمة سريعة وموثوقة لجميع الأجهزة المنزلية",
    buttonText: "اتصل بنا الآن",
    buttonLink: "tel:+201098765432"
  },
  {
    image: 'https://maintenance-eg.com/files/slider2.webp',
    title: "فنيون خبراء وقطع غيار أصلية",
    subtitle: "ضمان على الصيانة لجميع الماركات",
    buttonText: "اعرف المزيد عن خدماتنا",
    buttonLink: "/about"
  },
   {
    image: 'https://maintenance-eg.com/files/slider3.webp',
    title: "صيانة معتمدة لـ كارير، سامسونج، ال جي والمزيد",
    subtitle: "نغطي كافة أنحاء الجمهورية",
    buttonText: "اطلب صيانة فورية",
    buttonLink: "/contact"
  },
];
// ----------------------------------


export default function HomePage() {
  const sitePrimaryColor = "#0d6efd"; // Your main site primary color

  return (
    <>
      {/* --- Hero Slider Section --- */}
      <HeroSlider slides={homePageSlides} primaryColor={sitePrimaryColor} />

      {/* === NEW: Air Conditioner Service Section === */}
      <AcServiceSection />
      {/* ========================================== */}

      {/* --- Brands Section (Animated) --- */}
      {/* Keep the motion div wrapper if desired */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <BrandsSection />
      </motion.div>


{/* === NEW: Why Choose Us Section === */}
<WhyChooseUsSection />
      {/* ================================ */}

      {/* === NEW: Our Simple Process Section === */}
      <ProcessSection />
      {/* ===================================== */}

    </>
  );
}