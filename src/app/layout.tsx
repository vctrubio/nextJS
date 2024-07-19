import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { LeftNavBar } from "@/components/LeftNavBar";
const roboto = Roboto({ weight: '400', subsets: ["latin"] });

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
          <main className="flex-grow">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
