import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BrandPageLayout from '@/components/brand-sections/brand-layout';
import { getBrandData } from '@/src/data/brands';

type Props = {
  params: Promise<{ slug: string }>;
};

// Optional: Generate Metadata dynamically
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const slug = (await params).slug;
  const brandData = getBrandData(slug);

  if (!brandData) {
    return {
      title: 'المركز غير موجود',
    };
  }

  return {
    title: `مركز صيانة ${brandData.name} المعتمد | ${brandData.hotline || 'اتصل الآن'}`,
    description: `خدمات صيانة ${brandData.name} المعتمدة في مصر. فنيين خبراء، قطع غيار أصلية وضمان. اتصل بمركز صيانة ${brandData.name} على ${brandData.hotline || 'الرقم الموحد'}.`,
    // Add other metadata like openGraph images based on brandData
  };
}

// Optional: Generate static paths if you know all brands beforehand
export async function generateStaticParams() {
   const slugs = ['lg', 'samsung', 'carrier', 'unionaire', 'sharp', 'fresh'];
   return slugs.map((slug) => ({
     slug: slug,
   }));
}


export default async function BrandMaintenancePage({ params }: Props) {
  const slug = (await params).slug;
  const brandData = getBrandData(slug);

  // If brand data doesn't exist for the slug, show 404
  if (!brandData) {
    notFound();
  }

  // Render the reusable layout component with the specific brand's data
  return <BrandPageLayout brandData={brandData} />;
}