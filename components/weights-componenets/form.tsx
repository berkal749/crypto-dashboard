import React from 'react'
import { Input } from '../ui/input'
import Radio from '../ui/radio'
import Radio2 from '../ui/radio2'
import { Button } from '../ui/button'
import RadioW from './ui/radioW'
import RadioW2 from './ui/radioW2'

export default function form() {
  return (
     <form className='bg-neutral-800 h-5 w-9/10 flex flex-col items-center  gap-5 justify-center h-56 rounded-xl'>
      <div className='flex items-center justify-center'>
        <div className='w-3/5 flex  flex-col gap-4'>
          <Input className='h-14  rounded-md ' placeholder="ur weight"  type="number"   />
          <div className=' h-14 bg-neutral-700 flex items-center  rounded-md ' >  </div>
        </div>
        <div className='flex flex-col  h-28  justify-between ml-5'>
          <RadioW></RadioW>
          <RadioW2></RadioW2>
        </div>

      </div>
      <Button className='w-40' type="button" 
        
        
      >lol</Button>

    </form>
  )
}
