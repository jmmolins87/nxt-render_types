import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rendering Modes",
  description: "Meet the rendering modes of Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
