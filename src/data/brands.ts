import { BrandData } from "../types/brand";

// Helper for placeholder image paths - REPLACE WITH YOUR ACTUAL IMAGE PATHS
const placeholderImg = (brand: string, name: string, type: 'hero' | 'tech' | 'service' | 'location') => `/brands/${brand}/images/${name}-${type}.jpg`; // Example structure

// --- LG Data ---
export const lgData: BrandData = {
  name: "ال جي",
  slug: "lg",
  primaryColor: "#C3003C", // LG Red
  secondaryColor: "#FFFFFF",
  logo: "/brands/lg.png",
  logoWhite: "/brands/lg/logos/lg-logo-white.png",
  hotline: "01288582979",
  contactEmail: "maintenance.service1111@gmail.com",

  hero: {
    slides: [
      { image: 'https://www.lg.com/content/dam/channel/wcms/eg_ar/ac-certified-installation/1920x720AR.jpg', title: "صيانة تكييفات ال جي رقم #1 في مصر", subtitle: "خبراء التبريد والتدفئة", buttonText: "اتصل بنا للتكييف", buttonLink: "tel:01288582979" },
      { image: 'https://www.lg.com/content/dam/channel/wcms/eg_ar/rac-algeria-srac-t3-01-dual-inverter-compressor-d.jpg', title: "تركيب وصيانة جميع موديلات ال جي", subtitle: "خدمة معتمدة وموثوقة", buttonText: "حجز موعد صيانة", buttonLink: "#footer" },
      { image: 'https://www.lg.com/content/dam/channel/wcms/eg_ar/images/ac/RAC-ARTCOOL-09-Cooling-Heating-2Seasons-D.jpg', title: "صيانة تكييفات ال جي كونسيلر مركزي", subtitle: "فنيون متخصصون في إصلاح وصيانة تكييفات الكونسيلر المركزي", buttonText: "اتصل بنا لصيانة التكييف", buttonLink: "tel:01288582979" },
    ]
  },
  intro: {
    preTitle: "لماذا مركز صيانة ال جي",
    title: "صيانة ال جي المعتمدة في مصر",
    paragraph: " نفتخر في مركز صيانة ال جي بكوننا الوكيل المعتمد في مصر، حيث نقدم خدمات صيانة شاملة لجميع أجهزة ال جي المنزلية. يساهم فريقنا المدرب على أعلى مستوى في تقديم الدعم الفني والمشورة لعملائنا الكرام بالقاهرة والمحافظات، مع الالتزام بأعلى معايير الجودة العالمية التي تشتهر بها ال جي.",
    imageUrl: placeholderImg('lg', 'technician', 'tech'),
    features: [
      { text: "ضمان لمدة عام كامل على قطع الغيار الأصلية المستبدلة." },
      { text: "فريق دعم فني متاح للإجابة على استفساراتكم ومتابعة حالة الصيانة." },
      { text: "أسعار تنافسية وشفافة بدون أي تكاليف خفية أو رسوم وهمية." },
      { text: "صيانة دورية وقائية للحفاظ على كفاءة أجهزتك لأطول فترة ممكنة." },
      { text: "نصلك أينما كنت في جميع أنحاء الجمهورية بسيارات مجهزة." },
    ],
    experience: { years: 25, text: "سنة خبرة" }
  },
  ctaBanner1: {
    title: "الخط الساخن الموحد لصيانة ال جي",
    text: "هل تواجه مشكلة في جهاز ال جي الخاص بك؟ لا تتردد! اتصل بنا الآن على الخط الساخن المعتمد. فريقنا جاهز للرد على استفساراتك وتحديد موعد زيارة منزلية فورية لتقييم العطل وإصلاحه باستخدام قطع غيار أصلية معتمدة.",
    buttonText: "اتصل بنا الآن 01288582979",
    buttonLink: "tel:01288582979"
  },
  articles: {
    preTitle: "خدمات مركز ال جي",
    title: "كل ما تحتاجه لصيانة أجهزة ال جي",
    items: [
      { image: "https://www.lg.com/content/dam/channel/wcms/sa/images/ac/gallery/2010-01.jpg/_jcr_content/renditions/thum-1600x1062.jpeg", category: "صيانة تكييف ال جي سبليت", title: "خدمات صيانة تكييف ال جي سبليت", description: "صيانة شاملة لتكييفات ال جي سبليت تشمل تنظيف الفلاتر، فحص الفريون، وإصلاح جميع الأعطال الفنية.", linkText: "اعرف المزيد", link: "/صيانة/lg/split" },
      { image: "https://www.lg.com/content/dam/channel/wcms/sa/images/rac-air-conditioners/h182eh_sn2_emgf_sa_c/Z-01.jpg", category: "صيانة تكييف ال جي شباك", title: "خدمات صيانة تكييف ال جي شباك", description: "خدمات صيانة متخصصة لتكييفات ال جي شباك، تشمل تنظيف وحدة التكييف بالكامل وإصلاح جميع المشاكل الفنية.", linkText: "اعرف المزيد", link: "/صيانة/lg/window" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/split-air-conditioners/abnw60gm3t2_anwgeeg_efeg_eg_ar_c/ABNW60GM3T2_ANWGEEG_EFEG_EG_AR_C-350x350.jpg", category: "صيانة تكييف ال جي كونسيلد", title: "خدمات صيانة تكييف ال جي كونسيلد", description: "صيانة متخصصة لتكييفات ال جي كونسيلد مع خبرة في أنظمة التكييف المخفية وحلول التبريد المركزي.", linkText: "اعرف المزيد", link: "/صيانة/lg/concealed" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/ac/RAC-ARTCOOL-09-Cooling-Heating-2Seasons-D.jpg", category: "صيانة تكييف ال جي كاسيت", title: "خدمات صيانة تكييف ال جي كاسيت", description: "صيانة شاملة لتكييفات ال جي كاسيت، تشمل ضبط نظام توزيع الهواء وإصلاح كافة الأعطال.", linkText: "اعرف المزيد", link: "/صيانة/lg/cassette" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/ceiling-concealed-duct/apnw36gt2e4_anwgeeg_efeg_eg_ar_c/350_v1.jpg", category: "صيانة تكييف ال جي فري ستاند", title: "خدمات صيانة تكييف ال جي فري ستاند", description: "خدمات صيانة متخصصة لتكييفات ال جي فري ستاند، مع خبرة في صيانة الوحدات الكبيرة للمساحات الواسعة.", linkText: "اعرف المزيد", link: "/صيانة/lg/free-stand" },
      { image: "https://www.lg.com/ae_ar/images/plp-b2b/plp-b2b-15/aear-vrf-categoryselector-1.jpg", category: "صيانة تكييف ال جي VRF", title: "خدمات صيانة تكييف ال جي VRF", description: "صيانة متخصصة لأنظمة VRF من ال جي للمباني التجارية والسكنية، مع خبرة في إصلاح وضبط النظام المركزي.", linkText: "اعرف المزيد", link: "/صيانة/lg/vrf" },
       { image: "https://m.media-amazon.com/images/I/61DClSTtjbL._AC_UL480_FMwebp_QL65_.jpg", category: "تأسيس مواسير التكييف", title: "خدمات تأسيس مواسير التكييف", description: "نقدم خدمات احترافية في تأسيس وتركيب مواسير التكييف، مع ضمان جودة العمل وسلامة التركيب.", linkText: "اعرف المزيد", link: "/صيانة/lg/تأسيس-مواسير" },
      { image: "https://img.freepik.com/premium-photo/set-different-home-appliances-with-vacuum-cleaner-yellow-background_1339860-3766.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة المبيعات والتوريدات", title: "خدمات المبيعات وتوريد الأجهزة", description: "نوفر خدمات بيع وتوريد جميع أجهزة ال جي مع ضمان الوكيل وخدمات ما بعد البيع.", linkText: "اعرف المزيد", link: "/صيانة/lg/مبيعات" }
    ]
  },

  other_articles: {
    preTitle: "خدماتنا الاخرى",
    title: "خدماتنا الاخرى",
    items: [
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/refrigerators/gc-x257cqhw/450.jpg/jcr:content/renditions/thum-350x350.jpeg", category: "صيانة ثلاجات ال جي", title: "خدمات صيانة ثلاجات ال جي", description: "صيانة شاملة لجميع موديلات ثلاجات ال جي، تشمل إصلاح نظام التبريد، الثرموستات، وجميع الأعطال الفنية.", linkText: "اعرف المزيد", link: "/صيانة/lg/ثلاجات" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/2025_ms_lg-com/tv/uhd/ua75/gp1/gallery/43-ua75-a/450-43.jpg/jcr:content/renditions/thum-350x350.jpeg", category: "صيانة شاشات ال جي", title: "خدمات صيانة شاشات ال جي", description: "صيانة متخصصة لشاشات ال جي الذكية والعادية، مع توفير قطع غيار أصلية وضمان على الإصلاح.", linkText: "اعرف المزيد", link: "/صيانة/lg/شاشات" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/washing-machines/ha_tag/hu641bbg-450.jpg/jcr:content/renditions/thum-350x350.jpeg", category: "صيانة بوتاجازات ال جي", title: "خدمات صيانة بوتاجازات ال جي", description: "صيانة متخصصة لجميع موديلات بوتاجازات ال جي، تشمل إصلاح الشعلات، الفرن، والثرموستات مع ضمان الخدمة.", linkText: "اعرف المزيد", link: "/صيانة/lg/بوتاجازات" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/washing-machines/f0z6dyp24-/450_BASIC.jpg/jcr:content/renditions/thum-350x350.jpeg", category: "صيانة غسالات ال جي", title: "خدمات صيانة غسالات ال جي", description: "صيانة شاملة لغسالات ال جي الأوتوماتيك والعادية، مع حل مشاكل التصريف، الموتور، والبرمجة.", linkText: "اعرف المزيد", link: "/صيانة/lg/غسالات" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/air-purifier/as60ghwg0_aeg_efeg_eg_ar_c/AS60GHWG0_AEG_EFEG_EG_AR_C-350x350.jpg", category: "صيانة منقيات هواء ال جي", title: "خدمات صيانة منقيات هواء ال جي", description: "خدمات صيانة وتنظيف لمنقيات الهواء من ال جي، تشمل تغيير الفلاتر وإصلاح نظام التنقية.", linkText: "اعرف المزيد", link: "/صيانة/lg/منقيات-هواء" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/vacuum-cleaners/vc5420nntr_aprqeec_efeg_eg_ar_c/VC5420NNTR_APRQEEC_EFEG_EG_AR_C-350x350.jpg", category: "صيانة مكانس ال جي", title: "خدمات صيانة مكانس ال جي", description: "صيانة متخصصة لجميع أنواع مكانس ال جي، تشمل إصلاح المحرك، نظام الشفط، والبطاريات للموديلات اللاسلكية.", linkText: "اعرف المزيد", link: "/صيانة/lg/مكانس" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/vacuum-cleaners/vc5420nntr_aprqeec_efeg_eg_ar_c/VC5420NNTR_APRQEEC_EFEG_EG_AR_C-350x350.jpg", category: "صيانة ميكروويف ال جي", title: "خدمات صيانة ميكروويف ال جي", description: "صيانة متخصصة لجميع موديلات ميكروويف ال جي، تشمل إصلاح نظام التسخين، لوحة التحكم، والأعطال الكهربائية.", linkText: "اعرف المزيد", link: "/صيانة/lg/ميكروويف" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/washing-machines/ha_tag/dfc532fpe-450.jpg/jcr:content/renditions/thum-350x350.jpeg", category: "صيانة غسالات أطباق ال جي", title: "خدمات صيانة غسالات أطباق ال جي", description: "خدمات صيانة شاملة لغسالات أطباق ال جي، تشمل إصلاح مشاكل التصريف، نظام الرش، والبرمجة.", linkText: "اعرف المزيد", link: "/صيانة/lg/غسالات-اطباق" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/refrigerators/gtf569psam_avspeec_efeg_eg_ar_c/GTF569PSAM_AVSPEEC_EFEG_EG_AR_C-350x350.jpg", category: "صيانة فريزر ال جي", title: "خدمات صيانة فريزر ال جي", description: "صيانة متخصصة لفريزرات ال جي، تشمل إصلاح نظام التبريد، الثرموستات، وضبط درجات الحرارة.", linkText: "اعرف المزيد", link: "/صيانة/lg/فريزر" },
    ]
  },
  features: {
    preTitle: "لماذا تختار مركزنا؟",
    title: "مميزات مركز صيانة ال جي المعتمد",
    items: [
      { iconName: "ThumbsUp", title: "التعامل الجاد والموثوق", description: "نلتزم بالمواعيد ونتعامل بمنتهى الجدية والاحترافية لضمان رضا عملائنا الكرام في كل خطوة."},
      { iconName: "ShieldCheck", title: "ضمان شامل وموثوق", description: "نوفر ضمانًا لمدة عام كامل على قطع الغيار الأصلية وعملية الصيانة التي قام بها فنيونا المعتمدون."},
      { iconName: "Award", title: "استشارات فنية مجانية", description: "يقدم فريق الدعم الفني لدينا استشارات مجانية عبر الهاتف لمساعدتك في حل المشاكل البسيطة بنفسك."},
      { iconName: "Wrench", title: "فنيون خبراء ومدربون", description: "يمتلك فنيونا الخبرة والكفاءة اللازمة لتشخيص وإصلاح أعقد الأعطال باستخدام أحدث المعدات."},
      { iconName: "Users", title: "خدمة عملاء متميزة", description: "فريق خدمة العملاء لدينا مستعد دائمًا لتقديم الدعم والمساعدة والإجابة على كافة استفساراتكم بصدر رحب."},
      { iconName: "Truck", title: "تغطية جغرافية واسعة", description: "أسطول سيارات الصيانة المجهزة لدينا يغطي جميع محافظات الجمهورية لضمان سرعة الوصول إليك."},
    ]
  },
  counters: {
    items: [
        { value: 28500, label: "طلب صيانة مكتمل" },
        { value: 15000, label: "عميل راضٍ عن الخدمة" },
        { value: 25, label: "عاماً من الخبرة" },
        { value: 98, label: "% نسبة رضا العملاء" }, // Added a 4th counter
    ]
  },
  locations: {
    preTitle: "فروعنا",
    title: "أقرب مركز صيانة ال جي إليك",
     items: [
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "فرع القاهرة", title: "مركز صيانة ال جي القاهرة", description: "نوفر خدمات صيانة ال جي المعتمدة لجميع أحياء القاهرة الكبرى، بما في ذلك مدينة نصر، مصر الجديدة، المعادي، والزمالك.", linkText: "عرض التفاصيل", link: "/صيانة/lg/locations/cairo" },
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "فرع الغردقة", title: "مركز صيانة ال جي الغردقة", description: "خدماتنا تغطي جميع مناطق الغردقة. اتصل بنا لحجز موعد صيانة سريع وموثوق.", linkText: "عرض التفاصيل", link: "/صيانة/lg/locations/alexandria" },
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "فرع الساحل الشمالي", title: "مركز صيانة ال جي الساحل الشمالي", description: "نقدم خدمات صيانة متكاملة في مناطق الساحل الشمالي من العلمين الجديدة إلى مرسى مطروح.", linkText: "عرض التفاصيل", link: "/صيانة/lg/locations/north-coast" },
    ]
  },
};

