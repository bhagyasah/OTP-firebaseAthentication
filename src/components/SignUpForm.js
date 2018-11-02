import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

const ROOT_URL = 'https://us-central1-authentication-168a9.cloudfunctions.net';

class SignUpForm extends Component {

  state={ phone: '' };

  handleSubmit = async () => {
    try {
      // await axios.post(`${ROOT_URL}/creatUser`, { phone: this.state.phone });
      const code = await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
      console.log('code', code.data);
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
        <Button
          title="submit"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default SignUpForm;
