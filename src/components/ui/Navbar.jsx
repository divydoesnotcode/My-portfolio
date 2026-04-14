"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";
import { useState } from "react";
import { AnimatedThemeToggler } from "./ThemeToggler";

export function NavbarDemo({ children }) {
  const navItems = [
    {
      name: "X",
      link: "https://x.com/divydoesnotcode",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/divy-barot",
    },
    {
      name: "Github",
      link: "https://github.com/divydoesnotcode",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2 sm:gap-4 relative z-[70]">
            <AnimatedThemeToggler className="p-2 rounded-full text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200 flex items-center justify-center focus:outline-none " />
            <a href="mailto:workwithdivy@gmail.com" target="_blank" rel="noopener noreferrer">
              <NavbarButton variant="primary">Mail</NavbarButton>
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-1 relative z-[80]">
              <AnimatedThemeToggler className="p-2 rounded-full text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200 flex items-center justify-center focus:outline-none" />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <a href="mailto:workwithdivy@gmail.com">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full">
                  Mail
                </NavbarButton>
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Content Injection */}
      <div className="pt-4 min-h-screen">
        {children}
      </div>
      {/* Navbar */}
    </div>
  );
};