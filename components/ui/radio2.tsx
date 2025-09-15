"use client"

import * as React from "react"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useDispatch } from "react-redux";
import { setSecondCurenncy } from "@/redux/currencySlice";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DropdownMenuRadioGroupDemo() {
  const coins = useSelector((state: RootState) => state);
    const dispatch =  useDispatch();
    const [ Currency, setCurrency] = React.useState("USD")
    console.log(Currency);
    function currHandler(){
      if(Currency){
        dispatch((setSecondCurenncy(Currency)))
      }
    }
    useEffect(() => {
      currHandler()
    }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{Currency}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Currency</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={Currency} onValueChange={setCurrency}>
          <DropdownMenuRadioItem value="bitcoin">Bitcoin</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ethereum">ETH</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="USD">USD</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
