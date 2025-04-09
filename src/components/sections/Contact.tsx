"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface ContactProps {
  language: "vi" | "en";
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact({ language }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    vi: {
      title: "Liên hệ với chúng tôi",
      subtitle: "Hãy cho chúng tôi biết làm thế nào chúng tôi có thể giúp bạn.",
      namePlaceholder: "Họ và tên của bạn",
      nameLabel: "Họ và tên",
      emailPlaceholder: "Email của bạn",
      emailLabel: "Email",
      messagePlaceholder: "Lời nhắn của bạn",
      messageLabel: "Lời nhắn",
      submitButton: "Gửi tin nhắn",
      successMessage: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
      privacyNotice: "Thông tin của bạn sẽ chỉ được sử dụng để trả lời câu hỏi của bạn và sẽ không được chia sẻ với bên thứ ba.",
    },
    en: {
      title: "Contact Us",
      subtitle: "Let us know how we can help you.",
      namePlaceholder: "Your name",
      nameLabel: "Name",
      emailPlaceholder: "Your email",
      emailLabel: "Email",
      messagePlaceholder: "Your message",
      messageLabel: "Message",
      submitButton: "Send Message",
      successMessage: "Thank you for contacting us! We will respond as soon as possible.",
      privacyNotice: "Your information will only be used to respond to your inquiry and will not be shared with third parties.",
    },
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(_data: FormData) {
    setIsSubmitting(true);
    
    // Here you would typically send data to an API endpoint
    // For demo purposes, we're just simulating a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
    }, 1500);
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {content[language].title}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {content[language].subtitle}
            </p>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center text-center space-y-4 py-12">
                  <div className="rounded-full bg-primary/10 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-6 w-6">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">{content[language].successMessage}</h3>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content[language].nameLabel}</FormLabel>
                          <FormControl>
                            <Input placeholder={content[language].namePlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content[language].emailLabel}</FormLabel>
                          <FormControl>
                            <Input placeholder={content[language].emailPlaceholder} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{content[language].messageLabel}</FormLabel>
                          <FormControl>
                            <textarea
                              className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder={content[language].messagePlaceholder}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {language === "vi" ? "Đang gửi..." : "Sending..."}
                          </>
                        ) : (
                          content[language].submitButton
                        )}
                      </Button>
                      <FormDescription className="text-center mt-4 text-xs">
                        {content[language].privacyNotice}
                      </FormDescription>
                    </div>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 