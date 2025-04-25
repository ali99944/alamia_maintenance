import React from 'react';
import type { Metadata } from 'next';
import ContactFormSection from '@/components/brand-sections/contact-form';

export const metadata: Metadata = {
  title: 'تواصل مع العالمية للصيانة | خدمة العملاء',
  description: 'اتصل بمركز العالمية للصيانة للاستفسار عن خدماتنا أو لحجز موعد صيانة. فريقنا جاهز لمساعدتك.',
};

// const CONTACT_EMAIL = "info@alalamiah-maintenance.com";
const CONTACT_EMAIL = "alitarek99944@gmail.com";

export default function ContactPage() {
  // Define the primary color for the general contact page form
  // Use the main site color you decided on (e.g., the blue from the initial buttons)
  const sitePrimaryColor = "#0d6efd"; // Or your chosen primary color hex code

  return (
    <>
      {/* Hero Section for Contact Page */}
      <section className="bg-gradient-to-b from-blue-50 via-gray-50 to-gray-100 pt-24 pb-16 md:pt-32 md:pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-4">
             تواصل معنا
           </h1>
           <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
             هل لديك استفسار أو ترغب في حجز موعد صيانة؟ فريق خدمة عملاء العالمية للصيانة في خدمتك.
           </p>
           {/* Optional: Add main contact number button here too */}
           {/* <a href={`tel:+201098765432`}>
              <button className="px-8 py-3 bg-[#0d6efd] text-white text-base font-semibold rounded-md shadow-md hover:bg-[#0b5ed7] transition duration-300">
                اتصل بنا مباشرة
              </button>
           </a> */}
        </div>
      </section>

      {/* Reusable Contact Form Section */}
      {/* Pass the general site primary color and a generic name */}
      <ContactFormSection
          primaryColor={sitePrimaryColor}
          brandName="العالمية للصيانة"
          targetEmail={CONTACT_EMAIL} // Pass the target email
      />

      {/* Optional: Add a section with other contact details like map, address, email if needed */}
      {/* <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h3 className="text-2xl font-semibold mb-4">معلومات الاتصال الأخرى</h3>
             <p>الهاتف: <a href="tel:..." className="text-blue-600">010...</a></p>
             <p>البريد الإلكتروني: <a href="mailto:..." className="text-blue-600">info@...</a></p>
             <p>العنوان: القاهرة، مصر</p>
             // Embed Google Map iframe here if desired
          </div>
      </section> */}
    </>
  );
}