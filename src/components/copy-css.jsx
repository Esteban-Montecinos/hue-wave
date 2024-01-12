"use client";

import { Button } from "./ui/button";
import { IconFileTypeCss } from "./icons/file-type-css-svg";
import { useStore } from "@/hooks/use-store";
import { toast } from "sonner";

export default function CopyCSS({gradient}) {
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
      copyText =`${bg.bg} ${fr.hex} ${frPercent.css}, ${via.hex} ${viaPercent.css}, ${to.hex} ${toPercent.css})`
    }
    await navigator.clipboard.writeText(
      copyText
    );
  }
  return (
    <Button
      className="px-2 py-1 bg-white text-neutral-800 hover:bg-neutral-200"
      arial-label="Copy CSS Code"
      onClick={() => {
        toast.promise(handleClick, {
          loading: "Loading...",
          success: "CSS have been copied",
          error: "Error",
        });
      }}
    >
      <IconFileTypeCss />
    </Button>
  );
}
