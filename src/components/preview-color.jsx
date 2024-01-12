"use client";
import { useStore } from "@/hooks/use-store";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function PreviewColor() {
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
      <Skeleton className="h-[300px] rounded-xl lg:h-full lg:min-h-[400px] bg-neutral-600"></Skeleton>
    );
  }
  
  return (
    <div className={"h-[300px] rounded-xl lg:h-full lg:min-h-[400px]"} style={{backgroundImage: `${bg.bg} ${fr.hex} ${frPercent.css}, ${via.hex} ${viaPercent.css}, ${to.hex} ${toPercent.css})`}}></div>
  );
}
