import React from 'react';
import Article from './Article';
import Home from './App';

import { Router, Scene, Stack,} from 'react-native-router-flux';


const Rutas = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} hideNavBar={true} initial />
      <Scene key="article" component={Article} navTransparent={true} headerTintColor="#FFF"/>
    </Stack>
  </Router>
);

export default Rutas;