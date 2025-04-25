import React from 'react';
import CountUp from 'react-countup';
import * as LucideIcons from 'lucide-react'; // Import all icons
import { BrandData } from '@/src/types/brand';

interface FeaturesSectionProps {
  featuresData: BrandData['features'];
  countersData: BrandData['counters'];
  primaryColor: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ featuresData, countersData, primaryColor }) => {
  return (
    <section className=" bg-gray-50"> {/* Light background */}
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[url('/bg-illu.webp')] bg-no-repeat bg-cover" style={{
        // backgroundPosition: 'center',
        backgroundColor: primaryColor + '40',
      }}>
         {/* Features Header */}
         <div className="text-center mb-12">
           <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: primaryColor }}>
              {featuresData.preTitle}
           </p>
           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">{featuresData.title}</h2>
         </div>

         {/* Features Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
           {featuresData.items.map((feature, index) => {
             const IconComponent = feature.iconName ? LucideIcons[feature.iconName] as LucideIcons.LucideIcon : LucideIcons.Settings; // Default icon
             const iconNode = feature.iconComponent ?? <IconComponent className="w-8 h-8 mb-4" style={{ color: primaryColor }} />;

             return (
               <div key={index} className="bg-white p-4 rounded-lg text-center">
                  {iconNode}
                 <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
               </div>
             );
           })}
         </div>

         {/* Counters Section */}
         {countersData.items.length > 0 && (
            <div className="py-10 rounded-lg" style={{ backgroundColor: primaryColor }}>
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                {countersData.items.map((counter, index) => (
                    <div key={index}>
                    <span className="block text-3xl md:text-4xl font-bold">
                        <CountUp end={counter.value} duration={3} enableScrollSpy scrollSpyOnce/>
                    </span>
                    <span className="block text-sm md:text-base opacity-90 mt-1">{counter.label}</span>
                    </div>
                ))}
                </div>
            </div>
         )}
      </div>
    </section>
  );
};

export default FeaturesSection;