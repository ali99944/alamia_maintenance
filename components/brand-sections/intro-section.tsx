'use client';
import React from 'react';
import Image from 'next/image';
import { CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion
import { BrandData } from '@/src/types/brand';

interface IntroSectionProps {
  data: BrandData['intro'];
  primaryColor: string;
  brandName: string; // Pass brand name for dynamic text
}

const IntroSection: React.FC<IntroSectionProps> = ({ data, primaryColor, brandName }) => {
  // Function to highlight brand name in text
  const highlightBrandName = (text: string) => {
    const regex = new RegExp(brandName, 'g');
    return text.replace(regex, `<span style="color: ${primaryColor}; font-weight: 600;">${brandName}</span>`);
  };

   // Animation variants for stagger effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger animation of children by 0.2s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };


  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden"> {/* Add overflow-hidden */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Animation */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: primaryColor }}>
             {data.preTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2"
              dangerouslySetInnerHTML={{ __html: highlightBrandName(data.title) }} // Example: "صيانة [BRAND] المعتمدة"
          />
        </motion.div>

        {/* Grid Animation Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
        >
          {/* Text Content & Features Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">هدفنا !</h3>
            <p className="text-gray-600 leading-relaxed mb-6"
               dangerouslySetInnerHTML={{ __html: highlightBrandName(data.paragraph) }}
            />
            <ul className="space-y-3">
              {data.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckSquare className="w-5 h-5 mt-1 mr-2 flex-shrink-0" style={{ color: primaryColor }}/>
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image & Experience Box Column */}
          <motion.div className="relative text-center md:text-right" variants={itemVariants}>
            <Image
              src={'/why.webp'}
              alt="فني صيانة محترف"
              width={500}
              height={500}
              className="rounded-lg mx-auto md:mx-0 w-full max-w-md h-auto"
            />
            {/* Experience Box Animation */}
            <motion.div
              className="absolute bottom-4 -right-4 md:bottom-8 md:-right-8 bg-white p-4 md:p-6 shadow-md border-r-4"
              style={{ borderColor: primaryColor }}
              initial={{ opacity: 0, scale: 0.8, x: 20 }} // Start slightly scaled down and shifted
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }} // Delay slightly after column appears
             >
               <span className="block text-4xl md:text-5xl font-bold" style={{ color: primaryColor }}>
                 {data.experience.years}
               </span>
               <span className="block text-sm md:text-base text-gray-600 mt-1">{data.experience.text}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;