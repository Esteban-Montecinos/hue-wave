"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconHeart } from "./icons/heart-svg";

export default function ActiveLink({ href, name, icon }) {
  const pathname = usePathname();
  let rute = pathname;
  if(pathname.slice("/")[1] !== "f" && pathname.slice("/")[1] !== undefined ){
    rute = "/generador";
  }
  const isActive = rute === href;

  return (
    <Link
      href={href}
      title={name}
      aria-label={name}
      className={cn(
        isActive
          ? "bg-neutral-700 text-white font-medium"
          : "hover:bg-neutral-700 hover:text-white bg-neutral-800",
          icon ? "py-2" : "py-3",
        "px-3 sm:py-2 sm:text-base rounded transition-colors text-neutral-100 inline-flex size-fit text-xs"
      )}
    >
      {!icon && name}
      {icon && <IconHeart className="size-6" /> }
    </Link>
  );
}
