export type TCertificate = {
  image: string;
  title: string;
  subtitle: string;
  date: string;
  organization: string;
  category: string;
  link: string;
};

export type CertificateCategory = {
  category: string;
  certificates: TCertificate[];
};
export const DigitalSkillscertificates: TCertificate[] = [
  {
    image: "/cert-specialization.png",
    title: "Digital Skills Foundation Certificate",
    subtitle: "Digital Skills",
    date: "December 2024",
    organization: "Google Digital Skills for Africa",
    category: "Digital Skills",
    link: "https://training.digitalskillsfdn.org/pluginfile.php/1/tool_certificate/issues/1694700901/9729963503ML.pdf",
  },
];
export const WebdevCertificates: TCertificate[] = [
  {
    image: "/cert-specialization.png",
    title: "Meta Front-End Developer Certificate",
    subtitle: "Front-End Developer",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "Front-End Development",
    link: "https://coursera.org/share/8479e076469ca867565f54b0053b946a",
  },
  {
    image: "/cert-course.png",
    title: "Introduction Front-End Developement Certificate",
    subtitle: "Front-End Developement",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "Introduction",
    link: "https://coursera.org/share/9b62fdb73dd8e269f46ade259530fe6d ",
  },
  {
    image: "/cert-course.png",
    title: "Version Control with Git",
    subtitle: "Version Control",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "Version Control",
    link: "https://coursera.org/share/b471e6d0ed1291c9c3246ab61674ef53 ",
  },
  {
    image: "/cert-course.png",
    title: "Programming with Js",
    subtitle: "JavaScript",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "JavaScript",
    link: "https://coursera.org/share/968b4301eacd0135393f370a05020736",
  },
  {
    image: "/cert-course.png",
    title: "Advanced React",
    subtitle: "React",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "React",
    link: "https://coursera.org/share/f23256123c7e2b7f06b30a3ddcdd6818",
  },
  {
    image: "/cert-course.png",
    title: "Principles of UX/UI Design",
    subtitle: "UX/UI Design",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "Design",
    link: "https://coursera.org/share/029b794048f52d722ed76ae35747c94c",
  },
  {
    image: "/cert-course.png",
    title: "React Basics",
    subtitle: "React",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "React",
    link: "https://coursera.org/share/b893360e895006ba00dec0b7617c58ce",
  },
  {
    image: "/cert-course.png",
    title: "HTML and CSS in depth",
    subtitle: "HTML5 and CSS3",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "HTML5 and CSS3",
    link: " https://coursera.org/share/954ea0bbd27b65fc01fdbf22965a1830",
  },
  {
    image: "/cert-course.png",
    title: "Coding Interview Preparation",
    subtitle: "Interview Preparation",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "Interview",
    link: "https://coursera.org/share/6a80afb24937d8bb1f25dfe1ac45dbf5",
  },
  {
    image: "/cert-course.png",
    title: "Front-End Developer Capstone",
    subtitle: "Front-End Developer",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "Front-End Development",
    link: "https://coursera.org/share/3b53f517ba1550cd77aeea786b61daa9",
  },
];
export const LeadershipCertificates: TCertificate[] = [
  {
    image: "/cert-specialization.png",
    title: "iLead Leadership Certificate",
    subtitle: "Leadership",
    date: "December 2024",
    organization: "Maxwell Leadership Foundation",
    category: "Leadership",
    link: "https://drive.google.com/file/d/1GgtTgvUPAmlmwz7G-Q4G3A_Jd0wG1TdW/view?usp=sharing",
  },
  {
    image: "/cert-course.png",
    title: "iDo Leadership Certificate",
    subtitle: "Leadership",
    date: "December 2024",
    organization: "Maxwell Leadership Foundation",
    category: "Leadership",
    link: "https://drive.google.com/file/d/18j75ufAEWYgqHLPbWp-Fhtdu3k4IpC6z/view?usp=sharing",
  },
  {
    image: "/cert-course.png",
    title: "iChoose Leadership Certificate",
    subtitle: "Leadership",
    date: "December 2024",
    organization: "Maxwell Leadership Foundation",
    category: "Leadership",
    link: "https://drive.google.com/file/d/1wdGjjXqI7lVe4NSbkZFuC5W4_1nFpS6V/view?usp=sharing",
  },
];
export const PythonCertificates: TCertificate[] = [
  {
    image: "/cert-specialization.png",
    title: "Programming for Everybody (Getting Started with Python)",
    subtitle: "Python",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "Python",
    link: "https://www.coursera.org/account/accomplishments/verify/X3Q24PALH510",
  },
  {
    image: "/cert-course.png",
    title: "Python Data Structures",
    subtitle: "Python",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "Python",
    link: "https://www.coursera.org/account/accomplishments/verify/HU1VDDHQM2UP",
  },
  {
    image: "/cert-course.png",
    title: "Using Python to Access Web Data",
    subtitle: "Python",
    date: "December 2024",
    organization: "Coursera Meta",
    category: "Python",
    link: "https://www.coursera.org/account/accomplishments/verify/JWYVBPOLKV6S",
  },
];

export const certificates: CertificateCategory[] = [
  {
    category: "Web Development",
    certificates: WebdevCertificates,
  },
  {
    category: "Digital Skills",
    certificates: DigitalSkillscertificates,
  },
  {
    category: "Leadership",
    certificates: LeadershipCertificates,
  },
  {
    category: "Python",
    certificates: PythonCertificates,
  },
];
