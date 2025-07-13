// components/InputFields.tsx
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


type Props = {
  item: string;
  quantidade: number;
  unidade: string;
  onChangeItem: (text: string) => void;
  onChangeQuantidade: (text: string) => void;
  onChangeUnidade: (value: string) => void;
};

export default function InputFields({
  item,
  quantidade,
  unidade,
  onChangeItem,
  onChangeQuantidade,
  onChangeUnidade,
}: Props) {
  return (
    <View style={styles.container}>
      {/* Nome do item */}
      {/* <TextInput
        style={styles.input}
        placeholder="Digite um item"
        placeholderTextColor="#aaa"
        value={item}
        onChangeText={onChangeItem}
      /> */}

      {/* Quantidade */}
      <TextInput
        style={styles.input}
        placeholder="Qtd"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={quantidade.toString()}
        onChangeText={onChangeQuantidade}
      />

      {/* Unidade de medida */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={unidade}
          onValueChange={onChangeUnidade}
          style={styles.picker}
        >
          <Picker.Item label="Un" value="Un" />
          <Picker.Item label="Kg" value="Kg" />
          <Picker.Item label="L" value="L" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    height: 48,
    borderColor: '#7450AC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: '#fff',
    backgroundColor: '#1e1e1e',
  },
  pickerContainer: {
    width: 90,
    height: 48,
    borderColor: '#7450AC',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
  },
  picker: {
    color: '#fff',
  },
});
