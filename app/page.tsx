import BrandsSection from "@/components/brands-section";

export default function HomePage() {
  const contactNumber = "01098765432"; // <-- REPLACE - Use same # as Navbar button

  return (
    <>
      {/* Optional: Simple Hero Section */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 md:pt-28 md:pb-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
             مركز صيانة <span className="text-[#0d6efd]">العالمية</span> المعتمد
           </h1>
           <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
             خدمات صيانة فورية وموثوقة لجميع الأجهزة المنزلية من كارير، يونيون اير، شارب، توشيبا، ال جي، وفريش. اتصل بنا الآن!
           </p>
           <a href={`tel:${contactNumber}`}>
              <button className="px-8 py-3 bg-[#0d6efd] text-white text-base font-semibold rounded-md hover:bg-[#0b5ed7] transition duration-300">
                اتصل بنا للحجز والاستفسار
              </button>
           </a>
        </div>
      </section>

      <BrandsSection />

      {/* Add other sections as needed */}
    </>
  );
}