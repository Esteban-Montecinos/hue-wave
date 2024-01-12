import React from "react";
import CopyTW from "./copy-tw";
import CopyCSS from "./copy-css";
import DownloadImage from "./download-image";
import ShareGradient from "./share-gradient";

export default function ButtonsGroup() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <CopyTW />
      <CopyCSS />
      <DownloadImage />
      <ShareGradient />
    </div>
  );
}
