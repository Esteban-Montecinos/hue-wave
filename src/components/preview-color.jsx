"use client";
import { useStore } from "@/hooks/use-store";
import { useCallback, useEffect, useRef, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import CopyTW from "./copy-tw";
import CopyCSS from "./copy-css";
import DownloadImage from "./download-image";
import ShareGradient from "./share-gradient";
import SliderPercent from "./slider-percent";
import { toast } from "sonner";
import { toJpeg } from "html-to-image";

export default function PreviewColor(props) {
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
  const previewRef = useRef();
  const handleClick = useCallback(() => {
    if (previewRef.current === null) {
      return;
    }

    toJpeg(previewRef.current, { cacheBust: true, pixelRatio: 1, quality: 1 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "gradiente.jpeg";
        link.href = dataUrl;
        link.click();
        toast.success("La imagen ha sido descargada.");
      })
      .catch(() => {
        toast.error("Error al descargar la imagen");
      });
  }, [previewRef]);
  if (!mounted) {
    return (
      <Skeleton className="h-[300px] rounded-xl lg:h-full lg:min-h-[400px] bg-neutral-600"></Skeleton>
    );
  }

  return (
    <>
      <section className="grid col-span-1 gap-8 lg:col-span-2">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="grid grid-cols-2 gap-4">
            <CopyTW />
            <CopyCSS />
            <DownloadImage handleClick={handleClick} />
            <ShareGradient />
          </div>
          <SliderPercent />
        </div>
      </section>
      <div
        className={"h-[300px] rounded-xl lg:h-full lg:min-h-[400px]"}
        style={{
          backgroundImage: `${bg.bg} ${fr.hex} ${frPercent.css}, ${via.hex} ${viaPercent.css}, ${to.hex} ${toPercent.css})`,
        }}
      ></div>
      <div className="sr-only">
        <div
          ref={previewRef}
          style={{
            backgroundImage: `${bg.bg} ${fr.hex} ${frPercent.css}, ${via.hex} ${viaPercent.css}, ${to.hex} ${toPercent.css})`,
            width: "1920px",
            height: "1080px",
          }}
        ></div>
      </div>
    </>
  );
}
