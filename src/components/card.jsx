"use client";
import Link from "next/link";
import React, { useCallback, useRef } from "react";
import CopyTW from "./copy-tw";
import CopyCSS from "./copy-css";
import DownloadImage from "./download-image";
import ShareGradient from "./share-gradient";
import { toJpeg } from "html-to-image";
import { toast } from "sonner";
import FavoriteButton from "./favorite-button";

export default function Card({ title, gradientTw, gradientCSS, encode }) {
  const element = useRef();
  const handleClick = useCallback(() => {
    if (element.current === null) {
      return;
    }

    toJpeg(element.current, { cacheBust: true, pixelRatio: 1, quality: 1 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = title ? `${title}.jpeg` : "gradiente.jpeg";
        link.href = dataUrl;
        link.click();
        toast.success("La imagen ha sido descargada.");
      })
      .catch(() => {
        toast.error("Error al descargar la imagen");
      });
  }, [element, title]);
  const newGradient = {
    gradientTw,
    gradientCSS,
    encode,
  };

  return (
    <article className="relative flex flex-col transition-all group/img">
      <div className="absolute right-0 z-10 self-start p-2 transition-all opacity-100 lg:opacity-0 group-hover/img:opacity-100 group-hover/img:-translate-y-2">
        <FavoriteButton gradient={newGradient} />
      </div>
      <Link
        href={`/${encode}`}
        className="transition-all group-hover/img:-translate-y-2 "
      >
        <span className="sr-only">Gradiente generado con HUE WAVE</span>
        <div
          className="flex items-end w-full h-64 px-6 pb-2 border max-w-64 rounded-xl border-white/10"
          style={{
            backgroundImage: gradientCSS,
          }}
        >
          {title && (
            <p className="w-full font-black tracking-wide text-center uppercase border rounded-full bg-neutral-900/50 border-white/10">
              {title}
            </p>
          )}
        </div>
      </Link>
      <div className="w-full px-6 text-white max-w-64">
        <div className="grid grid-cols-2 min-[320px]:grid-cols-4 items-center w-full gap-2 mt-2">
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
