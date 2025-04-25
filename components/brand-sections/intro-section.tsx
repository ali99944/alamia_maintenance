import React from 'react';
import Image from 'next/image';
import { CheckSquare } from 'lucide-react';
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

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: primaryColor }}>
             {data.preTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2"
              dangerouslySetInnerHTML={{ __html: highlightBrandName(data.title) }} // Example: "صيانة [BRAND] المعتمدة"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content & Features */}
          <div>
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
          </div>

          {/* Image & Experience Box */}
          <div className="relative text-center md:text-right">
            <Image
              src={'/why.webp'}
              alt="فني صيانة محترف"
              width={500}
              height={500}
              className="rounded-lg mx-auto md:mx-0 w-full max-w-md h-auto"
            />
            {/* Experience Box */}
            <div
              className="absolute bottom-4 -right-4 flex flex-col items-center w-32 h-32 md:bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-lg border-4"
              style={{ borderColor: primaryColor }}
             >
               <span className="block text-4xl md:text-5xl font-bold" style={{ color: primaryColor }}>
                 {data.experience.years}
               </span>
               <span className="block text-sm md:text-base text-gray-600 mt-1">{data.experience.text}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;