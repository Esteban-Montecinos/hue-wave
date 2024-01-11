"use client";
import { bgGradients } from "@/constants/bg-gradients";
import { colors } from "@/constants/colors";
import { useStore } from "@/hooks/useStore";

export default function CustomSelector() {
  const setBg = useStore((state) => state.setBg);
  const setFrom = useStore((state) => state.setFrom);
  const setVia = useStore((state) => state.setVia);
  const setTo = useStore((state) => state.setTo);

  return (
    <section className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <select
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black"
          onChange={(event) => setBg(event.target.value)}
        >
          {bgGradients.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <select
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black"
          onChange={(event) => setFrom(event.target.value)}
        >
          {colors.map((color) => (
            <option
              key={`from-${color}`}
              value={`from-${color}`}
            >{`from-${color}`}</option>
          ))}
        </select>
        <select
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black"
          onChange={(event) => setVia(event.target.value)}
        >
          {colors.map((color) => (
            <option
              key={`via-${color}`}
              value={`via-${color}`}
            >{`via-${color}`}</option>
          ))}
        </select>
        <select
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black"
          onChange={(event) => setTo(event.target.value)}
        >
          {colors.map((color) => (
            <option
              key={`to-${color}`}
              value={`to-${color}`}
            >{`to-${color}`}</option>
          ))}
        </select>
      </div>
    </section>
  );
}
