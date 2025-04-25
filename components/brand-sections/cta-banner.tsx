import React from 'react';
import Link from 'next/link';
import { BrandData } from '@/src/types/brand';

interface CtaBannerProps {
  data: BrandData['ctaBanner1'];
  primaryColor: string;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ data, primaryColor }) => {
  return (
    <section className="py-12 md:py-16 text-white" style={{ backgroundColor: primaryColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-right">
         <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
               <h2 className="text-2xl md:text-3xl font-bold mb-2">{data.title}</h2>
               <p className="text-base md:text-lg opacity-90">{data.text}</p>
            </div>
            <div className="md:w-1/3 md:text-left">
               <Link href={data.buttonLink}>
                  <button className="px-8 py-3 bg-white font-semibold rounded-md hover:bg-gray-100 transition duration-300 transform hover:scale-105"
                          style={{ color: primaryColor }} // Text color matches primary
                  >
                     {data.buttonText}
                  </button>
               </Link>
            </div>
         </div>
      </div>
    </section>
  );
};

export default CtaBanner;