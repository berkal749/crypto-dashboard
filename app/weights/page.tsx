"use client"
import NavBar from '@/components/navBar'
import CurrencyConverter from "@/components/Currency"
import React from 'react'
import News from "@/components/news";
import WeightsConverter from '@/components/weights-componenets/weightsConverter';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
export default function () {
  return (
    <Provider store={store}>
   <div className="font-sans  bg-neutral-950 flex flex-col  items-center">
         <NavBar />
   
         <div className="flex  justify-center  gap-3.5 border-amber-400 h-135 w-5xl" >
           <WeightsConverter  />
         </div>
       </div>
       </Provider>
  )
}
