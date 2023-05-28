import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const generateCircle = () => {
  const [circles, setCircles] = useState([]);

  const addCircle = () => {
    // Generate a random color for the circle
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)})`;

    // Add the new circle to the circles array
    setCircles([...circles, color]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={addCircle}>
        <Text style={styles.buttonText}>Add Button</Text>
      </TouchableOpacity>

      {/* Render the circles */}
      {circles.map((color, index) => (
        <View key={index} style={[styles.circle, {backgroundColor: color}]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 0,
    marginTop: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
});

export default generateCircle;
