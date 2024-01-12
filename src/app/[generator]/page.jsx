import GeneratorClientPage from "./page.client";

export default function GeneratorPage({params: {generator}}) {
  
  return (
    <GeneratorClientPage generator={generator}/>
  );
}