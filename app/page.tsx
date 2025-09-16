"use client"
import Image from "next/image";
import NavBar from "../components/navBar";
import News from "../components/news";
import CurrencyConverter from "../components/Currency"
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
    <div className="font-sans  bg-neutral-950 flex flex-col  items-center">
      <NavBar />

      <div className="flex  justify-center  gap-3.5 border-amber-400 h-135 w-5xl" >

        <CurrencyConverter  />
        <News />

      </div>
    </div>
    </Provider>
  );
}
