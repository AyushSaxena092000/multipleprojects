import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const apiGetDataScreen = ({route}) => {
  const {data} = route.params;

  return (
    <View>
      <Text style={styles.Header}>ApiGetData</Text>
      <Text style={styles.subHeader}>Recived Api Data Id: {data[0].id}</Text>
      <Text style={styles.subHeader}>
        Recived Api Data title: {data[0].title}
      </Text>
      <Text style={styles.subHeader}>
        Recived Api Data Body: {data[0].body}
      </Text>
    </View>
  );
};

export default apiGetDataScreen;

const styles = StyleSheet.create({
  Header: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
    fontWeight: '600',
  },
  subHeader: {
    fontSize: 20,
    marginTop: 20,
    color: 'blue',
    fontWeight: '600',
  },
});
