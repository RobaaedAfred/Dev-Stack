import { Suspense } from "react";
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies";
import type { Itechnology } from "./Types/types";

const technologiesFetch = async (): Promise<Itechnology[]> => {

  const response = await fetch('/data.json');
  const data = await response.json();
  return data;

}


function App() {
  const technologiesPromise = technologiesFetch();
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<h2>Web Technologies Loading...</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  )
}

export default App
