import React,{useState} from 'react';
import {View,Button, Text, TextInput, StyleSheet} from 'react-native';
const addNumbersScreen = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let totalValue = parseInt(number1) + parseInt(number2);
    setTotal(parseInt(totalValue));
  }
  return (
    <View>
      <Text style={styles.Header}>Adding Two Numbers</Text>
      <TextInput
        placeholder="First Number"
        type="number"
        value={number1}
        onChangeText={number1 => setNumber1(number1)}
      />
       <TextInput
        placeholder="Second Number"
        type="number"
        value={number2}
        onChangeText={number2 => setNumber2(number2)}
      />
      <Button onPress={calculateTotal} title='Add Two Numbers'/>
      <Text style={styles.BottomHeader}>Total: {total}</Text>
    </View>
  );
};

export default addNumbersScreen;
const styles = StyleSheet.create({
Header:
{
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold',
},
BottomHeader:
{
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold',
  marginTop: 10
}
});