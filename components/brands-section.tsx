import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Ensure these slugs match the ones used in Navbar dropdown hrefs
const supportedBrands = [
  { name: "كارير", slug: "carrier", logo: "/brands/carrier.svg" }, // Make sure these paths exist in /public/brands/
  { name: "يونيون اير", slug: "unionaire", logo: "/brands/unionaire.png" },
  { name: "شارب", slug: "sharp", logo: "/brands/sharp.png" },
  { name: "سامسونج", slug: "samsung", logo: "/brands/samsung.png" },
  { name: "ال جي", slug: "lg", logo: "/brands/lg.png" },
  { name: "فريش", slug: "fresh", logo: "/brands/fresh.svg" },
];

const BrandsSection = () => {
  return (
    // Section ID matches the main nav link
    <section id="brands" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          مراكز الصيانة المعتمدة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {supportedBrands.map((brand) => (
            // Add ID to each card container for linking from Nav/Footer
            <div key={brand.slug} id={`brand-${brand.slug}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden group flex flex-col items-center text-center p-4">
              <div className="h-24 mb-5 flex items-center justify-center"> {/* Container to control logo size */}
                <Image
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  width={180} // Adjust base width as needed
                  height={80} // Adjust base height as needed
                  className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority={true} // Prioritize loading logos above the fold
                />
              </div>
              <Link
                 href={`/brands/${brand.slug}`} // Or link to contact/specific page
                //  href="#footer" // Example: Link to contact section
                 className="inline-flex items-center text-base font-medium text-[#0d6efd] hover:text-[#0b5ed7] group"
              >
                {`صيانة ${brand.name}`}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;