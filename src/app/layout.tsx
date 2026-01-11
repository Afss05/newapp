import Providers from "@/redux/Providers";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
