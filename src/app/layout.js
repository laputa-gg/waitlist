import "./globals.css";
import { Inter } from "next/font/google";
import { hamburger } from "@/assets/icons";
import { footerLogo } from "@/assets/images";
import { navLinks } from "@/constants";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Laputa Waitlist",
  description: "Build Cities in the Sky",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full py-8 z-10 sm:px-16 px-8">
          <nav className="flex justify-between items-center max-container">
            <a href="/">
              <Image
                src={footerLogo}
                alt="logo"
                className="md:w-[130px] md:h-[29px] w-[70px]"
              />
            </a>
            <ul className="max-md:hidden">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-montserrat text-lg bg-primary px-7 py-4 text-slate-900 border leading-none rounded-md shadow-3xl"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden max-md:block">
              <Image
                src={hamburger}
                alt="hamburger menu"
                width={25}
                height={25}
                className="whitespace-nowrap"
              />
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
