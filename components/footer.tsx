import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronLeft } from 'lucide-react'; // ChevronLeft for list item indication

const Footer = () => {
  // Use the same brand names/slugs as BrandsSection
  const serviceBrands = [
    { name: "كارير", slug: "carrier" },
    { name: "يونيون اير", slug: "unionaire" },
    { name: "شارب", slug: "sharp" },
    { name: "توشيبا", slug: "toshiba" },
    { name: "ال جي", slug: "lg" },
    { name: "فريش", slug: "fresh" },
  ];

  const footerPhone = "01288582979"; // <-- REPLACE number
  const footerEmail = "[email protected]"; // <-- REPLACE email (or remove if none)
  const facebookLink = "#"  ; // <-- REPLACE social links
  const twitterLink = "#";
  const instagramLink = "#";
  const youtubeLink = "#";

  return (
    // Section ID matches the nav link
    <footer id="footer" className="bg-[#212529] text-gray-300 pt-16 pb-8"> {/* Dark background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">

          {/* Column 1 (Right - RTL): About / Logo */}
          <div className="md:col-span-1">
             <div className="mb-5">
                {/* Use the same logo as Navbar */}
                <Link href="/">
                    <Image
                        src="/logo.png" // <-- CREATE a white version of your logo or use the original
                        alt="العالمية للصيانة Logo"
                        width={160} // Adjust size
                        height={40} // Adjust size
                        className="h-auto w-auto max-w-[160px]" // Control max width
                     />
                 </Link>
             </div>
             <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                نوفر في مركز العالمية للصيانة خدمة موثوقة لعملائنا الكرام. لدينا فريق عمل متاح على مدار الساعة لضمان راحتكم وتلبية احتياجاتكم في صيانة الأجهزة المنزلية للعلامات التجارية الرائدة.
             </p>
              {/* Social Links */}
             <div className="flex gap-x-4">
                <a href={facebookLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
                <a href={twitterLink} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
                <a href={youtubeLink} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Column 2 (Middle): Services/Brands */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-5 border-b border-gray-700 pb-2">أقسام مركز الصيانة</h3>
            <ul className="space-y-3">
              {serviceBrands.map(brand => (
                 <li key={brand.slug} className="flex items-center text-sm">
                   <ChevronLeft className="w-4 h-4 ml-2 text-gray-500" /> {/* Simple indicator */}
                   <Link href={`/brands/${brand.slug}`} className="hover:text-white transition-colors"> {/* Link to brand card */}
                      {`صيانة ${brand.name}`}
                    </Link>
                 </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (Left - RTL): Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-5 border-b border-gray-700 pb-2">تواصل معنا</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 ml-3 text-gray-400" />
                <a href={`tel:${footerPhone}`} className="hover:text-white transition-colors" dir="ltr">{footerPhone}</a>
              </li>
              {footerEmail && footerEmail !== "[email protected]" && ( // Only show if email is set
                <li className="flex items-center">
                    <Mail className="w-4 h-4 ml-3 text-gray-400" />
                    <a href={`mailto:${footerEmail}`} className="hover:text-white transition-colors">{footerEmail}</a>
                </li>
              )}
              <li className="flex items-start">
                <MapPin className="w-4 h-4 ml-3 text-gray-400 mt-1 flex-shrink-0" />
                <span>القاهرة، مصر (يمكن إضافة عنوان أكثر تفصيلاً هنا)</span> {/* Replace address */}
              </li>
               <li className="flex items-center mt-3 pt-3 border-t border-gray-700">
                  <span className="ml-2 font-medium text-gray-400">مفتوح:</span>
                  <span>طوال أيام الأسبوع</span>
              </li>
               <li className="flex items-center">
                   <span className="ml-2 font-medium text-gray-400">فيسبوك:</span>
                   <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xs"> صفحتنا على الفيسبوك</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-xs text-gray-500">
              <div>
                <p>© {new Date().getFullYear()} العالمية للصيانة. جميع الحقوق محفوظة.</p>
                <p className="mt-2">مصمم ومتطور من قبل <a href="https://sourcemediaagency.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#0d6efd] transition-colors">source media group</a></p>
              </div>
           <ul className="flex items-center justify-center space-x-4 mt-2">
             <li>
               <Link href="/privacy-policy" className="hover:text-white transition-colors">
                 سياسة الخصوصية
               </Link>
             </li>
             <li>
               <Link href="/about" className="hover:text-white transition-colors">
                 عن العالمية للصيانة
               </Link>
             </li>
             <li>
               <Link href="/contact" className="hover:text-white transition-colors">
                 اتصل بنا
               </Link>
             </li>
           </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;