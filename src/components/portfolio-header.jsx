"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getNavItems, getPersonalInfo } from "@/lib/data";

export function PortfolioHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navItems = getNavItems();
  const personalInfo = getPersonalInfo();

  const HEADER_OFFSET = 150;

  const SECTION_IDS_IN_DOM_ORDER = [
    "experience",
    "education",
    "certifications",
    "skills",
    "projects",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let nextActive = "";

      for (const sectionId of SECTION_IDS_IN_DOM_ORDER) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        // Section has started (its top is at or above the "scan line" under the header)
        if (rect.top <= HEADER_OFFSET) {
          nextActive = sectionId;
        }
      }

      setActiveSection(nextActive);

      // Optional: only treat as "Home" when nothing has crossed the line yet
      // (remove any old `if (window.scrollY < 100) setActiveSection("")` block)
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled
          ? "bg-zinc-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center group">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {personalInfo.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
          <span className="text-zinc-400 text-sm ml-2 hidden sm:inline-block transition-all duration-300 group-hover:text-zinc-300">
            / {personalInfo.title}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? activeSection === ""
                : activeSection === item.href.substring(1);

            const className = cn(
              "px-3 py-2 text-sm relative group transition-all duration-300",
              isActive ? "text-cyan-400" : "text-zinc-400 hover:text-white",
            );

            const inner = (
              <>
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-cyan-500/0 rounded-md group-hover:bg-cyan-500/10 transition-all duration-300" />
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-4/5",
                    isActive && "w-4/5",
                  )}
                />
              </>
            );

            if (item.href.startsWith("#")) {
              return (
                <a key={item.label} href={item.href} className={className}>
                  {inner}
                </a>
              );
            }

            return (
              <Link key={item.label} href={item.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors duration-300 relative overflow-hidden group"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="relative z-10">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
          <span className="absolute inset-0 scale-0 rounded-full bg-zinc-700/50 group-hover:scale-100 transition-transform duration-300"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-40 flex flex-col pt-20 px-4 md:hidden transition-all duration-500",
          mobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none",
        )}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item, index) => {
            const isActive =
              item.href === "/"
                ? activeSection === ""
                : activeSection === item.href.substring(1);

            const className = cn(
              "px-3 py-4 text-lg border-b border-zinc-800 relative group transition-all duration-300",
              isActive
                ? "text-cyan-400 border-cyan-400/30"
                : "text-zinc-300 hover:text-white hober:pl-5",
            );

            const style = {
              transitionDelay: `${index * 50}ms`,
              transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
              opacity: mobileMenuOpen ? 1 : 0,
            };

            const leftAccent = (
              <span
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 w-0 h-1/2 bg-gradient-to-b from-cyan-400/20 to-blue-500/20 transition-all duration-300 group-hover:w-1",
                  isActive && "w-1",
                )}
              />
            );

            if (item.href.startsWith("#")) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={className}
                  style={style}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                  {leftAccent}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={className}
                style={style}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">{item.label}</span>
                {leftAccent}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
