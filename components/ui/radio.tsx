"use client"

import * as React from "react"

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
  const [ Currency, setCurrency] = React.useState("USD")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{Currency}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Currency</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={Currency} onValueChange={setCurrency}>
          <DropdownMenuRadioItem value="Bitcoin">Bitcoin</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ETH">ETH</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="USD">USD</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
