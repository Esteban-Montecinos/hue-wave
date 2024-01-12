"use client";
import CustomSelector from "@/components/custom-selector";
import PreviewColor from "@/components/preview-color";
import PreviewText from "@/components/preview-text";
import { Toaster } from "sonner";
import { decode } from "js-base64";
import { useStore } from "@/hooks/use-store";

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
  return (
    <main className="grid w-full grid-cols-1 gap-8 px-4 mt-10 lg:grid-cols-2">
      <CustomSelector />
      <PreviewColor />
      <PreviewText />
      <Toaster expand={true} />
    </main>
  );
}
