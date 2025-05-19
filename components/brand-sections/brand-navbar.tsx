'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { BrandData } from '@/src/types/brand';

interface BrandNavbarProps {
  logo: string;
  brandName: string;
  hotline: string;
  primaryColor: string;
  services: BrandData['articles']['items'];
}

const BrandNavbar: React.FC<BrandNavbarProps> = ({ 
  logo, 
  brandName, 
  hotline, 
  primaryColor,
  services
}) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [sectionsDropdownOpen, setSectionsDropdownOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-row-reverse h-16">
          {/* Left side: Phone and Menu buttons */}
          <div className="flex items-center gap-x-4 rtl:space-x-reverse">
            {/* Phone Button */}
            <Link 
              href={`tel:${hotline}`}
              className="flex items-center justify-center w-10 h-10 text-white"
              style={{ backgroundColor: primaryColor }}
            >
              <Phone className="w-5 h-5" />
            </Link>
            
            {/* Menu Button - visible on all screen sizes */}
            <button 
              className="flex items-center justify-center w-10 h-10 text-white"
              style={{ backgroundColor: primaryColor }}
              onClick={() => setSideMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
          
          {/* Right side: Brand Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt={`صيانة ${brandName}`}
              width={180}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Side Menu Sheet - slides in from right */}
      <div className={`fixed inset-0 bg-black/40 bg-opacity-50 z-50 transition-opacity duration-300 ${sideMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto flex flex-col ${sideMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Side Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <button 
              onClick={() => setSideMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
            <Image
              src={logo}
              alt={`صيانة ${brandName}`}
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
          
          {/* Side Menu Content */}
          <div className="py-4 flex-grow">
            <nav className="flex flex-col">
              <Link 
                href="/" 
                className="px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
                onClick={() => setSideMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link 
                href={`/brands/${brandName.toLowerCase()}`} 
                className="px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
                onClick={() => setSideMenuOpen(false)}
              >
                خدماتنا
              </Link>
              <Link 
                href={`/brands/${brandName.toLowerCase()}/contact`} 
                className="px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
                onClick={() => setSideMenuOpen(false)}
              >
                اتصل بنا
              </Link>
              
              {/* Maintenance Sections Dropdown */}
              <div className="px-4 py-3">
                <button 
                  className="w-full flex items-center justify-between text-gray-700 font-medium"
                  onClick={() => setSectionsDropdownOpen(!sectionsDropdownOpen)}
                >
                  <span>أقسام صيانة {brandName}</span>
                  <span 
                    className="flex items-center justify-center w-8 h-8 text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </span>
                </button>
                
                {sectionsDropdownOpen && (
                  <div className="mt-2 pr-4 border-r-2 mr-2" style={{ borderColor: primaryColor }}>
                    {
                        services.map((service, index) => (
                            <Link
                                key={index}
                                href={`#`}
                                className="block py-2 text-gray-700 hover:text-gray-900"
                                onClick={() => setSideMenuOpen(false)}
                            >
                                {service.title}
                            </Link>
                        ))
                    }
                  </div>
                )}
              </div>
              
              <Link 
                href="/about" 
                className="px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium"
                onClick={() => setSideMenuOpen(false)}
              >
                عن صيانة {brandName}
              </Link>
            </nav>
            
            {/* Social Media Icons */}
            <div className="flex justify-center items-center gap-2 mb-6 mt-12 px-4">
              <Link 
                href="#" 
                className="flex items-center justify-center w-10 h-10 rounded-full text-white"
                style={{ backgroundColor: primaryColor }}
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="flex items-center justify-center w-10 h-10 rounded-full text-white"
                style={{ backgroundColor: primaryColor }}
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="flex items-center justify-center w-10 h-10 rounded-full text-white"
                style={{ backgroundColor: primaryColor }}
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="flex items-center justify-center w-10 h-10 rounded-full text-white"
                style={{ backgroundColor: primaryColor }}
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BrandNavbar;