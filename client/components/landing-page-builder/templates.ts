import { LandingPage } from "./types";

export const landingPageTemplates: Omit<LandingPage, "id" | "createdAt" | "updatedAt">[] = [
  {
    name: "Turquoise Mountains",
    description: "Vibrant turquoise design with mountain theme for outdoor/adventure brands",
    blocks: [
      {
        id: "hero-1",
        type: "hero",
        properties: {
          heading: "WRITE YOUR GREAT HEADLINE",
          subheading: "This is your chance to explain it well",
          backgroundImage: "linear-gradient(135deg, #FFD700 0%, #87CEEB 100%)",
          backgroundColor: "#FFD700",
          textColor: "#ffffff",
          ctaText: "GET STARTED",
          ctaUrl: "#",
        },
      },
      {
        id: "features-1",
        type: "features",
        properties: {
          heading: "Why Choose Us",
          description: "Our amazing features and benefits",
          features: [
            {
              icon: "target",
              title: "Feature One",
              description: "Description of your amazing feature",
            },
            {
              icon: "zap",
              title: "Feature Two",
              description: "Another great benefit for customers",
            },
            {
              icon: "users",
              title: "Feature Three",
              description: "Connect with your community",
            },
            {
              icon: "bar-chart-2",
              title: "Feature Four",
              description: "Track your progress and growth",
            },
          ],
          backgroundColor: "#ffffff",
        },
      },
      {
        id: "section-spacer-1",
        type: "section-spacer",
        properties: {
          height: 40,
          backgroundColor: "#f5f5f5",
        },
      },
      {
        id: "features-2",
        type: "features",
        properties: {
          heading: "More Benefits",
          description: "We care about your success",
          features: [
            {
              icon: "heart",
              title: "Care",
              description: "We genuinely care about our customers",
            },
            {
              icon: "shield",
              title: "Security",
              description: "Your data is safe with us",
            },
          ],
          backgroundColor: "#87CEEB",
        },
      },
      {
        id: "footer-1",
        type: "footer",
        properties: {
          companyName: "Your Company",
          backgroundColor: "#2c3e50",
          textColor: "#ffffff",
          links: ["About", "Contact", "Privacy"],
        },
      },
    ],
  },
  {
    name: "Orange Fire",
    description: "Bold orange and red design perfect for dynamic tech and startup brands",
    blocks: [
      {
        id: "header-1",
        type: "header",
        properties: {
          backgroundColor: "#FF4500",
          textColor: "#ffffff",
          links: ["Home", "Features", "Pricing", "Contact"],
        },
      },
      {
        id: "hero-2",
        type: "hero",
        properties: {
          heading: "Your Great Headline",
          subheading: "Powerful subtitle describing your service",
          backgroundImage: "#FF4500",
          backgroundColor: "#FF4500",
          textColor: "#ffffff",
          ctaText: "LEARN MORE",
          ctaUrl: "#",
          backgroundImageUrl: "https://images.unsplash.com/photo-1551632786-de41ec16a68d?w=1200",
        },
      },
      {
        id: "features-3",
        type: "features",
        properties: {
          heading: "Your Main Advantage",
          description: "Special Offer - About Your Business",
          features: [
            {
              icon: "rocket",
              title: "Fast",
              description: "Lightning quick performance",
            },
            {
              icon: "globe",
              title: "Global",
              description: "Reach customers worldwide",
            },
            {
              icon: "award",
              title: "Award Winning",
              description: "Industry recognized excellence",
            },
          ],
          backgroundColor: "#ffffff",
        },
      },
      {
        id: "footer-2",
        type: "footer",
        properties: {
          companyName: "Your Business Name",
          backgroundColor: "#1a1a1a",
          textColor: "#ffffff",
          links: ["About", "Services", "Contact"],
        },
      },
    ],
  },
  {
    name: "Easy Blue",
    description: "Clean and professional blue theme perfect for SaaS and business services",
    blocks: [
      {
        id: "hero-3",
        type: "hero",
        properties: {
          heading: "Write Here Your Main Headline",
          subheading: "Place your compelling message here",
          backgroundColor: "#3498db",
          textColor: "#ffffff",
          ctaText: "SIGN UP NOW",
          ctaUrl: "#",
        },
      },
      {
        id: "features-4",
        type: "features",
        properties: {
          heading: "Core Features",
          description: "Everything you need to succeed",
          features: [
            {
              icon: "check",
              title: "Easy to Use",
              description: "Simple and intuitive interface",
            },
            {
              icon: "lock",
              title: "Secure",
              description: "Enterprise-grade security",
            },
            {
              icon: "trending-up",
              title: "Scalable",
              description: "Grows with your business",
            },
          ],
          backgroundColor: "#ecf0f1",
        },
      },
      {
        id: "footer-3",
        type: "footer",
        properties: {
          companyName: "Your Company",
          backgroundColor: "#2c3e50",
          textColor: "#ffffff",
          links: ["Features", "Pricing", "Docs"],
        },
      },
    ],
  },
  {
    name: "Emerald Gem",
    description: "Fresh green design with modern aesthetic for eco and wellness brands",
    blocks: [
      {
        id: "hero-4",
        type: "hero",
        properties: {
          heading: "YOUR GREAT HEADLINE",
          subheading: "Tell them something compelling about your business",
          backgroundColor: "#27ae60",
          textColor: "#ffffff",
          ctaText: "GET STARTED",
          ctaUrl: "#",
        },
      },
      {
        id: "section-spacer-2",
        type: "section-spacer",
        properties: {
          height: 30,
          backgroundColor: "#ecf0f1",
        },
      },
      {
        id: "about-1",
        type: "about",
        properties: {
          heading: "Tell Them Something About Your Business",
          description: "Share your story and vision with your audience",
          content: "This section is perfect for explaining what you do, why you do it, and why customers should care.",
          backgroundColor: "#ffffff",
          imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
        },
      },
      {
        id: "features-5",
        type: "features",
        properties: {
          heading: "Our Services",
          description: "What we offer to our customers",
          features: [
            {
              icon: "leaf",
              title: "Eco Friendly",
              description: "Sustainable solutions",
            },
            {
              icon: "smile",
              title: "Customer Happy",
              description: "Your satisfaction matters",
            },
          ],
          backgroundColor: "#f0f9ff",
        },
      },
      {
        id: "footer-4",
        type: "footer",
        properties: {
          companyName: "Eco Business",
          backgroundColor: "#27ae60",
          textColor: "#ffffff",
          links: ["About", "Services", "Contact"],
        },
      },
    ],
  },
  {
    name: "Yellow Jacket",
    description: "Bright yellow design with professional layout for consultants and coaches",
    blocks: [
      {
        id: "hero-5",
        type: "hero",
        properties: {
          heading: "Please Enter Your Main Headline Here",
          subheading: "Optional subheading goes here",
          backgroundColor: "#F39C12",
          textColor: "#ffffff",
          ctaText: "CONTACT",
          ctaUrl: "#",
        },
      },
      {
        id: "features-6",
        type: "features",
        properties: {
          heading: "Your Main Advantage",
          description: "Extra Discount - About Your Business",
          features: [
            {
              icon: "star",
              title: "Excellence",
              description: "Top quality service delivery",
            },
            {
              icon: "briefcase",
              title: "Professional",
              description: "Expert team at your service",
            },
            {
              icon: "message-circle",
              title: "Support",
              description: "Always here to help",
            },
          ],
          backgroundColor: "#ffffff",
        },
      },
      {
        id: "section-spacer-3",
        type: "section-spacer",
        properties: {
          height: 40,
          backgroundColor: "#fff9e6",
        },
      },
      {
        id: "contact-form-1",
        type: "contact-form",
        properties: {
          heading: "Get In Touch",
          description: "Send us a message and we'll respond as soon as possible",
          backgroundColor: "#F39C12",
          textColor: "#ffffff",
        },
      },
      {
        id: "footer-5",
        type: "footer",
        properties: {
          companyName: "Your Company",
          backgroundColor: "#34495e",
          textColor: "#ffffff",
          links: ["Home", "About", "Contact"],
        },
      },
    ],
  },
  {
    name: "Business Consultant",
    description: "Professional design with testimonials and team sections for consulting firms",
    blocks: [
      {
        id: "hero-6",
        type: "hero",
        properties: {
          heading: "Let's lift up your business!",
          subheading: "We help businesses reach their full potential",
          backgroundColor: "#1e88e5",
          textColor: "#ffffff",
          ctaText: "SCHEDULE CONSULTATION",
          ctaUrl: "#",
          backgroundImageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
        },
      },
      {
        id: "about-2",
        type: "about",
        properties: {
          heading: "About Us",
          description: "We are consultants with decades of experience",
          content: "Our team of experts has successfully helped hundreds of businesses achieve their goals.",
          backgroundColor: "#ecf0f1",
          imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
        },
      },
      {
        id: "features-7",
        type: "features",
        properties: {
          heading: "Our Services",
          description: "Comprehensive solutions for your business",
          features: [
            {
              icon: "target",
              title: "Strategy",
              description: "Develop winning strategies",
            },
            {
              icon: "bar-chart-2",
              title: "Analytics",
              description: "Data-driven insights",
            },
            {
              icon: "users",
              title: "Team Building",
              description: "Build strong teams",
            },
          ],
          backgroundColor: "#ffffff",
        },
      },
      {
        id: "testimonials-1",
        type: "testimonials",
        properties: {
          heading: "What Our Clients Say",
          testimonials: [
            {
              name: "Jane Smith",
              company: "Tech Startup",
              quote: "They transformed our business strategy!",
              imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
            },
            {
              name: "John Doe",
              company: "Manufacturing Co",
              quote: "Best decision we made for our company",
              imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
            },
          ],
          backgroundColor: "#f5f5f5",
        },
      },
      {
        id: "footer-6",
        type: "footer",
        properties: {
          companyName: "Consulting Firm",
          backgroundColor: "#1a1a1a",
          textColor: "#ffffff",
          links: ["Services", "About", "Contact"],
        },
      },
    ],
  },
  {
    name: "Incorporate",
    description: "Professional corporate template with blue and white design",
    blocks: [
      {
        id: "hero-7",
        type: "hero",
        properties: {
          heading: "The smartest way to engage your company",
          subheading: "We help corporations reach new heights",
          backgroundColor: "#0277BD",
          textColor: "#ffffff",
          ctaText: "LEARN MORE",
          ctaUrl: "#",
          backgroundImageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
        },
      },
      {
        id: "features-8",
        type: "features",
        properties: {
          heading: "Enterprise Solutions",
          description: "Scalable solutions for large organizations",
          features: [
            {
              icon: "shield",
              title: "Security",
              description: "Enterprise-grade protection",
            },
            {
              icon: "zap",
              title: "Performance",
              description: "Lightning fast processing",
            },
            {
              icon: "users",
              title: "Collaboration",
              description: "Team coordination tools",
            },
          ],
          backgroundColor: "#ecf0f1",
        },
      },
      {
        id: "contact-form-2",
        type: "contact-form",
        properties: {
          heading: "Ready to Transform?",
          description: "Schedule a demo with our team",
          backgroundColor: "#0277BD",
          textColor: "#ffffff",
        },
      },
      {
        id: "footer-7",
        type: "footer",
        properties: {
          companyName: "Corporate Solutions Inc",
          backgroundColor: "#01579b",
          textColor: "#ffffff",
          links: ["Solutions", "Pricing", "Support"],
        },
      },
    ],
  },
  {
    name: "Personal Consultant",
    description: "Personalized consultant template with professional photo section",
    blocks: [
      {
        id: "hero-8",
        type: "hero",
        properties: {
          heading: "Get more customers without spending a dime!",
          subheading: "Proven strategies for business growth",
          backgroundColor: "#26c6da",
          textColor: "#ffffff",
          ctaText: "SCHEDULE CALL",
          ctaUrl: "#",
        },
      },
      {
        id: "about-3",
        type: "about",
        properties: {
          heading: "Hi,",
          description: "I'm a certified business consultant with 15+ years of experience",
          content: "I've helped hundreds of entrepreneurs and small business owners scale their operations and increase revenue.",
          backgroundColor: "#ffffff",
          imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        },
      },
      {
        id: "features-9",
        type: "features",
        properties: {
          heading: "My Approach",
          description: "Data-driven and results-focused",
          features: [
            {
              icon: "zap",
              title: "Fast Results",
              description: "See improvements in weeks",
            },
            {
              icon: "trending-up",
              title: "Growth Focused",
              description: "Maximize your potential",
            },
            {
              icon: "message-circle",
              title: "Personal Support",
              description: "One-on-one guidance",
            },
          ],
          backgroundColor: "#e0f2f1",
        },
      },
      {
        id: "testimonials-2",
        type: "testimonials",
        properties: {
          heading: "Success Stories",
          testimonials: [
            {
              name: "Client 1",
              company: "E-commerce Business",
              quote: "Increased revenue by 300% in 6 months!",
              imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
            },
            {
              name: "Client 2",
              company: "Service Provider",
              quote: "Game-changer for my business",
              imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
            },
          ],
          backgroundColor: "#f5f5f5",
        },
      },
      {
        id: "footer-8",
        type: "footer",
        properties: {
          companyName: "Your Name - Consultant",
          backgroundColor: "#00897b",
          textColor: "#ffffff",
          links: ["About Me", "Services", "Contact"],
        },
      },
    ],
  },
  {
    name: "Nutritionist",
    description: "Vibrant health and wellness template with testimonials",
    blocks: [
      {
        id: "hero-9",
        type: "hero",
        properties: {
          heading: "Today can be your fresh start to live healthier and enjoy it!",
          subheading: "Professional nutrition coaching for your wellness journey",
          backgroundColor: "#E91E63",
          textColor: "#ffffff",
          ctaText: "GET YOUR PLAN",
          ctaUrl: "#",
          backgroundImageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200",
        },
      },
      {
        id: "about-4",
        type: "about",
        properties: {
          heading: "Hi,",
          description: "I'm a certified nutritionist specializing in personalized wellness plans",
          content: "I help busy professionals achieve their health goals through customized nutrition strategies that fit their lifestyle.",
          backgroundColor: "#fff3e0",
          imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        },
      },
      {
        id: "features-10",
        type: "features",
        properties: {
          heading: "What I Offer",
          description: "Comprehensive nutrition services",
          features: [
            {
              icon: "heart",
              title: "Personal Plans",
              description: "Customized for your goals",
            },
            {
              icon: "book",
              title: "Education",
              description: "Learn sustainable habits",
            },
            {
              icon: "users",
              title: "Support",
              description: "Ongoing accountability",
            },
          ],
          backgroundColor: "#ffffff",
        },
      },
      {
        id: "testimonials-3",
        type: "testimonials",
        properties: {
          heading: "Client Transformations",
          testimonials: [
            {
              name: "Sarah",
              company: "Lost 25 lbs",
              quote: "Finally found a nutrition plan that works!",
              imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
            },
            {
              name: "Mike",
              company: "Increased Energy",
              quote: "Feel amazing and have more energy than ever!",
              imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
            },
          ],
          backgroundColor: "#fff3e0",
        },
      },
      {
        id: "footer-9",
        type: "footer",
        properties: {
          companyName: "Nutrition Coach",
          backgroundColor: "#C2185B",
          textColor: "#ffffff",
          links: ["Services", "About", "Contact"],
        },
      },
    ],
  },
];

export const getTemplateById = (index: number) => {
  return landingPageTemplates[index] || null;
};

export const getTemplateColor = (index: number): string => {
  const colors = [
    "#FFD700", // Turquoise Mountains - Yellow
    "#FF4500", // Orange Fire - Orange Red
    "#3498db", // Easy Blue - Blue
    "#27ae60", // Emerald Gem - Green
    "#F39C12", // Yellow Jacket - Orange
    "#1e88e5", // Business Consultant - Blue
    "#0277BD", // Incorporate - Dark Blue
    "#26c6da", // Personal Consultant - Cyan
    "#E91E63", // Nutritionist - Pink
  ];
  return colors[index] || "#95a5a6";
};
