'use client' // Diz ao Next.js que este componente roda no lado do cliente (browser)

import { useState } from 'react'
import Checkbox from './components/Checkbox/Checkbox'


// Tipo do item da lista de compras
type Item = {
  nome: string
  comprado: boolean
  quantidade: string
  categoria: string
}

// Tipo para as categorias disponíveis
type Categoria = {
  nome: string
  cor: string
  emoji: string
  descricao: string
}

export default function List() {
  // Estados da aplicação
  const [items, setItems] = useState<Item[]>([]) // Lista de itens
  const [newItem, setNewItem] = useState("") // Nome do novo item
  const [newQuantidade, setNewQuantidade] = useState("") // Quantidade do novo item
  const [categoria, setCategoria] = useState<string>("") // Categoria selecionada

  // Lista de categorias fixas
  const categorias: Categoria[] = [
    { nome: "Frutas", emoji: "🍎", cor: "text-red-500", descricao: "Frutas frescas" },
    { nome: "Padaria", emoji: "🥖", cor: "text-yellow-700", descricao: "Pães e massas" },
    { nome: "Legumes", emoji: "🥕", cor: "text-green-600", descricao: "Legumes e verduras" },
    { nome: "Carnes", emoji: "🍖", cor: "text-pink-800", descricao: "Carnes e proteínas" },
    { nome: "Bebidas", emoji: "🍹", cor: "text-blue-600", descricao: "Bebidas em geral" },
  ]

  // Função para adicionar um novo item na lista
  const handlerAddItem = () => {
    // Só adiciona se o nome e a categoria estiverem preenchidos
    if (newItem.trim() !== "" && categoria !== "") {
      setItems([
        ...items, // copia os itens anteriores
        {
          nome: newItem.trim(),
          comprado: false,
          quantidade: newQuantidade,
          categoria: categoria
        }
      ])
      // Limpa os campos após adicionar
      setNewItem("")
      setNewQuantidade("")
      setCategoria("")
    }
  }

  // Alterna o estado "comprado" de um item da lista
  const handlerToggleItem = (index: number) => {
    const novaLista = items.map((item, i) =>
      i === index ? { ...item, comprado: !item.comprado } : item
    )
    setItems(novaLista)
  }

  // Remove um item da lista
  const handlerRemoveItem = (index: number) => {
    const novaLista = items.filter((_, i) => i !== index)
    setItems(novaLista)
  }

  // Mostra um alerta ao clicar no nome do item (exemplo simples de interação)
  const handlerClickItem = (item: string) => {
    alert(`Item clicado: ${item}`)
  }

  // Atualiza a quantidade de um item da lista
  const handlerChangeQuantidade = (index: number, novaQtd: string) => {
    const novaLista = items.map((item, i) =>
      i === index ? { ...item, quantidade: novaQtd } : item
    )
    setItems(novaLista)
  }

  // Aqui começa o layout visual da lista
  return (
    <main className="min-h-screen bg-black text-white p-6">
      {/* Imagem de topo */}
      <div className="bg-black bg-cover">
        <img src="/imagem.png" alt="Topo" className="w-full h-auto" />
      </div>

      {/* Título da página */}
      <h1 className="w-[720px] h-[24px] rotate-[0deg] opacity-100 absolute top-[88px] left-[360px] font-inter font-bold text-[24px] leading-[100%] tracking-[3%] align-middle">Lista de Compras</h1>

      {/* Formulário para adicionar itens */}
      <div className="w-[720px] h-[60px] rotate-[0deg] opacity-100 absolute top-[144px] left-[360px] flex gap-[12px]">
        {/* Input do nome do item */}
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Digite um item"
          className="border text-white h-10 border-purple-500 p-2 rounded w-64 text-black"
        />

        {/* Input da quantidade */}
        <input
          type="number"
          value={newQuantidade}
          onChange={(e) => setNewQuantidade(e.target.value)}
          placeholder="Quantidade"
          className="border text-white h-10 border-purple-500 p-2 rounded w-40 text-black"
        />

        {/* Select da categoria */}
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border text-white h-10 border-purple-500 p-2 rounded w-48 text-black"
        >
          <option value="">Selecione</option>
          {categorias.map((cat) => (
            <option key={cat.nome} value={cat.nome}>
              {cat.emoji} {cat.nome}
            </option>
          ))}
        </select>

        {/* Botão de adicionar item */}
        <button
          onClick={handlerAddItem}
          className="bg-[#7450AC] text-white h-10 px-4 rounded hover:bg-purple-600 transition"
        >
          +
        </button>
      </div>

      {/* Lista de itens adicionados */}
      <ul className="space-y-2 p-8">
        
        {items.map((item, index) => {
          // Busca os detalhes da categoria para exibir cor, emoji e descrição
          const cat = categorias.find((c) => c.nome === item.categoria)
          return (
            <li
              key={index}
              className="bg-[#17171A] border border-purple-700 p-4 rounded flex justify-between items-start"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  {/* Checkbox do item comprado */}
                  <Checkbox checked={item.comprado} onChange={() => handlerToggleItem(index)} />
                
                  {/* Nome do item, com estilo riscado se comprado */}
                  <span
                    className={`cursor-pointer text-lg  ${
                      item.comprado ? 'line-through text-gray-500' : ''
                    }`}
                    onClick={() => handlerClickItem(item.nome)}
                  >
                    {item.nome}
                  </span>

                  {/* Quantidade */}
                  <span className="text-sm text-gray-300">
                    {item.quantidade && `(${item.quantidade})`}
                  </span>
                </div>

                {/* Categoria com emoji, cor e tooltip */}
                {cat && (
                  <span
                    className={`text-sm ${cat.cor}`}
                    title={cat.descricao}
                  >
                    {cat.emoji} {cat.nome}
                  </span>
                )}
              </div>

              {/* Botão para remover item */}
              <button
                onClick={() => handlerRemoveItem(index)}
                className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600 transition"
              >
                X
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
