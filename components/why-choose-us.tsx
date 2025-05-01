'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, ShieldCheck, Clock, Tag, Award } from 'lucide-react'; // Icons

const features = [
  {
    icon: Users,
    title: "فنيون خبراء ومعتمدون",
    description: "فريقنا مكون من فنيين محترفين ومدربين على أعلى مستوى للتعامل مع جميع الأعطال.",
  },
  {
    icon: ShieldCheck,
    title: "قطع غيار أصلية",
    description: "نستخدم قطع غيار أصلية 100% لضمان كفاءة الإصلاح وطول عمر جهازك.",
  },
  {
    icon: Clock,
    title: "خدمة سريعة في نفس اليوم",
    description: "نسعى للوصول إليك وإجراء الصيانة اللازمة في أسرع وقت ممكن، غالبًا في نفس اليوم.",
  },
   {
    icon: Award,
    title: "ضمان على الصيانة",
    description: "نقدم ضمانًا حقيقيًا على خدمة الصيانة وقطع الغيار التي تم استبدالها لراحتك.",
  },
  {
    icon: Wrench,
    title: "تغطية شاملة للماركات",
    description: "متخصصون في صيانة أغلب الماركات العالمية الشهيرة للأجهزة المنزلية والتكييفات.",
  },
   {
    icon: Tag,
    title: "أسعار تنافسية وشفافة",
    description: "نقدم أفضل خدمة صيانة بأسعار مناسبة وواضحة دون أي تكاليف مخفية.",
  },
];

const WhyChooseUsSection = () => {
  const primaryColor = "#0d6efd"; // Main site color

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
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
            لماذا تختار <span style={{ color: primaryColor }}>العالمية للصيانة</span>؟
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            نحن نضمن لك تجربة صيانة موثوقة ومريحة لأجهزتك المنزلية.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-gray-200 transition-all duration-300"
            //   style={{ borderColor: primaryColor }}
              variants={itemVariants}
            >
              <feature.icon className="w-12 h-12 mb-4" style={{ color: primaryColor }} strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;