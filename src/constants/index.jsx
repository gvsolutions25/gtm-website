import {
  AppWindowIcon,
  Component,
  CupSoda,
  DatabaseZapIcon,
  FileChartPie,
  FileImageIcon,
  FolderCodeIcon,
  Handshake,
  LayoutTemplateIcon,
  Search,
} from "lucide-react";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiFigma,
  SiAdobeaftereffects,
  SiAdobeindesign,
} from "react-icons/si";

export const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Workflow", href: "#workflow" },
  { label: "Features", href: "#features" },
];

export const services = [
  {
    title: "Graphic Design",
    icon: <FileImageIcon />,
    description:
      "We are highly talented and creative in creating high quality content.",
    tags: [
      "UI & UX Design",
      "Graphic Design",
      "Branding",
      "Web Design",
      "Carousel Design",
    ],
  },
  {
    title: "Visual Design",
    icon: <LayoutTemplateIcon />,
    description:
      "We are highly talented and creative in creating high quality content.",
    tags: [
      "UI & UX Design",
      "Graphic Design",
      "Branding",
      "Web Design",
      "Carousel Design",
    ],
  },
  {
    title: "Product Design",
    icon: <AppWindowIcon />,
    description:
      "We are highly talented and creative in creating high quality content.",
    tags: [
      "UI & UX Design",
      "Graphic Design",
      "Branding",
      "Web Design",
      "Carousel Design",
    ],
  },
  {
    title: "Platform Development",
    icon: <Component />,
    description:
      "We are highly talented and creative in creating high quality content.",
    tags: [
      "UI & UX Design",
      "Graphic Design",
      "Branding",
      "Web Design",
      "Carousel Design",
    ],
  },
  {
    title: "Backend Services",
    icon: <DatabaseZapIcon />,
    description:
      "We are highly talented and creative in creating high quality content.",
    tags: [
      "UI & UX Design",
      "Graphic Design",
      "Branding",
      "Web Design",
      "Carousel Design",
    ],
  },
  {
    title: "Full Stack Dev",
    icon: <FolderCodeIcon />,
    description:
      "We are highly talented and creative in creating high quality content.",
    tags: [
      "UI & UX Design",
      "Graphic Design",
      "Branding",
      "Web Design",
      "Carousel Design",
    ],
    link: "#",
  },
];

export const phase = [
  {
    icon: <Search />,
    title: "Resarch & Analysis",
    description:
      "Dive deep into understanding client objectives and defining project scope.",
  },
  {
    icon: <CupSoda />,
    title: "Strategy Roadmapping",
    description:
      "Outline a clear and actionable plan to ensure project success.",
  },
  {
    icon: <FileChartPie />,
    title: "Conceptual Design",
    description:
      "Craft initial visual designs and prototypes for client review and refinement.",
  },
  {
    icon: <Handshake />,
    title: "Collaborative Engagement",
    description:
      "Foster ongoing dialogue with clients for insights, approvals, and iterative improvements.",
  },
];

export const Tools = [
  {
    apps: [
      <SiAdobeillustrator />,
      <SiAdobephotoshop />,
      <SiReact />,
      <SiNextdotjs />,
      <SiHtml5 />,
      <SiCss3 />,
      <SiBootstrap />,
      <SiTailwindcss />,
      <SiFigma />,
      <SiAdobeaftereffects />,
      <SiAdobeindesign />,
    ],
    titles: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Bootstrap",
      "TailwindCSS",
      "Figma",
      "Adobe After Effects",
      "Adobe InDesign",
    ],
  },
];

export const features = [
  {
    title: "Transform Your Online Presence",
    description:
      "Craft a captivating website that sets your brand apart and resonates with your audience.",
  },
  {
    title: "Amplify Brand Recognition",
    description:
      "Increase your visibility across digital channels to attract a broader customer base.",
  },
  {
    title: "Seamless User Interactions",
    description:
      "Deliver intuitive navigation and a user-friendly experience to keep visitors engaged.",
  },
  {
    title: "Maximize Conversions",
    description:
      "Encourage customer actions with compelling design elements and strategic calls-to-action.",
  },
  {
    title: "Inclusive & Accessible Design",
    description:
      "Ensure your platform caters to all users with responsive and accessibility-focused features.",
  },
  {
    title: "Scalable for Growth",
    description:
      "Adapt effortlessly to new opportunities with flexible, future-ready solutions tailored to your needs.",
  },
];
