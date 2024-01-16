"use client";

import { Button } from "./ui/button";
import { toast } from "sonner";
import { IconShare } from "./icons/share-svg";

export default function ShareGradient({encode}) {

  async function handleClick() {
    await navigator.clipboard.writeText(`${location.origin}/${encode}`
    );
  }
  return (
    <Button
      className="p-2 transition-all bg-white group hover:scale-105 text-neutral-800 hover:bg-neutral-200"
      arial-label="Comparte tu gradiente"
      title="Comparte tu gradiente"
      onClick={() => {
        toast.promise(handleClick, {
          loading: "Cargando...",
          success: "La URL ha sido copiada",
          error: "Error",
        });
      }}
    >
      <IconShare className="size-6 md:size-10 group-hover:text-emerald-600"/>
    </Button>
  );
}
