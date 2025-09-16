import React from 'react'
import Form from './form'
import Result from './ui/result'

export default function weightsConverter() {
  return (
   <div className=' h-6xl border-2 w-sm rounded-xl bg-neutral-900 flex flex-col gap-3  items-center' >
          <p className='text-2xl  text-neutral-100 font-semibold mt-2'>  Weight Converter</p>
          <Form/>
          <Result/>
        </div>
  )
}
