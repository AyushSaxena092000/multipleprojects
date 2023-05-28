// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MapScreen from './src/screens/map';
import flatListScreen from './src/screens/flatList';
import CounterScreen from './src/screens/counter';
import addNumbersScreen from './src/screens/addNumbers';
import hideShowScreen from './src/screens/hideShow';
import dataBindingScreen from './src/screens/dataBinding';
import fetchApiDataScreen from './src/screens/fetchApiData';
import passingDataProps from './src/screens/passingDataProps';
import searchFilterScreen from './src/screens/searchFilter';
import DisplayListScreen from './src/screens/displayList';
import childScreen from './src/screens/childScreenGetData';
import apiTransferDataScreen from './src/screens/apiDataTransfer';
import apiGetDataScreen from './src/screens/apiGetData';
import generateCircle from './src/screens/generateCircle';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Flatlist" component={flatListScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="AddNumbers" component={addNumbersScreen} />
        <Stack.Screen name="HideShow" component={hideShowScreen} />
        <Stack.Screen name="dataBinding" component={dataBindingScreen} />
        <Stack.Screen name="fetchApiData" component={fetchApiDataScreen} />
        <Stack.Screen name="passingData" component={passingDataProps} />
        <Stack.Screen name="searchFilter" component={searchFilterScreen} />
        <Stack.Screen name="displayList" component={DisplayListScreen} />
        <Stack.Screen name="childScreen" component={childScreen} />
        <Stack.Screen
          name="apiDataTransfer"
          component={apiTransferDataScreen}
        />
        <Stack.Screen name="apiGetData" component={apiGetDataScreen} />
        <Stack.Screen name="generateCircleScreen" component={generateCircle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
