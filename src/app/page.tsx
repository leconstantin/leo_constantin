import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons/social";
import Image from "next/image";
export default function Home() {
  return (
    <main className="mx-5 sm:mx-0 flex flex-col space-y-5 max-w-2xl">
      <Image
        src="/profile.jpeg"
        alt="Profile Picture"
        width={64}
        height={64}
        className="rounded-full size-16 aspect-square"
        priority
      />
      <h1 className="text-5xl font-bold tracking-tighter">
        Programmer. Writer. Player.
      </h1>
      <p className="mt-6 tracking-tight text-lg font-medium">
        Hey, I&apos;m Constantin. I&apos;m the founder and CEO of{" "}
        <a
          href="https://rathon.vercel.app/"
          target="_blank"
          className="underline underline-offset-4 text-muted-foreground font-semibold"
        >
          Rathon
        </a>{" "}
        – a full-service agency specializing in website and software design,
        development, and hosting.
      </p>

      <p className="mt-4 text-lg font-medium  text-muted-foreground">
        In my daily programming activities i use different languages and
        frameworks to create well designed and functional softwares. But am
        likely to use{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 text-primary font-semibold"
        >
          Nextjs
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 text-primary font-semibold"
        >
          Typescript
        </a>
        ,{" "}
        <a
          href="https://www.prisma.io/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 text-primary font-semibold"
        >
          Prisma
        </a>
        , and{" "}
        <a
          href="https://www.postgresql.org/"
          target="_blank"
          className="underline underline-offset-4 text-primary font-semibold"
        >
          Postgress
        </a>
        .
      </p>
      <div className="mt-6 flex gap-6">
        <a
          href="https://x.com/le_con82546"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Twitter profile"
        >
          <TwitterIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a
          href="https://github.com/leconstantin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <GitHubIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a
          href="https://www.linkedin.com/in/leoconstantin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <LinkedInIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
      </div>
    </main>
  );
}
