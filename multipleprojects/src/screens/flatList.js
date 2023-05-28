import {
  View,
  Text,
  button,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const persons = [
  {
    id: '1',
    name: 'Earnest Green',
  },
  {
    id: '2',
    name: 'Winston Orn',
  },
  {
    id: '3',
    name: 'Carlton Collins',
  },
  {
    id: '4',
    name: 'Malcolm Labadie',
  },
  {
    id: '5',
    name: 'Michelle Dare',
  },
  {
    id: '6',
    name: 'Carlton Zieme',
  },
  {
    id: '7',
    name: 'Jessie Dickinson',
  },
  {
    id: '8',
    name: 'Julian Gulgowski',
  },
  {
    id: '9',
    name: 'Ellen Veum',
  },
  {
    id: '10',
    name: 'Lorena Rice',
  },

  {
    id: '11',
    name: 'Carlton Zieme',
  },
  {
    id: '12',
    name: 'Jessie Dickinson',
  },
  {
    id: '13',
    name: 'Julian Gulgowski',
  },
  {
    id: '14',
    name: 'Ellen Veum',
  },
  {
    id: '15',
    name: 'Lorena Rice',
  },
];
const flatListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={persons}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default flatListScreen;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'cyan',
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center',
  },
});
