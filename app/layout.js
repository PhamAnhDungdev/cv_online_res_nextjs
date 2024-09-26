
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Curriculum Vitae",
  description: "CV - Pham Anh Dung dev",
  icons: {
    icon: '/icons/logo.svg',
    shortcut: '/icons/logo.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-16 max-md:pb-14 sm:px-14">
          <div className="w-full">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
