import "./globals.css";

import localFont from "next/font/local";

import { AppNavbar } from "@/components/shared/Navbar";
import { AppSidebar } from "@/components/shared/Sidebar";
import { ThemeProvider } from "@/components/shared/Theme";
import { SidebarProvider } from "@/components/ui/sidebar";

import type { Metadata } from "next";
import { Toaster } from "sonner";

const outfitSans = localFont({
  src: "./fonts/O-VF.ttf",
  variable: "--font-outfit-sans",
  weight: "300 400 500 600 700",
});

const jetBrainsMono = localFont({
  src: "./fonts/JBM-VF.ttf",
  variable: "--font-jetbrains-mono",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Algoritzzm",
  description: "Revise and work on your interview prepration.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfitSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <AppNavbar />
              <div className="p-4"> {children}</div>
              <Toaster visibleToasts={3} theme="dark" className="" />
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
