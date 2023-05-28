import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
const users = [
  {id: 1, name: 'John Doe'},
  {id: 2, name: 'Jane Doe'},
  {id: 3, name: 'Billy Doe'},
  {id: 4, name: 'Sunny Doe'},
  {id: 5, name: 'Munny Doe'},
  {id: 6, name: 'Namhiya Doe'},
];

const userItems = users.map(user => (
  <Text key={user.id}>
    {user.name}
  </Text>
));

const MapScreen = () => {
  return (
    <View>
      <Text style={styles.Header}>Mapped All The Datas</Text>
      <View style={styles.Header}>{userItems}</View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  Header: {
    color: 'red',
    fontSize: 22,
    alignSelf: 'center',
  },
  textStyle: {
    color: "#000",
  }
});
