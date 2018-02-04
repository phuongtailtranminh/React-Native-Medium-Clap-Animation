import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ClapButton from "./components/clapButton";

export default class App extends React.Component {
  componentDidMount() {
    console.log('Mounted');
  }
  render() {
    return (
      <View style={styles.container}>
        <ClapButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fde37a'
  }
});
