import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Button} from 'react-native-elements';
import {autobind} from 'core-decorators';

@autobind
export default class Launch extends Component {
  static navigationOptions = {
    header: null
  };

  _showLogin() {
    this.props.navigation.navigate('Login');
  }

  _showSignup() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image source={require('../../images/heydoc.png')} style={styles.logo}/>
        </View>
        <View style={styles.bottomSection}>
          <Button title='Login'
                  onPress={this._showLogin}
                  backgroundColor='#2768AC'
                  buttonStyle={{height: 55, borderRadius: 50}}/>
          <Button title='Create Account'
                  onPress={this._showSignup}
                  color= '#2768AC'
                  backgroundColor='transparent'
                  buttonStyle={{height: 55, borderColor: '#2768AC', borderWidth: 1, borderStyle: 'solid', marginTop: 22, borderRadius: 50  }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logo: {
    width: "100%",
    height: 195
  },
  tagline: {
    marginTop: 5,
    fontSize: 28,
    fontWeight: '200',
    color: '#999'
  },
  bottomSection: {
    position: 'absolute',
    left: 80,
    right: 80,
    bottom: 0,
    top: 380,
    flex: 0,

    paddingBottom: 15
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 300
  },
});