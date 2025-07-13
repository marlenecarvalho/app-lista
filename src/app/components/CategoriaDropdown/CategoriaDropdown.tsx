'use client'

import { useState } from "react";
import { Camera, Apple, LucideIcon, Sandwich, Beef, Milk, Carrot } from 'lucide-react';

 type Categoria = {
    nome: string
    emoji: LucideIcon
    descricao: string
    cor: string
 }

type Props= {
    selected: string
    onSelect: (categoria:string) => void
};

export const categorias: Categoria[] = [
    {nome: "Fruta", emoji: Apple, descricao:"Fruta", cor: "bg-[#E07B67]" },
    {nome: "Legume", emoji: Carrot, descricao:"Legume", cor: "bg-[#8CAD51]" },
    {nome: "Carne", emoji: Beef, descricao:"Carne", cor: "bg-[#DB5BBF]" },
    {nome: "Padaria", emoji: Sandwich, descricao:"Padaria", cor: "bg-[#BB9F3A]" },
    {nome: "Bebida", emoji: Milk, descricao:"Bebida", cor: "bg-[#7B94CB]" },

]


export default function CategoriaDropdown({selected, onSelect }: Props) {
    const[aberto,setAberto] = useState(false)

    const handleSelect = (categoria:string) => {
        onSelect(categoria)
        setAberto(false)
    }

    return (
        <div className=" w-50 position-relative absolute top-2/3 left-220">
            <label className="block text-sm p-3 text-white">Categoria</label>

        {/* Botão principal */}
      <button
        onClick={() => setAberto(!aberto)}
        className={'w-full flex justify-between items-center bg-[#1C1C1C] border border-purple-500 text-white px-4 py-2 rounded-md hover:border-purple-400'}
      >
        <span>{selected || "Selecione"}</span>
        <span>{aberto ? "▲" : "▼"}</span>
      </button>

      {/* Lista suspensa */}
      {aberto && (
        <ul className="absolute z-10 mt-1 w-full bg-[#1C1C1C] border border-purple-500 rounded-md shadow-lg">
          {categorias.map((cat) => (
            <li
              key={cat.nome}
              onClick={() => handleSelect(cat.nome)}
              className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#2A2A2A] ${
                selected === cat.nome ? "bg-purple-800" : ""
              }`}
            >
              <span><cat.emoji className="w-4 h-4 inline mr-2" /> {cat.nome}</span>
              {selected === cat.nome && <span className="text-white">✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )

}
