"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  language: "vi" | "en";
}

export default function Footer({ language }: FooterProps) {
  const content = {
    vi: {
      copyright: "© 2024 TheDan AI. Bản quyền thuộc về chúng tôi.",
      links: [
        { name: "Điều khoản", href: "#" },
        { name: "Bảo mật", href: "#" },
        { name: "Cookies", href: "#" },
      ],
    },
    en: {
      copyright: "© 2024 TheDan AI. All rights reserved.",
      links: [
        { name: "Terms", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Cookies", href: "#" },
      ],
    },
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:info@thedan.ai", label: "Email" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">TheDan AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {content[language].copyright}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              {content[language].links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 