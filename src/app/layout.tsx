import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Script from "next/script";

// Configure Roboto font with all weights
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-sans', // Use the --font-sans variable that tailwind expects
});

export const metadata: Metadata = {
  title: "Dan AI - AI Agent Builder Platform",
  description: "Build powerful AI agents with Dan AI - An intuitive and modern AI Agent Builder Platform",
  keywords: "AI, artificial intelligence, agent builder, AI platform, Dan AI",
  creator: "Dan AI",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://thedan.biz",
    title: "Dan AI - AI Agent Builder Platform",
    description: "Build powerful AI agents with Dan AI - An intuitive and modern AI Agent Builder Platform",
    siteName: "Dan AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan AI - AI Agent Builder Platform",
    description: "Build powerful AI agents with Dan AI - An intuitive and modern AI Agent Builder Platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={roboto.variable}>
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dan AI",
              "url": "https://dan.ai",
              "logo": "https://dan.ai/logo.png",
              "description": "Build powerful AI agents with Dan AI - An intuitive and modern AI Agent Builder Platform",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Vietnam"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service",
                "email": "info@dan.ai"
              },
              "sameAs": [
                "https://facebook.com/danai",
                "https://twitter.com/danai",
                "https://linkedin.com/company/danai"
              ]
            }
          `}
        </Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
