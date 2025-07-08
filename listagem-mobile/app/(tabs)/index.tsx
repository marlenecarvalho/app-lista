// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// screens/ListScreen.tsx
import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'


const categorias = [
  { nome: "Frutas", emoji: "🍎", cor: "#FF4C4C", descricao: "Frutas frescas" },
  { nome: "Padaria", emoji: "🥖", cor: "#FFD700", descricao: "Pães e massas" },
  { nome: "Legumes", emoji: "🥕", cor: "#32CD32", descricao: "Legumes e verduras" },
  { nome: "Carnes", emoji: "🍖", cor: "#FF69B4", descricao: "Carnes e proteínas" },
  { nome: "Bebidas", emoji: "🍹", cor: "#1E90FF", descricao: "Bebidas" }
]

export default function ListScreen() {
  const [item, setItem] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("")

  return (
    <ImageBackground source={require('../../../assets/images/imagem.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Compras</Text>

        <TextInput
          placeholder="Item"
          value={item}
          onChangeText={setItem}
          style={styles.input}
        />

        <TextInput
          placeholder="Quantidade"
          value={quantidade}
          onChangeText={setQuantidade}
          style={styles.input}
        />

        <FlatList
          data={categorias}
          horizontal
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setCategoriaSelecionada(item.nome)}
              style={[styles.categoria, { backgroundColor: item.cor }]}
            >
              <Text>{item.emoji} {item.nome}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },
  categoria: {
    padding: 10,
    borderRadius: 8,
    marginRight: 10
  }
})
