"use client";

import { Button } from "./ui/button";
import { useStore } from "@/hooks/use-store";
import { toast } from "sonner";
import { encodeURI } from "js-base64";
import { IconPhotoDown } from "./icons/photo-down-svg";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";

export default function DownloadImage({ encode }) {
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
      textEncode = encodeURI(`${bg.bg}+${bg.tw}+${fr.hex}+${fr.tw}+${via.hex}+${via.tw}+${to.hex}+${to.tw}+${frPercent.css}+${frPercent.tw}+${viaPercent.css}+${viaPercent.tw}+${toPercent.css}+${toPercent.tw}`);
    }
    const image = await fetch(
      `${location.origin}/${textEncode}/opengraph-image`
    ).then((res) => res.blob());
    await navigator.clipboard.write([
      new ClipboardItem({ [image.type]: image }),
    ]);
  }
  return (
    <Button
      className="p-2 transition-all bg-white hover:scale-105 group text-neutral-800 hover:bg-neutral-200"
      arial-label="Descargar imagen"
      title="Descargar imagen"
      onClick={() => {
        toast.promise(handleClick, {
          loading: "Cargando...",
          success: "La imagen ha sido copiada.",
          error: "Error",
        });
      }}
    >
      <IconPhotoDown className="size-10 group-hover:text-pink-600"/>
    </Button>
  );
}
