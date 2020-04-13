import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Header from './components/UI/Header'
import Pomodoro from './components/Pomodoro'


export default function App() {
	return (
		<View style={styles.screen}>
      <Header title='Tracker Time' />
      <Pomodoro />
		</View>
	);
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
