"use client";
import { bgGradients } from "@/constants/bg-gradients";
import { colors } from "@/constants/colors";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useStore } from "@/hooks/use-store";

export default function SelectClass() {
  const bg = useStore((state) => state.bg);
  const fr = useStore((state) => state.fr);
  const via = useStore((state) => state.via);
  const to = useStore((state) => state.to);
  const setBg = useStore((state) => state.setBg);
  const setFrom = useStore((state) => state.setFrom);
  const setVia = useStore((state) => state.setVia);
  const setTo = useStore((state) => state.setTo);

  const handleChangeBg = (e) => {
    const [bg, tw] = e.split("+");
    setBg({ bg, tw });
  };
  const handleChangeFrom = (e) => {
    const [hex, tw] = e.split("+");
    setFrom({ hex, tw });
  };
  const handleChangeVia = (e) => {
    const [hex, tw] = e.split("+");
    setVia({ hex, tw });
  };
  const handleChangeTo = (e) => {
    const [hex, tw] = e.split("+");
    setTo({ hex, tw });
  };
  return (
    <div className="grid grid-cols-1 col-span-2 gap-4 lg:grid-cols-2">
      <Select
        defaultValue={bg.bg + "+" + bg.tw}
        onValueChange={(e) => handleChangeBg(e)}
        aria-label="Seleccione Gradiente"
        title="Seleccione Gradiente"
        className="z-50"
      >
        <SelectTrigger
          arial-label="Seleccione Gradiente"
          title="Seleccione Gradiente"
          className="text-neutral-800"
        >
          <SelectValue placeholder="Seleccione Gradiente" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Gradientes</SelectLabel>
            {bgGradients.map(({ value, label }) => (
              <SelectItem key={value.tw} value={value.bg + "+" + value.tw}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        defaultValue={fr.hex + "+" + fr.tw}
        onValueChange={(e) => handleChangeFrom(e)}
        aria-label="Seleccione Desde"
        title="Seleccione Desde"
      >
        <SelectTrigger
          arial-label="Seleccione Desde"
          title="Seleccione Desde"
          className="text-neutral-800"
        >
          <SelectValue placeholder="Seleccione Desde" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Desde</SelectLabel>
            {colors.map(({ tw, hex }) => (
              <SelectItem key={`from-${tw}`} value={hex + `+from-${tw}`}>
                {`from-${tw}`}
                <span
                  className="px-2 ml-2 border size-5"
                  aria-label={`color preview ${hex}`}
                  style={{ background: hex }}
                ></span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        defaultValue={via.hex + "+" + via.tw}
        onValueChange={(e) => handleChangeVia(e)}
        aria-label="Seleccione Vía"
        title="Seleccione Vía"
      >
        <SelectTrigger
          arial-label="Seleccione Vía"
          title="Seleccione Vía"
          className="text-neutral-800"
        >
          <SelectValue placeholder="Seleccione Vía" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Vía</SelectLabel>
            {colors.map(({ tw, hex }) => (
              <SelectItem key={`via-${tw}`} value={hex + `+via-${tw}`}>
                {`via-${tw}`}
                <span
                  className="px-2 ml-2 border size-5"
                  aria-label={`color preview ${hex}`}
                  style={{ background: hex }}
                ></span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        defaultValue={to.hex + "+" + to.tw}
        onValueChange={(e) => handleChangeTo(e)}
        aria-label="Seleccione Hacia"
        title="Seleccione Hacia"
      >
        <SelectTrigger
          arial-label="Seleccione Hacia"
          title="Seleccione Hacia"
          className="text-neutral-800"
        >
          <SelectValue placeholder="Seleccione Hacia" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Hacia</SelectLabel>
            {colors.map(({ tw, hex }) => (
              <SelectItem key={`to-${tw}`} value={hex + `+to-${tw}`}>
                {`to-${tw}`}
                <span
                  className="px-2 ml-2 border size-5"
                  aria-label={`color preview ${hex}`}
                  style={{ background: hex }}
                ></span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
