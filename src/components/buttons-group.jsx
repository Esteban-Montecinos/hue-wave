import CopyTW from "./copy-tw";
import CopyCSS from "./copy-css";
import DownloadImage from "./download-image";
import ShareGradient from "./share-gradient";

export default function ButtonsGroup({ handleClick }) {

  return (
    <div className="grid grid-cols-1 col-span-1 gap-4 lg:grid-cols-2">
      <CopyTW />
      <CopyCSS />
      <DownloadImage handleClick={handleClick} />
      <ShareGradient />
    </div>
  );
}
