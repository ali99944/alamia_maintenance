import { BrandData } from '@/src/types/brand';
import React from 'react';
import ArticlesOrLocationsSection from './articles-locations-section';
import ContactFormSection from './contact-form';
import CtaBanner from './cta-banner';
import FeaturesSection from './features-section';
import HeroSlider from './hero-slider';
import IntroSection from './intro-section';
import Footer from '../footer';
import BrandNavbar from './brand-navbar';

// Define the general contact email (can be imported from a config file)
const GENERAL_CONTACT_EMAIL = "info@alalamiah-maintenance.com"; // <<-- REPLACE WITH YOUR ACTUAL EMAIL

interface BrandPageLayoutProps {
  brandData: BrandData;
}

const BrandPageLayout: React.FC<BrandPageLayoutProps> = ({ brandData }) => {
  if (!brandData) {
    // Optional: Render a loading state or a simple message
    return <div>تحميل بيانات المركز...</div>;
  }

  const { primaryColor, name } = brandData;

  // Decide which email to use. Default to general email.
  // If you add 'contactEmail' to BrandData interface, you could use:
  const targetEmail = brandData.contactEmail || GENERAL_CONTACT_EMAIL;
  // const targetEmail = GENERAL_CONTACT_EMAIL; // Or always use general

  return (
    <div className="brand-page"> {/* Add a class for potential global styling */}

      <BrandNavbar 
        services={brandData.articles?.items} // Pass the services to the Navba
        logo={brandData.logo} 
        brandName={brandData.name} 
        hotline={brandData.hotline || '01150421159'} 
        primaryColor={brandData.primaryColor} 
      />

      {/* Section 1: Hero Slider */}
      <HeroSlider slides={brandData.hero.slides} primaryColor={primaryColor} />

      {/* Section 2: Intro Section */}
      <IntroSection data={brandData.intro} primaryColor={primaryColor} brandName={name} />

      {/* Section 3: CTA Banner */}
      <CtaBanner data={brandData.ctaBanner1} primaryColor={primaryColor} />

      {/* Section 4: Articles/Services */}
      <div id='services'>
        {brandData.articles?.items && brandData.articles.items.length > 0 && (
          <ArticlesOrLocationsSection
            logo={brandData.logo}
            preTitle={brandData.articles.preTitle}
            title={brandData.articles.title}
            items={brandData.articles.items}
            primaryColor={primaryColor}
            bgColorClass="bg-gray-50" // Alternate background
          />
        )}
      </div>

      {/* Section 5: Features & Counters */}
      <FeaturesSection
        featuresData={brandData.features}
        countersData={brandData.counters}
        primaryColor={primaryColor}
      />

            {/* Section 4: Articles/Services */}
            <div id='other_services'>
        {brandData.other_articles?.items && brandData.other_articles.items.length > 0 && (
          <ArticlesOrLocationsSection
            logo={brandData.logo}
            preTitle={brandData.other_articles.preTitle}
            title={brandData.other_articles.title}
            items={brandData.other_articles.items}
            primaryColor={primaryColor}
            bgColorClass="bg-gray-50" // Alternate background
          />
        )}
      </div>

      {/* Section 6: Locations/Branches */}
       {brandData.locations?.items && brandData.locations.items.length > 0 && (
         <ArticlesOrLocationsSection
           logo={brandData.logo}
           preTitle={brandData.locations.preTitle}
           title={brandData.locations.title}
           items={brandData.locations.items}
           primaryColor={primaryColor}
           bgColorClass="bg-white" // Alternate background
         />
       )}

      {/* Section 7: Contact Form */}
       <ContactFormSection
           primaryColor={primaryColor}
           brandName={name}
           targetEmail={targetEmail} // Pass the determined email
       />

       <Footer />

    </div>
  );
};

export default BrandPageLayout;