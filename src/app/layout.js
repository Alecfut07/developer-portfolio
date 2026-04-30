import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator";
import { AnimationProvider } from "@/contexts/animation-context";
import { getMetaInfo } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });
const metaInfo = getMetaInfo();

export const metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Alec Ortega Cisneros | Software Developer",
    template: "%s | Alec Ortega Cisneros",
  },
  description:
    "Software Developer portfolio with project case studies and contact details.",
  openGraph: {
    title: "Alec Ortega Cisneros | Software Developer",
    description:
      "Software Developer portfolio with project case studies and contact details.",
    url: "https://your-domain.com",
    siteName: "Alec Ortega Cisneros Portfolio",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Alec Ortega Cisneros Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AnimationProvider>
            <ScrollProgressIndicator />
            {children}
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
