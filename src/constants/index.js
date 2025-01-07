
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Overview",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Projects",
    url: "#roadmap",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo,yourlogo,yourlogo
];

export const brainwaveServices = [
  "Client-Centric Services",
  "Expert Team",
  "Diverse Portfolio",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Carman business solutions",
    text: "Experience the future of business communication. Our website allows you to quickly access information, place orders, and manage tasks with simple instructions.Available on all major platforms – mobile, desktop, and more.",
    date: "2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "TechShot",
    text: "Stay ahead of the curve with Tech Shot! Our newsletter delivers the latest tech news, reviews, and expert analysis straight to your inbox, helping you make informed decisions.",
    date: "2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Venue Painting",
    text: "Venue Painting are indulged in rendering world-class property painting services in Singapore. Our wide ranges of painting services includes Interior painting, Exterior painting, Momento painting, Colour consulting, and lots more",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Singapore construction",
    text: "The company established in the Year 2004 with the motive to serve the best in the industry. The credibility and dazzling design quality Our work process starts by understanding our clients’ wish and desires so that can visually interpret them in a combination of quality and style",
    date: "2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "We provide innovative software solutions that drive business growth with scalable and reliable technology.";

export const collabContent = [
  {
    id: "0",
    title: "Innovative",
    text: collabText,
  },
  {
    id: "1",
    title: "Reliable",
  },
  {
    id: "2",
    title: "Tech-driven",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Essential tools for individuals and small businesses to start their journey.",
    price: "7 days",
    features: [
      "Simple support to assist with common queries",
      "Basic customization options for a personalized experience",
      "Free access to core features and app exploration",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced tools and features to boost efficiency and gain deeper insights.",
    price: "15 days",
    features: [
      "Better support for handling complex conversations",
      "Comprehensive analytics to track and optimize performance",
      "Priority customer support for faster issue resolution",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Fully customized solutions designed for large-scale business operations.",
    price: "30 days",
    features: [
      "Tailor-made solutions made for your business processes",
      "Advanced analytics and reporting for data-driven decisions",
      "Dedicated account manager to provide continuous support",
    ],
  },
  
];

export const benefits = [
  {
    id: "0",
    title: "E-commerce Development",
    text:"Create robust and scalable online stores to enhance customer engagement and drive sales.",
    icon: "/icons/ecommerce.svg",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "App Development",
    text: "Develop cutting-edge mobile applications tailored to your business needs and boost your production.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Web Development",
    text: "Build responsive and user-friendly websites to establish a strong online presence for your business.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "AI Solutions",
    text: "Leverage artificial intelligence to automate processes and gain insights.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "API Integration",
    text: "Seamlessly integrate third-party APIs to enhance your application's functionality.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Digital Marketing",
    text: "Boost your brand's visibility with targeted and data-driven digital marketing strategies.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "CRM Solutions",
    text:"Implement CRM systems to manage customer relationships and optimize operations.",
    icon: "/icons/ecommerce.svg",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Cyber Security",
    text: "Protect your digital assets and ensure the safety of your business with top-tier security solutions.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "8",
    title: "AR/VR Development",
    text: "Develop immersive augmented and virtual reality experiences to transform user engagement.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "9",
    title: "Software Development",
    text: "Build custom software solutions tailored to your business to streamline operations and enhance productivity.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "10",
    title: "IoT Solutions",
    text: "Implement IoT solutions to connect devices, collect data, and automate processes for improved efficiency.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "11",
    title: "Cloud Computing",
    text: "Leverage cloud platforms to scale your infrastructure, improve performance, and reduce costs with flexible, on-demand solutions.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
