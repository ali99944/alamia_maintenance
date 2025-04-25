import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BrandArticleOrLocation } from '@/src/types/brand';

interface ArticlesOrLocationsProps {
  preTitle: string;
  title: string;
  items: BrandArticleOrLocation[];
  primaryColor: string;
  bgColorClass?: string; // e.g., 'bg-white' or 'bg-gray-50'
}

const ArticlesOrLocationsSection: React.FC<ArticlesOrLocationsProps> = ({
  preTitle,
  title,
  items,
  primaryColor,
  bgColorClass = 'bg-white',
}) => {
  return (
    <section className={`py-16 md:py-24 ${bgColorClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: primaryColor }}>
             {preTitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg  overflow-hidden flex flex-col border border-gray-200 group">
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
                {/* Category Tag */}
                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold text-white rounded" style={{ backgroundColor: primaryColor }}>
                    {item.category}
                 </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{item.description}</p>
                <Link href={item.link} className='flex items-center justify-end'>
                   <span className="inline-flex items-center text-sm font-medium group-hover:underline" style={{ color: primaryColor }}>
                    {item.linkText}
                    <ArrowLeft className="h-4 w-4 mr-1 group-hover:translate-x-[-3px] transition-transform duration-200" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesOrLocationsSection;