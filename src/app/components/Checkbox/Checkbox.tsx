'use client'

import React from 'react'

type CheckboxProps = {
    checked: boolean
    onChange: () => void
}

export default function Checkbox({ checked, onChange }: CheckboxProps) {

    return(
        
        <label className="relative flex items-center cursor-pointer">
  <input type="checkbox" className="peer sr-only" />
  <div className="w-6 h-6 border-2 border-gray-400 rounded transition-all duration-300 peer-checked:bg-green-500 peer-checked:border-blue-500"></div>
  <svg className="absolute w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100 pointer-events-none left-1 top-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path d="M5 13l4 4L19 7" />
  </svg>
</label>
    )
}


