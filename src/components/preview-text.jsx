"use client";
import { useStore } from "@/hooks/use-store";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { IconBulbFilled } from "./icons/bulb-filled-svg";
import { IconBulbOff } from "./icons/bulb-off-svg";

export default function PreviewText() {
  const bg = useStore((state) => state.bg);
  const fr = useStore((state) => state.fr);
  const via = useStore((state) => state.via);
  const to = useStore((state) => state.to);
  const frPercent = useStore((state) => state.frPercent);
  const viaPercent = useStore((state) => state.viaPercent);
  const toPercent = useStore((state) => state.toPercent);
  const theme = useTheme((state) => state.theme);
  const setTheme = useTheme((state) => state.setTheme);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Skeleton className="relative flex items-center p-8 rounded-xl bg-neutral-600 min-h-40"></Skeleton>
    );
  }
  return (
    <div
      className={cn(
        "relative flex items-center p-8  rounded-xl",
        theme === "dark"
          ? "bg-neutral-800 text-white"
          : "bg-white text-neutral-800"
      )}
    >
      <div className="absolute inset-x-0 top-0 flex items-center justify-end p-2">
        <Button
          onClick={toggleTheme}
          className={cn(
            theme === "dark" && "bg-white text-neutral-800 hover:bg-neutral-200"
          )}
          arial-label="change color theme"
        >
          {theme === "dark" ? (
            <IconBulbFilled className="size-5" />
          ) : (
            <IconBulbOff className="size-5" />
          )}
        </Button>
      </div>
      <p
        className="min-w-full px-2 py-4 text-2xl font-bold text-center text-transparent rounded bg-clip-text"
        style={{
          backgroundImage: `${bg.bg} ${fr.hex} ${frPercent.css}, ${via.hex} ${viaPercent.css}, ${to.hex} ${toPercent.css})`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        nobis eveniet minus aspernatur mollitia corporis doloribus consequuntur.
      </p>
    </div>
  );
}
