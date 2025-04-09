"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

// Define the custom event type
interface LanguageChangeEvent extends CustomEvent {
  detail: { language: "vi" | "en" };
}

export default function Home() {
  const [language, setLanguage] = useState<"vi" | "en">("vi");
  const [mounted, setMounted] = useState(false);

  // Listen for language changes from the Navbar
  useEffect(() => {
    const handleLanguageChange = (event: LanguageChangeEvent) => {
      setLanguage(event.detail.language);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);
    setMounted(true);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener);
    };
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Hero language={language} />
      <Overview language={language} />
      <Pricing language={language} />
      <About language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </>
  );
}
