import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import RadioW from './ui/radioW'
import RadioW2 from './ui/radioW2'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setFirstWeightQty } from '@/redux/weightSlice'
import { setResultWeight } from '@/redux/weightSlice'



export default function form() {
  const [weightQty, setWeightQty] = useState<number>(0);

  
  const coins = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  function currHandler() {
    if (weightQty) {
      console.log("www1")

      dispatch((setFirstWeightQty(weightQty)))
    }
  }
  useEffect(() => {
    currHandler();
    console.log("www2")

  }, [weightQty]);



  return (
     <form className='bg-neutral-800 h-5 w-9/10 flex flex-col items-center  gap-5 justify-center h-56 rounded-xl'>
      <div className='flex items-center justify-center'>
        <div className='w-3/5 flex  flex-col gap-4'>
          <Input className='h-14  rounded-md ' placeholder="ur weight"  value={weightQty} type="number" onChange={(e) => { setWeightQty(Number(e.target.value));   }}  />
          <div className=' h-14 bg-neutral-700 flex items-center  rounded-md ' >  </div>
        </div>
        <div className='flex flex-col  h-28  justify-between ml-5'>
          <RadioW></RadioW>
          <RadioW2></RadioW2>
        </div>

      </div>
      <Button onClick={()=> { dispatch(setResultWeight());  console.log("lol is clicked");}}  className='w-40' type="button" 
        
        
      >lol</Button>

    </form>
  )
}
