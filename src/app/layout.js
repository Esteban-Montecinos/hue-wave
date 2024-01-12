import { Work_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata = {
  title: "Hue Wave | Generador de Gradientes para Tailwind CSS",
  description: "Crea, Copia y Comparte Gradientes para Tailwind CSS y CSS",
  metadataBase: new URL("https://huewave.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={cn("bg-neutral-900 text-neutral-50", workSans.className)}
      >
        <nav className="flex flex-row justify-center max-w-lg m-auto my-4 text-center">
          <ul className="flex flex-row gap-8">
            <li className="flex flex-row justify-center">
              <Link href="/" className="p-2 rounded hover:bg-neutral-700">
                Gradientes
              </Link>
            </li>
            <li className="flex flex-row justify-center">
              <Link
                href="/generador"
                className="p-2 rounded hover:bg-neutral-700"
              >
                Generador
              </Link>
            </li>
          </ul>
        </nav>
        <section className="flex flex-col min-h-[60vh] p-2">
          <header className="flex flex-col w-full pb-4 text-center md:pb-8 lg:pb-10">
            <h1 className="text-4xl font-extrabold tracking-tighter text-transparent uppercase sm:text-5xl lg:text-7xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text">
              Hue Wave
            </h1>
            <h2 className="mt-1 text-base font-medium tracking-wide text-transparent text-balance bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text sm:text-lg lg:text-xl">
              Crea, Copia y Comparte Gradientes para Tailwind CSS
            </h2>
          </header>
          {children}
        </section>
        <footer className="mt-10 mb-4">
          <p className="self-center text-sm text-center text-balance">
            Desarrollado con ❤ por{" "}
            <a
              href="https://github.com/Esteban-Montecinos"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Esteban Montecinos
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
