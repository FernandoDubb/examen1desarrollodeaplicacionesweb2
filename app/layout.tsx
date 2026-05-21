import "./globals.css";
import { GastosProvider } from "@/context/GastosContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GastosProvider>
          {children}
        </GastosProvider>
      </body>
    </html>
  );
}