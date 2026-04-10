import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakib Hasan — Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN Stack & Python Flask. Currently pursuing BScSE at United International University, Dhaka.",
  keywords: ["Rakib Hasan", "Full Stack Developer", "MERN Stack", "React", "Node.js", "Python", "Flask", "UIU"],
  authors: [{ name: "Rakib Hasan" }],
  openGraph: {
    title: "Rakib Hasan — Full Stack Developer",
    description: "Building scalable web experiences with MERN Stack & Python.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
