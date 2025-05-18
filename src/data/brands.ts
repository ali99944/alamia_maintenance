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
      { image: 'https://www.lg.com/content/dam/channel/wcms/eg_ar/images/split-air-conditioners/s4-q12ja2mc_aa6geeg_efeg_eg_ar_c/Basic-350-V1.jpg', title: "صيانة تكييفات ال جي رقم #1 في مصر", subtitle: "خبراء التبريد والتدفئة", buttonText: "اتصل بنا للتكييف", buttonLink: "tel:01288582979" },
      { image: 'https://www.lg.com/content/dam/channel/wcms/eg_ar/images/split-air-conditioners/s4-w12jarma_aa6geeg_efeg_eg_ar_c/Thumb-350.jpg', title: "تركيب وصيانة جميع موديلات ال جي", subtitle: "خدمة معتمدة وموثوقة", buttonText: "حجز موعد صيانة", buttonLink: "#footer" },
      { image: 'https://www.lg.com/content/dam/channel/wcms/eg_ar/images/split-air-conditioners/abnw60gm3t2_anwgeeg_efeg_eg_ar_c/ABNW60GM3T2_ANWGEEG_EFEG_EG_AR_C-350x350.jpg', title: "صيانة تكييفات ال جي كونسيلر مركزي", subtitle: "فنيون متخصصون في إصلاح وصيانة تكييفات الكونسيلر المركزي", buttonText: "اتصل بنا لصيانة التكييف", buttonLink: "tel:01288582979" },
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
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/split-air-conditioners/s4-q12ja2mc_aa6geeg_efeg_eg_ar_c/Basic-350-V1.jpg", category: "صيانة تكييفات ال جي سبليت", title: "صيانة تكييفات ال جي سبليت", description: "خدمات صيانة دورية وشاملة لتكييفات ال جي سبليت، تشمل تنظيف الفلاتر، فحص الفريون، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/lg/سبليت" },
      { image: "https://media.us.lg.com/transform/ecomm-PDPGalleryThumbnail-350x350/83bcac6f-1b8a-4845-b755-c3f278a44695/LW1223HRSM_thumbnail_350x350?io=transform:fill,width:250", category: "صيانة تكييفات ال جي شباك", title: "صيانة تكييفات ال جي شباك", description: "نقدم خدمات صيانة متخصصة لتكييفات ال جي شباك، تشمل فحص الفريون، تنظيف الفلاتر، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/lg/شباك" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/split-air-conditioners/abnw60gm3t2_anwgeeg_efeg_eg_ar_c/ABNW60GM3T2_ANWGEEG_EFEG_EG_AR_C-350x350.jpg", category: "صيانة تكييفات ال جي فيلكس", title: "صيانة تكييفات ال جي كونسليد", description: "نقدم خدمات صيانة متخصصة لتكييفات ال جي فيلكس، تشمل فحص الفريون، تنظيف الفلاتر، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/lg/فيلكس" },
      { image: "https://img.freepik.com/free-photo/close-up-heat-pump-outside-home_23-2149250243.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "تأسيس مواسير التكييف", title: "خدمات تأسيس مواسير التكييف", description: "نقدم خدمات احترافية في تأسيس وتركيب مواسير التكييف، مع ضمان جودة العمل وسلامة التركيب.", linkText: "اعرف المزيد", link: "/صيانة/lg/تأسيس-مواسير" },
      { image: "https://www.lg.com/content/dam/channel/wcms/eg_ar/images/refrigerators/gc-x257cqhw/450.jpg/jcr:content/renditions/thum-350x350.jpeg", category: "صيانة ثلاجات ال جي", title: "خدمات صيانة ثلاجات ال جي", description: "صيانة شاملة لجميع موديلات ثلاجات ال جي، تشمل إصلاح نظام التبريد، الثرموستات، وجميع الأعطال الفنية.", linkText: "اعرف المزيد", link: "/صيانة/lg/ثلاجات" },
      { image: "https://www.lg.com/content/dam/channel/wcms/sa/images/tvs/osn-remove/86ut80006lb-450.jpg/jcr:content/renditions/thum-350x350.jpeg", category: "صيانة شاشات ال جي", title: "خدمات صيانة شاشات ال جي", description: "صيانة متخصصة لشاشات ال جي الذكية والعادية، مع توفير قطع غيار أصلية وضمان على الإصلاح.", linkText: "اعرف المزيد", link: "/صيانة/lg/شاشات" },
      { image: "https://img.freepik.com/free-vector/flow-chart-showing-web-purchases-with-man-holding-tablet-linked-shopping-cart_1284-44266.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة المبيعات والتوريدات", title: "خدمات المبيعات وتوريد الأجهزة", description: "نوفر خدمات بيع وتوريد جميع أجهزة ال جي مع ضمان الوكيل وخدمات ما بعد البيع.", linkText: "اعرف المزيد", link: "/صيانة/lg/مبيعات" }
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
      { image: 'https://images.samsung.com/is/image/samsung/assets/eg/p6_gro3/p6_initial_pcd/p6_initial_home-appliances/448x488-Thumbnail.png?$448_488_PNG$', title: "صيانة مكيفات سامسونج المعتمدة في مصر", subtitle: "خبراء التبريد والتدفئة", buttonText: "اتصل بالخط الساخن", buttonLink: "tel:01288582979" },
      { image: 'https://images.samsung.com/is/image/samsung/assets/eg/p6_gro3/p6_initial_pcd/p6_initial_home-appliances/cools-faster-farther-and-wider-pcv.jpg?$1440_N_JPG$', title: "حلول مبتكرة لصيانة مكيفات سامسونج", subtitle: "تكنولوجيا وجودة", buttonText: "اطلب زيارة فني", buttonLink: "#footer" },
      { image: 'https://images.samsung.com/is/image/samsung/assets/eg/p6_gro3/p6_initial_pcd/p6_initial_home-appliances/1440x640-PCD-PC.jpg?imwidth=2560', title: "مكيفات سامسونج المعتمدة - جودة لا مثيل لها", subtitle: "نوفر خدمات صيانة معتمدة لجميع منتجات سامسونج", buttonText: "اطلب زيارة فني", buttonLink: "#footer" },
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
      { image: "https://img.freepik.com/premium-photo/cassette-type-air-conditioner-mounted-ceiling_39420-294.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "تأسيس مواسير نحاس", title: "خدمات تأسيس مواسير النحاس", description: "نقدم خدمات احترافية في تأسيس وتركيب مواسير النحاس للتكييفات، مع ضمان جودة العمل وسلامة التركيب والعزل الحراري المثالي.", linkText: "اعرف المزيد", link: "/صيانة/samsung/تأسيس-مواسير" },
      { image: "https://img.freepik.com/free-vector/flow-chart-showing-web-purchases-with-man-holding-tablet-linked-shopping-cart_1284-44266.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة المبيعات والتوريدات", title: "خدمات المبيعات وتوريد الأجهزة", description: "نوفر خدمات بيع وتوريد جميع أجهزة سامسونج مع ضمان الوكيل وخدمات ما بعد البيع وأفضل الأسعار في السوق.", linkText: "اعرف المزيد", link: "/صيانة/samsung/مبيعات" }
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
      { image: "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة القاهرة", title: "مركز خدمة سامسونج القاهرة", description: "مركزنا الرئيسي بالقاهرة يقدم خدمات صيانة لجميع منتجات سامسونج مع أسرع استجابة.", linkText: "زيارة الفرع", link: "/صيانة/samsung/locations/cairo" },
      { image: "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة الغردقة", title: "مراكز خدمة سامسونج بالغردقة", description: "نخدم محافظات الدلتا (طنطا، المنصورة، المحلة) من خلال فروعنا المعتمدة لضمان راحتكم.", linkText: "زيارة الفرع", link: "/صيانة/samsung/locations/delta" },
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
      { image: 'https://m.media-amazon.com/images/I/51BxKXvfS0L._AC_SX679_.jpg', title: "صيانة تكييفات كارير رقم #1 في مصر", subtitle: "خبراء التبريد والتدفئة", buttonText: "اتصل بنا للتكييف", buttonLink: "tel:01288582979" },
      { image: 'https://m.media-amazon.com/images/I/81FO5aSLfzL._AC_SX679_.jpg', title: "تركيب وصيانة جميع موديلات كارير", subtitle: "خدمة معتمدة وموثوقة", buttonText: "حجز موعد صيانة", buttonLink: "#footer" },
      { image: 'https://m.media-amazon.com/images/I/61Tx6xLzQPL._AC_UL480_FMwebp_QL65_.jpg', title: "صيانة سخانات كارير بجميع أنواعها", subtitle: "فنيون متخصصون في إصلاح جميع أعطال سخانات كارير", buttonText: "اتصل بنا لصيانة سخانات", buttonLink: "tel:01288582979" },
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
      { image: "https://www.raneen.com/media/catalog/product/c/a/carrier_optimax_1__1_1_1_1_1_2_o4xbti4fvt7qadrw.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300", category: "صيانة تكييفات كاريير سبليت", title: "صيانة تكييفات كاريير سبليت", description: "خدمات صيانة دورية وشاملة لتكييفات كاريير سبليت، تشمل تنظيف الفلاتر، فحص الفريون، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/lg/سبليت" },
      { image: "https://cairocart.com/pub/media/catalog/product/cache/f65e4f3f0d55f7c692e033a9434b3a7f/5/1/51kwt-12.jpg", category: "صيانة تكييفات كاريير شباك", title: "صيانة تكييفات كاريير شباك", description: "نقدم خدمات صيانة متخصصة لتكييفات كاريير شباك، تشمل فحص الفريون، تنظيف الفلاتر، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/lg/شباك" },
      { image: "https://airgroupegypt.com/media/catalog/product/cache/c57d994eba41dd4549c7a0b36a9cd959/d/u/ducteda6.jpg", category: "صيانة تكييفات كاريير كونسيلد", title: "صيانة تكييفات كاريير كونسيلد", description: "نقدم خدمات صيانة متخصصة لتكييفات كاريير فيلكس، تشمل فحص الفريون، تنظيف الفلاتر، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/lg/فيلكس" },
      { image: "https://img.freepik.com/free-photo/close-up-ventilation-system_23-2149388949.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "تأسيس مواسير التكييف", title: "خدمات تأسيس مواسير التكييف", description: "نقدم خدمات احترافية في تأسيس وتركيب مواسير التكييف، مع ضمان جودة العمل وسلامة التركيب والعزل الحراري المثالي.", linkText: "اعرف المزيد", link: "/صيانة/carrier/تأسيس-مواسير" },
      { image: "https://www.raneen.com/media/catalog/product/e/s/es241_silver_high3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=300&width=300&canvas=300:300", category: "صيانة ثلاجات كاريير", title: "خدمات صيانة ثلاجات كاريير", description: "صيانة شاملة لجميع موديلات ثلاجات كاريير، تشمل إصلاح نظام التبريد، الثرموستات، وجميع الأعطال الفنية مع ضمان الخدمة.", linkText: "اعرف المزيد", link: "/صيانة/carrier/ثلاجات" },
      { image: "https://img.freepik.com/free-vector/flow-chart-showing-web-purchases-with-man-holding-tablet-linked-shopping-cart_1284-44266.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة المبيعات والتوريدات", title: "خدمات المبيعات وتوريد الأجهزة", description: "نوفر خدمات بيع وتوريد جميع أجهزة كاريير مع ضمان الوكيل وخدمات ما بعد البيع وأفضل الأسعار في السوق.", linkText: "اعرف المزيد", link: "/صيانة/carrier/مبيعات" }
    ]
  },
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
      { image: "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة القاهرة", title: "مركز خدمة كارير القاهرة", description: "نخدم جميع مناطق القاهرة الكبرى والجيزة، اتصل بنا لتركيب أو صيانة تكييف كارير.", linkText: "اتصل الآن", link: "tel:01288582979" },
      { image: "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة الغردقة", title: "مركز خدمة كارير الغردقة", description: "نوفر خدمات صيانة وتركيب سريعة في الساحل الشمالي خلال فصل الصيف لضمان راحتك.", linkText: "اتصل الآن", link: "tel:01288582979" },
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
      { image: 'https://unionaire.com/wp-content/uploads/2025/02/ARTIFY-024_HR.png', title: "صيانة تكييف يونيون اير المعتمدة", subtitle: "جودة وكفاءة تثق بها", buttonText: "اتصل بالصيانة", buttonLink: "tel:01288582979" },
      { image: 'https://unionaire.com/wp-content/uploads/2025/03/artify.png', title: "تركيب وصيانة تكييف يونيون اير", subtitle: "استمتع بجو مثالي", buttonText: "طلب صيانة تكييف", buttonLink: "#footer" },
      { image: 'https://unionaire.com/wp-content/uploads/2024/09/ARTI012HV50NBRLNPRO.png', title: "فريق فني متخصص لصيانة تكييف يونيون اير", subtitle: "نقدم لكم خبرة 22 سنة في خدمة الصناعة المصرية", buttonText: "اعرف المزيد", buttonLink: "#intro" },
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
      { image: "https://img.freepik.com/premium-photo/metal-pipes-mounted-ceiling-are-covered-with-thermal-insulation_137416-1078.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "تأسيس مواسير التكييف", title: "خدمات تأسيس مواسير التكييف", description: "نقدم خدمات احترافية في تأسيس وتركيب مواسير التكييف، مع ضمان جودة العمل وسلامة التركيب وأفضل الخامات.", linkText: "اعرف المزيد", link: "/صيانة/unionaire/تأسيس-مواسير" },
      { image: "https://img.freepik.com/free-vector/flow-chart-showing-web-purchases-with-man-holding-tablet-linked-shopping-cart_1284-44266.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة المبيعات والتوريدات", title: "خدمات المبيعات وتوريد الأجهزة", description: "نوفر خدمات بيع وتوريد جميع أجهزة يونيون اير مع ضمان الوكيل وخدمات ما بعد البيع.", linkText: "اعرف المزيد", link: "/صيانة/unionaire/مبيعات" },
      { image: "https://unionaire.com/wp-content/uploads/2024/06/Artboard-1.png", category: "صيانة ثلاجات يونيون اير", title: "خدمات صيانة ثلاجات يونيون اير", description: "صيانة شاملة لجميع موديلات ثلاجات يونيون اير، تشمل إصلاح نظام التبريد، الثرموستات، وجميع الأعطال الفنية.", linkText: "اعرف المزيد", link: "/صيانة/unionaire/ثلاجات" },
      { image: "https://unionaire.com/wp-content/uploads/2022/12/Screen-500@3x-600x600.png", category: "صيانة شاشات يونيون اير", title: "خدمات صيانة شاشات يونيون اير", description: "صيانة متخصصة لشاشات يونيون اير الذكية والعادية، مع توفير قطع غيار أصلية وضمان على الإصلاح.", linkText: "اعرف المزيد", link: "/صيانة/unionaire/شاشات" }
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
      { image: "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "فرع القاهرة", title: "مركز يونيون اير القاهرة", description: "المركز الرئيسي بالقاهرة لخدمة عملاء يونيون اير وتقديم الدعم الشامل.", linkText: "تواصل معنا", link: "tel:01288582979" },
      { image: "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "فرع الغردقة", title: "مركز يونيون اير الغردقة", description: "فرعنا في الغردقة لخدمة عملاء المحافظة والمناطق المجاورة بسرعة وكفاءة.", linkText: "تواصل معنا", link: "tel:01288582979" },
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
      { image: 'https://www.elarabygroup.com/media/iopt/catalog/product/cache/112e87ce2e3e8d6e36e718da758ea3a7/image/56737a12/2-25-ay-xp18yher.jpg', title: "صيانة تكييفات كارير رقم #1 في مصر", subtitle: "خبراء التبريد والتدفئة", buttonText: "اتصل بنا للتكييف", buttonLink: "tel:01288582979" },
      { image: 'https://sharpelaraby.group/wp-content/uploads/2025/03/1-5-th-c12uee-300x225.jpg', title: "تركيب وصيانة جميع موديلات كارير", subtitle: "خدمة معتمدة وموثوقة", buttonText: "حجز موعد صيانة", buttonLink: "#footer" },
      { image: 'https://sharpelaraby.group/wp-content/uploads/2025/03/2-25-ay-ap18uhe-300x225.jpg', title: "صيانة سخانات كارير بجميع أنواعها", subtitle: "فنيون متخصصون في إصلاح جميع أعطال سخانات كارير", buttonText: "اتصل بنا لصيانة سخانات", buttonLink: "tel:01288582979" },
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
      { image: "https://img.freepik.com/free-photo/3d-rendering-ventilation-system_23-2149281320.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "تأسيس مواسير التكييف", title: "خدمات تأسيس مواسير التكييف", description: "نقدم خدمات احترافية في تأسيس وتركيب مواسير التكييف، مع ضمان جودة العمل وسلامة التركيب.", linkText: "اعرف المزيد", link: "/صيانة/sharp/تأسيس-مواسير" },
      { image: "https://www.elarabygroup.com/media/iopt/catalog/product/cache/112e87ce2e3e8d6e36e718da758ea3a7/image/55e9f1/450-sj-pc58a-sl.jpg", category: "صيانة ثلاجات شارب", title: "خدمات صيانة ثلاجات شارب", description: "صيانة شاملة لجميع موديلات ثلاجات شارب، تشمل إصلاح نظام التبريد، الثرموستات، وجميع الأعطال الفنية.", linkText: "اعرف المزيد", link: "/صيانة/sharp/ثلاجات" },
      { image: "https://www.elarabygroup.com/media/catalog/product/cache/112e87ce2e3e8d6e36e718da758ea3a7/image/76244b00/hd-32-2t-c32fg6ex.jpg", category: "صيانة شاشات شارب", title: "خدمات صيانة شاشات شارب", description: "صيانة متخصصة لشاشات شارب الذكية والعادية، مع توفير قطع غيار أصلية وضمان على الإصلاح.", linkText: "اعرف المزيد", link: "/صيانة/sharp/شاشات" },
      { image: "https://img.freepik.com/free-vector/flow-chart-showing-web-purchases-with-man-holding-tablet-linked-shopping-cart_1284-44266.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة المبيعات والتوريدات", title: "خدمات المبيعات وتوريد الأجهزة", description: "نوفر خدمات بيع وتوريد جميع أجهزة شارب مع ضمان الوكيل وخدمات ما بعد البيع.", linkText: "اعرف المزيد", link: "/صيانة/sharp/مبيعات" }
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
      { image: "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "مركز القاهرة", title: "مركز صيانة شارب بالقاهرة", description: "المركز المعتمد لصيانة شارب في القاهرة الكبرى، يقدم خدمة سريعة ومضمونة.", linkText: "اتصل بالمركز", link: "tel:01288582979" },
      { image: "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "مركز الغردقة", title: "مركز صيانة شارب بالغردقة", description: "نخدم عملاء الغردقة بخدمات صيانة معتمدة لجميع أجهزة شارب.", linkText: "اتصل بالمركز", link: "tel:01288582979" },
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
      { image: 'https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/h/u/hummer-_black_1.png', title: "صيانة تكييفات فريش انفرتر", subtitle: "خبراء التبريد والتدفئة", buttonText: "اتصل بنا للتكييف", buttonLink: "tel:01288582979" },
      { image: 'https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/f/r/fresh_air_conditioner_duct_inverter_turbo_3hp_cold_-_hot_2.png', title: "تركيب وصيانة تكييفات فريش كونسيلد", subtitle: "خدمة معتمدة وموثوقة", buttonText: "حجز موعد صيانة", buttonLink: "#footer" },
      { image: 'https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/f/r/fresh_air_conditioner_floor_standing_5hp_cold_-_hot_2.png', title: "صيانة تكييفات فريش فري ستاند", subtitle: "فنيون متخصصون في صيانة التكييفات الرأسية", buttonText: "اتصل بنا للصيانة", buttonLink: "tel:01288582979" },
      { image: 'https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/a/i/air_curtain_1.png', title: "تركيب وصيانة ستائر هواء فريش", subtitle: "حلول مثالية للمحلات والمطاعم", buttonText: "احجز معاينة", buttonLink: "tel:01288582979" },
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
      { image: "https://img.freepik.com/free-photo/air-conditioner-mounted-white-wall_53876-128235.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "صيانة تكييفات فريش سبليت", title: "صيانة تكييفات فريش سبليت", description: "خدمات صيانة دورية وشاملة لتكييفات فريش سبليت، تشمل تنظيف الفلاتر، فحص الفريون، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/fresh/سبليت" },
      { image: "https://img.freepik.com/premium-photo/outdoor-air-conditioner-unit-installed-wall-residential-building-window-installation-repair-maintenance-air-conditioning-systems-residential-premises_678914-3130.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "صيانة تكييفات فريش شباك", title: "صيانة تكييفات فريش شباك", description: "نقدم خدمات صيانة متخصصة لتكييفات فريش شباك، تشمل فحص الفريون، تنظيف الفلاتر، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/fresh/شباك" },
      { image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/f/r/fresh_air_conditioner_duct_inverter_turbo_3hp_cold_-_hot_2.png", category: "صيانة تكييفات فريش كونسلير مركزي", title: "صيانة تكييفات فريش كونسيلد", description: "نقدم خدمات صيانة متخصصة لتكييفات فريش كونسيلد، تشمل فحص الفريون، تنظيف الفلاتر، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/fresh/فيلكس" },
      { image: "https://img.freepik.com/free-photo/close-up-heat-pump-outside-home_23-2149250243.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "تأسيس مواسير التكييف", title: "خدمات تأسيس مواسير التكييف", description: "نقدم خدمات احترافية في تأسيس وتركيب مواسير التكييف، مع ضمان جودة العمل وسلامة التركيب وفقاً للمعايير الفنية.", linkText: "اعرف المزيد", link: "/صيانة/fresh/تأسيس-مواسير" },
      { image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/k/a/kashmeer_1.png", category: "صيانة ثلاجات فريش", title: "خدمات صيانة ثلاجات فريش", description: "صيانة شاملة لجميع موديلات ثلاجات فريش، تشمل إصلاح نظام التبريد، الثرموستات، وجميع الأعطال الفنية مع ضمان الخدمة.", linkText: "اعرف المزيد", link: "/صيانة/fresh/ثلاجات" },
      { image: "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/3/2/32lh123.png", category: "صيانة شاشات فريش", title: "خدمات صيانة شاشات فريش", description: "صيانة متخصصة لشاشات فريش الذكية والعادية، مع توفير قطع غيار أصلية وضمان على الإصلاح لجميع الموديلات.", linkText: "اعرف المزيد", link: "/صيانة/fresh/شاشات" },
      { image: "https://img.freepik.com/free-vector/flow-chart-showing-web-purchases-with-man-holding-tablet-linked-shopping-cart_1284-44266.jpg?ga=GA1.1.1880227217.1744728103&semt=ais_hybrid&w=740", category: "خدمة المبيعات والتوريدات", title: "خدمات المبيعات وتوريد الأجهزة", description: "نوفر خدمات بيع وتوريد جميع أجهزة فريش مع ضمان الوكيل وخدمات ما بعد البيع بأفضل الأسعار التنافسية.", linkText: "اعرف المزيد", link: "/صيانة/fresh/مبيعات" }
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
