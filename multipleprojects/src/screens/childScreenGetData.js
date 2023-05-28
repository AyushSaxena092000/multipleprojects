import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const childScreen = ({route}) => {
  const {data} = route.params;
  return (
    <View>
      <Text style ={styles.Header}>Child Screen</Text>
      <Text style ={styles.subHeaders}>Name: {data.name}</Text>
      <Text style ={styles.subHeaders}>age: {data.age}</Text>
      <Text style ={styles.subHeaders}>number: {data.number}</Text>
      <Text style ={styles.subHeaders}>address: {data.address}</Text>
    </View>
  )
}

export default childScreen;

const styles = StyleSheet.create({
  Header:{
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
    fontWeight: '600'
  },
  subHeaders:{
    fontSize: 20,
    marginTop: 20,
    fontWeight: '400'
  }
})