import GeneratorClientPage from "./page.client";
import { decode } from "js-base64";

export default function GeneratorPage({ params: { generator } }) {
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
  return (
    <GeneratorClientPage
      bg={bg}
      bgTw={bgTw}
      fr={fr}
      frTw={frTw}
      via={via}
      viaTw={viaTw}
      to={to}
      toTw={toTw}
      frPercent={frPercent}
      frPercentTw={frPercentTw}
      viaPercent={viaPercent}
      viaPercentTw={viaPercentTw}
      toPercent={toPercent}
      toPercentTw={toPercentTw}
    />
  );
}
