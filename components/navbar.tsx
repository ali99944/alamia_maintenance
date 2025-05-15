'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation'; // To detect current page

// Icons
import { Phone } from 'lucide-react';
import { BrandData } from '@/src/types/brand';
import { getBrandData } from '@/src/data/brands';
import Image from 'next/image';

// --- Top Bar Component (Mostly Unchanged) ---
const TopBar = () => {
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
        <div className="bg-gray-100 border-b border-gray-200 text-xs text-gray-600 hidden md:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between p-2">
                {/* Hotline */}
                <div className="flex items-center">
                     <Phone className="w-3 h-3 ml-1 text-[#0d6efd]" />
                     <Link href={`tel:${currentBrandData?.hotline}`} className="hover:text-[#0d6efd]">
                        {
                            currentBrandData?.hotline ? (
                                <>
                                <span>الخط الساخن لمركز صيانة</span> <span className="font-semibold text-[#0d6efd]">{currentBrandData?.name}</span>: <span className="font-semibold" dir="ltr">{currentBrandData?.hotline}</span>
                                </>
                            ) : (
                                <span className="font-semibold text-[#0d6efd]">01150421159</span>
                            )
                        }
                    </Link>
                </div>

                <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                key={currentBrandData?.logo} // Add key to force re-render on change
                                src={currentBrandData?.logo || '/logo.png'}
                                alt={currentBrandData ? `صيانة ${currentBrandData.name}` : "العالمية للصيانة Logo"}
                                width={180}
                                height={50}
                                className="h-10 md:h-8 lg:h-8 w-auto object-contain" // Adjust height as needed
                                priority // Prioritize logo loading
                            />
                        </Link>
                    </div>
            </div>
        </div>
    );
};

// --- Main Navbar Export ---
const Navbar = () => {
    return (
        // Add box-shadow if sticky top causes overlap issues with next section
        <header className='sticky top-0 z-50 shadow-sm'>
            <TopBar />
        </header>
    );
};

export default Navbar;