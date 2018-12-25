import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Game from './component/game.js';
import Home from './component/home';
import Profile from './component/profile';

const Routes = () => (
   <Router>
      <Scene key = "root">
      <Scene key = "home" component = {Home} title = "Welcome" initial = {true} /> 

         <Scene key = "game" component = {Game} title = "Les't Play"  />
          <Scene key = "profile" component = {Profile} title = "Profile" /> 
      </Scene>
   </Router>
)
export default Routes