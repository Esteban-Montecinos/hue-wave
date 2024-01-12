"use client";

import { Button } from "./ui/button";
import { useStore } from "@/hooks/use-store";
import { toast } from "sonner";
import { encodeURI } from "js-base64";
import { IconPhotoDown } from "./icons/photo-down-svg";

export default function DownloadImage({ encode }) {
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
      className="px-2 py-1 bg-white text-neutral-800 hover:bg-neutral-200"
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
      <IconPhotoDown />
    </Button>
  );
}
