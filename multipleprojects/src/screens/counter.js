import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={styles.CounterText}>Counter: {counter}</Text>
      <View style={styles.ButtonView}>
        <Button onPress={() => setCounter(counter + 1)} title="Increment" />
        <Button onPress={() => setCounter(counter - 1)} title="Decrement" />
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  CounterText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});
