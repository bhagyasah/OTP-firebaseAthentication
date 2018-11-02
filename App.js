import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View, Text } from 'react-native';
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';


export default class App extends React.Component {

  state = { };

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDN1UImvjMdbTsQIcCv_sSJ7DVGbKajeEs',
      authDomain: 'authentication-168a9.firebaseapp.com',
      databaseURL: 'https://authentication-168a9.firebaseio.com',
      projectId: 'authentication-168a9',
      storageBucket: 'authentication-168a9.appspot.com',
      messagingSenderId: '325488281662',
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.textStyle}>
        <SignInForm />
        <SignUpForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
});
