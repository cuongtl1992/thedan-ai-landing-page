"use client";

interface AboutProps {
  language: "vi" | "en";
}

export default function About({ language }: AboutProps) {
  const content = {
    vi: {
      title: "Về chúng tôi",
      subtitle: "Chúng tôi là ai và sứ mệnh của chúng tôi",
      description: `TheDan AI là một nền tảng xây dựng Agent AI tiên tiến được thiết kế để giúp các doanh nghiệp và cá nhân tận dụng sức mạnh của trí tuệ nhân tạo một cách dễ dàng và hiệu quả.
      
      Chúng tôi tin rằng công nghệ AI không nên chỉ dành cho các chuyên gia kỹ thuật. Đó là lý do tại sao chúng tôi đã xây dựng một nền tảng trực quan cho phép bất kỳ ai cũng có thể tạo ra các giải pháp AI mạnh mẽ mà không cần kiến thức lập trình.
      
      Sứ mệnh của chúng tôi là dân chủ hóa AI và giúp mọi người tự động hóa quy trình làm việc, nâng cao hiệu suất và mở khóa tiềm năng của họ thông qua công nghệ AI đổi mới.`,
    },
    en: {
      title: "About Us",
      subtitle: "Who we are and our mission",
      description: `TheDan AI is an advanced AI Agent Builder platform designed to help businesses and individuals harness the power of artificial intelligence easily and effectively.
      
      We believe that AI technology shouldn't be just for technical experts. That's why we've built an intuitive platform that enables anyone to create powerful AI solutions without requiring programming knowledge.
      
      Our mission is to democratize AI and help people automate workflows, boost productivity, and unlock their potential through innovative AI technology.`,
    },
  };

  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {content[language].title}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {content[language].subtitle}
          </p>
        </div>
        <div className="mx-auto max-w-[800px]">
          <div className="prose prose-zinc dark:prose-invert mx-auto">
            {content[language].description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg mb-4 text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 