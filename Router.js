import React from 'react';
import Article from './Article';
import Home from './App';
import Application from './src/Application'
import routeChat from './src/routeChat'
import Launch from './src/screens/Launch'
import Login from './src/screens/Login'
import Chat from './src/screens/Chat'

import { Router, Scene, Stack,} from 'react-native-router-flux';


const Rutas = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} hideNavBar={true} navTransparent={true} headerTintColor="#FFF" />
      <Scene key="launch" component={Launch} hideNavBar={true} />
      <Scene key="chat" component={Chat} hideNavBar={true}/>
      <Scene key="home" component={Home} hideNavBar={true}/>
      <Scene key="article" component={Article} navTransparent={true} headerTintColor="#FFF"/>
      <Scene key="application" component={Application} hideNavBar={true} initial/>
      <Scene key="routeChat" component={routeChat} hideNavBar={true}/>
    </Stack>
  </Router>
);

export default Rutas;