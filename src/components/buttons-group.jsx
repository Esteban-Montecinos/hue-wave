"use client";

import CopyTW from "./copy-tw";
import CopyCSS from "./copy-css";
import DownloadImage from "./download-image";
import ShareGradient from "./share-gradient";
import { encodeURI } from "js-base64";
import { useStore } from "@/hooks/use-store";

export default function ButtonsGroup({ handleClick }) {

  const bg = useStore((state) => state.bg);
  const fr = useStore((state) => state.fr);
  const via = useStore((state) => state.via);
  const to = useStore((state) => state.to);
  const frPercent = useStore((state) => state.frPercent);
  const viaPercent = useStore((state) => state.viaPercent);
  const toPercent = useStore((state) => state.toPercent);
  const encode = encodeURI(
    `${bg.bg}+${bg.tw}+${fr.hex}+${fr.tw}+${via.hex}+${via.tw}+${to.hex}+${to.tw}+${frPercent.css}+${frPercent.tw}+${viaPercent.css}+${viaPercent.tw}+${toPercent.css}+${toPercent.tw}`
  );
  
  return (
    <div className="grid grid-cols-1 col-span-1 gap-4 lg:grid-cols-2">
      <CopyTW />
      <CopyCSS />
      <DownloadImage handleClick={handleClick} />
      <ShareGradient encode={encode} />
    </div>
  );
}
