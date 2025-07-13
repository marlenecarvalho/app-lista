'use client' // Indica que esse componente roda no cliente (necessário no Next.js 13+ para hooks)

import { useState } from 'react'
import Checkbox from './components/Checkbox/Checkbox'
import { categorias } from './components/CategoriaDropdown/CategoriaDropdown'
import CategoriaDropdown from './components/CategoriaDropdown/CategoriaDropdown'
import { MoreVertical, Plus } from 'lucide-react'

// Define o tipo de um item da lista
type Item = {
  nome: string
  comprado: boolean
  quantidade: string
  categoria: string
  unidadeMedida?: string // opcional, pode ser usado para categorias específicas
}

export default function List() {
  // Estado para armazenar os itens da lista
  const [items, setItems] = useState<Item[]>([])

  // Estado para o nome do novo item
  const [newItem, setNewItem] = useState("")

  // Estado para a quantidade
  const [newQuantidade, setNewQuantidade] = useState("")

  // Estado para a categoria selecionada
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("")

  // Estado para unidade de medida (opcional, pode ser usado para categorias específicas)
  const [unidadeMedida, setUnidadeMedida] = useState("")
  
  // Estado para controlar qual item estará com menu aberto
  const [menuAberto, setMenuAberto] = useState<number | null>(null)

  // Adiciona um novo item à lista
  const handlerAddItem = () => {
    if (newItem.trim() !== "" && categoriaSelecionada !== "") {
      setItems([
        ...items, // copia os itens anteriores
        {
          nome: newItem.trim(),
          comprado: false,
          quantidade: newQuantidade,
          categoria: categoriaSelecionada,
          unidadeMedida: unidadeMedida  // se unidadeMedida estiver vazio, não adiciona
        }
      ])
      // Limpa os campos
      setNewItem("")
      setNewQuantidade("")
      setCategoriaSelecionada("")
      setUnidadeMedida("Un")
    }
  }

  // Alterna entre comprado / não comprado
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

  // Interface da aplicação
  return (
    <main className="absolute min-h-screen bg-black text-white">
      {/* Imagem de topo */}
      <div className="relative bg-black bg-cover">
        <img src="/imagem.png" alt="Topo" className="w-full h-auto object-cover" />
        <h1 className=" absolute top-1/2 left-130 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold font-inter drop-shadow-lg">Lista de Compras</h1>
      

      {/* Formulário de inserção */}
      
        {/* Nome do item */}
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Digite um item"
          className="absolute left-100 top-43 border border-purple-500 p-2 h-12 rounded w-50 text-white"
        />

        {/* Quantidade */}
        <input
          type="number"
          value={newQuantidade}
          onChange={(e) => setNewQuantidade(e.target.value)}
          placeholder="Qtd"
          className="absolute top-43 left-155 border border-purple-500 p-2 rounded w-24 h-12 text-white"
        />
        {/* Unidade de medida para escolher na quantidade */}
        <select
          value={unidadeMedida}
          onChange={(e) => setUnidadeMedida(e.target.value)}
          className='absolute top-43 left-180 border border-purple-500 p-2 rounded w-32 h-12 text-white'
        >
          <option value="Un">Unidade</option>
          <option value="Kg">Kg</option>
          <option value="L">L</option>


        </select>
        {/* Dropdown de categoria */}
        <CategoriaDropdown 
          selected={categoriaSelecionada}
          onSelect={setCategoriaSelecionada}
        />

        {/* Botão de adicionar */}
        <button
          onClick={handlerAddItem}
          className="absolute top-2/2 left-280 bg-[#7450AC] w-[40px] h-[40px] rounded-full p-[8px] flex items-center justify-center hover:bg-[#523480] transition-colors duration-300"
        >
          <Plus className='w-5 h-5 text-white' />
        </button>
        </div>
        
      
      

      {/* Lista de itens renderizada */}
      <ul className="space-y-4 mt-12 px-6">
        {items.map((item, index) => {
          // Busca os dados da categoria
          const cat = categorias.find(c => c.nome === item.categoria)

          return (
            <li
              key={index}
              // Borda com cor da categoria
              className={`bg-[#17171A] p-4 rounded flex justify-between items-start border border-purple-700'}`}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  {/* Checkbox para marcar como comprado */}
                  <Checkbox checked={item.comprado} onChange={() => handlerToggleItem(index)} />

                  {/* Nome do item, riscado se comprado */}
                  <span className={`cursor-pointer text-lg font-semibold ${item.comprado ? "line-through text-gray-500" : "text-white"}`}
                  >
                      {item.nome}
                  </span>

                  {/* Quantidade ao lado */}
                  <span className="text-sm text-gray-300">
                    {item.quantidade && `(${item.quantidade} ${item.unidadeMedida})`}
                  </span>
                  {/* Nome e emoji da categoria */}
                {cat && (
                  <span
                    className={`ml-auto flex items-center gap-1 px-2 py-1 rounded-full text-sm opacity-50 ${cat.cor}`}
                    title={cat.descricao}
                  >
                    {/* Exibe o emoji (como ícone) */}
                    <cat.emoji className="mr-1 w-4 h-4" />
                    {cat.nome}
                  </span>
                )}

                </div>

                
              </div>

              {/* Ícone de opções */}
              <div className='relative'>
                <button onClick={() => setMenuAberto(menuAberto === index ? null : index)}>
                  <MoreVertical className="w-6 h-6 text-gray-400 hover:text-white" />
                </button>
                {menuAberto === index && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#1C1C1C] border border-purple-500 rounded-md shadow-lg z-10">
                    {/* Opção de editar */}
                    <button
                      onClick={() => {
                        // Aqui você pode implementar a lógica de edição
                        console.log(`Editar item: ${item.nome}`)
                      }}
                      className="block px-4 py-2 text-sm text-white hover:bg-purple-600 w-full text-left"
                    >
                      Editar
                    </button>
                    {/* Opção de remover */}
                    <button
                      onClick={() => handlerRemoveItem(index)}
                      className="block px-4 py-2 text-sm text-red-500 hover:bg-red-600 w-full text-left"
                    >
                      Remover
                    </button>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
