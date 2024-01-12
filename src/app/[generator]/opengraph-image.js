import { decode } from "js-base64";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Hue Wave gradient image";
export const size = {
  width: 1366,
  height: 768,
};

export const contentType = "image/png";

export default async function Image({ params: { generator } }) {
  const response = decode(generator);
  const [
    bg,
    bgTw,
    fr,
    frTw,
    via,
    viaTw,
    to,
    toTw,
    frPercent,
    frPercentTw,
    viaPercent,
    viaPercentTw,
    toPercent,
    toPercentTw,
  ] = response.split("+");
  const gradient = `${bg} ${fr} ${frPercent}, ${via} ${viaPercent}, ${to} ${toPercent})`;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          backgroundImage: gradient,
          width: "100%",
          height: "100%",
        }}
      ></div>
    ),
    {
      ...size,
    }
  );
}
