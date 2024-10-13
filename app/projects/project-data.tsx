// project.ts (or wherever you want to define your types)
export interface Project {
  title: string;            // Title of the project
  description: string;      // Short description of the project
  date: string;             // Date of the project (if applicable)
  category: string;         // Category of the project (e.g., Web, App, Research)
  image: string;            // Image source for the project
  link: string;             // URL for more details or GitHub
  tags: string[];           // Tags associated with the project
}

export const projects: Project[] = [
  {
    title: "Webi-Fi",
    description: "Education platform for kids and adults to learn web development in an animated and responsive way.",
    date: "2020-02-20",
    category: "Web",
    image: "work/webifi.png",
    link: "https://github.com/shreya-v7/webi-fi",
    tags: ["Web"],
  },
  {
    title: "Times Square Signage",
    description: "Featured on the billboard at Times Square, NYC.",
    date: "2023-02-20",
    category: "Talk",
    image: "work/timesquare.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7030436356199714816/",
    tags: ["Talk"],
  },
  {
    title: "Ecoship",
    description: "Promoting sustainable business practices through shipping.",
    date: "2022-01-30",
    category: "Web",
    image: "work/ecoship.png",
    link: "https://devpost.com/software/ecoship-4mhigz",
    tags: ["Web"],
  },
  {
    title: "Theriac",
    description: "Connecting patients with pharmacies through an innovative platform.",
    date: "2022-12-25",
    category: "Web",
    image: "work/theriac.png",
    link: "https://devpost.com/software/theriac",
    tags: ["Web"],
  },
  {
    title: "Wiz-Event",
    description: "All-in-one event planning platform.",
    date: "2022-02-28",
    category: "Web",
    image: "work/wizevent.png",
    link: "https://devpost.com/software/wiz-event-pnqday",
    tags: ["Web"],
  },
  {
    title: "HPAIR",
    description: "Conferences featuring world-class speakers.",
    date: "2022-08-23",
    category: "Web",
    image: "work/hpair.png",
    link: "https://www.hpair.org/",
    tags: ["Web"],
  },
  {
    title: "DiagZone",
    description: "Affordable and accessible health chatbot.",
    date: "2022-04-23",
    category: "Research",
    image: "work/diagzone.png",
    link: "https://link.springer.com/chapter/10.1007/978-981-19-3089-8_5",
    tags: ["Research"],
  },
  {
    title: "Neura",
    description: "Automated video interview platform.",
    date: "2022-05-30",
    category: "Web",
    image: "work/neura.jpg",
    link: "https://youtu.be/nH8U_Yr2mr8",
    tags: ["Web"],
  },
  {
    title: "Perception vs Perspective",
    description: "Speech promoting women in STEM.",
    date: "2023-05-18",
    category: "Talk",
    image: "work/wwt.png",
    link: "https://www.youtube.com/watch?v=hLdxyDXAzNM",
    tags: ["Talk"],
  },
  {
    title: "ISC Speech",
    description: "Award-winning speech at Toastmasters International.",
    date: "2022-03-22",
    category: "Talk",
    image: "work/tmi.png",
    link: "https://drive.google.com/file/d/1mQ_4wba0bZ05RCRGgzSvZwcBGDiNX6Mu/view?usp=sharing",
    tags: ["Talk"],
  },
  {
    title: "Multifactor Authentication",
    description: "Enhanced security method using genetic image encryption.",
    date: "2023-05-28",
    category: "Research",
    image: "work/mfa.jpeg",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-3734-9_10",
    tags: ["Research"],
  },
  // Add more projects as needed...
];
