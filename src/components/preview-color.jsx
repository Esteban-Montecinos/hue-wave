'use client'
import { useStore } from "@/hooks/useStore";
import { cn } from "@/lib/utils";

export default function PreviewColor() {
  const bg = useStore((state) => state.bg);
  const from = useStore((state) => state.from);
  const via = useStore((state) => state.via);
  const to = useStore((state) => state.to);
  console.log(bg, from, via, to);
  return (
    <div
      className={cn(
        "h-[300px] rounded-3xl lg:h-full lg:min-h-[400px]",
        bg,
        from,
        via,
        to
      )}
    ></div>
  );
}
