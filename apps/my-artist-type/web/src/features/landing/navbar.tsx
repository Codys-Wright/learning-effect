"use client";
import { useTheme } from "@/components/providers/theme-provider";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@ui/aceternity";
import { ModeToggle, Tooltip } from "@ui/shadcn";
import { useState, type ReactNode } from "react";

export function NavbarHome({ children }: { children?: ReactNode }) {
  const { setTheme, theme } = useTheme();
  const navItems = [
    {
      name: "Artist Types",
      link: "/artist-types",
    },
    {
      name: "Quiz",
      link: "/quiz",
    },
    {
      name: "Admin",
      link: "/admin",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="fixed inset-x-0 top-0 z-50">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Tooltip>
              <Tooltip.Trigger asChild>
                <NavbarButton
                  variant="secondary"
                  disabled
                  className="opacity-50 cursor-not-allowed"
                >
                  Login
                </NavbarButton>
              </Tooltip.Trigger>
              <Tooltip.Content>Authentication is disabled right now</Tooltip.Content>
            </Tooltip>
            <NavbarButton variant="primary">Take the Quiz!</NavbarButton>
            <div className="relative z-[70]">
              <ModeToggle theme={theme} setTheme={setTheme} />
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => {
              setIsMobileMenuOpen(false);
            }}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <NavbarButton
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    variant="primary"
                    className="w-full opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Login
                  </NavbarButton>
                </Tooltip.Trigger>
                <Tooltip.Content>Authentication is disabled right now</Tooltip.Content>
              </Tooltip>
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                variant="primary"
                className="w-full"
              >
                Take the Quiz!
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {children}

      {/* Navbar */}
    </div>
  );
}
