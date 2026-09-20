import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhruvi Raval — AI/ML Student & Builder",
  description: "Portfolio of Dhruvi Raval, an AI/ML diploma student building practical software, data and AI projects.",
  keywords: ["Dhruvi Raval", "AI ML", "Python", "AIML", "Gandhinagar University", "portfolio"],
  authors: [{ name: "Dhruvi Raval" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
