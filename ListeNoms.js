import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const ListeNoms = ({ noms, onDeleteNom }) => {
  const renderItem = ({ item }) => (
    <View style={styles.nomItem}>
      <Text style={styles.nomText}>{item}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDeleteNom(item)}
      >
        <Text style={styles.deleteText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={noms}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  nomItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  nomText: {
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ListeNoms;
