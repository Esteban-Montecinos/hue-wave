"use client";

import Card from "@/components/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useStore } from "@/hooks/use-store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

export default function FavoritesPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const favorites = useStore((state) => state.favorites);
  if (!mounted) {
    return (
      <main className="grid max-w-screen-xl grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <article className="flex flex-col">
          <Skeleton className="size-64 rounded-xl bg-neutral-600"></Skeleton>
          <div className="w-full px-6 text-white max-w-64">
            <div className="grid grid-cols-2 min-[320px]:grid-cols-4 items-center w-full gap-2 mt-2">
              <Skeleton className="p-5 rounded-xl bg-neutral-600" />
              <Skeleton className="p-5 rounded-xl bg-neutral-600" />
              <Skeleton className="p-5 rounded-xl bg-neutral-600" />
              <Skeleton className="p-5 rounded-xl bg-neutral-600" />
            </div>
          </div>
        </article>
        <article className="flex flex-col">
          <Skeleton className="size-64 rounded-xl bg-neutral-600"></Skeleton>
          <div className="w-full px-6 text-white max-w-64">
            <div className="grid grid-cols-2 min-[320px]:grid-cols-4 items-center w-full gap-2 mt-2">
              <Skeleton className="p-5 rounded-xl bg-neutral-600" />
              <Skeleton className="p-5 rounded-xl bg-neutral-600" />
              <Skeleton className="p-5 rounded-xl bg-neutral-600" />
              <Skeleton className="p-5 rounded-xl bg-neutral-600" />
            </div>
          </div>
        </article>
      </main>
    );
  }

  return favorites.length ? (
          <main
            
            className="grid max-w-screen-xl grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
        {favorites.map(({ gradientTw, gradientCSS, encode }) => (
            <Card
            key={encode}
              gradientTw={gradientTw}
              gradientCSS={gradientCSS}
              encode={encode}
            />
        ))}
          </main>
      ) : (
        <main className="flex flex-col items-center max-w-screen-xl gap-8 px-4 py-6 mx-auto mt-10 rounded bg-neutral-800 text-pretty">
          <h2>
            Aquí se guardan tus gradientes favoritos para poder verlos más tarde
          </h2>
          <Link
            href="/generador"
            className="inline-flex px-3 py-2 font-medium transition-colors rounded text-neutral-800 size-fit hover:bg-neutral-300 bg-neutral-200"
          >
            Crea tu gradiente
          </Link>
        </main>
      )}
      <Toaster expand={true} />
