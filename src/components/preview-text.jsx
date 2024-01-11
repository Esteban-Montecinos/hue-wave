'use client'
import { useStore } from "@/hooks/useStore";
import { cn } from "@/lib/utils";

export default function PreviewText() {
  const bg = useStore((state) => state.bg);
  const from = useStore((state) => state.from);
  const via = useStore((state) => state.via);
  const to = useStore((state) => state.to);
  return (
    <div className="relative flex items-center p-8 bg-black rounded-xl">
      <div className="absolute inset-x-0 top-0 flex items-center justify-end p-4">
        <button className="ml-2 rounded-xl bg-gray-800 p-2.5 text-white">
          I
        </button>
      </div>
      <p
        className={cn(
          "min-w-full p-2 text-2xl font-bold text-center text-transparent rounded bg-clip-text",
          bg,
          from,
          via,
          to
        )}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        nobis eveniet minus aspernatur mollitia corporis doloribus consequuntur.
      </p>
    </div>
  );
}