// --- Samsung Data ---
export const samsungData: BrandData = {
  name: "سامسونج",
  slug: "samsung",
  primaryColor: "#1428A0", // Samsung Blue
  secondaryColor: "#FFFFFF",
  logo: "/brands/samsung.png",
  logoWhite: "/brands/samsung/logos/samsung-logo-white.png",
  hotline: "01288582979",
  contactEmail: "maintenance.service1111@gmail.com",

  hero: {
    slides: [
      { image: 'https://images.samsung.com/is/image/samsung/assets/eg/p6_gro3/p6_initial_pcd/p6_initial_home-appliances/1440x640-PCD-PC.jpg?imwidth=2560', title: "صيانة مكيفات سامسونج المعتمدة في مصر", subtitle: "خبراء التبريد والتدفئة", buttonText: "اتصل بالخط الساخن", buttonLink: "tel:01288582979" },
      { image: 'https://images.samsung.com/is/image/samsung/assets/eg/p6_gro3/p6_initial_pcd/p6_initial_home-appliances/cools-faster-farther-and-wider-pcv.jpg?$1440_N_JPG$', title: "حلول مبتكرة لصيانة مكيفات سامسونج", subtitle: "تكنولوجيا وجودة", buttonText: "اطلب زيارة فني", buttonLink: "#footer" },
      { image: 'https://images.samsung.com/is/image/samsung/assets/eg/p6-b2b/gro2-2/system-air-conditioners/P01_WindFree_Pure_Cover_Keyvisual-AR12AXKAAWKNEU_1440x640_PC.png?imwidth=2560', title: "مكيفات سامسونج المعتمدة - جودة لا مثيل لها", subtitle: "نوفر خدمات صيانة معتمدة لجميع منتجات سامسونج", buttonText: "اطلب زيارة فني", buttonLink: "#footer" },
    ]
  },
  intro: {
    preTitle: "ثق بخبراء سامسونج",
    title: "مركز صيانة سامسونج المعتمد",
    paragraph: "بصفتنا مركز صيانة معتمد لأجهزة سامسونج، نقدم لكم حلولاً متكاملة وموثوقة لجميع منتجات سامسونج، من الشاشات والهواتف الذكية إلى الثلاجات والغسالات. نستخدم قطع غيار أصلية ونضمن جودة الإصلاح وفقًا لمعايير سامسونج العالمية.",
    imageUrl: placeholderImg('samsung', 'technician-blue', 'tech'),
    features: [
      { text: "تشخيص دقيق للأعطال باستخدام أحدث أجهزة الفحص من سامسونج." },
      { text: "فنيون متخصصون في صيانة تكنولوجيا سامسونج الرقمية والمنزلية." },
      { text: "قطع غيار أصلية مباشرة من المصنع لضمان التوافق والأداء الأمثل." },
      { text: "خدمة سريعة وفعالة لتقليل فترة تعطل أجهزتك." },
      { text: "دعم فني عبر الهاتف لحل المشكلات البسيطة." },
    ],
    experience: { years: 20, text: "عاماً من التميز" }
  },
  ctaBanner1: {
    title: "لا تتردد في الاتصال بنا - الخط الساخن لسامسونج",
    text: "إذا واجهت أي مشكلة مع جهاز سامسونج الخاص بك، فإن فريق الدعم الفني لدينا جاهز لمساعدتك. اتصل بنا على 01288582979 للحصول على مساعدة فورية أو لحجز موعد صيانة منزلية.",
    buttonText: "اتصل الآن 01288582979",
    buttonLink: "tel:01288582979"
  },
  articles: {
    preTitle: "خدماتنا المتخصصة",
    title: "صيانة جميع منتجات سامسونج",
    items: [
      { image: "https://images.samsung.com/is/image/samsung/assets/eg/p6_gro3/p6_initial_pcd/p6_initial_home-appliances/448x488-Thumbnail.png?$448_488_PNG$", category: "صيانة تكييفات سامسونج", title: "صيانة جميع أنواع تكييفات سامسونج", description: "خدمات صيانة شاملة لجميع موديلات تكييفات سامسونج (سبليت، شباك، كونسيلد). نقدم خدمات تنظيف الفلاتر، فحص وشحن الفريون، وإصلاح جميع الأعطال الفنية.", linkText: "اعرف المزيد", link: "/صيانة/samsung/تكييفات" },
      { image: "https://images.samsung.com/is/image/samsung/assets/eg/p6-b2b/gro2-2/system-air-conditioners/2021-windfree_n01_kv_image_mo_330x330_PC.png?$376_376_PNG$", category: "صيانة تكييف سامسونج Wind Free", title: "خدمات صيانة تكييف سامسونج Wind Free", description: "صيانة متخصصة لتكييفات سامسونج Wind Free مع تقنية التبريد الهادئ، تشمل فحص نظام التبريد وضبط تدفق الهواء للأداء الأمثل.", linkText: "اعرف المزيد", link: "/صيانة/samsung/wind-free" },
      { image: "https://images.samsung.com/is/image/samsung/assets/eg/p6-b2b/gro2-2/system-air-conditioners/Product_category_Multi_Split_Desktop_568x320_PC.png?$568_N_PNG$", category: "صيانة تكييف سامسونج سبليت", title: "خدمات صيانة تكييف سامسونج سبليت", description: "خدمات صيانة شاملة لتكييفات سامسونج سبليت تشمل تنظيف الفلاتر، فحص الفريون، وإصلاح جميع الأعطال الفنية.", linkText: "اعرف المزيد", link: "/صيانة/samsung/split" },
      { image: "https://images.samsung.com/is/image/samsung/assets/eg/p6-b2b/gro2-2/system-air-conditioners/250_AM240KXVGGH-EU_001_Front_White_thumb_PC.png?$568_N_PNG$", category: "صيانة تكييف سامسونج VRF", title: "خدمات صيانة أنظمة VRF من سامسونج", description: "صيانة متخصصة لأنظمة VRF من سامسونج للمباني التجارية والسكنية، مع خبرة في إصلاح وضبط النظام المركزي.", linkText: "اعرف المزيد", link: "/صيانة/samsung/vrf" },
      { image: "https://images.samsung.com/is/image/samsung/assets/eg/p6-b2b/gro2-2/system-air-conditioners/AM015TNVDCH-AA_001_Front_White_thumb_160x160_PC.png?$160_160_PNG$", category: "صيانة مكيف سامسونج حائطي", title: "خدمات صيانة المكيفات الحائطية", description: "صيانة شاملة للمكيفات الحائطية من سامسونج، تشمل فحص وإصلاح نظام التثبيت والتبريد.", linkText: "اعرف المزيد", link: "/صيانة/samsung/wall-mounted" },
      { image: "https://images.samsung.com/is/image/samsung/assets/eg/p6-b2b/gro2-2/system-air-conditioners/250_AM007NN1DCH-AA_001_Front_White_thumb_160x160_PC.png?$160_160_PNG$", category: "صيانة مكيف سامسونج كاسيت أحادي", title: "خدمات صيانة مكيفات كاسيت أحادية الاتجاه", description: "صيانة متخصصة لمكيفات سامسونج كاسيت أحادية الاتجاه، مع خبرة في ضبط توجيه الهواء وإصلاح نظام التبريد.", linkText: "اعرف المزيد", link: "/صيانة/samsung/one-way-cassette" },
      { image: "https://images.samsung.com/is/image/samsung/assets/eg/p6-b2b/gro2-2/system-air-conditioners/250_AM045NN4DEH-EU_001_Front-Sensor-on_White_thumb_160x160_PC.png?$160_160_PNG$", category: "صيانة مكيف سامسونج كاسيت رباعي", title: "خدمات صيانة مكيفات كاسيت رباعية الاتجاه", description: "صيانة شاملة لمكيفات سامسونج كاسيت رباعية الاتجاه، تشمل ضبط توزيع الهواء وإصلاح نظام التبريد المركزي.", linkText: "اعرف المزيد", link: "/صيانة/samsung/four-way-cassette" },
      { image: "https://images.samsung.com/is/image/samsung/assets/eg/p6-b2b/gro2-2/system-air-conditioners/180_4_AC071KN4DKH-EU_002_Front_White_thumb_160x160_PC.png?$160_160_PNG$", category: "صيانة مكيف سامسونج كاسيت 360", title: "خدمات صيانة مكيفات كاسيت 360 درجة", description: "صيانة متخصصة لمكيفات سامسونج كاسيت 360 درجة، مع خبرة في ضبط نظام التوزيع الدائري للهواء وإصلاح الأعطال.", linkText: "اعرف المزيد", link: "/صيانة/samsung/360-cassette" },
      { image: "https://images.samsung.com/is/image/samsung/assets/eg/p6-b2b/gro2-2/system-air-conditioners/AM015TNVDCH-AA_001_Front_White_thumb_568x320_PC.png?$568_N_PNG$", category: "صيانة مكيفات المباني السكنية", title: "خدمات صيانة مكيفات المباني السكنية", description: "صيانة شاملة لأنظمة تكييف سامسونج في المباني السكنية، تشمل الصيانة الدورية وإصلاح الأعطال الطارئة.", linkText: "اعرف المزيد", link: "/صيانة/samsung/residential" },
      { image: "https://m.media-amazon.com/images/I/61DClSTtjbL._AC_UL480_FMwebp_QL65_.jpg", category: "تأسيس مواسير تكييف", title: "خدمات تأسيس مواسير التكييف", description: "نقدم خدمات احترافية في تأسيس وتركيب مواسير للتكييفات، مع ضمان جودة العمل وسلامة التركيب والعزل الحراري المثالي.", linkText: "اعرف المزيد", link: "/صيانة/samsung/تأسيس-مواسير" },
      { image: "https://img.freepik.com/premium-photo/set-different-home-appliances-with-vacuum-cleaner-yellow-background_1339860-3766.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة المبيعات والتوريدات", title: "خدمات المبيعات وتوريد الأجهزة", description: "نوفر خدمات بيع وتوريد جميع أجهزة سامسونج مع ضمان الوكيل وخدمات ما بعد البيع وأفضل الأسعار في السوق.", linkText: "اعرف المزيد", link: "/صيانة/samsung/مبيعات" }
    ]
  },
  other_articles: {
    title: "خدمات سامسونج الاخرى",
    preTitle: "خدمات سامسونج الاخرى",
    items: [
      { image: "https://images.samsung.com/is/image/samsung/p6pim/eg/rb34a6b0e12-mr/gallery/eg-bespoke-rb7300t-rb34a6b0e12-mr-thumb-534504489?$216_216_PNG$", category: "صيانة ثلاجات سامسونج", title: "خدمات صيانة ثلاجات سامسونج", description: "صيانة شاملة لجميع موديلات ثلاجات سامسونج، تشمل إصلاح نظام التبريد، الثرموستات، وجميع الأعطال الفنية.", linkText: "اعرف المزيد", link: "/صيانة/samsung/ثلاجات" },
      { image: "https://images.samsung.com/is/image/samsung/p6pim/eg/lh98qecelgcxue/gallery/eg-smart-signage-qe98c-lh98qecelgcxue-540157136?$684_547_JPG$", category: "صيانة شاشات سامسونج", title: "خدمات صيانة شاشات سامسونج", description: "صيانة متخصصة لشاشات سامسونج الذكية والعادية، مع توفير قطع غيار أصلية وضمان على الإصلاح.", linkText: "اعرف المزيد", link: "/صيانة/samsung/شاشات" },
      { image: "https://images.samsung.com/is/image/samsung/p6pim/eg/wa11dg5410bdas/gallery/eg-wa5000dm-wa11dg5410bdas-542791644?$684_547_PNG$", category: "صيانة غسالات سامسونج", title: "خدمات صيانة غسالات سامسونج", description: "صيانة شاملة لغسالات سامسونج الأوتوماتيك والعادية، مع حل مشاكل التصريف، الموتور، والبرمجة.", linkText: "اعرف المزيد", link: "/صيانة/samsung/غسالات" },
      { image: "https://images.samsung.com/is/image/samsung/levant-dish-washer-dw60h6050fs-dw60h6050fs-ma-001-front-silver?$684_547_PNG$", category: "صيانة غسالات أطباق سامسونج", title: "خدمات صيانة غسالات أطباق سامسونج", description: "خدمات صيانة شاملة لغسالات أطباق سامسونج، تشمل إصلاح مشاكل التصريف، نظام الرش، والبرمجة.", linkText: "اعرف المزيد", link: "/صيانة/samsung/غسالات-اطباق" },
      { image: "https://images.samsung.com/is/image/samsung/p6pim/eg/mg40dg5524atgy/gallery/eg-mw5500d-mg40dg5524at-mg40dg5524atgy-thumb-543825176?$216_216_PNG$", category: "صيانة ميكروويف سامسونج", title: "خدمات صيانة ميكروويف سامسونج", description: "صيانة متخصصة لجميع موديلات ميكروويف سامسونج، تشمل إصلاح نظام التسخين، لوحة التحكم، والأعطال الكهربائية.", linkText: "اعرف المزيد", link: "/صيانة/samsung/ميكروويف" },
      // { image: "https://images.samsung.com/is/image/samsung/assets/eg/2501/gnb/GNB_P3_176x176.png?$176_176_PNG$", category: "صيانة موبايلات سامسونج", title: "خدمات صيانة موبايلات سامسونج", description: "صيانة احترافية لجميع موديلات هواتف سامسونج الذكية، مع توفير قطع غيار أصلية وضمان الخدمة.", linkText: "اعرف المزيد", link: "/صيانة/samsung/موبايلات" },
      // { image: "https://images.samsung.com/is/image/samsung/p6pim/eg/2307/gallery/eg-galaxy-tab-s9-ultra-5g-x916-sm-x916bzaamea-thumb-537331287?$216_216_PNG$", category: "صيانة تابلت سامسونج", title: "خدمات صيانة تابلت سامسونج", description: "خدمات صيانة متخصصة لأجهزة تابلت سامسونج، تشمل إصلاح الشاشة، البطارية، ومشاكل البرمجيات.", linkText: "اعرف المزيد", link: "/صيانة/samsung/تابلت" },
      // { image: "https://images.samsung.com/is/image/samsung/assets/eg/2407/pcd/watches/PCD_W7_WhatsNew_376X376_pc.png?$376_376_PNG$", category: "صيانة ساعات سامسونج", title: "خدمات صيانة ساعات سامسونج", description: "صيانة متخصصة لساعات سامسونج الذكية، مع خدمات إصلاح الشاشة، البطارية، والمستشعرات.", linkText: "اعرف المزيد", link: "/صيانة/samsung/ساعات" },
      // { image: "https://images.samsung.com/is/image/samsung/assets/eg/ux2/gnb/mx/img_z_fold6_updated.png?$176_176_PNG$", category: "صيانة موبايلات سامسونج القابلة للطي", title: "خدمات صيانة موبايلات سامسونج القابلة للطي", description: "صيانة متخصصة لهواتف سامسونج القابلة للطي، مع خبرة في إصلاح الشاشات المرنة وآليات الطي.", linkText: "اعرف المزيد", link: "/صيانة/samsung/موبايلات-قابلة-للطي" }
    ]
  },
  features: {
    preTitle: "لماذا نحن الأفضل؟",
    title: "مميزات الاعتماد على مركز سامسونج",
    items: [
      { iconName: "Smartphone", title: "خبرة في الأجهزة الذكية", description: "فهم عميق لتكنولوجيا سامسونج الذكية وكيفية تكامل الأجهزة لتقديم أفضل الحلول."},
      { iconName: "CheckCircle", title: "قطع غيار سامسونج أصلية", description: "نضمن استخدام قطع غيار أصلية 100% للحفاظ على أداء جهازك وموثوقيته."},
      { iconName: "FastForward", title: "سرعة الاستجابة والإصلاح", description: "نسعى جاهدين لتقديم أسرع خدمة صيانة ممكنة لتقليل أي إزعاج لعملائنا."},
      { iconName: "Wrench", title: "فنيون معتمدون من سامسونج", description: "يخضع فنيونا لتدريب مستمر من سامسونج ليكونوا على اطلاع بأحدث التقنيات."},
      { iconName: "Info", title: "شفافية في التشخيص والتكلفة", description: "نقدم تقريراً مفصلاً عن العطل والتكلفة المتوقعة قبل البدء في عملية الإصلاح."},
      { iconName: "Map", title: "فروع وخدمة متنقلة", description: "شبكة فروع تغطي المحافظات الرئيسية بالإضافة إلى ورش صيانة متنقلة."},
    ]
  },
  counters: {
    items: [
        { value: 22000, label: "جهاز تم إصلاحه" },
        { value: 12500, label: "عميل يثق بنا" },
        { value: 20, label: "عاماً في خدمة سامسونج" },
        { value: 97, label: "% معدل نجاح الإصلاح" },
    ]
  },
  locations: {
    preTitle: "انتشارنا",
    title: "مراكز خدمة سامسونج المعتمدة",
     items: [
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة القاهرة", title: "مركز خدمة سامسونج القاهرة", description: "مركزنا الرئيسي بالقاهرة يقدم خدمات صيانة لجميع منتجات سامسونج مع أسرع استجابة.", linkText: "زيارة الفرع", link: "/صيانة/samsung/locations/cairo" },
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة الغردقة", title: "مراكز خدمة سامسونج بالغردقة", description: "نخدم محافظات الدلتا (طنطا، المنصورة، المحلة) من خلال فروعنا المعتمدة لضمان راحتكم.", linkText: "زيارة الفرع", link: "/صيانة/samsung/locations/delta" },
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "فرع الساحل الشمالي", title: "مركز صيانة سامسونج الساحل الشمالي", description: "نقدم خدمات صيانة متكاملة في مناطق الساحل الشمالي من العلمين الجديدة إلى مرسى مطروح.", linkText: "عرض التفاصيل", link: "/صيانة/lg/locations/north-coast" },
    ]
  },
};

