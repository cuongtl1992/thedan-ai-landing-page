"use client";

import { Button } from "@/components/ui/button";

interface HeroProps {
  language: "vi" | "en";
}

export default function Hero({ language }: HeroProps) {
  const content = {
    vi: {
      tagline: "Xây dựng trợ lý AI mạnh mẽ chỉ trong vài phút",
      subtext: "Dan AI giúp bạn tạo ra các đại diện AI thông minh, tự động hóa quy trình làm việc và nâng cao hiệu suất mà không cần kiến thức lập trình.",
      cta: "Bắt đầu ngay",
    },
    en: {
      tagline: "Build powerful AI assistants in minutes",
      subtext: "Dan AI helps you create intelligent AI agents, automate workflows, and boost productivity without coding knowledge.",
      cta: "Get Started",
    },
  };

  return (
    <section id="hero" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {content[language].tagline}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {content[language].subtext}
            </p>
          </div>
          <div className="space-x-4 pt-4">
            <Button
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 px-8"
              onClick={() => window.open("https://app.thedan.biz", "_blank")}
            >
              {content[language].cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 