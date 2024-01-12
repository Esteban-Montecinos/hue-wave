"use client";
import { bgGradients } from "@/constants/bg-gradients";
import { colors } from "@/constants/colors";
import { useStore } from "@/hooks/use-store";
import { Slider } from "@/components/ui/slider";
import CopyTW from "./copy-tw";
import CopyCSS from "./copy-css";
import ShareGradient from "./share-gradient";
import DownloadImage from "./download-image";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function CustomSelector() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const setBg = useStore((state) => state.setBg);
  const setFrom = useStore((state) => state.setFrom);
  const setVia = useStore((state) => state.setVia);
  const setTo = useStore((state) => state.setTo);
  const bg = useStore((state) => state.bg);
  const fr = useStore((state) => state.fr);
  const via = useStore((state) => state.via);
  const to = useStore((state) => state.to);
  const frPercent = useStore((state) => state.frPercent);
  const viaPercent = useStore((state) => state.viaPercent);
  const toPercent = useStore((state) => state.toPercent);
  const setFromPercent = useStore((state) => state.setFromPercent);
  const setViaPercent = useStore((state) => state.setViaPercent);
  const setToPercent = useStore((state) => state.setToPercent);
  if (!mounted) {
    return (
      <div className="grid col-span-1 gap-8 lg:col-span-2">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Skeleton className="p-5 rounded-xl bg-neutral-600" />
          <Skeleton className="p-5 rounded-xl bg-neutral-600" />
          <Skeleton className="p-5 rounded-xl bg-neutral-600" />
          <Skeleton className="p-5 rounded-xl bg-neutral-600" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="p-5 rounded-xl bg-neutral-600" />
            <Skeleton className="p-5 rounded-xl bg-neutral-600" />
            <Skeleton className="p-5 rounded-xl bg-neutral-600" />
            <Skeleton className="p-5 rounded-xl bg-neutral-600" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Skeleton className="w-16 h-4 p-2 rounded-xl bg-neutral-600" />
            <div className="py-2">
              <Skeleton className="h-2 rounded-xl bg-neutral-600" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Skeleton className="w-16 h-4 p-2 rounded-xl bg-neutral-600" />
            <div className="py-2">
              <Skeleton className="h-2 rounded-xl bg-neutral-600" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Skeleton className="w-16 h-4 p-2 rounded-xl bg-neutral-600" />
            <div className="py-2">
              <Skeleton className="h-2 rounded-xl bg-neutral-600" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  const handleChangeBg = (e) => {
    const [bg, tw] = e.split("+");

    setBg({ bg, tw });
  };
  const handleChangeFrom = (e) => {
    const [hex, tw] = e.split("+");
    setFrom({ hex, tw });
  };
  const handleChangeVia = (e) => {
    const [hex, tw] = e.split("+");
    setVia({ hex, tw });
  };
  const handleChangeTo = (e) => {
    const [hex, tw] = e.split("+");
    setTo({ hex, tw });
  };
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
    <section className="grid col-span-1 gap-8 lg:col-span-2">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Select
          defaultValue={bg.bg + "+" + bg.tw}
          onValueChange={(e) => handleChangeBg(e)}
        >
          <SelectTrigger className="text-neutral-800">
            <SelectValue placeholder="Select Gradient" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Gradients</SelectLabel>
              {bgGradients.map(({ value, label }) => (
                <SelectItem key={value.tw} value={value.bg + "+" + value.tw}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          className="flex h-10 w-full items-center justify-between rounded-md transition-all border border-input bg-background px-3 py-2 text-lg sm:max-md:text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black"
          defaultValue={fr.hex + "+" + fr.tw}
          onValueChange={(e) => handleChangeFrom(e)}
        >
          <SelectTrigger className="text-neutral-800">
            <SelectValue placeholder="Select From" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>From</SelectLabel>
              {colors.map(({ tw, hex }) => (
                <SelectItem
                  key={`from-${tw}`}
                  value={hex + `+from-${tw}`}
                  className="hover:bg-neutral-800 selected:bg-neutral-800"
                >{`from-${tw}`}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          className="flex h-10 w-full items-center justify-between rounded-md transition-all border border-input bg-background px-3 py-2 text-lg sm:max-md:text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black"
          defaultValue={via.hex + "+" + via.tw}
          onValueChange={(e) => handleChangeVia(e)}
        >
          <SelectTrigger className="text-neutral-800">
            <SelectValue placeholder="Select Via" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Via</SelectLabel>
              {colors.map(({ tw, hex }) => (
                <SelectItem
                  key={`via-${tw}`}
                  value={hex + `+via-${tw}`}
                >{`via-${tw}`}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          className="flex h-10 w-full items-center justify-between rounded-md transition-all border border-input bg-background px-3 py-2 text-lg sm:max-md:text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black"
          defaultValue={to.hex + "+" + to.tw}
          onChange={(e) => handleChangeTo(e)}
        >
          <SelectTrigger className="text-neutral-800">
            <SelectValue placeholder="Select Via" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Via</SelectLabel>
              {colors.map(({ tw, hex }) => (
                <SelectItem
                  key={`to-${tw}`}
                  value={hex + `+to-${tw}`}
                >{`to-${tw}`}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="grid grid-cols-2 gap-4">
          <CopyTW />
          <CopyCSS />
          <DownloadImage />
          <ShareGradient />
        </div>
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
      </div>
    </section>
  );
}