// --- Carrier Data ---
export const carrierData: BrandData = {
  name: "كارير",
  slug: "carrier",
  primaryColor: "#0053A0", // Carrier Blue
  secondaryColor: "#FFFFFF",
  logo: "/brands/carrier.svg",
  logoWhite: "/brands/carrier/logos/carrier-logo-white.png",
  hotline: "01288582979",
  contactEmail: 'maintenance.service1111@gmail.com',

  hero: {
    slides: [
      { image: 'https://carrier-eg.com/wp-content/uploads/2025/01/family-enjoying-comfortable-home-environment-with-smart-heating-cooling-systems-highlightin_1316642-9933.avif', title: "صيانة تكييفات كارير رقم #1 في مصر", subtitle: "خبراء التبريد والتدفئة", buttonText: "اتصل بنا للتكييف", buttonLink: "tel:01288582979" },
      { image: 'https://carrier-eg.com/wp-content/uploads/2025/04/Blue-And-White-Modern-Air-Conditioner-Repair-Maintenance-Services-Instagram-Post-2-1024x1024.jpg', title: "تركيب وصيانة جميع موديلات كارير", subtitle: "خدمة معتمدة وموثوقة", buttonText: "حجز موعد صيانة", buttonLink: "#footer" },
      { image: 'https://carrier-eg.com/wp-content/uploads/2025/04/Carrier-Egypt-Maintenance.png', title: "صيانة تكييفات كارير المركزية", subtitle: "فنيون متخصصون في إصلاح وصيانة التكييفات المركزية", buttonText: "اتصل بنا لصيانة التكييف", buttonLink: "tel:01288582979" },
    ]
  },
  intro: {
    preTitle: "رواد تكنولوجيا التكييف",
    title: "مركز صيانة كارير المعتمد",
    paragraph: "باعتبارنا خبراء في مجال تكييف الهواء وحلول التبريد من كارير، نقدم خدمات صيانة وتركيب متكاملة لجميع أنظمة تكييف كارير السكنية والتجارية. نضمن لك هواءً نقيًا ومريحًا طوال العام بفضل فريقنا المتخصص وقطع الغيار الأصلية.",
    imageUrl: placeholderImg('carrier', 'technician-carrier', 'tech'),
    features: [
      { text: "صيانة دورية لتكييفات كارير لضمان أعلى كفاءة تبريد." },
      { text: "إصلاح جميع أعطال تكييفات كارير، بما في ذلك تسريب الفريون وأعطال الضاغط." },
      { text: "تنظيف شامل للوحدات الداخلية والخارجية والفلاتر." },
      { text: "خدمات شحن فريون دقيقة باستخدام أجهزة متخصصة." },
      { text: "تركيب احترافي لجميع موديلات تكييف كارير." },
    ],
    experience: { years: 18, text: "سنة في عالم التبريد" }
  },
  ctaBanner1: {
    title: "حافظ على برودة وانتعاش منزلك مع كارير",
    text: "لا تدع حرارة الصيف أو برودة الشتاء تؤثر على راحتك. اتصل بمركز صيانة كارير المعتمد الآن على 01288582979 للحصول على خدمة صيانة سريعة وموثوقة لتكييفك.",
    buttonText: "اتصل الآن 01288582979",
    buttonLink: "tel:01288582979"
  },
  articles: {
    preTitle: "خدمات تكييف كارير",
    title: "صيانة وتركيب تكييفات كارير",
    items: [
      { 
        image: "https://images.carriercms.com/image/upload/w_300,c_lfill,q_auto,f_auto/v1565185378/carrier/commercial-hvac-middle-east/products/ducted-systems/carrier-38aum-40rum-ducted-system.jpg",
        category: "صيانة تكييف كاريير سبليت",
        title: "خدمات صيانة تكييف كاريير سبليت",
        description: "صيانة شاملة لتكييفات كاريير سبليت تشمل تنظيف الفلاتر، فحص الفريون، وإصلاح جميع الأعطال الفنية.",
        linkText: "اعرف المزيد",
        link: "/صيانة/carrier/split"
      },
      { 
        image: "https://images.carriercms.com/image/upload/w_300,c_lfill,q_auto,f_auto/v1569591025/carrier/commercial-hvac-middle-east/products/ductless/carrier-optimax-ductless-split-system.jpg",
        category: "صيانة مكيف كارير سبليت Duct free",
        title: "خدمات صيانة مكيف كارير سبليت Duct free",
        description: "صيانة متخصصة لمكيفات كارير سبليت Duct free مع فحص شامل لنظام التبريد والتحكم وضمان الكفاءة القصوى.",
        linkText: "اعرف المزيد",
        link: "/صيانة/carrier/duct-free"
      },
      {
        image: "https://images.carriercms.com/image/upload/w_300,c_lfill,q_auto,f_auto/v1551309635/carrier/commercial-hvac-middle-east/products/ductless/carrier-comfort-ductless-split-system.jpg",
        category: "صيانة تكييف كارير فري ستاند",
        title: "خدمات صيانة تكييف كارير فري ستاند",
        description: "صيانة متخصصة لتكييفات كارير فري ستاند مع فحص شامل لنظام التبريد والتحكم وضمان الأداء الأمثل.",
        linkText: "اعرف المزيد",
        link: "/صيانة/carrier/free-stand"
      },
      {
        image: "https://big-mart.net/wp-content/uploads/2023/10/carrier-package-15-30tons.jpg",
        category: "صيانة تكييف كاريير باكدج",
        title: "خدمات صيانة تكييف كاريير باكدج",
        description: "صيانة متخصصة لوحدات الباكدج من كاريير مع فحص شامل لنظام التبريد والتحكم.",
        linkText: "اعرف المزيد", 
        link: "/صيانة/carrier/package"
      },
      {
        image: "https://images.carriercms.com/image/upload/w_300,c_lfill,q_auto,f_auto/v1565182394/carrier/commercial-hvac-middle-east/products/ducted-systems/carrier-38ckp-42tpm-ducted-system.jpg",
        category: "صيانة تكييف كاريير مركزي",
        title: "خدمات صيانة تكييف كاريير مركزي",
        description: "صيانة احترافية لأنظمة التكييف المركزي من كاريير للمباني التجارية والسكنية.",
        linkText: "اعرف المزيد",
        link: "/صيانة/carrier/central"
      },
      {
        image: "https://images.carriercms.com/image/upload/w_300,c_lfill,q_auto,f_auto/v1551309559/carrier/commercial-hvac-middle-east/products/chillers/carrier-30kav-air-cooled-chiller.jpg",
        category: "صيانة تشيلر كاريير",
        title: "خدمات صيانة تشيلر كاريير",
        description: "صيانة متخصصة لوحدات التشيلر من كاريير مع فحص كامل لدورة التبريد والضواغط.",
        linkText: "اعرف المزيد",
        link: "/صيانة/carrier/chiller"
      },
      {
        image: "https://images.carriercms.com/image/upload/w_300,c_lfill,q_auto,f_auto/v1560796870/carrier/commercial-hvac-middle-east/products/window-ac/carrier-51hsd-room-air-conditioner.jpg",
        category: "صيانة تكييف كاريير شباك",
        title: "خدمات صيانة تكييف كاريير شباك",
        description: "صيانة شاملة لتكييفات كاريير شباك مع فحص وإصلاح جميع المكونات.",
        linkText: "اعرف المزيد",
        link: "/صيانة/carrier/window"
      },
      // {
      //   image: "https://www.carrier.com/commercial/en/us/products/fan-coils/42ce/",
      //   category: "صيانة فان كويل كاريير",
      //   title: "خدمات صيانة فان كويل كاريير",
      //   description: "صيانة متخصصة لوحدات الفان كويل من كاريير مع فحص المراوح ونظام التبريد.",
      //   linkText: "اعرف المزيد",
      //   link: "/صيانة/carrier/fan-coil"
      // },

      { 
        image: "https://images.carriercms.com/image/upload/w_300,c_lfill,q_auto,f_auto/v1560857427/carrier/commercial-hvac-middle-east/products/vrf/carrier-38vt-042-056.jpg",
        category: "صيانة كارير VRF",
        title: "خدمات صيانة أنظمة كارير VRF",
        description: "صيانة متخصصة لأنظمة VRF من كارير للمباني التجارية والسكنية، مع خبرة في إصلاح وضبط النظام المركزي وكفاءة التبريد.",
        linkText: "اعرف المزيد",
        link: "/صيانة/carrier/vrf"
      },
      { 
        image: "https://big-mart.net/wp-content/uploads/2021/12/carrier-duct-split-247x296.jpg", 
        category: "صيانة مكيف سبليت مخفي كارير", 
        title: "خدمات صيانة مكيف سبليت مخفي كارير", 
        description: "صيانة متخصصة لمكيفات كارير السبليت المخفية، تشمل فحص وإصلاح نظام التبريد، تنظيف الفلاتر، وضمان التشغيل الأمثل.",
        linkText: "اعرف المزيد",
        link: "/صيانة/carrier/سبليت-مخفي"
      },
      { 
        image: "https://big-mart.net/wp-content/uploads/2021/12/carrier-xpression-247x296.jpg",
        category: "صيانة تكييف كايرير اكسبرشن سبليت",
        title: "خدمات صيانة تكييف كايرير اكسبرشن سبليت",
        description: "صيانة متخصصة لتكييفات كايرير اكسبرشن سبليت مع ضمان الجودة وقطع الغيار الأصلية",
        linkText: "اعرف المزيد",
        link: "/صيانة/carrier/اكسبرشن-سبليت"
      },
      { 
        image: "https://images.carriercms.com/image/upload/w_300,c_lfill,q_auto,f_auto/v1551309677/carrier/commercial-hvac-middle-east/products/fan-coils/carrier-42gwc-fan-coil.jpg",
        category: "صيانة تكييف كارير كاسيت",
        title: "خدمات صيانة تكييف كارير كاسيت",
        description: "صيانة متخصصة لتكييفات كارير كاسيت مع خبرة في إصلاح نظام التبريد المركزي وضبط تدفق الهواء للأداء الأمثل",
        linkText: "اعرف المزيد",
        link: "/صيانة/carrier/كاسيت"
      },
      { 
        image: "https://e-motion-cdn.fra1.cdn.digitaloceanspaces.com/category/137/lHDm3CVSt0fDJus9TvmZMUUKzEuUZJKUADjjYgP3.jpg", 
        category: "صيانة تكييف كارير كونسيلد",
        title: "خدمات صيانة تكييف كارير كونسيلد",
        description: "صيانة متخصصة لتكييفات كارير كونسيلد مع خبرة في التركيب والصيانة الدورية وإصلاح الأعطال",
        linkText: "اعرف المزيد",
        link: "/صيانة/carrier/كونسيلد"
      },

      { image: "https://m.media-amazon.com/images/I/61DClSTtjbL._AC_UL480_FMwebp_QL65_.jpg", category: "تأسيس مواسير التكييف", title: "خدمات تأسيس مواسير التكييف", description: "نقدم خدمات احترافية في تأسيس وتركيب مواسير التكييف، مع ضمان جودة العمل وسلامة التركيب والعزل الحراري المثالي.", linkText: "اعرف المزيد", link: "/صيانة/carrier/تأسيس-مواسير" },
      { image: "https://img.freepik.com/premium-photo/set-different-home-appliances-with-vacuum-cleaner-yellow-background_1339860-3766.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة المبيعات والتوريدات", title: "خدمات المبيعات وتوريد الأجهزة", description: "نوفر خدمات بيع وتوريد جميع أجهزة كاريير مع ضمان الوكيل وخدمات ما بعد البيع وأفضل الأسعار في السوق.", linkText: "اعرف المزيد", link: "/صيانة/carrier/مبيعات" },
      
    ]
  },
  other_articles: null,
  features: {
    preTitle: "لماذا تختارنا لتكييفك؟",
    title: "مميزات مركز صيانة كارير",
    items: [
      { iconName: "Thermometer", title: "خبرة في التحكم بالمناخ", description: "متخصصون في جميع جوانب تكنولوجيا التبريد والتدفئة من كارير لتحقيق الراحة المثالية."},
      { iconName: "Wind", title: "ضمان كفاءة التبريد", description: "نضمن لك استعادة تكييفك لكفاءته القصوى في التبريد بعد خدمات الصيانة الدورية لدينا."},
      { iconName: "Filter", title: "تنظيف وتعقيم الوحدات", description: "خدمات تنظيف عميق للفلاتر والوحدات لضمان هواء نقي وصحي وخالٍ من الملوثات."},
      { iconName: "Box", title: "معدات فحص متطورة", description: "نستخدم أحدث المعدات لتشخيص الأعطال بدقة وقياس أداء التكييف بكفاءة."},
      { iconName: "Clock", title: "خدمة طوارئ سريعة", description: "نوفر خدمة طوارئ لإصلاح أعطال التكييف المفاجئة خلال فصل الصيف لضمان راحتك."},
      { iconName: "UserCheck", title: "فنيون متخصصون بكارير", description: "فريقنا مدرب خصيصًا على التعامل مع جميع موديلات وأنظمة تكييف كارير."},
    ]
  },
  counters: {
    items: [
        { value: 35000, label: "تكييف تم صيانته" },
        { value: 18000, label: "عميل يستمتع بالبرودة" },
        { value: 18, label: "عاماً من الخبرة بالتبريد" },
        { value: 99, label: "% كفاءة بعد الصيانة" },
    ]
  },
  locations: {
    preTitle: "نصل إليك",
    title: "مراكز خدمة تكييف كارير",
     items: [
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة القاهرة", title: "مركز خدمة كارير القاهرة", description: "نخدم جميع مناطق القاهرة الكبرى والجيزة، اتصل بنا لتركيب أو صيانة تكييف كارير.", linkText: "اتصل الآن", link: "tel:01288582979" },
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة الغردقة", title: "مركز خدمة كارير الغردقة", description: "نوفر خدمات صيانة وتركيب سريعة في الساحل الشمالي خلال فصل الصيف لضمان راحتك.", linkText: "اتصل الآن", link: "tel:01288582979" },
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "فرع الساحل الشمالي", title: "مركز شارب الساحل الشمالي", description: "نقدم خدمات صيانة متكاملة في مناطق الساحل الشمالي من العلمين الجديدة إلى مرسى مطروح.", linkText: "تواصل معنا", link: "tel:01288582979" }
    ]
  },
};

