'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion

interface ContactFormSectionProps {
  primaryColor: string;
  brandName: string;
  targetEmail: string; // New prop for the recipient email
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  primaryColor,
  brandName,
  targetEmail, // Receive the target email
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Hide success message if user starts typing again
    if (showSuccessMessage) {
        setShowSuccessMessage(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccessMessage(false); // Reset message state

    const { fullName, phone, message } = formData;

    // Construct mailto link
    const subject = encodeURIComponent(`طلب تواصل/صيانة جديد من: ${fullName} (${brandName})`);
    const body = encodeURIComponent(
`الاسم: ${fullName}
رقم الهاتف: ${phone}

الرسالة:
${message}

---
تم الإرسال من نموذج الاتصال بموقع ${brandName}`
    );

    const mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    // Attempt to open the mail client
    try {
        // Using window.open for potentially better compatibility in some scenarios
        window.open(mailtoLink, '_self');
        // Small delay to allow mail client to potentially open
        setTimeout(() => {
             // Show success message regardless, assuming the intent was made
             setShowSuccessMessage(true);
             // Clear the form after a short delay
             setTimeout(() => {
                setFormData({ fullName: '', phone: '', message: '' });
             }, 500); // 0.5 second delay

        }, 100); // 100ms delay

    } catch (error) {
        console.error("Error opening mailto link:", error);
        // Optionally show an error message to the user
        alert("حدث خطأ أثناء محاولة فتح برنامج البريد الإلكتروني. يرجى نسخ البيانات ومراسلتنا مباشرة.");
    }
  };

  return (
    <motion.section
      className="py-16 md:py-20 bg-white" // Or bg-gray-50
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
             اطلب صيانة {brandName} أو تواصل معنا
           </h2>
           <p className="mt-3 text-gray-600">
              املأ النموذج التالي وسنحاول توجيهك لبرنامج البريد لديك لإرسال رسالتك.
           </p>
        </div>

        {/* Animate the form itself slightly */}
        <motion.form
           onSubmit={handleSubmit}
           className="space-y-6"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6, delay: 0.2 }} // Slight delay after section appears
        >
          {/* Input fields remain the same as before */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              الاسم بالكامل <span style={{ color: primaryColor }}>*</span>
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="ادخل اسمك الكامل"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              رقم الهاتف <span style={{ color: primaryColor }}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="ادخل رقم هاتفك (مثال: 01xxxxxxxxx)"
              pattern="[0-9]{11}"
              title="يجب أن يكون رقم الهاتف مكون من 11 رقم"
              dir="ltr"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              كيف يمكننا مساعدتك؟ <span style={{ color: primaryColor }}>*</span>
            </label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="صف المشكلة أو الخدمة المطلوبة..."
            ></textarea>
          </div>

          <div className="text-center">
             {showSuccessMessage && (
               <p className="text-green-600 mb-4 text-sm">
                 تم تحضير رسالتك! يرجى التأكد من إرسالها عبر برنامج البريد الإلكتروني الذي تم فتحه.
               </p>
             )}
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-10 border border-transparent  text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              style={{ backgroundColor: primaryColor }}
            >
              إرسال عبر البريد الإلكتروني
            </button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactFormSection;