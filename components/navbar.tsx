'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // To detect current page
import { motion, AnimatePresence } from 'framer-motion'; // For side sheet animation

// Icons
import {
  Menu, X, Phone, ChevronDown, ChevronUp, Facebook, Twitter, Instagram, Youtube
} from 'lucide-react';
import { BrandData } from '@/src/types/brand';
import { getBrandData, supportedBrandsList } from '@/src/data/brands';

// --- Top Bar Component (Mostly Unchanged) ---
const TopBar = () => {
    const hotline = "01012345678"; // <-- REPLACE with actual hotline
    const facebookLink = "#"; // <<-- REPLACE
    const twitterLink = "#"; // <<-- REPLACE
    const instagramLink = "#"; // <<-- REPLACE
    const youtubeLink = "#"; // <<-- REPLACE

    return (
        <div className="bg-gray-100 border-b border-gray-200 text-xs text-gray-600 hidden md:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
                {/* Hotline */}
                <div className="flex items-center">
                     <Phone className="w-3 h-3 ml-1 text-[#0d6efd]" />
                     <Link href={`tel:${hotline}`} className="hover:text-[#0d6efd]">
                        الخط الساخن لمركز الصيانة: <span className="font-semibold" dir="ltr">{hotline}</span>
                    </Link>
                </div>
                {/* Social Icons */}
                <div className="flex gap-x-3">
                     <a href={facebookLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#0d6efd]"><Facebook className="w-4 h-4"/></a>
                     <a href={twitterLink} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#0d6efd]"><Twitter className="w-4 h-4"/></a>
                     <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#0d6efd]"><Instagram className="w-4 h-4"/></a>
                     <a href={youtubeLink} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#0d6efd]"><Youtube className="w-4 h-4"/></a>
                </div>
            </div>
        </div>
    );
};

// --- Main Navbar Component ---
const MainNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileAccordionOpen, setIsMobileAccordionOpen] = useState(false);
    const [currentBrandData, setCurrentBrandData] = useState<BrandData | null>(null);

    const contactNumber = "01098765432"; // <-- REPLACE with main contact number for button
    const siteLogo = "/logo.png"; // <-- REPLACE with your actual logo file
    const defaultPrimaryColor = "#0d6efd"; // Default site color

    const pathname = usePathname(); // Get current path

    // Determine current brand based on path
    useEffect(() => {
        const pathSegments = pathname.split('/');
        // Check if path starts with /صيانة/ and has a slug
        if (pathSegments.length >= 3 && pathSegments[1] === 'صيانة') {
            const slug = decodeURIComponent(pathSegments[2]); // Decode slug (e.g., if it contains Arabic)
            const brand = getBrandData(slug);
            setCurrentBrandData(brand || null);
        } else {
            setCurrentBrandData(null); // Not on a brand page
        }
    }, [pathname]); // Re-run when path changes

    // Effect to handle body scroll lock when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        // Cleanup function
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    // Define navigation links
    const navLinks = [
        { href: "/", label: "الرئيسية" },
        { href: "/about", label: "من نحن" },
        { href: "/contact", label: "اتصل بنا" },
    ];

    // Determine colors and logo based on current page context
    const primaryColor = currentBrandData?.primaryColor || defaultPrimaryColor;
    const logoSrc = currentBrandData?.logo || siteLogo;
    const brandName = currentBrandData?.name;

    const closeMobileMenu = () => setIsMobileMenuOpen(false);
    const closeDesktopDropdown = () => setIsDropdownOpen(false);

    return (
        <div className="bg-white shadow-md sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" onClick={closeMobileMenu}>
                            <Image
                                key={logoSrc} // Add key to force re-render on change
                                src={logoSrc}
                                alt={brandName ? `صيانة ${brandName}` : "العالمية للصيانة Logo"}
                                width={180}
                                height={50}
                                className="h-10 md:h-12 lg:h-14 w-auto object-contain" // Adjust height as needed
                                priority // Prioritize logo loading
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-5 space-x-reverse">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-[#0d6efd] px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Brands Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center text-gray-700 hover:text-[#0d6efd] px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                            >
                                مراكز الصيانة
                                <ChevronDown className={`w-4 h-4 mr-1 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md py-1 z-50 border border-gray-200"
                                    >
                                        {supportedBrandsList.map((brand) => (
                                            <Link
                                                key={brand.slug}
                                                href={`/brands/${brand.slug}`} // Use actual page link
                                                onClick={closeDesktopDropdown} // Close dropdown on click
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0d6efd]"
                                            >
                                                {`صيانة ${brand.name}`}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                         {/* Call Us Button (Desktop) */}
                         <Link href={`tel:${contactNumber}`}>
                            <button className="ml-4 inline-flex items-center px-5 py-2 border border-transparent text-sm font-semibold rounded-md shadow-sm text-white hover:opacity-90 focus:outline-none  transition duration-150 ease-in-out"
                                    style={{ backgroundColor: primaryColor }}
                            >
                                اتصل بنا
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Trigger Button */}
                    <div className="md:hidden flex items-center">
                         {/* Call Us Button (Mobile) */}
                         <Link href={`tel:${contactNumber}`} className="ml-3">
                             <button
                                 className="p-2 inline-flex items-center justify-center rounded-md text-white focus:outline-none"
                                 style={{ backgroundColor: primaryColor }}
                                 aria-label='اتصل بنا'
                             >
                                <Phone className="h-5 w-5" aria-hidden="true"/>
                            </button>
                         </Link>
                         {/* Hamburger Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)} // Open the side sheet
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-[#0d6efd] hover:bg-gray-100 focus:outline-none"
                            aria-controls="mobile-menu-sheet"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">افتح القائمة</span>
                            <Menu className="block h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile Menu Side Sheet --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/50 z-50"
                            onClick={closeMobileMenu} // Close on overlay click
                            aria-hidden="true"
                        />

                        {/* Side Sheet Container */}
                        <motion.div
                            id="mobile-menu-sheet"
                            initial={{ x: '100%' }} // Start off-screen right for RTL
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                            className="fixed top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-white z-50 shadow-md flex flex-col"
                            aria-label="القائمة الرئيسية"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-4 border-b" style={{ borderBottomColor: primaryColor }}>
                                <Link href="/" onClick={closeMobileMenu} className="flex-shrink-0">
                                    <Image
                                        key={`mobile-${logoSrc}`}
                                        src={logoSrc}
                                        alt={brandName ? `صيانة ${brandName}` : "العالمية للصيانة Logo"}
                                        width={120} // Smaller logo for mobile
                                        height={35}
                                        className="h-8 w-auto object-contain"
                                    />
                                </Link>
                                <div className='flex items-center gap-x-2'>
                                    <Link href={`tel:${contactNumber}`}>
                                        <button
                                            className="p-2 inline-flex items-center justify-center rounded-full text-white focus:outline-none focus:ring-2 focus:ring-inset"
                                            style={{ backgroundColor: primaryColor }}
                                            aria-label='اتصل بنا'
                                            onClick={closeMobileMenu}
                                        >
                                            <Phone className="h-5 w-5" />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={closeMobileMenu}
                                        className="p-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-inset"
                                        style={{ backgroundColor: primaryColor }}
                                        aria-label="إغلاق القائمة"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Menu Links */}
                            <nav className="flex-grow overflow-y-auto p-4 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-100"
                                        style={{ '--hover-bg-color': primaryColor } as React.CSSProperties} // Custom property for hover
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryColor}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                {/* Brands Accordion */}
                                <div className='border-t pt-2'>
                                    <button
                                        onClick={() => setIsMobileAccordionOpen(!isMobileAccordionOpen)}
                                        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                                        aria-expanded={isMobileAccordionOpen}
                                    >
                                        <span>{brandName ? `أقسام صيانة ${brandName}` : 'مراكز الصيانة'}</span>
                                        {isMobileAccordionOpen
                                            ? <ChevronUp className="h-5 w-5" style={{ color: primaryColor }}/>
                                            : <ChevronDown className="h-5 w-5" style={{ color: primaryColor }}/>
                                        }
                                    </button>
                                     <AnimatePresence>
                                        {isMobileAccordionOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden pl-4 mt-1 space-y-1"
                                            >
                                                {supportedBrandsList.map((brand) => (
                                                    <Link
                                                        key={brand.slug}
                                                        href={`/brands/${brand.slug}`} // Link to actual brand page
                                                        onClick={closeMobileMenu}
                                                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-white hover:bg-gray-100"
                                                         style={{ '--hover-bg-color': primaryColor } as React.CSSProperties}
                                                         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryColor}
                                                         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                                                    >
                                                        {`صيانة ${brand.name}`}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </nav>

                            {/* Mobile Menu Footer (Optional Social Links) */}
                             <div className="p-4 border-t mt-auto">
                                <div className="flex justify-center gap-x-5">
                                     <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-[#0d6efd]"><Facebook className="w-5 h-5"/></a>
                                     <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-[#0d6efd]"><Twitter className="w-5 h-5"/></a>
                                     <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-[#0d6efd]"><Instagram className="w-5 h-5"/></a>
                                     <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-[#0d6efd]"><Youtube className="w-5 h-5"/></a>
                                </div>
                             </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Main Navbar Export ---
const Navbar = () => {
    return (
        // Add box-shadow if sticky top causes overlap issues with next section
        <header className='sticky top-0 z-50 shadow-sm'>
            <TopBar />
            <MainNavbar />
        </header>
    );
};

export default Navbar;