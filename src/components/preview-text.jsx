"use client";
import { useStore } from "@/hooks/use-store";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
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

  return (
    <div
      className={cn(
        "relative flex items-center rounded md:rounded-xl",
        theme === "dark"
          ? "bg-neutral-800 text-white"
          : "bg-white text-neutral-800"
      )}
    >
      <div className="absolute inset-x-0 top-0 flex items-center justify-end p-1 sm:p-2">
        <Button
          onClick={toggleTheme}
          className={cn(
            theme === "dark" &&
              "bg-white text-neutral-800 hover:bg-neutral-200",
            "p-2 size-fit sm:p-2"
          )}
          arial-label="Cambiar Color del tema"
          title="Cambiar Color del tema"
        >
          {theme === "dark" ? (
            <IconBulbFilled className="size-4 md:size-5" />
          ) : (
            <IconBulbOff className="size-4 md:size-5" />
          )}
        </Button>
      </div>
      <p
        className="min-w-full px-2 py-4 text-5xl font-extrabold text-center text-transparent rounded text-balance lg:text-6xl bg-clip-text"
        style={{
          backgroundImage: `${bg.bg} ${fr.hex} ${frPercent.css}, ${via.hex} ${viaPercent.css}, ${to.hex} ${toPercent.css})`,
        }}
      >
        HUE WAVE
      </p>
    </div>
  );
}
