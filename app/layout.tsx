import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://next-store.adityawiguna.com/"),
  title: {
    template: "%s | Next Store Aditya Wiguna",
    default: "Next Store",
  },
  description:
    "Example front end store design using Next.js and Shadcn UI",
  keywords:
    "Next JS store,react store",
  alternates: {
    canonical: "/",
  },
  category: "Shopping",
  openGraph: {
    title: "Next Store Aditya Wiguna",
  }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-svh bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          // disableTransitionOnChange
        >
          <main className="mx-auto min-h-svh max-w-7xl">
            <Header />
            {children}
            <Footer />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
