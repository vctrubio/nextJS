import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { LeftNavBar } from "@/components/LeftNavBar";
import { Toaster } from "react-hot-toast";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Homie",
  description: "Track your dispensery",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex">
          <LeftNavBar />
          <main className="flex-grow px-2 py-1">
            {children}
            <Toaster />
            </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
