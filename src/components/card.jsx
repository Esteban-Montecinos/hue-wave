"use client";
import Link from "next/link";
import React, { useCallback, useRef } from "react";
import CopyTW from "./copy-tw";
import CopyCSS from "./copy-css";
import DownloadImage from "./download-image";
import ShareGradient from "./share-gradient";
import { cn } from "@/lib/utils";
import { toJpeg } from "html-to-image";
import { toast } from "sonner";

export default function Card({ title, gradientTw, gradientCSS, encode }) {
  const element = useRef();
  const handleClick = useCallback(() => {
    if (element.current === null) {
      return;
    }

    toJpeg(element.current, { cacheBust: true, pixelRatio: 1, quality: 1 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${title}.jpeg`;
        link.href = dataUrl;
        link.click();
        toast.success("La imagen ha sido descargada.");
      })
      .catch(() => {
        toast.error("Error al descargar la imagen");
      });
  }, [element, title]);
  return (
    <article className="relative">
      <Link href={`/${encode}`}>
        <span className="sr-only">Gradiente generado con HUE WAVE</span>
        <div className={cn("size-64  rounded-xl", gradientTw)}></div>
      </Link>
      <div className="w-64 p-6 text-white -mt-14 ">
        <p className="w-full font-black tracking-wide text-center uppercase border rounded-full bg-neutral-900/50 border-white/10">
          {title}
        </p>
        <div className="grid grid-cols-2 min-[320px]:grid-cols-4 items-center w-full gap-2 mt-4">
          <div className="sr-only">
            <div
              ref={element}
              style={{
                backgroundImage: gradientCSS,
                width: "1920px",
                height: "1080px",
              }}
            ></div>
          </div>
          <CopyTW gradient={gradientTw} />
          <CopyCSS gradient={gradientCSS} />
          <DownloadImage handleClick={handleClick} />
          <ShareGradient encode={encode} />
        </div>
      </div>
    </article>
  );
}
