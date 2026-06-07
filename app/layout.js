import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.faizali.dev'), // Update this with your actual production domain
  title: "Faiz Ali | Fullstack Developer",
  description: "Premium Portfolio of Faiz Ali, Frontend Web & Mobile Developer specializing in React, Next.js, and modern UI/UX design.",
  keywords: ["Faiz Ali", "Fullstack Developer", "Frontend Developer", "Mobile Developer", "React", "Next.js", "React Native", "Tailwind CSS", "UI/UX Design", "Web Development", "App Development"],
  authors: [{ name: "Faiz Ali" }],
  openGraph: {
    title: "Faiz Ali | Fullstack Developer",
    description: "Premium Portfolio of Faiz Ali, Frontend Web & Mobile Developer.",
    url: 'https://www.faizali.dev',
    siteName: 'Faiz Ali Portfolio',
    images: [
      {
        url: '/profile.png', // Uses public/profile.png
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Faiz Ali | Fullstack Developer",
    description: "Premium Portfolio of Faiz Ali, Frontend Web & Mobile Developer.",
    images: ['/profile.png'],
  },
  icons: {
    icon: '/xcelermedia-logo.png', // Uses public/xcelermedia-logo.png
    shortcut: '/xcelermedia-logo.png',
    apple: '/xcelermedia-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark scroll-smooth`}>
      <body className="min-h-full bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
