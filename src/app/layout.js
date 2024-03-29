import { Work_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { IconBrandGithub } from "@/components/icons/brand-github-svg";
import ActiveLink from "@/components/active-link";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata = {
  title: "Hue Wave | Generador de Gradientes para Tailwind y CSS",
  description: "Crea, Copia y Comparte Gradientes para Tailwind y CSS",
  metadataBase: new URL("https://huewave.vercel.app/"),
  openGraph: {
    title: "Hue Wave | Generador de Gradientes para Tailwind y CSS",
    description: "Crea, Copia y Comparte Gradientes para Tailwind y CSS",
    url: "https://huewave.vercel.app/",
    siteName: "Hue Wave",
    images: [
      {
        url: "/huewave.webp",
        width: 648,
        height: 648,
        alt: "Hue Wave",
        type: "image/webp",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={cn("bg-neutral-900 text-neutral-100", workSans.className)}
      >
        <nav className="flex flex-row items-center justify-between max-w-screen-xl gap-2 px-4 m-auto mt-4 text-center">
          <ul className="flex flex-row items-center gap-2">
            <li className="flex flex-row justify-center">
              <ActiveLink href="/" name="Gradientes" />
            </li>
            <li className="flex flex-row justify-center">
              <ActiveLink href="/generador" name="Generador" />
            </li>
          </ul>
          <ul className="flex flex-row items-center gap-2">
            <li className="flex flex-row justify-center">
              <ActiveLink href="/favorites" name="Favoritos" icon />
            </li>
            <li className="flex flex-row justify-center">
              <a
                aria-label="Repositorio de GitHub de Hue Wave"
                title="Repositorio de GitHub de Hue Wave"
                href="https://github.com/Esteban-Montecinos/hue-wave"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-2 rounded group text-neutral-100 hover:bg-neutral-700 hover:text-white bg-neutral-800"
              >
                <IconBrandGithub className="size-6 origin-bottom   transition-all group-hover:animate-[wiggle_1s_ease-in-out_infinite]" />
              </a>
            </li>
          </ul>
        </nav>
        <section className="flex flex-col min-h-[calc(100vh-120px)] p-2">
          <header className="flex flex-col w-full pb-4 text-center md:pb-8 lg:pb-10">
            <h1 className="text-4xl font-extrabold tracking-tighter text-transparent uppercase sm:text-5xl lg:text-7xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text">
              Hue Wave
            </h1>
            <h2 className="mt-1 text-base font-medium tracking-wide text-transparent text-pretty bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text sm:text-lg lg:text-xl">
              Crea, Copia y Comparte Gradientes para Tailwind CSS
            </h2>
          </header>
          {children}
        </section>
        <footer className="my-4">
          <p className="self-center text-sm text-center text-pretty">
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
