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
    {
      name: "Projects",
      link: "./pages/Projects",
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
          <div className="flex items-center gap-4">
            <a href="mailto:workwithdivy@gmail.com">
              <NavbarButton variant="primary">Mail</NavbarButton>
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-gray-300 hover:text-white transition-colors duration-200">
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
      <div className="pt-24 min-h-screen">
        {children}
      </div>
      {/* Navbar */}
    </div>

  );
};