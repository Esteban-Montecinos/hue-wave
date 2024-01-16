"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ActiveLink({ href, name }) {
  const pathname = usePathname();
  let rute;
  if (pathname.slice("/")[1]) {
    rute = "/generador";
  } else {
    rute = "/";
  }
  const isActive = rute === href;

  return (
    <Link
      href={href}
      className={cn(
        isActive
          ? "bg-neutral-700 text-white font-medium"
          : "hover:bg-neutral-700 hover:text-white bg-neutral-800",
        "px-3 py-2 rounded transition-colors text-neutral-100"
      )}
    >
      {name}
    </Link>
  );
}
