"use client";
import React from "react";
import { motion, useCycle } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { navItems } from "./navbar";

export default function MobileNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const segment = useSelectedLayoutSegment();
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`fixed inset-0 z-40 w-full sm:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-white"
        variants={{
          open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
            transition: {
              type: "spring",
              stiffness: 20,
              restDelta: 2,
            },
          }),
          closed: {
            clipPath: "circle(0px at 100% 0)",
            transition: {
              delay: 0.3,
              type: "spring",
              stiffness: 400,
              damping: 40,
            },
          },
        }}
      />
      <motion.ul
        variants={variants}
        className="absolute grid w-full px-10 py-16"
      >
        {navItems.map((item) => (
          <MenuItem key={item} className="border-b border-gray-300 py-5">
            <Link
              href={`/${item}`}
              className={`flex w-full font-semibold capitalize ${
                segment === item ? "text-teal-500" : ""
              }`}
              onClick={() => {
                toggleOpen();
              }}
            >
              {item}
            </Link>
          </MenuItem>
        ))}
      </motion.ul>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
}
const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute top-8 right-10"
  >
    <span className="sr-only">Open Menu</span>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return dimensions.current;
};
