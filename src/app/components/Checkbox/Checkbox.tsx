'use client'

import React from 'react'

type CheckboxProps = {
    checked: boolean
    onChange: () => void
}

export default function Checkbox({ checked, onChange }: CheckboxProps) {

    return(
        
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className='w-[16px] h-[16px] rounded-[2px] rotate-[0deg] opacity-100 absolute border border-[1px]'/>
    )
}


