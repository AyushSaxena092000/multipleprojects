import {StyleSheet, Text, View} from 'react-native';
import React, {useState,useEffect} from 'react';

const url = 'https://jsonplaceholder.typicode.com/users/1';

const fetchApiDataScreen = () => {
  const [userData, setUserData] = useState({});
  
  const getUserData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  // const addressData = userData.address
  // console.log('Ayush',addressData);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View>
      <Text style={styles.Header}>User Data</Text>
      <Text style={styles.ApiDataText}>Name: {userData.name}</Text>
      <Text style={styles.ApiDataText}>Website: {userData.website}</Text>
      <Text style={styles.ApiDataText}>Email: {userData.email}</Text>
      <Text style={styles.ApiDataText}>Phone: {userData.phone}</Text>
      
    </View>
  );
};

export default fetchApiDataScreen;

const styles = StyleSheet.create({
  Header: {
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  ApiDataText:{
    fontSize: 20,
    color: 'blue',
    marginTop: 10
  }
});
