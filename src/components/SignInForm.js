import React, { Component } from 'react';
import axios from 'axios';
import firebase from 'firebase';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

const ROOT_URL = 'https://us-central1-authentication-168a9.cloudfunctions.net';

class SignInForm extends Component {

  state={ phone: '', code: ''};

  handleSubmit = async () => {
    try {
      const { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone, code: this.state.code
      });
      console.log('code', data.token);
      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <FormLabel>Enter Code</FormLabel>
        <FormInput
          value={this.state.code}
          onChangeText={code => this.setState({ code })}
        />
        <Button
          title="submit"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default SignInForm;
