"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${scrolled ? "bg-slate-950 py-3 shadow-xl" : "bg-slate-950/80 backdrop-blur-sm py-6 shadow-none"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }: { color?: string }) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <h1
        className={`text-2xl bg-gradient-to-t from-cyan-100 to-blue-400 bg-clip-text text-transparent font-bold`}
      >
        thryve
      </h1>
    </Link>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((link) => (
        <Link
          key={link.text}
          href={link.href}
          className="text-slate-300 hover:text-cyan-400 transition-colors"
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href="/contact">
        <Button
          variant="outline"
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer border-transparent text-white hover:text-white transition-colors"
        >
          contact us
        </Button>
      </Link>
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-slate-950" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto bg-neutral-100 p-6 flex flex-col items-end space-y-4">
              {LINKS.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-slate-950 hover:text-cyan-800 text-right"
                >
                  {link.text}
                </Link>
              ))}
              <div className="pt-2">
                <CTAs />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const LINKS = [
  { text: "home", href: "/" },
  { text: "services", href: "/services" },
  { text: "about", href: "/about" },
];

export default Navigation;