import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.TopHeader}>
          Most Important Programs Asked in Machine test
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Text style={styles.q1}>1. use map </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Flatlist')}>
          <Text style={styles.q1}>2. use flatlist</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
          <Text style={styles.q1}>3. Counter app</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddNumbers')}>
          <Text style={styles.q1}>4. Add two number</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HideShow')}>
          <Text style={styles.q1}>5. Show hide element on screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('dataBinding')}>
          <Text style={styles.q1}>6. Two way data binding</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('fetchApiData')}>
          <Text style={styles.q1}>7. Fetch data from an API</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('passingData')}>
          <Text style={styles.q1}>8. Passing Data Using Props</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('searchFilter')}>
          <Text style={styles.q1}>9. Build Search filter in React-Native</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('displayList')}>
          <Text style={styles.q1}>10. Display a list in React</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('apiDataTransfer')}>
          <Text style={styles.q1}>11. Transfer Data Using Api</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('generateCircleScreen')}>
          <Text style={styles.q2}>
            12. Print a circle with a button and fill it with Random colors
          </Text>
        </TouchableOpacity>
        <Button
          style={styles.button}
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </ScrollView>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  TopHeader: {
    flex: 1,
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  q1: {
    color: 'black',
    fontSize: 20,
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginTop: 20,
  },
  q2: {
    color: 'black',
    fontSize: 20,
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
});
