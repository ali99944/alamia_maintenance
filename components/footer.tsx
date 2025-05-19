'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowLeftCircle } from 'lucide-react'; // Changed to ArrowLeftCircle for quick links
import { useParams } from 'next/navigation';
import { getBrandData } from '@/src/data/brands';
import { BrandData } from '@/src/types/brand';

const Footer = () => {
  const footerEmail = "info@alalamiah.com"; // <-- REPLACE email
  const siteAddress = "القاهرة، مصر"; // <-- REPLACE address

  // Social Media Links - <<-- REPLACE WITH YOUR ACTUAL LINKS -->>
  const facebookLink = "https://facebook.com/yourpage";
  const twitterLink = "https://twitter.com/yourhandle";
  const instagramLink = "https://instagram.com/yourprofile";
  const youtubeLink = "https://youtube.com/yourchannel";

  const [currentBrandData, setCurrentBrandData] = useState<BrandData | null>(null);

  const params = useParams(); // Get current params
  // Determine current brand based on path
  useEffect(() => {
    // Check if path starts with /صيانة/ and has a slug
    const slug = params.slug; // Decode slug (e.g., if it contains Arabic)
    const brand = getBrandData(slug as string);
    setCurrentBrandData(brand || null);
  }, [params.slug]); // Re-run when path changes



  return (
    <footer id="footer" className="bg-[#212529] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">

          {/* Column 1 (Right - RTL): About / Logo */}
          <div className="md:col-span-1">
             <div className="mb-5">
                <Link href="/">
                    <Image
                        src={currentBrandData?.logo || '/logo.png'} // <<-- ENSURE you have a white/light version of your logo in /public
                        alt="العالمية للصيانة Logo"
                        width={180} // Adjust size
                        height={45} // Adjust size
                        className="h-auto w-auto max-w-[180px]"
                        priority
                     />
                 </Link>
             </div>
             <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                نوفر خدمة موثوقة لعملائنا الكرام. لدينا فريق عمل متاح على مدار الساعة لضمان راحتكم وتلبية احتياجاتكم في صيانة الأجهزة المنزلية للعلامات التجارية الرائدة.
             </p>
              {/* Social Links */}
             <div className="flex gap-x-4">
                {facebookLink && (
                    <a href={facebookLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
                )}
                {twitterLink && (
                    <a href={twitterLink} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
                )}
                {instagramLink && (
                     <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
                )}
                {youtubeLink && (
                    <a href={youtubeLink} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5"/></a>
                )}
            </div>
          </div>

          {/* Column 2 (Middle): Brand Services */}
          {currentBrandData && (
            <div className="md:col-span-1 lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-5 border-b border-gray-700 pb-2">خدماتنا</h3>
              <ul className="space-y-3">
                {currentBrandData.articles?.items.map((service, index) => (
                  <Link href={'#services'} key={index}>
                    <li className="flex items-center text-sm mb-2">
                      <ArrowLeftCircle className="w-4 h-4 ml-2 text-gray-500" />
                      <span className="text-gray-400">{service.title}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}

          {/* Column 3 (Left - RTL): Contact Info */}
          <div className="md:col-span-1 lg:col-span-1"> {/* Adjust col-span for better balance if needed */}
            <h3 className="text-lg font-semibold text-white mb-5 border-b border-gray-700 pb-2">تواصل معنا</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 ml-3 text-gray-400" />
                <a href={`tel:${currentBrandData?.hotline}`} className="hover:text-white transition-colors" dir="ltr">{currentBrandData?.hotline ?? '01150421159'}</a>
              </li>
              {footerEmail && footerEmail !== "info@alalamiah.com" && ( // Check against your actual email
                <li className="flex items-center">
                    <Mail className="w-4 h-4 ml-3 text-gray-400" />
                    <a href={`mailto:${footerEmail}`} className="hover:text-white transition-colors">{footerEmail}</a>
                </li>
              )}
              <li className="flex items-start">
                <MapPin className="w-4 h-4 ml-3 text-gray-400 mt-1 flex-shrink-0" />
                <span>{siteAddress}</span>
              </li>
               <li className="flex items-center mt-3 pt-3 border-t border-gray-700">
                  <span className="ml-2 font-medium text-gray-400">مفتوح:</span>
                  <span>طوال أيام الأسبوع</span>
              </li>
               {/* Removed duplicate Facebook link from here, it's in the first column */}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-xs text-gray-500">
              <div className="mb-3"> {/* Added margin-bottom to separate from links */}
                <p>© {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
                <p className="mt-1">مصمم ومطور بواسطة <a href="https://sourcemediaagency.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#0d6efd] transition-colors">source media group</a></p>
              </div>
           {/* Navigation Links */}
           <ul className="flex items-center justify-center gap-x-4 space-x-reverse mt-2">
             <li>
               <Link href="/about" className="hover:text-white transition-colors">
                 عن مركز الصيانة
               </Link>
             </li>
             <li>
               <Link href={`/brands/${currentBrandData?.slug}/contact`} className="hover:text-white transition-colors">
                 اتصل بنا
               </Link>
             </li>
             <li>
               <Link href="/privacy-policy" className="hover:text-white transition-colors">
                 سياسة الخصوصية
               </Link>
             </li>
           </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;