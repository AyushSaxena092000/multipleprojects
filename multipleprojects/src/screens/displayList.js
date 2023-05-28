import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

const DisplayListScreen = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      <Text style={{fontSize: 30}}>Flatlist with API Data</Text>
      {
        data.length?
        <FlatList data={data}
        renderItem={({item})=> <View style={{borderBottomColor:"orange", borderBottomWidth:1, padding:10}}>
        <Text style={{fontSize: 20, backgroundColor:"red"}}>{item.id}</Text>
        <Text style={{fontSize: 18}}>{item.title}</Text>
        <Text style={{fontSize: 18}}>{item.body}</Text>
        </View>}
        />: null
      }
    </View>
  );
};

export default DisplayListScreen;
