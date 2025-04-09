"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Globe } from "lucide-react";

interface NavLink {
  href: string;
  label: {
    vi: string;
    en: string;
  };
}

// Define the custom event
declare global {
  interface WindowEventMap {
    languageChange: CustomEvent<{ language: "vi" | "en" }>;
  }
}

const navLinks: NavLink[] = [
  {
    href: "#features",
    label: {
      vi: "Tính năng",
      en: "Features",
    },
  },
  {
    href: "#pricing",
    label: {
      vi: "Giá cả",
      en: "Pricing",
    },
  },
  {
    href: "#about",
    label: {
      vi: "Giới thiệu",
      en: "About Us",
    },
  },
  {
    href: "#contact",
    label: {
      vi: "Liên hệ",
      en: "Contact",
    },
  },
];

// Dan AI Logo component with theme support
const Logo = () => {
  useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      {/* Logo text with AI in accent/primary color */}
      <span className="text-2xl font-bold">
        Dan<span className="text-primary">AI</span>
      </span>
    </div>
  );
};

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<"vi" | "en">("vi");
  const { theme, setTheme } = useTheme();

  // Scroll handler for smooth navigation
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Toggle language between Vietnamese and English
  const toggleLanguage = () => {
    const newLanguage = language === "vi" ? "en" : "vi";
    setLanguage(newLanguage);
    
    // Emit custom event
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('languageChange', { 
        detail: { language: newLanguage } 
      });
      window.dispatchEvent(event);
    }
  };

  // useEffect for client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          
          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {language === "vi" ? link.label.vi : link.label.en}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            aria-label="Toggle language"
            onClick={toggleLanguage}
            className="rounded-full px-3 font-medium shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Globe className="h-4 w-4 mr-1" />
            <span>{language.toUpperCase()}</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <Button 
            variant="default"
            className="ml-2"
            onClick={() => window.open("https://app.thedan.biz", "_blank")}
          >
            {language === "vi" ? "Đăng nhập / Đăng ký" : "Sign In / Sign Up"}
          </Button>
        </div>
      </div>
    </nav>
  );
} 