"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import {setResultCurrency}  from "@/redux/currencySlice";


export default function result() {
  const [coin, setCoin] = useState<any[]>([]); 
  const coins = useSelector((state: RootState) => state);
   const dispatch =  useDispatch();
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
      console.log(JSON.stringify(data));
      setCoin(data);

    } catch (error) { 
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    
    fetchData();
    setResultCurrency(coin);
  }, []); 
  return (
    <div className='bg-neutral-800 h-5 w-9/10 flex flex-col items-center  gap-5 justify-center h-56 rounded-xl'>
      <p>Exchange Rate</p>
      <div>{coins.currency.resultCurrency}</div>
      <p>BTC to USD</p>
    </div>
  )
}
