import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator";
import { AnimationProvider } from "@/contexts/animation-context";
import { getMetaInfo } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });
const metaInfo = getMetaInfo();

export const metadata = {
  title: metaInfo.title,
  description: metaInfo.description,
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
