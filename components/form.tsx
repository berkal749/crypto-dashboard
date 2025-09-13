"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Radio from '@/components/ui/radio'

export default function form() {
  return (
    <form className='bg-neutral-800 h-5 w-9/10 flex flex-col items-center  gap-5 justify-center h-56 rounded-xl'>
      <div className='flex items-center justify-center'>
        <div className='w-3/5 flex  flex-col gap-4'>
          <Input className='h-14  rounded-md ' placeholder="Curenccy one" />
          <div className=' h-14 bg-neutral-700 flex items-center  rounded-md ' >  </div>
        </div>
        <div className='flex flex-col  h-28  justify-between ml-5'>
          <Radio></Radio>
          <Radio></Radio>
        </div>

      </div>
      <Button className='w-40'>lol</Button>

    </form>
  )
}
