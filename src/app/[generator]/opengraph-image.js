import { decode } from "js-base64";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Hue Wave gradient image";
export const size = {
  width: 640,
  height: 640,
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
    gradient = "radial-gradient(at right top, #262626 24%, #171717 60%, #0a0a0a 100%)";
    text = "Ups Algo Malio Sal";
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
          fontSize: "4rem",
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
