import { Work_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

const workSans = Work_Sans({ subsets: ["latin"],weight:['400', '500','700', '800'] });

export const metadata = {
  title: "Hue Wave | Gradient generator for Tailwind CSS",
  description: "Copy, Create and Share Gradient for Tailwind CSS and CSS",
  metadataBase: new URL('https://buscador-perfil-github.vercel.app/'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("bg-neutral-900 text-neutral-50", workSans.className)}>
      <nav className="flex flex-row justify-center max-w-lg m-auto my-4 text-center">
        <ul className="flex flex-row gap-8">
        <Link href="/" className="p-2 rounded hover:bg-neutral-700">Gradients</Link>
        <Link href="/generator" className="p-2 rounded hover:bg-neutral-700">Generator</Link>
        </ul>
      </nav>
        <section className="flex flex-col min-h-screen p-2">
          <header className="flex flex-col w-full pb-4 text-center md:pb-8 lg:pb-10">
            <h1 className="text-4xl font-extrabold tracking-tighter text-transparent uppercase sm:text-5xl lg:text-7xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text">
              Hue Wave
            </h1>
            <h2 className="mt-1 text-base font-medium tracking-wide text-transparent text-balance bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text sm:text-lg lg:text-xl">
            Copy, Create and Share Gradient for Tailwind CSS
            </h2>
          </header>
          {children}
        </section>
      </body>
    </html>
  );
}
