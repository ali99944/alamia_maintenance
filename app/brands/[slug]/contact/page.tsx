import React from 'react';
import type { Metadata } from 'next';
import { getBrandData } from '@/src/data/brands';
import ContactFormSection from '@/components/brand-sections/contact-form';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brandData = getBrandData((await params).slug);
  if (!brandData) return {};

  return {
    title: `تواصل مع صيانة ${brandData.name} | خدمة العملاء`,
    description: `اتصل بمركز صيانة ${brandData.name} للاستفسار عن خدماتنا أو لحجز موعد صيانة. فريقنا جاهز لمساعدتك.`,
  };
}

export default async function ContactPage({ params }: Props) {
  const brandData = getBrandData((await params).slug);
  
  if (!brandData) {
    notFound();
  }

  const { primaryColor, name, contactEmail } = brandData;

  return (
    <>
      <Navbar />
      {/* Hero Section for Contact Page */}
      <section className="bg-gradient-to-b from-blue-50 via-gray-50 to-gray-100 pt-24 pb-16 md:pt-32 md:pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-4">
            تواصل مع صيانة {name}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            هل لديك استفسار أو ترغب في حجز موعد صيانة؟ فريق خدمة {name} في خدمتك.
          </p>
          {brandData.hotline && (
            <a href={`tel:${brandData.hotline}`}>
              <button 
                className="px-8 py-3 text-white text-base font-semibold rounded-md shadow-md hover:opacity-90 transition duration-300"
                style={{ backgroundColor: primaryColor }}
              >
                اتصل بنا مباشرة
              </button>
            </a>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection
        primaryColor={primaryColor}
        brandName={name}
        targetEmail={contactEmail}
      />

      <Footer />
    </>
  );
}