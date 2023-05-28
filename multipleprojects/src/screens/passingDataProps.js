import {StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';
import React from 'react';

const passingDataProps = ({navigation}) => {
  const handleNavigate = () => {
    const data = {
      name: 'Ayush',
      age: 25,
      number: 8871606705,
      address: 'Shajapur'
    };
    navigation.navigate('childScreen', {data})
  };

  return (
    <View>
      <Text style={styles.Header}>PassingData Using Props</Text>
      <Button title="Go to childScreen" onPress={handleNavigate} />

      {/* How to make Custom Button  */}

      {/* <TouchableOpacity style={styles.custombuttonStyle}>
        <Text style={styles.buttonTextStyle} onPress={handleNavigate} >Navigate To Child</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default passingDataProps;

const styles = StyleSheet.create({
  Header: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
    fontWeight: '600',
  },
  custombuttonStyle:{
    width: '50%',
    height: '18%',
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'skyblue',
    marginTop:20,
  },
  buttonTextStyle:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight:'700',
    marginTop: 4,
    color: 'black'
  }
});
