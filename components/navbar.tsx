'use client'; // Needed for state and potentially dropdown interactions

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

// Define your 6 supported brands for the dropdown
const supportedBrandsNav = [
    { name: "كارير", slug: "carrier" },
    { name: "يونيون اير", slug: "unionaire" },
    { name: "شارب", slug: "sharp" },
    { name: "توشيبا", slug: "toshiba" },
    { name: "ال جي", slug: "lg" },
    { name: "فريش", slug: "fresh" },
];

const TopBar = () => {
    const hotline = "01012345678"; // <-- REPLACE with actual hotline
    return (
        <div className="bg-gray-100 border-b border-gray-200 text-xs text-gray-600 hidden md:block">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
                {/* Hotline */}
                <div className="flex items-center">
                     <Phone className="w-3 h-3 ml-1 text-[#0d6efd]" /> {/* Direct blue color */}
                     <Link href={`tel:${hotline}`} className="hover:text-[#0d6efd]">
                        الخط الساخن لمركز الصيانة: <span className="font-semibold" dir="ltr">{hotline}</span>
                    </Link>
                </div>
                {/* Social Icons */}
                <div className="flex gap-x-3">
                     <a href="#" aria-label="Facebook" className="hover:text-[#0d6efd]"><Facebook className="w-4 h-4"/></a>
                     <a href="#" aria-label="Twitter" className="hover:text-[#0d6efd]"><Twitter className="w-4 h-4"/></a>
                     <a href="#" aria-label="Instagram" className="hover:text-[#0d6efd]"><Instagram className="w-4 h-4"/></a>
                     <a href="#" aria-label="YouTube" className="hover:text-[#0d6efd]"><Youtube className="w-4 h-4"/></a>
                </div>
            </div>
        </div>
    );
};

const MainNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const contactNumber = "01098765432"; // <-- REPLACE with main contact number for button

    const navLinks = [
        { href: "/", label: "الرئيسية" },
        // Add other main links if needed. The dropdown handles brands.
        { href: "#footer", label: "اتصل بنا" }, // Example: Link to footer contact section
    ];

    return (
        <div className="bg-white sticky top-0 z-40"> {/* z-40 so it's below floating buttons */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/logo.png" // <-- REPLACE with your actual logo file in /public
                                alt="العالمية للصيانة Logo"
                                width={180} // Adjust size as needed
                                height={50} // Adjust size as needed
                                className="h-10 md:h-16 w-auto" // Responsive height
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
                                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)} // Close on blur with delay
                                className="flex items-center text-gray-700 hover:text-[#0d6efd] px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                            >
                                مراكز الصيانة
                                <ChevronDown className={`w-4 h-4 mr-1 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md  py-1 z-50 border border-gray-200">
                                    {supportedBrandsNav.map((brand) => (
                                        <Link
                                            key={brand.slug}
                                            href={`#brand-${brand.slug}`} // Link to the brand card ID in BrandsSection
                                            onClick={() => setIsDropdownOpen(false)}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0d6efd]"
                                        >
                                            {`صيانة ${brand.name}`}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                         {/* Call Us Button (Desktop) */}
                         <Link href={`tel:${contactNumber}`}>
                            <button className="ml-4 inline-flex items-center px-5 py-2 border border-transparent text-sm font-semibold rounded-md  text-white bg-[#0d6efd] hover:bg-[#0b5ed7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d6efd] transition duration-150 ease-in-out">
                                اتصل بنا
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                         {/* Call Us Button (Mobile - maybe just icon) */}
                         <Link href={`tel:${contactNumber}`} className="ml-3">
                             <button className="p-2 inline-flex items-center justify-center rounded-md text-white bg-[#0d6efd] hover:bg-[#0b5ed7] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0d6efd]">
                                <span className="sr-only">اتصل بنا</span>
                                <Phone className="h-5 w-5" aria-hidden="true"/>
                            </button>
                         </Link>
                         {/* Hamburger Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-[#0d6efd] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0d6efd]"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">افتح القائمة</span>
                            {isMobileMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0d6efd] hover:bg-gray-50">
                            {link.label}
                        </Link>
                    ))}
                    {/* Mobile Brands Dropdown Items (simplified) */}
                     <p className="px-3 pt-2 pb-1 text-xs font-semibold text-gray-500 uppercase">مراكز الصيانة</p>
                     {supportedBrandsNav.map((brand) => (
                        <Link
                            key={brand.slug}
                            href={`#brand-${brand.slug}`} // Link to the brand card ID
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0d6efd] hover:bg-gray-50"
                        >
                            {`صيانة ${brand.name}`}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};


const Navbar = () => {
    return (
        <header className='sticky top-0 z-50'>
            <TopBar />
            <MainNavbar />
        </header>
    );
};

export default Navbar;