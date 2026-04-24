import { ThemeProvider } from "next-themes";

import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),
  title: {
    default: "Alec Ortega Cisneros | Software Developer",
    template: "%s | Alec Ortega Cisneros",
  },
  description:
    "Software developer portfolio with project case studies. and contact details.",
  openGraph: {
    title: "Alec Ortega Cisneros | Software Developer",
    description: "Portfolio and engineering case studies.",
    url: "https://your-domain.vercel.app",
    siteName: "Your Name Portfolio",
    images: ["/images/og-default.png"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
