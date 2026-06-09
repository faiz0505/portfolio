import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://faiz-ali-dev.vercel.app/'),
  title: "Faiz Ali | Fullstack Developer",
  description: "Premium Portfolio of Faiz Ali, Frontend Web & Mobile Developer specializing in React, Next.js, and modern UI/UX design.",
  keywords: ["Faiz Ali", "Fullstack Developer", "Frontend Developer", "Mobile Developer", "React", "Next.js", "React Native", "Tailwind CSS", "UI/UX Design", "Web Development", "App Development"],
  authors: [{ name: "Faiz Ali", url: "https://www.linkedin.com/in/faizali0505/" }],
  openGraph: {
    title: "Faiz Ali | Fullstack Developer",
    description: "Premium Portfolio of Faiz Ali, Frontend Web & Mobile Developer.",
    url: 'https://faiz-ali-dev.vercel.app/',
    siteName: 'Faiz Ali Portfolio',
    images: [
      {
        url: '/opengraph-image.png', // Uses public/opengraph-image.png
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Faiz Ali | Fullstack Developer",
    description: "Premium Portfolio of Faiz Ali, Frontend Web & Mobile Developer.",
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/xcelermedia-logo.png', // Uses public/xcelermedia-logo.png
    shortcut: '/xcelermedia-logo.png',
    apple: '/xcelermedia-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5DG62JZ8');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Faiz Ali",
              url: "https://faiz-ali-dev.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/faizali0505/",
                "https://www.instagram.com/faaiz_ali_03",
                "https://github.com/faiz0505"
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 ">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DG62JZ8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
