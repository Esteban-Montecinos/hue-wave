"use client";

import { Button } from "./ui/button";
import { IconBrandTailwind } from "./icons/brand-tailwind-svg";
import { useStore } from "@/hooks/use-store";
import { toast } from "sonner";

export default function CopyTW({gradient}) {
  const bg = useStore((state) => state.bg);
  const fr = useStore((state) => state.fr);
  const via = useStore((state) => state.via);
  const to = useStore((state) => state.to);
  const frPercent = useStore((state) => state.frPercent);
  const viaPercent = useStore((state) => state.viaPercent);
  const toPercent = useStore((state) => state.toPercent);

  async function handleClick() {
    let copyText
    if (gradient) {
      copyText = gradient
    }else{
      copyText =`${bg.tw} ${fr.tw} ${frPercent.tw} ${via.tw} ${viaPercent.tw} ${to.tw} ${toPercent.tw}`
    }
    await navigator.clipboard.writeText(
      copyText
    );
  }
  return (
    <Button
      className="px-2 py-1 bg-white text-neutral-800 hover:bg-neutral-200"
      arial-label="Copiar clase de Tailwind"
      title="Copiar clase de Tailwind"
      onClick={() => {
        toast.promise(handleClick, {
          loading: "Cargando...",
          success: "Las Clases de Tailwind han sido copiadas",
          error: "Error",
        });
      }}
    >
      <IconBrandTailwind />
    </Button>
  );
}