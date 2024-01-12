import SelectClass from "./select-class";
import SliderPercent from "./slider-percent";
import ButtonsGroup from "./buttons-group";

export default function Controls() {
  return (
    <section className="grid col-span-1 gap-8 lg:col-span-2">
      <SelectClass />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <ButtonsGroup />
        <SliderPercent />
      </div>
    </section>
  );
}
