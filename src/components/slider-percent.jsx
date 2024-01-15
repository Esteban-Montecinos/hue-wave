"use client";

import { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import { useStore } from "@/hooks/use-store";
import { Skeleton } from "./ui/skeleton";

export default function SliderPercent() {
  const frPercent = useStore((state) => state.frPercent);
  const viaPercent = useStore((state) => state.viaPercent);
  const toPercent = useStore((state) => state.toPercent);
  const setFromPercent = useStore((state) => state.setFromPercent);
  const setViaPercent = useStore((state) => state.setViaPercent);
  const setToPercent = useStore((state) => state.setToPercent);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-1 col-span-3 gap-2 md:gap-4 sm:grid-cols-3">
        <div className="flex flex-col justify-center gap-2 md:gap-4">
          <Skeleton className="w-16 h-2 p-2 md:h-4 rounded-xl bg-neutral-600" />
          <Skeleton className="h-2 rounded-xl bg-neutral-600" />
        </div>
        <div className="flex flex-col justify-center gap-2 md:gap-4">
          <Skeleton className="w-16 h-2 p-2 md:h-4 rounded-xl bg-neutral-600" />
          <Skeleton className="h-2 rounded-xl bg-neutral-600" />
        </div>
        <div className="flex flex-col justify-center gap-2 md:gap-4">
          <Skeleton className="w-16 h-2 p-2 md:h-4 rounded-xl bg-neutral-600" />
          <Skeleton className="h-2 rounded-xl bg-neutral-600" />
        </div>
      </div>
    );
  }

  const handleChangeFromPercent = (percent) => {
    const css = `${percent}%`;
    const tw = `from-${percent}%`;
    setFromPercent({ css, tw });
  };
  const handleChangeViaPercent = (percent) => {
    const css = `${percent}%`;
    const tw = `via-${percent}%`;
    setViaPercent({ css, tw });
  };
  const handleChangeToPercent = (percent) => {
    const css = `${percent}%`;
    const tw = `to-${percent}%`;
    setToPercent({ css, tw });
  };
  return (
    <div className="grid grid-cols-1 col-span-3 gap-2 md:gap-4 sm:grid-cols-3">
      <label className="flex flex-col justify-center gap-2 md:gap-4">
        <span className="text-xs md:text-sm">{frPercent.tw}</span>
        <Slider
          defaultValue={[frPercent.css.split("%")[0]]}
          max={100}
          step={1}
          onValueChange={([value]) => {
            handleChangeFromPercent(value);
          }}
        />
      </label>
      <label className="flex flex-col justify-center gap-2 md:gap-4">
        <span className="text-xs md:text-sm">{viaPercent.tw}</span>
        <Slider
          defaultValue={[viaPercent.css.split("%")[0]]}
          max={100}
          step={1}
          onValueChange={([value]) => {
            handleChangeViaPercent(value);
          }}
        />
      </label>
      <label className="flex flex-col justify-center gap-2 md:gap-4">
        <span className="text-xs md:text-sm">{toPercent.tw}</span>
        <Slider
          defaultValue={[toPercent.css.split("%")[0]]}
          max={100}
          step={1}
          onValueChange={([value]) => {
            handleChangeToPercent(value);
          }}
        />
      </label>
    </div>
  );
}
