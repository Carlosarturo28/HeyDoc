import React, {Component} from 'react';
import {View} from 'react-native';
import {autobind} from 'core-decorators';
import {action, observable} from 'mobx';
import {observer} from 'mobx-react/native';
import {StackNavigator, navigationOptions} from 'react-navigation';
import Home from '../App';
import {Launch, Login, Signup, Chat, Settings} from './screens'

import Store from './Store';

const UnauthenticatedNavigator = StackNavigator({
  Launch: {screen: Launch},
  Login: {screen: Login},
  Signup: {screen: Signup}
}, { headerMode: 'none' },
{mode: 'modal'});

const MainNavigator = StackNavigator({
  Home: {screen: Home},
  Settings: {screen: Settings},
}, { headerMode: 'none' },
{mode: 'modal'});

@autobind @observer
export default class Application extends Component {
  constructor(props) {
    super(props);
    this.store = new Store();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.store.isAuthenticated ? <MainNavigator screenProps={{store: this.store}}/> :
          <UnauthenticatedNavigator screenProps={{store: this.store}}/>}
      </View>
    );
  }

}