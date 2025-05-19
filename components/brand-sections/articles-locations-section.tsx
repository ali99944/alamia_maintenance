'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clipboard } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion
import { BrandArticleOrLocation } from '@/src/types/brand';

interface ArticlesOrLocationsProps {
  preTitle: string;
  title: string;
  items: BrandArticleOrLocation[];
  primaryColor: string;
  bgColorClass?: string;
  logo: string;
}

const ArticlesOrLocationsSection: React.FC<ArticlesOrLocationsProps> = ({
  preTitle,
  title,
  items,
  primaryColor,
  bgColorClass = 'bg-white',
  logo
}) => {

  // Animation variants for stagger effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Stagger animation of cards
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className={`py-16 md:py-24 ${bgColorClass} overflow-hidden`}> {/* Add overflow-hidden */}
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
             {preTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">{title}</h2>
        </motion.div>

        {/* Grid Animation Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger early as grid items appear
        >
          {items.map((item, index) => (
            // Animate each card
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden flex flex-col border border-gray-200 duration-300 group"
              variants={itemVariants} // Use the item variant
            >
              <div className="relative w-full h-90">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit={'cover'}
                  quality={100}
                  priority={true}
                  loading={'eager'}
                />
                {/* Category Tag */}
                <Image
                  src={logo}
                  alt={item.category}
                  className="absolute top-2 right-2 w-auto h-8"
                  width={32}
                  height={32}
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{item.description}</p>
                <Link href={'tel:+201288582979'}>
                   <span className="inline-flex items-center text-sm font-medium group-hover:underline" style={{ color: primaryColor }}>
                    احجز صيانة
                    <Clipboard className="h-4 w-4 mr-1 group-hover:translate-x-[-3px] transition-transform duration-200" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesOrLocationsSection;