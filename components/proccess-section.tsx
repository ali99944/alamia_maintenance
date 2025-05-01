'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneCall, CalendarCheck, Settings, CheckCircle } from 'lucide-react'; // Icons for steps

const steps = [
  {
    icon: PhoneCall,
    title: "الخطوة الأولى: التواصل",
    description: "اتصل بنا على الرقم الموحد أو املأ نموذج الاتصال وسيقوم فريق خدمة العملاء بالرد عليك فورًا.",
  },
  {
    icon: CalendarCheck,
    title: "الخطوة الثانية: تحديد الموعد",
    description: "نقوم بتحديد موعد مناسب لك لوصول الفني المتخصص لمعاينة الجهاز وتشخيص العطل بدقة.",
  },
  {
    icon: Settings, // Changed from Wrench for variety
    title: "الخطوة الثالثة: الإصلاح الفعال",
    description: "يقوم الفني بإصلاح العطل باستخدام قطع غيار أصلية وأحدث المعدات لضمان أفضل النتائج.",
  },
  {
    icon: CheckCircle,
    title: "الخطوة الرابعة: الضمان والمتابعة",
    description: "تحصل على ضمان على الصيانة وقطع الغيار، مع متابعة دورية لضمان رضاك التام عن الخدمة.",
  },
];

const ProcessSection = () => {
  const primaryColor = "#0d6efd"; // Main site color
  const contactNumber = "01098765432"; // <<-- REPLACE with main contact number

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }, // Delay children after header
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };


  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            كيف تحصل على خدمة الصيانة؟ <span style={{ color: primaryColor }}>4 خطوات بسيطة</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            نحن نجعل عملية صيانة أجهزتك سهلة وسلسة قدر الإمكان.
          </p>
        </motion.div>

        {/* Steps Grid/List */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6" // Using grid for responsiveness
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
        >
           {/* Optional: Add connecting lines for larger screens */}
           {/* <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2" style={{ top: 'calc(1.75rem + 1px)', zIndex: 0 }}></div> */}


          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center p-4 md:p-6"
              variants={itemVariants}
            >
                {/* Icon Circle */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-white border-2" style={{ borderColor: primaryColor }}>
                    <step.icon className="w-7 h-7" style={{ color: primaryColor }} />
                    {/* Step Number */}
                     <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full" style={{ backgroundColor: primaryColor }}>
                        {index + 1}
                     </span>
                </div>
                 {/* Text Content */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

         {/* Final Call to Action */}
         <motion.div
             className="text-center mt-16"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5, duration: 0.5 }} // Delay after steps load
         >
           <p className="text-lg text-gray-700 mb-4">جاهز لبدء عملية الصيانة؟</p>
           <Link href={`tel:${contactNumber}`}>
             <button className="px-10 py-3 bg-[#0d6efd] text-white text-base font-semibold rounded-md shadow hover:bg-[#0b5ed7] transition duration-300 cursor-pointer">
               اتصل بنا الآن <PhoneCall className="inline-block h-5 w-5 mr-1"/>
             </button>
           </Link>
         </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;