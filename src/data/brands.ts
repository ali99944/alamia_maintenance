import { BrandData } from "../types/brand";

// Helper for placeholder image paths - REPLACE WITH YOUR ACTUAL IMAGE PATHS
const placeholderImg = (brand: string, name: string, type: 'hero' | 'tech' | 'service' | 'location') => `/brands/${brand}/images/${name}-${type}.jpg`; // Example structure

// --- LG Data ---
export const lgData: BrandData = {
  name: "ال جي",
  slug: "lg",
  primaryColor: "#C3003C", // LG Red
  secondaryColor: "#FFFFFF",
  logo: "/brands/lg/logos/lg-logo-color.png",
  logoWhite: "/brands/lg/logos/lg-logo-white.png",
  hotline: "19001",
  contactEmail: "lg@lg.com.eg",

  hero: {
    slides: [
      { image: 'https://maintenance-eg.com/files/slider1.webp', title: "فنيين ذو خبره وكفاءة لصيانة ال جي", subtitle: "خدمة فورية بالمنزل", buttonText: "اتصل بنا الآن", buttonLink: "tel:19001" },
      { image: 'https://maintenance-eg.com/files/slider2.webp', title: "قطع غيار أصلية ١٠٠٪ من ال جي", subtitle: "ضمان معتمد لمدة عام", buttonText: "اطلب صيانة", buttonLink: "#footer" },
      { image: 'https://maintenance-eg.com/files/slider3.webp', title: "نغطي جميع محافظات مصر", subtitle: "مراكز صيانة ال جي منتشرة", buttonText: "تواصل معنا", buttonLink: "tel:19001" },
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
    buttonText: "اتصل بنا الآن 19001",
    buttonLink: "tel:19001"
  },
  articles: {
    preTitle: "خدمات مركز ال جي",
    title: "كل ما تحتاجه لصيانة أجهزة ال جي",
    items: [
      { image: "https://maintenance-eg.com/uploads/lg-official-maintenance.webp", category: "صيانة ثلاجات ال جي", title: "صيانة ثلاجات وديب فريزر ال جي", description: "حلول متكاملة لجميع أعطال ثلاجات ال جي، بما في ذلك مشاكل التبريد، تسريب المياه، وأعطال الموتور، مع توفير قطع غيار أصلية.", linkText: "اعرف المزيد", link: "/صيانة/lg/ثلاجات" },
      { image: "https://maintenance-eg.com/uploads/lg-main-maintenance.webp", category: "صيانة غسالات ال جي", title: "صيانة غسالات ملابس وأطباق ال جي", description: "إصلاح أعطال غسالات ال جي بجميع موديلاتها، سواء كانت مشاكل في الدوران، صرف المياه، أو لوحة التحكم الإلكترونية.", linkText: "اعرف المزيد", link: "/صيانة/lg/غسالات" },
      { image: "https://maintenance-eg.com/uploads/lg-main-maintenance.webp", category: "صيانة تكييفات ال جي", title: "صيانة تكييفات ال جي سبليت وشباك", description: "خدمات صيانة دورية وشاملة لتكييفات ال جي، تشمل تنظيف الفلاتر، فحص الفريون، وإصلاح أعطال ضعف التبريد أو التسريب.", linkText: "اعرف المزيد", link: "/صيانة/lg/تكييفات" },
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
      { image: "https://maintenance-eg.com/uploads/lg-maintenance-branches.webp", category: "فرع القاهرة", title: "مركز صيانة ال جي القاهرة", description: "نوفر خدمات صيانة ال جي المعتمدة لجميع أحياء القاهرة الكبرى، بما في ذلك مدينة نصر، مصر الجديدة، المعادي، والزمالك.", linkText: "عرض التفاصيل", link: "/صيانة/lg/locations/cairo" },
      { image: "https://maintenance-eg.com/uploads/lg-maintenance-branches-in-cairo.webp", category: "فرع الإسكندرية", title: "مركز صيانة ال جي الإسكندرية", description: "خدماتنا تغطي جميع مناطق الإسكندرية، من المنتزه إلى العجمي. اتصل بنا لحجز موعد صيانة سريع وموثوق.", linkText: "عرض التفاصيل", link: "/صيانة/lg/locations/alexandria" },
      { image: "https://maintenance-eg.com/uploads/2.jpg", category: "فرع الجيزة", title: "مركز صيانة ال جي الجيزة", description: "نخدم عملاءنا في الجيزة، 6 أكتوبر، والشيخ زايد. مركزنا يقدم صيانة فورية لجميع أجهزة ال جي.", linkText: "عرض التفاصيل", link: "/صيانة/lg/locations/giza" },
    ]
  },
};

// --- Samsung Data ---
export const samsungData: BrandData = {
  name: "سامسونج",
  slug: "samsung",
  primaryColor: "#1428A0", // Samsung Blue
  secondaryColor: "#FFFFFF",
  logo: "/brands/samsung/logos/samsung-logo-color.png",
  logoWhite: "/brands/samsung/logos/samsung-logo-white.png",
  hotline: "19002",
  contactEmail: "samsung@lg.com.eg",

  hero: {
    slides: [
      { image: 'https://maintenance-eg.com/files/slider1.webp', title: "صيانة سامسونج المعتمدة في مصر", subtitle: "خبراء الأجهزة الذكية", buttonText: "اتصل بالخط الساخن", buttonLink: "tel:19002" },
      { image: 'https://maintenance-eg.com/files/slider2.webp', title: "حلول مبتكرة لصيانة أجهزة سامسونج", subtitle: "تكنولوجيا وجودة", buttonText: "اطلب زيارة فني", buttonLink: "#footer" },
      { image: 'https://maintenance-eg.com/files/slider3.webp', title: "أجهزة سامسونج المعتمدة - جودة لا مثيل لها", subtitle: "نوفر خدمات صيانة معتمدة لجميع منتجات سامسونج", buttonText: "اطلب زيارة فني", buttonLink: "#footer" },
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
    text: "إذا واجهت أي مشكلة مع جهاز سامسونج الخاص بك، فإن فريق الدعم الفني لدينا جاهز لمساعدتك. اتصل بنا على 19002 للحصول على مساعدة فورية أو لحجز موعد صيانة منزلية.",
    buttonText: "اتصل الآن 19002",
    buttonLink: "tel:19002"
  },
  articles: {
    preTitle: "خدماتنا المتخصصة",
    title: "صيانة جميع منتجات سامسونج",
    items: [
      { image: "https://maintenance-eg.com/uploads/samsung-official-maintenance.webp", category: "صيانة شاشات سامسونج", title: "إصلاح شاشات سامسونج (LED, QLED, OLED)", description: "متخصصون في إصلاح جميع أعطال شاشات سامسونج، بما في ذلك مشاكل الصورة، الصوت، والاتصال بالإنترنت.", linkText: "التفاصيل", link: "/صيانة/samsung/شاشات" },
      { image: "https://maintenance-eg.com/uploads/samsung-main-maintenance.webp", category: "صيانة ثلاجات سامسونج", title: "صيانة ثلاجات سامسونج الحديثة", description: "نقدم صيانة لثلاجات سامسونج بجميع أنواعها، بما في ذلك موديلات Bespoke، مع حلول لمشاكل التبريد وصانع الثلج.", linkText: "التفاصيل", link: "/صيانة/samsung/ثلاجات" },
      { image: "https://maintenance-eg.com/uploads/samsung-company.webp", category: "صيانة غسالات سامسونج", title: "صيانة غسالات سامسونج AddWash وغيرها", description: "إصلاح أعطال غسالات سامسونج، بما في ذلك مشاكل عدم دوران الحلة، تسريب المياه، والأخطاء الرقمية.", linkText: "التفاصيل", link: "/صيانة/samsung/غسالات" },
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
      { image: "https://maintenance-eg.com/uploads/samsung-maintenance-branches.webp", category: "خدمة القاهرة", title: "مركز خدمة سامسونج القاهرة", description: "مركزنا الرئيسي بالقاهرة يقدم خدمات صيانة لجميع منتجات سامسونج مع أسرع استجابة.", linkText: "زيارة الفرع", link: "/صيانة/samsung/locations/cairo" },
      { image: "https://maintenance-eg.com/uploads/samsung-maintenance-branches-in-cairo.webp", category: "خدمة الدلتا", title: "مراكز خدمة سامسونج بالدلتا", description: "نخدم محافظات الدلتا (طنطا، المنصورة، المحلة) من خلال فروعنا المعتمدة لضمان راحتكم.", linkText: "زيارة الفرع", link: "/صيانة/samsung/locations/delta" },
    ]
  },
};

// --- Carrier Data ---
export const carrierData: BrandData = {
  name: "كارير",
  slug: "carrier",
  primaryColor: "#0053A0", // Carrier Blue
  secondaryColor: "#FFFFFF",
  logo: "/brands/carrier/logos/carrier-logo-color.png",
  logoWhite: "/brands/carrier/logos/carrier-logo-white.png",
  hotline: "19003",
  contactEmail: 'carrier@alalamiah-maintenance.com',

  hero: {
    slides: [
      { image: 'https://maintenance-eg.com/files/slider1.webp', title: "صيانة تكييفات كارير رقم #1 في مصر", subtitle: "خبراء التبريد والتدفئة", buttonText: "اتصل بنا للتكييف", buttonLink: "tel:19003" },
      { image: 'https://maintenance-eg.com/files/slider2.webp', title: "تركيب وصيانة جميع موديلات كارير", subtitle: "خدمة معتمدة وموثوقة", buttonText: "حجز موعد صيانة", buttonLink: "#footer" },
      { image: 'https://maintenance-eg.com/files/slider3.webp', title: "صيانة سخانات كارير بجميع أنواعها", subtitle: "فنيون متخصصون في إصلاح جميع أعطال سخانات كارير", buttonText: "اتصل بنا لصيانة سخانات", buttonLink: "tel:19003" },
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
    text: "لا تدع حرارة الصيف أو برودة الشتاء تؤثر على راحتك. اتصل بمركز صيانة كارير المعتمد الآن على 19003 للحصول على خدمة صيانة سريعة وموثوقة لتكييفك.",
    buttonText: "اتصل الآن 19003",
    buttonLink: "tel:19003"
  },
  articles: {
    preTitle: "خدمات تكييف كارير",
    title: "صيانة وتركيب تكييفات كارير",
    items: [
      { image: "https://maintenance-eg.com/uploads/carrier-official-maintenance.webp", category: "صيانة تكييف سبليت", title: "صيانة تكييف كارير سبليت", description: "خدمات صيانة متكاملة لجميع موديلات تكييف كارير سبليت، تشمل الكشف عن الأعطال وإصلاحها وتنظيف الوحدات.", linkText: "خدمات السبليت", link: "/صيانة/carrier/سبليت" },
      { image: "https://maintenance-eg.com/uploads/carrier-official-maintenance.webp", category: "صيانة تكييف مركزي", title: "صيانة التكييف المركزي كارير", description: "حلول صيانة متخصصة لأنظمة التكييف المركزي من كارير للمباني التجارية والسكنية الكبيرة.", linkText: "خدمات المركزي", link: "/صيانة/carrier/مركزي" },
      { image: "https://maintenance-eg.com/uploads/carrier-company.webp", category: "خدمات الفريون", title: "فحص وشحن فريون كارير", description: " نقدم خدمة فحص دقيق لمستوى الفريون وشحن التكييف بالكمية المناسبة لضمان أفضل أداء تبريد.", linkText: "خدمات الفريون", link: "/صيانة/carrier/فريون" },
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
      { image: "https://maintenance-eg.com/uploads/carrier-maintenance-branches.webp", category: "خدمة القاهرة والجيزة", title: "مركز خدمة كارير القاهرة والجيزة", description: "نخدم جميع مناطق القاهرة الكبرى والجيزة، اتصل بنا لتركيب أو صيانة تكييف كارير.", linkText: "اتصل الآن", link: "tel:19003" },
      { image: "https://maintenance-eg.com/uploads/carrier-maintenance-branches.webp", category: "خدمة الساحل الشمالي", title: "مركز خدمة كارير الساحل الشمالي", description: "نوفر خدمات صيانة وتركيب سريعة في الساحل الشمالي خلال فصل الصيف لضمان راحتك.", linkText: "اتصل الآن", link: "tel:19003" },
    ]
  },
};

// --- Unionaire Data ---
export const unionaireData: BrandData = {
  name: "يونيون اير",
  slug: "unionaire",
  primaryColor: "#D81B2F", // Unionaire Red
  secondaryColor: "#FFFFFF",
  logo: "/brands/unionaire/logos/unionaire-logo-color.png",
  logoWhite: "/brands/unionaire/logos/unionaire-logo-white.png",
  hotline: "19004",
  contactEmail: 'unionaire@alalamiah-maintenance.com',

  hero: {
    slides: [
      { image: 'https://maintenance-eg.com/files/slider1.webp', title: "صيانة يونيون اير المعتمدة لجميع الأجهزة", subtitle: "جودة وكفاءة تثق بها", buttonText: "اتصل بالصيانة", buttonLink: "tel:19004" },
      { image: 'https://maintenance-eg.com/files/slider2.webp', title: "صيانة تكييفات يونيون اير بكفاءة عالية", subtitle: "استمتع بجو مثالي", buttonText: "طلب صيانة تكييف", buttonLink: "#footer" },
      { image: 'https://maintenance-eg.com/files/slider3.webp', title: "فريق فني متخصص لصيانة يونيون اير", subtitle: "نقدم لكم خبرة 22 سنة في خدمة الصناعة المصرية", buttonText: "اعرف المزيد", buttonLink: "#intro" },
      
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
    text: "اتصل بنا الآن على الخط الساخن 19004. مركز صيانة يونيون اير المعتمد يقدم لك حلولاً سريعة وموثوقة لجميع أجهزتك المنزلية مع ضمان الجودة.",
    buttonText: "اتصل الآن 19004",
    buttonLink: "tel:19004"
  },
  articles: {
    preTitle: "خدمات صيانة يونيون اير",
    title: "صيانة شاملة لأجهزة يونيون اير",
    items: [
      { image: "https://maintenance-eg.com/uploads/unionaire-official-maintenance.webp", category: "صيانة تكييف يونيون اير", title: "صيانة تكييفات يونيون اير (سبليت وشباك)", description: "نقدم خدمات صيانة وإصلاح لجميع موديلات تكييفات يونيون اير، بما في ذلك Artify و Megafy، لضمان تبريد فعال.", linkText: "صيانة التكييف", link: "/صيانة/unionaire/تكييفات" },
      { image: "https://maintenance-eg.com/uploads/unionaire-official-maintenance.webp", category: "صيانة شاشات يونيون اير", title: "إصلاح شاشات يونيون اير (LED)", description: "متخصصون في إصلاح أعطال شاشات يونيون اير المختلفة، مثل مشاكل الإضاءة، الصورة، أو الصوت.", linkText: "صيانة الشاشات", link: "/صيانة/unionaire/شاشات" },
      { image: "https://maintenance-eg.com/uploads/unionaire-company.webp", category: "صيانة بوتاجاز يونيون اير", title: "صيانة بوتاجازات يونيون اير (غاز وكهرباء)", description: "إصلاح أعطال بوتاجازات يونيون اير، بما في ذلك مشاكل الإشعال الذاتي، تسريب الغاز، وأعطال الفرن.", linkText: "صيانة البوتاجاز", link: "/صيانة/unionaire/بوتاجازات" },
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
      { image: "https://maintenance-eg.com/uploads/unionaire-company.webp", category: "المركز الرئيسي", title: "مركز يونيون اير الرئيسي", description: "المركز الرئيسي بالقاهرة لخدمة عملاء يونيون اير وتقديم الدعم الشامل.", linkText: "تواصل معنا", link: "tel:19004" },
      { image: "https://maintenance-eg.com/uploads/unionaire-company.webp", category: "فرع الإسكندرية", title: "مركز يونيون اير بالإسكندرية", description: "فرعنا في الإسكندرية لخدمة عملاء المحافظة والمناطق المجاورة بسرعة وكفاءة.", linkText: "تواصل معنا", link: "tel:19004" },
    ]
  },
};

// --- Sharp Data ---
export const sharpData: BrandData = {
  name: "شارب",
  slug: "sharp",
  primaryColor: "#E3051B", // Sharp Red
  secondaryColor: "#FFFFFF",
  logo: "/brands/sharp/logos/sharp-logo-color.png",
  logoWhite: "/brands/sharp/logos/sharp-logo-white.png",
  hotline: "19005", // Assuming hotline for Sharp

  contactEmail: 'sharp@alalamiah-maintenance.com',

  hero: {
    slides: [
      { image: 'https://maintenance-eg.com/files/slider1.webp', title: "صيانة شارب المعتمدة للأجهزة اليابانية", subtitle: "جودة ودقة تثق بها", buttonText: "اتصل بخبراء شارب", buttonLink: "tel:19005" },
      { image: 'https://maintenance-eg.com/files/slider2.webp', title: "حلول صيانة متكاملة لأجهزة شارب", subtitle: "ثلاجات، غسالات، شاشات، والمزيد", buttonText: "اطلب خدمة الصيانة", buttonLink: "#footer" },
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
    text: "اتصل بمركز صيانة شارب المعتمد على 19005. نقدم لك خدمة احترافية وسريعة باستخدام قطع غيار أصلية لضمان أفضل أداء لجهازك.",
    buttonText: "اتصل الآن 19005",
    buttonLink: "tel:19005"
  },
  articles: {
    preTitle: "خدمات صيانة شارب",
    title: "صيانة جميع أجهزة شارب المنزلية",
    items: [
      { image: "https://maintenance-eg.com/uploads/sharp-official-maintenance.webp", category: "صيانة شاشات شارب", title: "إصلاح شاشات شارب Aquos وغيرها", description: "صيانة متخصصة لشاشات شارب بجميع أنواعها وتقنياتها، لحل مشاكل الصورة والصوت والوظائف الذكية.", linkText: "خدمة الشاشات", link: "/صيانة/sharp/شاشات" },
      { image: "https://maintenance-eg.com/uploads/sharp-main-maintenance.webp", category: "صيانة ثلاجات شارب", title: "صيانة ثلاجات وديب فريزر شارب", description: "حلول لجميع أعطال ثلاجات شارب، بما في ذلك مشاكل التبريد، تقنية البلازما كلاستر، وتسريب المياه.", linkText: "خدمة الثلاجات", link: "/صيانة/sharp/ثلاجات" },
      { image: "https://maintenance-eg.com/uploads/sharp-company.webp", category: "أجهزة شارب الأخرى", title: "صيانة منقيات الهواء وأجهزة شارب الأخرى", description: "نقدم أيضًا صيانة لأجهزة شارب الأخرى مثل منقيات الهواء والميكروويف لضمان عملها بكفاءة.", linkText: "خدمات أخرى", link: "/صيانة/sharp/أخرى" },
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
      { image: "https://maintenance-eg.com/uploads/sharp-company.webp", category: "مركز القاهرة", title: "مركز صيانة شارب بالقاهرة", description: "المركز المعتمد لصيانة شارب في القاهرة الكبرى، يقدم خدمة سريعة ومضمونة.", linkText: "اتصل بالمركز", link: "tel:19005" },
      { image: "https://maintenance-eg.com/uploads/sharp-company.webp", category: "مركز الجيزة", title: "مركز صيانة شارب بالجيزة", description: "نخدم عملاء الجيزة و6 أكتوبر بخدمات صيانة معتمدة لجميع أجهزة شارب.", linkText: "اتصل بالمركز", link: "tel:19005" },
    ]
  },
};

// --- Fresh Data ---
export const freshData: BrandData = {
  name: "فريش",
  slug: "fresh",
  primaryColor: "#ED1C24", // Fresh Red
  secondaryColor: "#FFFFFF",
  logo: "/brands/fresh.svg",
  logoWhite: "/brands/fresh.svg",
  hotline: "19006", // Assuming hotline for Fresh

  contactEmail: 'fresh@alalamiah-maintenance.com',

  hero: {
    slides: [
      { image: 'https://maintenance-eg.com/files/slider1.webp', title: "صيانة فريش المعتمدة للأجهزة المنزلية", subtitle: "اختيار العائلة المصرية", buttonText: "اتصل بصيانة فريش", buttonLink: "tel:19006" },
      { image: 'https://maintenance-eg.com/files/slider2.webp', title: "إصلاح سخانات وغسالات وبوتاجازات فريش", subtitle: "خدمة سريعة بأسعار مناسبة", buttonText: "احجز موعد صيانة", buttonLink: "#footer" },
      { image: 'https://maintenance-eg.com/files/slider3.webp', title: "دعم فني متواصل", subtitle: "استجابة سريعة على مدار الساعة", buttonText: "تواصل مع الدعم الفني", buttonLink: "tel:19006" },

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
    text: "اتصل الآن بمركز صيانة فريش المعتمد على 19006. سيقوم فريقنا بتقديم الدعم اللازم وتحديد موعد لإصلاح جهازك بسرعة وكفاءة وبأسعار معقولة.",
    buttonText: "اتصل الآن 19006",
    buttonLink: "tel:19006"
  },
  articles: {
    preTitle: "خدماتنا لأجهزة فريش",
    title: "صيانة شاملة لمنتجات فريش",
    items: [
      { image: "https://maintenance-eg.com/uploads/fresh-official-maintenance.webp", category: "صيانة سخانات فريش", title: "إصلاح سخانات فريش (غاز وكهرباء)", description: "حلول لجميع مشاكل سخانات فريش، بما في ذلك ضعف تسخين المياه، تسريب الغاز، أو أعطال الأمان.", linkText: "خدمة السخانات", link: "/صيانة/fresh/سخانات" },
      { image: "https://maintenance-eg.com/uploads/fresh-official-maintenance.webp", category: "صيانة بوتاجازات فريش", title: "صيانة بوتاجازات فريش بجميع الموديلات", description: "إصلاح أعطال الإشعال، تسريب الغاز، مشاكل الفرن والشواية في بوتاجازات فريش.", linkText: "خدمة البوتاجازات", link: "/صيانة/fresh/بوتاجازات" },
      { image: "https://maintenance-eg.com/uploads/fresh-company.webp", category: "صيانة غسالات فريش", title: "صيانة غسالات فريش (فوق وتحميل أمامي)", description: "خدمات إصلاح لغسالات فريش تشمل مشاكل العصر، سحب المياه، أو توقف التشغيل.", linkText: "خدمة الغسالات", link: "/صيانة/fresh/غسالات" },
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
      { image: "https://maintenance-eg.com/uploads/fresh-maintenance-branches.webp", category: "خدمة القاهرة الكبرى", title: "مراكز خدمة فريش بالقاهرة والجيزة", description: "نقاط خدمة متعددة في القاهرة والجيزة لضمان سرعة الوصول إليك.", linkText: "اتصل بنا", link: "tel:19006" },
      { image: "https://maintenance-eg.com/uploads/fresh-maintenance-branches.webp", category: "خدمة الإسكندرية", title: "مركز خدمة فريش بالإسكندرية", description: "فرعنا بالإسكندرية يقدم صيانة شاملة لجميع أجهزة فريش.", linkText: "اتصل بنا", link: "tel:19006" },
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
