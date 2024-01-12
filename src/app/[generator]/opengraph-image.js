import { decode } from "js-base64";
import { ImageResponse } from "next/og";

export const runtime = "edge";

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
  let gradient
  let text
  if (bg.split("-")[0] === "conic") {
    gradient = "linear-gradient(to left bottom, #f9a8d4 9%, #d8b4fe 33%, #818cf8 68%)";
    text = "Oops Algo Malio Sal";
  }else{
    gradient = `${bg} ${fr} ${frPercent}, ${via} ${viaPercent}, ${to} ${toPercent})`;
  }

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: gradient,
          width: "100%",
          height: "100%",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "5em",
          fontWeight: "bold",
        }}
      >
        {text}
      </div>
    ),
    {
      ...size,
    }
  );
}
