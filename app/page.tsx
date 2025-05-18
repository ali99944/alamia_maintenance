'use client'; // Required for Framer Motion components on the page

import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import AcServiceSection from '@/components/ac-service-section';
import HeroSlider from '@/components/brand-sections/hero-slider';
import BrandsSection from '@/components/brands-section';
import { HeroSlide } from '@/src/types/brand';
import ProcessSection from '@/components/proccess-section';
import WhyChooseUsSection from '@/components/why-choose-us';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


// --- Define Homepage Slider Data ---
// <<-- KEEP YOUR UPDATED homePageSlides ARRAY HERE -->>
const homePageSlides: HeroSlide[] = [
  {
    image: 'https://maintenance-eg.com/files/slider1.webp',
    title: "مركز العالمية لصيانة المكيفات المعتمد",
    subtitle: "خدمة سريعة وموثوقة لجميع أنواع المكيفات",
    buttonText: "اتصل بنا الآن",
    buttonLink: "tel:+201098765432"
  },
  {
    image: 'https://maintenance-eg.com/files/slider2.webp',
    title: "فنيون خبراء في إصلاح المكيفات",
    subtitle: "نقدم ضمان على الصيانة لجميع أنواع المكيفات",
    buttonText: "اعرف المزيد عن خدمات صيانة المكيفات",
    buttonLink: "/about"
  },
  {
    image: 'https://maintenance-eg.com/files/slider3.webp',
    title: "صيانة معتمدة لجميع أنواع المكيفات",
    subtitle: "نغطي كافة أنحاء الجمهورية",
    buttonText: "اطلب صيانة مكيف فورية",
    buttonLink: "/contact"
  },
];
// ----------------------------------


export default function HomePage() {
  const sitePrimaryColor = "#0d6efd"; // Your main site primary color

  return (
    <>
    <Navbar />
      {/* --- Hero Slider Section --- */}
      <HeroSlider logo={''} slides={homePageSlides} primaryColor={sitePrimaryColor} />

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


     <WhyChooseUsSection />
      <ProcessSection />

      <Footer />

    </>
  );
}