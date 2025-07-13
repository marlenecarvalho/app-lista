'use client'

import React from 'react'

type CheckboxProps = {
  checked: boolean
  onChange: () => void
}

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <label className="relative flex items-center cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />

      {/* // Custom checkbox style */}
      <div 
        className={`
          w-6 h-6 rounded border-2 transition-all duration-200
          ${checked ? 'bg-[#2F723D] border-[#2F723D]' : 'bg-[#523480] border-[#A881E6]'}
          group-hover:${checked ? 'bg-[#4E995E] border-[#4E995E]' : 'bg-[#4E995E] border-[#4E995E]'}
        `}
      ></div>
      
      
      
      <svg
         className={`
          absolute w-4 h-4 text-white pointer-events-none left-1 top-1
          transition-opacity duration-200
          ${checked ? 'opacity-100' : 'opacity-0'}
        `}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </label>
  )
}
