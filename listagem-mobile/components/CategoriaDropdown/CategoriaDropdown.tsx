// components/CategoriaDropdown.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Apple, Carrot, Beef, Sandwich, Milk, LucideIcon } from 'lucide-react-native';

// Tipos
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

export const categorias: Categoria[] = [
    {nome: "Fruta", emoji: Apple, descricao:"Fruta", cor: "bg-[#E07B67]" },
    {nome: "Legume", emoji: Carrot, descricao:"Legume", cor: "bg-[#8CAD51]" },
    {nome: "Carne", emoji: Beef, descricao:"Carne", cor: "bg-[#DB5BBF]" },
    {nome: "Padaria", emoji: Sandwich, descricao:"Padaria", cor: "bg-[#BB9F3A]" },
    {nome: "Bebida", emoji: Milk, descricao:"Bebida", cor: "bg-[#7B94CB]" },
]

export default function CategoriaDropdown({ selected, onSelect, categorias }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  const categoriaAtual = categorias.find((cat) => cat.nome === selected);

  return (
    <View style={styles.container}>
      {/* Botão que abre o modal */}
      <TouchableOpacity
        style={[styles.dropdown, categoriaAtual ? { borderColor: categoriaAtual.cor } : {}]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>
          {categoriaAtual ? `${categoriaAtual.emoji} ${categoriaAtual.nome}` : 'Selecionar categoria'}
        </Text>
      </TouchableOpacity>

      {/* Modal com lista de categorias */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={categorias}
              keyExtractor={(item) => item.nome}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onSelect(item.nome);
                    setModalVisible(false);
                  }}
                >
                  <Text style={[styles.optionText, selected === item.nome && styles.optionSelected]}>
                    <item.emoji /> {item.nome}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: '#fff', textAlign: 'center' }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  dropdown: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#7450AC',
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#1e1e1e',
  },
  dropdownText: {
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#2e2e2e',
    borderRadius: 8,
    padding: 16,
  },
  option: {
    paddingVertical: 12,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  optionSelected: {
    fontWeight: 'bold',
    color: '#7450AC',
  },
  closeButton: {
    marginTop: 12,
    backgroundColor: '#7450AC',
    padding: 12,
    borderRadius: 8,
  },
});
