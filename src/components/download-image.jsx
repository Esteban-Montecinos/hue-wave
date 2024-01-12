"use client";

import { Button } from "./ui/button";
import { IconPhotoDown } from "./icons/photo-down-svg";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";

export default function DownloadImage({ handleClick}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  
  
    if (!mounted) {
      return <Skeleton className="p-5 rounded-xl bg-neutral-600" />;
    }
  return (
    <Button
      className="p-2 transition-all bg-white hover:scale-105 group text-neutral-800 hover:bg-neutral-200"
      arial-label="Descargar imagen"
      title="Descargar imagen"
      onClick={() => handleClick()}
    >
      <IconPhotoDown className="size-10 group-hover:text-pink-600" />
    </Button>
  );
}
