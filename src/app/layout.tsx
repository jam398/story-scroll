import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "League Of Legends Scrollytelling",
  description: "A static scrollytelling site about the history of League of Legends.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}