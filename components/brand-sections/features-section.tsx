'use client';
import React from 'react';
import CountUp from 'react-countup';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion
import { BrandData } from '@/src/types/brand';

interface FeaturesSectionProps {
  featuresData: BrandData['features'];
  countersData: BrandData['counters'];
  primaryColor: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ featuresData, countersData, primaryColor }) => {

  // Stagger variants for features
  const featureContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  // Stagger variants for counters
  const counterContainerVariants = {
     hidden: {},
     visible: { transition: { staggerChildren: 0.2 } },
  };

  const counterItemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden"> {/* Add overflow-hidden */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Features Header Animation */}
         <motion.div
           className="text-center mb-12"
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.5 }}
         >
           <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: primaryColor }}>
              {featuresData.preTitle}
           </p>
           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">{featuresData.title}</h2>
         </motion.div>

         {/* Features Grid Animation */}
         <motion.div
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
           variants={featureContainerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
         >
           {featuresData.items.map((feature, index) => {
             const IconComponent = feature.iconName ? LucideIcons[feature.iconName] as LucideIcons.LucideIcon : LucideIcons.Settings; // Default icon
             const iconNode = feature.iconComponent ?? <IconComponent className="w-8 h-8 mb-4" style={{ color: primaryColor }} />;

             return (
               // Animate each feature item
               <motion.div
                 key={index}
                 className="bg-white p-6 rounded-lg text-center border border-gray-200"
                 variants={featureItemVariants}
               >
                  {iconNode}
                 <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
               </motion.div>
             );
           })}
         </motion.div>

         {/* Counters Section Animation */}
         {countersData.items.length > 0 && (
            <motion.div
                className="py-10 rounded-lg"
                style={{ backgroundColor: primaryColor }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Stagger container for individual counters */}
                <motion.div
                    className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center"
                    variants={counterContainerVariants}
                    initial="hidden"
                    whileInView="visible" // Trigger when the colored bar is in view
                    viewport={{ once: true }} // Already triggered by parent animation
                >
                    {countersData.items.map((counter, index) => (
                        // Animate each counter item
                        <motion.div key={index} variants={counterItemVariants}>
                            <span className="block text-3xl md:text-4xl font-bold">
                                {/* CountUp already animates the number */}
                                <CountUp end={counter.value} duration={3} enableScrollSpy scrollSpyOnce/>
                            </span>
                            <span className="block text-sm md:text-base opacity-90 mt-1">{counter.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
         )}
      </div>
    </section>
  );
};

export default FeaturesSection;