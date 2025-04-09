"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingProps {
  language: "vi" | "en";
}

export default function Pricing({ language }: PricingProps) {
  const content = {
    vi: {
      title: "Gói dịch vụ",
      subtitle: "Chọn gói phù hợp với nhu cầu của bạn",
      cta: "Đăng ký ngay",
      plans: [
        {
          name: "Cá nhân",
          price: "499.000đ",
          description: "Hoàn hảo cho người dùng cá nhân mới bắt đầu với AI.",
          features: [
            "1 Agent",
            "1 MCP",
            "Hỗ trợ cơ bản",
            "Tài liệu toàn diện",
          ],
        },
        {
          name: "Pro",
          price: "799.000đ",
          description: "Lý tưởng cho các doanh nghiệp nhỏ và chuyên gia.",
          features: [
            "5 Agent",
            "5 MCP",
            "Hỗ trợ ưu tiên",
            "Phân tích hiệu suất",
            "Tích hợp API",
          ],
          popular: true,
        },
        {
          name: "Business",
          price: "1.499.000đ",
          description: "Dành cho doanh nghiệp lớn với nhu cầu mở rộng.",
          features: [
            "20 Agent",
            "20 MCP",
            "Hỗ trợ 24/7",
            "Quản lý đội nhóm",
            "Tích hợp API nâng cao",
            "Tùy chỉnh theo yêu cầu",
          ],
        },
      ],
    },
    en: {
      title: "Pricing Plans",
      subtitle: "Choose a plan that suits your needs",
      cta: "Sign Up",
      plans: [
        {
          name: "Personal",
          price: "499.000đ",
          description: "Perfect for individual users starting with AI.",
          features: [
            "1 Agent",
            "1 MCP",
            "Basic support",
            "Comprehensive documentation",
          ],
        },
        {
          name: "Pro",
          price: "799.000đ",
          description: "Ideal for small businesses and professionals.",
          features: [
            "5 Agents",
            "5 MCPs",
            "Priority support",
            "Performance analytics",
            "API integrations",
          ],
          popular: true,
        },
        {
          name: "Business",
          price: "1.499.000đ",
          description: "For larger businesses with scaling needs.",
          features: [
            "20 Agents",
            "20 MCPs",
            "24/7 support",
            "Team management",
            "Advanced API integrations",
            "Custom tailoring",
          ],
        },
      ],
    },
  };

  return (
    <section id="pricing" className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {content[language].title}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {content[language].subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content[language].plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg scale-105 relative' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                  {language === 'vi' ? 'Phổ biến nhất' : 'Most Popular'}
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  onClick={() => window.open("https://app.thedan.biz", "_blank")}
                >
                  {content[language].cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 