import { RootState } from '@/redux/store';
import { setResultWeight } from '@/redux/weightSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'; // Fixed imports

export default function Result() { // PascalCase component name
    const units = useSelector((state: RootState) => state.units); // Fixed useSelector
    const dispatch = useDispatch(); // Fixed useDispatch
    console.log(units.weightCurrency)
    useEffect(() => {
        dispatch(setResultWeight());
         console.log(units.weightCurrency);
    }, [dispatch]); // Added dispatch to dependencies

    return (
        <div className='bg-neutral-800 h-5 w-9/10 flex flex-col items-center gap-5 justify-center h-56 rounded-xl'>
            <p>result</p>
            <div>{units.weightCurrency}</div> {/* Display value directly */}
            <p>no pain no gain</p>
        </div>
    );
}