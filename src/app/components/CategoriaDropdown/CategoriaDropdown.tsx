'use client'

import { useState } from "react";
import { Camera, Apple, LucideIcon } from 'lucide-react';

 type Categoria = {
    nome: string
    Icone: LucideIcon
 }

type Props= {
    selected: string
    onSelect: (categoria:string) => void
};

const categorias: Categoria[] = [
    {nome: "Frutas", Icone: Apple },
    

]

export default function CategoriaDropdown({selected, onSelect }: Props) {
    const[aberto,setAberto] = useState(false)
    const handleSelect = (categoria:string) => {
        onSelect(categoria)
        setAberto(false)
    }
}