// --- Unionaire Data ---
export const unionaireData: BrandData = {
  name: "يونيون اير",
  slug: "unionaire",
  primaryColor: "#2260A4", // Unionaire Red
  secondaryColor: "#FFFFFF",
  logo: "/brands/unionaire.png",
  logoWhite: "/brands/unionaire/logos/unionaire-logo-white.png",
  hotline: "01288582979",
  contactEmail: 'maintenance.service1111@gmail.com',

  hero: {
    slides: [
      { image: 'https://unionaire.com/wp-content/uploads/2025/02/Group-1000002280.png', title: "صيانة تكييف يونيون اير المعتمدة", subtitle: "جودة وكفاءة تثق بها", buttonText: "اتصل بالصيانة", buttonLink: "tel:01288582979" },
      { image: 'https://unionaire.com/wp-content/uploads/2025/03/30-Years-Website-Banner-774%C3%97436-1.png', title: "تركيب وصيانة تكييف يونيون اير", subtitle: "استمتع بجو مثالي", buttonText: "طلب صيانة تكييف", buttonLink: "#footer" },
      { image: 'https://unionaire.com/wp-content/uploads/2025/03/Ramadan-Campaign-Website-Banner-%D8%B9%D8%A7%D9%8A%D8%B4%D9%8A%D9%86-%D9%84%D8%AD%D8%A8%D8%A7%D9%8A%D8%A8%D9%86%D8%A7-2.jpg', title: "فريق فني متخصص لصيانة تكييف يونيون اير", subtitle: "نقدم لكم خبرة 22 سنة في خدمة الصناعة المصرية", buttonText: "اعرف المزيد", buttonLink: "#intro" },
    ]
  },
  intro: {
    preTitle: "الجودة المصرية الموثوقة",
    title: "مركز صيانة يونيون اير المعتمد",
    paragraph: "نحن مركز الصيانة المعتمد لمنتجات يونيون اير في مصر. نقدم خدمات صيانة شاملة لجميع أجهزة يونيون اير، بما في ذلك التكييفات، الشاشات، البوتاجازات، والغسالات، مع الالتزام بتوفير قطع غيار أصلية وفنيين متخصصين لضمان أفضل أداء لأجهزتك.",
    imageUrl: placeholderImg('unionaire', 'technician-red', 'tech'),
    features: [
      { text: "فريق فني متخصص ومدرب على صيانة جميع منتجات يونيون اير." },
      { text: "استخدام قطع غيار يونيون اير الأصلية لضمان الجودة والعمر الافتراضي." },
      { text: "ضمان على قطع الغيار وعملية الصيانة المقدمة من مركزنا." },
      { text: "خدمة سريعة وفعالة في جميع محافظات مصر." },
      { text: "أسعار صيانة تنافسية ومعقولة لجميع العملاء." },
    ],
    experience: { years: 22, text: "سنة في خدمة الصناعة المصرية" }
  },
  ctaBanner1: {
    title: "هل يحتاج جهاز يونيون اير الخاص بك للصيانة؟",
    text: "اتصل بنا الآن على الخط الساخن 01288582979. مركز صيانة يونيون اير المعتمد يقدم لك حلولاً سريعة وموثوقة لجميع أجهزتك المنزلية مع ضمان الجودة.",
    buttonText: "اتصل الآن 01288582979",
    buttonLink: "tel:01288582979"
  },
  articles: {
    preTitle: "خدمات صيانة يونيون اير",
    title: "صيانة شاملة لأجهزة يونيون اير",
    items: [
      { image: "https://unionaire.com/wp-content/uploads/2024/09/ARTI012HV50NBRLNPRO.png", category: "صيانة تكييفات يونيون اير سبليت", title: "صيانة تكييفات يونيون اير سبليت", description: "خدمات صيانة دورية وشاملة لتكييفات يونيون اير سبليت، تشمل تنظيف الفلاتر، فحص الفريون، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/unionaire/سبليت" },
      { image: "https://cairocart.com/pub/media/catalog/product/cache/f65e4f3f0d55f7c692e033a9434b3a7f/r/a/raq12cr.jpg", category: "صيانة تكييفات يونيون اير شباك", title: "صيانة تكييفات يونيون اير شباك", description: "نقدم خدمات صيانة متخصصة لتكييفات يونيون اير شباك، تشمل فحص الفريون، تنظيف الفلاتر، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/unionaire/شباك" },
      { image: "https://m.media-amazon.com/images/I/61DClSTtjbL._AC_UL480_FMwebp_QL65_.jpg", category: "تأسيس مواسير التكييف", title: "خدمات تأسيس مواسير التكييف", description: "نقدم خدمات احترافية في تأسيس وتركيب مواسير التكييف، مع ضمان جودة العمل وسلامة التركيب وأفضل الخامات.", linkText: "اعرف المزيد", link: "/صيانة/unionaire/تأسيس-مواسير" },
      { image: "https://img.freepik.com/premium-photo/set-different-home-appliances-with-vacuum-cleaner-yellow-background_1339860-3766.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة المبيعات والتوريدات", title: "خدمات المبيعات وتوريد الأجهزة", description: "نوفر خدمات بيع وتوريد جميع أجهزة يونيون اير مع ضمان الوكيل وخدمات ما بعد البيع.", linkText: "اعرف المزيد", link: "/صيانة/unionaire/مبيعات" },    ]
  },
  other_articles: {
    preTitle: "خدماتنا الاخرى",
    title: "خدماتنا الاخرى",
    items: [
      { image: "https://unionaire.com/wp-content/uploads/2024/06/Artboard-1.png", category: "صيانة ثلاجات يونيون اير", title: "خدمات صيانة ثلاجات يونيون اير", description: "صيانة شاملة لجميع موديلات ثلاجات يونيون اير، تشمل إصلاح نظام التبريد، الثرموستات، وجميع الأعطال الفنية.", linkText: "اعرف المزيد", link: "/صيانة/unionaire/ثلاجات" },
      { image: "https://unionaire.com/wp-content/uploads/2022/12/Screen-500@3x-600x600.png", category: "صيانة شاشات يونيون اير", title: "خدمات صيانة شاشات يونيون اير", description: "صيانة متخصصة لشاشات يونيون اير الذكية والعادية، مع توفير قطع غيار أصلية وضمان على الإصلاح.", linkText: "اعرف المزيد", link: "/صيانة/unionaire/شاشات" },

      { 
        image: "https://unionaire.com/wp-content/uploads/2024/12/C69SSGC319IDSFMD2WAL-1.png",
        category: "صيانة بوتاجازات يونيون اير",
        title: "خدمات صيانة بوتاجازات يونيون اير",
        description: "صيانة شاملة لجميع موديلات بوتاجازات يونيون اير مع ضمان الإصلاح وقطع الغيار الأصلية",
        linkText: "اعرف المزيد",
        link: "/صيانة/unionaire/بوتاجازات"
      },
      {
        image: "https://unionaire.com/wp-content/uploads/2025/03/Unionaire1732-copy2-copy-600x600.png",
        category: "صيانة ديب فريزر يونيون اير",
        title: "خدمات صيانة ديب فريزر يونيون اير",
        description: "صيانة احترافية لديب فريزر يونيون اير مع ضمان جودة الإصلاح",
        linkText: "اعرف المزيد",
        link: "/صيانة/unionaire/ديب-فريزر"
      },
      {
        image: "https://unionaire.com/wp-content/uploads/2021/06/UW080TPLQGR.png",
        category: "صيانة غسالات يونيون اير",
        title: "خدمات صيانة غسالات يونيون اير",
        description: "صيانة شاملة لغسالات يونيون اير الأوتوماتيك والعادية مع ضمان الخدمة",
        linkText: "اعرف المزيد",
        link: "/صيانة/unionaire/غسالات"
      },
      {
        image: "https://unionaire.com/wp-content/uploads/2025/01/UGH060DGABK.png",
        category: "صيانة سخانات يونيون اير",
        title: "خدمات صيانة سخانات يونيون اير",
        description: "صيانة متخصصة لسخانات يونيون اير مع ضمان السلامة والأداء",
        linkText: "اعرف المزيد",
        link: "/صيانة/unionaire/سخانات"
      },
      {
        image: "https://unionaire.com/wp-content/uploads/2023/01/UFS18BVRAROMA-600x600.png",
        category: "صيانة مراوح يونيون اير",
        title: "خدمات صيانة مراوح يونيون اير",
        description: "صيانة احترافية لمراوح يونيون اير مع ضمان الجودة",
        linkText: "اعرف المزيد",
        link: "/صيانة/unionaire/مراوح"
      }
    ]
  },
  features: {
    preTitle: "ثقة وجودة",
    title: "لماذا مركز صيانة يونيون اير؟",
    items: [
      { iconName: "Star", title: "وكيل معتمد ليونيون اير", description: "نحن المركز المعتمد رسميًا لصيانة منتجات يونيون اير، مما يضمن لك خدمة موثوقة."},
      { iconName: "CheckSquare", title: "قطع غيار أصلية 100%", description: "نستخدم فقط قطع الغيار الأصلية من يونيون اير لضمان توافقها مع جهازك."},
      { iconName: "Users", title: "فنيون متخصصون بيونيون اير", description: "فريقنا على دراية كاملة بجميع موديلات يونيون اير وقادر على التعامل مع كافة الأعطال."},
      { iconName: "Truck", title: "تغطية واسعة للمحافظات", description: "نصل بخدماتنا إلى معظم محافظات الجمهورية لخدمة أكبر عدد من العملاء."},
      { iconName: "PhoneCall", title: "دعم فني متواصل", description: "فريق خدمة العملاء لدينا متاح للرد على استفساراتكم وحجز مواعيد الصيانة."},
      { iconName: "Tag", title: "أسعار صيانة معقولة", description: "نقدم خدمات صيانة عالية الجودة بأسعار تنافسية تناسب جميع الميزانيات."},
    ]
  },
  counters: {
    items: [
        { value: 45000, label: "جهاز يونيون اير تم صيانته" },
        { value: 28000, label: "عميل مصري سعيد" },
        { value: 22, label: "عاماً من الثقة" },
        { value: 96, label: "% رضاء عن الخدمة" },
    ]
  },
  locations: {
    preTitle: "فروعنا المعتمدة",
    title: "مراكز صيانة يونيون اير القريبة منك",
     items: [
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "فرع القاهرة", title: "مركز يونيون اير القاهرة", description: "المركز الرئيسي بالقاهرة لخدمة عملاء يونيون اير وتقديم الدعم الشامل.", linkText: "تواصل معنا", link: "tel:01288582979" },
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "فرع الغردقة", title: "مركز يونيون اير الغردقة", description: "فرعنا في الغردقة لخدمة عملاء المحافظة والمناطق المجاورة بسرعة وكفاءة.", linkText: "تواصل معنا", link: "tel:01288582979" },
{ image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", 
  category: "مركز الساحل الشمالي", 
  title: "مركز صيانة فريش بالساحل الشمالي", 
  description: "نقدم خدمات صيانة فريش المعتمدة في منطقة الساحل الشمالي من العلمين الجديدة إلى مرسى مطروح.", 
  linkText: "اتصل بالمركز", 
  link: "tel:01288582979" }
    ]
  },
};

