import Card from "@/components/card";
import { COLLECTIONS } from "@/constants/collections";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="grid max-w-screen-xl grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {COLLECTIONS.map(({title,gradientTw, gradientCSS,encode}) => (
        <Card key={encode} title={title} gradientTw={gradientTw} gradientCSS={gradientCSS} encode={encode}/>
      ))}
      <Toaster expand={true} />
    </main>
  );
}
