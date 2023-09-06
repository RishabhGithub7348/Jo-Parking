import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { MultisessionAppSupport } from "@clerk/nextjs";
import {UserContextProvider} from '@/context/userContext'

import ToasterContext from "@/app/context/ToastContext";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JoParking",
  description: "Park with ease",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary:
            "hsl(252.82051282051282, 82.9787234042553%, 72.35294117647058%)",
        },
      }}
    >
        <html lang="en" suppressHydrationWarning>
          <body className={font.className}>
           <UserContextProvider>
           <ToasterContext />
            {children}
           </UserContextProvider>
          </body>
        </html>
    </ClerkProvider>
  );
}