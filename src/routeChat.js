import React, {Component} from 'react';
import {View} from 'react-native';
import {autobind} from 'core-decorators';
import {action, observable} from 'mobx';
import {observer} from 'mobx-react/native';
import {StackNavigator, navigationOptions} from 'react-navigation';
import Home from '../App';
import {Launch, Login, Signup, Chat, Settings} from './screens'
import Application from './Application';
import Store from './Store';

const Unauthenticated = StackNavigator({
  Application: {screen: Application},
  Login: {screen: Login},
  Signup: {screen: Signup}
}, { headerMode: 'none' },
{mode: 'modal'});

const Main = StackNavigator({
  Chat: {screen: Chat},
  Settings: {screen: Settings},
},
 {mode: 'modal'});

@autobind @observer
export default class routeChat extends Component {
  constructor(props) {
    super(props);
    this.store = new Store();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.store.isAuthenticated ? <Main screenProps={{store: this.store}}/> :
          <Unauthenticated screenProps={{store: this.store}}/>}
      </View>
    );
  }

}