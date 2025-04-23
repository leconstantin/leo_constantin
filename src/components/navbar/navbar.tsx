"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import DesktopNavItem from "./desktopNavItem";
import MobileNav from "./mobileNav";

export const navItems = ["projects", "blogs", "certificates"];

export default function NavBar() {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="top-0 z-10 h-16 pt-6 w-full flex justify-between items-center mx-5 sm:mx-auto max-w-2xl lg:max-w-5xl">
      <div className="w-20">
        {segment && (
          <Link href="/">
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full object-cover size-40"
              style={{ width: "40px", height: "40px" }}
            />
          </Link>
        )}
      </div>
      <ul className="hidden sm:flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        {navItems.map((item) => (
          <DesktopNavItem
            key={item}
            href={`/${item}`}
            isActive={segment === item}
            display={item}
          />
        ))}
      </ul>
      <div>
        <MobileNav />
      </div>
    </nav>
  );
}
