import "./globals.css";
import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grocery Admin",
  description: "Groceries Management Admin Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50" suppressHydrationWarning>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-6 bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
