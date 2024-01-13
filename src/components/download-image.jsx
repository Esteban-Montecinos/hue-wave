"use client";

import { Button } from "./ui/button";
import { IconPhotoDown } from "./icons/photo-down-svg";

export default function DownloadImage({ handleClick}) {

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
