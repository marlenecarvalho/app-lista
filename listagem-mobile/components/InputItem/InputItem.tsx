// components/InputItem.tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function InputItem({ value, onChangeText }: Props) {
  return (
    <TextInput
      placeholder="Digite o nome do item"
      placeholderTextColor="#ccc"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    borderColor: '#7450AC',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
});
