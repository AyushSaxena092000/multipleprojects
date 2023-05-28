import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

const hideShowScreen = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Button
        onPress={() => setShow(!show)}
        title={show ? 'Hide Element Below' : 'Show Element Below'}
      />
      {show && <Text style={styles.ToggleText}>Toggle Challenge</Text>}
    </View>
  );
};

export default hideShowScreen;

const styles = StyleSheet.create({
ToggleText: {
  marginTop:10,
  fontSize: 20,
  alignSelf: 'center'
}

});
