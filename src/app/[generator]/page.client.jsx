"use client";

import PreviewColor from "@/components/preview-color";
import PreviewText from "@/components/preview-text";
import { Toaster, toast } from "sonner";
import { decode } from "js-base64";
import { useStore } from "@/hooks/use-store";
import SelectClass from "@/components/select-class";
import SliderPercent from "@/components/slider-percent";
import { useCallback, useRef } from "react";
import { toJpeg } from "html-to-image";
import ButtonsGroup from "@/components/buttons-group";

export default function GeneratorClientPage({ generator }) {
  const setBg = useStore((state) => state.setBg);
  const setFrom = useStore((state) => state.setFrom);
  const setVia = useStore((state) => state.setVia);
  const setTo = useStore((state) => state.setTo);
  const setFromPercent = useStore((state) => state.setFromPercent);
  const setViaPercent = useStore((state) => state.setViaPercent);
  const setToPercent = useStore((state) => state.setToPercent);

  if (generator) {
    const response = decode(generator);
    const [
      bg,
      bgTw,
      fr,
      frTw,
      via,
      viaTw,
      to,
      toTw,
      frPercent,
      frPercentTw,
      viaPercent,
      viaPercentTw,
      toPercent,
      toPercentTw,
    ] = response.split("+");
    if (
      bg !== undefined &&
      fr !== undefined &&
      via !== undefined &&
      to !== undefined &&
      frPercent !== undefined &&
      viaPercent !== undefined &&
      toPercent !== undefined &&
      bgTw !== undefined &&
      frTw !== undefined &&
      viaTw !== undefined &&
      toTw !== undefined &&
      frPercentTw !== undefined &&
      viaPercentTw !== undefined &&
      toPercentTw !== undefined
    ) {
      setBg({ bg: bg, tw: bgTw });
      setFrom({ hex: fr, tw: frTw });
      setVia({ hex: via, tw: viaTw });
      setTo({ hex: to, tw: toTw });
      setFromPercent({ css: frPercent, tw: frPercentTw });
      setViaPercent({ css: viaPercent, tw: viaPercentTw });
      setToPercent({ css: toPercent, tw: toPercentTw });
    }
  }

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

  return (
    <main className="grid w-full max-w-screen-xl grid-cols-3 gap-4 px-4 mx-auto mt-4 md:mt-8 md:gap-8">
      <div className="grid w-full grid-cols-1 col-span-3 gap-4 lg:grid-cols-2 md:gap-8">
        <PreviewColor previewRef={previewRef} />
        <PreviewText />
      </div>
      <SliderPercent />
      <ButtonsGroup handleClick={handleClick}/>
      <SelectClass />
      <Toaster expand={true} />
    </main>
  );
}
