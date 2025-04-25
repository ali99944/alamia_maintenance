import React from 'react';
import { Phone } from 'lucide-react';
// Use a dedicated WhatsApp icon if you prefer - install react-icons or find an SVG
// import { FaWhatsapp } from 'react-icons/fa';
import { MessageCircle } from 'lucide-react'; // Using MessageCircle as placeholder

const FloatingButtons = () => {
  const phoneNumber = "+201014288385"; // <-- REPLACE with your phone
  const secondPhoneNumber = "+201014288385"; // <-- REPLACE with your phone
  const whatsappNumber = "201014288385"; // <-- REPLACE with WhatsApp number (no +)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("أرغب في الاستفسار عن خدمات الصيانة")}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-3"> {/* Changed to left-5 for RTL consistency? Or keep right-5 */}
       {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="اتصل بنا"
        className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white p-3.5 rounded-full  transition duration-300 ease-in-out flex items-center justify-center" // Adjusted blue color, slightly larger padding
      >
        <Phone className="h-6 w-6" />
      </a>

       {/* Phone Button */}
      <a
        href={`tel:${secondPhoneNumber}`}
        aria-label="اتصل بنا"
        className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white p-3.5 rounded-full  transition duration-300 ease-in-out flex items-center justify-center" // Adjusted blue color, slightly larger padding
      >
        <Phone className="h-6 w-6" />
      </a>

       {/* WhatsApp Button */}
       <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="bg-[#25D366] hover:bg-[#1DAE50] text-white p-3.5 rounded-full  transition duration-300 ease-in-out flex items-center justify-center" // WhatsApp green
       >
         {/* <FaWhatsapp className="h-6 w-6" /> */} {/* If using react-icons */}
         <MessageCircle className="h-6 w-6" /> {/* Lucide icon */}
       </a>
    </div>
  );
};

export default FloatingButtons;