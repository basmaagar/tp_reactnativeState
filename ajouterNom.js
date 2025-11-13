import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AjouterNom = ({ onAddNom }) => {
  const [inputNom, setInputNom] = useState('');

  const handlePress = () => {
    onAddNom(inputNom);
    setInputNom('');
  };

  return (
    <View style={styles.inputArea}>
      <TextInput
        style={styles.input}
        placeholder="Entrez un nom..."
        value={inputNom}
        onChangeText={setInputNom}
      />
      <Button
        title="Ajouter un nom"
        onPress={handlePress}
        color="#0b6fda8b"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default AjouterNom;
