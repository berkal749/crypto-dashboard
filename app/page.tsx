import Image from "next/image";
import NavBar from "./components/navBar";
import News from "./components/news";
import CurrencyConverter from "./components/Currency"

export default function Home() {
  return (
    <div className="font-sans  flex flex-col h-screen items-center">
      <NavBar />

      <div className="flex  justify-center border-2 gap-3.5 border-amber-400 h-5/6 w-5xl" >
        <News />
        <CurrencyConverter />

      </div>





    </div>
  );
}
