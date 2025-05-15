import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'عن مركز الصيانة المعتمد',
  description: 'تعرف على المركز الرائد في صيانة الأجهزة المنزلية المعتمدة بمصر، مع فروع تغطي جميع المحافظات وخدمة عملاء متميزة.',
};

export default function AboutPage() {
  const siteName = "مركز الصيانة المعتمد"; // Use a variable for the company name
  const primaryColor = "#0d6efd"; // Main site color

  return (
    <>
    <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            نبذة عن <span style={{ color: primaryColor }}>{siteName}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            المركز المعتمد والأكثر ثقة لصيانة الأجهزة المنزلية في جميع أنحاء الجمهورية.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Use prose for better typography defaults if desired: className="prose prose-lg max-w-none" */}
          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              تعتبر شركة <strong className="font-semibold" style={{color: primaryColor}}>{siteName}</strong> من الشركات الرائدة في الأسواق المصرية بمجال صيانة الأجهزة الكهربائية المنزلية. نفخر بشهادة جميع عملائنا بأننا الأفضل، حيث نعمل على إنتاج أفضل خدمة صيانة ممكنة لجميع أنواع الأجهزة مثل الغسالات، البوتاجازات، الشاشات، الثلاجات، الديب فريزر، والتكييفات. نلتزم بتقديم توكيل معتمد في جميع محافظات جمهورية مصر العربية، مما يسهل عملية الصيانة ويضمن عدم تعرض عملائنا لأي محاولات غش تجاري أو مشاكل قد تنشأ فيما بعد عملية البيع.
            </p>
            <p>
              تتواجد مراكز الصيانة التابعة لـ <strong className="font-semibold">{siteName}</strong> في جميع أنحاء الجمهورية، حيث استطاعت الشركة أن تنجح في بناء شبكة واسعة تضمن تواجدنا الدائم مع عملائنا في كل مكان وأن نكون بالقرب منهم دائمًا. فتأكد أنك سوف تجد أقرب فرع لك للقيام بأعمال الصيانة السريعة بمنتهى الجودة والكفاءة والإتقان وفي أقل وقت ممكن.
            </p>
            <p>
              نهتم في <strong className="font-semibold">{siteName}</strong> بالتطوير الدائم للأجهزة بناءً على متطلبات عملائنا وشكواهم التي تتعرض لها الأجهزة. فإذا كنت تبحث عن أفضل المنتجات والتكنولوجيا في الأجهزة المنزلية، وتبحث عن خدمات صيانة سريعة وأسعار مناسبة ومعايير عالمية، فنحن نلتزم بإرضاء عملائنا وتوفير أعلى مستوى من الجودة والخدمة للأجهزة الكهربائية.
            </p>
             <p>
               نهتم بالتعرف على آراء عملائنا في الأجهزة الكهربائية والتعرف على آرائهم في خدمات مراكز الصيانة. التعرف على خدمات المبيعات في أوقات الذروة وكل خدمة من خدمات صيانة الخط الساخن لمركز الصيانة هدفها واحد هو تحقيق رضاء عملائنا والعمل الدائم على تطوير خدماتنا لتلبية توقعاتهم.
            </p>
             <p>
              من أفضل الأمور التي نقوم بها في <strong className="font-semibold">{siteName}</strong> هو الانفراد الكامل بخدمات الصيانة والتصليح الدقيق. فالعبث بالأجهزة والقيام بفتحها من قبل الفنيين العاديين من الأمور التي تسبب العديد من المشاكل لاحقًا. لذا، نحرص على أن يقوم فنيونا المتخصصون والمعتمدون فقط بالتعامل مع أجهزتكم.
            </p>
            <p>
               نقدم لعملائنا خدمات صيانة تمتد لسنوات طويلة مع توفير قطع الغيار الأصلية لضمان جودتها في العمل وعدم التعرض لنفس المشكلة أكثر من مرة. في <strong className="font-semibold">{siteName}</strong>، تتم صيانة جميع الأجهزة الكهربائية بشكل مجاني ومتميز خلال فترة الضمان.
            </p>
             <p>
              تمتلك مراكز الصيانة لدينا فنيين مؤهلين لجميع الموديلات ومتوفرة لجميع الأجهزة. بالإضافة إلى أن الشركة تعمل على توفير فنيين لإصلاح مختلف العيوب والأعطال المختلفة. فلدينا مجموعة من الفنيين والمدربين على أعلى مستوى ويتم اختيارهم وعمل الدورات التدريبية التابعة لشركة <strong className="font-semibold">{siteName}</strong> لضمان إمكانية الإصلاح للأعطال من خلال أحدث الأساليب والتقنيات.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}