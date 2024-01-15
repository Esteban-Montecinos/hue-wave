"use client";
import React, { useEffect, useState } from "react";
import CopyTW from "./copy-tw";
import CopyCSS from "./copy-css";
import DownloadImage from "./download-image";
import ShareGradient from "./share-gradient";
import { Skeleton } from "./ui/skeleton";

export default function ButtonsGroup({ handleClick }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-1 col-span-1 gap-4 lg:grid-cols-2">
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
        <Skeleton className="p-5 rounded-xl bg-neutral-600" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 col-span-1 gap-4 lg:grid-cols-2">
      <CopyTW />
      <CopyCSS />
      <DownloadImage handleClick={handleClick} />
      <ShareGradient />
    </div>
  );
}
