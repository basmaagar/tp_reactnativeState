import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import AjouterNom from './ajouterNom';
import ListeNoms from './ListeNoms';   

const App = () => {
  const [noms, setNoms] = useState([]); 
  const handleAjouterNom = (nouveauNom) => {
      setNoms(prevNoms => [...prevNoms, nouveauNom.trim()]);
  };
  const handleSupprimerNom = (nomASupprimer) => {
    setNoms(prevNoms => prevNoms.filter(nom => nom !== nomASupprimer));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestionnaire de Noms</Text>
       <AjouterNom onAddNom={handleAjouterNom} />
      <View style={styles.listContainer}>
        <Text style={styles.subtitle}>Liste des noms existnats :</Text>
        <ListeNoms 
          noms={noms} 
          onDeleteNom={handleSupprimerNom} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 75,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },
  listContainer: {
      flex: 1,
      paddingHorizontal: 20,
  },
  emptyMessage: {
      textAlign: 'center',
      marginTop: 50,
      fontSize: 16,
      color: '#999'
  }
});

export default App;