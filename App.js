import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Header from './components/Header'


export default function App() {
	return (
		<View style={styles.screen}>
      <Header title='Tracker Time' />
      <View style={styles.containerApp}>
        <Text style={{ fontSize: 80, color: '#F03A27' }}>50:00</Text>
        <View style={styles.buttons}>
          <View style={styles.btn}>
            <Button color='#F03A27' title='PLAY' />
          </View>
          <View style={styles.btn}>
            <Button color='#F0A481' title='RESET' />
          </View>
        </View>
      </View>
		</View>
	);
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  containerApp: {
    flex: 1,
    backgroundColor: '#EFDAD7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  btn: {
    width: '20%'
  }
});
