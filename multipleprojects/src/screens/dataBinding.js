import { StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'

const dataBindingScreen = () => {
const [value,setValue] = useState("");

const handleChange = (value) => {
  setValue(value);
};
  return (
    <View>
      <Text style={styles.Header}>DataBinding in React native</Text>
      <View>
      <TextInput
      placeholder="Enter Your Text"
      value={value}
      onChangeText={handleChange}
      />
      </View>
      <Text style={styles.textBottom}>{value}</Text>
    </View>
  )
}

export default dataBindingScreen;

const styles = StyleSheet.create({
  Header:{
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red'
  },
  textBottom:{
    fontSize: 30,
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold'
  }
}) 