"use client";

import { Button } from "./ui/button";
import { useStore } from "@/hooks/use-store";
import { toast } from "sonner";
import { IconShare } from "./icons/share-svg";
import { encodeURI } from "js-base64";

export default function ShareGradient({encode}) {
  const bg = useStore((state) => state.bg);
  const fr = useStore((state) => state.fr);
  const via = useStore((state) => state.via);
  const to = useStore((state) => state.to);
  const frPercent = useStore((state) => state.frPercent);
  const viaPercent = useStore((state) => state.viaPercent);
  const toPercent = useStore((state) => state.toPercent);

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
      className="px-2 py-1 bg-white text-neutral-800 hover:bg-neutral-200"
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
      <IconShare />
    </Button>
  );
}
