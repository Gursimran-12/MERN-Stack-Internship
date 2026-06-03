import "./globals.css";
import Navbar from "@/components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        {/* Footer will go here later */}
      </body>
    </html>
  );
}