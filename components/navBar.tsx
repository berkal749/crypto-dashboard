"use client"
import React from 'react'
import { Sun } from 'lucide-react';
import Link from 'next/link';

export default function () {
    return (
        <div className=' w-5xl flex text-neutral-100 justify-between items-center mb-7  mt-5'>

            <button>GitHub</button>


            <Link href="/" >curenncy</Link>
            <Link href="/weights" >weight</Link>





            <button> <Sun /></button>

        </div>
    )
}