// --- Sharp Data ---
export const sharpData: BrandData = {
  name: "شارب",
  slug: "sharp",
  primaryColor: "#E3051B", // Sharp Red
  secondaryColor: "#FFFFFF",
  logo: "/brands/sharp.png",
  logoWhite: "/brands/sharp/logos/sharp-logo-white.png",
  hotline: "01288582979", // Assuming hotline for Sharp

  contactEmail: 'maintenance.service1111@gmail.com',

  hero: {
    slides: [
      { image: 'https://img.freepik.com/premium-photo/1208084882_1221914-8128.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740', title: "صيانة تكييفات شارب رقم #1 في مصر", subtitle: "خبراء التكنولوجيا اليابانية", buttonText: "اتصل بنا للتكييف", buttonLink: "tel:01288582979" },
      { image: 'https://img.freepik.com/free-photo/checking-conditioner_1098-17787.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740', title: "تركيب وصيانة جميع موديلات شارب", subtitle: "خدمة معتمدة وموثوقة", buttonText: "حجز موعد صيانة", buttonLink: "#footer" },
      { image: 'https://img.freepik.com/premium-photo/male-technician-overalls-blue-cap-repairs-air-conditioner-wall_353017-470.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740', title: "صيانة تكييفات شارب المركزية", subtitle: "فنيون متخصصون في إصلاح وصيانة التكييفات اليابانية من شارب", buttonText: "اتصل بنا لصيانة التكييف", buttonLink: "tel:01288582979" },
    ]
  },
  intro: {
    preTitle: "التكنولوجيا اليابانية الموثوقة",
    title: "مركز صيانة شارب المعتمد",
    paragraph: "نوفر في مركز صيانة شارب المعتمد خدمات إصلاح وصيانة لجميع أجهزة شارب المنزلية، مع الحفاظ على الجودة والدقة اليابانية التي تتميز بها منتجات شارب. نستخدم قطع غيار أصلية وفنيين مدربين لضمان عودة جهازك للعمل بكفاءة.",
    imageUrl: placeholderImg('sharp', 'technician-sharp', 'tech'),
    features: [
      { text: "الوكيل المعتمد لصيانة أجهزة شارب في مصر." },
      { text: "فنيون متخصصون في تكنولوجيا شارب اليابانية." },
      { text: "ضمان على قطع الغيار الأصلية والإصلاح." },
      { text: "خدمة سريعة وموثوقة في القاهرة والمحافظات." },
      { text: "تشخيص دقيق لأعطال أجهزة شارب." },
    ],
    experience: { years: 15, text: "سنة في خدمة شارب" }
  },
  ctaBanner1: {
    title: "هل لديك جهاز شارب يحتاج إلى صيانة؟",
    text: "اتصل بمركز صيانة شارب المعتمد على 01288582979. نقدم لك خدمة احترافية وسريعة باستخدام قطع غيار أصلية لضمان أفضل أداء لجهازك.",
    buttonText: "اتصل الآن 01288582979",
    buttonLink: "tel:01288582979"
  },
  articles: {
    preTitle: "خدمات صيانة شارب",
    title: "صيانة جميع أجهزة شارب المنزلية",
    items: [
      { image: "https://sharpelaraby.group/wp-content/uploads/2025/03/2-25-ay-ap18uhe-300x225.jpg", category: "صيانة تكييفات شارب سبليت", title: "صيانة تكييفات شارب سبليت", description: "خدمات صيانة دورية وشاملة لتكييفات شارب سبليت، تشمل تنظيف الفلاتر، فحص الفريون، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/sharp/سبليت" },
      { image: "https://m.media-amazon.com/images/I/61DClSTtjbL._AC_UL480_FMwebp_QL65_.jpg", category: "تأسيس مواسير التكييف", title: "خدمات تأسيس مواسير التكييف", description: "نقدم خدمات احترافية في تأسيس وتركيب مواسير التكييف، مع ضمان جودة العمل وسلامة التركيب.", linkText: "اعرف المزيد", link: "/صيانة/sharp/تأسيس-مواسير" },
      { image: "https://img.freepik.com/premium-photo/set-different-home-appliances-with-vacuum-cleaner-yellow-background_1339860-3766.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة المبيعات والتوريدات", title: "خدمات المبيعات وتوريد الأجهزة", description: "نوفر خدمات بيع وتوريد جميع أجهزة شارب مع ضمان الوكيل وخدمات ما بعد البيع.", linkText: "اعرف المزيد", link: "/صيانة/sharp/مبيعات" },

    ]
  },
  other_articles: {
    preTitle: "خدمات صيانة شارب",
    title: "صيانة جميع أجهزة شارب المنزلية",
    items: [
      { image: "https://www.elarabygroup.com/media/iopt/catalog/product/cache/112e87ce2e3e8d6e36e718da758ea3a7/image/55e9f1/450-sj-pc58a-sl.jpg", category: "صيانة ثلاجات شارب", title: "خدمات صيانة ثلاجات شارب", description: "صيانة شاملة لجميع موديلات ثلاجات شارب، تشمل إصلاح نظام التبريد، الثرموستات، وجميع الأعطال الفنية.", linkText: "اعرف المزيد", link: "/صيانة/sharp/ثلاجات" },
      { image: "https://www.elarabygroup.com/media/catalog/product/cache/112e87ce2e3e8d6e36e718da758ea3a7/image/76244b00/hd-32-2t-c32fg6ex.jpg", category: "صيانة شاشات شارب", title: "خدمات صيانة شاشات شارب", description: "صيانة متخصصة لشاشات شارب الذكية والعادية، مع توفير قطع غيار أصلية وضمان على الإصلاح.", linkText: "اعرف المزيد", link: "/صيانة/sharp/شاشات" },

{ image: "https://www.elarabygroup.com/media/iopt/catalog/product/cache/112e87ce2e3e8d6e36e718da758ea3a7/image/58042847/128-2-fx-j80sa-w.jpg", 
  category: "صيانة منقيات هواء شارب", 
  title: "خدمات صيانة منقيات هواء شارب", 
  description: "صيانة شاملة لمنقيات الهواء من شارب مع تنظيف وتغيير الفلاتر وضمان جودة التنقية.", 
  linkText: "اعرف المزيد", 
  link: "/صيانة/fresh/منقي-هواء" },

{ image: "https://www.elarabygroup.com/media/iopt/catalog/product/cache/112e87ce2e3e8d6e36e718da758ea3a7/image/5391d507/4k-65-4t-c65dl6ex.jpg", 
  category: "صيانة شاشات شارب", 
  title: "خدمات صيانة شاشات شارب", 
  description: "صيانة متخصصة لشاشات شارب الذكية والعادية مع ضمان جودة الصورة والصوت.", 
  linkText: "اعرف المزيد", 
  link: "/صيانة/fresh/شاشات" },

{ image: "https://www.raneen.com/media/catalog/product/1/5/1500.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=1000&width=1000&canvas=1000:1000", 
  category: "صيانة ثلاجات شارب", 
  title: "خدمات صيانة ثلاجات شارب", 
  description: "صيانة شاملة لثلاجات شارب مع إصلاح نظام التبريد وضمان كفاءة الأداء.", 
  linkText: "اعرف المزيد", 
  link: "/صيانة/fresh/ثلاجات" },

{ image: "https://www.elarabygroup.com/media/iopt/catalog/product/cache/112e87ce2e3e8d6e36e718da758ea3a7/image/4951471e/7-300-fj-ec27-wh.jpg", 
  category: "صيانة ديب فريزر شارب", 
  title: "خدمات صيانة ديب فريزر شارب", 
  description: "صيانة متخصصة لديب فريزر شارب مع ضمان التبريد المثالي وكفاءة الطاقة.", 
  linkText: "اعرف المزيد", 
  link: "/صيانة/fresh/ديب-فريزر" },

{ image: "https://www.raneen.com/media/catalog/product/e/s/eshr11822slv-conf_es7yprkaghgwizvk.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300", 
  category: "صيانة غسالات ملابس شارب", 
  title: "خدمات صيانة غسالات ملابس شارب", 
  description: "صيانة شاملة لغسالات الملابس شارب الأوتوماتيك والعادية مع ضمان الأداء.", 
  linkText: "اعرف المزيد", 
  link: "/صيانة/fresh/غسالات-ملابس" },

{ image: "https://www.raneen.com/media/catalog/product/2/_/2_608.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300", 
  category: "صيانة غسالات أطباق شارب", 
  title: "خدمات صيانة غسالات أطباق شارب", 
  description: "صيانة متخصصة لغسالات الأطباق شارب مع ضمان كفاءة التنظيف والتجفيف.", 
  linkText: "اعرف المزيد", 
  link: "/صيانة/fresh/غسالات-اطباق" },
{ 
  image: "https://www.raneen.com/media/catalog/product/2/_/2_567_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300",
  category: "صيانة ميكروويف شارب",
  title: "خدمات صيانة ميكروويف شارب",
  description: "صيانة شاملة لجميع موديلات ميكروويف شارب مع ضمان الإصلاح وقطع الغيار الأصلية.",
  linkText: "اعرف المزيد",
  link: "/صيانة/lg/ميكروويف"
},
{ 
  image: "https://www.raneen.com/media/catalog/product/e/l/el1032086blk-conf.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300", 
  category: "صيانة فرن كهربائي", 
  title: "خدمات صيانة فرن كهربائي", 
  description: "صيانة متخصصة للأفران الكهربائية مع حلول فعالة لجميع المشاكل الفنية وضمان الخدمة.", 
  linkText: "اعرف المزيد", 
  link: "/صيانة/lg/فرن-كهربائي" 
},
{ image: "https://www.raneen.com/media/catalog/product/_/k/_kfaf70msttat.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300", 
  category: "صيانة قلاية شارب الكهربائية", 
  title: "خدمات صيانة قلاية شارب الكهربائية", 
  description: "صيانة متخصصة لقلايات شارب الكهربائية مع ضمان جودة الإصلاح وقطع الغيار الأصلية.", 
  linkText: "اعرف المزيد", 
  link: "/صيانة/fresh/قلاية-كهربائية" },
{ image: "https://www.raneen.com/media/catalog/product/1/0/1069055-1_hjlsm6s4dgvkkkb9_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300", 
  category: "صيانة مكنسة شارب الكهربائية", 
  title: "خدمات صيانة مكنسة شارب الكهربائية", 
  description: "صيانة متخصصة لمكنسة شارب الكهربائية مع ضمان جودة الإصلاح وقطع الغيار الأصلية.", 
  linkText: "اعرف المزيد", 
  link: "/صيانة/fresh/مكنسة" },


  
    ]
  },
  features: {
    preTitle: "الجودة اليابانية",
    title: "لماذا تختار مركز صيانة شارب؟",
    items: [
      { iconName: "Globe", title: "معايير جودة يابانية", description: "نلتزم بأعلى معايير الجودة والدقة في عمليات الصيانة كما هو معهود من شارب."},
      { iconName: "Cpu", title: "خبرة بالتكنولوجيا المتقدمة", description: "فهم عميق لتقنيات شارب المبتكرة مثل البلازما كلاستر وغيرها في أجهزتها."},
      { iconName: "CheckCircle", title: "قطع غيار شارب الأصلية", description: "نضمن استخدام قطع غيار أصلية مستوردة للحفاظ على جودة وأداء جهازك."},
      { iconName: "Wrench", title: "فنيون مدربون من شارب", description: "تدريب متخصص لفنيينا على أيدي خبراء شارب للتعامل مع كافة الأعطال."},
      { iconName: "ShieldCheck", title: "ضمان موثوق على الإصلاح", description: "نوفر ضماناً فعالاً على عملية الصيانة وقطع الغيار المستخدمة."},
      { iconName: "Clock", title: "استجابة سريعة للمواعيد", description: "نحرص على الالتزام بالمواعيد وتقديم الخدمة في أسرع وقت ممكن."},
    ]
  },
  counters: {
    items: [
        { value: 18000, label: "جهاز شارب تم إصلاحه" },
        { value: 9500, label: "عميل يثق بالجودة اليابانية" },
        { value: 15, label: "عاماً من خدمة شارب" },
        { value: 97, label: "% دقة في الإصلاح" },
    ]
  },
  locations: {
    preTitle: "أين تجدنا؟",
    title: "مراكز صيانة شارب المعتمدة",
     items: [
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "مركز القاهرة", title: "مركز صيانة شارب بالقاهرة", description: "المركز المعتمد لصيانة شارب في القاهرة الكبرى، يقدم خدمة سريعة ومضمونة.", linkText: "اتصل بالمركز", link: "tel:01288582979" },
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "مركز الغردقة", title: "مركز صيانة شارب بالغردقة", description: "نخدم عملاء الغردقة بخدمات صيانة معتمدة لجميع أجهزة شارب.", linkText: "اتصل بالمركز", link: "tel:01288582979" },
      { image: "https://img.freepik.com/free-photo/woman-working-call-center-holding-pair-headphones_23-2149256146.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", 
        category: "مركز الساحل الشمالي", 
        title: "مركز صيانة شارب بالساحل الشمالي", 
        description: "نقدم خدمات صيانة شارب المعتمدة في منطقة الساحل الشمالي من العلمين الجديدة إلى مرسى مطروح.", 
        linkText: "اتصل بالمركز", 
        link: "tel:01288582979" }
    ]
  },
};

