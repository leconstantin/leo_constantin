import Card from "@/components/card";
import { Link } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "My@engine",
    description:
      " Web search engine that would help you to find information on the internet easy and quick.",
    link: { href: "https://myengine.vercel.app/", label: "my@eng.app" },
    logo: "/engine.ico",
  },
  {
    name: "Travel@any",
    description:
      "The platform which guide users on outdoor adventures, particularly for hikers and climbers.",
    link: {
      href: "https://travel-xi-nine.vercel.app/",
      label: "travel.anywhere",
    },
    logo: "/Travel.ico",
  },
  {
    name: "Mdx@Content",
    description:
      "Learn how to handle your mdx content through an opensource contentlayer2 project.",
    link: {
      href: "https://ui-contentlayer2-nextjs.vercel.app/",
      label: "contentlayer2.learn",
    },
    logo: "/vercel.ico",
  },
  {
    name: "Learn Nextjs",
    description:
      "Learn nextjs approuter through rebuilding this opensource project.",
    link: {
      href: "https://app-router-nextjs-iota.vercel.app/",
      label: "nextjs.learn",
    },
    logo: "/nextjs.ico",
  },
  {
    name: "Rathon",
    description:
      "A full-service agency specializing in website and software design, development, and hosting.",
    link: { href: "https://rathon.vercel.app/", label: "rathon.app" },
    logo: "/rathon.ico",
  },
  {
    name: "Socially",
    description:
      "Modern social media platform which allows you to share your thoughts and connect with others.",
    link: {
      href: "https://socially-sigma-taupe.vercel.app/",
      label: "socially.app",
    },
    logo: "/Socially.ico",
  },
];

export default function Projects() {
  return (
    <div className="my-20 mx-5 sm:mx-0">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <Image
              src={project.logo}
              alt={`${project.name} Logo`}
              width={32}
              height={32}
              className="h-8 w-8 relative z-10 rounded-md"
            />
            <h2 className="mt-6 text-base font-semibold text-zinc-800">
              <Card.Link
                href={project.link.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500">
              <Link className="h-4 w-4" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </div>
  );
}
