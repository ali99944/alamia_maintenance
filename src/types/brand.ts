export interface BrandFeature {
  // Use either iconName (if using Lucide exclusively) or iconComponent
  iconName?: keyof typeof import('lucide-react'); // For Lucide icons by name
  iconComponent?: React.ReactNode; // For custom SVGs or other icon libraries
  title: string;
  description: string;
}

export interface BrandArticleOrLocation {
  image: string;
  category: string; // e.g., "شركة ال جي", "فروع صيانة ال جي القاهرة"
  title: string;
  description: string;
  linkText: string;
  link: string; // URL or path
}

export interface BrandCounter {
  value: number;
  label: string;
}

export interface HeroSlide {
    image: string;
    title: string;
    subtitle?: string;
    buttonText: string;
    buttonLink: string; // URL or path
}

export interface BrandData {
  name: string; // e.g., "ال جي"
  slug: string; // e.g., "lg"
  primaryColor: string; // Hex code e.g., "#C3003C"
  secondaryColor?: string; // Often white "#FFFFFF" or light gray "#f8f9fa"
  logo: string; // Path e.g., "/brands/lg/lg-logo-color.png"
  logoWhite?: string; // Path e.g., "/brands/lg/lg-logo-white.png"
  hotline?: string; // Specific hotline for the brand page header
  contactEmail: string;

  // Section 1: Hero Slider
  hero: {
    slides: HeroSlide[];
  };

  // Section 2: Intro
  intro: {
    preTitle: string; // e.g., "لماذا صيانة ال جي"
    title: string; // e.g., "صيانة ال جي المعتمدة"
    paragraph: string;
    imageUrl: string; // Path to technician image
    features: Array<{ text: string }>; // List items with checkboxes
    experience: {
      years: number;
      text: string; // e.g., "سنة خبرة"
    };
  };

  // Section 3: CTA Banner
  ctaBanner1: {
    title: string; // e.g., "الخط الساخن لصيانة ال جي"
    text: string;
    buttonText: string;
    buttonLink: string; // Usually tel: link
  };

  // Section 4: Articles/Services
  articles: {
    preTitle: string; // e.g., "خدمات صيانة ال جي"
    title: string; // e.g., "صيانة ال جي"
    items: BrandArticleOrLocation[];
  };

  other_articles: {
    preTitle: string; // e.g., "خدمات صيانة ال جي"
    title: string; // e.g., "صيانة ال جي"
    items: BrandArticleOrLocation[];
  } | null;

  // Section 5: Features & Counters
  features: {
    preTitle: string; // e.g., "خدماتنا!"
    title: string; // e.g., "مركز صيانة ال جي المعتمد"
    items: BrandFeature[];
  };
  counters: {
    items: BrandCounter[];
  };

  // Section 6: Locations/Branches
  locations: {
    preTitle: string; // e.g., "فروع ال جي"
    title: string; // e.g., "عناوين صيانة ال جي"
    items: BrandArticleOrLocation[];
  };
}