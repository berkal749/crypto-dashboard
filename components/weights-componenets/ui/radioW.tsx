"use client"

import * as React from "react"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useDispatch } from "react-redux";
import { setFirstWeight} from "@/redux/weightSlice";
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
  const [ units, setUnits] = React.useState("kg")
  const coins = useSelector((state: RootState) => state);
    const dispatch =  useDispatch();
    function currHandler(){
        if(units){
          dispatch((setFirstWeight(units)))
        }
      }
      useEffect(() => {
            currHandler()
          }, [units]);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{units}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Units</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={units} onValueChange={setUnits}>
          <DropdownMenuRadioItem value="kg">Kg</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="lb">lb</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="g">g</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
