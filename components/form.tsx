"use client"
import React, { use } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Radio from '@/components/ui/radio'
import Radio2 from '@/components/ui/radio2'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useDispatch } from "react-redux";
import { setFirstCurrencyQty, setResultCurrency } from "@/redux/currencySlice";
export default function form() {

  async function fetchData() {
    try {
      // Fixed: Complete URL in one line, no extra "GET" method
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
      );

      if (!response.ok) {
        throw new Error("Fetch failed");
      }

      const data = await response.json(); // Added 'await'
      setCoin(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const [coin, setCoin] = useState<any[]>([]);
  const [CurrencyQty, setCurrencyQty] = useState<number>(0);

  const coins = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  function currHandler() {
    if (CurrencyQty) {
      dispatch((setFirstCurrencyQty(CurrencyQty)))
    }
  }
  useEffect(() => {
    currHandler();
    fetchData();

  }, []);
  return (
    <form className='bg-neutral-800 h-5 w-9/10 flex flex-col items-center  gap-5 justify-center h-56 rounded-xl'>
      <div className='flex items-center justify-center'>
        <div className='w-3/5 flex  flex-col gap-4'>
          <Input className='h-14  rounded-md ' placeholder="Curenccy one" value={CurrencyQty} type="number" onChange={(e) => { setCurrencyQty(Number(e.target.value)); console.log("working qty") }} />
          <div className=' h-14 bg-neutral-700 flex items-center  rounded-md ' > {coins.currency.resultCurrency} </div>
        </div>
        <div className='flex flex-col  h-28  justify-between ml-5'>
          <Radio></Radio>
          <Radio2></Radio2>
        </div>

      </div>
      <Button className='w-40' type="button" onClick={() => {
        dispatch(setResultCurrency(coin[0]));
        console.log("button is working");
      }}>lol</Button>

    </form>
  )
}
