"use client";

import { Slider } from "./ui/slider";
import { useStore } from "@/hooks/use-store";

export default function SliderPercent() {
  const frPercent = useStore((state) => state.frPercent);
  const viaPercent = useStore((state) => state.viaPercent);
  const toPercent = useStore((state) => state.toPercent);
  const setFromPercent = useStore((state) => state.setFromPercent);
  const setViaPercent = useStore((state) => state.setViaPercent);
  const setToPercent = useStore((state) => state.setToPercent);

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
    <>
      <label className="flex flex-col justify-center gap-4">
        <span>From %</span>
        <Slider
          defaultValue={[frPercent.css.split("%")[0]]}
          max={100}
          step={1}
          onValueChange={([value]) => {
            handleChangeFromPercent(value);
          }}
        />
      </label>
      <label className="flex flex-col justify-center gap-4">
        <span>Via %</span>
        <Slider
          defaultValue={[viaPercent.css.split("%")[0]]}
          max={100}
          step={1}
          onValueChange={([value]) => {
            handleChangeViaPercent(value);
          }}
        />
      </label>
      <label className="flex flex-col justify-center gap-4">
        <span>To %</span>
        <Slider
          defaultValue={[toPercent.css.split("%")[0]]}
          max={100}
          step={1}
          onValueChange={([value]) => {
            handleChangeToPercent(value);
          }}
        />
      </label>
    </>
  );
}
