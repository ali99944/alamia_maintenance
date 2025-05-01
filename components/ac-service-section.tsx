'use client'; // Required for Framer Motion

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wrench, Wind, ShieldCheck, Sparkles, Clock } from 'lucide-react'; // Relevant icons

const AcServiceSection = () => {
  const primaryColor = "#0d6efd"; // Main site color
  const contactLink = "/contact"; // Link to contact page or specific AC form

  // Placeholder image - <<-- REPLACE with a high-quality, relevant image -->>
  // Ideal image: Technician professionally servicing an AC unit, or a cool, comfortable room interior.
  const acImageUrl = "https://img.freepik.com/free-vector/air-conditioner-set_1284-11781.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740";

   // Animation variants for stagger effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Stagger animation of feature items
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 }, // Slide in from left (adjust if needed for RTL feel)
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };


  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text and Features Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Slide in from right
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white rounded-full mb-3" style={{ backgroundColor: primaryColor }}>
              خدمة متخصصة
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 leading-tight">
              لا تدع حرارة الصيف تفسد راحتك! صيانة تكييفات متخصصة
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              مع ارتفاع درجات الحرارة، يصبح مكيف الهواء شريان الحياة لمنزلك ومكتبك. في <strong className="font-semibold">العالمية للصيانة</strong>، ندرك أهمية الحصول على تبريد موثوق وفعال. لهذا نقدم خدمة صيانة تكييفات شاملة ومتخصصة لجميع الماركات، تضمن لك جواً منعشاً وصحياً طوال الصيف.
            </p>

            {/* Features List */}
            <motion.ul
               className="space-y-4"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
             >
              <motion.li className="flex items-start" variants={itemVariants}>
                <Clock className="w-6 h-6 mt-1 ml-3 flex-shrink-0" style={{ color: primaryColor }} />
                <div>
                  <h4 className="font-semibold text-gray-700">استجابة سريعة وخدمة فورية</h4>
                  <p className="text-sm text-gray-500">نصلك في أسرع وقت لإصلاح الأعطال الطارئة وإجراء الصيانة الدورية.</p>
                </div>
              </motion.li>
              <motion.li className="flex items-start" variants={itemVariants}>
                <Wrench className="w-6 h-6 mt-1 ml-3 flex-shrink-0" style={{ color: primaryColor }} />
                <div>
                  <h4 className="font-semibold text-gray-700">فنيون خبراء ومؤهلون</h4>
                  <p className="text-sm text-gray-500">فريق متخصص في صيانة جميع أنواع وموديلات التكييفات بكفاءة عالية.</p>
                </div>
              </motion.li>
              <motion.li className="flex items-start" variants={itemVariants}>
                <Sparkles className="w-6 h-6 mt-1 ml-3 flex-shrink-0" style={{ color: primaryColor }} />
                <div>
                  <h4 className="font-semibold text-gray-700">تنظيف عميق وتعقيم</h4>
                  <p className="text-sm text-gray-500">نزيل الأتربة والبكتيريا لضمان هواء نقي وصحي وحماية جهازك.</p>
                </div>
              </motion.li>
              <motion.li className="flex items-start" variants={itemVariants}>
                 <ShieldCheck className="w-6 h-6 mt-1 ml-3 flex-shrink-0" style={{ color: primaryColor }} />
                <div>
                  <h4 className="font-semibold text-gray-700">فحص شامل وقطع غيار أصلية</h4>
                  <p className="text-sm text-gray-500">نضمن كفاءة التبريد ونستخدم قطع غيار معتمدة مع ضمان على الإصلاح.</p>
                </div>
              </motion.li>
            </motion.ul>

            {/* Call to Action Button */}
            <motion.div
               className="mt-10"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5, duration: 0.5 }} // Delay after features load
            >
              <Link href={contactLink}>
                <button className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-md shadow-md hover:opacity-90 transition duration-300 transform cursor-pointer"
                        style={{ backgroundColor: primaryColor }}
                >
                    احجز موعد صيانة تكييفك الآن
                    <Wind className="w-5 h-5 mr-2" /> {/* Added icon */}
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="relative h-80 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={acImageUrl}
              alt="صيانة تكييفات متخصصة بواسطة العالمية للصيانة"
              layout="fill"
              objectFit="cover" // Subtle zoom on hover
            />
             {/* Optional Overlay - uncomment if needed for text contrast */}
             {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AcServiceSection;