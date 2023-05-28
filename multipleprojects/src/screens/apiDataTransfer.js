import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';
const apiTransferDataScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Ayush',response);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>apiTransferData</Text>
      <TouchableOpacity style={styles.custombuttonStyle} onPress={()=> navigation.navigate('apiGetData',{data})}>
        <Text style={styles.buttonTextStyle}>Navigated</Text>
      </TouchableOpacity>
    </View>
  );
};

export default apiTransferDataScreen;

const styles = StyleSheet.create({
  custombuttonStyle: {
    width: '50%',
    height: '18%',
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'skyblue',
    marginTop: 20,
  },
  buttonTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    color: 'black',
  },
});
