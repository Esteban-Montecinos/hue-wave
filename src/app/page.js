import CustomSelector from "@/components/custom-selector";
import PreviewColor from "@/components/preview-color";
import PreviewText from "@/components/preview-text";

export default function Home() {
  
  return (
    <section className="flex flex-col min-h-screen p-2 ">
      <header className="flex flex-col w-full text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter text-transparent uppercase bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text">
          Hue Wave
        </h1>
        <h2 className="mt-1 font-medium tracking-wide text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text">
          Gradient generator for Tailwind CSS
        </h2>
      </header>
      <main className="grid w-full grid-cols-1 gap-8 px-4 mt-16 lg:grid-cols-2">
        <CustomSelector/>
        <PreviewColor/>
        <PreviewText/>
      </main>
    </section>
  );
}
