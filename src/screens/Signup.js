import React, {Component} from 'react';
import {
  Alert,
  Keyboard,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import {autobind} from 'core-decorators';
import {observable} from 'mobx';
import {observer} from 'mobx-react/native';
import {Button} from 'react-native-elements';
import NavIcons from '../components/NavIcons';
const baseStyles = require('../baseStyles');
import Utils from '../Utils';

@autobind @observer
export default class Signup extends React.Component {
  /*static navigationOptions = ({navigation}) => ({
    title: 'Create Account',
    headerLeft: NavIcons.closeButton(navigation.goBack)
  });*/

  @observable email = '';
  @observable password = '';
  @observable loading = false;

  constructor(props) {
    super(props);
    this.store = this.props.screenProps.store;
  }
  
  onChangeEmail(text) {
    this.email = text;
  }

  onChangePassword(text) {
    this.password = text;
  }

  register() {
    if (!Utils.validateEmail(this.email) || !Utils.validatePassword(this.password)) {
      Alert.alert('Please enter a valid email or password.');
      return;
    }

    this.loading = true;
    this.store.createAccount(this.email, this.password).catch(error => {
      console.log(error);
      Alert.alert('Error', 'Please enter a valid email or password.');
      this.loading = false;
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={baseStyles.container}>
           <View style={styles.topSection}>
          <Image source={require('../../images/signUp.png')} style={styles.accountStateImg}/>
        </View>

          <View style={baseStyles.inputs}>
          <Text style={styles.textStyle}>Username</Text>
            <View style={baseStyles.inputContainer}>
              <TextInput
                style={[baseStyles.input, baseStyles.darkFont]}
                autoFocus={true}
                placeholder='Create your Username'
                placeholderTextColor='#AAA'
                autoCorrect={false}
                autoCapitalize='none'
                keyBoardType='email-address'
                returnKeyType='next'
                value={this.email}
                onChangeText={this.onChangeEmail}
              />
            </View>
            <Text style={styles.textStyle}>Password</Text>
            <View style={baseStyles.inputContainer}>
              <TextInput
                secureTextEntry={true}
                style={[baseStyles.input, baseStyles.darkFont]}
                placeholder='Create a Password'
                placeholderTextColor='#AAA'
                autoCorrect={false}
                autoCapitalize='none'
                returnKeyType='send'
                value={this.password}
                onChangeText={this.onChangePassword}
              />
            </View>
            <View style={{height: 60}}>
              <Button title='Create Account'
                      onPress={this.register}
                      backgroundColor='#31D8A0'
                      buttonStyle={styles.loginButton}/>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

  const styles = StyleSheet.create({

  loginButton:{
    alignSelf: 'flex-end',
    marginRight: 25,
    marginTop: 26,
    borderRadius: 50,
    backgroundColor: '#356CA5',
    width: 200,
    paddingTop: 10,
    paddingBottom: 10
  },

  topSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    left: 0,
    right: 0,
    top: 45,
    bottom: 0
  },

  textStyle:{
    fontFamily: 'SofiaProRegular',
    color: '#224870',
    fontSize: 18,
    marginTop: 20,
    marginHorizontal: 35,
  },
    accountStateImg: {
    width: 375,
    height: 70
  },
});