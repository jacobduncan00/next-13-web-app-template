import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { bruno_ace_sc, inter } from "@/lib/fonts";
import { Header } from "@/components/header";
import { ContextProvider } from "@/components/context-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen flex flex-col bg-background",
          inter.className,
          bruno_ace_sc.variable
        )}
      >
        <ContextProvider>
          <Header />
          <div className="container py-2 h-fit md:py-18 grow">{children}</div>
        </ContextProvider>
      </body>
    </html>
  );
}
