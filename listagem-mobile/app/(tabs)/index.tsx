import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Platform, Image } from 'react-native';
import { LucideIcon, Plus } from 'lucide-react-native';
import InputItem from '@/components/InputItem/InputItem';
import InputFields from '@/components/InputField/InputField';
import CategoriaDropdown from '@/components/CategoriaDropdown/CategoriaDropdown';
import { Apple, Carrot, Beef, Sandwich, Milk } from 'lucide-react-native';

type ItemProps = {
  value: string;
  comprado: boolean;

}
type Categoria = {
  nome: string;
  emoji: LucideIcon;
  cor: string;
  descricao: string;
};

type Props = {
  selected: string; 
  onSelect: (categoria: string) => void;
  categorias: Categoria[];
};



export default function Lista() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria | null>(null);
  const [categorias, setCategorias] = useState<Categoria[]>([
    {nome: "Fruta", emoji: Apple, descricao:"Fruta", cor: "bg-[#E07B67]" },
    {nome: "Legume", emoji: Carrot, descricao:"Legume", cor: "bg-[#8CAD51]" },
    {nome: "Carne", emoji: Beef, descricao:"Carne", cor: "bg-[#DB5BBF]" },
    {nome: "Padaria", emoji: Sandwich, descricao:"Padaria", cor: "bg-[#BB9F3A]" },
    {nome: "Bebida", emoji: Milk, descricao:"Bebida", cor: "bg-[#7B94CB]" },

  ]); 

  

  const [items, setItems] = useState<ItemProps[]>([]);
  const [newItem, setNewItem] = useState("");
  const [newQuantidade, setNewQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [unidadeMedida, setUnidadeMedida] = useState("Un");
  const [menuAberto, setMenuAberto] = useState<number | null>(null);

  const handlerSelectCategoria = (categoria: string) => {
   const categoriaSelecionada = categorias.find(cat => cat.nome === categoria) || null;
  // Aqui você pode atualizar o estado ou fazer outras ações com a categoria selecionada
};
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/imagem.png')} style={styles.image} />
        <Text style={styles.title}>Lista de Compras</Text>
      </View>
      <View style={styles.inputsWrapper}>
        {/* Input do nome do item */}
        <InputItem value={newItem} onChangeText={setNewItem} />

        {/* Input da quantidade e unidade */}
        <InputFields
          item={newItem}
          quantidade={Number(newQuantidade)}
          unidade={unidadeMedida}
          onChangeItem={setNewItem}
          onChangeQuantidade={(qtd) => setNewQuantidade(qtd)}
          onChangeUnidade={setUnidadeMedida}
        />

        {/* Dropdown de categorias */}
        <CategoriaDropdown
          selected={categoriaSelecionada?.nome || ""}
          onSelect={handlerSelectCategoria}
          categorias={categorias}
        />
      </View>


    </ScrollView>
      
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',

  },
  title: {
    position: 'absolute',
    top: '80%',
    left: '25%',
    transform: [{ translateX: -75 }, { translateY: -20 }],
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold', 
    fontFamily: 'Inter',
  },
  inputsWrapper: {
    padding: 16,
    gap: 12,
  },
});
