"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ActiveLink({ href, name }) {
  const pathname = usePathname();
    let rute
  if (pathname.slice("/")[1]) {
    rute = "/generador"
  }else{
    rute = "/"
  }
  const isActive = rute === href;
  

  return (
    <Link
      href={href}
      className={cn(isActive ? "bg-neutral-700": "hover:bg-neutral-700", "px-2 py-1 rounded transition-colors")}
    >
      {name}
    </Link>
  );
}