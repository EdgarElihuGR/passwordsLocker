import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const onPress = () => console.log("signin pressed");
  return (

    <View style={styles.mainContainer}>
      <View style={styles.centeredContainer, styles.brandHeader}>
        <Image source={require('./img/key-36pt-2x.png')}></Image>
        <Text>passwordsLocker</Text>
      </View>
      <View style={styles.centeredContainer, styles.signIn}>
        <Text>signIn</Text>
        <Text>hi there! nice to see you again.</Text>
      </View>
      <View style={styles.centeredContainer, styles.passwordInput}>
        <Text>password</Text>
        <TextInput secureTextEntry></TextInput>
      </View>
      <View style={styles.centeredContainer, styles.touchID}>
        <Image source={require('./img/key-36pt-2x.png')}></Image>
      </View>
      <View style={styles.actionButtonContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={onPress}
        >
          <Text style={styles.actionButtonTxt}>signin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    width: '100%'
  },
  brandHeader: {
    flex: 2,
    backgroundColor: 'skyblue'
  },
  signIn: {
    flex: 1,
    backgroundColor: 'steelblue'
  },
  passwordInput: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  touchID: {
    flex: 2,
    backgroundColor: 'skyblue'
  },
  actionButtonContainer: {
    flex: 1
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#DBE442',
    paddingTop: 16
  },
  actionButtonTxt: {
    fontSize: 20,
    textAlign: 'center'
  }
});
