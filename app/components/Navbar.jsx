"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 🔒 Lock scroll saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `relative transition ${
      isActive(path)
        ? "text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="w-10/12 mx-auto h-20 bg-transparent flex items-center justify-between relative">

      {/* LOGO */}
      <div className="text-white font-bold text-2xl">
        MZI
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 font-semibold">
        <li><Link href="/" className={linkClass("/")}>Home</Link></li>
        <li><Link href="/about" className={linkClass("/about")}>About</Link></li>
        <li><Link href="/projects" className={linkClass("/projects")}>Projects</Link></li>
        <li><Link href="/sertificates" className={linkClass("/sertificates")}>Sertificates</Link></li>
      </ul>

      {/* HAMBURGER BUTTON */}
      <button
        className="md:hidden text-white text-3xl relative z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </button>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#111] md:hidden z-40">
          <ul className="flex flex-col items-center justify-center h-full gap-8 text-lg font-semibold">
            <li><Link href="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" className={linkClass("/about")} onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/projects" className={linkClass("/projects")} onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="/sertificates" className={linkClass("/sertificates")} onClick={() => setIsOpen(false)}>Sertificates</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