// --- Fresh Data ---
export const freshData: BrandData = {
  name: "فريش",
  slug: "fresh",
  primaryColor: "#ED1C24", // Fresh Red
  secondaryColor: "#FFFFFF",
  logo: "/brands/fresh.png",
  logoWhite: "/brands/fresh.svg",
  hotline: "01288582979", // Assuming hotline for Fresh

  contactEmail: 'maintenance.service1111@gmail.com',

  hero: {
    slides: [
      { image: 'https://be.fresh.com.eg/media/offers/1742466784178.jpg', title: "صيانة تكييفات فريش انفرتر", subtitle: "خبراء التبريد والتدفئة", buttonText: "اتصل بنا للتكييف", buttonLink: "tel:01288582979" },
      { image: 'https://be.fresh.com.eg/media/offers/1682937820553.jpg', title: "تركيب وصيانة تكييفات فريش كونسيلد", subtitle: "خدمة معتمدة وموثوقة", buttonText: "حجز موعد صيانة", buttonLink: "#footer" },
      { image: 'https://be.fresh.com.eg/media/offers/1741690315746.jpg', title: "صيانة تكييفات فريش فري ستاند", subtitle: "فنيون متخصصون في صيانة التكييفات الرأسية", buttonText: "اتصل بنا للصيانة", buttonLink: "tel:01288582979" },
    ]
  },
  intro: {
    preTitle: "الاختيار الأمثل للمنزل المصري",
    title: "مركز صيانة فريش المعتمد",
    paragraph: "نحن في مركز صيانة فريش المعتمد نقدم خدمات إصلاح وصيانة موثوقة لجميع أجهزة فريش المنزلية التي تثق بها العائلة المصرية. نضمن لك خدمة سريعة، أسعار مناسبة، وقطع غيار أصلية للحفاظ على أجهزتك تعمل بكفاءة.",
    imageUrl: placeholderImg('fresh', 'technician-fresh', 'tech'),
    features: [
      { text: "المركز المعتمد لصيانة جميع منتجات فريش (سخانات، بوتاجازات، غسالات، إلخ)." },
      { text: "قطع غيار فريش أصلية لضمان الأداء الأمثل والسلامة." },
      { text: "فنيون مدربون ومؤهلون للتعامل مع جميع أعطال أجهزة فريش." },
      { text: "أسعار صيانة تنافسية وواضحة." },
      { text: "خدمة تغطي معظم محافظات مصر." },
    ],
    experience: { years: 12, text: "سنة في خدمة فريش" }
  },
  ctaBanner1: {
    title: "جهاز فريش لديك لا يعمل؟ الحل بسيط!",
    text: "اتصل الآن بمركز صيانة فريش المعتمد على 01288582979. سيقوم فريقنا بتقديم الدعم اللازم وتحديد موعد لإصلاح جهازك بسرعة وكفاءة وبأسعار معقولة.",
    buttonText: "اتصل الآن 01288582979",
    buttonLink: "tel:01288582979"
  },
  articles: {
    preTitle: "خدماتنا لأجهزة فريش",
    title: "صيانة شاملة لمنتجات فريش",
    items: [
      { image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/h/u/hummer-_black_1.png", 
        category: "صيانة تكييفات فريش سبليت", 
        title: "صيانة تكييفات فريش سبليت", 
        description: "خدمات صيانة شاملة لتكييفات فريش سبليت العادية، تشمل تنظيف الفلاتر، فحص الفريون، وإصلاح جميع الأعطال الفنية مع ضمان الخدمة.", 
        linkText: "اعرف المزيد", 
        link: "/صيانة/fresh/سبليت" },
      
      { image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/f/r/fresh_air_conditioner_smart_inverter_wifi_3_hp_cool-hot_plasma_2.jpg", 
        category: "صيانة تكييفات فريش سبليت انفرتر", 
        title: "صيانة تكييفات فريش سبليت انفرتر", 
        description: "خدمات صيانة متخصصة لتكييفات فريش سبليت انفرتر الموفرة للطاقة، مع فحص دوري للنظام الذكي وإصلاح الأعطال الإلكترونية.", 
        linkText: "اعرف المزيد", 
        link: "/صيانة/fresh/سبليت-انفرتر" },

      { image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/f/r/fresh_air_conditioner_smart_free_stand_7.5_hp_cold-hot.png", 
        category: "صيانة تكييفات فريش فري ستاند", 
        title: "صيانة تكييفات فريش فري ستاند", 
        description: "صيانة شاملة لتكييفات فريش فري ستاند القوية، مع خدمات تركيب وصيانة دورية وإصلاح جميع المشاكل الفنية.", 
        linkText: "اعرف المزيد", 
        link: "/صيانة/fresh/فري-ستاند" },

      { image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/f/r/fresh_air_conditioner_duct_inverter_turbo_5_hp_cold_-_hot.jpg", 
        category: "صيانة تكييفات فريش كونسيلد", 
        title: "صيانة تكييفات فريش كونسيلد", 
        description: "خدمات صيانة احترافية لتكييفات فريش الكونسيلد المخفية، مع فحص شامل لنظام التبريد وإصلاح التسريبات.", 
        linkText: "اعرف المزيد", 
        link: "/صيانة/fresh/كونسيلد" },

      { image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/a/i/air_curtain_2023.png", 
        category: "صيانة ستائر الهواء فريش", 
        title: "صيانة ستائر الهواء فريش", 
        description: "خدمات تركيب وصيانة ستائر الهواء فريش للمحلات والمنشآت التجارية، مع ضمان كفاءة الأداء وتوفير قطع الغيار الأصلية.", 
        linkText: "اعرف المزيد", 
        link: "/صيانة/fresh/ستائر-هواء" },

      { image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/w/h/whatsapp_image_2025-05-15_at_1.39.15_pm.jpeg", 
        category: "صيانة تكييفات فريش المحمولة", 
        title: "صيانة تكييفات فريش المحمولة", 
        description: "خدمات صيانة متخصصة للتكييفات المحمولة من فريش، تشمل تنظيف الفلاتر وفحص نظام التبريد وإصلاح كافة الأعطال.", 
        linkText: "اعرف المزيد", 
        link: "/صيانة/fresh/تكييف-محمول" },
    ]
  },
  other_articles: {
    preTitle: "خدماتنا لأجهزة فريش",
    title: "صيانة شاملة لمنتجات فريش",
    items: [
{ image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/2/5/25_liter_girl_1.png", category: "صيانة ميكروويف فريش", title: "خدمات صيانة ميكروويف فريش", description: "صيانة شاملة لجميع موديلات ميكروويف فريش مع ضمان الإصلاح وقطع الغيار الأصلية.", linkText: "اعرف المزيد", link: "/صيانة/fresh/ميكروويف" },

{ image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/f/r/fresh_plaza_oven_-_48_liters_grill_and_fan_.jpg", category: "صيانة أفران فريش", title: "خدمات صيانة أفران فريش الكهربائية", description: "صيانة متخصصة لأفران فريش الكهربائية مع حلول فعالة لجميع المشاكل الفنية.", linkText: "اعرف المزيد", link: "/صيانة/fresh/فرن-كهرباء" },

{ image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/f/r/fresh_vacuum_cleaner_spider_1500_w_bag.jpg", category: "صيانة مكانس فريش", title: "خدمات صيانة مكانس فريش", description: "صيانة احترافية لمكانس فريش الكهربائية مع ضمان جودة الإصلاح.", linkText: "اعرف المزيد", link: "/صيانة/fresh/مكنسة" },

{ image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/f/r/fresh_iron_cordless.png", category: "صيانة مكاوي فريش", title: "خدمات صيانة مكاوي فريش", description: "صيانة متخصصة لمكاوي فريش البخارية والعادية مع ضمان الخدمة.", linkText: "اعرف المزيد", link: "/صيانة/fresh/مكواة" },

{ image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/f/r/fresh_heater_2100_watt_-_quratez_psm-210.jpg", category: "صيانة دفايات فريش", title: "خدمات صيانة دفايات فريش", description: "صيانة شاملة لدفايات فريش الكهربائية مع ضمان السلامة والأداء.", linkText: "اعرف المزيد", link: "/صيانة/fresh/دفاية" },

{ image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/6/0/60-front.jpg", category: "صيانة مبردات فريش", title: "خدمات صيانة مبردات مياه فريش", description: "صيانة متخصصة لمبردات مياه فريش مع ضمان نظافة وجودة المياه.", linkText: "اعرف المزيد", link: "/صيانة/fresh/مبرد-مياه" },

{ image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/f/r/fresh_electric_water_heater_venus_40_liters.jpg", category: "صيانة سخانات فريش", title: "خدمات صيانة سخانات فريش", description: "صيانة شاملة لسخانات فريش الكهربائية مع ضمان السلامة والكفاءة.", linkText: "اعرف المزيد", link: "/صيانة/fresh/سخان" },

{ image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/5/0/500004503-500004500.jpg", category: "صيانة مراوح فريش", title: "خدمات صيانة مراوح فريش", description: "صيانة متكاملة لمراوح فريش بجميع أنواعها مع ضمان الأداء الأمثل.", linkText: "اعرف المزيد", link: "/صيانة/fresh/مروحة" }
    ]
  },
  features: {
    preTitle: "لماذا نحن خيارك الأفضل؟",
    title: "مميزات مركز صيانة فريش",
    items: [
      { iconName: "Home", title: "خبرة بالأجهزة المنزلية المصرية", description: "نفهم احتياجات ومتطلبات المنزل المصري ونقدم حلولاً مناسبة لأجهزة فريش."},
      { iconName: "DollarSign", title: "أسعار اقتصادية ومناسبة", description: "نقدم خدمات صيانة عالية الجودة بأسعار تنافسية ومعقولة تناسب الجميع."},
      { iconName: "CheckSquare", title: "ضمان على قطع الغيار", description: "نوفر ضماناً على قطع غيار فريش الأصلية التي يتم تركيبها أثناء الصيانة."},
      { iconName: "Truck", title: "انتشار واسع للخدمة", description: "نسعى لتغطية أكبر عدد ممكن من المناطق والمحافظات لخدمة عملاء فريش."},
      { iconName: "Wrench", title: "فنيون مهرة ومدربون", description: "فريقنا قادر على التعامل مع مختلف موديلات وأعطال أجهزة فريش بكفاءة."},
      { iconName: "Calendar", title: "سهولة حجز المواعيد", description: "نوفر عملية حجز مواعيد سهلة وسريعة عبر الهاتف أو النموذج الإلكتروني."},
    ]
  },
  counters: {
    items: [
        { value: 55000, label: "جهاز فريش تم خدمته" },
        { value: 35000, label: "أسرة مصرية تعتمد علينا" },
        { value: 12, label: "عاماً في خدمة فريش" },
        { value: 95, label: "% نسبة الإصلاح الناجح" },
    ]
  },
  locations: {
    preTitle: "فروع خدمة فريش",
    title: "أين تجد خدمة صيانة فريش؟",
     items: [
      { image: "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة القاهرة", title: "مراكز خدمة فريش بالقاهرة", description: "نقاط خدمة متعددة في القاهرة والجيزة لضمان سرعة الوصول إليك.", linkText: "اتصل بنا", link: "tel:01288582979" },
      { image: "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة الغردقة", title: "مركز خدمة فريش بالغردقة", description: "فرعنا بالإسكندرية يقدم صيانة شاملة لجميع أجهزة فريش.", linkText: "اتصل بنا", link: "tel:01288582979" },
    ]
  },
};


// --- Function to get brand data ---
const allBrandsData: Record<string, BrandData> = {
  lg: lgData,
  samsung: samsungData,
  carrier: carrierData,
  unionaire: unionaireData,
  sharp: sharpData,
  fresh: freshData,
};

export const getBrandData = (slug: string): BrandData | undefined => {
  return allBrandsData[slug];
};

// Export the list of brands for use in the Navbar
export const supportedBrandsList: BrandData[] = Object.values(allBrandsData);
