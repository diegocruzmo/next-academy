import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "./(routes)/(root)/components";
import { Footer, Navbar } from "@/components/Shared";

const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Academy Next App",
  description: "Fullstack Academy Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <SidebarProvider>
            <AppSidebar />
            <div className="w-full bg-slate-300 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
