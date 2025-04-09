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
  title: "TheDan AI - AI Agent Builder Platform",
  description: "Build powerful AI agents with TheDan AI - An intuitive and modern AI Agent Builder Platform",
  keywords: "AI, artificial intelligence, agent builder, AI platform, TheDan AI",
  creator: "TheDan AI",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://thedan.ai",
    title: "TheDan AI - AI Agent Builder Platform",
    description: "Build powerful AI agents with TheDan AI - An intuitive and modern AI Agent Builder Platform",
    siteName: "TheDan AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheDan AI - AI Agent Builder Platform",
    description: "Build powerful AI agents with TheDan AI - An intuitive and modern AI Agent Builder Platform",
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
              "name": "TheDan AI",
              "url": "https://thedan.ai",
              "logo": "https://thedan.ai/logo.png",
              "description": "Build powerful AI agents with TheDan AI - An intuitive and modern AI Agent Builder Platform",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Vietnam"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service",
                "email": "info@thedan.ai"
              },
              "sameAs": [
                "https://facebook.com/thedanai",
                "https://twitter.com/thedanai",
                "https://linkedin.com/company/thedanai"
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
