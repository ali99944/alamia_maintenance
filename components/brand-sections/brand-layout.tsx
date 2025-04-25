'use client';

import { BrandData } from '@/src/types/brand';
import React from 'react';
import ArticlesOrLocationsSection from './articles-locations-section';
import CtaBanner from './cta-banner';
import FeaturesSection from './features-section';
import HeroSlider from './hero-slider';
import IntroSection from './intro-section';
import ContactFormSection from './contact-form';
interface BrandPageLayoutProps {
  brandData: BrandData;
}

const GENERAL_CONTACT_EMAIL = "info@alalamiah-maintenance.com"; 

const BrandPageLayout: React.FC<BrandPageLayoutProps> = ({ brandData }) => {
  if (!brandData) {
    // Optional: Render a loading state or a simple message
    return <div>تحميل بيانات المركز...</div>;
  }

  const { primaryColor, name } = brandData;
  const targetEmail = brandData.contactEmail || GENERAL_CONTACT_EMAIL;

  return (
    <div className="brand-page"> {/* Add a class for potential global styling */}

      {/* Section 1: Hero Slider */}
      <HeroSlider slides={brandData.hero.slides} primaryColor={primaryColor} />

      {/* Section 2: Intro Section */}
      <IntroSection data={brandData.intro} primaryColor={primaryColor} brandName={name} />

      {/* Section 3: CTA Banner */}
      <CtaBanner data={brandData.ctaBanner1} primaryColor={primaryColor} />

      {/* Section 4: Articles/Services */}
      {brandData.articles.items.length > 0 && (
        <ArticlesOrLocationsSection
          preTitle={brandData.articles.preTitle}
          title={brandData.articles.title}
          items={brandData.articles.items}
          primaryColor={primaryColor}
          bgColorClass="bg-white" // Example background
        />
      )}

      {/* Section 5: Features & Counters */}
      <FeaturesSection
        featuresData={brandData.features}
        countersData={brandData.counters}
        primaryColor={primaryColor}
      />

      {/* Section 6: Locations/Branches */}
       {brandData.locations.items.length > 0 && (
         <ArticlesOrLocationsSection
           preTitle={brandData.locations.preTitle}
           title={brandData.locations.title}
           items={brandData.locations.items}
           primaryColor={primaryColor}
           bgColorClass="bg-white" // Example background
         />
       )}

      {/* Section 7: Contact Form */}
      <ContactFormSection
          primaryColor={primaryColor}
          brandName={name}
          targetEmail={targetEmail} // Pass the determined email
      />

    </div>
  );
};

export default BrandPageLayout;