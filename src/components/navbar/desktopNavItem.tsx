import Link from "next/link";
import React from "react";

export default function DesktopNavItem({
  href,
  isActive,
  display,
}: {
  href: string;
  isActive: boolean;
  display: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`
        'relative block px-3 py-2 transition',
        ${isActive ? "text-teal-500" : "hover:text-teal-500"}
      `}
      >
        <p className="capitalize">{display}</p>
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0" />
        )}
      </Link>
    </li>
  );
}
