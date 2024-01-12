"use client";

import { Button } from "./ui/button";
import { useStore } from "@/hooks/use-store";
import { toast } from "sonner";
import { IconShare } from "./icons/share-svg";
import { encodeURI } from "js-base64";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";

export default function ShareGradient({encode}) {
  const bg = useStore((state) => state.bg);
  const fr = useStore((state) => state.fr);
  const via = useStore((state) => state.via);
  const to = useStore((state) => state.to);
  const frPercent = useStore((state) => state.frPercent);
  const viaPercent = useStore((state) => state.viaPercent);
  const toPercent = useStore((state) => state.toPercent);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Skeleton className="p-5 rounded-xl bg-neutral-600" />
    )
  }

  async function handleClick() {
    let textEncode;
    if (encode) {
      textEncode = encode;
    } else {
      textEncode = encodeURI(`${bg.bg}+${bg.tw}+${fr.hex}+${fr.tw}+${via.hex}+${via.tw}+${to.hex}+${to.tw}+${frPercent.css}+${frPercent.tw}+${viaPercent.css}+${viaPercent.tw}+${toPercent.css}+${toPercent.tw}`)
    }
    await navigator.clipboard.writeText(`${location.origin}/${textEncode}`
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
      <IconShare className="size-10 group-hover:text-emerald-600"/>
    </Button>
  );
}
