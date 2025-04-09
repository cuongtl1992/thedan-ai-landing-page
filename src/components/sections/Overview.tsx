"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Bot, Zap, Layers } from "lucide-react";

interface OverviewProps {
  language: "vi" | "en";
}

export default function Overview({ language }: OverviewProps) {
  const content = {
    vi: {
      title: "Tính năng chính",
      subtitle: "Khám phá những gì Dan AI có thể làm",
      features: [
        {
          icon: <Brain className="h-10 w-10 text-primary" />,
          title: "Trí tuệ nhân tạo tiên tiến",
          description: "Tận dụng mô hình AI tiên tiến để tạo ra trải nghiệm mạnh mẽ và tự nhiên cho người dùng.",
        },
        {
          icon: <Bot className="h-10 w-10 text-primary" />,
          title: "Tạo Agent dễ dàng",
          description: "Xây dựng Agent AI mạnh mẽ mà không cần kiến thức lập trình hoặc kỹ năng chuyên sâu.",
        },
        {
          icon: <Zap className="h-10 w-10 text-primary" />,
          title: "Tự động hóa quy trình",
          description: "Tự động hóa các nhiệm vụ hàng ngày và tối ưu hóa quy trình làm việc để tiết kiệm thời gian.",
        },
        {
          icon: <Layers className="h-10 w-10 text-primary" />,
          title: "Khả năng tùy chỉnh cao",
          description: "Điều chỉnh Agent của bạn với các tùy chọn cá nhân hóa nâng cao và MCP linh hoạt.",
        },
      ],
    },
    en: {
      title: "Core Features",
      subtitle: "Discover what Dan AI can do",
      features: [
        {
          icon: <Brain className="h-10 w-10 text-primary" />,
          title: "Advanced AI Intelligence",
          description: "Leverage cutting-edge AI models to create powerful and natural user experiences.",
        },
        {
          icon: <Bot className="h-10 w-10 text-primary" />,
          title: "Easy Agent Creation",
          description: "Build powerful AI agents without coding knowledge or specialized skills.",
        },
        {
          icon: <Zap className="h-10 w-10 text-primary" />,
          title: "Workflow Automation",
          description: "Automate everyday tasks and optimize workflows to save time and increase efficiency.",
        },
        {
          icon: <Layers className="h-10 w-10 text-primary" />,
          title: "High Customizability",
          description: "Tailor your agents with advanced personalization options and flexible MCPs.",
        },
      ],
    },
  };

  return (
    <section id="features" className="py-12 md:py-20 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {content[language].title}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {content[language].subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content[language].features.map((feature, index) => (
            <Card key={index} className="bg-card border hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 